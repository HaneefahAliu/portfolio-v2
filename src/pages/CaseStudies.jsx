import React from "react";
import projects from "../data/projects"; 
import ProjectCard from "../components/projectCard";

export default function Projects() {
  return (
    <main className="page-grid">
      <div className="mx-auto max-w-[1440px]">
        <section className="min-h-screen flex flex-col">
          <div className="mt-auto pb-40 flex items-center justify-between">
            <h1 className="text-[140px] font-bold font-plusJakarta leading-[1.05]">
              Selected
              <br />
              Works.
            </h1>
            <p className="font-inter font-light text-[16px] text-secondary-text max-w-[520px]">A collection of product and visual design projects that reflect how I solve problems, shape user experiences, and bring clarity to complex ideas.</p>
          </div>
        </section>
      
        <section className="mt-12 pb-32 grid grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </section>
      </div>
    </main>
  );
}