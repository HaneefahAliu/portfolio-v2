
import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../assets/images/Logo-black.png";

const links = [
  { label: "Case Studies", href: "/case-studies", emoji: "💼" },
  { label: "Lab", href: "/lab", emoji: "🧪" },
  { label: "About", href: "/about", emoji: "✌️" },
];

const extraLinks = [
  {
    label: "Contact",
    href: "mailto:aliuhaneefah@gmail.com",
  },
];

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (menuOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  const isActive = (href) =>
    location.pathname === href ||
    location.pathname.startsWith(href + "/");

  return (
    <header className="page-grid relative z-50">
      <div className="flex items-center justify-between px-5 py-6 sm:px-[4%] sm:py-8">
        {/* LOGO */}
        <Link to="/" aria-label="Home">
          <img
            className="h-auto w-7 sm:w-8"
            src={Logo}
            alt="Haneefah"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 px-2 py-1.5 md:flex"
        >
          {links.map(({ label, href, emoji }) => {
            const active = isActive(href);

            return (
              <div key={href} className="group relative">
                <Link
                  to={href}
                  aria-current={active ? "page" : undefined}
                  className={`
                    relative block rounded-full
                    px-4 py-1.5
                    font-inter text-[13px] font-light uppercase
                    transition-colors duration-300
                    ${
                      active
                        ? "font-medium text-black"
                        : "text-black/55 hover:text-black"
                    }
                  `}
                >
                  {label}

                  {/* REFINED UNDERLINE */}
                  <span
                    aria-hidden="true"
                    className={`
                      pointer-events-none absolute
                      bottom-0 left-4 right-4 h-px
                      origin-left bg-[#ed9b75]
                      transition-transform duration-300
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      ${
                        active
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100 group-focus-within:scale-x-100"
                      }
                    `}
                  />
                </Link>

                {/* FLOATING EMOJI */}
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none absolute
                    left-1/2 top-full z-50 mt-2
                    -translate-x-1/2 translate-y-1
                    scale-75 opacity-0
                    text-[19px]
                    transition-all duration-300
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover:translate-y-0
                    group-hover:scale-100
                    group-hover:opacity-100
                    group-focus-within:translate-y-0
                    group-focus-within:scale-100
                    group-focus-within:opacity-100
                  "
                >
                  {emoji}
                </span>
              </div>
            );
          })}

          {/* DIVIDER */}
          <div className="mx-1 h-4 w-px bg-black/15" />

          {/* CONTACT */}
          <a
            href="mailto:aliuhaneefah@gmail.com"
            className="
              rounded-full px-4 py-1.5
              font-inter text-[13px] font-light uppercase
              text-black/55 transition-colors duration-300
              hover:text-black
            "
          >
            Contact
          </a>
        </nav>

        {/* DESKTOP LOCATION + STATUS */}
        <div className="hidden flex-col text-right md:flex">
          <span className="font-inter text-[13px] font-medium text-black">
            Toronto, ON
          </span>

          <div className="mt-0.5 flex items-center justify-end gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>

            <span className="font-inter text-[13px] font-light text-black/40">
              Open to Work
            </span>
          </div>
        </div>

        {/* MOBILE STATUS + MENU BUTTON */}
        <div className="flex items-center gap-3 md:hidden">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="relative z-[60] flex h-6 w-6 flex-col justify-center gap-[5px]"
          >
            <span
              className={`block h-px origin-center bg-black transition-all duration-300 ${
                menuOpen ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px bg-black transition-all duration-300 ${
                menuOpen ? "scale-x-0 opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px origin-center bg-black transition-all duration-300 ${
                menuOpen ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* MOBILE FULLSCREEN MENU */}
      <div
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        className={`
          fixed inset-0 z-40 flex flex-col
          bg-white px-5 pb-10 pt-6
          transition-all duration-300 ease-in-out
          md:hidden
          ${
            menuOpen
              ? "pointer-events-auto visible opacity-100"
              : "pointer-events-none invisible opacity-0"
          }
        `}
      >
        <div className="mb-10 flex items-center justify-between">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img
              className="h-auto w-7"
              src={Logo}
              alt="Haneefah"
            />
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="flex h-6 w-6 flex-col justify-center gap-[5px]"
          >
            <span className="block h-px translate-y-[3px] rotate-45 bg-black" />
            <span className="block h-px -translate-y-[3px] -rotate-45 bg-black" />
          </button>
        </div>

        <nav
          aria-label="Mobile navigation"
          className="flex flex-1 flex-col gap-1"
        >
          {links.map(({ label, href, emoji }, index) => (
            <Link
              key={href}
              to={href}
              tabIndex={menuOpen ? 0 : -1}
              aria-current={isActive(href) ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
              className={`
                flex items-center justify-between
                rounded-full px-4 py-3
                font-inter text-[13px] font-light uppercase
                transition-colors duration-200
                ${
                  isActive(href)
                    ? "bg-black/5 font-medium text-black"
                    : "text-secondary-text hover:text-black"
                }
              `}
              style={{
                transform: menuOpen
                  ? "translateY(0)"
                  : "translateY(12px)",
                opacity: menuOpen ? 1 : 0,
                transition: `transform 0.3s ease ${
                  index * 0.06
                }s, opacity 0.3s ease ${index * 0.06}s`,
              }}
            >
              <span>{label}</span>
              <span className="text-base" aria-hidden="true">
                {emoji}
              </span>
            </Link>
          ))}

          <div className="mx-4 my-2 h-px bg-black/10" />

          {extraLinks.map(({ label, href }, index) => (
            <a
              key={label}
              href={href}
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => setMenuOpen(false)}
              className="
                rounded-full px-4 py-3
                font-inter text-[13px] font-light uppercase
                text-secondary-text
                transition-colors duration-200
                hover:text-black
              "
              style={{
                transform: menuOpen
                  ? "translateY(0)"
                  : "translateY(12px)",
                opacity: menuOpen ? 1 : 0,
                transition: `transform 0.3s ease ${
                  (links.length + 1 + index) * 0.06
                }s, opacity 0.3s ease ${
                  (links.length + 1 + index) * 0.06
                }s`,
              }}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col">
          <span className="font-inter text-[13px] font-medium text-black">
            Toronto, ON
          </span>
          <span className="mt-0.5 font-inter text-[13px] font-light text-black/40">
            Open to Work
          </span>
        </div>
      </div>
    </header>
  );
}
