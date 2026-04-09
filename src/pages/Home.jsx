import React from 'react';
import projects from "../data/projects";
import ProjectCard from "../components/projectCard";
import "./globals.css";

function Home() {
    const featured = projects.filter((p) => p.featured);
    
    return (
        <main className='page-grid'>
            <div className="px-[12%]">
                <div className="relative z-10 flex flex-col justify-center min-h-[60vh]">
                <p
                    className="text-[11px] tracking-widest uppercase font-inter text-secondary-text mb-6"
                    style={{ animation: "fadeUp 0.6s ease 0.1s forwards", opacity: 0 }}
                >
                    Haneefah Aliu &nbsp;·&nbsp; <span className="text-black font-medium">Product Designer based in Canada</span>
                </p>

                {/* Headline */}
                <h1 className="text-[clamp(2.4rem,6vw,4.2rem)] font-bold leading-[1.12] max-w-6xl">
                    {[
                        <><span className="font-plusJakarta text-black text-7xl">I design products that </span></>,
                        <><span className="font-plusJakarta text-black text-7xl">look good, work well, </span></>,
                        <><span className="font-plusJakarta text-black text-7xl">and feel right. </span></>,
                    ].map((line, i) => (
                        <span
                            key={i}
                            className="block"
                            style={{ animation: `fadeUp 0.7s ease ${0.25 + i * 0.13}s forwards`, opacity: 0 }}
                        >
                            {line}
                        </span>
                    ))}
                </h1>

                {/* Subtext */}
                <p
                    className="mt-6 font-inter font-light text-[16px] text-secondary-text max-w-md leading-relaxed"
                    style={{ animation: "fadeUp 0.6s ease 0.7s forwards", opacity: 0 }}
                >
                    I care about the whole experience — how it looks, how it works, and how it makes people feel.
                </p>
                </div>

                {/* Projects */}
                <div >
                    <div className='flex items-end justify-between'>
                        <h1 className='text-3xl font-bold font-plusJakarta leading-[1.05]'>Selected Works.</h1>
                        <a href="/case-studies" className="rounded-full border border-border-line px-6 py-3 text-[16px] font-inter transition hover:bg-black/5">View All</a>
                    </div>
                    <section className="my-12 grid grid-cols-2 gap-6">
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
