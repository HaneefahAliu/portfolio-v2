import BackButton from "../components/backButton";
import MoreProjects from "../components/moreProjects";
import QuickLinks from "../components/quickLinks"; 
import CaseStudyHeader from "../components/projectHeader";
import { findings } from "../data/card";

export default function TwikkieDs() {
    return (
        <main className='page-grid'>
            {/* <QuickLinks links={links} triggerId="heading"/> */}

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
        </main>
    )
}