import React from 'react';
import { Link } from 'react-router-dom';
import projects from "../data/projects";
import ProjectCard from "../components/projectCard";
import "./globals.css";

function Home() {
    const featured = projects.filter((p) => p.featured);
    
    return (
        <main className='page-grid pb-24'>
            <div className="px-5 sm:px-8 md:px-[8%] lg:px-[12%]">
                
                {/* Hero */}
                <div className="relative z-10 flex flex-col justify-center min-h-[55vh] sm:min-h-[60vh]">
                    <p
                        className="text-[10px] sm:text-[11px] tracking-widest uppercase font-inter text-secondary-text mb-4 sm:mb-6"
                        style={{ animation: "fadeUp 0.6s ease 0.1s forwards", opacity: 0 }}
                    >
                        Haneefah Aliu &nbsp;·&nbsp;{" "}
                        <span className="text-black font-medium">Design Engineer based in Canada</span>
                    </p>

                    {/* Headline */}
                    <h1 className="font-bold leading-[1.3]">
                        {[
                            "I design and build products ",
                            "that look good, work ",
                            "well, and feel right. ",
                        ].map((line, i) => (
                            <span
                                key={i}
                                className="block font-plusJakarta text-black text-[clamp(2rem,8vw,4.5rem)]"
                                style={{ animation: `fadeUp 0.7s ease ${0.25 + i * 0.13}s forwards`, opacity: 0 }}
                            >
                                {line}
                            </span>
                        ))}
                    </h1>

                    {/* Subtext */}
                    <p
                        className="mt-4 sm:mt-6 font-inter font-light text-[14px] sm:text-[16px] text-secondary-text max-w-sm sm:max-w-md leading-relaxed"
                        style={{ animation: "fadeUp 0.6s ease 0.7s forwards", opacity: 0 }}
                    >
                        I care about the whole experience — how it looks, how it works, and how it makes people feel.
                    </p>
                </div>

                {/* Projects */}
                <div>
                    <div className='flex items-center sm:items-end justify-between gap-4'>
                        <h1 className='text-2xl sm:text-3xl font-bold font-plusJakarta leading-[1.05]'>
                            Selected Works.
                        </h1>
                        <Link
                            to="/case-studies"
                            className="shrink-0 rounded-full border border-border-line px-4 sm:px-6 py-2 sm:py-3 text-[13px] sm:text-[16px] font-inter transition hover:bg-black/5"
                        >
                            View All
                        </Link>
                    </div>

                    <section className="my-8 sm:my-12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
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