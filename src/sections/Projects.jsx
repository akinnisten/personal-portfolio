import { LucideGithub, ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [

    {
        title: "test link API",
        description: "test link API",
        image: "/background-cover.png",
        tags: ["React", "Java"],
        github: "#",
    },
    {
        title: "Project #2",
        description: "Detailed Description for Project #2",
        image: "/background-cover.png",
        tags: ["React", "Java", "Test"],
        github: "#",
    },
    {
        title: "title - add break lines",
        description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        image: "/background-cover.png",
        tags: ["React", "Java"],
        github: "#",
    },
    {
        title: "Project #4",
        description: "Detailed Description for Project #4",
        image: "/background-cover.png",
        tags: ["React", "Java"],
        github: "#",
    },
];

export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            {/* bg glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"/>
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"/>
            <div className="container mx-auto px-6 relative z=10"> 
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Featured Work
                        </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-foreground">
                        Projects that
                        <span className="font-serif italic font-normal text-white"> 
                            { " " } make an impact.</span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        A selection of recent work.
                    </p>
                </div>
                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div 
                            key={idx} 
                            className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                            style={{ animationDelay: `${(idx + 1) *100}ms`}}
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden aspect-video">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-900 group-hover:scale-110"
                                />
                                <div 
                                    className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60"
                                />
                                {/* overly */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a 
                                    href={project.github} 
                                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                    >
                                       <LucideGithub className="w-5 h-5" /> 
                                    </a>
                                </div>
                            </div>
                            {/* content */}
                            <div className ="p-6 space-y-4">
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
                                <p className="text-muted-foreground text-sm">
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
                    ))}
                </div>

                { /* view all projects */ }
                <div className="text-center mt-12 animate-fade-in animation-delay-500">
                    <AnimatedBorderButton> 
                         View All Projects 
                         <ArrowUpRight className="w-5 h-5"/>
                    </AnimatedBorderButton>
                </div>
            </div>
    </section>
    );
};