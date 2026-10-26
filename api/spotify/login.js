
import crypto from "node:crypto";

const REDIRECT_URI =
  "https://www.haneefahaliu.com/api/spotify/callback";

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "GET") {
    return res.status(405).send("Method not allowed");
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const setupKey = process.env.SPOTIFY_SETUP_KEY;
  const providedKey = req.query.key;

  if (!clientId || !setupKey) {
    return res.status(500).send(
      "Spotify configuration is incomplete."
    );
  }

  const provided = Buffer.from(
    typeof providedKey === "string" ? providedKey : ""
  );
  const expected = Buffer.from(setupKey);

  if (
    provided.length !== expected.length ||
    !crypto.timingSafeEqual(provided, expected)
  ) {
    return res.status(403).send("Unauthorized");
  }

  const state = crypto.randomBytes(32).toString("hex");

  const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
  ].join(" ");

  const params = new URLSearchParams({
    response_type: "code",
    client_id: clientId,
    redirect_uri: REDIRECT_URI,
    scope: scopes,
    state,
    show_dialog: "true",
  });

  res.setHeader(
    "Set-Cookie",
    `spotify_auth_state=${state}; HttpOnly; Secure; SameSite=Lax; Path=/api/spotify; Max-Age=600`
  );

  return res.redirect(
    `https://accounts.spotify.com/authorize?${params}`
  );
}
