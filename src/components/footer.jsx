import React from "react";
import { ArrowUpRight, FileText, Mails } from "lucide-react";
import LargeText from "../assets/images/haneefah-cut.png";

const Footer = () => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <footer className="min-h-screen bg-black text-white">
            {/* grid lines overlay */}
            <div className="pointer-events-none absolute inset-0 opacity-20">
                <div className="h-full w-full bg-[repeating-linear-gradient(to_right,rgba(255,255,255,0.12)_0px,rgba(255,255,255,0.12)_1px,transparent_1px,transparent_320px)] bg-[position:40px_0]" />
            </div>

            <div div className="px-4">
                <div className="flex min-h-[560px] flex-col items-center justify-center text-center">
                    <h2 className="text-[70px] font-extrabold font-anton leading-[1] tracking-tight">
                        LET&apos;S MAKE SOMETHING COOL!
                    </h2>

                    <p className="mt-2 max-w-[600px] text-[14px] leading-5 text-white/80 font-inter font-light">
                        Curious problems, ambitious teams, and thoughtful ideas are my favourite things to work on. If you’re working on something great, I’d love to hear from you :)
                    </p>
                </div>

                <div class="flex flex-row">
                    <div>
                        <p>[social]</p>
                        <div>
                            <a>Email me</a>
                            <a>My Resume</a>
                        </div>
                    </div>

                    <div>
                        <p>[menu]</p>
                        <div>
                            <a>Email me</a>
                            <a>My Resume</a>
                        </div>
                    </div>

                    <div>
                        <p>[social]</p>
                        <div>
                            <a>Email me</a>
                            <a>My Resume</a>
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

                {/* SOCIAL LINKS ROW */}
                <div className="flex items-center pb-4 justify-between text-[14px] text-white font-inter font-light">
                    <a
                        href="https://www.linkedin.com/in/haneefah-aliu-6a8a21160/"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-white/50 transition"
                    >
                        [LinkedIn]
                    </a>
                    <a
                        href="https://www.instagram.com/haneefah.design/"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-white/50 transition"
                    >
                        [Instagram]
                    </a>
                    <a
                        href="https://www.behance.net/haneefahhh"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-white/50 transition"
                    >
                        [Behance]
                    </a>
                    <a
                        href="https://medium.com/@haneefahaliu"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-white/50 transition"
                    >
                        [Medium]
                    </a>
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
