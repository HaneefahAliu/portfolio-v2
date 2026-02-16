import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

import Logo from "../assets/images/Logo-black.png";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {/* Header */}
            {/* <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? 'bg-white/20 backdrop-blur-md' : ''}`}
            > */}
            <header>
                <div className="flex items-center justify-between px-10 py-8">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href='/'>
                                <img className='h-auto w-8' src={Logo} />
                            </a>
                    </div>

                    {/*  Grid Icon */}
                    <button onClick={toggleMenu} className="transition-colors duration-200 p-2 rounded-lg" aria-label="Toggle menu">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 10.75H5C2.58 10.75 1.25 9.42 1.25 7V5C1.25 2.58 2.58 1.25 5 1.25H7C9.42 1.25 10.75 2.58 10.75 5V7C10.75 9.42 9.42 10.75 7 10.75ZM5 2.75C3.42 2.75 2.75 3.42 2.75 5V7C2.75 8.58 3.42 9.25 5 9.25H7C8.58 9.25 9.25 8.58 9.25 7V5C9.25 3.42 8.58 2.75 7 2.75H5Z" fill="black"/>
                            <path d="M19 10.75H17C14.58 10.75 13.25 9.42 13.25 7V5C13.25 2.58 14.58 1.25 17 1.25H19C21.42 1.25 22.75 2.58 22.75 5V7C22.75 9.42 21.42 10.75 19 10.75ZM17 2.75C15.42 2.75 14.75 3.42 14.75 5V7C14.75 8.58 15.42 9.25 17 9.25H19C20.58 9.25 21.25 8.58 21.25 7V5C21.25 3.42 20.58 2.75 19 2.75H17Z" fill="black"/>
                            <path d="M19 22.75H17C14.58 22.75 13.25 21.42 13.25 19V17C13.25 14.58 14.58 13.25 17 13.25H19C21.42 13.25 22.75 14.58 22.75 17V19C22.75 21.42 21.42 22.75 19 22.75ZM17 14.75C15.42 14.75 14.75 15.42 14.75 17V19C14.75 20.58 15.42 21.25 17 21.25H19C20.58 21.25 21.25 20.58 21.25 19V17C21.25 15.42 20.58 14.75 19 14.75H17Z" fill="black"/>
                            <path d="M7 22.75H5C2.58 22.75 1.25 21.42 1.25 19V17C1.25 14.58 2.58 13.25 5 13.25H7C9.42 13.25 10.75 14.58 10.75 17V19C10.75 21.42 9.42 22.75 7 22.75ZM5 14.75C3.42 14.75 2.75 15.42 2.75 17V19C2.75 20.58 3.42 21.25 5 21.25H7C8.58 21.25 9.25 20.58 9.25 19V17C9.25 15.42 8.58 14.75 7 14.75H5Z" fill="black"/>
                        </svg>
                    </button>

                </div>
            </header>

            {/* Full Page Menu Overlay */}
            <div className={`fixed inset-0 z-50 bg-black transition-transform duration-500 ease-in-out ${
                isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="h-full flex flex-col">
                    {/* Menu Header */}
                    <div className="flex items-center justify-between p-4 sm:p-6 lg:p-8">
                        <div className="flex items-center">
                            <a href='/'>
                                <img className='h-auto w-8' src={Logo} />
                            </a>
                        </div>
                        <button onClick={toggleMenu} className="text-gray-300 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-gray-800" aria-label="Close menu">
                            <X size={24} />
                        </button>
                    </div>

                    {/* Menu Content */}
                    <div className="flex-1 flex flex-col justify-center items-end pr-8 sm:pr-16 lg:pr-24 space-y-8 sm:space-y-12">
                        <nav className="text-right space-y-6 sm:space-y-8">
                            <a href="/" className="block text-4xl xl:text-8xl font-anton text-grey hover:text-white transition-colors duration-300 tracking-wider" onClick={toggleMenu}>
                                HOME
                            </a>
                            <a href="/case-studies" className="block text-4xl xl:text-8xl font-anton text-grey hover:text-white transition-colors duration-300 tracking-wider" onClick={toggleMenu}>
                                CASE STUDIES
                            </a>
                            <a href="" className="block text-4xl xl:text-8xl font-anton text-grey hover:text-white transition-colors duration-300 tracking-wider" onClick={toggleMenu}>
                                PLAYGROUND
                            </a>
                            <a href="/about" className="block text-4xl xl:text-8xl font-anton text-grey hover:text-white transition-colors duration-300 tracking-wider" onClick={toggleMenu}>
                                ABOUT
                            </a>
                            <a href="/contact" className="block text-4xl xl:text-8xl font-anton text-grey hover:text-white transition-colors duration-300 tracking-wider" onClick={toggleMenu}>
                                CONTACT
                            </a>
                        </nav>
                    </div>

                    {/* Menu Footer */}
                    <div className="p-4 sm:p-6 lg:p-8">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                            <div className="text-white">
                                <a href="mailto:aliuhaneefah@gmail.com" className="font-inter font-light text-[14px] underline decoration-solid hover:text-secondary-text transition-colors duration-200">
                                    aliuhaneefah@gmail.com
                                </a>
                            </div>
                            <div className="flex space-x-4 text-[14px] font-inter font-light text-white">
                                <a href="https://www.linkedin.com/in/haneefah-aliu-6a8a21160/"  target="_blank" className="hover:text-secondary-text transition-colors duration-200 px-3 py-1">
                                    [LinkedIn]
                                </a>
                                <a href="https://www.instagram.com/haneefah.design/" target="_blank" className="hover:text-secondary-text transition-colors duration-200 px-3 py-1">
                                    [Instagram]
                                </a>
                                <a href="https://www.behance.net/haneefahhh" target="_blank" className="hover:text-secondary-text transition-colors duration-200 px-3 py-1">
                                    [Behance]
                                </a>
                                <a href="https://medium.com/@haneefahaliu" target="_blank" className="hover:text-secondary-text transition-colors duration-200 px-3 py-1">
                                    [Medium]
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}