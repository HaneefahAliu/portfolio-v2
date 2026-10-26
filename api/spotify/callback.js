import { redis } from "../_lib/redis.js";

const REDIRECT_URI =
    "https://www.haneefahaliu.com/api/spotify/callback";

export default async function handler(req, res) {
    const { code, state, error } = req.query;

    // Prevent the callback from being cached
    res.setHeader("Cache-Control", "no-store");

    if (error) {
        return res.status(400).send(
        "Spotify authorization was cancelled or denied."
        );
    }

    // Validate the state generated in login.js
    const cookies = Object.fromEntries(
        (req.headers.cookie || "")
            .split(";")
            .map((cookie) => cookie.trim())
            .filter(Boolean)
            .map((cookie) => {
                const separator = cookie.indexOf("=");

            return [
          cookie.slice(0, separator),
          cookie.slice(separator + 1),
        ];
      })
  );

  const savedState = cookies.spotify_auth_state;

  // Clear the temporary authentication cookie
  res.setHeader(
    "Set-Cookie",
    "spotify_auth_state=; HttpOnly; Secure; SameSite=Lax; Path=/api/spotify; Max-Age=0"
  );

  if (
    !code ||
    !state ||
    !savedState ||
    state !== savedState
  ) {
    return res.status(400).send(
      "Spotify authentication failed: invalid state."
    );
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return res.status(500).send(
      "Spotify environment variables are missing."
    );
  }

  try {
    const credentials = Buffer.from(
      `${clientId}:${clientSecret}`
    ).toString("base64");

    const response = await fetch(
      "https://accounts.spotify.com/api/token",
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${credentials}`,
          "Content-Type":
            "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "authorization_code",
          code,
          redirect_uri: REDIRECT_URI,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error(
        "Spotify token exchange failed:",
        response.status,
        data.error
      );

      return res.status(500).send(
        "Spotify authorization failed. Check the server logs."
      );
    }
if (!data.refresh_token) {
  return res.status(500).send(
    "Spotify did not return a refresh token."
  );
}

await redis.set(
  "spotify:refresh_token",
  data.refresh_token
);

return res.status(200).send(
  "Spotify connected successfully! You can close this page."
);

await redis.set(
  "spotify:refresh_token",
  data.refresh_token
);

return res.status(200).send(
  "Spotify connected successfully! You can close this page."
);
   
  } catch (error) {
    console.error("Spotify callback error:", error);

    return res.status(500).send(
      "An error occurred while connecting Spotify."
    );
  }
}
