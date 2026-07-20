import { useEffect, useState } from 'react';

const languages = [
    'أهلاً وسهلاً',
    'ようこそ',
    'Bienvenue',
    'Bienvenido',
    'Benvenuto',
    'Bem-vindo',
    'Willkommen',
    'Karibu',
    '欢迎',
    'Káàbọ̀',
    'Welcome',
];

export default function Loader({ onComplete }) {
    const [index, setIndex] = useState(0);
    const [phase, setPhase] = useState('greeting'); // greeting → tearing → splitting → done

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => {
                if (prev === languages.length - 1) {
                    clearInterval(interval);
                    // phase 1: show tear edge
                    setTimeout(() => setPhase('tearing'), 800);
                    // phase 2: split apart
                    setTimeout(() => setPhase('splitting'), 1100);
                    // phase 3: done
                    setTimeout(() => setPhase('done'), 1900);
                    setTimeout(() => onComplete?.(), 2000);
                    return prev;
                }
                return prev + 1;
            });
        }, 200);

        return () => clearInterval(interval);
    }, []);

    const tearTop = `polygon(
        0% 0%, 100% 0%, 100% 100%,
        97% 92%, 94% 100%, 91% 88%, 88% 98%, 85% 90%,
        82% 100%, 79% 91%, 76% 99%, 73% 87%, 70% 96%,
        67% 89%, 64% 100%, 61% 92%, 58% 100%, 55% 88%,
        52% 97%, 49% 90%, 46% 100%, 43% 91%, 40% 98%,
        37% 88%, 34% 96%, 31% 90%, 28% 100%, 25% 92%,
        22% 99%, 19% 87%, 16% 96%, 13% 89%, 10% 100%,
        7% 91%, 4% 98%, 1% 90%, 0% 100%
    )`;

    const tearBottom = `polygon(
        0% 100%, 100% 100%, 100% 0%,
        97% 8%, 94% 0%, 91% 12%, 88% 2%, 85% 10%,
        82% 0%, 79% 9%, 76% 1%, 73% 13%, 70% 4%,
        67% 11%, 64% 0%, 61% 8%, 58% 0%, 55% 12%,
        52% 3%, 49% 10%, 46% 0%, 43% 9%, 40% 2%,
        37% 12%, 34% 4%, 31% 10%, 28% 0%, 25% 8%,
        22% 1%, 19% 13%, 16% 4%, 13% 11%, 10% 0%,
        7% 9%, 4% 2%, 1% 10%, 0% 0%
    )`;

    const bgStyle = {
        backgroundColor: '#0a0a0a',
        backgroundImage: `
            radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
        `,
        backgroundSize: '30px 30px, 60px 60px, 60px 60px',
    };

    if (phase === 'done') return null;

    return (
        <div className="fixed inset-0 z-[9999]">

            {/* Top half */}
            <div
                className="absolute inset-x-0 top-0"
                style={{
                    height: '50%',
                    ...bgStyle,
                    clipPath: phase === 'greeting' ? 'none' : tearTop,
                    transform: phase === 'splitting' ? 'translateY(-105%)' : 'translateY(0)',
                    transition: phase === 'tearing'
                        ? 'clip-path 0.2s ease'
                        : phase === 'splitting'
                        ? 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                        : 'none',
                }}
            />

            {/* Bottom half */}
            <div
                className="absolute inset-x-0 bottom-0"
                style={{
                    height: '50%',
                    ...bgStyle,
                    clipPath: phase === 'greeting' ? 'none' : tearBottom,
                    transform: phase === 'splitting' ? 'translateY(105%)' : 'translateY(0)',
                    transition: phase === 'tearing'
                        ? 'clip-path 0.2s ease'
                        : phase === 'splitting'
                        ? 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                        : 'none',
                }}
            />

            {/* Greeting */}
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
                phase === 'tearing' || phase === 'splitting' ? 'opacity-0' : 'opacity-100'
            }`}>
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

        </div>
    );
}