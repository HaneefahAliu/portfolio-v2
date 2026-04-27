import { useEffect, useState } from 'react';

export default function Loader({ onComplete }) {
    const full = 'Haneefah';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const [display, setDisplay] = useState('HANEEFAH');
    const [done, setDone] = useState(false);

    useEffect(() => {
        let iterations = 0;
        const interval = setInterval(() => {
            setDisplay(
                full.split('').map((char, i) => {
                    if (i < iterations) return char;
                    return chars[Math.floor(Math.random() * chars.length)];
                }).join('')
            );
            iterations += 0.4;
            if (iterations >= full.length) {
                clearInterval(interval);
                setDisplay(full);
                setTimeout(() => setDone(true), 600);
                setTimeout(() => onComplete?.(), 1100);
            }
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`fixed inset-0 z-[9999] bg-[#000000] flex items-center justify-center transition-opacity duration-500 ${
            done ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}>
            <h1 className="font-cursive text-[clamp(3rem,12vw,10rem)] text-white tracking-widest">
                {display}
            </h1>
        </div>
    );
}