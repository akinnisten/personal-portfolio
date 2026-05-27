import { Armchair, ExternalLink } from "lucide-react";
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
        visual: "seat-map",
        tags: ["Java", "UI", "Object-Oriented"],
        link: "https://youtu.be/VkH4oKE1S_I",
        linkLabel: "Watch Demo",
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

const ProjectVisual = ({ project }) => {
    if (project.visual === "seat-map") {
        return (
            <div
                className="w-full rounded-lg border border-primary/30 bg-background/70 p-5 shadow-lg shadow-primary/10"
                role="img"
                aria-label="Movie theater seat map preview"
            >
                <div className="mb-5 h-2 rounded-full bg-gradient-to-r from-transparent via-highlight to-transparent" />
                <div className="grid grid-cols-6 gap-2">
                    {[...Array(24)].map((_, idx) => {
                        const reserved = [2, 7, 12, 17, 21].includes(idx);
                        return (
                            <div
                                key={idx}
                                className={`grid aspect-square place-items-center rounded-md border ${
                                    reserved
                                        ? "border-primary/50 bg-primary/20 text-primary"
                                        : "border-secondary-foreground/30 bg-secondary-foreground/10 text-secondary-foreground"
                                }`}
                            >
                                <Armchair className="h-3.5 w-3.5" />
                            </div>
                        );
                    })}
                </div>
                <div className="mt-5 flex items-center justify-between text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
                    <span>Screen</span>
                    <span>Reserve</span>
                </div>
            </div>
        );
    }

    return (
        <div className="rounded-lg border border-border/80 bg-white/[0.03] p-3">
            <img
                src={project.image}
                alt={project.title}
                className="h-40 w-full rounded-md object-contain"
            />
        </div>
    );
};

export const Projects = () => {
    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <ScrollReveal>
                    <div className="flex items-center gap-4 mb-14">
                        <span className="section-kicker">02.</span>
                        <h2 className="text-3xl font-bold">PROJECTS</h2>
                        <div className="flex-1 h-px bg-white/10" />
                    </div>
                </ScrollReveal>

                <div className="relative pl-8 md:pl-16">
                    <div className="absolute left-2 top-2 bottom-8 w-px bg-border/90 md:left-5" />

                    <div className="space-y-14">
                        {projects.map((project) => (
                            <ScrollReveal key={project.title}>
                                <article className="relative">
                                    <div className="absolute -left-[35px] top-2 grid h-5 w-5 place-items-center rounded-full bg-background ring-2 ring-primary/80 shadow-[0_0_22px_var(--color-primary)] md:-left-[51px]">
                                        <div className="h-2 w-2 rounded-full bg-primary" />
                                    </div>

                                    <div className="grid gap-7 border-b border-border/70 pb-12 md:grid-cols-[minmax(0,1fr)_260px] md:items-start">
                                        <div className="min-w-0">
                                            <div className="mb-3">
                                                <h3 className="text-2xl font-bold leading-tight md:text-3xl">
                                                    {project.title}
                                                </h3>
                                            </div>

                                            <p className="mb-5 text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">
                                                {project.date}
                                            </p>

                                            <p className="max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
                                                {project.description}
                                            </p>

                                            <div className="mt-7 flex flex-wrap gap-2">
                                                {project.tags.map((tag, idx) => (
                                                    <span
                                                        key={`${tag}-${idx}`}
                                                        className="rounded-md border border-primary/15 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                                            >
                                                {project.linkLabel}
                                                <ExternalLink className="w-3.5 h-3.5" />
                                            </a>
                                        </div>

                                        <div className="md:pt-2">
                                            <ProjectVisual project={project} />
                                        </div>
                                    </div>
                                </article>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
