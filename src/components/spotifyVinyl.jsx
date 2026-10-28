import { useEffect, useRef, useState } from "react";
import { ExternalLink, Music2 } from "lucide-react";

const POLL_INTERVAL = 10000;

export default function SpotifyVinyl() {

  const [track, setTrack] = useState(null);

  const [open, setOpen] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

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

  // Hide the player whenever the footer is visible.
  useEffect(() => {
    const footer = document.querySelector("footer, #site-footer");
    if (!footer) return;

    const observer = new IntersectionObserver(([entry]) => {
      setFooterVisible(entry.isIntersecting);
      if (entry.isIntersecting) setOpen(false);
    });

    observer.observe(footer);
    return () => observer.disconnect();
  }, [])
};