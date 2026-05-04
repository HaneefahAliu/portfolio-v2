import React from "react";
import hanee1 from "../assets/images/hanee-1.JPG";
import hanee2 from "../assets/images/hanee-2.jpg";

import {galleryItems} from "../data/about";
import ToolkitMarquee from "../components/iconMarquee";
import AutoMarqueeGallery from "../components/imageMarquee";
import Interests from "../components/interests";
import "./globals.css";

export default function AboutSection() {
    return (
        <div className="page-grid px-[15%] min-h-[100vh]">
            <section className="py-12 flex flex-col md:flex-row items-center justify-between gap-12">
                {/* LEFT — text */}
                <div className="flex-1 max-w-lg">
                    <h2 className="text-xl font-medium font-plusJakarta leading-[1.15] mb-6">Hi :)</h2>
                    <div className="flex flex-col gap-6 text-[16px] font-inter font-light leading-7 text-black/50">
                        <p>I'm a <span className="font-medium text-black">product designer</span> who engineers sometimes with <span className="font-medium text-black">5+ years of experience</span> creating clear, intuitive, and human-centered digital experiences. I love thoughtful details, refined visuals, and seamless interactions. </p>
                        <p>I'm on a mission to make the digital world a little more fulfilling by merging tools and processes to produce simple and delightful designs that elevate everyday experiences – simple yet impactful, intuitive to use, and leaving a lasting impression while also meeting the objective of the business.</p>
                        <p>With a background in Computer Information Systems and a Master’s in User Experience Design, I sit confidently at the intersection of design and engineering plus understanding of business needs,  bridging what's technically possible with what users truly need.</p>
                        <p>My work is driven by user narratives and the desire to create meaningful, impact-driven experiences. I’m always exploring new technologies and methodologies, and I thrive in collaborative environments where complex problems become opportunities for thoughtful, human-centered solutions.</p>
                    </div>

                    <div className="mt-8 flex items-center gap-6 text-[14px] font-inter">
                        <a href="mailto:aliuhaneefah@gmail.com" className="underline underline-offset-4 hover:text-black/50 transition">Email me</a>
                        <a href="https://drive.google.com/file/d/16O7lryzTYDdf300XZD0CP47gqPur4KW7/view?usp=sharing" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-black/50 transition">Resume</a>
                        <a href="https://www.linkedin.com/in/haneefah-aliu-6a8a21160/" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-black/50 transition">LinkedIn</a>
                    </div>
                </div>

                {/* RIGHT — stacked polaroids */}
                <div className="relative shrink-0 w-[420px] h-[420px] group">
                    {/* Back polaroid */}
                    <div className="absolute bg-white p-3 pb-14 shadow-md w-[280px] h-[340px] rotate-[18deg] top-4 left-24 transition-transform duration-500 ease-out group-hover:rotate-[26deg] group-hover:translate-x-28 group-hover:-translate-y-2">
                        <img src={hanee2} alt="Haneefah now" className="w-full h-full object-cover grayscale"/>
                        {/* Polaroid caption */}
                        <p className="absolute bottom-3 left-0 right-6 text-right text-[11px] text-secondary-text"
                            style={{ fontFamily: "'Over the Rainbow', cursive" }}>
                            Adult Hanee
                        </p>
                    </div>

                    {/* Front polaroid */}
                    <div className="absolute bg-white p-3 pb-14 shadow-md w-[280px] h-[340px] -rotate-[10deg] top-4 left-0 transition-transform duration-500 ease-out group-hover:-rotate-[16deg] group-hover:-translate-x-12 group-hover:translate-y-4">
                        <img src={hanee1} alt="Haneefah young" className="w-full h-full object-cover"/>
                        {/* Polaroid caption */}
                        <p className="absolute bottom-3 left-6 right-0 text-center text-[11px] text-secondary-text"
                            style={{ fontFamily: "'Over the Rainbow', cursive" }}>
                            Baby Hanee
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div>
                    <ToolkitMarquee />
                </div>
            </section>

            <section className="py-32">
                <div>
                    <Interests />
                </div>
            </section>

            <section className="py-16">
                <h2 className="text-[20px] font-plusJakarta font-light uppercase tracking-widest text-secondary-text mb-10">#photo dump</h2>
                <div>
                    <AutoMarqueeGallery items={galleryItems} />
                </div>
            </section>
            
        </div>
    );
}