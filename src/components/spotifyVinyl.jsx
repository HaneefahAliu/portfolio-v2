
import { useEffect, useRef, useState } from "react";
import { ExternalLink, Music2 } from "lucide-react";

const POLL_INTERVAL = 10000;

export default function SpotifyVinyl() {
  const [track, setTrack] = useState(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const widgetRef = useRef(null);
  const controllerRef = useRef(null);

  // Keep Spotify data updated
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

        if (!response.ok) {
          throw new Error(`Spotify API: ${response.status}`);
        }

        const data = await response.json();

        if (active && data.id) {
          setTrack(data);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Spotify widget:", error);
        }
      } finally {
        if (active) setLoading(false);
      }
    }

    updateTrack();

    const interval = window.setInterval(
      updateTrack,
      POLL_INTERVAL
    );

    const handleVisibility = () => {
      if (!document.hidden) updateTrack();
    };

    window.addEventListener("focus", updateTrack);
    document.addEventListener(
      "visibilitychange",
      handleVisibility
    );

    return () => {
      active = false;
      controllerRef.current?.abort();
      clearInterval(interval);

      window.removeEventListener("focus", updateTrack);
      document.removeEventListener(
        "visibilitychange",
        handleVisibility
      );
    };
  }, []);

  // Close mobile card when tapping outside
  useEffect(() => {
    function handleOutside(event) {
      if (
        widgetRef.current &&
        !widgetRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", handleOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener(
        "pointerdown",
        handleOutside
      );
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  if (loading || !track) return null;

  const isPlaying = track.isPlaying === true;

  return (
    <div
      ref={widgetRef}
      className="
        fixed bottom-5 right-4 z-[100]
        flex flex-col items-end
        sm:bottom-8 sm:right-8
      "
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* SONG DETAILS CARD */}
      <div
        className={`
          absolute bottom-full right-0 mb-4
          w-[230px] rounded-2xl
          border border-black/10 bg-white/95
          p-3.5 text-black
          shadow-[0_12px_40px_rgba(0,0,0,0.13)]
          backdrop-blur-xl
          transition-all duration-300
          ${
            open
              ? "visible translate-y-0 opacity-100"
              : "invisible pointer-events-none translate-y-2 opacity-0"
          }
        `}
      >
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full bg-neutral-100">
            {track.artistImage || track.albumArt ? (
              <img
                src={track.artistImage || track.albumArt}
                alt={track.artist}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <Music2 size={18} />
              </div>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate font-plusJakarta text-[13px] font-semibold">
              {track.title}
            </p>

            <p className="mt-1 truncate font-inter text-[11px] text-neutral-500">
              {track.artist}
            </p>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between border-t border-black/10 pt-2.5">
          <span className="flex items-center gap-2 font-inter text-[9px] uppercase tracking-widest text-neutral-500">
            <span
              className={`h-[6px] w-[6px] rounded-full ${
                isPlaying
                  ? "bg-green-500"
                  : "bg-neutral-400"
              }`}
            />

            {isPlaying
              ? "Now playing"
              : "Last on rotation"}
          </span>

          {track.spotifyUrl && (
            <a
              href={track.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open track on Spotify"
              className="text-neutral-400 transition-colors hover:text-black"
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>

      {/* TURNTABLE + SLIDING SLEEVE */}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={`${track.title} by ${track.artist}. Show listening details`}
        aria-expanded={open}
        className="
          relative block h-[145px] w-[190px]
          cursor-pointer select-none
          bg-transparent p-0
          focus-visible:outline focus-visible:outline-2
          focus-visible:outline-offset-4
          focus-visible:outline-black
          sm:h-[210px] sm:w-[270px]
        "
      >
        {/* ALBUM SLEEVE */}
        <div
          className={`
            absolute left-[15%] top-1/2
            z-0 h-[75%] aspect-square
            -translate-y-1/2 overflow-hidden
            rounded-[3px] bg-neutral-800
            shadow-[0_5px_15px_rgba(0,0,0,0.2)]
            transition-transform duration-700 ease-out
            ${
              open
                ? "-translate-x-[30%]"
                : "translate-x-[8%]"
            }
          `}
        >
          {track.albumArt && (
            <img
              src={track.albumArt}
              alt=""
              className="h-full w-full object-cover"
            />
          )}

          <div className="pointer-events-none absolute inset-0 border border-white/20" />
        </div>

        {/* TURNTABLE BODY */}
        <div
          className="
            absolute right-0 top-1/2 z-10
            aspect-square h-full
            -translate-y-1/2
            rounded-[17px]
            border border-[#d6c8b6]
            bg-gradient-to-br
            from-[#fffaf0] via-[#eee5d8] to-[#cbbba6]
            shadow-[0_10px_25px_rgba(40,30,20,0.23),inset_2px_2px_5px_rgba(255,255,255,0.85),inset_-3px_-3px_7px_rgba(80,60,40,0.12)]
            sm:rounded-[24px]
          "
        >
          {/* Speaker holes */}
          <div
            className="
              absolute left-[8%] top-[9%]
              grid grid-cols-3 gap-[3px]
              sm:gap-[5px]
            "
          >
            {Array.from({ length: 12 }).map((_, index) => (
              <span
                key={index}
                className="h-[2px] w-[2px] rounded-full bg-[#74695e] sm:h-[3px] sm:w-[3px]"
              />
            ))}
          </div>

          {/* Record platter */}
          <div
            className="
              absolute left-1/2 top-1/2
              h-[79%] w-[79%]
              -translate-x-1/2 -translate-y-1/2
              rounded-full bg-[#292929]
              shadow-[0_2px_7px_rgba(0,0,0,0.35)]
            "
          >
            {/* Spinning vinyl */}
            <div
              className="relative h-full w-full rounded-full bg-[#101010]"
              style={{
                animation: "miniTurntableSpin 5s linear infinite",
                animationPlayState: isPlaying
                  ? "running"
                  : "paused",
              }}
            >
              {/* Grooves */}
              {[7, 13, 19, 25, 31].map((inset) => (
                <div
                  key={inset}
                  className="absolute rounded-full border border-white/10"
                  style={{
                    inset: `${inset}%`,
                  }}
                />
              ))}

              {/* Reflective sheen */}
              <div
                className="
                  absolute inset-0 rounded-full
                  bg-[conic-gradient(transparent_0deg,rgba(255,255,255,0.09)_60deg,transparent_100deg,transparent_200deg,rgba(255,255,255,0.05)_260deg,transparent_300deg)]
                "
              />

              {/* Center album artwork */}
              <div
                className="
                  absolute left-1/2 top-1/2
                  h-[40%] w-[40%]
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

          {/* Tonearm assembly */}
          <div
            className="
              absolute right-[8%] top-[8%]
              z-20 h-[66%] w-[39%]
              origin-[85%_12%]
              transition-transform duration-700 ease-out
            "
            style={{
              transform: isPlaying
                ? "rotate(0deg)"
                : "rotate(10deg)",
            }}
          >
            {/* Tonearm pivot */}
            <div
              className="
                absolute right-0 top-0 z-20
                h-[23%] w-[38%]
                rounded-full border border-[#8b8177]
                bg-gradient-to-br from-white via-[#bcb6ad] to-[#6f6b65]
                shadow-[0_2px_4px_rgba(0,0,0,0.3)]
              "
            >
              <div className="absolute inset-[28%] rounded-full border border-[#827c74] bg-[#d8d4ce]" />
            </div>

            {/* Main tonearm shaft */}
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

          {/* Playback light */}
          <div className="absolute bottom-[9%] left-[9%] flex items-center gap-1">
            <span
              className={`
                h-[7px] w-[7px]
                rounded-full border border-black/10
                transition-all duration-500
                sm:h-[10px] sm:w-[10px]
                ${
                  isPlaying
                    ? "bg-[#29e566] shadow-[0_0_8px_3px_rgba(41,229,102,0.45)]"
                    : "bg-[#7d9982]"
                }
              `}
            />
          </div>

          {/* Volume knob */}
          <div
            className="
              absolute bottom-[7%] right-[8%]
              h-[17%] w-[17%]
              rounded-full border border-[#9c9084]
              bg-gradient-to-br from-white via-[#c8c0b5] to-[#8e857b]
              shadow-[0_2px_4px_rgba(0,0,0,0.3)]
            "
          >
            <div className="absolute inset-[22%] rounded-full border border-[#a49a8e] bg-gradient-to-br from-[#f7f3ec] to-[#a69d91]" />
            <span className="absolute left-1/2 top-[12%] h-[20%] w-[2px] -translate-x-1/2 rounded-full bg-[#756e65]" />
          </div>

          {/* Tiny personal branding */}
          <span className="absolute right-[8%] top-[3%] font-plusJakarta text-[8px] font-bold tracking-tight text-[#a49a8d] sm:text-[10px]">
            ha.
          </span>
        </div>
      </button>

      {/* Scoped animation */}
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
