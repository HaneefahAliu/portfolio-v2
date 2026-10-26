
import { useEffect, useRef, useState } from "react";
import { Music2, ExternalLink } from "lucide-react";

export default function SpotifyVinyl() {
  const [track, setTrack] = useState(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const widgetRef = useRef(null);

  useEffect(() => {
    let mounted = true;

    const fetchTrack = async () => {
      try {
        const response = await fetch(
          "/api/spotify/now-playing",
          { cache: "no-store" }
        );

        if (!response.ok) return;

        const data = await response.json();

        if (mounted && data.id) {
          setTrack(data);
        }
      } catch (error) {
        console.error("Spotify widget:", error);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchTrack();

    // Check for song changes every 30 seconds.
    const interval = setInterval(fetchTrack, 30000);

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const closeOnOutsideClick = (event) => {
      if (
        widgetRef.current &&
        !widgetRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener(
      "pointerdown",
      closeOnOutsideClick
    );

    return () => {
      document.removeEventListener(
        "pointerdown",
        closeOnOutsideClick
      );
    };
  }, []);

  if (loading || !track) return null;

  return (
    <div
      ref={widgetRef}
      className="group fixed bottom-5 right-5 z-40 flex flex-col items-end sm:bottom-7 sm:right-7"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* HOVER CARD */}
      <div
        className={`
          mb-3 w-[210px] origin-bottom-right
          rounded-xl border border-black/10
          bg-white/95 p-3 text-black
          shadow-[0_10px_35px_rgba(0,0,0,0.12)]
          backdrop-blur-xl
          transition-all duration-300 ease-out
          ${
            open
              ? "visible translate-y-0 scale-100 opacity-100"
              : "invisible translate-y-2 scale-95 opacity-0"
          }
        `}
      >
        <div className="flex items-center gap-3">
          {track.albumArt ? (
            <img
              src={track.albumArt}
              alt={`${track.album} album cover`}
              className="h-12 w-12 shrink-0 rounded-md object-cover"
            />
          ) : (
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-gray-100">
              <Music2 size={20} />
            </div>
          )}

          <div className="min-w-0 flex-1">
            <p className="truncate font-plusJakarta text-xs font-semibold">
              {track.artist}
            </p>

            <p className="mt-1 truncate font-inter text-[11px] text-gray-500">
              {track.title}
            </p>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between border-t border-black/10 pt-2">
          <span className="flex items-center gap-1.5 font-inter text-[9px] uppercase tracking-widest text-gray-500">
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                track.isPlaying
                  ? "bg-green-500"
                  : "bg-gray-400"
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
              aria-label="Open song on Spotify"
              className="text-gray-500 transition-colors hover:text-black"
            >
              <ExternalLink size={13} />
            </a>
          )}
        </div>
      </div>

      {/* VINYL + SLEEVE */}
      <button
        type="button"
        aria-label={`Spotify: ${track.title} by ${track.artist}`}
        aria-expanded={open}
        onClick={() => setOpen((previous) => !previous)}
        className="relative flex h-[62px] w-[74px] items-center justify-end outline-none sm:h-[72px] sm:w-[86px]"
      >
        {/* Subtle album sleeve */}
        <div
          className={`
            absolute right-2 top-1/2 h-[51px] w-[51px]
            -translate-y-1/2 overflow-hidden
            rounded-[3px] bg-neutral-800
            shadow-md transition-transform duration-500
            sm:h-[59px] sm:w-[59px]
            ${
              open
                ? "-translate-x-4"
                : "translate-x-0"
            }
          `}
        >
          {track.albumArt && (
            <img
              src={track.albumArt}
              alt=""
              className="h-full w-full object-cover opacity-80"
            />
          )}
        </div>

        {/* Spinning vinyl */}
        <div
          className={`
            relative z-10 flex h-[62px] w-[62px]
            shrink-0 items-center justify-center
            rounded-full bg-[#111]
            shadow-[0_3px_14px_rgba(0,0,0,0.25)]
            transition-transform duration-500
            sm:h-[72px] sm:w-[72px]
            ${
              open
                ? "translate-x-2"
                : "translate-x-0"
            }
          `}
        >
          <div
            className={`
              relative flex h-full w-full
              items-center justify-center rounded-full
              ${track.isPlaying ? "animate-spin" : ""}
            `}
            style={{
              animationDuration: "5s",
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
            }}
          >
            {/* Vinyl grooves */}
            <div className="absolute inset-[6px] rounded-full border border-white/10" />
            <div className="absolute inset-[11px] rounded-full border border-white/10" />
            <div className="absolute inset-[16px] rounded-full border border-white/10" />

            {/* Album artwork in the center */}
            <div className="relative z-10 h-[43%] w-[43%] overflow-hidden rounded-full border border-white/20 bg-neutral-600">
              {track.albumArt && (
                <img
                  src={track.albumArt}
                  alt=""
                  className="h-full w-full object-cover"
                />
              )}

              {/* Record spindle */}
              <span className="absolute left-1/2 top-1/2 h-[5px] w-[5px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black ring-1 ring-white/40" />
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
