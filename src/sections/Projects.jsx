import { LucideGithub, ArrowUpRight, Fullscreen, Info, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { ScrollReveal } from "../components/ScrollReveal";
import { useState } from "react";
import { createPortal } from "react-dom";

const projects = [
    {
        title: "Schedule Generator App",
        description:
            "Worked with a mentor at Purdue to make an application that generates times that work within someone's schedule.",
        image: "/launchpad-project-demo.png",
        tags: ["C++", "Dart", "Flutter", "Firebase"],
        link: "https://github.com/akinnisten/Schedule-Generator",
    },
    {
        title: "Movie Theater Reservations",
        description:
            "Designed a movie theater reservation service that allowed people to reserve available seats from a variety of movies.",
        image: "/movie-theater-demo.png",
        tags: ["Java", "UI", "Object-Oriented"],
        link: "https://youtu.be/VkH4oKE1S_I",
    },
    {
        title: "My Portfolio Website",
        description:
            "Created my own portfolio website that allows for people to learn more about myself and aspirations, and having additional ways of contact.",
        image: "/website-demo.png",
        tags: ["Tailwind CSS", "JavaScript", "VSCode"],
        link: "https://github.com/akinnisten/personal-portfolio/tree/main",
    },
    {
        title: "Networking Project",
        description:
            "Created a fictional company with a group of five, NetLink, that incorporated topologies, documentation, pricing.",
        image: "/Picture1.png",
        objectFit: "contain",
        imageHeight: "h-40",
        tags: ["PuTTy", "Collaboration", "TCP/IP Protocols", "VMWare"],
        link: "https://docs.google.com/document/d/1H8KvXB02C2DRoeBA4mo48ivQSoQQ25Om/preview",
    },
];

const DOT_POSITIONS = [...Array(30)].map((_, i) => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: `${15 + Math.random() * 20}s`,
    delay: `${Math.random() * 5}s`,
}));

export const Projects = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentProject, setCurrentProject] = useState(0);

    const nextProject = () => {
        setCurrentProject((prev) => (prev + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    };

    const project = projects[currentProject];

    return (
        <section id="projects" className="py-20 relative overflow-hidden">
            {/* Purple Dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {DOT_POSITIONS.map((dot, i) => (
                <div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                    style={{
                        backgroundColor: "#DDB8FF",
                        left: dot.left,
                        top: dot.top,
                        animation: `slow-drift ${dot.duration} ease-in-out infinite`,
                        animationDelay: dot.delay,
                    }}
                />
            ))}
            </div>

            {/* Background glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <ScrollReveal>
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                            Featured Work
                        </span>
                    </ScrollReveal>

                    <h2 className="text-4xl md:text-4xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-foreground">
                        <ScrollReveal>
                            Hands-on Projects
                        </ScrollReveal>
                    </h2>

                    <ScrollReveal>
                        <p className="text-muted-foreground animate-fade-in animation-delay-200">
                            A selection of recent and notable work.
                        </p>
                    </ScrollReveal>
                </div>

                {/* Carousel */}
                <div className="max-w-2xl mx-auto">
                    <div className="flex items-center gap-4 md:gap-6">
                        {/* Left Arrow */}
                        <button
                            onClick={prevProject}
                            className="glass w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center hover:text-primary transition-all duration-300 cursor-pointer shrink-0"
                            aria-label="Previous Project"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        {/* Project Card */}
                        <div className="flex-1">
                            <ScrollReveal className="duration-1500">
                                <div className="group glass rounded-2xl overflow-hidden animate-fade-in">
                                    {/* Image */}
                                    <div className={'relative overflow-hidden ${project.imageHeight || "h-64"} bg-surface'}>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className={`w-full h-full object-contain transition-transform duration-900 group-hover:scale-105"}`}
                                            style={{ objectFit: project.objectFit || "cover" }}                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                                        {/* Overlay Button */}
                                        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <a
                                                href={project.link}
                                                className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Fullscreen className="w-5 h-5" />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 md:p-8 space-y-4 min-h-[180px]">
                                        <div className="flex items-start justify-between">
                                            <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                                                {project.title}
                                            </h3>
                                            <ArrowUpRight
                                                className="w-5 h-5 text-muted-foreground
                                                group-hover:text-primary group-hover:translate-x-1
                                                group-hover:-translate-y-1 transition-all"
                                            />
                                        </div>

                                        <p className="text-muted-foreground text-sm md:text-base break-words">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag, tagIdx) => (
                                                <span
                                                    key={tagIdx}
                                                    className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Right Arrow */}
                        <button
                            onClick={nextProject}
                            className="glass w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center hover:text-primary transition-all duration-300 cursor-pointer shrink-0"
                            aria-label="Next Project"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Dots */}
                    <div className="flex items-center justify-center gap-3 mt-8">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentProject(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                                    currentProject === index
                                        ? "bg-primary scale-125"
                                        : "bg-muted-foreground/40 hover:bg-muted-foreground/70"
                                }`}
                                aria-label={`Go to project ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                <div className="text-center animate-fade-in animation-delay-500 mt-10">
                    <div className="inline-block" onClick={() => setShowModal(true)}>
                        <AnimatedBorderButton>
                            View All Projects
                            <ArrowUpRight className="w-3 h-5" />
                        </AnimatedBorderButton>
                    </div>
                </div>

                {/* Coming Soon Modal */}
                {showModal &&
                    createPortal(
                        <div
                            className="fixed top-0 left-0 w-screen h-screen bg-background/90 backdrop-blur-md z-[100] flex items-center justify-center"
                            onClick={() => setShowModal(false)}
                        >
                            <div
                                className="glass rounded-2xl p-8 max-w-sm mx-4 text-center border border-primary/30 glow-border"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="text-4xl mb-4 flex justify-center">
                                    <Info />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Coming Soon</h3>
                                <p className="text-muted-foreground">
                                    More projects are on the way. Check back later!
                                </p>
                                <p className="text-xs text-muted-foreground/50 mt-4">
                                    Click anywhere to close
                                </p>
                            </div>
                        </div>,
                        document.body
                    )}
            </div>
        </section>
    );
};