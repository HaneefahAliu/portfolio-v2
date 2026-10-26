
import React from "react";

export default function LabCard({ project }) {
  return (
    <article className="group">
      <div
        className="relative aspect-[4/3] overflow-hidden rounded-xl flex items-center justify-center"
        style={{ backgroundColor: project.color }}
      >
        {project.id === "001" && (
          <div className="text-center">
            <button
              type="button"
              className="rounded-full border border-white/50 px-8 py-4 font-inter text-white transition-transform duration-300 hover:scale-110 active:scale-95"
            >
              Hover me ↗
            </button>
          </div>
        )}

        {project.id === "002" && (
          <div className="w-[80%] rounded-xl bg-white p-5 shadow-lg">
            <div className="flex items-center justify-between gap-3 font-inter text-sm text-gray-400">
              <span>⌕ Search anything...</span>
              <span className="shrink-0 text-xs">⌘ K</span>
            </div>
          </div>
        )}

        {project.id === "003" && (
          <h2 className="font-plusJakarta text-[clamp(2rem,5vw,4rem)] font-bold text-[#285E3F] transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
            Aa Bb Cc.
          </h2>
        )}

        <span className="absolute bottom-5 left-5 font-inter text-xs opacity-60"
          style={{
            color: project.id === "001" ? "#FFFFFF" : "#333333",
          }}
        >
          {project.id} / {project.category}
        </span>
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-plusJakarta text-xl sm:text-2xl font-semibold">
            {project.title}
          </h3>

          <p className="mt-2 font-inter text-sm text-secondary-text">
            {project.description}
          </p>

          <p className="mt-3 font-inter text-xs text-secondary-text">
            {project.technologies.join(" · ")}
          </p>
        </div>

        <span className="shrink-0 rounded-full border border-gray-200 px-3 py-1.5 font-inter text-xs text-secondary-text">
          {project.status}
        </span>
      </div>
    </article>
  );
}
