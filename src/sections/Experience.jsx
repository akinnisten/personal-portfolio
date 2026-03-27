import { ScrollReveal } from "../components/ScrollReveal";

export const Experience = () => {
    return (
        <section id="experience" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                
                {/* Section Header */}
                <ScrollReveal>
                    <div className="flex items-center gap-4 mb-12">
                        <span className="text-primary text-sm font-mono">03.</span>
                        <h2 className="text-2xl font-bold">EXPERIENCES</h2>
                        <div className="flex-1 h-px bg-white/10" />
                    </div>
                </ScrollReveal>

                <div className="relative max-w-4xl">
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 ml-[7px]" />

                    <div className="space-y-12">
                        <ScrollReveal>
                            <div className="relative pl-10">
                                <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />
                                
                                <div className="glass p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors group">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                                                Roblox Game Developer
                                            </h3>
                                            <p className="text-primary text-sm font-medium">Independent Project</p>
                                        </div>
                                        <span className="text-xs font-mono text-muted-foreground bg-white/5 px-3 py-1 rounded-full">
                                            2020 — 2025
                                        </span>
                                    </div>

                                    <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                                        Developed a Roblox game that reached over 70 million plays and was 
                                        featured by YouTubers with over 10M subscribers. Managed community feedback 
                                        and iterative design updates.
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {["Lua", "Blender", "Game Design"].map((tag) => (
                                            <span key={tag} className="px-3 py-1 rounded bg-white/5 text-xs text-muted-foreground border border-white/10">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
};