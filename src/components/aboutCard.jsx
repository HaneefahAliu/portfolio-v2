// src/components/AboutCard.jsx
import React from "react";

export default function AboutCard({ title, children, className = "" }) {
  return (
    <div className={`rounded-2xl border border-border-line bg-white p-6 ${className}`}>
      {title && (
        <p className="mb-5 text-[12px] tracking-[0.22em] text-black/25">
          {title.toUpperCase()}
        </p>
      )}
      {children}
    </div>
  );
}
