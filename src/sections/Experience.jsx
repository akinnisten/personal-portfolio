import { ScrollReveal } from "../components/ScrollReveal";

const experiences = [
    {
        title: "Business Intelligence & Innovation Intern",
        company: "Found Search Marketing",
        date: "May 2026 - Aug. 2026",
        description:
            "",
        bullets: [
            "Built and implemented AI-driven workflow solutions, automating repetive manual tasks and supporting productivity.",
            "Designed 5 different projects, including a query optimizer, pixel audit checker, Slack-Instantly bot, and more!",
        ],
        tags: ["Data Analytics", "AI Workflows", "Python"],
    },
    {
        title: "Roblox Game Developer",
        company: "Independent Project",
        date: "2020 — 2025",
        description:
            "Developed a Roblox game that reached over 70 million plays and was featured by YouTubers with over 10M subscribers. Managed community feedback and iterative design updates.",
        bullets: [
            "Developed a Roblox game that reached over 70 million plays and was featured by creators with over 10M subscribers.",
            "Managed community feedback, content updates, and iterative design changes across a long-running live project.",
            "Built gameplay systems and supporting assets using Lua and Blender while balancing performance and player experience.",
        ],
        tags: ["Lua", "Blender", "Game Design"],
    },
];

const ExperienceCard = ({ exp }) => (
    <div className="glass rounded-lg border border-white/10 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
        <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                    <h3 className="text-xl font-bold text-primary">
                        {exp.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        {exp.company}
                    </p>
                </div>

                <span className="w-fit shrink-0 whitespace-nowrap rounded-md bg-white/5 px-3 py-1 text-xs text-muted-foreground border border-white/10">
                    {exp.date}
                </span>
            </div>

            <ul className="space-y-3 text-base leading-relaxed text-muted-foreground">
                {(exp.bullets || [exp.description]).map((item, itemIndex) => (
                    <li key={itemIndex} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-1">
                {exp.tags.map((tag, tagIndex) => (
                    <span
                        key={`${tag}-${tagIndex}`}
                        className="rounded-md bg-white/5 border border-white/10 px-3 py-1 text-xs text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </div>
);

export const Experience = () => {
    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <ScrollReveal>
                    <div className="flex items-center gap-4 mb-12">
                        <span className="section-kicker">03.</span>
                        <h2 className="text-3xl font-bold">EXPERIENCE</h2>
                        <div className="flex-1 h-px bg-white/10" />
                    </div>
                </ScrollReveal>

                <div className="relative">
                    <div className="absolute left-1/2 top-0 bottom-0 hidden md:block w-px -translate-x-1/2 bg-white/10" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => {
                            const isLeft = index % 2 === 0;

                            return (
                                <ScrollReveal key={`${exp.title}-${index}`}>
                                    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
                                        <div className="absolute left-1/2 top-8 hidden md:flex -translate-x-1/2 items-center justify-center z-20">
                                            <div className="absolute h-7 w-7 rounded-full bg-primary/25 blur-md" />
                                            <div className="h-3.5 w-3.5 rounded-full bg-primary border-[3px] border-background shadow-[0_0_18px_var(--color-primary)]" />
                                        </div>

                                        <div className={isLeft ? "md:pr-10" : "md:pr-10"}>
                                            {isLeft && (
                                                <ExperienceCard exp={exp} />
                                            )}
                                        </div>

                                        <div className={!isLeft ? "md:pl-10" : "md:pl-10"}>
                                            {!isLeft && (
                                                <ExperienceCard exp={exp} />
                                            )}
                                        </div>
                                    </div>
                                </ScrollReveal>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
