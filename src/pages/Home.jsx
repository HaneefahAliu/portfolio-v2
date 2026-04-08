import React from 'react';
import AvailabilityPill from '../components/pill';
import projects from "../data/projects";
import ProjectCard from "../components/projectCard";
import ContactSection from "../components/contactSection";
import "./globals.css";

function Home() {
    const featured = projects.filter((p) => p.featured);
    
    return (
        <main className='page-grid'>
            <div className="mx-auto max-w-[1440px]">
                 <div className="relative z-10 flex items-center min-h-[80vh] px-6 lg:px-10">
    
    <div className="relative w-full">
      
      {/* BIG TEXT */}
      <h1 className="font-serif text-[64px] sm:text-[100px] lg:text-[180px] leading-[0.95] tracking-[-0.04em]">
        Product
        <br />
        Designer.
      </h1>

      {/* SMALL FLOATING TEXT (LEFT) */}
      <p className="absolute left-0 top-[60%] max-w-[220px] text-[12px] sm:text-[14px] text-black/50 leading-relaxed">
        I care about how things look, how they work, and how they make people feel, so I design products people genuinely enjoy using.
      </p>

      {/* SMALL FLOATING TEXT (RIGHT) */}
      <p className="absolute right-[10%] top-[35%] max-w-[200px] text-[12px] sm:text-[14px] text-black/50 leading-relaxed">
        Hey! I'm Haneefah. A product designer based in Canada.
      </p>

    </div>
  </div>
                {/* Landing */}
                {/* <div className="min-h-screen pt-12 flex flex-col">
                    <section className="max-w-[520px]">
                        <AvailabilityPill />
                        <p className="mt-2 text-[14px] leading-[1.9] text-black/80 font-inter font-light">
                            Hey! I’m Haneefah. I care about how things look, how they work,
                            and how they make people feel, so I design products people
                            genuinely enjoy using.
                        </p>
                    </section>

                    <section className="mt-32 pb-12">
                        <h1 className="text-[240px] font-extrabold font-plusJakarta leading-[1] tracking-[0.01em]">
                            <span className="block">PRODUCT</span>
                            <span className="block pl-[160px]">DESIGNER.</span>
                        </h1>
                    </section>
                </div> */}

                <div className='pt-32'>
                    {/* Projects */}
                    <div className='flex items-end justify-between'>
                        <h1 className='text-[80px] font-bold font-plusJakarta leading-[1.05]'>Selected <br /> Works.</h1>
                        <a href="/case-studies" className="rounded-full border border-border-line px-8 py-4 text-[16px] font-inter transition hover:bg-black/5">View All</a>
                    </div>
                    <section className="mt-16 grid grid-cols-2 gap-6">
                        {featured.map((p) => (
                            <ProjectCard key={p.id} project={p} />
                        ))}
                    </section>
                </div>
            </div>
        </main>
    );
}

export default Home;
