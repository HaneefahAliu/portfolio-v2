
import { redis } from "../_lib/redis.js";

const TOKEN_KEY = "spotify:refresh_token";
const LAST_KEY = "spotify:last_track";

const API = "https://api.spotify.com/v1";

function formatTrack(track, isPlaying = false) {
  if (!track || track.type !== "track") return null;

  return {
    id: track.id,
    title: track.name,
    artist: track.artists?.map((a) => a.name).join(", ") || "",
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
    throw new Error("Spotify is not connected");
  }

  const credentials = Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
  ).toString("base64");

  const response = await fetch(
    "https://accounts.spotify.com/api/token",
    {
      method: "POST",
      cache: "no-store",
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
    throw new Error(`Token refresh: ${response.status}`);
  }

  const data = await response.json();

  if (data.refresh_token) {
    await redis.set(TOKEN_KEY, data.refresh_token);
  }

  return data.access_token;
}

async function spotifyFetch(path, token) {
  return fetch(`${API}${path}`, {
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "private, no-store, max-age=0");
  res.setHeader("CDN-Cache-Control", "no-store");
  res.setHeader("Vercel-CDN-Cache-Control", "no-store");

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const token = await getAccessToken();

    const currentResponse = await spotifyFetch(
      "/me/player/currently-playing",
      token
    );

    if (
      !currentResponse.ok &&
      currentResponse.status !== 204
    ) {
      throw new Error(
        `Currently playing: ${currentResponse.status}`
      );
    }

    let track = null;

    if (currentResponse.status === 200) {
      const current = await currentResponse.json();

      track = formatTrack(
        current.item,
        current.is_playing === true &&
          current.currently_playing_type === "track"
      );
    }

    // No current track? Check recently played history.
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

    const previous = await redis.get(LAST_KEY);

    if (track) {
      // Preserve an existing artist photo for the same artist.
      if (
        previous?.artistId === track.artistId &&
        previous?.artistImage
      ) {
        track.artistImage = previous.artistImage;
      }

      // Artist photo is optional; a failed request
      // must never break the music widget.
      if (track.artistId && !track.artistImage) {
        try {
          const artistResponse = await spotifyFetch(
            `/artists/${encodeURIComponent(track.artistId)}`,
            token
          );

          if (artistResponse.ok) {
            const artist = await artistResponse.json();
            track.artistImage = artist.images?.[0]?.url || null;
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
    }

    if (previous) {
      return res.status(200).json({
        ...previous,
        isPlaying: false,
      });
    }

    return res.status(200).json({
      isPlaying: false,
      track: null,
    });
  } catch (error) {
    console.error("Spotify status error:", error);

    try {
      const previous = await redis.get(LAST_KEY);

      if (previous) {
        return res.status(200).json({
          ...previous,
          isPlaying: false,
        });
      }
    } catch (cacheError) {
      console.error("Redis fallback:", cacheError);
    }

    return res.status(503).json({
      isPlaying: false,
      track: null,
      error: "Spotify temporarily unavailable",
    });
  }
}
