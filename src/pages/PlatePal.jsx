import { CookingPot, BookSearch, CaptionsOff } from 'lucide-react';
import {cards, stats, quotes, solutions, principles } from "../data/card";
import BackButton from "../components/backButton";
import MoreProjects from "../components/moreProjects";
import QuickLinks from "../components/quickLinks"; 
import CaseStudyHeader from "../components/projectHeader";
import "./globals.css";

const links = [
    { id: 'problem', label: 'THE PROBLEM' },
    { id: 'research', label: 'Research' },
    { id: 'personas', label: 'user personas' },
    { id: 'dd', label: 'design direction' },
    { id: 'style', label: 'style guide' },
    { id: 'testing', label: 'testing + iterations' },
    { id: 'solution', label: 'the solution' },
    { id: 'platform', label: 'Multi-platform thinking' },
    { id: 'reflections', label: 'reflections + takeaways' },
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

export default function PlatePal() {
  return (
    <main className='page-grid'>
      <QuickLinks links={links} triggerId="heading"/>

      <CaseStudyHeader
        title="PlatePal — Designing meal planning that doesn’t leave people out."
        cover="https://res.cloudinary.com/haneefah/image/upload/v1777300327/Case%20Studies/platepal_njtjjf.png"
        screens="https://res.cloudinary.com/haneefah/image/upload/v1777300247/Case%20Studies/PP1_a2zm8r.png"
        stats="https://res.cloudinary.com/haneefah/image/upload/v1777300248/Case%20Studies/PP2_cclp0x.png"
        summary="Meal planning sounds simple until you actually have to do it. Finding recipes, accounting for dietary needs, buying ingredients and following cooking instructions creates a surprisingly fragmented experience, and many existing products introduce additional barriers for people with physical, sensory or cognitive accessibility needs."
        role="UX Research, Accessibility, UI Design, Prototyping, User Testing."
        tools="Figma, FigJam."
        deliverables="UX Research, Product Design, Interactive Prototype, Multi-platform Designs, Design Assets."
        platform="Phone, Tablet, Smart Watch."
      />

    <section>
        {/* problem */}
        <SectionBlock id="problem" label="THE PROBLEM">
            <h2 className="text-2xl sm:text-4xl pb-3 font-semibold font-plusJakarta leading-[1.5]">
                Meal planning is already fragmented. Inaccessible experiences make it harder.
            </h2>
            <p className="font-inter font-light leading-7 text-black/80">
                Cooking isn't a single task. Before someone prepares a meal, they may need to decide what to eat, find an appropriate recipe, check dietary requirements, identify ingredients, shop for groceries and then follow a series of cooking instructions.
            </p>
            <p className="font-inter font-light leading-7 text-black/80">
                Researching the space showed me that the problem wasn't simply finding recipes. It was the amount of decision-making and coordination surrounding them.
            </p>
            <p className="font-inter font-light leading-7 text-black/80">
                For people navigating visual, auditory, motor or cognitive accessibility needs, seemingly small interface decisions could create additional friction throughout that journey.
            </p>
            <p className="font-inter font-light leading-7 text-black/80">
                I framed the challenge around one question:
            </p>
            <p className="border-l-2 border-gray-500 pl-4 sm:pl-6 py-2 bg-gray-50 font-inter font-light italic leading-7 text-black">
                How might I make the journey from deciding what to eat to preparing a meal easier to navigate for people with different accessibility needs?
            </p>
            <p className="font-inter font-light leading-7 text-black/80">
                Rather than creating separate experiences for disabled users, my goal was to explore whether accessibility could improve the core experience for everyone.
            </p>
        </SectionBlock>

        {/* research */}
        <SectionBlock id="research" label="research" className="pb-10">
            <h2 className="text-2xl sm:text-4xl pb-3 font-semibold font-plusJakarta leading-[1.5]">
                Understanding where the friction actually happens
            </h2>
            <p className="font-inter font-light leading-7 text-black/80">
                I began by reviewing existing cooking and meal-planning experiences and looking at accessibility guidance surrounding common interactions such as navigation, recipe instructions, forms, video content and touch controls. The research shifted my understanding of the problem.
            </p>

            <p className="font-inter font-light leading-7 text-black/80">
                Initially, I thought PlatePal would primarily be a better recipe application. Instead, three broader challenges emerged:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 pt-12">
                {[
                    { icon: <CookingPot size={32} strokeWidth={1.2} className='text-[#008000]' />, heading:"01 The work starts before cooking", text: "Choosing what to eat, accounting for preferences and organising ingredients often created more cognitive load than following the recipe itself." },
                    { icon: <BookSearch size={32} strokeWidth={1.2} className='text-[#008000]' />, heading:"02 Users move between disconnected tools", text: "Planning, recipes, grocery shopping and cooking instructions frequently existed as separate experiences, forcing users to repeatedly move information between them." },
                    { icon: <CaptionsOff size={32} strokeWidth={1.2} className='text-[#008000]' />, heading:"03 One inaccessible interaction can break an entire journey", text: "A difficult form, poorly labelled control, inaccessible video or small touch target doesn't simply affect one screen. It can prevent someone from completing the task altogether." },
                ].map((item, i) => (
                    <div key={i} className="flex flex-col gap-6">
                        <div>{item.icon}</div>
                        <h3 className="font-semibold font-plusJakarta">{item.heading}</h3>
                        <p className="text-[16px] font-inter font-light leading-[1.8] text-black/80">{item.text}</p>
                    </div>
                ))}
            </div>
            <p className="font-inter font-light leading-7 text-black/80 pt-8">
                That gave me a clearer product direction. PlatePal needed to connect three moments:
            </p>
            <p className="font-inter font-bold leading-7 text-black/80">PLAN → SHOP → COOK</p>
        </SectionBlock>

        {/* personas */}
        <div id="personas">
            <SectionBlock id="personas-text" label="user personas" className="pb-10">
                <h2 className="text-2xl sm:text-4xl font-semibold font-plusJakarta leading-[1.5]">
                    Designing for different needs
                </h2>
                <p className="font-inter font-light leading-7 text-black/80">
                    To pressure-test the experience across different situations, I created four accessibility archetypes representing motor, visual, auditory and cognitive needs. These were not intended to suggest that everyone within those groups behaves the same way. Instead, they helped me translate accessibility research into concrete questions during design.
                </p>
                <p className="font-inter font-light leading-7 text-black/80">
                    Building these personas around disability wasn't about designing a "special" experience,  it was about designing a better experience, full stop. Many of the features that helped Sarah or Emily would benefit every user.
                </p>
            </SectionBlock>
            <div className="px-5 sm:px-[6%] pb-16 sm:pb-24">
                <img src="https://res.cloudinary.com/haneefah/image/upload/v1777305037/Case%20Studies/PP-personas_gh3hbj.png" alt="PlatePal personas" className="w-full" />
            </div>
        </div>

        {/* design direction */}
        <div id="dd">
            <SectionBlock id="dd-text" label="Design Direction" className="pb-10">
                <h2 className="text-2xl sm:text-4xl font-semibold font-plusJakarta leading-[1.5]">
                    Simple. Structured. Stress-free.
                </h2>
                <p className="font-inter font-light leading-7 text-black/80">
                    Before moving into high fidelity, I explored the core journeys through sketches and low-fidelity concepts. I intentionally kept the interface visually quiet. Rather than exposing every possible action at once, screens would prioritise the decision users needed to make right now.
                </p>
                <p className="font-inter font-light leading-7 text-black/80 pb-4">
                    Three principles guided the design:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
                    {principles.map((principle) => (
                        <div key={principle.title} className="pb-6 sm:pb-12 flex flex-col gap-3">
                            <h3 className="font-semibold font-plusJakarta">{principle.title}</h3>
                            <p className="font-inter font-light text-sm leading-6 text-secondary-text">{principle.text}</p>
                        </div>
                    ))}
                </div>
            </SectionBlock>

            <div className="px-5 sm:px-[6%]">
                <img src="https://res.cloudinary.com/haneefah/image/upload/v1777305777/Case%20Studies/PP5_ujt2ws.png" alt="PlatePal sketches" className="w-full" />
            </div>

            <div className="px-5 sm:px-[6%] md:pl-[20%] md:pr-[10%] flex flex-col md:flex-row gap-6 md:gap-0 pt-16 pb-10">
                <div className="md:w-1/4 shrink-0" />
                <div className="md:w-3/4 flex flex-col gap-6 pb-6">
                    <p className="font-inter font-light leading-7 text-black/80">Instead of reviewing accessibility once the UI was complete, I incorporated accessibility requirements while defining the interface.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {cards.map((card) => (
                            <div key={card.title} className="pb-6 sm:pb-12 flex flex-col gap-3">
                                <p className='font-plusJakarta text-xl font-semibold text-[#008000]'>{card.number}</p>
                                <h3 className="font-semibold font-plusJakarta">{card.title}</h3>
                                <p className="font-inter font-light text-sm leading-6 text-secondary-text">{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* style guide */}
        <div id="style">
            <SectionBlock id="style-text" label="style guide" className="pb-10">
                <h2 className="text-2xl sm:text-4xl font-semibold font-plusJakarta leading-[1.5]">
                    Designing a system, not just screens.
                </h2>
                <p className="font-inter font-light leading-7 text-black/80">
                    Once the interaction direction was established, I created a lightweight visual system to keep the experience predictable. PlatePal uses a restrained green palette, strong contrast, clear typography and reusable components across planning, recipes, groceries and cooking.
                </p>
                <p className="font-inter font-light leading-7 text-black/80">
                    Buttons shouldn't move unpredictably between screens. Selected states needed to remain recognisable. Feedback patterns needed to behave consistently.
                </p>
                <p className="font-inter font-light leading-7 text-black/80">
                    Consistency became particularly important for accessibility. The system therefore wasn't only about making the interface visually cohesive, it helped make the product easier to learn.
                </p>
            </SectionBlock>
            <div className="px-5 sm:px-[6%] pb-12">
                <img src="https://res.cloudinary.com/haneefah/image/upload/v1777392583/Case%20Studies/color_wpukoa.png" alt="PlatePal style" className="w-full pb-3" />
                <img src="https://res.cloudinary.com/haneefah/image/upload/v1777306845/Case%20Studies/PP7_zonlci.png" alt="PlatePal components" className="w-full" />
            </div>
        </div>

        {/* testing */}
        <div id="testing">
            <SectionBlock id="testing-text" label="testing + iterations" className="pb-10">
                <h2 className="text-2xl sm:text-3xl font-semibold font-plusJakarta leading-[1.7]">
                    Eight participants, real feedback, honest iterations.
                </h2>
                <p className="font-inter font-light leading-7 text-black/80">
                    I ran a moderated usability study with eight participants aged 20–40, each asked to complete six tasks using the Figma prototype. Participants were introduced to the personas before testing so they could evaluate the design with those users in mind. Sessions were followed by SUS questionnaires and semi-structured interviews.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {stats.map((stat) => (
                        <div key={stat.label} className="p-4 sm:p-6 flex flex-col items-center gap-3">
                            <span className="text-3xl sm:text-5xl font-bold font-inter text-[#008000]">{stat.value}</span>
                            <span className="font-light font-inter text-secondary-text text-center text-sm sm:text-base">{stat.label}</span>
                        </div>
                    ))}
                </div>
                <p className="font-inter font-light leading-7 text-black/80">
                    All eight participants found the layout clear and straightforward. The consistent page labelling was a standout — nobody felt lost navigating the app. But three specific issues surfaced that needed addressing:
                </p>
                <div className="flex flex-col gap-6">
                    {quotes.map((quote, i) => (
                        <div key={i} className="border-l-2 border-gray-500 pl-4 sm:pl-6 py-2 bg-gray-50 flex flex-col gap-2">
                            <p className="font-inter font-light italic leading-7 text-black">{quote.text}</p>
                            <span className="text-xs font-inter text-secondary-text">— {quote.author}</span>
                        </div>
                    ))}
                </div>
            </SectionBlock>
            <div className="px-5 sm:px-[6%]">
                <img src="https://res.cloudinary.com/haneefah/image/upload/v1777308499/Case%20Studies/PP-test1_kj8j4c.png" alt="PlatePal iterations" className="w-full pb-3" />
                <img src="https://res.cloudinary.com/haneefah/image/upload/v1777308500/Case%20Studies/PP-test2_lvjuv0.png" alt="PlatePal iterations" className="w-full pb-3" />
                <img src="https://res.cloudinary.com/haneefah/image/upload/v1777308502/Case%20Studies/PP-test3_phrq9a.png" alt="PlatePal iterations" className="w-full" />
            </div>
        </div>

        {/* solution */}
        <div id="solution">
            <SectionBlock id="solution-text" label="the solution" className="pb-10">
                <h2 className="text-2xl sm:text-4xl pb-3 font-semibold font-plusJakarta leading-[1.5]">
                    PlatePal's Recipe to Success
                </h2>
                <p className="font-inter font-light leading-7 text-black/80">
                    PlatePal is a meal planning and recipe application designed to make home cooking more accessible, enjoyable, and stress-free for everyone. The solution centres on <span className='font-bold'>four core features:</span>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-6">
                    {solutions.map((solution) => (
                        <div key={solution.title} className="py-6 sm:py-10 flex flex-col gap-3">
                            <p className='font-plusJakarta text-2xl font-semibold text-[#008000]'>{solution.number}</p>
                            <p className="font-inter font-light text-md leading-6 text-black">{solution.description}</p>
                        </div>
                    ))}
                </div>
                <p className="font-inter font-light leading-7 text-black/80">
                    But beyond the features, PlatePal's real solution is one of inclusion. By designing with accessibility at the foundation — not as an afterthought — the app serves users with physical, visual, auditory, and cognitive differences just as well as it serves everyone else. The goal was never to build a "special" version for people with disabilities. It was to build one version that works beautifully for all.
                </p>
            </SectionBlock>
            <div className="px-5 sm:px-[6%]">
                <img src="https://res.cloudinary.com/haneefah/image/upload/v1777396619/Case%20Studies/PP_vku41v.png" alt="PlatePal" className="w-full pb-3" />
                <img src="https://res.cloudinary.com/haneefah/image/upload/v1777398109/Case%20Studies/design_bnjrpx.png" alt="PlatePal" className="w-full pb-3" />
                <img src="https://res.cloudinary.com/haneefah/image/upload/v1777398579/Case%20Studies/design2_enfbr9.png" alt="PlatePal" className="w-full" />
            </div>
        </div>

        {/* multi-platform */}
        <div id="platform">
            <SectionBlock id="platform-text" label="multi-platform thinking" className="pb-10">
                <h2 className="text-2xl sm:text-4xl pb-3 font-semibold font-plusJakarta leading-[1.5]">
                    The same experience, tailored for different devices
                </h2>
                <p className="font-inter font-light leading-7 text-black/80">
                    PlatePal was designed for smartphone, tablet, and smart watch — not as an afterthought, but as a deliberate inclusivity strategy. A user with low vision benefits from the iPad's larger canvas. A user with motor impairments can glance at their Apple Watch for cooking timers without unlocking their phone. The iPad's split-screen view lets users watch a recipe video and read the ingredient list simultaneously.
                </p>
                <p className="font-inter font-light leading-7 text-black/80">
                    Each platform adaptation was driven by the question: <span className='italic'>"how does this help someone who might struggle with the default experience?"</span>
                </p>
            </SectionBlock>
            <div className="px-5 sm:px-[6%]">
                <img src="https://res.cloudinary.com/haneefah/image/upload/v1777312750/Case%20Studies/ipad_z0vc04.png" alt="PlatePal ipad" className="w-full pb-6" />
                <img src="https://res.cloudinary.com/haneefah/image/upload/v1777311982/Case%20Studies/PP-watch_yhyeyr.png" alt="PlatePal watch" className="w-full" />
            </div>
        </div>

        {/* reflections */}
        <SectionBlock id="reflections" label="reflections + takeaways" className="pb-24 sm:pb-40">
            <h2 className="text-2xl sm:text-4xl pb-3 font-semibold font-plusJakarta leading-[1.5]">
                What did I learn from this project?
            </h2>
            <p className="font-inter font-light leading-7 text-black/80">
                The biggest shift this project created in how I think about design: <span className='font-bold'>accessibility isn't a checklist you complete at the end, it's a lens you apply from the very beginning.</span> Designing for Sarah's one-handed interaction made the tap targets better for everyone. Designing for Emily's cognitive load made the onboarding clearer for everyone.
            </p>
            <div className="border-l-2 border-gray-500 pl-4 sm:pl-6 py-2 bg-gray-50 flex flex-col gap-2">
                <p className="font-inter font-light italic leading-7 text-black">"Accessibility isn't a constraint — it's a design advantage."</p>
            </div>
        </SectionBlock>
      </section>

      <section>
        <MoreProjects />
      </section>
    </main>
  );
}