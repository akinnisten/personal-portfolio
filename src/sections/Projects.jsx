import { ArrowUpRight, Info, ExternalLink } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { ScrollReveal } from "../components/ScrollReveal";
import { useState } from "react";
import { createPortal } from "react-dom";

const projects = [
    {
        title: "Schedule Generator App",
        description: "Worked with a mentor at Purdue to make an application that generates times that work within someone's schedule.",
        image: "/launchpad-project-demo.png",
        tags: ["C++", "Dart", "Flutter", "Firebase"],
        link: "https://github.com/akinnisten/Schedule-Generator",
        linkLabel: "View on GitHub",
    },
    {
        title: "Movie Theater Reservations",
        description: "Designed a movie theater reservation service that allowed people to reserve available seats from a variety of movies.",
        image: "/movie-theater-demo.png",
        tags: ["Java", "UI", "Object-Oriented"],
        link: "https://youtu.be/VkH4oKE1S_I",
        linkLabel: "Watch Demo",
    },
    {
        title: "My Portfolio Website",
        description: "Created my own portfolio website that allows for people to learn more about myself and aspirations, and having additional ways of contact.",
        image: "/website-demo.png",
        tags: ["Tailwind CSS", "JavaScript", "React"],
        link: "https://github.com/akinnisten/personal-portfolio/tree/main",
        linkLabel: "View on GitHub",
    },
    {
        title: "Networking Project",
        description: "Created a fictional company with a group of five, NetLink, that incorporated topologies, documentation, pricing.",
        image: "/Picture1.png",
        tags: ["PuTTy", "Collaboration", "TCP/IP Protocols", "VMWare"],
        link: "https://docs.google.com/document/d/1H8KvXB02C2DRoeBA4mo48ivQSoQQ25Om/preview",
        linkLabel: "View Docs",
        objectFit: "contain",
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
    const [selected, setSelected] = useState(0);

    const project = projects[selected];

    return (
        <section id="projects" className="py-12 relative overflow-hidden">
            {/* Background Dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {DOT_POSITIONS.map((dot, i) => (
                    <div
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full opacity-40"
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

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header - Removed uppercase to stay consistent */}
                <ScrollReveal>
                    <div className="flex items-center gap-4 mb-10">
                        <span className="text-primary text-sm font-mono">02.</span>
                        <h2 className="text-2xl font-bold">PROJECTS</h2>
                        <div className="flex-1 h-[1px] bg-white/10" />
                    </div>
                </ScrollReveal>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-[1fr_300px] gap-6 items-start">
                    
                    {/* Featured Project */}
                    <ScrollReveal>
                        <div className="glass rounded-xl overflow-hidden border border-white/5 flex flex-col md:flex-row h-full md:h-[380px]">
                            <div className="relative w-full md:w-1/2 bg-surface/30 overflow-hidden shrink-0 border-b md:border-b-0 md:border-r border-white/5 p-6 flex items-center justify-center">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="max-w-full max-h-full object-contain transition-transform duration-700 hover:scale-105"
                                />
                            </div>

                            <div className="p-6 flex flex-col justify-between flex-1">
                                <div>
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-xl font-bold">{project.title}</h3>
                                        <a 
                                            href={project.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    </div>
                                    {/* Switched to text-base to match your About section's description size */}
                                    <p className="text-base text-muted-foreground leading-relaxed mb-4">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="space-y-5">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, idx) => (
                                            <span key={idx} className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-muted-foreground">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <a 
                                        href={project.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                                    >
                                        {project.linkLabel} <ArrowUpRight className="w-3 h-3" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Sidebar Project Switcher */}
                    <div className="flex flex-col gap-2">
                        {projects.map((p, idx) => (
                            <button
                                key={idx}
                                onClick={() => setSelected(idx)}
                                className={`group text-left p-3 rounded-lg border transition-all duration-200 cursor-pointer ${
                                    selected === idx 
                                    ? "bg-white/10 border-primary/40" 
                                    : "border-transparent hover:bg-white/5"
                                }`}
                            >
                                {/* Removed font-bold for a cleaner, consistent look */}
                                <h4 className={`text-sm transition-colors ${selected === idx ? "text-primary font-medium" : "text-white/60"}`}>
                                    {p.title}
                                </h4>
                                <p className="text-xs text-muted-foreground mt-0.5">
                                    {p.tags.slice(0, 2).join(" • ")}
                                </p>
                            </button>
                        ))}
                        <button 
                            onClick={() => setShowModal(true)}
                            className="mt-2 w-full py-2.5 rounded-lg border border-primary/20 hover:bg-primary/10 text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                        >
                            View All Projects <ArrowUpRight className="w-3 h-3" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal Logic */}
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
                            <div className="mb-4 flex justify-center">
                                <Info className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Coming Soon</h3>
                            <p className="text-muted-foreground">
                                More projects are on the way. Check back later!
                            </p>
                        </div>
                    </div>,
                    document.body
                )}
        </section>
    );
};