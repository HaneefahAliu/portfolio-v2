
import { redis } from "../_lib/redis.js";

const SPOTIFY_API = "https://api.spotify.com/v1";
const TOKEN_URL = "https://accounts.spotify.com/api/token";

const TOKEN_KEY = "spotify:refresh_token";
const LAST_KEY = "spotify:last_track";

function formatTrack(track, isPlaying = false) {
  if (!track || track.type !== "track") return null;

  return {
    id: track.id,
    title: track.name,
    artist: track.artists?.map(a => a.name).join(", ") || "",
    artistId: track.artists?.[0]?.id || null,
    artistImage: null,
    album: track.album?.name || "",
    albumArt: track.album?.images?.[0]?.url || null,
    spotifyUrl: track.external_urls?.spotify || null,
    isPlaying,
  };
}

async function getAccessToken() {
  const refreshToken = await redis.get(TOKEN_KEY);

  if (!refreshToken) {
    throw new Error("Spotify account is not connected");
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error("Spotify credentials are missing");
  }

  const credentials = Buffer.from(
    `${clientId}:${clientSecret}`
  ).toString("base64");

  const response = await fetch(TOKEN_URL, {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
    signal: AbortSignal.timeout(8000),
  });

  if (!response.ok) {
    throw new Error(
      `Spotify token refresh failed: ${response.status}`
    );
  }

  const data = await response.json();

  if (data.refresh_token) {
    await redis.set(TOKEN_KEY, data.refresh_token);
  }

  return data.access_token;
}

async function spotifyFetch(path, token) {
  return fetch(`${SPOTIFY_API}${path}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    signal: AbortSignal.timeout(8000),
  });
}

async function getLastTrack() {
  return (await redis.get(LAST_KEY)) || null;
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "GET") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const token = await getAccessToken();

    let track = null;

    const currentResponse = await spotifyFetch(
      "/me/player/currently-playing",
      token
    );

    if (currentResponse.status === 200) {
      const current = await currentResponse.json();

      track = formatTrack(
        current.item,
        current.is_playing === true &&
          current.currently_playing_type === "track"
      );
    } else if (currentResponse.status !== 204) {
      throw new Error(
        `Currently playing request failed: ${currentResponse.status}`
      );
    }

    if (!track) {
      const recentResponse = await spotifyFetch(
        "/me/player/recently-played?limit=1",
        token
      );

      if (recentResponse.ok) {
        const recent = await recentResponse.json();

        track = formatTrack(
          recent.items?.[0]?.track,
          false
        );
      }
    }

    const previous = await getLastTrack();

    if (!track && previous) {
      return res.status(200).json({
        ...previous,
        isPlaying: false,
      });
    }

    if (!track) {
      return res.status(200).json({
        isPlaying: false,
        track: null,
      });
    }

    if (
      previous?.artistId === track.artistId &&
      previous?.artistImage
    ) {
      track.artistImage = previous.artistImage;
    }

    if (track.artistId && !track.artistImage) {
      try {
        const artistResponse = await spotifyFetch(
          `/artists/${encodeURIComponent(track.artistId)}`,
          token
        );

        if (artistResponse.ok) {
          const artist = await artistResponse.json();

          track.artistImage =
            artist.images?.[0]?.url || null;
        }
      } catch (error) {
        console.error("Artist image:", error);
      }
    }

    await redis.set(LAST_KEY, {
      ...track,
      isPlaying: false,
    });

    return res.status(200).json(track);
  } catch (error) {
    console.error("Spotify API:", error);

    try {
      const previous = await getLastTrack();

      if (previous) {
        return res.status(200).json({
          ...previous,
          isPlaying: false,
        });
      }
    } catch (cacheError) {
      console.error("Spotify cache:", cacheError);
    }

    return res.status(503).json({
      isPlaying: false,
      track: null,
      error: "Spotify temporarily unavailable",
    });
  }
}
