import { useLocation, Link } from 'react-router-dom';
import Logo from "../assets/images/Logo-black.png";

export default function Header() {
    const location = useLocation();

    const links = [
        { label: "Case Studies", href: "/case-studies" },
        { label: "Explorations", href: "/playground" },
        { label: "About", href: "/about" },
    ];

return (
        <header className='page-grid'>
            <div className="flex items-center justify-between px-[4%] py-8">
                {/* Logo */}
                <Link to='/'>
                    <img className='h-auto w-8' src={Logo} alt="Haneefah" />
                </Link>

                {/* Nav links */}
                <nav className="flex items-center px-2 py-1.5 gap-1">
                    {links.map(({ label, href }) => {
                        const isActive = location.pathname === href || location.pathname.startsWith(href + '/');
                        return (
                            <Link
                                key={href}
                                to={href}
                                className={`text-[13px] font-inter px-4 py-1.5 rounded-full font-light uppercase transition-all duration-200 ${
                                    isActive
                                        ? 'bg-black/8 text-black font-medium'
                                        : 'text-secondary-text hover:text-black'
                                }`}
                            >
                                {label}
                            </Link>
                        );
                    })}

                    <div className="w-px h-4 bg-secondary-text mx-1" />

                    <a href="mailto:aliuhaneefah@gmail.com" className="text-[13px] font-inter px-4 py-1.5 rounded-full font-light uppercase text-secondary-text hover:text-black transition-all duration-200">
                        Contact
                    </a>
                    <a href="https://drive.google.com/file/d/16O7lryzTYDdf300XZD0CP47gqPur4KW7/view?usp=sharing" target="_blank" className="text-[13px] font-inter px-4 py-1.5 rounded-full font-light uppercase text-secondary-text hover:text-black transition-all duration-200">
                        Resume
                    </a>
                </nav>

                <div className="flex flex-col text-right">
                    <span className="text-[13px] font-inter font-medium text-black">Toronto, ON</span>
                    <div className="flex items-center justify-end gap-1.5 mt-0.5">
                        {/* Glowing green dot */}
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-[13px] font-inter font-light text-black/40">Open to Work</span>
                    </div>
                </div>
            </div>
        </header>
    );
}