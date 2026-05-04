import { CookingPot, BookSearch, CaptionsOff } from 'lucide-react';
import {cards, stats, quotes, solutions } from "../data/card";
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

export default function PlatePal() {
  return (
    <main className='page-grid'>
      <QuickLinks links={links} triggerId="heading"/>

      {/* Heading */}
      <CaseStudyHeader
        title="PlatePal - designing a meal planning app where nobody gets left out."
        cover="https://res.cloudinary.com/haneefah/image/upload/v1777300327/Case%20Studies/platepal_njtjjf.png"
        screens="https://res.cloudinary.com/haneefah/image/upload/v1777300247/Case%20Studies/PP1_a2zm8r.png"
        stats="https://res.cloudinary.com/haneefah/image/upload/v1777300248/Case%20Studies/PP2_cclp0x.png"
        summary="Planning what to eat sounds simple, until you actually try to do it. You scroll through endless recipes, juggle dietary needs, forget ingredients. And somehow, it still ends in frustration. For many people, especially those relying on assistive technologies, this process is even harder. PlatePal was designed to change that."
        role="UX Research, Accessibility, UI Design, Prototyping, User Testing."
        tools="Figma, FigJam."
        deliverables="High Fidelity Designs, Interactive Prototype, Multi-platform Designs, Design Assets."
        platform="Phone, Tablet, Smart Watch."
      />
      {/* End of Heading */}

      {/* Content */}
      <section>
        {/* problem */}
        <div id="problem" className="pl-[20%] pr-[10%] flex py-24">
          <div className="w-1/4">
            <span className="text-xs font-light font-plusJakarta tracking-widest uppercase text-secondary-text">[THE PROBLEM]</span>
          </div>

          <div className="w-3/4 flex flex-col gap-6">
            <h2 className="text-4xl pb-3 font-semibold font-plusJakarta leading-[1.5]">
              Meal planning is fragmented, overwhelming, and often inaccessible — and for some people, the apps meant to help make it worse.
            </h2>
            <p className="font-inter font-light leading-7 text-black/80">
              Despite the fact that food is one of the most essential aspects of everyday living, many people find it extremely difficult to plan, find, and prepare meals. A lot of individuals struggle not because they are incapable of cooking, but rather because the culinary process is flawed.
            </p>

            <p className="font-inter font-light leading-7 text-black/80">
              Recipes are scattered across platforms and buried behind adverts, meal planning needs too many manual steps, and for the 1 in 6 people worldwide living with a disability, these frustrations are compounded by digital tools that treat accessibility as an afterthought rather than a foundation.
            </p>

            <p className="font-inter font-light leading-7 text-black/80">
              With over 1 billion people living with disabilities worldwide, many existing cooking platforms unfairly exclude a large proportion of users, and I wanted to create something different – an application that truly worked for everyone, not just the average user that the industry typically designs for.
            </p>
          </div>
        </div>
        {/* end of problem */}

        {/* research */}
        <div id="research" className="pl-[20%] pr-[10%] flex pt-20 pb-10">
          <div className="w-1/4">
            <span className="text-xs font-light font-plusJakarta tracking-widest uppercase text-secondary-text">[research]</span>
          </div>

          <div className="w-3/4 flex flex-col gap-6">
            <h2 className="text-4xl pb-3 font-semibold font-plusJakarta leading-[1.5]">
              Why does this matter?
            </h2>

            <p className="font-inter font-light leading-7 text-black/80">
              Food is more than just eating — it’s independence, health, and daily structure. When users can’t easily plan;
              <ul className="list-disc list-inside flex flex-col gap-2">
                <li>They rely on repetitive or unhealthy options.</li>
                <li>They lose time and mental energy.</li>
                <li>They feel excluded from something as basic as cooking.</li>
              </ul>
            </p>
            
            <p className="font-inter font-light leading-7 text-black/80">
              Instead of designing first and “adding accessibility later,” PlatePal was built around inclusive design principles from day one. This meant understanding diverse user needs early, designing with assistive technology in mind and simplifying flows without reducing functionality.
            </p>

            <p className="font-inter font-light leading-7 text-black/80">
              PlatePal was created from the foundation up with inclusive design principles, as opposed to building first and “adding accessibility later”. This meant identifying diverse user needs early on, designing with assistive technology in mind, and simplifying flows without sacrificing functionality. To do this, I carried out comprehensive research that involved analysing and comparing existing tools, user testing, and interviews, from which I was able to gather insights and put together user personas.
            </p>

            <div className="grid grid-cols-3 gap-12 pt-12">
              {[
                {
                  icon: <CookingPot size={32} strokeWidth={1.2} className='text-[#008000]' />, 
                  text: "Users feel overwhelmed before they even start cooking."
                },
                {
                  icon: <BookSearch size={32} strokeWidth={1.2} className='text-[#008000]' />,
                  text: "Meal planning is more about decision-making than recipes."
                },
                {
                  icon: <CaptionsOff size={32} strokeWidth={1.2} className='text-[#008000]' />,
                  text: "Accessibility issues often break the entire experience — not just parts of it."
                },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-6">
                  <div>
                    {item.icon}
                  </div>
                  <p className="text-[16px] font-inter font-regular leading-[1.8] text-black/70">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* end of research */}

        {/* persona */}
        <div id='personas'>
          <div className="pl-[20%] pr-[10%] flex pt-20 pb-10">
            <div className="w-1/4">
              <span className="text-xs font-light font-plusJakarta tracking-widest uppercase text-secondary-text">[user personas]</span>
            </div>

            <div className="w-3/4 flex flex-col gap-6">
              <h2 className="text-4xl font-semibold font-plusJakarta leading-[1.5]">
                Designing for real people.
              </h2>
              
              <p className="font-inter font-light leading-7 text-black/80">
                To ground the experience in real needs, I developed four detailed personas grounded in real-world disability contexts, mapping out not just their goals but the specific barriers they faced with existing tools and the assistive technologies they relied on.
              </p>

              <p className="font-inter font-light leading-7 text-black/80">
                Building these personas around disability wasn't about designing a "special" experience — it was about designing a better experience, full stop. Many of the features that helped Sarah or Emily would benefit every user.
              </p>
            </div>
          </div>

          <div className="px-[6%] pb-24">
            <img src="https://res.cloudinary.com/haneefah/image/upload/v1777305037/Case%20Studies/PP-personas_gh3hbj.png" alt="PlatePal personas" className="w-full" />
          </div>
        </div>
        {/* end of persona */}

        {/* design direction */}
        <div id="dd">
          <div className="pl-[20%] pr-[10%] flex pt-20 pb-10">
            <div className="w-1/4">
              <span className="text-xs font-light font-plusJakarta tracking-widest uppercase text-secondary-text">[Design Direction]</span>
            </div>

            <div className="w-3/4 flex flex-col gap-6">
              <h2 className="text-4xl font-semibold font-plusJakarta leading-[1.5]">
                Simple. Structured. Stress-free.
              </h2>
              
              <p className="font-inter font-light leading-7 text-black/80">
                Early sketches aimed to reduce cognitive stress. Clear layout hierarchy, minimal decision points per screen, and effective visual separation with whitespace. The goal was straightforward — Help users move forward without overthinking.
              </p>

              <p className="font-inter font-light leading-7 text-black/80">
                Every choice was made with accessibility in mind, even in the initial designs. Before moving on to high fidelity, I quickly tested layout concepts using paper prototypes, highlighting clear structure, plenty of white space, and user-friendly navigation that wouldn't require reading comprehension. I also used these prototypes to show where accessibility guidelines would be applied throughout the application. 
              </p>
            </div>
          </div>

          <div className="px-[6%]">
            <img src="https://res.cloudinary.com/haneefah/image/upload/v1777305777/Case%20Studies/PP5_ujt2ws.png" alt="PlatePal sketches" className="w-full" />
          </div>

          <div className="pl-[20%] pr-[10%] flex pt-20 pb-10">
            <div className="w-1/4">
              <span className="text-xs font-light font-plusJakarta tracking-widest uppercase text-secondary-text"></span>
            </div>

            <div className="w-3/4 flex flex-col gap-6 pb-6">
              <p className="font-inter font-light leading-7 text-black/80">In the high-fidelity designs, a few choices were particularly intentional:</p>
              <div className="grid grid-cols-3 gap-6">
                {cards.map((card) => (
                  <div key={card.title} className="pb-12 flex flex-col gap-3">
                    <p className='font-plusJakarta text-xl font-semibold text-[#008000]'>{card.number}</p>
                    <h3 className="font-semibold font-plusJakarta">{card.title}</h3>
                    <p className="font-inter font-light text-sm leading-6 text-secondary-text">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* end of design direction */}

        {/* style guide */}
        <div id="style">      
          <div className="pl-[20%] pr-[10%] flex pt-20 pb-10">
            <div className="w-1/4">
              <span className="text-xs font-light font-plusJakarta tracking-widest uppercase text-secondary-text">[style guide]</span>
            </div>

            <div className="w-3/4 flex flex-col gap-6">
              <h2 className="text-4xl font-semibold font-plusJakarta leading-[1.5]">
                Designing a system, not just screens.
              </h2>
              
              <p className="font-inter font-light leading-7 text-black/80">
                To ensure consistency and scalability across PlatePal, I developed a foundational style guide that informed every design decision across the product.
              </p>

              <p className="font-inter font-light leading-7 text-black/80">
                Rather than treating visuals as isolated choices, I approached the interface as a cohesive system  where colour, typography, and components work together to create a clear and accessible experience.
              </p>
            </div>
          </div>

          <div className="px-[6%] pb-12">
            <img src="https://res.cloudinary.com/haneefah/image/upload/v1777392583/Case%20Studies/color_wpukoa.png" alt="PlatePal style" className="w-full pb-3" />
            <img src="https://res.cloudinary.com/haneefah/image/upload/v1777306845/Case%20Studies/PP7_zonlci.png" alt="PlatePal components" className="w-full" />
          </div>
        </div> 
        {/* end of style guide */}

        {/* testing */}
        <div id='testing'>
          <div className="pl-[20%] pr-[10%] flex pt-20 pb-10">
            <div className="w-1/4">
              <span className="text-xs font-light font-plusJakarta tracking-widest uppercase text-secondary-text">[testing + iterations]</span>
            </div>

            <div className="w-3/4 flex flex-col gap-6">
              <h2 className="text-2xl font-semibold font-plusJakarta leading-[1.7]">
                Eight participants, real feedback, honest iterations.
              </h2>
              
              <p className="font-inter font-light leading-7 text-black/80">
                I ran a moderated usability study with eight participants aged 20–40, each asked to complete six tasks using the Figma prototype. Participants were introduced to the personas before testing so they could evaluate the design with those users in mind. Sessions were followed by SUS questionnaires and semi-structured interviews.
              </p>

              <div className="grid grid-cols-4 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="p-6 flex flex-col items-center gap-3">
                    <span className="text-5xl font-bold font-inter text-[#008000]">{stat.value}</span>
                    <span className="font-light font-inter text-secondary-text">{stat.label}</span>
                  </div>
                ))}
              </div>

              <p className="font-inter font-light leading-7 text-black/80">
                All eight participants found the layout clear and straightforward. The consistent page labelling was a standout — nobody felt lost navigating the app. But three specific issues surfaced that needed addressing:
              </p>

              <div className="flex flex-col gap-6">
                {quotes.map((quote, i) => (
                  <div key={i} className="border-l-2 border-gray-500 pl-6 py-2 bg-gray-50 flex flex-col gap-2">
                      <p className="font-inter font-light italic leading-7 text-black">{quote.text}</p>
                    <span className="text-xs font-inter text-secondary-text">— {quote.author}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="px-[6%]">
            <img src="https://res.cloudinary.com/haneefah/image/upload/v1777308499/Case%20Studies/PP-test1_kj8j4c.png" alt="PlatePal iterations" className="w-full pb-3" />
            <img src="https://res.cloudinary.com/haneefah/image/upload/v1777308500/Case%20Studies/PP-test2_lvjuv0.png" alt="PlatePal iterations" className="w-full pb-3" />
            <img src="https://res.cloudinary.com/haneefah/image/upload/v1777308502/Case%20Studies/PP-test3_phrq9a.png" alt="PlatePal iterations" className="w-full" />
          </div>
        </div>
        {/* end of testing */}

        {/* design */}
        <div id='solution'>
          <div className="pl-[20%] pr-[10%] flex pt-20 pb-10">
            <div className="w-1/4">
              <span className="text-xs font-light font-plusJakarta tracking-widest uppercase text-secondary-text">[the solution]</span>
            </div>

            <div className="w-3/4 flex flex-col gap-6">
              <h2 className="text-4xl pb-3 font-semibold font-plusJakarta leading-[1.5]">
                PlatePal's Recipe to Success
              </h2>

              <p className="font-inter font-light leading-7 text-black/80">
                PlatePal is a meal planning and recipe application designed to make home cooking more accessible, enjoyable, and stress-free for everyone. The solution centres on <span className='font-bold'>four core features:</span>
              </p>

              <div className="grid grid-cols-2 gap-4 pb-6">
                {solutions.map((solution) => (
                  <div key={solution.title} className="py-10 flex flex-col gap-3">
                    <p className='font-plusJakarta text-2xl font-semibold text-[#008000]'>{solution.number}</p>
                    <p className="font-inter font-light text-md leading-6 text-black">{solution.description}</p>
                  </div>
                ))}
              </div>
              
              <p className="font-inter font-light leading-7 text-black/80">
                But beyond the features, PlatePal's real solution is one of inclusion. By designing with accessibility at the foundation — not as an afterthought — the app serves users with physical, visual, auditory, and cognitive differences just as well as it serves everyone else. The goal was never to build a "special" version for people with disabilities. It was to build one version that works beautifully for all.
              </p>
            </div>
          </div>

          <div className="px-[6%]">
            <img src="https://res.cloudinary.com/haneefah/image/upload/v1777396619/Case%20Studies/PP_vku41v.png" alt="PlatePal" className="w-full pb-3" />
            <img src="https://res.cloudinary.com/haneefah/image/upload/v1777398109/Case%20Studies/design_bnjrpx.png" alt="PlatePal" className="w-full pb-3" />
            <img src="https://res.cloudinary.com/haneefah/image/upload/v1777398579/Case%20Studies/design2_enfbr9.png" alt="PlatePal" className="w-full" />
          </div>
        </div>
        {/* end of design */}

        {/* multi-platform */}
        <div id='platform'>
          <div className="pl-[20%] pr-[10%] flex pt-20 pb-10">
            <div className="w-1/4">
              <span className="text-xs font-light font-plusJakarta tracking-widest uppercase text-secondary-text">[multi-platform thinking]</span>
            </div>

            <div className="w-3/4 flex flex-col gap-6">
              <h2 className="text-4xl pb-3 font-semibold font-plusJakarta leading-[1.5]">
                The same experience, tailored for different devices
              </h2>
              <p className="font-inter font-light leading-7 text-black/80">
                PlatePal was designed for smartphone, tablet, and smart watch — not as an afterthought, but as a deliberate inclusivity strategy. A user with low vision benefits from the iPad's larger canvas. A user with motor impairments can glance at their Apple Watch for cooking timers without unlocking their phone. The iPad's split-screen view lets users watch a recipe video and read the ingredient list simultaneously.
              </p>
              <p className="font-inter font-light leading-7 text-black/80">
                Each platform adaptation was driven by the question: <span className='italic'>"how does this help someone who might struggle with the default experience?"</span>
              </p>
            </div>
          </div>

          <div className="px-[6%]">
            <img src="https://res.cloudinary.com/haneefah/image/upload/v1777312750/Case%20Studies/ipad_z0vc04.png" alt="PlatePal ipad" className="w-full pb-6" />
            <img src="https://res.cloudinary.com/haneefah/image/upload/v1777311982/Case%20Studies/PP-watch_yhyeyr.png" alt="PlatePal watch" className="w-full" />
          </div>
        </div>
        {/* end of multi-platform */}

        {/* reflections */}
        <div id='reflections' className="pl-[20%] pr-[10%] flex pt-20 pb-40">
          <div className="w-1/4">
            <span className="text-xs font-light font-plusJakarta tracking-widest uppercase text-secondary-text">[reflections + takeaways]</span>
          </div>

          <div className="w-3/4 flex flex-col gap-6">
            <h2 className="text-4xl pb-3 font-semibold font-plusJakarta leading-[1.5]">
              What did I learn from this project?
            </h2>
            <p className="font-inter font-light leading-7 text-black/80">
              The biggest shift this project created in how I think about design: <span className='font-bold'>accessibility isn't a checklist you complete at the end, it's a lens you apply from the very beginning.</span> Designing for Sarah's one-handed interaction made the tap targets better for everyone. Designing for Emily's cognitive load made the onboarding clearer for everyone.
            </p>
            <div className="border-l-2 border-gray-500 pl-6 py-2 bg-gray-50 flex flex-col gap-2">
              <p className="font-inter font-light italic leading-7 text-black">“Accessibility isn’t a constraint — it’s a design advantage.”</p>
            </div>
          </div>
        </div>
        {/* end of reflections */}
      </section>
      {/* End of Content */}

      {/* more projects */}
      <section>
        <MoreProjects />
      </section>
      {/* End of more projects */}
    </main>
  )
}