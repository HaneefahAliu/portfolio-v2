import React from "react";
import "./globals.css";
import { ArrowUpRight } from "lucide-react";
import LargeText from "../assets/images/haneefah-cut.png";

const Footer = () => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <footer className="min-h-screen bg-black text-white footer-grid">
            <div className="pb-6">
                <div className="flex min-h-[560px] flex-col items-center justify-center text-center">
                    <h2 className="text-[100px] font-extrabold font-anton leading-[1] tracking-tight">LET&apos;S MAKE SOMETHING COOL!</h2>
                    <p className="mt-6 max-w-[500px] text-[14px] leading-5 text-white font-inter font-light">
                        Curious problems, ambitious teams, and thoughtful ideas are my favourite things to work on. If you’re working on something great, I’d love to hear from you :)
                    </p>
                </div>

                <div class="flex flex-row justify-between mx-auto max-w-[1440px]">
                    <div className="font-inter font-light">
                        <p className="uppercase text-[12px] text-white/40 pb-10">[reach me]</p>
                        <div className="flex flex-col text-[14px] text-white">
                            <a href="mailto:aliuhaneefah@gmail.com" target="_blank" className="hover:text-white/50 pb-6">Email me</a>
                            <a href="https://drive.google.com/file/d/12BHwm1T7urf-gQgDPAoH4sIyc3YSSmgq/view?usp=sharing" target="_blank" className="hover:text-white/50 pb-6">My Resume</a>
                        </div>
                    </div>

                    <div className="font-inter font-light">
                        <p className="uppercase text-[12px] text-white/40 pb-10">[menu]</p>
                        <div className="flex flex-col text-[14px] text-white">
                            <a href="/" className="pb-4">
                                Home
                            </a>
                            <a href="/case-studies" className="hover:text-white/50 pb-6">
                                Case Studies
                            </a>
                            <a href="/playground" className="hover:text-white/50 pb-6">
                                Explorations
                            </a>
                            <a href="/about" className="hover:text-white/50 pb-6">
                                About
                            </a>
                        </div>
                    </div>

                    <div className="font-inter font-light">
                        <p className="uppercase text-[12px] text-white/40 pb-10">[social]</p>
                        <div className="flex flex-col text-[14px] text-white">
                            <a
                                href="https://www.linkedin.com/in/haneefah-aliu-6a8a21160/"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-white/50 transition pb-6"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://www.behance.net/haneefahhh"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-white/50 transition pb-6"
                            >
                                Behance
                            </a>
                            <a
                                href="https://dribbble.com/Haneefahhh"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-white/50 transition pb-6"
                            >
                                Dribble
                            </a>
                            <a
                                href="https://www.instagram.com/haneefah.design/"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-white/50 transition pb-6"
                            >
                                Instagram
                            </a>
                        </div>
                    </div>

                    <div>
                        <button
                            type="button"
                            onClick={scrollToTop}
                            className="flex items-center gap-1 text-sm text-white hover:text-white/60 transition font-inter font-light"
                        >
                            Back to top <span className="text-[14px]"><ArrowUpRight size={18} /></span>
                        </button>
                    </div>
                </div>

                <div className="relative">
                    <img src={LargeText} alt="Haneefah" className="w-full block"/>

                    {/* Footer text OVER the image */}
                    <div className="absolute bottom-0 left-0 right-0 px-6 py-4 flex items-center justify-between text-[14px] text-white/50 font-inter font-light">
                        <span>Haneefah Aliu © 2026</span>

                        <span>Designed &amp; developed by{" "}
                            <a href="/" className="text-white">Me 🤌</a>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
        );
};

export default Footer;
