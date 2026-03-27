import { useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";

const projects = [
    {
        title: "Schedule Generator App",
        date: "2025",
        description:
            "Worked with a mentor at Purdue to make an application that generates times that work within someone's schedule.",
        image: "/launchpad-project-demo.png",
        tags: ["C++", "Dart", "Flutter", "Firebase"],
        link: "https://github.com/akinnisten/Schedule-Generator",
        linkLabel: "View on GitHub",
    },
    {
        title: "Movie Theater Reservations",
        date: "2024",
        description:
            "Designed a movie theater reservation service that allowed people to reserve available seats from a variety of movies.",
        image: "/movie-theater-demo.png",
        tags: ["Java", "UI", "Object-Oriented"],
        link: "https://youtu.be/VkH4oKE1S_I",
        linkLabel: "Watch Demo",
    },
    {
        title: "My Portfolio Website",
        date: "2025",
        description:
            "Created my own portfolio website that allows for people to learn more about myself and aspirations, and provides additional ways of contact.",
        image: "/website-demo.png",
        tags: ["Tailwind CSS", "JavaScript", "React"],
        link: "https://github.com/akinnisten/personal-portfolio/tree/main",
        linkLabel: "View on GitHub",
    },
    {
        title: "Networking Project",
        date: "2024",
        description:
            "Created a fictional company with a group of five, NetLink, that incorporated topologies, documentation, and pricing.",
        image: "/Picture1.png",
        tags: ["PuTTy", "Collaboration", "TCP/IP Protocols", "VMWare"],
        link: "https://docs.google.com/document/d/1H8KvXB02C2DRoeBA4mo48ivQSoQQ25Om/preview",
        linkLabel: "View Docs",
        objectFit: "contain",
    },
];

export const Projects = () => {
    const [selected, setSelected] = useState(0);
    const project = projects[selected];

    if (!project) return null;

    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <ScrollReveal>
                    <div className="flex items-center gap-4 mb-12">
                        <span className="text-primary text-sm font-mono">02.</span>
                        <h2 className="text-3xl font-bold">PROJECTS</h2>
                        <div className="flex-1 h-px bg-white/10" />
                    </div>
                </ScrollReveal>

                <div className="grid lg:grid-cols-[1fr_320px] gap-8 items-start">
                    <ScrollReveal>
                        <div className="glass rounded-2xl border border-white/10 overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                            <div className="grid md:grid-cols-[1.05fr_1fr] min-h-[360px]">
                                <div className="relative bg-white/[0.02] border-b md:border-b-0 md:border-r border-white/10 flex items-center justify-center p-6">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="max-w-full max-h-[240px] w-full h-auto transition-transform duration-500 hover:scale-[1.02]"
                                        style={{ objectFit: project.objectFit || "cover" }}
                                    />
                                </div>

                                <div className="p-8 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-start justify-between gap-4 mb-4">
                                            <div>
                                                <h3 className="text-2xl font-bold leading-tight">
                                                    {project.title}
                                                </h3>
                                                <p className="text-sm mt-1 text-secondary-foreground">
                                                    {project.date}
                                                </p>
                                            </div>

                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-muted-foreground hover:text-primary transition-colors"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        </div>

                                        <p className="text-base text-muted-foreground leading-relaxed mb-6">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tags.map((tag, idx) => (
                                                <span
                                                    key={`${tag}-${idx}`}
                                                    className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                                    >
                                        {project.linkLabel}
                                        <ArrowUpRight className="w-3 h-3" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    
                    <div className="flex flex-col gap-3">
                        {projects.map((p, idx) => (
                            <ScrollReveal>
                            <button
                                key={idx}
                                onClick={() => setSelected(idx)}
                                className={`w-full text-left rounded-2xl border px-5 py-4 transition-all duration-200 cursor-pointer ${
                                    selected === idx
                                        ? "border-primary/40 bg-white/10 shadow-md shadow-primary/10"
                                        : "border-white/10 bg-transparent hover:bg-white/5 hover:border-white/20"
                                }`}
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <p
                                            className="text-md font-medium transition-colors text-secondary-foreground"
                                        >
                                            {p.title}
                                        </p>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            {p.date} • {p.tags.slice(0, 2).join(" • ")}
                                        </p>
                                    </div>
                                </div>
                            </button>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};