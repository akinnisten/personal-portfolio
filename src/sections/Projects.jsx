import { LucideGithub, ArrowUpRight, Fullscreen, Info } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { ScrollReveal } from "../components/ScrollReveal";
import { useState } from "react";
import { createPortal } from "react-dom";


const projects = [

    {
        title: "Roblox Game - Bunny's Funeral",
        description: "With over 70,000,000 plays, and YouTubers with over 10M+ subscribers playing, designed a game with a team of seven on the platform 'Roblox'.",
        image: "/bunny-funeral-cover.png",
        tags: ["Lua", "Blender", "Terrain/World Design", "Collaboration"],
        link: "https://www.roblox.com/games/5116739412/Bunnys-Funeral",
    },
    {
        title: "Schedule Generator App",
        description: "Worked with a mentor at Purdue to make an application that generates times that work within someone's schedule.",
        image: "/calendar-app.png",
        tags: ["C++", "Ruby", "Flutter", "Firebase"],
        link: "https://github.com/akinnisten/Schedule-Generator",
    },
    {
        title: "My Portfolio Website",
        description: "Created my own portfolio website that allows for people to learn more about myself and aspirations, and having additional ways of contact.",
        image: "/portfolio.png",
        tags: ["Tailwind CSS", "Javascript", "VSCode"],
        link: "https://github.com/akinnisten/personal-portfolio/tree/main",
    },
    {
        title: "Networking Project",
        description: "Created a fictional company with a group of five, NetLink, that incorporated topologies, documentation, pricing.",
        image: "/Picture1.png",
        objectFit: "contain",
        scale: "scale-60",
        hoverScale: "group-hover:scale-70",
        tags: ["PuTTy", "Collaboration", "TCP/IP Protocols", "VMWare"],
        link: "https://docs.google.com/document/d/1H8KvXB02C2DRoeBA4mo48ivQSoQQ25Om/preview"
    },
];

export const Projects = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            { /* Purple Dots Dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <div
                        className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                        style={{
                            backgroundColor: "#DDB8FF",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${15 + Math.random() * 20
                                }s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    />
                ))}
            </div>

            {/* bg glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <ScrollReveal>
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                            Featured Work
                        </span>
                    </ScrollReveal>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-foreground">
                        <ScrollReveal>
                            Projects that
                            <span className="font-serif italic font-normal text-white">
                                {" "} make an impact.</span>
                        </ScrollReveal>
                    </h2>
                    <ScrollReveal>
                        <p className="text-muted-foreground animate-fade-in animation-delay-200">
                            A selection of recent and notable work.
                        </p>
                    </ScrollReveal>
                </div>
                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <ScrollReveal className="duration-1500">
                            <div
                                key={idx}
                                className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                            >
                                {/* Image */}
                                <div className="relative overflow-hidden aspect-video">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className={`w-full h-full transition-transform duration-900 ${project.hoverScale || "group-hover:scale-110"} ${project.scale || ""}`}
                                        style={{ objectFit: project.objectFit || "cover" }}
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60"
                                    />
                                    {/* overly */}
                                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <a
                                            href={project.link}
                                            className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                        >
                                            <Fullscreen className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                                {/* content */}
                                <div className="p-6 space-y-4">
                                    <div className="flex items-start justify-between">
                                        <h3 className="text-xl font-semibold group-hover:text-primary transition-covers">
                                            {project.title}
                                        </h3>
                                        <ArrowUpRight
                                            className="w-5 h-5 text-muted-foreground
                                        group-hover:text-primary group-hover:translate-x-1
                                        group-hover:-translate-y-1 transition-all"
                                        />
                                    </div>
                                    <p className="text-muted-foreground text-sm break-words">
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
                    ))}
                </div>


                <div className="text-center mt-12 animate-fade-in animation-delay-500">
                    <div className="inline-block" onClick={() => setShowModal(true)}>
                        <AnimatedBorderButton>
                            View All Projects
                            <ArrowUpRight className="w-3 h-5" />
                        </AnimatedBorderButton>
                    </div>
                </div>

                {/* Coming Soon Modal */}
                {showModal && createPortal(
                    <div
                        className="fixed top-0 left-0 w-screen h-screen bg-background/90 backdrop-blur-md z-[100] flex items-center justify-center"
                        onClick={() => setShowModal(false)}
                    >
                        <div
                            className="glass rounded-2xl p-8 max-w-sm mx-4 text-center border border-primary/30 glow-border"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="text-4xl mb-4"><Info/></div>
                            <h3 className="text-2xl font-bold mb-2">Coming Soon</h3>
                            <p className="text-muted-foreground">More projects are on the way. Check back later!</p>
                            <p className="text-xs text-muted-foreground/50 mt-4">Click anywhere to close</p>
                        </div>
                    </div>,
                    document.body
                )}
            </div>
        </section>
    );
};