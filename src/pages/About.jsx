import React from "react";

import {services, galleryItems} from '../data/about';

import AutoMarqueeGallery from "../components/imageMarquee";
import Pic1 from "../assets/images/hanee-1.JPG";
import Pic2 from "../assets/images/hanee-2.jpg";


export default function About() {
    return (
        <main className='page-grid'>
            <div className="mx-auto max-w-[1440px]">
                <section className="min-h-screen flex flex-col">
                    <div className="mt-auto pb-40">
                        <div className="relative h-[120px] w-[180px] group">
                            {/* CARD 1 */}
                            <div className="absolute left-0 top-4 rotate-[-10deg] transition-all duration-500 ease-out group-hover:-translate-x-4 group-hover:-rotate-[18deg]">
                                <div className="absolute -inset-2 rounded-[18px] bg-white/70 blur-lg" />
                                <div className="relative rounded-[18px] bg-white p-[6px] shadow-[0_16px_30px_rgba(0,0,0,0.22)]">
                                    <img src={Pic1} alt="Haneefah" className="h-[90px] w-[70px] rounded-[12px] object-cover" />
                                    <div className=" pointer-events-none absolute inset-0 rounded-[12px] bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:6px_6px] mix-blend-overlay"/>
                                </div>
                            </div>

                            {/* CARD 2 */}
                            <div className="absolute left-14 top-0 rotate-[8deg] transition-all duration-500 ease-out group-hover:translate-x-4 group-hover:rotate-[16deg]">
                                <div className="absolute -inset-2 rounded-[18px] bg-white/70 blur-lg" />
                                <div className="relative rounded-[18px] bg-white p-[6px] shadow-[0_16px_30px_rgba(0,0,0,0.22)]">
                                    <img src={Pic2} alt="Haneefah" className="h-[90px] w-[70px] rounded-[12px] object-cover"/>
                                    <div className="pointer-events-none absolute inset-0 rounded-[12px] bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:6px_6px] mix-blend-overlay"/>
                                </div>
                            </div>
                        </div>

                        <div className="font-plusJakarta">
                            <p className="mt-8 text-[20px] italic font-light tracking-[-0.02em] text-secondary-text">Haneefah Aliu</p>
                            <h1 className="text-[100px] font-bold leading-[1.05]">
                                Product Designer,
                                <br />
                                Side quest warrior.
                            </h1>
                        </div>
                    </div>
                </section>

                <section className="px-6 py-2">
                    <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-24">
                        <div className="grid grid-cols-12 gap-6">
                            {/* LEFT LABEL */}
                            <div className="col-span-12 lg:col-span-2">
                                <div className="flex items-center gap-3 lg:sticky lg:top-10">
                                    <p className="text-xs uppercase text-secondary-text text font-inter font-light tracking-[0.22em]">/ about me</p>
                                </div>
                            </div>

                            {/* RIGHT CONTENT */}
                            <div className="col-span-12 lg:col-span-10">
                                <div className="mx-auto max-w-[700px] space-y-14">
                                    <p className="font-inter font-light text-[18px]">Hi :) I’m Haneefah, a product designer who engineers sometimes with 5+ years of experience  creating clear, intuitive, and human-centered digital experiences. I love thoughtful details, refined visuals, and seamless interactions. I'm on a mission to make the digital world a little more fulfilling by merging tools and processes to produce simple and delightful designs that elevate everyday experiences – simple yet impactful, intuitive to use, and leaving a lasting impression while also meeting the objective of the business.</p>
                                    <p className="font-inter font-light text-[18px]">With a background in Computer Information Systems and a Master’s in User Experience Design, I sit confidently at the intersection of design and engineering — bridging what's technically possible with what users truly need.</p>
                                    <p className="font-inter font-light text-[18px]">My work is driven by user narratives and the desire to create meaningful, impact-driven experiences. I’m always exploring new technologies and methodologies, and I thrive in collaborative environments where complex problems become opportunities for thoughtful, human-centered solutions.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-24">
                        <div className="grid grid-cols-12 gap-6">
                            {/* LEFT LABEL */}
                            <div className="col-span-12 lg:col-span-2">
                                <div className="lg:sticky lg:top-10">
                                    <p className="text-xs uppercase font-inter font-light tracking-[0.22em] text-secondary-text">/ what i can do for you</p>
                                </div>
                            </div>

                            {/* RIGHT CONTENT */}
                            <div className="col-span-12 lg:col-span-10">
                                <div className="mx-auto max-w-[700px]">
                                    {services.map((item, idx) => (
                                        <div
                                            key={item.title}
                                            className={[
                                            idx === 0 ? "pt-0" : "pt-10 border-t border-border-line",
                                            "pb-10",
                                            ].join(" ")}
                                        >
                                            <h3 className="text-[16px] font-bold font-plusJakarta tracking-[-0.02em] text-black">{item.title}</h3>
                                            <p className="mt-2 text-[16px] font-light leading-relaxed text-secondary-text">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <AutoMarqueeGallery items={galleryItems} />
                    </div>
                </section>
            </div>
        </main>
    );
}
