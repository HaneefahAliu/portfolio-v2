import React from "react";
import projects from "../data/projects"; 
import ProjectCard from "../components/projectCard";

export default function Projects() {
  return (
    <main className="page-grid">
      <div className="px-5 sm:px-[6%] lg:px-[10%]">
        <section className="flex flex-col">
          <div className="pt-10 sm:pt-16 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-12">
            <h1 className="text-[clamp(3.5rem,12vw,8.75rem)] font-bold font-plusJakarta leading-[1.05] shrink-0">
              Selected
              <br />
              Works.
            </h1>
            <p className="font-inter font-light text-[14px] sm:text-[16px] text-secondary-text max-w-full md:max-w-[520px] md:pb-4">
              A collection of product and visual design projects that reflect how I solve problems, shape user experiences, and bring clarity to complex ideas.
            </p>
          </div>
        </section>
      
        <section className="pt-12 sm:pt-24 pb-20 sm:pb-40 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </section>
      </div>
    </main>
  );
}