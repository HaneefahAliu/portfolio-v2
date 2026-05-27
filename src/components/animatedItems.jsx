import { useState, useRef, useEffect, useCallback } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// 1. 3D TILT CARD
// Usage: <TiltCard title="Haneefah Aliu" subtitle="Design Engineer" />
// ─────────────────────────────────────────────────────────────────────────────
export function TiltCard({ title = "Haneefah Aliu", subtitle = "Design Engineer", children }) {
  const cardRef = useRef(null);
  const shineRef = useRef(null);
  const frameRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rx = (y - 0.5) * -26;
      const ry = (x - 0.5) * 26;
      cardRef.current.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.04)`;
      cardRef.current.style.transition = "transform 0.08s linear";
      shineRef.current.style.opacity = "1";
      shineRef.current.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,0.22) 0%, transparent 65%)`;
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    cancelAnimationFrame(frameRef.current);
    cardRef.current.style.transform = "perspective(700px) rotateX(0deg) rotateY(0deg) scale(1)";
    cardRef.current.style.transition = "transform 0.7s cubic-bezier(0.23,1,0.32,1)";
    shineRef.current.style.opacity = "0";
  }, []);

  return (
    <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={tiltStyles.wrapper}>
      <div ref={cardRef} style={tiltStyles.card}>
        {/* Shine overlay */}
        <div ref={shineRef} style={tiltStyles.shine} />
        {/* Noise texture */}
        <div style={tiltStyles.noise} />
        {/* Content */}
        <div style={tiltStyles.content}>
          {children || (
            <>
              <div style={tiltStyles.tag}>design system</div>
              <div style={tiltStyles.logoMark}>tw</div>
              <div>
                <div style={tiltStyles.subtitle}>{subtitle}</div>
                <div style={tiltStyles.title}>{title}</div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const tiltStyles = {
  wrapper: {
    display: "inline-block",
    cursor: "none",
    padding: "2rem",
  },
  card: {
    width: 260,
    height: 160,
    background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    borderRadius: 18,
    position: "relative",
    overflow: "hidden",
    willChange: "transform",
    boxShadow: "0 20px 60px rgba(0,0,0,0.25), 0 4px 16px rgba(0,0,0,0.15)",
  },
  shine: {
    position: "absolute",
    inset: 0,
    borderRadius: 18,
    pointerEvents: "none",
    opacity: 0,
    transition: "opacity 0.2s",
    zIndex: 3,
  },
  noise: {
    position: "absolute",
    inset: 0,
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
    opacity: 0.6,
    zIndex: 1,
  },
  content: {
    position: "relative",
    zIndex: 2,
    padding: "18px 20px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  tag: {
    fontSize: 10,
    fontFamily: "monospace",
    color: "rgba(255,255,255,0.4)",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
  },
  logoMark: {
    fontSize: 28,
    fontWeight: 700,
    color: "rgba(255,255,255,0.12)",
    letterSpacing: "-1px",
    position: "absolute",
    right: 20,
    top: 16,
  },
  subtitle: {
    fontSize: 11,
    color: "rgba(255,255,255,0.45)",
    marginBottom: 3,
    fontFamily: "monospace",
    letterSpacing: "0.04em",
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
    color: "#ffffff",
    letterSpacing: "-0.4px",
    lineHeight: 1.2,
  },
};


// ─────────────────────────────────────────────────────────────────────────────
// 2. CURSOR TRAIL
// Usage: <CursorTrail /> — wraps its children in a trail-enabled container
// ─────────────────────────────────────────────────────────────────────────────
export function CursorTrail({ children, height = 280 }) {
  const areaRef = useRef(null);
  const canvasRef = useRef(null);
  const dotsRef = useRef([]);
  const mouseRef = useRef({ x: -999, y: -999 });
  const rafRef = useRef(null);
  const N = 22;

  useEffect(() => {
    for (let i = 0; i < N; i++) dotsRef.current.push({ x: 0, y: 0 });

    const resize = () => {
      if (!canvasRef.current || !areaRef.current) return;
      const r = areaRef.current.getBoundingClientRect();
      canvasRef.current.width = r.width;
      canvasRef.current.height = r.height;
    };
    resize();
    window.addEventListener("resize", resize);

    const frame = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const dots = dotsRef.current;
      const { x: mx, y: my } = mouseRef.current;

      dots[0].x += (mx - dots[0].x) * 0.25;
      dots[0].y += (my - dots[0].y) * 0.25;
      for (let i = 1; i < N; i++) {
        dots[i].x += (dots[i - 1].x - dots[i].x) * 0.3;
        dots[i].y += (dots[i - 1].y - dots[i].y) * 0.3;
      }

      // Draw trail as connected path
      if (mx > 0) {
        ctx.beginPath();
        ctx.moveTo(dots[0].x, dots[0].y);
        for (let i = 1; i < N; i++) {
          const midX = (dots[i].x + dots[i - 1].x) / 2;
          const midY = (dots[i].y + dots[i - 1].y) / 2;
          ctx.quadraticCurveTo(dots[i - 1].x, dots[i - 1].y, midX, midY);
        }
        ctx.strokeStyle = "rgba(17,17,17,0.15)";
        ctx.lineWidth = 2;
        ctx.lineCap = "round";
        ctx.stroke();

        // Draw dots on top
        for (let i = 0; i < N; i++) {
          const t = 1 - i / N;
          ctx.beginPath();
          ctx.arc(dots[i].x, dots[i].y, t * 5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(17,17,17,${t * 0.55})`;
          ctx.fill();
        }

        // Cursor dot
        ctx.beginPath();
        ctx.arc(mx, my, 5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(17,17,17,0.9)";
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(frame);
    };
    rafRef.current = requestAnimationFrame(frame);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleMouseMove = (e) => {
    const rect = areaRef.current.getBoundingClientRect();
    mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const handleMouseLeave = () => {
    mouseRef.current = { x: -999, y: -999 };
  };

  return (
    <div
      ref={areaRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ position: "relative", height, overflow: "hidden", cursor: "none", borderRadius: 16, background: "#fafaf8", border: "0.5px solid #e8e5e0" }}
    >
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} />
      <div style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {children || (
          <span style={{ fontSize: 32, fontWeight: 500, color: "#111", letterSpacing: "-1px", userSelect: "none" }}>
            make things.
          </span>
        )}
      </div>
    </div>
  );
}


// ─────────────────────────────────────────────────────────────────────────────
// 3. SCROLL REVEAL
// Usage: <ScrollReveal> wraps any children and reveals them on scroll
// Also exports <RevealText> for word-by-word text reveals
// ─────────────────────────────────────────────────────────────────────────────
export function ScrollReveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.75s cubic-bezier(0.23,1,0.32,1) ${delay}ms, transform 0.75s cubic-bezier(0.23,1,0.32,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export function RevealText({ text = "", as: Tag = "h2", style: customStyle = {}, baseDelay = 0 }) {
  const words = text.split(" ");
  return (
    <Tag style={{ display: "flex", flexWrap: "wrap", gap: "0.25em", ...customStyle }}>
      {words.map((word, i) => (
        <ScrollReveal key={i} delay={baseDelay + i * 60}>
          <span>{word}</span>
        </ScrollReveal>
      ))}
    </Tag>
  );
}

// Scroll reveal demo page — shows the components in action
export function ScrollRevealDemo() {
  return (
    <div style={{ height: 320, overflowY: "auto", padding: "2rem", background: "#fafaf8", borderRadius: 16, border: "0.5px solid #e8e5e0" }}>
      <p style={{ fontSize: 11, color: "#bbb", marginBottom: "3rem", letterSpacing: "0.04em" }}>↓ scroll down</p>

      <ScrollReveal>
        <p style={{ fontSize: 12, color: "#bbb", marginBottom: "0.5rem", fontFamily: "monospace" }}>manifesto</p>
      </ScrollReveal>

      <RevealText
        text="Design is how it works."
        as="h2"
        style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 500, color: "#111", lineHeight: 1.1, marginBottom: "1.5rem" }}
        baseDelay={100}
      />

      <ScrollReveal delay={500}>
        <p style={{ fontSize: 14, color: "#888", lineHeight: 1.7, maxWidth: 380, marginBottom: "3rem" }}>
          Not just how it looks — how every interaction, transition, and detail makes someone feel. That's the work.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={700}>
        <div style={{ display: "flex", gap: 10 }}>
          {["design", "engineer", "builder"].map((tag) => (
            <span key={tag} style={{ fontSize: 11, padding: "5px 12px", border: "0.5px solid #ddd", borderRadius: 99, color: "#888", fontFamily: "monospace" }}>
              {tag}
            </span>
          ))}
        </div>
      </ScrollReveal>

      <div style={{ height: 80 }} />
    </div>
  );
}


// ─────────────────────────────────────────────────────────────────────────────
// 4. IMAGE DISTORTION
// Usage: <ImageDistortion src="your-image.jpg" />
// Falls back to a generated gradient canvas if no src provided
// ─────────────────────────────────────────────────────────────────────────────
export function ImageDistortion({ src, width = 280, height = 180, alt = "" }) {
  const canvasRef = useRef(null);
  const sourceRef = useRef(null); // offscreen canvas
  const mouseRef = useRef({ x: width / 2, y: height / 2, over: false });
  const progressRef = useRef(0);
  const tRef = useRef(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;

    // Build source canvas
    const source = document.createElement("canvas");
    source.width = width;
    source.height = height;
    sourceRef.current = source;
    const sctx = source.getContext("2d");

    const drawSource = () => {
      if (src) {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => sctx.drawImage(img, 0, 0, width, height);
        img.src = src;
      } else {
        // Gradient fallback
        const g = sctx.createLinearGradient(0, 0, width, height);
        g.addColorStop(0,   "#1a1a2e");
        g.addColorStop(0.35,"#16213e");
        g.addColorStop(0.7, "#0f3460");
        g.addColorStop(1,   "#533483");
        sctx.fillStyle = g;
        sctx.fillRect(0, 0, width, height);

        // Grid overlay
        sctx.strokeStyle = "rgba(255,255,255,0.06)";
        sctx.lineWidth = 0.5;
        for (let x = 0; x < width; x += 30) {
          sctx.beginPath(); sctx.moveTo(x, 0); sctx.lineTo(x, height); sctx.stroke();
        }
        for (let y = 0; y < height; y += 30) {
          sctx.beginPath(); sctx.moveTo(0, y); sctx.lineTo(width, y); sctx.stroke();
        }

        sctx.fillStyle = "rgba(255,255,255,0.88)";
        sctx.font = "500 18px 'DM Sans', system-ui, sans-serif";
        sctx.textAlign = "center";
        sctx.textBaseline = "middle";
        sctx.fillText("haneefah aliu", width / 2, height / 2 - 12);

        sctx.fillStyle = "rgba(255,255,255,0.38)";
        sctx.font = "400 11px monospace";
        sctx.fillText("design engineer", width / 2, height / 2 + 14);
      }
    };
    drawSource();

    const frame = () => {
      const { over } = mouseRef.current;
      progressRef.current += over
        ? (1 - progressRef.current) * 0.07
        : (0 - progressRef.current) * 0.055;
      tRef.current += 0.03;

      const amp = progressRef.current * 16;
      const { x: mx, y: my } = mouseRef.current;
      const src2 = sourceRef.current.getContext("2d").getImageData(0, 0, width, height);
      const dst = ctx.createImageData(width, height);

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const dx = x - mx;
          const dy = y - my;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const wave = Math.sin(dist * 0.15 - tRef.current * 2.2) * amp * Math.exp(-dist * 0.011);
          const sx = Math.round(Math.max(0, Math.min(width - 1,  x + wave * (dx / dist))));
          const sy = Math.round(Math.max(0, Math.min(height - 1, y + wave * (dy / dist))));
          const si = (sy * width + sx) * 4;
          const di = (y  * width + x)  * 4;
          dst.data[di]     = src2.data[si];
          dst.data[di + 1] = src2.data[si + 1];
          dst.data[di + 2] = src2.data[si + 2];
          dst.data[di + 3] = src2.data[si + 3];
        }
      }
      ctx.putImageData(dst, 0, 0);
      rafRef.current = requestAnimationFrame(frame);
    };
    rafRef.current = requestAnimationFrame(frame);

    return () => cancelAnimationFrame(rafRef.current);
  }, [src, width, height]);

  return (
    <canvas
      ref={canvasRef}
      aria-label={alt}
      role="img"
      style={{ borderRadius: 14, display: "block", cursor: "crosshair" }}
      onMouseMove={(e) => {
        const rect = canvasRef.current.getBoundingClientRect();
        mouseRef.current.x = (e.clientX - rect.left) * (width / rect.width);
        mouseRef.current.y = (e.clientY - rect.top)  * (height / rect.height);
        mouseRef.current.over = true;
      }}
      onMouseLeave={() => { mouseRef.current.over = false; }}
    />
  );
}


// ─────────────────────────────────────────────────────────────────────────────
// SHOWCASE — drop this into your Explorations page
// Replace the basic components in builtItems with these
// ─────────────────────────────────────────────────────────────────────────────
export default function AdvancedCraftShowcase() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "3rem 2rem 6rem", fontFamily: "'DM Sans', system-ui, sans-serif" }}>

      <div style={{ marginBottom: "2.5rem" }}>
        <p style={showcase.eyebrow}>lab / built</p>
        <h1 style={showcase.heading}>Craft experiments</h1>
        <p style={showcase.sub}>Interactive UI components built from scratch — no libraries, just React, Canvas, and CSS.</p>
      </div>

      <div style={showcase.grid}>

        {/* 3D Tilt */}
        <div style={showcase.card}>
          <div style={showcase.stage}>
            <p style={showcase.hint}>Move cursor over card</p>
            <TiltCard />
          </div>
          <div style={showcase.meta}>
            <div>
              <h3 style={showcase.cardTitle}>3D tilt card</h3>
              <p style={showcase.cardDesc}>Perspective rotation + dynamic shine overlay tracks cursor position.</p>
            </div>
            <span style={showcase.stack}>CSS perspective · JS mouse tracking</span>
          </div>
        </div>

        {/* Cursor trail */}
        <div style={showcase.card}>
          <div style={{ ...showcase.stage, padding: 0 }}>
            <CursorTrail height={220} />
          </div>
          <div style={showcase.meta}>
            <div>
              <h3 style={showcase.cardTitle}>Cursor trail</h3>
              <p style={showcase.cardDesc}>Spring-physics chain of dots follows cursor with natural lag.</p>
            </div>
            <span style={showcase.stack}>Canvas 2D · spring physics · rAF</span>
          </div>
        </div>

        {/* Scroll reveal */}
        <div style={showcase.card}>
          <div style={{ ...showcase.stage, padding: 0 }}>
            <ScrollRevealDemo />
          </div>
          <div style={showcase.meta}>
            <div>
              <h3 style={showcase.cardTitle}>Scroll reveal</h3>
              <p style={showcase.cardDesc}>Words animate in word-by-word as they enter the viewport.</p>
            </div>
            <span style={showcase.stack}>IntersectionObserver · CSS transforms</span>
          </div>
        </div>

        {/* Image distortion */}
        <div style={showcase.card}>
          <div style={showcase.stage}>
            <p style={showcase.hint}>Hover over the image</p>
            <ImageDistortion width={280} height={175} />
          </div>
          <div style={showcase.meta}>
            <div>
              <h3 style={showcase.cardTitle}>Image distortion</h3>
              <p style={showcase.cardDesc}>Pixel-level sine wave displacement radiates from cursor position.</p>
            </div>
            <span style={showcase.stack}>Canvas 2D · pixel manipulation · sine wave</span>
          </div>
        </div>

      </div>
    </div>
  );
}

const showcase = {
  eyebrow: {
    fontSize: 11, color: "#bbb", letterSpacing: "0.08em",
    textTransform: "uppercase", margin: "0 0 8px",
    fontFamily: "monospace",
  },
  heading: {
    fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 500,
    color: "#111", margin: "0 0 8px", letterSpacing: "-0.5px",
  },
  sub: {
    fontSize: 14, color: "#888", margin: 0, lineHeight: 1.6, maxWidth: 480,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: 20,
  },
  card: {
    background: "#fff",
    border: "0.5px solid #e8e5e0",
    borderRadius: 18,
    overflow: "hidden",
  },
  stage: {
    background: "#fafaf8",
    borderBottom: "0.5px solid #e8e5e0",
    minHeight: 220,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "1.5rem",
    gap: 12,
  },
  hint: {
    fontSize: 11, color: "#ccc", margin: 0,
    letterSpacing: "0.04em", alignSelf: "flex-start",
  },
  meta: {
    padding: "14px 18px 18px",
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  cardTitle: {
    fontSize: 14, fontWeight: 500, color: "#111", margin: "0 0 3px",
  },
  cardDesc: {
    fontSize: 12, color: "#888", margin: 0, lineHeight: 1.55,
  },
  stack: {
    fontSize: 10, fontFamily: "monospace", color: "#ccc", letterSpacing: "0.03em",
  },
};