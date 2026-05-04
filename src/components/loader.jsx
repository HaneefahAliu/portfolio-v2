import { useEffect, useState } from 'react';

const languages = [
    'أهلاً وسهلاً',      // Arabic
    'ようこそ',   // Japanese
    'Bienvenue',    // French
    'Bienvenido',       // Spanish
    'Benvenuto',       // Italian
    'Bem-vindo',        // Portuguese
    'Willkommen',        // German
    'Karibu',    // Swahili
    '欢迎',     // Chinese
    'Káàbọ̀',     // Yoruba
    'Welcome',         // English — last
];

export default function Loader({ onComplete }) {
    const [index, setIndex] = useState(0);
    const [done, setDone] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => {
                if (prev === languages.length - 1) {
                    clearInterval(interval);
                    setTimeout(() => setDone(true), 800);
                    setTimeout(() => onComplete?.(), 1300);
                    return prev;
                }
                return prev + 1;
            });
        }, 200);

        return () => clearInterval(interval);
    }, []);

    return (
        <div 
            className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-500 ${
                done ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
            style={{
                backgroundColor: '#0a0a0a',
                backgroundImage: `
                    radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
                    linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
                `,
                backgroundSize: '30px 30px, 60px 60px, 60px 60px',
            }}
        >
            <h1 className="text-[clamp(1rem,1vw,2rem)] font-plusJakarta font-light">
                <span className="text-white/80">HA says </span>
                <span
                    key={index}
                    style={{ animation: 'fadeUp 0.15s ease forwards', display: 'inline-block', opacity: 0, color: 'white', fontWeight: 'bold' }}
                >
                    {languages[index]}
                </span>
                <span>👋</span>
            </h1>
        </div>
    );
}