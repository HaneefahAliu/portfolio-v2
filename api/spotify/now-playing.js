
import { redis } from "../_lib/redis.js";

const TOKEN_KEY = "spotify:refresh_token";
const LAST_TRACK_KEY = "spotify:last_track";

const SPOTIFY_API = "https://api.spotify.com/v1";

function formatTrack(track, isPlaying = false) {
  if (!track || track.type !== "track") return null;

  return {
    id: track.id,
    title: track.name,
    artist: track.artists?.map((a) => a.name).join(", ") || "",
    artistId: track.artists?.[0]?.id || null,
    album: track.album?.name || "",
    albumArt: track.album?.images?.[0]?.url || null,
    spotifyUrl: track.external_urls?.spotify || null,
    isPlaying,
  };
}

async function getAccessToken() {
  const refreshToken = await redis.get(TOKEN_KEY);

  if (!refreshToken) {
    throw new Error("Spotify has not been connected");
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  const credentials = Buffer.from(
    `${clientId}:${clientSecret}`
  ).toString("base64");

  const response = await fetch(
    "https://accounts.spotify.com/api/token",
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      }),
    }
  );

  if (!response.ok) {
    throw new Error(
      `Spotify token refresh failed: ${response.status}`
    );
  }

  const data = await response.json();

  // Spotify may rotate refresh tokens.
  if (data.refresh_token) {
    await redis.set(TOKEN_KEY, data.refresh_token);
  }

  return data.access_token;
}

async function spotifyFetch(path, accessToken) {
  return fetch(`${SPOTIFY_API}${path}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "GET") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const accessToken = await getAccessToken();

    const currentResponse = await spotifyFetch(
      "/me/player/currently-playing",
      accessToken
    );

    if (!currentResponse.ok && currentResponse.status !== 204) {
      throw new Error(
        `Currently playing request failed: ${currentResponse.status}`
      );
    }

    if (currentResponse.status === 200) {
      const current = await currentResponse.json();
      const track = formatTrack(
        current.item,
        current.is_playing === true
      );

      if (track) {
        await redis.set(LAST_TRACK_KEY, {
          ...track,
          isPlaying: false,
        });

        return res.status(200).json(track);
      }
    }

    // Spotify isn't reporting a current track.
    // Fall back to the last cached track.
    let lastTrack = await redis.get(LAST_TRACK_KEY);

    // If Redis is empty, try Spotify's recent history.
    if (!lastTrack) {
      const recentResponse = await spotifyFetch(
        "/me/player/recently-played?limit=1",
        accessToken
      );

      if (recentResponse.ok) {
        const recent = await recentResponse.json();

        lastTrack = formatTrack(
          recent.items?.[0]?.track,
          false
        );

        if (lastTrack) {
          await redis.set(LAST_TRACK_KEY, lastTrack);
        }
      }
    }

    if (lastTrack) {
      return res.status(200).json({
        ...lastTrack,
        isPlaying: false,
      });
    }

    return res.status(200).json({
      isPlaying: false,
      track: null,
    });
  } catch (error) {
    console.error("Spotify endpoint error:", error);

    // Still show the last track if Spotify is temporarily unavailable.
    try {
      const cached = await redis.get(LAST_TRACK_KEY);

      if (cached) {
        return res.status(200).json({
          ...cached,
          isPlaying: false,
        });
      }
    } catch (cacheError) {
      console.error("Spotify cache error:", cacheError);
    }

    return res.status(503).json({
      isPlaying: false,
      track: null,
      error: "Listening activity temporarily unavailable",
    });
  }
}
