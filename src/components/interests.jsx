import { Figma, Search, Layers, Smartphone, BarChart2, Lightbulb, Code, Users } from 'lucide-react';
import { useState } from 'react';

const skills = [
    {
        icon: <Search size={15} />,
        label: "UX Research",
        description: "Interviews, usability testing, and behavioural insights that help me understand what people actually need.."
    },
    {
        icon: <Figma size={15} />,
        label: "UI Design",
        description: "Thoughtful interfaces with strong hierarchy, visual polish, and interaction details."
    },
    {
        icon: <Layers size={15} />,
        label: "Prototyping",
        description: "From lo-fi wireframes to high-fidelity interactive prototypes that feel like the real thing."
    },
    {
        icon: <Smartphone size={15} />,
        label: "Mobile Design",
        description: "Mobile-first experiences designed around real behaviours, constraints, and platform patterns."
    },
    {
        icon: <Users size={15} />,
        label: "Design Systems",
        description: "Reusable foundations, components, and patterns that keep products consistent as they grow."
    },
    {
        icon: <Users size={15} />,
        label: "Data-Informed Design",
        description: "Using product data alongside qualitative insights to identify friction and guide design decisions."
    },
    {
        icon: <Lightbulb size={15} />,
        label: "Product Strategy",
        description: "Turning ambiguous problems into clear product opportunities, priorities, and experiences."
    },
    {
        icon: <Code size={15} />,
        label: "Design Engineering",
        description: "Bringing designs closer to production with modern frontend tools."
    },
];

export default function Interests() {
    const [hovered, setHovered] = useState(null);

    return (
        <section className="px-[8%]">

            {/* Heading */}
            <p className="text-center text-[14px] font-inter uppercase tracking-widest text-secondary-text mb-10">
                WHAT I DO
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