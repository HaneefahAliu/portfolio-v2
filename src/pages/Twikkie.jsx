import { Link } from 'react-router-dom';
import {thinkings, values} from "../data/card";
import BackButton from "../components/backButton";
import MoreProjects from "../components/moreProjects";
import QuickLinks from "../components/quickLinks"; 
import CaseStudyHeader from "../components/projectHeader";
import "./globals.css";

const links = [
    { id: 'context', label: 'THE CONTEXT' },
    { id: 'problem', label: 'THE PROBLEM' },
    { id: 'research', label: 'COMPETITIVE RESEARCH' },
    { id: 'scope', label: 'THE SCOPE' },
    { id: 'process', label: 'THE PROCESS' },
    { id: 'designsystem', label: 'DESIGN SYSTEM' },
    { id: 'design', label: 'DESIGN' },
    { id: 'outcome', label: 'THE OUTCOME' },
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

export default function Twikkie() {
    return (
        <main className='page-grid'>
            <QuickLinks links={links} triggerId="heading"/>

            {/* Heading */}
            <CaseStudyHeader
                title="Maximizing Workplace Potential: An All-in-One Cloud Solution for People Management."
                cover="https://res.cloudinary.com/haneefah/image/upload/v1781113831/Case%20Studies/twikkie_u2cpk4.png"
                screens="https://res.cloudinary.com/haneefah/image/upload/v1781032337/Case%20Studies/staff_data_u8qklv.png"
                stats="https://res.cloudinary.com/haneefah/image/upload/v1780947891/Case%20Studies/twikkie_r5ni7z.png"
                summary="Companies aren't struggling because they lack ambition. They're struggling because their people, processes, and operations live in ten different places at once. Spreadsheets, WhatsApp groups, shared drives, separate apps — none of it connected, all of it slowing them down. Twikkie was built to fix that."
                role="Sole / Founding Designer"
                tools="Figma, FigJam."
                deliverables="UX Research, Full Product Design, Interactive Prototype."
                platform="Web Application"
            />
            {/* End of Heading */}

            <section>
                {/* context */}
                <SectionBlock id="context" label="THE CONTEXT">
                    <h2 className="text-2xl sm:text-4xl pb-3 font-semibold font-plusJakarta leading-[1.5]">
                        A company with a vision, a blank Figma file, and no design system in sight.
                    </h2>
                    <p className="font-inter font-light leading-7 text-black/80">
                        When I joined Twikkie as the founding designer, the product existed as an idea — sketches, documents, and a founder who knew exactly what problem needed to be solved, but needed someone to turn it into something real. There was no design system, no established visual language, no flows, and no precedent to build on. Just a blank canvas and a big ambition.
                    </p>
                    <p className="font-inter font-light leading-7 text-black/80">
                        Twikkie's goal was to become a connected workforce and operations platform — an all-in-one system where small and medium businesses could manage their people, processes, and operations without juggling five different tools. HR records, attendance, payroll, onboarding, task management, leave, performance, expenses, documents, scheduling — all of it, in one place.
                    </p>
                    <p className="font-inter font-light leading-7 text-black/80">
                        My job was to turn that vision into a fully designed, investor-ready platform — from scratch, on my own.
                    </p>
                </SectionBlock>

                {/* problem */}
                <SectionBlock id="problem" label="THE PROBLEM">
                    <h2 className="text-2xl sm:text-4xl pb-3 font-semibold font-plusJakarta leading-[1.5]">
                        Businesses are drowning in multiple disconnected tools
                    </h2>
                    <p className="font-inter font-light leading-7 text-black/80">
                        The problem Twikkie was solving wasn't abstract. Small and medium businesses typically run their HR on spreadsheets, their communication on WhatsApp, their document storage on Google Drive, their attendance on a separate app, and their task management on yet another tool. None of these systems talk to each other. Information gets lost, duplicated, or forgotten. HR teams spend more time managing tools than managing people.
                    </p>
                    <p className="font-inter font-light leading-7 text-black/80">
                        The opportunity was to consolidate all of that into one coherent, well-designed platform — <span className="font-bold">a single source of truth for everything related to people and operations.</span> The design challenge was making something that comprehensive feel simple rather than overwhelming.
                    </p>
                </SectionBlock>

                {/* Competitive research */}
                <SectionBlock id="research" label="COMPETITIVE RESEARCH">
                    <h2 className="text-2xl sm:text-4xl pb-3 font-semibold font-plusJakarta leading-[1.5]">
                        Understanding the landscape before drawing a single screen
                    </h2>
                    <p className="font-inter font-light leading-7 text-black/80">
                        Before I got started with Figma, I spent some time researching the tools and technologies that already existed in this industry. There was no shortage of HR softwares but just about all of them had real, recurring issues that Twikkie had the opportunity to avoid.
                    </p>
                    <img className="w-full pb-6" src="https://res.cloudinary.com/haneefah/image/upload/v1781115806/Case%20Studies/CR_yfidqf.png" alt="Competitive Research" />
                    <p className="font-inter font-light leading-7 text-black/80">The pattern across all three was clear: existing tools prioritised feature completeness over usability. They were built to do everything, but rarely felt considered for the people actually using them daily. Twikkie's opportunity was to match that feature depth while designing with far more care for the experience of getting things done.</p>   
                </SectionBlock>
                
                {/* scope */}
                <SectionBlock id="scope" label="THE SCOPE">
                    <h2 className="text-2xl sm:text-4xl pb-3 font-semibold font-plusJakarta leading-[1.5]">
                        Designing from business vision to user experience
                    </h2>
                    <p className="font-inter font-light leading-7 text-black/80">
                        Over the course of a year, I designed every feature in the Twikkie platform end to end, from initial flow mapping to high-fidelity screens ready for development and investor demos. Working directly with a founder is one of the most formative experiences a designer can have and one of the most demanding. The founder of Twikkie had a sharp commercial mind and a clear sense of what the platform needed to achieve. What he didn't always have was a UX frame for how a user would move through it.
                    </p>
                    <p className="font-inter font-light leading-7 text-black/80">
                        Briefs arrived as rough sketches, written documents, and verbal explanations of features.My responsibility was not only to make them look nice, but also to intepret the intent, identify what was missing, ask questions that had not yet been answered and translate business logic into a product that users could navigate without frustration.
                    </p>
                    <p className="font-inter font-light leading-7 text-black/80 pb-6">
                        This pattern repeated itself in practically every feature. A brief would describe what the system needs to accomplish. I'd map the user flow, determine where the experience broke down, and then create a design that served the business goal while reducing friction for the user. Over time, that back-and-forth created a rhythm, and the gap between what was briefed and what was required narrowed as the founder developed a better UX sense as a result of our collaboration.
                    </p>
                    <p className="border-l-2 border-gray-500 pl-4 sm:pl-6 py-2 bg-gray-50 font-inter font-light italic leading-7 text-black">
                        Designing for a founder is a lesson in translating between two languages. <span className="font-bold">Business language describes outcomes. Design language describes experiences.</span> The best design decisions I made at Twikkie happened when I could speak both fluently in the same conversation.
                    </p>
                </SectionBlock>

                {/* process */}
                <SectionBlock id="process" label="THE PROCESS">
                    <h2 className="text-2xl sm:text-4xl pb-3 font-semibold font-plusJakarta leading-[1.5]">
                        How I approached building a product with no blueprint
                    </h2>
                    <p className="font-inter font-light leading-7 text-black/80">
                        Without existing users or real data to draw from, every design decision had to be based on a different type of rigour; competitive research, close collaboration with all teams, and constant pressure-testing of my own assumptions.
                    </p> 
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 pt-10">
                        {thinkings.map((thinking) => (
                            <div key={thinking.title} className="pb-6 sm:pb-12 flex flex-col gap-3">
                                <p className='font-plusJakarta text-xl font-semibold text-[#62B33B]'>{thinking.number}</p>
                                <h3 className="font-semibold font-plusJakarta">{thinking.title}</h3>
                                <p className="font-inter font-light text-sm leading-6 text-secondary-text">{thinking.description}</p>
                            </div>
                        ))}
                    </div>
                </SectionBlock>

                {/* design system */}
                <div id="designsystem">
                    <SectionBlock label="DESIGN SYSTEM">
                        <h2 className="text-2xl sm:text-4xl pb-3 font-semibold font-plusJakarta leading-[1.5]">
                            Building the foundation while building the product
                        </h2>
                        <p className="font-inter font-light leading-7 text-black/80">
                            Designing the entire system without a shared visual language would have resulted in a product that seemed like it was designed by several separate individuals. From the very beginning, I designed and managed a design system that defined the colour palette, typeface scale, spacing system, and a growing library of reusable components.
                        </p>
                        <p className="font-inter font-light leading-7 text-black/80">
                            Every component I created made it into the library. Every new feature was created using existing components where possible. By the time the tenth feature was being designed, the system had progressed to the point where new screens could be created substantially faster than the prior ones, which was essentially the intended goal of having a design system.
                        </p>
                        <p className="font-inter font-light leading-7 text-black/80">The design system is documented in full as a separate case study. You can read it <Link to="/case-studies/twikkieds" className="underline hover:text-black/50">here</Link></p>
                    </SectionBlock>
                    <div className="px-5 sm:px-[6%]">
                        <img src="https://res.cloudinary.com/haneefah/image/upload/v1781117240/Case%20Studies/twikkie_color_wx0zjd.png" alt="Design System" className="w-full pb-3" />
                        <img src="https://res.cloudinary.com/haneefah/image/upload/v1781117728/Case%20Studies/twikkie7_fhfbhx.png" alt="Design System" className="w-full" />
                    </div>
                </div>

                {/* design */}
                <div id="design">
                    <SectionBlock label="THE DESIGN">
                        <h2 className="text-2xl sm:text-4xl pb-3 font-semibold font-plusJakarta leading-[1.5]">
                            The All-in-One Cloud Solution for People Management
                        </h2>
                        <p className="font-inter font-light leading-7 text-black/80">
                            Each feature came with its own complexity. Some were data-heavy, like attendance monitoring and payroll, where I had to present dense information without overwhelming the people reading it. Some were flow-heavy, like onboarding and offboarding, where I had to think through every step a user would take and every place things could go wrong. Some served two completely different users simultaneously like an employee making a request and a manager approving it and both experiences had to feel considered, not like one was an afterthought of the other.
                        </p>
                        <p className="font-inter font-light leading-7 text-black/80">
                            What I kept coming back to across every single feature was the same question: what does this person actually need to do right now, and what's the simplest way I can help them do it? That question shaped every layout decision, every navigation choice, every label I wrote and rewrote. The features are different. The standard I held them to was the same.
                        </p>
                        <p className="font-inter font-light leading-7 text-black/80">
                            The result was a platform where distinct areas of functionality feel like parts of one coherent whole rather than features bolted together.
                        </p>
                    </SectionBlock>
                    <div className="px-5 sm:px-[6%]">
                        <img src="https://res.cloudinary.com/haneefah/image/upload/v1784563457/Case%20Studies/1rtfhg_kq2s7f.png" alt="Design" className="w-full pb-3" />
                        <img src="https://res.cloudinary.com/haneefah/image/upload/v1783951639/Case%20Studies/design1_mg9tgu.png" alt="Design" className="w-full pb-3" />
                    </div>
                </div>

                {/* outcome */}
                <SectionBlock id="outcome" label="THE OUTCOME">
                    <h2 className="text-2xl sm:text-4xl pb-3 font-semibold font-plusJakarta leading-[1.5]">
                        From rough sketches to an investor-ready platform
                    </h2>
                    <p className="font-inter font-light leading-7 text-black/80">
                        Twelve months later, Twikkie had evolved from a collection of concepts and rough sketches to a fully designed, end-to-end workforce platform that was cohesive, consistent, and appealing enough to present to investors.Every feature had been mapped, designed, and refined through dozens of working sessions with the founding team.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {values.map((value) => (
                            <div key={value.label} className="p-4 sm:p-6 flex flex-col items-center gap-3">
                                <span className="text-3xl sm:text-5xl font-bold font-inter text-[#62B33B]">{value.value}</span>
                                <span className="font-light font-inter text-secondary-text text-center text-sm sm:text-base">{value.label}</span>
                            </div>
                        ))}
                    </div>
                    <p className="border-l-2 border-gray-500 pl-4 sm:pl-6 py-2 bg-gray-50 font-inter font-light italic leading-7 text-black">
                        There's a particular kind of pressure that comes with being the only designer on an early-stage product. Every decision is yours. There's no senior designer to sense-check your thinking, no existing system to lean on, and no user data to fall back on. You have to be researcher, systems thinker, and visual designer all at once — and you have to move fast.
                    </p>
                </SectionBlock>

        {/* reflections */}
        <SectionBlock id="reflections" label="reflections + takeaways" className="pb-40">
            <h2 className="text-2xl sm:text-4xl font-semibold font-plusJakarta leading-[1.5]">
                What it taught me to build something from nothing
            </h2>
            <p className="font-inter font-light leading-7 text-black/80">
                Twikkie was where I learned what design actually feels like in the real world, not as a student with a brief and a deadline, but as the person responsible for every visual decision a product makes. Every component, every flow, every colour decision was mine.
            </p>
            <p className="font-inter font-light leading-7 text-black/80 pb-8">
                The project's size required a level of design discipline that is difficult to achieve in any other way. When you're working on ten features at once, you can't afford to treat each one as a separate issue. Every decision must benefit the whole – the navigation structure must hold, the component library must expand, and the visual language must remain consistent across displays serving very different functions. You begin to think like a systems designer rather than a screen designer.
            </p>
        </SectionBlock>
            </section>
            <section id="more-projects">
                <MoreProjects />
            </section>
        </main>
    )
}