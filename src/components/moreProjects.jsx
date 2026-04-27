import { useLocation, Link } from 'react-router-dom';
import projects from '../data/projects'; // adjust path as needed

export default function MoreProjects() {
    const { pathname } = useLocation();

    // Find current project index
    const currentIndex = projects.findIndex(p => p.route === pathname);

    // Get prev and next, wrapping around
    const prev = projects[(currentIndex - 1 + projects.length) % projects.length];
    const next = projects[(currentIndex + 1) % projects.length];

    const displayed = [prev, next].filter(Boolean);

    return (
        <section className="px-[6%] py-40">
            <h2 className="text-5xl font-bold font-anton mb-8">More Projects?</h2>
            <div className="grid grid-cols-2 gap-6">
                {displayed.map(project => (
                <Link key={project.id} to={project.route} className="group block">
                    <div className="overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    </div>
                    <div className="mt-4">
                    <p className="text-xl font-light font-inter tracking-wide uppercase">{project.title}</p>
                    </div>
                </Link>
                ))}
            </div>
        </section>
    );
}