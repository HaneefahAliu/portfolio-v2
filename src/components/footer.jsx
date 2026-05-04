import React, { useEffect, useState, useRef } from "react";
import "../pages/globals.css";
import { ArrowUpRight } from "lucide-react";
import LargeText from "../assets/images/haneefah-cut.png";
import { Link } from "react-router-dom";

const Footer = () => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
    const [time, setTime] = useState('');
    const headingRef = useRef(null);

    // live time
    useEffect(() => {
        const update = () => {
            const t = new Date().toLocaleTimeString('en-CA', {
                timeZone: 'America/Toronto',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            });
            setTime(t);
        };
        update();
        const interval = setInterval(update, 1000);
        return () => clearInterval(interval);
    }, []);

    // parallax tilt + color sweep
    useEffect(() => {
        const el = headingRef.current;
        if (!el) return;

        const handleMove = (e) => {
            const rect = el.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width * 100;
            const xTilt = (e.clientX - rect.left - rect.width / 2) / rect.width;
            const y = (e.clientY - rect.top - rect.height / 2) / rect.height;

            el.style.transform = `perspective(600px) rotateX(${y * -4}deg) rotateY(${xTilt * 4}deg)`;
            el.style.backgroundImage = `linear-gradient(
                90deg,
                #ffffff ${x - 30}%,
                #ff6b6b ${x - 10}%,
                #ffd93d ${x}%,
                #6bcb77 ${x + 10}%,
                #4d96ff ${x + 20}%,
                #ffffff ${x + 40}%
            )`;
            el.style.webkitBackgroundClip = 'text';
            el.style.webkitTextFillColor = 'transparent';
            el.style.backgroundClip = 'text';
        };

        const handleLeave = () => {
            el.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg)';
            el.style.backgroundImage = 'none';
            el.style.webkitTextFillColor = 'white';
        };

        el.addEventListener('mousemove', handleMove);
        el.addEventListener('mouseleave', handleLeave);

        return () => {
            el.removeEventListener('mousemove', handleMove);
            el.removeEventListener('mouseleave', handleLeave);
        };
    }, []);

    return (
        <footer 
            className="bg-[#1A1A1A] text-white flex flex-col min-h-screen"
            onMouseEnter={() => document.body.classList.add('dark-bg')}
            onMouseLeave={() => document.body.classList.remove('dark-bg')}
        >

            {/* CTA */}
            <div className="flex-1 flex flex-col items-center justify-center text-center px-[8%] py-16">
                <h2
                    ref={headingRef}
                    className="text-[clamp(2.5rem,8vw,7rem)] font-extrabold font-anton leading-[1] tracking-tight transition-transform duration-100 cursor-default select-none"
                >
                    LET&apos;S MAKE SOMETHING COOL!
                </h2>
                <p className="mt-6 max-w-[450px] text-[16px] leading-6 text-[#BABABA] font-inter font-light">
                    Curious problems, ambitious teams, and thoughtful ideas are my favourite things to work on. If you're working on something great, I'd love to hear from you :)
                </p>
            </div>

            {/* Marquee strip */}
            <div className="overflow-hidden border-t border-white/10 border-b py-3">
                <div className="flex gap-12 animate-marquee w-max">
                    {[...Array(3)].flatMap(() => [
                        'Available for Work',
                        'Toronto, Canada',
                        'Open to Collaboration',
                        'Product Design',
                        'UX Research',
                        'Design Engineering',
                    ]).map((item, i) => (
                        <span key={i} className="text-[11px] font-inter uppercase tracking-widest text-white/30 shrink-0">
                            {item} &nbsp;·
                        </span>
                    ))}
                </div>
            </div>

            {/* Links */}
            <div className="flex flex-row justify-between px-[8%] py-12">
                <div className="font-inter font-light">
                    <p className="uppercase text-[12px] text-white/40 pb-10">[reach me]</p>
                    <div className="flex flex-col text-[14px] text-white gap-4">
                        <a href="mailto:aliuhaneefah@gmail.com" target="_blank" rel="noreferrer" className="hover:text-white/50">Email me</a>
                        <a href="https://drive.google.com/file/d/16O7lryzTYDdf300XZD0CP47gqPur4KW7/view?usp=sharing" target="_blank" rel="noreferrer" className="hover:text-white/50">My Resume</a>
                    </div>
                </div>

                <div className="font-inter font-light">
                    <p className="uppercase text-[12px] text-white/40 pb-10">[menu]</p>
                    <div className="flex flex-col text-[14px] text-white gap-4">
                        <Link to="/" className="hover:text-white/50">Home</Link>
                        <Link to="/case-studies" className="hover:text-white/50">Case Studies</Link>
                        <Link to="/playground" className="hover:text-white/50">Explorations</Link>
                        <Link to="/about" className="hover:text-white/50">About</Link>
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

                {/* Time + back to top */}
                <div className="flex flex-col justify-between">
                    <div className="text-right">
                        <p className="uppercase text-[12px] text-white/40 pb-2">[local time]</p>
                        <p className="text-[14px] font-inter text-white tabular-nums">{time}</p>
                        <p className="text-[11px] font-inter text-white/30 mt-1">Toronto, ON</p>
                    </div>
                    <button
                        type="button"
                        onClick={scrollToTop}
                        className="flex items-center gap-1 text-sm text-white hover:text-white/60 transition font-inter font-light"
                    >
                        Back to top <ArrowUpRight size={18} />
                    </button>
                </div>
            </div>

            {/* Large name image */}
            <div className="relative">
                <img src={LargeText} alt="Haneefah" className="w-full block" />
                <div className="absolute bottom-0 left-0 right-0 px-[2%] py-4 flex items-center justify-between text-[14px] text-white/80 font-inter font-light">
                    <span>Haneefah © 2026</span>
                    <span>Made with one too many ☕️ and not enough 💤 </span>
                </div>
            </div>

        </footer>
    );
};

export default Footer;