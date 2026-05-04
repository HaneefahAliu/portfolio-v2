import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsHidden(false);
        setIsHovering(false);
    }, [location.pathname]);

    useEffect(() => {
        const move = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });

            // check background color of element under cursor
            const el = document.elementFromPoint(e.clientX, e.clientY);
            if (el) {
                let node = el;
                while (node && node !== document.body) {
                    const bg = window.getComputedStyle(node).backgroundColor;
                    if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
                        // parse rgb values
                        const match = bg.match(/\d+/g);
                        if (match) {
                            const [r, g, b] = match.map(Number);
                            const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
                            setIsDark(luminance < 0.5);
                        }
                        break;
                    }
                    node = node.parentElement;
                }
            }
        };
        window.addEventListener('mousemove', move);
        return () => window.removeEventListener('mousemove', move);
    }, []);

    useEffect(() => {
        const handleOver = (e) => {
            if (e.target.closest('[data-cursor="hide"]')) setIsHidden(true);
            else if (e.target.closest('a, button')) setIsHovering(true);
        };
        const handleOut = (e) => {
            if (e.target.closest('[data-cursor="hide"]')) setIsHidden(false);
            else if (e.target.closest('a, button')) setIsHovering(false);
        };
        document.addEventListener('mouseover', handleOver);
        document.addEventListener('mouseout', handleOut);
        return () => {
            document.removeEventListener('mouseover', handleOver);
            document.removeEventListener('mouseout', handleOut);
        };
    }, []);

    if (isHidden) return null;

    const color = isDark ? 'white' : 'black';
    const borderColor = isDark ? 'border-white' : 'border-black';
    const bgColor = isDark ? 'bg-white' : 'bg-black';

    return (
    <>
        <div
            className="fixed top-0 left-0 z-[9999] pointer-events-none transition-transform duration-75"
            style={{ transform: `translate(${position.x - 6}px, ${position.y - 6}px)` }}
        >
            <div 
                className="rounded-full w-3 h-3 transition-colors duration-200"
                style={{ backgroundColor: 'var(--cursor-color)' }}
            />
        </div>

        <div
            className="fixed top-0 left-0 z-[9998] pointer-events-none transition-all duration-300 ease-out"
            style={{ transform: `translate(${position.x - 20}px, ${position.y - 20}px)` }}
        >
            <div 
                className={`rounded-full border transition-all duration-300 ${isHovering ? 'w-14 h-14' : 'w-10 h-10'}`}
                style={{ borderColor: 'var(--cursor-color)' }}
            />
        </div>
    </>
);
}