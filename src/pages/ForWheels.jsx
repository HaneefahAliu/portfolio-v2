import BackButton from "../components/backButton";
import MoreProjects from "../components/moreProjects";
import { findings } from "../data/card";
import "./globals.css";

export default function ForWheels() {
  return (
    <main className='page-grid'>
      {/* Heading */}
      <div>
        <section className="px-[6%] pt-16">
          <BackButton label="Go Back" />
          <h1 className="py-10 font-anton text-7xl leading-[1.5] max-w-6xl">ForWheels — making cars make sense, through augmented reality.</h1>
          <img src="https://res.cloudinary.com/haneefah/image/upload/v1777300599/Case%20Studies/forwheels_keh0kp.png" alt="Forwheels Cover" className="w-full block" />
        </section>

        <section className="relative flex gap-16 pt-12 px-[6%]">
          <div className="w-2/3 flex flex-col gap-6">
            <img src="" alt="Forwheels screens" className="w-full" />
            <img src="" alt="Forwheels stats" className="w-full" />
          </div>

          <div className="w-1/3">
            <div className="sticky top-24 flex flex-col gap-8">
              <div>
                <span className="text-xs font-light font-plusJakarta tracking-widest text-secondary-text">[SUMMARY]</span>
                <p className="mt-2 font-inter font-light leading-7">
                  Understanding how cars work should not feel like memorising textbooks. However, for the majority of individuals, from students to regular automobile owners, this is exactly what it means. Too theoretical, too expensive, and too detached from practical experience. ForWheels was created to address this issue by incorporating augmented reality into the world of automotive training and education, design and engineering and car maintenance.
                </p>
              </div>

              <div>
                <span className="text-xs font-light font-plusJakarta tracking-widest text-secondary-text">[ROLE]</span>
                <p className="mt-2 font-inter font-light leading-7">
                  UX Research, UX Design, Art Direction, Prototyping, Motion & Visualisation.
                </p>
              </div>

              <div>
                <span className="text-xs font-light font-plusJakarta tracking-widest text-secondary-text">[TOOLS]</span>
                <p className="mt-2 font-inter font-light leading-7">Figma, FigJam.</p>
              </div>

              <div>
                <span className="text-xs font-light font-plusJakarta tracking-widest text-secondary-text">[DELIVERABLES]</span>
                <p className="mt-2 font-inter font-light leading-7">
                  High Fidelity Designs, Interactive Prototype, Design Assets, Video Demonstrations.
                </p>
              </div>

              <div>
                <span className="text-xs font-light font-plusJakarta tracking-widest text-secondary-text">[PLATFORM]</span>
                <p className="mt-2 font-inter font-light leading-7">HoloLens 2, Mobile AR</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* End of Heading */}

      {/* Content */}
      <section>
        {/* problem */}
        <div>
          <div className="flex gap-16 px-[6%] py-24">
            <div className="w-1/4">
              <span className="text-xs font-light font-plusJakarta tracking-widest uppercase text-secondary-text">[THE PROBLEM]</span>
            </div>

            <div className="w-3/4 flex flex-col gap-6">
              <h2 className="text-2xl font-semibold font-plusJakarta leading-[1.7]">
                Cars are everywhere. Understanding them, however, is a different story.
              </h2>
              <p className="font-inter font-light leading-7 text-black/80">
                Cars make life easier, spark dreams in children, and carry the weight of major sectors. However, the relationship between people and their vehicles is surprisingly fragile. Car owners ignore maintenance because they don't understand warning indicators, engineering students spend more time looking at mathematics than at actual engines and educating automobile specialists is expensive, physically demanding, and, in some situations, downright deadly with mishandled equipment resulting in life-altering injuries and fatalities.
              </p>

              <p className="font-inter font-light leading-7 text-black/80">
                Early desk research revealed three things: <span className="font-bold">cars are complex to average owners, repair shops are overburdened, and big automakers are already spending extensively in technology to improve their training processes.</span> The gap is not one of interest but one of access. The people desire to learn, the tools just haven’t caught up. So the question was not about whether there was a need, it was whether we could create something that met it.
              </p>
            </div>
          </div>

          <div className="px-[6%]">
            <img src="https://res.cloudinary.com/haneefah/image/upload/v1777328098/Case%20Studies/FW_rfxkuu.png" alt="ForWheels Solution" className="w-full pb-6" />
          </div>
        </div>
        {/* end of problem */}

        {/* research */}
        <div>
          <div className="flex gap-16 px-[6%] pt-24 pb-10">
            <div className="w-1/4">
              <span className="text-xs font-light font-plusJakarta tracking-widest uppercase text-secondary-text">[research]</span>
            </div>

            <div className="w-3/4 flex flex-col gap-6">
              <h2 className="text-2xl font-semibold font-plusJakarta leading-[1.7]">
                We spoke to everyone who has ever touched a car.
              </h2>
              <p className="font-inter font-light leading-7 text-black/80">
                Before we touched a single wireframe, our five-person team did a market research study to map out the landscape, identifying gaps in existing automotive education products, new trends, and potential competitors. This provided us with the strategic foundation to build on.
              </p>
            </div>
          </div>

          <div className="px-[6%]">
            <img src="https://res.cloudinary.com/haneefah/image/upload/v1777328393/Case%20Studies/reserach_x9eteh.png" alt="ForWheels insight" className="w-full pb-6" />
          </div>

          <div className="flex gap-16 px-[6%] py-10">
            <div className="w-1/4">
              <span className="text-xs font-light font-plusJakarta tracking-widest uppercase text-secondary-text"></span>
            </div>
          
            <div className="w-3/4 flex flex-col gap-6 pb-6">
              <p className="font-inter font-light leading-7 text-black/80">We then interviewed people aged 18 to 60, representing practically every relevant relationship with vehicles, from students and mechanics to regular drivers and repair business owners. Every interview was led by two goals: understanding how people engaged with cars on a regular basis, and exploring the habits and frustrations that shape their automotive learning experiences.</p>
              <p className="font-inter font-light leading-7 text-black/80">
                To structure what we learned, we utilised the Say-Think-Feel-Do framework, which involved not only collecting replies but also identifying the emotion behind the pain points. The empathy map served as a live reference throughout the project, keeping the team on track and the user's perspective at the center of all decisions.
              </p>
            </div>
          </div>

          <div className="px-[6%]">
            <img src="https://res.cloudinary.com/haneefah/image/upload/v1777328801/Case%20Studies/E.M_ccyd5e.png" alt="ForWheels Solution" className="w-full pb-6" />
          </div>
        </div>
        {/* end of research */}

        {/* key findings */}
        <div className="flex gap-16 px-[6%] py-24">
          <div className="w-1/4">
            <span className="text-xs font-light font-plusJakarta tracking-widest uppercase text-secondary-text">[key findings]</span>
          </div>
        
          <div className="w-3/4 flex flex-col gap-6">
            <h2 className="text-2xl font-semibold font-plusJakarta leading-[1.7]">
              Four things every interview kept telling us
            </h2>

            <p className="font-inter font-light leading-7 text-black/80">
              Across every user group, the same themes resurfaced. And they all pointed to the same conclusion: <span className="font-bold">people learn best when they can see and do, not just read and listen.</span>
            </p>
          <div className="grid grid-cols-4 gap-4">
            {findings.map((finding) => (
              <div key={finding.title} className="pt-6 flex flex-col gap-3">
                <h3 className="font-semibold font-plusJakarta text-[#D66B08]">{finding.title}</h3>
                <p className="font-inter font-light leading-6 text-black/80">{finding.description}</p>
                {/* border */}
                <p className="font-inter font-light text-xs italic text-secondary-text">{finding.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* end of key findings */}
      </section>

      {/* more projects */}
            <section>
              <MoreProjects />
            </section>
            {/* End of more projects */}

    </main>
  )
}