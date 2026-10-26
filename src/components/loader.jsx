
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const commands = [
  { text: "> hey, i'm haneefah :)", type: 'normal' },
  { text: '> fulltime designer. part builder.', type: 'normal' },
  { text: '> initializing creative brain...', type: 'normal' },
  { text: '> ERROR: too many ideas.', type: 'error' },
  { text: "> actually, that's the fun part.", type: 'success' },
  { text: '> welcome to my world_', type: 'success' },
];

export default function Loader({ onComplete }) {
  const containerRef = useRef(null);
  const terminalRef = useRef(null);
  const terminalContentRef = useRef(null);
  const titleRef = useRef(null);
  const glitchRef = useRef(null);
  const leftCurtainRef = useRef(null);
  const rightCurtainRef = useRef(null);
  const timelineRef = useRef(null);
  const skipTweenRef = useRef(null);
  const completeRef = useRef(onComplete);
  const finishedRef = useRef(false);
  const lineRefs = useRef([]);

  useEffect(() => {
    completeRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const container = containerRef.current;
    const terminal = terminalRef.current;
    const content = terminalContentRef.current;
    const title = titleRef.current;
    const glitch = glitchRef.current;
    const left = leftCurtainRef.current;
    const right = rightCurtainRef.current;
    const lines = lineRefs.current.filter(Boolean);

    const finish = () => {
      if (finishedRef.current) return;

      finishedRef.current = true;
      document.body.style.overflow = previousOverflow;
      completeRef.current?.();
    };

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (reducedMotion) {
      finish();

      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }

    const ctx = gsap.context(() => {
      // Initial animation states
      gsap.set(lines, {
        autoAlpha: 0,
        y: 9,
      });

      gsap.set(terminal, {
        autoAlpha: 0,
        y: 24,
        scale: 0.96,
      });

      gsap.set(title, {
        autoAlpha: 0,
        scale: 0.94,
      });

      gsap.set(glitch, {
        autoAlpha: 0,
      });

      gsap.set([left, right], {
        xPercent: 0,
      });

      const tl = gsap.timeline({
        onComplete: finish,
      });

      timelineRef.current = tl;

      // 1. Terminal enters
      tl.to(terminal, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.45,
        ease: 'power3.out',
      });

      // 2. Terminal commands appear
      lines.forEach((line, index) => {
        tl.to(line, {
          autoAlpha: 1,
          y: 0,
          duration: 0.16,
          ease: 'power2.out',
        });

        // Trigger glitch after ERROR
        if (index === 3) {
          tl.add('glitchStart');

          tl.to(
            terminal,
            {
              x: -8,
              duration: 0.045,
              repeat: 5,
              yoyo: true,
              ease: 'none',
            },
            'glitchStart'
          );

          tl.to(
            glitch,
            {
              autoAlpha: 1,
              duration: 0.04,
              repeat: 5,
              yoyo: true,
              ease: 'none',
            },
            'glitchStart'
          );

          tl.to(terminal, {
            x: 0,
            duration: 0.08,
          });

          tl.set(glitch, {
            autoAlpha: 0,
          });
        }

        tl.to({}, {
          duration: index === 3 ? 0.08 : 0.12,
        });
      });

      // 3. Terminal disappears
      tl.to(
        content,
        {
          autoAlpha: 0,
          y: -15,
          duration: 0.2,
          ease: 'power2.in',
        },
        '+=0.2'
      );

      tl.to(
        terminal,
        {
          autoAlpha: 0,
          scale: 1.05,
          duration: 0.2,
        },
        '<'
      );

      // 4. Big typography reveal
      tl.to(title, {
        autoAlpha: 1,
        scale: 1,
        duration: 0.25,
        ease: 'power3.out',
      });

      // Brief final glitch
      tl.to(title, {
        x: 5,
        skewX: -5,
        duration: 0.045,
        repeat: 3,
        yoyo: true,
        ease: 'none',
      });

      tl.set(title, {
        x: 0,
        skewX: 0,
      });

      // 5. Hide title before curtains open
      tl.to(
        title,
        {
          autoAlpha: 0,
          scale: 1.08,
          duration: 0.2,
          ease: 'power2.in',
        },
        '+=0.12'
      );

      // 6. Cinematic curtain reveal
      tl.add('reveal');

      tl.to(
        left,
        {
          xPercent: -101,
          duration: 0.9,
          ease: 'power3.inOut',
        },
        'reveal'
      );

      tl.to(
        right,
        {
          xPercent: 101,
          duration: 0.9,
          ease: 'power3.inOut',
        },
        'reveal'
      );
    }, container);

    return () => {
      timelineRef.current?.kill();
      skipTweenRef.current?.kill();
      ctx.revert();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const skipIntro = () => {
    if (finishedRef.current || skipTweenRef.current) return;

    timelineRef.current?.kill();

    gsap.set(
      [terminalRef.current, titleRef.current],
      { autoAlpha: 0 }
    );

    skipTweenRef.current = gsap.to(
      [
        leftCurtainRef.current,
        rightCurtainRef.current,
      ],
      {
        xPercent: (index) => (index === 0 ? -101 : 101),
        duration: 0.35,
        ease: 'power2.inOut',
        onComplete: () => {
          if (finishedRef.current) return;

          finishedRef.current = true;
          document.body.style.overflow = '';
          completeRef.current?.();
        },
      }
    );
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] overflow-hidden"
      aria-label="Opening portfolio animation"
    >
      {/* LEFT CURTAIN */}
      <div
        ref={leftCurtainRef}
        className="absolute inset-y-0 left-0 w-1/2 bg-[#101014]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* RIGHT CURTAIN */}
      <div
        ref={rightCurtainRef}
        className="absolute inset-y-0 right-0 w-1/2 bg-[#101014]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* TERMINAL */}
      <div
        ref={terminalRef}
        className="pointer-events-none absolute inset-0 flex items-center justify-center px-5"
        style={{
          opacity: 0,
          visibility: 'hidden',
          transform: 'translateY(24px) scale(0.96)',
        }}
      >
        <div
          ref={terminalContentRef}
          className="relative w-full max-w-[620px] overflow-hidden rounded-xl border border-white/10 bg-[#1B1B20] shadow-2xl"
        >
          {/* Terminal header */}
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF605C]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD44]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#00CA4E]" />
            </div>

            <span className="font-mono text-[10px] tracking-wider text-white/40">
              Haneefah Aliu / Product Designer
            </span>
          </div>

          {/* Terminal body */}
          <div className="relative min-h-[270px] px-5 py-8 sm:px-8">
            <div className="space-y-3">
              {commands.map((command, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    lineRefs.current[index] = el;
                  }}
                  className={`font-mono text-xs leading-relaxed sm:text-sm ${
                    command.type === 'error'
                      ? 'text-[#FF91A4]'
                      : command.type === 'success'
                      ? 'text-[#A7F3D0]'
                      : 'text-white/75'
                  }`}
                  style={{
                    opacity: 0,
                    visibility: 'hidden',
                  }}
                >
                  {command.text}
                </div>
              ))}
            </div>

            <div className="mt-6 h-3 w-[7px] animate-pulse bg-[#A7F3D0]" />

            {/* Glitch flash */}
            <div
              ref={glitchRef}
              className="pointer-events-none absolute inset-0"
              style={{
                opacity: 0,
                visibility: 'hidden',
                background:
                  'repeating-linear-gradient(0deg, transparent 0px, rgba(167,243,208,0.12) 2px, transparent 4px), linear-gradient(90deg, rgba(255,0,80,0.15), transparent 40%, rgba(0,255,255,0.15))',
                mixBlendMode: 'screen',
              }}
            />
          </div>
        </div>
      </div>

      {/* FINAL TYPOGRAPHY */}
      <div
        ref={titleRef}
        className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-5 text-center"
        style={{
          opacity: 0,
          visibility: 'hidden',
          transform: 'scale(0.94)',
        }}
      >
        <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.35em] text-[#A7F3D0]">
          Creative system initialized
        </p>

        <h1 className="font-plusJakarta text-[clamp(2.5rem,8vw,7rem)] font-bold leading-[0.95] tracking-[-0.07em] text-white">
          WELCOME
          <br />
          TO MY WORLD.
        </h1>

        <p className="mt-6 font-mono text-xs text-white/40">
          DESIGN × ENGINEERING × CURIOSITY
        </p>
      </div>

      {/* TOP LABEL */}
      <div className="pointer-events-none absolute left-5 top-6 font-mono text-[10px] tracking-[0.2em] text-white/40 sm:left-10">
        H/A — CREATIVE SYSTEM
      </div>

      {/* SKIP BUTTON */}
      <button
        type="button"
        onClick={skipIntro}
        className="absolute bottom-7 right-6 z-20 font-mono text-[11px] uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white sm:right-10"
      >
        Skip intro ↗
      </button>
    </div>
  );
}
