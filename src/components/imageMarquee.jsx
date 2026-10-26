
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function AutoMarqueeGallery({
  items = [],
  speed = 0.6,
  gapPx = 40,
  pauseAfterInteractionMs = 900,
}) {
  const doubled = useMemo(() => [...items, ...items], [items]);

  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const arrowRafRef = useRef(null);
  const arrowTimeoutRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  const isHoveringRef = useRef(false);
  const isDraggingRef = useRef(false);
  const isPageScrollingRef = useRef(false);
  const isArrowAnimatingRef = useRef(false);

  const pauseUntilRef = useRef(0);
  const dragStartXRef = useRef(0);
  const dragStartScrollLeftRef = useRef(0);
  const dragPointerIdRef = useRef(null);
  const scrollPositionRef = useRef(0);
  const loopWidthRef = useRef(0);
  const lastTimeRef = useRef(null);
  const activeIndexRef = useRef(0);

  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  const itemCount = items.length;

  // ----------------------------------------
  // HELPERS
  // ----------------------------------------

  const pauseFor = useCallback((ms) => {
    pauseUntilRef.current = Math.max(
      pauseUntilRef.current,
      performance.now() + ms
    );
  }, []);

  const shouldPause = useCallback(() => {
    return (
      performance.now() < pauseUntilRef.current ||
      isHoveringRef.current ||
      isDraggingRef.current ||
      isPageScrollingRef.current ||
      isArrowAnimatingRef.current
    );
  }, []);

  const getItems = useCallback(() => {
    return trackRef.current?.querySelectorAll("[data-item]") || [];
  }, []);

  // Measure the exact distance between
  // the first image and its duplicate.
  const measureLoop = useCallback(() => {
    const children = getItems();

    if (!itemCount || children.length <= itemCount) {
      loopWidthRef.current = 0;
      return;
    }

    const first = children[0];
    const duplicate = children[itemCount];

    loopWidthRef.current =
      duplicate.offsetLeft - first.offsetLeft;
  }, [getItems, itemCount]);

  // Keep scroll position inside one cycle.
  const normalizePosition = useCallback((position) => {
    const width = loopWidthRef.current;

    if (width <= 0) return 0;

    return ((position % width) + width) % width;
  }, []);

  const applyPosition = useCallback(
    (position) => {
      const el = viewportRef.current;
      if (!el) return;

      const normalized = normalizePosition(position);

      scrollPositionRef.current = normalized;
      el.scrollLeft = normalized;
    },
    [normalizePosition]
  );

  // ----------------------------------------
  // ACTIVE IMAGE COUNTER
  // ----------------------------------------

  const updateActiveIndex = useCallback(() => {
    const el = viewportRef.current;

    if (!el || !itemCount) return;

    const children = getItems();
    if (!children.length) return;

    const viewportCenter =
      el.getBoundingClientRect().left + el.clientWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    children.forEach((child, index) => {
      const rect = child.getBoundingClientRect();

      const itemCenter =
        rect.left + rect.width / 2;

      const distance = Math.abs(
        itemCenter - viewportCenter
      );

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    const nextIndex = closestIndex % itemCount;

    if (activeIndexRef.current !== nextIndex) {
      activeIndexRef.current = nextIndex;
      setActiveIndex(nextIndex);
    }
  }, [getItems, itemCount]);

  // ----------------------------------------
  // INITIAL MEASUREMENT + RESIZE
  // ----------------------------------------

  useEffect(() => {
    const el = viewportRef.current;
    const track = trackRef.current;

    if (!el || !track || !itemCount) return;

    const measure = () => {
      const previousWidth = loopWidthRef.current;
      const progress =
        previousWidth > 0
          ? scrollPositionRef.current / previousWidth
          : 0;

      measureLoop();

      if (loopWidthRef.current > 0) {
        applyPosition(progress * loopWidthRef.current);
      }

      updateActiveIndex();
    };

    measure();

    const observer = new ResizeObserver(measure);

    observer.observe(el);
    observer.observe(track);

    return () => observer.disconnect();
  }, [
    itemCount,
    gapPx,
    measureLoop,
    applyPosition,
    updateActiveIndex,
  ]);

  // ----------------------------------------
  // REDUCED MOTION
  // ----------------------------------------

  useEffect(() => {
    const media = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const update = () => {
      setReducedMotion(media.matches);
    };

    update();

    media.addEventListener?.("change", update);

    return () => {
      media.removeEventListener?.("change", update);
    };
  }, []);

  // ----------------------------------------
  // AUTOPLAY
  // ----------------------------------------

  useEffect(() => {
    if (!itemCount || reducedMotion) return;

    const tick = (time) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = time;
      }

      const delta = Math.min(
        time - lastTimeRef.current,
        50
      );

      lastTimeRef.current = time;

      if (!shouldPause() && loopWidthRef.current > 0) {
        const movement =
          speed * (delta / (1000 / 60));

        applyPosition(
          scrollPositionRef.current + movement
        );

        updateActiveIndex();
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      lastTimeRef.current = null;
    };
  }, [
    speed,
    itemCount,
    reducedMotion,
    shouldPause,
    applyPosition,
    updateActiveIndex,
  ]);

  // ----------------------------------------
  // PAUSE DURING PAGE SCROLLING
  // ----------------------------------------

  useEffect(() => {
    const onPageScroll = () => {
      isPageScrollingRef.current = true;

      clearTimeout(scrollTimeoutRef.current);

      scrollTimeoutRef.current = setTimeout(() => {
        isPageScrollingRef.current = false;
      }, 180);
    };

    window.addEventListener("scroll", onPageScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener(
        "scroll",
        onPageScroll
      );

      clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  // ----------------------------------------
  // STOP ARROW ANIMATION
  // ----------------------------------------

  const stopArrowAnimation = useCallback(() => {
    if (arrowRafRef.current !== null) {
      cancelAnimationFrame(arrowRafRef.current);
      arrowRafRef.current = null;
    }

    if (arrowTimeoutRef.current !== null) {
      clearTimeout(arrowTimeoutRef.current);
      arrowTimeoutRef.current = null;
    }

    isArrowAnimatingRef.current = false;
  }, []);

  // ----------------------------------------
  // CUSTOM ARROW ANIMATION
  // ----------------------------------------

  const scrollByItems = useCallback(
    (direction) => {
      const el = viewportRef.current;
      const children = getItems();

      if (!el || !children.length) return;

      stopArrowAnimation();

      const first = children[0];
      const second = children[1];

      const stride = second
        ? second.offsetLeft - first.offsetLeft
        : first.offsetWidth + gapPx;

      const startPosition = scrollPositionRef.current;
      const distance = direction * stride;

      pauseFor(pauseAfterInteractionMs + 500);

      if (reducedMotion) {
        applyPosition(startPosition + distance);
        updateActiveIndex();
        return;
      }

      isArrowAnimatingRef.current = true;

      const duration = 500;
      let startTime = null;

      const easeInOutCubic = (t) => {
        return t < 0.5
          ? 4 * t * t * t
          : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      const animate = (time) => {
        if (startTime === null) {
          startTime = time;
        }

        const elapsed = time - startTime;

        const progress = Math.min(
          elapsed / duration,
          1
        );

        const eased = easeInOutCubic(progress);

        const nextPosition =
          startPosition + distance * eased;

        applyPosition(nextPosition);
        updateActiveIndex();

        if (progress < 1) {
          arrowRafRef.current =
            requestAnimationFrame(animate);
        } else {
          applyPosition(startPosition + distance);
          updateActiveIndex();

          isArrowAnimatingRef.current = false;
          arrowRafRef.current = null;

          pauseFor(pauseAfterInteractionMs);
        }
      };

      arrowRafRef.current =
        requestAnimationFrame(animate);
    },
    [
      getItems,
      gapPx,
      pauseFor,
      pauseAfterInteractionMs,
      reducedMotion,
      applyPosition,
      updateActiveIndex,
      stopArrowAnimation,
    ]
  );

  // ----------------------------------------
  // DRAG TO SCROLL
  // ----------------------------------------

  const onPointerDown = (e) => {
    if (e.pointerType === "mouse" && e.button !== 0) {
      return;
    }

    const el = viewportRef.current;
    if (!el) return;

    stopArrowAnimation();

    isDraggingRef.current = true;
    dragPointerIdRef.current = e.pointerId;

    dragStartXRef.current = e.clientX;
    dragStartScrollLeftRef.current =
      scrollPositionRef.current;

    pauseFor(pauseAfterInteractionMs);

    el.setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (
      !isDraggingRef.current ||
      dragPointerIdRef.current !== e.pointerId
    ) {
      return;
    }

    const dx = e.clientX - dragStartXRef.current;

    const nextPosition =
      dragStartScrollLeftRef.current - dx;

    applyPosition(nextPosition);
    updateActiveIndex();
  };

  const onPointerUp = (e) => {
    if (
      dragPointerIdRef.current !== null &&
      dragPointerIdRef.current !== e.pointerId
    ) {
      return;
    }

    isDraggingRef.current = false;
    dragPointerIdRef.current = null;

    pauseFor(pauseAfterInteractionMs);

    const el = viewportRef.current;

    if (el?.hasPointerCapture?.(e.pointerId)) {
      el.releasePointerCapture(e.pointerId);
    }
  };

  // ----------------------------------------
  // HOVER PAUSE
  // ----------------------------------------

  const onMouseEnter = () => {
    isHoveringRef.current = true;
  };

  const onMouseLeave = () => {
    isHoveringRef.current = false;
    pauseFor(250);
  };

  // ----------------------------------------
  // CLEANUP
  // ----------------------------------------

  useEffect(() => {
    return () => {
      stopArrowAnimation();

      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }

      clearTimeout(scrollTimeoutRef.current);
    };
  }, [stopArrowAnimation]);

  // ----------------------------------------
  // RENDER
  // ----------------------------------------

  if (!itemCount) return null;

  return (
    <section className="w-full">
      {/* TOP BAR */}
      <div className="flex items-center justify-between py-6">
        <p className="font-plusJakarta text-lg font-light text-secondary-text">
          {activeIndex + 1}/{itemCount}
        </p>

        <div className="flex items-center gap-6 text-black">
          <button
            type="button"
            onClick={() => scrollByItems(-1)}
            className="opacity-30 transition-opacity hover:opacity-100 focus-visible:opacity-100"
            aria-label="Previous photo"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            type="button"
            onClick={() => scrollByItems(1)}
            className="opacity-30 transition-opacity hover:opacity-100 focus-visible:opacity-100"
            aria-label="Next photo"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* VIEWPORT */}
      <div
        ref={viewportRef}
        className="cursor-grab select-none overflow-hidden active:cursor-grabbing"
        style={{
          touchAction: "pan-y",
          overscrollBehaviorX: "contain",
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onLostPointerCapture={() => {
          isDraggingRef.current = false;
          dragPointerIdRef.current = null;
          pauseFor(pauseAfterInteractionMs);
        }}
      >
        {/* TRACK */}
        <div
          ref={trackRef}
          className="flex w-max pb-8"
          style={{
            gap: `${gapPx}px`,
            paddingLeft: "24px",
            paddingRight: "24px",
          }}
        >
          {doubled.map((item, idx) => (
            <figure
              key={`${item.src}-${idx}`}
              data-item
              className="w-[260px] shrink-0 sm:w-[340px] lg:w-[420px]"
            >
              {/* IMAGE */}
              <div className="overflow-hidden bg-white">
                <img
                  src={item.src}
                  alt={item.alt || item.caption || ""}
                  className="aspect-[420/520] w-full object-cover"
                  loading={idx < 2 ? "eager" : "lazy"}
                  decoding="async"
                  draggable={false}
                />
              </div>

              {/* CAPTION */}
              {item.caption && (
                <figcaption className="mt-3 font-inter text-xs font-light uppercase tracking-widest text-secondary-text">
                  {item.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
