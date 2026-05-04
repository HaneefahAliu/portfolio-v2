import BackButton from "./backButton";

export default function CaseStudyHeader({ title, cover, screens, stats, summary, role, tools, deliverables, platform }) {
    return (
        <div>
            <section className="px-[6%] pt-16">
                <BackButton label="Go Back" />
                <h1 className="py-10 font-anton text-7xl leading-[1.5] max-w-6xl">{title}</h1>
                <img src={cover} alt={`${title} Cover`} className="w-full block" />
            </section>

            <section className="relative flex gap-16 pt-12 px-[6%]">
                <div className="w-2/3 flex flex-col gap-6">
                    {screens && <img src={screens} alt={`${title} screens`} className="w-full" />}
                    {stats && <img src={stats} alt={`${title} stats`} className="w-full" />}
                </div>

                <div className="w-1/3">
                    <div className="sticky top-24 flex flex-col gap-8">
                        {summary && (
                            <div>
                                <span className="text-xs font-light font-plusJakarta tracking-widest text-secondary-text">[SUMMARY]</span>
                                <p className="mt-2 font-inter font-light leading-7">{summary}</p>
                            </div>
                        )}
                        {role && (
                            <div>
                                <span className="text-xs font-light font-plusJakarta tracking-widest text-secondary-text">[ROLE]</span>
                                <p className="mt-2 font-inter font-light leading-7">{role}</p>
                            </div>
                        )}
                        {tools && (
                            <div>
                                <span className="text-xs font-light font-plusJakarta tracking-widest text-secondary-text">[TOOLS]</span>
                                <p className="mt-2 font-inter font-light leading-7">{tools}</p>
                            </div>
                        )}
                        {deliverables && (
                            <div>
                                <span className="text-xs font-light font-plusJakarta tracking-widest text-secondary-text">[DELIVERABLES]</span>
                                <p className="mt-2 font-inter font-light leading-7">{deliverables}</p>
                            </div>
                        )}
                        {platform && (
                            <div>
                                <span className="text-xs font-light font-plusJakarta tracking-widest text-secondary-text">[PLATFORM]</span>
                                <p className="mt-2 font-inter font-light leading-7">{platform}</p>
                            </div>
                        )}
                    </div>
                </div>
                <div id="heading" />
            </section>
        </div>
    );
}