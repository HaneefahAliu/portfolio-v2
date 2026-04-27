import { useEffect, useState } from 'react';

export default function CustomCursor() {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const move = (e) => setPos({ x: e.clientX, y: e.clientY });
        window.addEventListener('mousemove', move);
        return () => window.removeEventListener('mousemove', move);
    }, []);

    useEffect(() => {
        const addHover = () => setIsHovering(true);
        const removeHover = () => setIsHovering(false);
        const interactives = document.querySelectorAll('a, button');
        interactives.forEach(el => {
            el.addEventListener('mouseenter', addHover);
            el.addEventListener('mouseleave', removeHover);
        });
        return () => {
            interactives.forEach(el => {
                el.removeEventListener('mouseenter', addHover);
                el.removeEventListener('mouseleave', removeHover);
            });
        };
    }, []);

    return (
        <div
            className="fixed z-[9999] pointer-events-none select-none transition-transform duration-100"
            style={{
                transform: `translate(${pos.x - 12}px, ${pos.y - 12}px)`,
                fontSize: isHovering ? '28px' : '22px',
                transition: 'font-size 0.2s ease',
            }}
        >
            {isHovering ? '🤏' : '☝️'}
        </div>
    );
}