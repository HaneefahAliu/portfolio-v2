import React from "react";
import "../pages/globals.css";
import { ArrowUpRight } from "lucide-react";
import LargeText from "../assets/images/haneefah-cut.png";

const Footer = () => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <footer className="min-h-screen bg-[#1A1A1A] text-white footer-grid flex flex-col">
            
            {/* Top section — CTA, grows to fill space */}
            <div className="flex-1 flex flex-col items-center justify-center text-center px-[12%] py-16">
                <h2 className="text-[clamp(2.5rem,8vw,7rem)] font-extrabold font-anton leading-[1] tracking-tight">
                    LET&apos;S MAKE SOMETHING COOL!
                </h2>
                <p className="mt-6 max-w-[500px] text-[14px] leading-6 text-white/60 font-inter font-light">
                    Curious problems, ambitious teams, and thoughtful ideas are my favourite things to work on. If you're working on something great, I'd love to hear from you :)
                </p>
            </div>

            {/* Middle section — links */}
            <div className="flex flex-row justify-between px-[8%] pb-12">
                <div className="font-inter font-light">
                    <p className="uppercase text-[12px] text-white/40 pb-10">[reach me]</p>
                    <div className="flex flex-col text-[14px] text-white gap-4">
                        <a href="mailto:aliuhaneefah@gmail.com" target="_blank" className="hover:text-white/50">Email me</a>
                        <a href="https://drive.google.com/file/d/16O7lryzTYDdf300XZD0CP47gqPur4KW7/view?usp=sharing" target="_blank" className="hover:text-white/50">My Resume</a>
                    </div>
                </div>

                <div className="font-inter font-light">
                    <p className="uppercase text-[12px] text-white/40 pb-10">[menu]</p>
                    <div className="flex flex-col text-[14px] text-white gap-4">
                        <a href="/" className="hover:text-white/50">Home</a>
                        <a href="/case-studies" className="hover:text-white/50">Case Studies</a>
                        <a href="/playground" className="hover:text-white/50">Explorations</a>
                        <a href="/about" className="hover:text-white/50">About</a>
                    </div>
                </div>

                <div className="font-inter font-light">
                    <p className="uppercase text-[12px] text-white/40 pb-10">[social]</p>
                    <div className="flex flex-col text-[14px] text-white gap-4">
                        <a href="https://www.linkedin.com/in/haneefah-aliu-6a8a21160/" target="_blank" rel="noreferrer" className="hover:text-white/50">LinkedIn</a>
                        <a href="https://www.behance.net/haneefahhh" target="_blank" rel="noreferrer" className="hover:text-white/50">Behance</a>
                        <a href="https://dribbble.com/Haneefahhh" target="_blank" rel="noreferrer" className="hover:text-white/50">Dribbble</a>
                        <a href="https://www.instagram.com/haneefah.design/" target="_blank" rel="noreferrer" className="hover:text-white/50">Instagram</a>
                    </div>
                </div>

                <div>
                    <button
                        type="button"
                        onClick={scrollToTop}
                        className="flex items-center gap-1 text-sm text-white hover:text-white/60 transition font-inter font-light"
                    >
                        Back to top <ArrowUpRight size={18} />
                    </button>
                </div>
            </div>

            {/* Bottom section — large name image with copyright overlay */}
            <div className="relative">
                <img src={LargeText} alt="Haneefah" className="w-full block" />
                <div className="absolute bottom-0 left-0 right-0 px-[2%] py-4 flex items-center justify-between text-[14px] text-white/50 font-inter font-light">
                    <span>Haneefah Aliu © 2026</span>
                    <span>Designed &amp; developed by{" "}
                        <a href="/" className="text-white">Me 🤌</a>
                    </span>
                </div>
            </div>

        </footer>
    );
};

export default Footer;