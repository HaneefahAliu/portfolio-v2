import React, { useEffect, useMemo, useRef, useState } from "react";

export default function AutoMarqueeGallery({
  items,
  speed = 0.6,            // px per frame (0.4–1.0 feels nice)
  gapPx = 40,             // should match the gap class used below (gap-10 = 2.5rem = 40px)
  pauseAfterInteractionMs = 900,
}) {
  const doubled = useMemo(() => [...items, ...items], [items]);

  const viewportRef = useRef(null);
  const rafRef = useRef(null);

  const isHoveringRef = useRef(false);
  const isDraggingRef = useRef(false);
  const isUserScrollingRef = useRef(false);
  const pauseUntilRef = useRef(0);

  const dragStartXRef = useRef(0);
  const dragStartScrollLeftRef = useRef(0);

  const [activeIndex, setActiveIndex] = useState(0); // 0..items.length-1

  // --- Helpers ---
  const pauseFor = (ms) => {
    pauseUntilRef.current = Math.max(pauseUntilRef.current, Date.now() + ms);
  };

  const shouldPause = () => {
    if (Date.now() < pauseUntilRef.current) return true;
    if (isHoveringRef.current) return true;
    if (isDraggingRef.current) return true;
    if (isUserScrollingRef.current) return true;
    return false;
  };

  const normalizeLoop = () => {
    const el = viewportRef.current;
    if (!el) return;

    const half = el.scrollWidth / 2;
    // If we scroll past the first set, jump back by half (seamless)
    if (el.scrollLeft >= half) el.scrollLeft -= half;
    if (el.scrollLeft < 0) el.scrollLeft += half;
  };

  const measureAndUpdateIndex = () => {
    const el = viewportRef.current;
    if (!el || items.length === 0) return;

    // Find nearest item based on the viewport center
    const children = el.querySelectorAll("[data-item]");
    if (!children.length) return;

    const center = el.scrollLeft + el.clientWidth / 2;

    // Item width estimation (first item)
    const first = children[0];
    const itemWidth = first.getBoundingClientRect().width;
    const stride = itemWidth + gapPx;

    const raw = Math.round(center / stride);
    const idx = ((raw % items.length) + items.length) % items.length;

    setActiveIndex(idx);
  };

  // --- Autoplay loop ---
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const tick = () => {
      if (!shouldPause()) {
        el.scrollLeft += speed;
        normalizeLoop();
        // update counter cheaply
        measureAndUpdateIndex();
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [speed, gapPx, items.length]);

  // --- Pause when the page scrolls (debounced) ---
  useEffect(() => {
    let t = null;

    const onScroll = () => {
      isUserScrollingRef.current = true;
      if (t) clearTimeout(t);
      t = setTimeout(() => {
        isUserScrollingRef.current = false;
      }, 180); // pause shortly after last scroll event
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (t) clearTimeout(t);
    };
  }, []);

  // --- Drag to scroll (mouse grab) ---
  const onPointerDown = (e) => {
    const el = viewportRef.current;
    if (!el) return;

    isDraggingRef.current = true;
    pauseFor(pauseAfterInteractionMs);

    el.setPointerCapture?.(e.pointerId);

    dragStartXRef.current = e.clientX;
    dragStartScrollLeftRef.current = el.scrollLeft;
  };

  const onPointerMove = (e) => {
    const el = viewportRef.current;
    if (!el || !isDraggingRef.current) return;

    const dx = e.clientX - dragStartXRef.current;
    el.scrollLeft = dragStartScrollLeftRef.current - dx;
    normalizeLoop();
    measureAndUpdateIndex();
  };

  const onPointerUp = () => {
    isDraggingRef.current = false;
    pauseFor(pauseAfterInteractionMs);
  };

  // --- Hover pause ---
  const onMouseEnter = () => {
    isHoveringRef.current = true;
  };
  const onMouseLeave = () => {
    isHoveringRef.current = false;
    pauseFor(250);
  };

  // --- Arrow buttons ---
  const scrollByItems = (dir) => {
    const el = viewportRef.current;
    if (!el) return;

    pauseFor(pauseAfterInteractionMs);

    const child = el.querySelector("[data-item]");
    if (!child) return;

    const itemWidth = child.getBoundingClientRect().width;
    const stride = itemWidth + gapPx;

    el.scrollBy({ left: dir * stride, behavior: "smooth" });

    // After smooth scroll completes, normalize and update
    setTimeout(() => {
      normalizeLoop();
      measureAndUpdateIndex();
    }, 350);
  };

  // Update index on resize (so counter stays right)
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const ro = new ResizeObserver(() => measureAndUpdateIndex());
    ro.observe(el);
    return () => ro.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length]);

  return (
    <section className="w-full">
      {/* Top bar */}
      <div className="mx-auto max-w-[1440px] px-6 py-6 flex items-center justify-between">
        <p className="text-lg font-light font-plusJakarta text-secondary-text">
          {activeIndex + 1}/{items.length}
        </p>

        <div className="flex items-center gap-6 text-2xl text-black">
          <button
            type="button"
            onClick={() => scrollByItems(-1)}
            className="opacity-70 hover:opacity-100 transition"
            aria-label="Previous"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollByItems(1)}
            className="opacity-70 hover:opacity-100 transition"
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>

      {/* Viewport */}
      <div
        ref={viewportRef}
        className="overflow-hidden select-none cursor-grab active:cursor-grabbing"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {/* Track */}
        <div className="flex w-max gap-10 px-6 pb-8">
          {doubled.map((item, idx) => (
            <figure
              key={`${item.src}-${idx}`}
              data-item
              className="w-[420px] shrink-0"
            >
              <div className="bg-white overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt || ""}
                  className="h-[520px] w-full object-cover"
                  draggable={false}
                />
              </div>

              {item.caption ? (
                <figcaption className="mt-3 text-xs uppercase font-inter font-light tracking-widest text-secondary-text">
                  {item.caption}
                </figcaption>
              ) : null}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}