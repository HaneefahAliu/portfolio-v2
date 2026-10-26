import { useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Logo from "../assets/images/Logo-black.png";

export default function Header() {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    const links = [
        { label: "Case Studies", href: "/case-studies", emoji: "💼", color: "#f4a261" },
        { label: "Lab", href: "/lab", emoji: "🧪", color: "#6bcb77" },
        { label: "About", href: "/about", emoji: "✌️", color: "#4d96ff" },
    ];

    const extraLinks = [
        { label: "Contact", href: "mailto:aliuhaneefah@gmail.com", external: false },
    ];

    const isActive = (href) =>
        location.pathname === href || location.pathname.startsWith(href + '/');

    return (
        <header className='page-grid relative z-50'>
            <div className="flex items-center justify-between px-5 sm:px-[4%] py-6 sm:py-8">
                <Link to='/'>
                    <img className='h-auto w-7 sm:w-8' src={Logo} alt="Haneefah" />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center px-2 py-1.5 gap-1">
                    {links.map(({ label, href, emoji, color }) => (
                        <div key={href} className="relative group">
                            <Link
                                to={href}
                                className={`text-[13px] font-inter px-4 py-1.5 rounded-full font-light uppercase transition-all duration-200 block ${
                                    isActive(href)
                                        ? 'bg-black/8 text-black font-medium'
                                        : 'text-link hover:text-black'
                                }`}
                            >
                                {label}
                            </Link>

                            {/* Wiggle + emoji tooltip */}
                            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 flex flex-col items-center
                                opacity-0 group-hover:opacity-100 pointer-events-none
                                transition-all duration-200 translate-y-1 group-hover:translate-y-0 z-50">
                                <svg width="60" height="12" viewBox="0 0 60 12" fill="none">
                                    <path
                                        d="M0 6 Q7.5 0 15 6 Q22.5 12 30 6 Q37.5 0 45 6 Q52.5 12 60 6"
                                        stroke={color}
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        fill="none"
                                    />
                                </svg>
                                <div className="mt-1 px-2 py-1 rounded-xl bg-white border border-black/8 shadow-sm text-lg">
                                    {emoji}
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="w-px h-4 bg-secondary-text mx-1" />

                    <a 
                        href="mailto:aliuhaneefah@gmail.com"
                        className="text-[13px] font-inter px-4 py-1.5 rounded-full font-light uppercase text-link hover:text-black transition-all duration-200"
                    >
                        Contact
                    </a>
                    {/* <ResumeButton className="text-[13px] font-inter px-4 py-1.5 rounded-full font-light uppercase text-secondary-text hover:text-black transition-all duration-200" /> */}
                </nav>

                {/* Desktop — Location + Status */}
                <div className="hidden md:flex flex-col text-right">
                    <span className="text-[13px] font-inter font-medium text-black">Toronto, ON</span>
                    <div className="flex items-center justify-end gap-1.5 mt-0.5">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-[13px] font-inter font-light text-black/40">Open to Work</span>
                    </div>
                </div>

                {/* Mobile — status dot + hamburger */}
                <div className="flex md:hidden items-center gap-3">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <button
                        onClick={() => setMenuOpen((o) => !o)}
                        aria-label="Toggle menu"
                        className="flex flex-col justify-center gap-[5px] w-6 h-6"
                    >
                        <span className={`block h-px bg-black transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
                        <span className={`block h-px bg-black transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
                        <span className={`block h-px bg-black transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
                    </button>
                </div>
            </div>

            {/* Mobile Fullscreen Menu */}
            <div className={`fixed md:hidden inset-0 bg-white z-40 flex flex-col px-5 pt-6 pb-10 transition-all duration-300 ease-in-out ${
                menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}>
                <div className="flex items-center justify-between mb-10">
                    <Link to='/' onClick={() => setMenuOpen(false)}>
                        <img className='h-auto w-7' src={Logo} alt="Haneefah" />
                    </Link>
                    <button
                        onClick={() => setMenuOpen(false)}
                        aria-label="Close menu"
                        className="flex flex-col justify-center gap-[5px] w-6 h-6"
                    >
                        <span className="block h-px bg-black transition-all duration-300 origin-center rotate-45 translate-y-[3px]" />
                        <span className="block h-px bg-black transition-all duration-300 origin-center -rotate-45 -translate-y-[3px]" />
                    </button>
                </div>

                <nav className="flex flex-col gap-1 flex-1">
                    {links.map(({ label, href, emoji }, i) => (
                        <Link
                            key={href}
                            to={href}
                            className={`text-[13px] font-inter px-4 py-3 rounded-full font-light uppercase transition-colors duration-200 flex items-center justify-between ${
                                isActive(href)
                                    ? 'bg-black/5 text-black font-medium'
                                    : 'text-secondary-text hover:text-black'
                            }`}
                            style={{
                                transform: menuOpen ? 'translateY(0)' : 'translateY(12px)',
                                opacity: menuOpen ? 1 : 0,
                                transition: `transform 0.3s ease ${i * 0.06}s, opacity 0.3s ease ${i * 0.06}s`,
                            }}
                        >
                            <span>{label}</span>
                            <span className="text-base">{emoji}</span>
                        </Link>
                    ))}

                    <div className="h-px bg-black/8 mx-4 my-2" />

                    {extraLinks.map(({ label, href, external }, i) => (
                        <a
                            key={label}
                            href={href}
                            target={external ? "_blank" : undefined}
                            rel={external ? "noreferrer" : undefined}
                            className="text-[13px] font-inter px-4 py-3 rounded-full font-light uppercase text-secondary-text hover:text-black transition-colors duration-200"
                            style={{
                                transform: menuOpen ? 'translateY(0)' : 'translateY(12px)',
                                opacity: menuOpen ? 1 : 0,
                                transition: `transform 0.3s ease ${(links.length + 1 + i) * 0.06}s, opacity 0.3s ease ${(links.length + 1 + i) * 0.06}s`,
                            }}
                        >
                            {label}
                        </a>
                    ))}

                    {/* <ResumeButton
                        className="text-[13px] font-inter px-4 py-3 rounded-full font-light uppercase text-secondary-text hover:text-black transition-colors duration-200 text-left"
                        style={{
                            transform: menuOpen ? 'translateY(0)' : 'translateY(12px)',
                            opacity: menuOpen ? 1 : 0,
                            transition: `transform 0.3s ease ${(links.length + 2) * 0.06}s, opacity 0.3s ease ${(links.length + 2) * 0.06}s`,
                        }}
                    /> */}
                </nav>

                <div className="flex flex-col">
                    <span className="text-[13px] font-inter font-medium text-black">Toronto, ON</span>
                    <span className="text-[13px] font-inter font-light text-black/40 mt-0.5">Open to Work</span>
                </div>
            </div>
        </header>
    );
}