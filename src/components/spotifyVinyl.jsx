
import { useEffect, useRef, useState } from "react";
import { ExternalLink, Music2 } from "lucide-react";

const POLL_INTERVAL = 10000;

export default function SpotifyVinyl() {
  const [track, setTrack] = useState(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const widgetRef = useRef(null);
  const controllerRef = useRef(null);
  const requestIdRef = useRef(0);

  // Fetch Spotify listening activity
  useEffect(() => {
    let active = true;

    async function updateTrack() {
      if (document.hidden) return;

      const requestId = ++requestIdRef.current;

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

        if (!active || requestId !== requestIdRef.current) {
          return;
        }

        if (data.id) {
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

    const onVisibilityChange = () => {
      if (!document.hidden) updateTrack();
    };

    const onFocus = () => updateTrack();

    document.addEventListener(
      "visibilitychange",
      onVisibilityChange
    );

    window.addEventListener("focus", onFocus);

    return () => {
      active = false;
      controllerRef.current?.abort();
      window.clearInterval(interval);

      document.removeEventListener(
        "visibilitychange",
        onVisibilityChange
      );

      window.removeEventListener("focus", onFocus);
    };
  }, []);

  // Close hover card on outside click / Escape
  useEffect(() => {
    function handleOutsideClick(event) {
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

    document.addEventListener(
      "pointerdown",
      handleOutsideClick
    );

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.removeEventListener(
        "pointerdown",
        handleOutsideClick
      );

      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  if (loading || !track) return null;

  return (
    <div
      ref={widgetRef}
      className="
        group fixed bottom-5 right-5 z-[100]
        flex flex-col items-end
        sm:bottom-8 sm:right-8
      "
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* ARTIST HOVER CARD */}
      <div
        className={`
          mb-4 w-[230px] origin-bottom-right
          rounded-2xl border border-black/10
          bg-white/95 p-3.5 text-black
          shadow-[0_12px_45px_rgba(0,0,0,0.14)]
          backdrop-blur-xl
          transition-all duration-300 ease-out
          ${
            open
              ? "visible translate-y-0 scale-100 opacity-100"
              : "invisible pointer-events-none translate-y-3 scale-95 opacity-0"
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
              {track.artist}
            </p>

            <p className="mt-1 truncate font-inter text-[11px] text-neutral-500">
              {track.title}
            </p>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between border-t border-black/10 pt-2.5">
          <span className="flex items-center gap-2 font-inter text-[9px] uppercase tracking-[0.13em] text-neutral-500">
            <span
              className={`h-[6px] w-[6px] rounded-full ${
                track.isPlaying
                  ? "bg-green-500"
                  : "bg-neutral-400"
              }`}
            />

            {track.isPlaying
              ? "Now playing"
              : "Last on rotation"}
          </span>

          {track.spotifyUrl && (
            <a
              href={track.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View track on Spotify"
              className="text-neutral-400 transition-colors hover:text-black"
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>

      {/* VINYL + ALBUM SLEEVE */}
      <button
        type="button"
        aria-label={`${track.title} by ${track.artist}. Show music details`}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="
          relative flex
          h-[100px] w-[120px]
          items-center justify-end
          cursor-pointer select-none
          focus-visible:outline focus-visible:outline-2
          focus-visible:outline-offset-4
          focus-visible:outline-black
          sm:h-[200px] sm:w-[230px]
        "
      >
        {/* ALBUM SLEEVE */}
        <div
          className={`
            absolute right-3 top-1/2
            h-[85px] w-[85px]
            -translate-y-1/2
            overflow-hidden rounded-[4px]
            bg-neutral-800 shadow-lg
            transition-transform duration-500 ease-out
            sm:right-5 sm:h-[170px] sm:w-[170px]
            ${
              open
                ? "-translate-x-5 sm:-translate-x-10"
                : "translate-x-0"
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
        </div>

        {/* VINYL RECORD */}
        <div
          className={`
            relative z-10 flex
            h-[100px] w-[100px]
            shrink-0 items-center justify-center
            rounded-full bg-[#111]
            shadow-[0_5px_22px_rgba(0,0,0,0.3)]
            transition-transform duration-500 ease-out
            sm:h-[200px] sm:w-[200px]
            ${
              open
                ? "translate-x-2 sm:translate-x-4"
                : "translate-x-0"
            }
          `}
        >
          {/* ROTATING RECORD */}
          <div
            className="
              relative flex h-full w-full
              items-center justify-center
              rounded-full
            "
            style={{
              animationName: "spotifyVinylSpin",
              animationDuration: "5s",
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
              animationPlayState: track.isPlaying
                ? "running"
                : "paused",
            }}
          >
            {/* Vinyl grooves */}
            <div className="absolute inset-[7%] rounded-full border border-white/10" />
            <div className="absolute inset-[13%] rounded-full border border-white/[0.08]" />
            <div className="absolute inset-[19%] rounded-full border border-white/[0.08]" />
            <div className="absolute inset-[25%] rounded-full border border-white/[0.06]" />

            {/* Light reflection */}
            <div
              className="
                pointer-events-none absolute inset-0
                rounded-full
                bg-[conic-gradient(transparent_0deg,rgba(255,255,255,0.08)_55deg,transparent_90deg,transparent_200deg,rgba(255,255,255,0.06)_250deg,transparent_280deg)]
              "
            />

            {/* ALBUM ARTWORK */}
            <div
              className="
                relative z-10
                h-[45%] w-[45%]
                overflow-hidden rounded-full
                border-2 border-neutral-700
                bg-neutral-600
              "
            >
              {track.albumArt && (
                <img
                  src={track.albumArt}
                  alt=""
                  className="h-full w-full object-cover"
                />
              )}

              {/* Center spindle */}
              <span
                className="
                  absolute left-1/2 top-1/2
                  h-[6px] w-[6px]
                  -translate-x-1/2 -translate-y-1/2
                  rounded-full bg-black
                  ring-1 ring-white/40
                "
              />
            </div>
          </div>
        </div>
      </button>

      {/* VINYL ANIMATION */}
      <style>{`
        @keyframes spotifyVinylSpin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .group [style*="spotifyVinylSpin"] {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
