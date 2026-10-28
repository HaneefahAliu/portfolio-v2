import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor) return;

    const finePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (!finePointer.matches || reducedMotion.matches) {
      return;
    }

    let animationFrame = null;

    const updateCursor = (event) => {
      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
      }

      animationFrame = requestAnimationFrame(() => {
        const { clientX, clientY, target } = event;

        // Position cursor directly beneath the pointer
        cursor.style.transform = `
          translate3d(${clientX}px, ${clientY}px, 0)
          translate(-50%, -50%)
        `;

        // Hide over elements that request it
        const shouldHide = target.closest(
          '[data-cursor="hide"]'
        );

        if (shouldHide) {
          cursor.style.opacity = "0";
          return;
        }

        cursor.style.opacity = "1";

        // Detect interactive elements
        const interactive = target.closest(
          "a, button, input, textarea, select, [role='button']"
        );

        cursor.classList.toggle(
          "custom-cursor-hover",
          Boolean(interactive)
        );

        // Detect the background underneath the pointer
        let node = target;
        let isDark = false;

        while (node && node !== document.documentElement) {
          const background = window.getComputedStyle(
            node
          ).backgroundColor;

          const match = background.match(
            /rgba?\(([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s/]+([\d.]+))?\)/
          );

          if (match) {
            const r = Number(match[1]);
            const g = Number(match[2]);
            const b = Number(match[3]);
            const alpha = match[4] === undefined
              ? 1
              : Number(match[4]);

            if (alpha > 0.5) {
              const luminance =
                (0.299 * r + 0.587 * g + 0.114 * b) /
                255;

              isDark = luminance < 0.5;
              break;
            }
          }

          node = node.parentElement;
        }

        cursor.classList.toggle(
          "custom-cursor-dark",
          isDark
        );
      });
    };

    const hideCursor = () => {
      cursor.style.opacity = "0";
    };

    document.documentElement.classList.add(
      "custom-cursor-enabled"
    );

    window.addEventListener("pointermove", updateCursor);
    document.addEventListener("pointerleave", hideCursor);
    window.addEventListener("blur", hideCursor);

    return () => {
      document.documentElement.classList.remove(
        "custom-cursor-enabled"
      );

      window.removeEventListener(
        "pointermove",
        updateCursor
      );
      document.removeEventListener(
        "pointerleave",
        hideCursor
      );
      window.removeEventListener("blur", hideCursor);

      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [location.pathname]);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="custom-cursor"
    />
  );
}
