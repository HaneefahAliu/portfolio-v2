import React, { useState } from "react";
import { Link } from "react-router-dom";

function isExternal(url) {
  return /^https?:\/\//i.test(url);
}

export default function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const CardInner = (
    <div className="w-full group">
      {/* IMAGE WRAPPER */}
      <div
        className={`relative w-full overflow-hidden ${
          project.locked ? "cursor-not-allowed" : "cursor-none"
        }`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={handleMouseMove}
      >
        <img
          src={project.image}
          alt={project.title}
          className="h-[420px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />

        {/* DARK OVERLAY */}
        <div className="pointer-events-none absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/40" />

        {/* VIEW FOLLOW CURSOR */}
        <div
          className={`pointer-events-none absolute transition-all duration-300 ease-out ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-md px-4 py-2 border border-white/30 shadow-lg">
            <div className="h-3 w-3 rounded-sm bg-highlight" />
            <span className="text-sm font-medium text-white">
              {project.locked ? "Locked" : "View"}
            </span>
          </div>
        </div>

        {/* LOCKED PILL */}
        {project.locked && (
          <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 shadow-sm">
            <span span className="text-[16px]">🔒</span>
            <span className="text-[14px] font-medium text-black/80">Locked</span>
          </div>
        )}
      </div>

      {/* BOTTOM TEXT */}
      <div className="mt-4 grid grid-cols-[280px_1fr] gap-10">
        <div className="text-[20px] font-light font-inter tracking-wide uppercase">
          {project.title}
        </div>

        <p className="text-[14px] font-light font-inter tracking-wide leading-6 text-secondary-text text-end">
          {project.description}
        </p>
      </div>
    </div>
  );

  // If project is locked, render as a div (no navigation)
  if (project.locked) {
    return <div className="block">{CardInner}</div>;  
  } 

  // External link
  if (isExternal(project.route)) {
    return (
      <a href={project.route} target="_blank" rel="noreferrer" className="block">
        {CardInner}
      </a>
    );
  }

  // Internal route
  return (
    <Link to={`/${project.route}`} className="block">
      {CardInner}
    </Link>
  );
}
