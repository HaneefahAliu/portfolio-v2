import { Figma, Search, Layers, Smartphone, BarChart2, Lightbulb, Code, Users } from 'lucide-react';
import { useState } from 'react';

const skills = [
    {
        icon: <Search size={15} />,
        label: "UX Research",
        description: "User interviews, surveys, usability testing, and synthesizing insights into actionable findings."
    },
    {
        icon: <Figma size={15} />,
        label: "UI Design",
        description: "Crafting clean, intentional interfaces that balance aesthetics with usability."
    },
    {
        icon: <Layers size={15} />,
        label: "Prototyping",
        description: "From lo-fi wireframes to high-fidelity interactive prototypes that feel like the real thing."
    },
    {
        icon: <Smartphone size={15} />,
        label: "Mobile Design",
        description: "Designing for iOS and Android with platform conventions and touch-first thinking."
    },
    {
        icon: <Users size={15} />,
        label: "Design Systems",
        description: "Building scalable component libraries and documentation that teams actually use."
    },
    {
        icon: <BarChart2 size={15} />,
        label: "Data-Informed Design",
        description: "Using analytics, heatmaps, and A/B testing to validate and improve design decisions."
    },
    {
        icon: <Lightbulb size={15} />,
        label: "Product Strategy",
        description: "Bridging user needs and business goals to shape product direction and roadmaps."
    },
    {
        icon: <Code size={15} />,
        label: "Design Engineering",
        description: "Comfortable in code — turning designs into real, production-ready components."
    },
];

export default function Interests() {
    const [hovered, setHovered] = useState(null);

    return (
        <section className="px-[8%]">

            {/* Heading */}
            <p className="text-center text-[14px] font-inter uppercase tracking-widest text-secondary-text mb-10">
                what i can do for you
            </p>

            {/* Pills */}
            <div className="flex flex-wrap justify-center gap-3">
                {skills.map((skill, i) => (
                    <div
                        key={i}
                        onMouseEnter={() => setHovered(i)}
                        onMouseLeave={() => setHovered(null)}
                        className="relative"
                    >
                        {/* Pill */}
                        <div className={`flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all duration-300 cursor-default ${
                            hovered === i
                                ? 'border-black/20 bg-black text-white'
                                : 'border-black/10 bg-white text-black/60 hover:border-black/20'
                        }`}>
                            <span className={`transition-colors duration-300 ${hovered === i ? 'text-white' : 'text-black/40'}`}>
                                {skill.icon}
                            </span>
                            <span className="text-[13px] font-inter font-light tracking-wide">
                                {skill.label}
                            </span>
                        </div>

                        {/* Tooltip on hover */}
                        {hovered === i && (
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 bg-black text-white text-[12px] font-inter font-light leading-5 px-4 py-3 rounded-xl z-10 pointer-events-none">
                                {skill.description}
                                {/* Arrow */}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black" />
                            </div>
                        )}
                    </div>
                ))}
            </div>

        </section>
    );
}