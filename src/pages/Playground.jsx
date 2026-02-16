import React from "react";
import playgroundItems from "../data/playground";

export default function Playground({ items }) {
  const data = items ?? playgroundItems; // fallback

  return (
    <main className="page-grid">
      <div className="mx-auto max-w-[1440px]">
        <section className="min-h-screen flex flex-col">
          <h3 className="mt-auto pb-40 font-inter font-medium text-[40px] max-w-[800px]">
            A space for creative exploration — visual studies, experiments, and
            playful explorations that inspire my larger work.
          </h3>
        </section>

        <section className="pb-24">
          <div className="columns-1 sm:columns-2 lg:columns-3 [column-gap:12px]">
            {data.map((item, index) => (
              <div key={index} className="mb-2 break-inside-avoid">
                <img
                  src={item.image}
                  alt={item.title || "Playground item"}
                  className="w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
