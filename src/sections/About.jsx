import { Code2, Lightbulb, MonitorCog, Users } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";
import { useMemo } from "react";

const highlights = [
    {
        icon: Code2,
        title: "Full Stack Work",
        description: "Understanding the integration between front and back-end systems, building scalable and responsive applications.",
    },
    {
        icon: MonitorCog,
        title: "Systems Programming",
        description: "Experienced with UNIX-based systems programming in C, utilizing debugging tools, and memory management.",
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "Demonstrate high work-ethic in team environments, knowing the fundamentals of GitHub, maintaining clean code.",
    },
    {
        icon: Lightbulb,
        title: "Self-Driven",
        description: "Continuously expanding my skills and frameworks by building projects, and applying concepts beyond the classroom.",
    },
];

export const About = () => {
    const dots = useMemo(() =>
        [...Array(20)].map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            duration: `${15 + Math.random() * 20}s`,
            delay: `${Math.random() * 5}s`,
        })),
    []);

    return (
        <section id="about" className="py-32 relative overflow-hidden">

            {/* Purple Dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {dots.map((dot) => (
                    <div
                        key={dot.id}
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

            <div className="container mx-auto px-6 relative z-10">

                {/* Section Header */}
                <ScrollReveal>
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-primary text-md font-mono">01.</span>
                        <h2 className="text-3xl font-bold">ABOUT ME</h2>
                        <div className="flex-1 h-px bg-border" />
                    </div>
                </ScrollReveal>

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column - 4 Panels */}
                    <div className="grid sm:grid-cols-2 gap-4">

                        {/* Gray paragraph text below panels */}
                        <ScrollReveal className="sm:col-span-2">
                            <div className="mt-2">
                                <p className="text-base text-muted-foreground leading-relaxed">
                                    Driven computer science major with an interest in software engineering,
                                    machine learning, and cyber security. Actively looking for an internship
                                    near Columbus, OH or remote. I aim to bring enthusiasm and adaptability to any team.
                                </p>
                            </div>
                        </ScrollReveal>
                        
                        {highlights.map((item, idx) => (
                            <ScrollReveal key={idx}>
                                <div
                                    className="glass p-5 rounded-2xl"
                                    style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                                >
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3">
                                        <item.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <h3 className="text-md font-semibold mb-1">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                </div>
                            </ScrollReveal>
                        ))}

                    </div>

                    {/* Right Column - Photo */}
                    <ScrollReveal>
                        <div className="relative max-w-md mx-auto">
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
                            <div className="relative glass rounded-3xl p-2 glow-border">
                                <img
                                    src="/akinn.jpg"
                                    alt="Aidan Kinnisten"
                                    className="w-full aspect-[4.4/5] object-cover rounded-2xl"
                                />
                                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                        <span className="text-sm font-medium">Available for work</span>
                                    </div>
                                </div>
                                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                                    <div className="text-xl font-bold text-primary">Aidan Kinnisten</div>
                                    <div className="text-sm text-muted-foreground">CS Student at Purdue University</div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};