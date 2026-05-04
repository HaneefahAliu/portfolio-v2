import BackButton from "../components/backButton";
import MoreProjects from "../components/moreProjects";
import QuickLinks from "../components/quickLinks"; 
import CaseStudyHeader from "../components/projectHeader";
import { findings } from "../data/card";

import "./globals.css";

const links = [
    { id: 'problem', label: 'THE PROBLEM' },
    { id: 'research', label: 'Research' },
    { id: 'findings', label: 'Key Findings' },
    { id: 'personas', label: 'user personas' },
    { id: 'ar', label: 'why ar?' },
    { id: 'dd', label: 'design direction' },
    { id: 'solution', label: 'Solution' },
    { id: 'prototype', label: 'prototype' },
    { id: 'reflections', label: 'reflections + takeaways' },
];

const videos = [
    { id: '931018637', hash: 'fcb96665c6', title: 'Video One' },
    { id: '931018862', hash: '7338d9bc6f', title: 'Video Two' },
    { id: '931018766', hash: '5c7b252b9d', title: 'Video Three' },
];

export default function ForWheels() {
  return (
    <main className='page-grid'>
      <QuickLinks links={links} triggerId="heading"/>

      {/* Heading */}
      <CaseStudyHeader
        title="ForWheels — making cars make sense, through augmented reality."
        cover="https://res.cloudinary.com/haneefah/image/upload/v1777300599/Case%20Studies/forwheels_keh0kp.png"
        screens="https://res.cloudinary.com/haneefah/image/upload/v1777585998/Case%20Studies/fw-2_gv0h9i.png"
        stats="https://res.cloudinary.com/haneefah/image/upload/v1777569360/Case%20Studies/insight_pxfupg.png"
        summary="Understanding how cars work should not feel like memorising textbooks. However, for the majority of individuals, from students to regular automobile owners, this is exactly what it means. Too theoretical, too expensive, and too detached from practical experience. ForWheels was created to address this issue by incorporating augmented reality into the world of automotive training and education, design and engineering and car maintenance."
        role="UX Research, UX Design, Art Direction, Prototyping, Motion & Visualisation."
        tools="Figma, FigJam."
        deliverables="High Fidelity Designs, Interactive Prototype, Design Assets, Video Demonstrations."
        platform="HoloLens 2, Mobile AR"
      />
      {/* End of Heading */}

      {/* Content */}
      <section>
        {/* problem */}
        <div id="problem">
          <div className="pl-[20%] pr-[10%] flex py-24">
            <div className="w-1/4">
              <span className="text-xs font-light font-plusJakarta tracking-widest uppercase text-secondary-text">[THE PROBLEM]</span>
            </div>

            <div className="w-3/4 flex flex-col gap-6">
              <h2 className="text-4xl font-semibold font-plusJakarta leading-[1.5]">
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
        <div id="research">
          <div className="pl-[20%] pr-[10%] flex pt-24 pb-10">
            <div className="w-1/4">
              <span className="text-xs font-light font-plusJakarta tracking-widest uppercase text-secondary-text">[research]</span>
            </div>

            <div className="w-3/4 flex flex-col gap-6">
              <h2 className="text-4xl font-semibold font-plusJakarta leading-[1.5]">
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
            <img src="https://res.cloudinary.com/haneefah/image/upload/v1777328801/Case%20Studies/E.M_ccyd5e.png" alt="ForWheels empathy map" className="w-full pb-6" />
          </div>
        </div>
        {/* end of research */}

        {/* key findings */}
        <div id="findings" className="pl-[20%] pr-[10%] flex py-24">
          <div className="w-1/4">
            <span className="text-xs font-light font-plusJakarta tracking-widest uppercase text-secondary-text">[key findings]</span>
          </div>
        
          <div className="w-3/4 flex flex-col gap-6">
            <h2 className="text-4xl font-semibold font-plusJakarta leading-[1.5]">
              Four things every interview kept telling us
            </h2>

            <p className="font-inter font-light leading-7 text-black/80">
              Across every user group, the same themes resurfaced. And they all pointed to the same conclusion: <span className="font-bold">people learn best when they can see and do, not just read and listen.</span>
            </p>

            <div className="grid grid-cols-2 gap-4">
              {findings.map((finding) => (
                <div key={finding.title} className="pt-6 flex flex-col">
                  <h3 className="font-semibold text-md font-plusJakarta text-[#D66B08] pb-4">{finding.title}</h3>
                  <p className="font-inter font-light leading-6 text-black/80">{finding.description}</p>
                  <div className="w-full h-px bg-black/5 my-4" />
                  <p className="font-inter font-light text-xs italic text-secondary-text">{finding.quote}</p>
                </div>
              ))}
            </div>

            <p className="font-inter font-light leading-7 text-black/80 pt-12">The case for AR speaks for itself. If people learn by seeing and doing, and confidence comes from accomplishing tasks, the greatest tool we could develop was one that allowed users to look inside a car, interact with its components, and practise without any real-world risk.</p>
          </div>
        </div>
        {/* end of key findings */}

        {/* personas*/}
        <div id="personas">
          <div className="pl-[20%] pr-[10%] flex pt-24 pb-10">
            <div className="w-1/4">
              <span className="text-xs font-light font-plusJakarta tracking-widest uppercase text-secondary-text">[user personas]</span>
            </div>

            <div className="w-3/4 flex flex-col gap-6">
              <h2 className="text-4xl font-semibold font-plusJakarta leading-[1.5]">
                Who are we designing for?
              </h2>
              <p className="font-inter font-light leading-7 text-black/80">
                We created four personas based on our interview data, each representing a unique connection with automotive learning, ranging from the overconfident student who learns by doing to the cautious car owner who simply wants to stop feeling helpless in the garage.
              </p>
            </div>
          </div>

          <div className="px-[6%]">
            <img src="https://res.cloudinary.com/haneefah/image/upload/v1777575132/Case%20Studies/FW-personas_cqtbcv.png" alt="ForWheels personas" className="w-full pb-6" />
          </div>
        </div>
        {/* end of personas */}

        {/* AR */}
        <div id="ar">
          <div className="pl-[20%] pr-[10%] flex pt-24 pb-10">
            <div className="w-1/4">
              <span className="text-xs font-light font-plusJakarta tracking-widest uppercase text-secondary-text">[why ar?]</span>
            </div>

            <div className="w-3/4 flex flex-col gap-6">
              <h2 className="text-4xl font-semibold font-plusJakarta leading-[1.5]">
                Because the best way to learn a car is to be inside one.
              </h2>
              <p className="font-inter font-light leading-7 text-black/80">
                Before settling on AR, we considered a number of options. Video is passive, diagrams are static, and traditional simulators are costly and inaccessible. Augmented reality was the only alternative that allowed us to satisfy all three of our research requirements: show, demonstrate, and let users practice.
              </p>
              <p className="font-inter font-light leading-7 text-black/80">
                With HoloLens 2 for professional and training contexts and mobile AR for everyday car owners, ForWheels could meet users wherever they were, whether on the shop floor or in their own driveway.
              </p>
            </div>
          </div>

          <div className="px-[6%]">
            <img src="https://res.cloudinary.com/haneefah/image/upload/v1777575358/Case%20Studies/FW-ar_wtrlwk.png" alt="ForWheels ar" className="w-full pb-6" />
          </div>
        </div>
        {/* end of AR */}

        {/* design direction */}
        <div id="dd">
          <div className="pl-[20%] pr-[10%] flex pt-24 pb-10">
            <div className="w-1/4">
              <span className="text-xs font-light font-plusJakarta tracking-widest uppercase text-secondary-text">[design direction]</span>
            </div>

            <div className="w-3/4 flex flex-col gap-6">
              <h2 className="text-4xl font-semibold font-plusJakarta leading-[1.5]">
                Turning frustrations into features
              </h2>
              <p className="font-inter font-light leading-7 text-black/80">
                Before exploring into solutions, we asked ourselves a series of "How Might We" questions, recasting customer pain problems as design opportunities rather than roadblocks.
              </p>
              <p className="font-inter font-light leading-7 text-black/80">
                Every choice was made with accessibility in mind, even in the initial designs. Before moving on to high fidelity, I quickly tested layout concepts using paper prototypes, highlighting clear structure, plenty of white space, and user-friendly navigation that wouldn't require reading comprehension. I also used these prototypes to show where accessibility guidelines would be applied throughout the application. 
              </p>
            </div>
          </div>

          <div className="px-[6%]">
            <img src="https://res.cloudinary.com/haneefah/image/upload/v1777575706/Case%20Studies/fw-hmw_fccv7l.png" alt="ForWheels HMW" className="w-full pb-6" />
          </div>

          <div className="flex gap-16 px-[6%] py-10">
            <div className="w-1/4">
              <span className="text-xs font-light font-plusJakarta tracking-widest uppercase text-secondary-text"></span>
            </div>
          
            <div className="w-3/4 flex flex-col gap-6 pb-6">
              <div className="font-inter font-light leading-7 text-black/80">
                <p>
                  From there, we settled on four key features:
                </p>
                <ul className="pb-8 list-disc pl-10 flex flex-col gap-2 mt-2">
                  <li className="flex items-start gap-3">
                      <span>📚</span>
                      <span><span className="font-bold">Learn mode:</span> Guided, step-by-step automotive education with AR overlays on real components.</span>
                  </li>
                  <li className="flex items-start gap-3">
                      <span>🔩</span>
                      <span><span className="font-bold">Maintenance mode:</span> Diagnose and walk through real vehicle maintenance tasks with AR assistance.</span>
                  </li>
                  <li className="flex items-start gap-3">
                      <span>🎨</span>
                      <span><span className="font-bold">Freestyle mode:</span> Open exploration — users can examine components without a guided path.</span>
                  </li>
                  <li className="flex items-start gap-3">
                      <span>🏆</span>
                      <span><span className="font-bold">Challenge mode:</span> Test knowledge and skills through structured tasks and assessments.</span>
                  </li>
                </ul>
              </div>
              

              <p className="font-inter font-light leading-7 text-black/80">
                We employed a Hierarchical Task Analysis to break down every possible user action into subtasks, ensuring that the information architecture reflected how people actually think through a task, rather than how we imagined they would.
              </p>
            </div>
          </div>

          <div className="px-[6%]">
            <img src="https://res.cloudinary.com/haneefah/image/upload/v1777575999/Case%20Studies/fw_x57p5m.png" alt="ForWheels features" className="w-full pb-6" />
          </div>
        </div>
        {/* end of design direction */}

        {/* solution */}
        <div id="solution">
          <div className="pl-[20%] pr-[10%] flex pt-24 pb-10">
            <div className="w-1/4">
              <span className="text-xs font-light font-plusJakarta tracking-widest uppercase text-secondary-text">[solution]</span>
            </div>

            <div className="w-3/4 flex flex-col gap-6">
              <h2 className="text-4xl font-semibold font-plusJakarta leading-[1.5]">
                From rough sketches to full designs
              </h2>
              <p className="font-inter font-light leading-7 text-black/80">
                The sketching process of ForWheels was unlike any other project I've worked on. Designing for AR means thinking beyond the flat screen, every layout decision must consider the z-axis. Various surfaces come into play, the user's physical surroundings become part of the interface. You cannot simply design a screen, instead, you must design a space.
              </p>
              <p className="font-inter font-light leading-7 text-black/80">
                We began by exploring a wide range of concepts in low fidelity, quickly iterating on how interactions, overlays, and navigation might feel in a three-dimensional environment before committing to anything in high fidelity.
              </p>
            </div>
          </div>

          <div className="px-[6%]">
            <img src="https://res.cloudinary.com/haneefah/image/upload/v1777576400/Case%20Studies/fw-sketch_1_vq9xsd.png" alt="ForWheels sketch" className="w-full pb-6" />
          </div>

          <div className="flex gap-16 px-[6%] py-10">
            <div className="w-1/4">
              <span className="text-xs font-light font-plusJakarta tracking-widest uppercase text-secondary-text"></span>
            </div>
          
            <div className="w-3/4 flex flex-col gap-6 pb-6">
              <p className="font-inter font-light leading-7 text-black/80">
                  Once we had a clear direction, we moved on to creating high-fidelity designs in Figma, developing each mode with full visual design, interactions, and AR viewport considerations. Every screen was designed with three goals in mind: to be exciting enough to keep people's attention, detailed enough to be truly useful, and easy enough for everyone to understand.
              </p>
            </div>
          </div>

          <div className="px-[6%]">
            <img src="https://res.cloudinary.com/haneefah/image/upload/v1777585821/Case%20Studies/fw-design_1_jrpa3f.png" alt="ForWheels designs" className="w-full pb-6" />
          </div>
        </div>
        {/* end of solution */}

        {/* prototype */}
        <div id="prototype">
          <div className="pl-[20%] pr-[10%] flex pt-24 pb-10">
            <div className="w-1/4">
              <span className="text-xs font-light font-plusJakarta tracking-widest uppercase text-secondary-text">[prototype]</span>
            </div>

            <div className="w-3/4 flex flex-col gap-6">
              <h2 className="text-4xl font-semibold font-plusJakarta leading-[1.5]">
                Working prototypes and product visualisation
              </h2>
              <p className="font-inter font-light leading-7 text-black/80">
                The story did not end with the design of the screens. We wanted more than static models to really express the ForWheels experience — what it's like to point a HoloLens at an engine and watch it disassemble in AR.
              </p>
              <p className="font-inter font-light leading-7 text-black/80">
                We worked as a team to create product visualisation videos using Autodesk Maya and Adobe After Effects, staging real-world use case situations to demonstrate the program in context. With props, convincing acting, and quite a bit of post-production time, the videos brought the concept to life in a manner that no Figma prototype could.
              </p>
              <p className="font-inter font-light leading-7 text-black/80">
                The visualisations were our way of answering the question every stakeholder eventually asks:  <span className="font-bold italic">"But what does it actually feel like to use?"</span> For an AR product, that question matters more than almost anything else.
              </p>
            </div>
          </div>
          

          <div className="px-[6%]">
            <div className="grid grid-cols-1 gap-8">
              {videos.map((video) => (
                <div key={video.id} className="relative w-full aspect-video">
                  <iframe
                      title={video.title}
                      src={`https://player.vimeo.com/video/${video.id}?h=${video.hash}`}
                      className="w-full h-full"
                      frameBorder="0"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                      allowFullScreen
                  />
              </div>
              ))}
            </div>
          </div>
        </div>
      {/* end of prototype */}

      {/* reflections */}
      <div id="reflections">
        <div className="pl-[20%] pr-[10%] flex pt-24 pb-40">
          <div className="w-1/4">
            <span className="text-xs font-light font-plusJakarta tracking-widest uppercase text-secondary-text">[reflections + takeaways]</span>
          </div>

          <div className="w-3/4 flex flex-col gap-6">
            <h2 className="text-4xl font-semibold font-plusJakarta leading-[1.5]">
              What we built, what we learned, and where ForWheels could go
            </h2>
            <p className="font-inter font-light leading-7 text-black/80 pb-8">
              ForWheels was the most technically challenging project I'd ever worked on; developing for AR required working without the safety net of known patterns or recognisable standards. Every decision about hierarchy, depth, and interaction had to be backed by first principles. The z-axis affects everything. Designing for a flat screen involves arranging items in two dimensions. When you design for Augmented Reality, you are arranging a world. The most significant takeaway from this project was the shift in thinking from layout to space.
            </p>
            <p className="font-inter font-light leading-7 text-black/80 pb-8">
              Working in a five-person team also improved my collaboration skills. Equal involvement sounds simple in theory; in reality, it meant regular communication, integrating different design tastes, and figuring out how to make collective decisions feel logical rather than made by committee.
            </p>
            <div className="font-inter font-light leading-7 text-black/80 pb-8">
              <p>
                We were honest about what the current version still couldn't do:
              </p>
              <ul className="list-disc pl-10 flex flex-col gap-2 mt-2">
                <li>No collaborative AR yet — users can't work alongside someone remotely in the same AR environment.</li>
                <li>A stable internet connection is required, which limits use in low-connectivity settings like real workshops.</li>
                <li>HoloLens 2's battery life and tendency to overheat during extended sessions would need addressing for real-world deployment.</li>
              </ul>
            </div>
            <p className="font-inter font-light leading-7 text-black/80">
              But the foundation is solid. Future versions could connect users to local garages for live assistance, incorporate vehicle diagnostics right into the AR overlay, or provide premium services such as parts buying – all without leaving the app. The notion of a society in which understanding your own car is no longer considered a privilege appears to be feasible.
            </p>
          </div>
        </div>
      </div>
      {/* end of reflections */}
      </section>

      {/* more projects */}
      <section id="more-projects">
        <MoreProjects />
      </section>
      {/* End of more projects */}
    </main>
  )
}