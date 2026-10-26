import BackButton from "../components/backButton";
import MoreProjects from "../components/moreProjects";
import QuickLinks from "../components/quickLinks"; 
import CaseStudyHeader from "../components/projectHeader";
import { findings, systems } from "../data/card";
import "./globals.css";


const links = [
    { id: 'context', label: 'THE CONTEXT' },
    { id: 'challenge', label: 'THE CHALLENGE' },
    { id: 'process', label: 'THE PROCESS' },
    { id: 'foundation', label: 'FOUNDATION' },
    { id: 'components', label: 'COMPONENTS' },
    { id: 'outcome', label: 'OUTCOME' },
    { id: 'reflections', label: 'REFELCTIONS + TAKEAWAYS' },
];

function SectionBlock({ id, label, children, className = "" }) {
    return (
        <div id={id} className={`px-5 sm:px-[6%] md:pl-[20%] md:pr-[10%] flex flex-col md:flex-row py-16 md:py-20 gap-6 md:gap-0 ${className}`}>
            <div className="md:w-1/4 shrink-0">
                <span className="text-xs font-light font-plusJakarta tracking-widest uppercase text-secondary-text">[{label}]</span>
            </div>
            <div className="md:w-3/4 flex flex-col gap-6">
                {children}
            </div>
        </div>
    );
}

export default function TwikkieDs() {
    return (
        <main className='page-grid'>
            <QuickLinks links={links} triggerId="heading"/>

             {/* Heading */}
            <CaseStudyHeader
                title="Twikkie Design System - building the foundation that makes the product."
                cover="https://res.cloudinary.com/haneefah/image/upload/v1777300680/Case%20Studies/twikkie-ds_ataiao.png"
                screens="https://res.cloudinary.com/haneefah/image/upload/v1781117728/Case%20Studies/twikkie7_fhfbhx.png"
                stats="https://res.cloudinary.com/haneefah/image/upload/v1784566877/Case%20Studies/twikkie-ds_y0wlms.png"
                summary="A design system isn't just a component library, it's the invisible force that makes a complex product feel coherent. Built from scratch as the sole designer on Twikkie, this system became the foundation that made all features feel like one product. Every colour token, every component state, every pattern was a deliberate decision made in service of consistency, speed and scale."
                role="Design Systems, Visual Design, Component Architecture, Documentation."
                tools="Figma."
                deliverables="Colour Token System, Typography Scale, Component Library, Spacing System, Documentation."
            />
            {/* End of Heading */}

            <section>
                {/* context */}
                <SectionBlock id="context" label="THE CONTEXT">
                    <h2 className="text-2xl sm:text-4xl pb-3 font-semibold font-plusJakarta leading-[1.5]">
                        A design system isn't a nice-to-have. On a product this size, it's the only way.
                    </h2>
                    <p className="font-inter font-light leading-7 text-black/80">
                        When you're the sole designer building features simultaneously, the biggest risk isn't that any single screen looks bad. It's that the product stops feeling like a product and starts feeling like a collection of loosely related pages built by different people at different times.
                    </p>
                    <p className="font-inter font-light leading-7 text-black/80">
                        A design system helps prevent that, not by limiting creativity, but by making consistency effortless. When every button, input, alert, and modal is built from the same shared library of components, everything naturally feels cohesive. Instead of spending time recreating the same patterns or fixing inconsistencies, you can focus on what really matters: designing better user flows, solving real problems, and creating a great experience.
                    </p>
                    <p className="font-inter font-light leading-7 text-black/80">
                        I built the Twikkie design system in parallel with the product itself; starting early, adding to it continuously, and refining it as new edge cases revealed gaps. By the end of twelve months, it had grown from a handful of base styles into a comprehensive system that underpinned every screen in the platform.
                    </p>
                    <p className="border-l-2 border-gray-500 pl-4 sm:pl-6 py-2 bg-gray-50 font-inter font-light italic leading-7 text-black">
                        I think of a design system the way an architect thinks about structural engineering. The people who live in the building never see the steel frame holding it up. But without it, nothing stands. <span className="font-bold">The system was my steel frame.</span> 
                    </p>
                </SectionBlock>

                {/* challenge */}
                <SectionBlock id="challenge" label="THE CHALLENGE">
                    <h2 className="text-2xl sm:text-4xl pb-3 font-semibold font-plusJakarta leading-[1.5]">
                        Building a system while building a product at the same time
                    </h2>
                    <p className="font-inter font-light leading-7 text-black/80">
                        The temptation when you're moving fast is to skip the system and design the screens. I understood that temptation well — there were weeks early on when establishing tokens and building component variants felt like it was slowing me down when I had features to ship. But I kept going, because I'd seen what happened to products that didn't.
                    </p>
                    <p className="font-inter font-light leading-7 text-black/80">
                        Every component I built for a feature went straight into the library. Every new pattern I introduced became a documented decision. It meant the first few features took longer. But by the time I was designing the eighth and ninth features, I was assembling screens from existing components in a fraction of the time. The system paid me back for every hour I'd invested in it.
                    </p>
                </SectionBlock>

                {/* process */}
                <SectionBlock id="process" label="THE PROCESS">
                    <h2 className="text-2xl sm:text-4xl pb-3 font-semibold font-plusJakarta leading-[1.5]">
                        The process behind the system
                    </h2>
                    <p className="font-inter font-light leading-7 text-black/80">
                        How I built the system and kept building it:
                    </p> 
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 pt-10">
                        {systems.map((system) => (
                            <div key={system.title} className="pb-6 sm:pb-12 flex flex-col gap-3">
                                <p className='font-plusJakarta text-xl font-semibold text-[#62B33B]'>{system.number}</p>
                                <h3 className="font-semibold font-plusJakarta">{system.title}</h3>
                                <p className="font-inter font-light text-sm leading-6 text-secondary-text">{system.description}</p>
                            </div>
                        ))}
                    </div>
                </SectionBlock>

                {/* foundation */}
                <div id="foundation">
                    <SectionBlock label="FOUNDATION">
                        <h2 className="text-2xl sm:text-4xl pb-3 font-semibold font-plusJakarta leading-[1.5]">
                            Everything starts with the tokens
                        </h2>
                        <p className="font-inter font-light leading-7 text-black/80">
                            Before building any components, I focused on getting the foundations right. Colour, typography, and spacing aren't just visual choices, they become the rules that every component inherits. If those foundations are inconsistent, every component built on top of them will be inconsistent too. By establishing a clear design system first, I could ensure that every screen, interaction, and component felt cohesive, scalable, and intentional.
                        </p>

                        <h5 className="pt-6 text-xl font-semibold font-plusJakarta">Color Tokens</h5>
                        <p className="font-inter font-light leading-7 text-black/80">I built the colour system around three categories: a primary green scale, a neutral scale from near-black (#141414) to near-white (#F5F5F5), and four semantic colour families — Error, Warning, Success, and Information. </p>
                        <p className="font-inter font-light leading-7 text-black/80">I named everything semantically rather than by hex value. That meant any component using "Text-Error" would automatically inherit the right colour and if I ever needed to update that colour, it would change everywhere at once. </p>
                    </SectionBlock>

                    <div className="px-5 sm:px-[6%]">
                        <img src="https://res.cloudinary.com/haneefah/image/upload/v1784573390/Case%20Studies/Frame_2131330087_nbgnrj.png" alt="color tokens" className="w-full" />
                    </div>
                        
                    <div className="px-5 sm:px-[6%] md:pl-[20%] md:pr-[10%] flex flex-col md:flex-row gap-6 md:gap-0 py-10">
                        <div className="md:w-1/4 shrink-0" />
                        <div className="md:w-3/4 flex flex-col gap-6 pb-6">
                            <h5 className="pt-6 text-xl font-semibold font-plusJakarta">Typography</h5>
                            <p className="font-inter font-light leading-7 text-black/80">I chose Roboto as the sole typeface because it's clean, highly legible, and reliable across every screen size and resolution. I built the scale from H1 at 40px medium down to H4 at 20px medium, with body and supporting styles beneath. I kept all headings at medium weight, bold enough to establish hierarchy, without the heaviness that can make data-dense screens feel oppressive.</p>
                        </div>
                    </div>

                    <div className="px-5 sm:px-[6%]">
                        <img src="https://res.cloudinary.com/haneefah/image/upload/v1784574087/Case%20Studies/text_w84at9.png" alt="typography" className="w-full" />
                    </div>
                </div>

                {/* components */}
                <div>
                    <SectionBlock id="components" label="COMPONENTS">
                        <h2 className="text-2xl sm:text-4xl pb-3 font-semibold font-plusJakarta leading-[1.5]">
                            Twenty-plus components covering every surface of the product
                        </h2>
                        <p className="font-inter font-light leading-7 text-black/80">
                            Building multiple features meant encountering every interaction pattern a product could need, and then some. Rather than designing components in isolation, I built each one the moment the product required it, immediately adding it to the library so it could be reused rather than recreated.
                        </p>
                        <p className="font-inter font-light leading-7 text-black/80">
                            Over the course of the project, the library expanded to include every surface of the product. Twikkie is a form-heavy product, so form components such as text fields, password fields, search inputs, dropdowns, number and currency inputs, tag inputs, text areas, date and time pickers, radio buttons, checkboxes, and switches had to be consistent, clearly labelled, and unambiguous in all states. Users needed to understand what was going on at all times, especially when anything went wrong, therefore feedback components like as alerts, modals, tooltips, messages, and result statuses were implemented. Wayfinding had to be simple with fifteen feature sections in one platform, therefore navigation and structure components like the sidebar, tabs, steps, pagination, accordion, and breadcrumbs were included. And supporting components like tables, menus, avatars, tags, data wells, upload, comment, empty states, and illustrations because the details are what make a product feel complete rather than merely functional. 
                        </p>
                        <p className="font-inter font-light leading-7 text-black/80">
                            Every component was built with its full range of states. Default, hover, active, disabled, error. Not because it was required, but because in a product where people are managing payroll, approving leave, and onboarding new employees, the edge cases aren't edge cases. They're part of the job.
                        </p>
                    </SectionBlock>

                    <div className="px-5 sm:px-[6%]">
                        <img src="https://res.cloudinary.com/haneefah/image/upload/v1781117728/Case%20Studies/twikkie7_fhfbhx.png" alt="Design System" className="w-full" />
                    </div>
                </div>

                {/* outcome */}
                <SectionBlock id="outcome" label="OUTCOME">
                    <h2 className="text-2xl sm:text-4xl pb-3 font-semibold font-plusJakarta leading-[1.5]">
                        What the system made possible
                    </h2>
                    <p className="font-inter font-light leading-7 text-black/80">
                        When I left, I left behind a fully documented file; annotated screens, a complete component library, named tokens, and enough structure that the next designer could understand every decision I'd made and build on it rather than starting over. That felt important to me. The system wasn't just for me while I was there, it was for whoever came next.
                    </p>
                    <p className="font-inter font-light leading-7 text-black/80">
                        The thing I'm most proud of isn't any individual component. It's that when you look at the Twikkie product - hundreds of screens but it feels like one thing. The button in the dashboard is the same button in the payroll screen. The alert in the onboarding flow is the same alert in the expense management flow. That consistency didn't happen by accident, it happened because I built a system and used it.                       
                    </p>
                </SectionBlock>

                {/* reflections */}
                <SectionBlock id="reflections" label="reflections + takeaways" className="pb-40">
                    <h2 className="text-2xl sm:text-4xl font-semibold font-plusJakarta leading-[1.5]">
                        What I learned about building systems
                    </h2>
                    <p className="font-inter font-light leading-7 text-black/80">
                        Building a design system from scratch taught me that the hardest part isn't the components, it's the decisions. Every token name is a decision. Every state you include or exclude is a decision. Every component you build as a single flexible component versus multiple specific ones is a decision and unlike screen design, where a wrong decision affects one flow, a wrong system decision affects everything built on top of it.
                    </p>
                    <p className="font-inter font-light leading-7 text-black/80">
                        The most important decision I made was to start early, stay consistent and to treat the system as a first-class deliverable rather than a side project. It cost time at the beginning but it paid back that time many times over by the end.
                    </p>
                    <p className="font-inter font-light leading-7 text-black/80 pb-8">
                        I also learned that a design system is never finished and that's okay. The version I handed over when I left was significantly more complete than what existed six months in. A future designer will make it more complete still. That's not a failure of the system, that's the system working exactly as it should, growing with the product it serves, outlasting the designer who started it.
                    </p>
                </SectionBlock>

            </section>

            <section id="more-projects">
                <MoreProjects />
            </section>
        </main>
    )
}