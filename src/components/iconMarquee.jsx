const tools = [
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Notion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg" },
    { name: "Framer", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Webflow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webflow/webflow-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Claude", icon: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Claude_AI_logo.svg" },
];

export default function ToolkitMarquee() {
    // duplicate for seamless loop
    const doubled = [...tools, ...tools];

    return (
        <div>
            <p className="text-center text-[14px] font-inter uppercase tracking-widest text-secondary-text mb-10">
                My Design Toolkit
            </p>

            {/* Marquee wrapper — hides overflow */}
            <div className="overflow-hidden relative">

                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <div className="flex gap-24 animate-marquee w-max">
                    {doubled.map((tool, i) => (
                        <div key={i} className="flex flex-col items-center gap-3 shrink-0">
                            <img
                                src={tool.icon}
                                alt={tool.name}
                                className="w-12 h-12 object-contain"
                            />
                            <span className="text-[12px] font-inter text-black/30 uppercase tracking-wide">
                                {tool.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}