
import { useEffect, useRef, useState } from "react";
import { ExternalLink, Music2 } from "lucide-react";

const POLL_INTERVAL = 10000;

export default function SpotifyVinyl() {
  const [track, setTrack] = useState(null);
  const [open, setOpen] = useState(false);

  const controllerRef = useRef(null);

  useEffect(() => {
    let active = true;

    async function updateTrack() {
      if (document.hidden) return;

      controllerRef.current?.abort();

      const controller = new AbortController();
      controllerRef.current = controller;

      try {
        const response = await fetch(
          `/api/spotify/now-playing?t=${Date.now()}`,
          {
            cache: "no-store",
            signal: controller.signal,
          }
        );

        if (!response.ok) return;

        const data = await response.json();

        if (active && data.id) {
          setTrack(data);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Spotify widget:", error);
        }
      }
    }

    updateTrack();

    const interval = setInterval(
      updateTrack,
      POLL_INTERVAL
    );

    const handleVisibility = () => {
      if (!document.hidden) updateTrack();
    };

    document.addEventListener(
      "visibilitychange",
      handleVisibility
    );

    window.addEventListener("focus", updateTrack);

    return () => {
      active = false;
      controllerRef.current?.abort();
      clearInterval(interval);

      document.removeEventListener(
        "visibilitychange",
        handleVisibility
      );

      window.removeEventListener("focus", updateTrack);
    };
  }, []);

  if (!track) return null;

  const isPlaying = track.isPlaying === true;

  return (
    <div
      className="
        fixed bottom-5 right-4 z-[100]
        flex flex-col items-end
        sm:bottom-8 sm:right-8
      "
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* ALWAYS-VISIBLE MUSIC CARD */}
      <div
        className="
          mb-3 w-[190px]
          rounded-xl border border-black/10
          bg-white/95 p-2.5 text-black
          shadow-[0_8px_28px_rgba(0,0,0,0.12)]
          backdrop-blur-xl
        "
      >
        <div className="flex items-center gap-2.5">
          <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full bg-neutral-100">
            {track.artistImage || track.albumArt ? (
              <img
                src={track.artistImage || track.albumArt}
                alt={track.artist}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <Music2 size={15} />
              </div>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate font-plusJakarta text-[11px] font-semibold">
              {track.title}
            </p>

            <p className="mt-0.5 truncate font-inter text-[10px] text-neutral-500">
              {track.artist}
            </p>
          </div>

          {track.spotifyUrl && (
            <a
              href={track.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open track on Spotify"
              className="shrink-0 text-neutral-400 transition-colors hover:text-black"
            >
              <ExternalLink size={12} />
            </a>
          )}
        </div>

        <div className="mt-2 flex items-center gap-1.5 border-t border-black/10 pt-1.5">
          <span
            className={`h-[5px] w-[5px] rounded-full ${
              isPlaying
                ? "bg-green-500"
                : "bg-neutral-400"
            }`}
          />

          <span className="font-inter text-[8px] uppercase tracking-[0.13em] text-neutral-500">
            {isPlaying
              ? "Now playing"
              : "Last on rotation"}
          </span>
        </div>
      </div>

      {/* TURNTABLE + ALBUM SLEEVE */}
      <div
        className="
          relative h-[145px] w-[195px]
          sm:h-[200px] sm:w-[270px]
        "
      >
        {/* SLIDING ALBUM SLEEVE */}
        <div
          className={`
            absolute bottom-[8%] left-[8%] z-0
            aspect-square h-[80%]
            overflow-hidden rounded-[3px]
            bg-neutral-800
            shadow-[0_5px_15px_rgba(0,0,0,0.18)]
            transition-transform duration-700 ease-out
            ${
              open
                ? "-translate-x-[30%]"
                : "translate-x-[5%]"
            }
          `}
        >
          {track.albumArt && (
            <img
              src={track.albumArt}
              alt={`${track.album} album cover`}
              className="h-full w-full object-cover"
            />
          )}
        </div>

        {/* CREAM TURNTABLE BODY */}
        <div
          className="
            absolute right-0 top-0 z-10
            aspect-square h-full
            overflow-hidden rounded-[18px]
            border border-[#d3c6b5]
            bg-gradient-to-br
            from-[#fffaf0] via-[#e9dfd1] to-[#c7b6a2]
            shadow-[0_10px_28px_rgba(40,30,20,0.22),inset_2px_2px_6px_rgba(255,255,255,0.9)]
            sm:rounded-[24px]
          "
        >
          {/* SPEAKER HOLES */}
          <div className="absolute left-[8%] top-[8%] grid grid-cols-3 gap-[3px] sm:gap-[4px]">
            {Array.from({ length: 12 }).map((_, index) => (
              <span
                key={index}
                className="h-[2px] w-[2px] rounded-full bg-[#756b60] sm:h-[3px] sm:w-[3px]"
              />
            ))}
          </div>

          {/* RECORD PLATTER */}
          <div
            className="
              absolute left-1/2 top-1/2
              h-[76%] w-[76%]
              -translate-x-1/2 -translate-y-1/2
              rounded-full bg-[#242424]
              shadow-[0_3px_8px_rgba(0,0,0,0.4)]
            "
          >
            {/* SPINNING VINYL */}
            <div
              className="relative h-full w-full rounded-full bg-[#101010]"
              style={{
                animation: "miniTurntableSpin 5s linear infinite",
                animationPlayState: isPlaying
                  ? "running"
                  : "paused",
              }}
            >
              {[7, 13, 19, 25, 31].map((inset) => (
                <div
                  key={inset}
                  className="absolute rounded-full border border-white/10"
                  style={{ inset: `${inset}%` }}
                />
              ))}

              <div
                className="
                  absolute inset-0 rounded-full
                  bg-[conic-gradient(transparent_0deg,rgba(255,255,255,0.09)_60deg,transparent_100deg,transparent_200deg,rgba(255,255,255,0.05)_260deg,transparent_300deg)]
                "
              />

              {/* CENTER LABEL */}
              <div
                className="
                  absolute left-1/2 top-1/2
                  h-[42%] w-[42%]
                  -translate-x-1/2 -translate-y-1/2
                  overflow-hidden rounded-full
                  border-2 border-[#333]
                  bg-neutral-700
                "
              >
                {track.albumArt && (
                  <img
                    src={track.albumArt}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                )}

                <span
                  className="
                    absolute left-1/2 top-1/2
                    h-[5px] w-[5px]
                    -translate-x-1/2 -translate-y-1/2
                    rounded-full bg-black
                    ring-1 ring-white/50
                  "
                />
              </div>
            </div>
          </div>

          {/* SILVER TONEARM */}
          <div
            className="
              absolute right-[8%] top-[8%] z-20
              h-[66%] w-[39%]
              origin-[85%_12%]
              transition-transform duration-700 ease-out
            "
            style={{
              transform: isPlaying
                ? "rotate(0deg)"
                : "rotate(10deg)",
            }}
          >
            <div
              className="
                absolute right-0 top-0 z-20
                h-[23%] w-[38%]
                rounded-full border border-[#8b8177]
                bg-gradient-to-br
                from-white via-[#bcb6ad] to-[#6f6b65]
                shadow-[0_2px_4px_rgba(0,0,0,0.3)]
              "
            >
              <div className="absolute inset-[28%] rounded-full border border-[#827c74] bg-[#d8d4ce]" />
            </div>

            <svg
              viewBox="0 0 80 130"
              className="absolute inset-0 h-full w-full overflow-visible drop-shadow-[1px_2px_1px_rgba(0,0,0,0.35)]"
              aria-hidden="true"
            >
              <path
                d="M 66 13 L 58 47 L 27 96"
                fill="none"
                stroke="#77716c"
                strokeWidth="9"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                d="M 66 13 L 58 47 L 27 96"
                fill="none"
                stroke="#e6e1da"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                d="M 21 90 L 34 98 L 28 112 L 15 104 Z"
                fill="#e5dfd6"
                stroke="#716b65"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          {/* GREEN PLAYBACK INDICATOR */}
          <div
            className={`
              absolute bottom-[9%] left-[9%]
              h-[7px] w-[7px] rounded-full
              border border-black/10
              transition-all duration-500
              sm:h-[10px] sm:w-[10px]
              ${
                isPlaying
                  ? "bg-[#29e566] shadow-[0_0_8px_3px_rgba(41,229,102,0.45)]"
                  : "bg-[#829484]"
              }
            `}
          />

          {/* VOLUME KNOB */}
          <div
            className="
              absolute bottom-[7%] right-[8%]
              h-[17%] w-[17%]
              rounded-full border border-[#9c9084]
              bg-gradient-to-br
              from-white via-[#c8c0b5] to-[#8e857b]
              shadow-[0_2px_4px_rgba(0,0,0,0.3)]
            "
          >
            <div className="absolute inset-[22%] rounded-full border border-[#a49a8e] bg-gradient-to-br from-[#f7f3ec] to-[#a69d91]" />

            <span className="absolute left-1/2 top-[12%] h-[20%] w-[2px] -translate-x-1/2 rounded-full bg-[#756e65]" />
          </div>

          {/* BRAND DETAIL */}
          <span className="absolute right-[8%] top-[3%] font-plusJakarta text-[8px] font-bold tracking-tight text-[#a49a8d] sm:text-[10px]">
            ha.
          </span>
        </div>
      </div>

      <style>{`
        @keyframes miniTurntableSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (prefers-reduced-motion: reduce) {
          [style*="miniTurntableSpin"] {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
