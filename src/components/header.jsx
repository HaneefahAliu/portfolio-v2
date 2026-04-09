import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Logo from "../assets/images/Logo-black.png";

export default function Header() {
    const location = useLocation();

    const links = [
        { label: "Case studies", href: "/case-studies" },
        { label: "Explorations", href: "/playground" },
        { label: "About", href: "/about" },
    ];

    return (
        <header>
            <div className="flex items-center justify-between px-[4%] py-10">
                {/* Logo */}
                <a href='/'>
                    <img className='h-auto w-8' src={Logo} alt="Haneefah" />
                </a>

                {/* Nav links */}
                <nav className="flex items-center gap-8">
                    {links.map(({ label, href }) => {
                        const isActive = location.pathname === href;
                        return (
                            <Link
                                key={href}
                                to={href}
                                className={`text-[14px] font-inter font-light uppercase transition-colors duration-200 ${
                                    isActive
                                        ? 'text-black'
                                        : 'text-black/40 hover:text-black'
                                }`}
                            >
                                {label}
                            </Link>
                        );
                    })}

                    <a href="mailto:aliuhaneefah@gmail.com" className="text-[14px] font-inter font-light uppercase text-black/40 hover:text-black transition-colors duration-200">
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    );
}