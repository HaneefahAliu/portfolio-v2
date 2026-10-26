
import { useState } from "react";
import labProjects from "../data/lab";
import LabCard from "../components/labCard";

const tabs = [
  "Interactions",
  "Code",
  "Visual",
];

export default function Lab() {
  const [activeTab, setActiveTab] = useState("Interactions");

 const visibleProjects = labProjects.filter(
    (project) => project.category === activeTab
  );

  return (
    <main className="page-grid">
      <div className="px-5 sm:px-[6%] lg:px-[10%]">

        {/* Hero */}
        <section className="pt-10 sm:pt-16 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-12">
          <h1 className="text-[clamp(3.5rem,12vw,8.75rem)] font-bold font-plusJakarta leading-[1.05] shrink-0">
            The
            <br />
            Lab.
          </h1>

          <p className="font-inter font-light text-[14px] sm:text-[16px] text-secondary-text max-w-full md:max-w-[520px] md:pb-4">
            A little corner of the internet for things I've
            designed, built, and experimented with. Some useful,
            some playful, all made out of curiosity.
          </p>
        </section>

        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Lab categories"
          className="mt-12 sm:mt-24 flex flex-wrap gap-3"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={activeTab === tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-5 py-2.5 font-inter text-sm transition-all duration-300 ${
                activeTab === tab
                  ? "bg-black text-white"
                  : "border border-gray-200 text-secondary-text hover:border-black hover:text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects */}
        <section
          role="tabpanel"
          aria-label={`${activeTab} projects`}
          className="pt-8 sm:pt-12 pb-20 sm:pb-40"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {visibleProjects.map((project) => (
              <LabCard
                key={project.id}
                project={project}
              />
            ))}
          </div>

          {visibleProjects.length === 0 && (
            <p className="py-16 font-inter text-secondary-text">
              Nothing here yet. Something's cooking.
            </p>
          )}
        </section>
      </div>
    </main>
  );
}
