import BackButton from "../components/backButton";
import MoreProjects from "../components/moreProjects";
import QuickLinks from "../components/quickLinks"; 
import CaseStudyHeader from "../components/projectHeader";
import "./globals.css";

const links = [
    { id: 'problem', label: 'THE PROBLEM' },
    { id: 'research', label: 'Research' },
    { id: 'insight', label: 'key insights' },
    { id: 'define', label: 'define' },
    { id: 'style', label: 'style guide' },
    { id: 'solution', label: 'the solution' },
    { id: 'highlight', label: 'Highlight' },
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

export default function EduLearn() {
    return (
        <main className='page-grid'>
            <QuickLinks links={links} triggerId="heading"/>

            <CaseStudyHeader
                title="EduLearn — One learning platform. Three different experiences."
                cover="https://res.cloudinary.com/haneefah/image/upload/v1777300489/Case%20Studies/edulearn_sanogx.png"
                screens="https://res.cloudinary.com/haneefah/image/upload/v1792437479/Case%20Studies/Department_ya2ngc.png"
                stats="https://res.cloudinary.com/haneefah/image/upload/v1792437152/Case%20Studies/cover_vqmo9e.png"
                summary="When education rapidly moved online during the pandemic, learning didn't move into one digital environment. It became fragmented across video calls, messaging apps, file-sharing tools, assessment platforms and individual systems chosen by different teachers. EduLearn explores how a single platform could support the different needs of students, educators and institutions without creating three disconnected experiences."
                role="UX Research, Product Design, UI Design."
                tools="Figma, FigJam."
                platform="Web"
            />

            <section>
            {/* problem */}
            <SectionBlock id="problem" label="THE PROBLEM">
                <h2 className="text-2xl sm:text-4xl pb-3 font-semibold font-plusJakarta leading-[1.5]">
                    Online learning was disorganized. The experience didn't have to be.
                </h2>
                <p className="font-inter font-light leading-7 text-black/80">
                    The shift to remote education made digital learning essential, but it also exposed how disconnected the learning experience could become. Students were expected to keep track of classes, assessments, learning materials and communication across multiple tools. Teachers had to distribute resources, communicate with students, manage assessments and monitor progress remotely. Institutions needed visibility across both sides.
                </p>
                <p className="font-inter font-light leading-7 text-black/80">
                    My early research suggested that the issue wasn't the absence of digital education tools. It was that too many parts of the learning experience existed separately. One student pain point captured the problem particularly well:<br /><p className="font-bold">“Different teachers have their own different set of tools and it's a lot to keep up with.”</p>
                </p>
                <p className="font-inter font-light leading-7 text-black/80">
                    That led me to a broader design challenge:
                </p>
                <p className="border-l-2 border-gray-500 pl-4 sm:pl-6 py-2 bg-gray-50 font-inter font-light italic leading-7 text-black">
                    How might one platform support learning, teaching and administration while keeping each experience focused on what that user actually needs?
                </p>
            </SectionBlock>
            <div className="px-5 sm:px-[6%] pb-16 sm:pb-24">
                <img src="https://res.cloudinary.com/haneefah/image/upload/v1792431648/Case%20Studies/EL4_sdchgt.png" alt="PlatePal personas" className="w-full" />
            </div>

            {/* research */}
            <SectionBlock id="research" label="research" className="pb-6">
                <h2 className="text-2xl sm:text-4xl pb-3 font-semibold font-plusJakarta leading-[1.5]">
                    Three perspectives, three different problems
                </h2>
                <p className="font-inter font-light leading-7 text-black/80">
                    Before designing the interface, I needed to understand how people were experiencing remote education and where existing tools were falling short.
                </p>
                <div>
                    <p className="font-inter font-light leading-7 text-black/80">
                        I conducted semi-structured interviews and gathered qualitative research responses from <span className="font-bold">29 participants.</span> My research focused on students, teaching professionals and the wider educational context. I wanted to understand three things:
                    </p>
                    <ul className="list-disc list-inside pt-2">
                        <li className="pb-2 font-light">How were people managing teaching and learning remotely?</li>
                        <li className="pb-2 font-light">Which parts of the experience created the most friction?</li>
                        <li className="pb-2 font-light">What would make their everyday tasks easier to organise?</li>
                    </ul>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 pt-4">
                    {[
                        { heading:"01 — Students needed clarity", text: "Students struggled to keep learning materials, assessments and communication organised when different teachers relied on different tools." },
                        { heading:"02 — Teachers needed coordination", text: "Teachers faced difficulties managing assessments and maintaining visibility into student participation across remote classes. Their challenge wasn't simply delivering content; it was managing the activities surrounding it." },
                        { heading:"03 — Institutions needed oversight", text: "At an institutional level, the experience also required administrative capabilities for managing students, teachers, courses and academic activities." },
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col gap-6">
                            <h3 className="font-semibold font-plusJakarta">{item.heading}</h3>
                            <p className="text-[16px] font-inter font-light leading-[1.8] text-black/80">{item.text}</p>
                        </div>
                    ))}
                </div>

                <p className="font-inter font-light leading-7 text-black/80 pt-4">
                    This introduced a different level of complexity: information needed to remain connected while being presented according to each user's responsibilities.
                </p>
            </SectionBlock>

            {/* insight */}
            <SectionBlock id="insight" label="key insight">
                <h2 className="text-2xl sm:text-4xl pb-3 font-semibold font-plusJakarta leading-[1.5]">
                    What is the Takeaway?
                </h2>
                <p className="font-inter font-light leading-7 text-black/80">
                    The same educational information needed to support different actions depending on who was using it. A student might submit an assessment. A teacher might create and review it. An institution might need visibility into it.
                </p>
                <p className="font-inter font-light leading-7 text-black/80">
                    That insight became the foundation for EduLearn's structure.
                </p>
            </SectionBlock>
            <div className="px-5 sm:px-[6%] pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <img src="https://res.cloudinary.com/haneefah/image/upload/v1792083561/Case%20Studies/EL2_ydpnjy.png" alt="Persona 1" className="w-full h-auto"/>
                    <img src="https://res.cloudinary.com/haneefah/image/upload/v1792083569/Case%20Studies/EL3_vodlkc.png" alt="Persona 2" className="w-full h-auto"/>
                </div>
            </div>

            {/* define */}
            <SectionBlock id="define" label="define">
                <h2 className="text-2xl sm:text-4xl pb-3 font-semibold font-plusJakarta leading-[1.5]">
                    Finding structure in complexity
                </h2>
                <p className="font-inter font-light leading-7 text-black/80">
                    With three distinct user groups, the challenge wasn't simply organising features. It was understanding how students, teachers and institutions interacted with the same information differently. I used card sorting, information architecture and task flows to translate those needs into a clear, role-based product structure.
                </p>
                <p className="font-inter font-light leading-7 text-black/80">
                    Rather than treating each experience independently, I explored how they could share a consistent foundation while prioritising different tasks. I used card sorting to explore how participants understood and grouped information, then translated those findings into information architecture and task flows.
                </p>
                <p className="font-inter font-light leading-7 text-black/80">
                    This helped me define the main areas of the platform and how users would navigate between them. For example, assessments were relevant to all three roles, but the available actions needed to change:
                </p>
                <ul className="list-disc list-inside pt-2">
                    <li className="pb-2 font-light">Student: View, complete and submit.</li>
                    <li className="pb-2 font-light">Teacher: Create, assign and review.</li>
                    <li className="pb-2 font-light">Institution: View and monitor.</li>
                </ul>
            </SectionBlock>
            <div className="px-5 sm:px-[6%] pb-16 sm:pb-24">
                <img src="https://res.cloudinary.com/haneefah/image/upload/v1792433658/Case%20Studies/EL5_gjbs0f.png" alt="edulearn define" className="w-full" />
            </div>

            {/* style */}
            <SectionBlock id="style" label="style" className="pb-10">
                <h2 className="text-2xl sm:text-4xl pb-3 font-semibold font-plusJakarta leading-[1.5]">
                    Designing for clarity across a complex platform
                </h2>
                <p className="font-inter font-light leading-7 text-black/80">
                    With the product structure established, I moved into the interface design. The main challenge was balancing consistency with the different needs of each role. Students, teachers and administrators needed familiar patterns, but the information presented to them couldn't be identical. Three principles guided my decisions.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 pt-4">
                    {[
                        { heading:"01 — Prioritise what matters now", text: "Dashboards needed to provide a useful overview without forcing users to navigate through multiple pages to find important information. For students, that meant upcoming assessments, schedules and course activity. For teachers, it meant submissions, classes and teaching responsibilities." },
                        { heading:"02 — Keep shared interactions familiar", text: "Common areas such as classes, calendars, assessments and communication needed consistent visual and interaction patterns. This would make the system easier to learn even as users moved between different tasks." },
                        { heading:"03 — Make complex tasks manageable", text: "Actions such as submitting assessments, creating assignments and managing academic records needed clear structures and understandable steps." },
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col gap-6">
                            <h3 className="font-semibold font-plusJakarta">{item.heading}</h3>
                            <p className="text-[16px] font-inter font-light leading-[1.8] text-black/80">{item.text}</p>
                        </div>
                    ))}
                </div>

                <p className="font-inter font-light leading-7 text-black/80 pt-8">
                    I focused on reducing unnecessary complexity within these flows rather than exposing every available option at once.
                </p>
            </SectionBlock>
            <div className="px-5 sm:px-[6%] pb-16 sm:pb-24">
                <img src="https://res.cloudinary.com/haneefah/image/upload/v1792435004/Case%20Studies/EL6_ytveds.png" alt="edulearn style" className="w-full" />
            </div>

            {/* solution */}
            <SectionBlock id="solution" label="the solution" className="pb-10">
                <h2 className="text-2xl sm:text-4xl pb-3 font-semibold font-plusJakarta leading-[1.5]">
                    From disconnected tools to connected experiences
                </h2>
                <p className="font-inter font-light leading-7 text-black/80">
                    EduLearn brings essential academic activities into a connected digital experience, making it easier for students to learn, teachers to manage their classrooms, and institutions to oversee academic operations. Rather than forcing everyone into the same workflow, the platform provides role-specific experiences built around shared foundations.
                </p>
                <div className="grid grid-cols-1 gap-8 sm:gap-12 pt-4">
                    {[
                        { heading:"01 — The student experience", text: "The student dashboard brings together upcoming assessments, course progress, calendar events, notices and live classes. Instead of moving between different applications, students can access their classes, review learning materials, complete assessments and communicate with teachers from one environment." },
                        { heading:"02 — The teacher experience", text: "While students primarily consume and submit learning materials, teachers need to organise and manage them. The teacher dashboard provides an overview of classes, student activity, assessments and upcoming events. Teachers can create assignments, review submissions, manage class materials and communicate with students within the same platform." },
                        { heading:"03 — The institution experience", text: "The institution dashboard introduces administrative capabilities for managing the people, programmes and activities that make up an educational organisation. Administrators can view and manage student and teacher records, organise departments and courses, review assessments and publish notices." },
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col gap-2">
                            <h3 className="font-semibold font-plusJakarta">{item.heading}</h3>
                            <p className="text-[16px] font-inter font-light leading-[1.8] text-black/80">{item.text}</p>
                        </div>
                    ))}
                </div>
            </SectionBlock>
            <div className="px-5 sm:px-[6%]">
                <img src="https://res.cloudinary.com/haneefah/image/upload/v1792438388/Case%20Studies/design1_mywazx.png" alt="Design" className="w-full pb-3" />
                <img src="https://res.cloudinary.com/haneefah/image/upload/v1792439771/Case%20Studies/design2_pwjvop.png" alt="Design" className="w-full pb-3" />
            </div>

            {/* highlight */}
            <SectionBlock id="highlight" label="highlight" className="pb-10">
                <h2 className="text-2xl sm:text-4xl pb-3 font-semibold font-plusJakarta leading-[1.5]">
                    Different roles, connected workflows.
                </h2>
                <p className="font-inter font-light leading-7 text-black/80">
                    One of the most interesting challenges in EduLearn was designing features that appeared across multiple user experiences.
                </p>
                <p className="font-inter font-light leading-7 text-black/80">
                    Assessments are a good example. A teacher creates an assessment and assigns it to a class,  student sees the assessment, completes the work and submits it. The teacher then needs to access the submission for review and send results to the insitution.
                </p>
                <p className="font-inter font-light leading-7 text-black/80">
                    Although each person interacts with a different interface, their actions belong to the same workflow. Designing around these relationships helped me think beyond individual screens and consider how a multi-role product should function as a connected system.
                </p>
                <p className="font-inter font-bold leading-7 text-black/80">
                    The goal wasn't to make every dashboard look the same. It was to make the underlying experience feel consistent.
                </p>
            </SectionBlock>
            <div className="px-5 sm:px-[6%] pb-16 sm:pb-24">
                <img src="https://res.cloudinary.com/haneefah/image/upload/v1792439457/Case%20Studies/EduLearn_Assessment_Workflow_ae8ll1.png" alt="edulearn style" className="w-full" />
            </div>

            {/* reflections */}
            <SectionBlock id="reflections" label="reflections + takeaways" className="pb-40">
                <h2 className="text-2xl sm:text-4xl font-semibold font-plusJakarta leading-[1.5]">
                    What EduLearn taught me about designing complex products
                </h2>
                <p className="font-inter font-light leading-7 text-black/80">
                    EduLearn was an early project that challenged me to think beyond individual screens and consider how different people interact with the same system. The most valuable part of the experience was learning to balance shared functionality with different user responsibilities.
                </p>
                <p className="font-inter font-light leading-7 text-black/80">
                    Looking back, I would start with a much smaller scope. Within four weeks, I explored dashboards, assessments, classes, communication, file management, administration and several other areas of the platform. If I was to do this today, I would prioritise one essential end-to-end workflow, such as creating, submitting and reviewing an assessment, before expanding into the wider ecosystem.
                </p>
                <p className="font-inter font-light leading-7 text-black/80 pb-8">
                Overall, EduLearn helped establish an idea that has continued to shape my approach to product design: <br/>
                <span className="font-bold">A connected product doesn't need to give everyone the same interface. It needs to give each person the right experience within the same system.</span>
                </p>
            </SectionBlock>


            </section>

        <section>
            <MoreProjects />
        </section>
    </main>
    );
}