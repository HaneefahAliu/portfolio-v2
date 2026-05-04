import { useEffect, useState } from 'react';

export default function QuickLinks({ links, triggerId, top = '8rem' }) {
    const [active, setActive] = useState('');
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const trigger = document.getElementById(triggerId);
        if (!trigger) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (window.scrollY > 100) {
                    setVisible(!entry.isIntersecting);
                } else {
                    setVisible(false);
                }
            },
        { rootMargin: '-100px 0px 0px 0px' }
        );
        observer.observe(trigger);

        const handleScroll = () => {
        const rect = trigger.getBoundingClientRect();
        if (window.scrollY < 100) {
            setVisible(false);
        }
    };
    window.addEventListener('scroll', handleScroll);


        return () => {
        observer.disconnect();
        window.removeEventListener('scroll', handleScroll);
    };
}, [triggerId]);

    useEffect(() => {
        const observers = links.map(({ id }) => {
            const el = document.getElementById(id);
            if (!el) return null;
            const observer = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActive(id); },
                { rootMargin: '-30% 0px -60% 0px' }
            );
            observer.observe(el);
            return observer;
        });
        return () => observers.forEach(o => o?.disconnect());
    }, [links]);

    const handleClick = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

  useEffect(() => {
    const footer = document.querySelector('footer');
    const moreProjects = document.getElementById('more-projects');
    const target = moreProjects || footer;
    if (!target) return;

    const observer = new IntersectionObserver(
        ([entry]) => {
            setVisible(!entry.isIntersecting);
        },
        { rootMargin: '0px' }
    );
    observer.observe(target);
    return () => observer.disconnect();
}, []);

    return (
        <div
            className={`fixed left-[3%] z-40 flex flex-col transition-opacity duration-500 ${
                visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            style={{ top }}
        >
            <div className="flex flex-col">
                {links.map(({ id, label }, i) => (
                    <div key={id} className="flex items-center gap-3 py-3 relative">
                        {/* line goes from bottom of this dot to top of next */}
                        {i !== links.length - 1 && (
                            <div className="absolute left-[3px] top-[calc(50%+4px)] w-px h-[calc(100%-8px)] bg-black/15" />
                        )}
                        {/* dot */}
                        <button
                            onClick={() => handleClick(id)}
                            className={`w-2 h-2 rounded-full flex-shrink-0 relative z-10 transition-all duration-300 ${
                                active === id ? 'bg-black scale-125' : 'bg-black/20 hover:bg-black/40'
                            }`}
                        />
                        {/* label */}
                        <button
                            onClick={() => handleClick(id)}
                            className={`text-left text-[11px] font-inter uppercase tracking-widest transition-all duration-200 ${
                                active === id ? 'text-black font-medium' : 'text-secondary-text hover:text-black/60'
                            }`}
                        >
                            {label}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}