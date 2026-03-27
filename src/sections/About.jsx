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
        <section id="about" className="py-24 relative overflow-hidden">

            {/* dots */}
            <div className="absolute inset-0 pointer-events-none">
                {dots.map((dot) => (
                    <div
                        key={dot.id}
                        className="absolute w-1.5 h-1.5 rounded-full opacity-50"
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

            <div className="container mx-auto px-6 max-w-5xl relative z-10">

                {/* Header */}
                <ScrollReveal>
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-primary text-sm font-mono">01.</span>
                        <h2 className="text-3xl font-bold">ABOUT</h2>
                        <div className="flex-1 h-px bg-white/10" />
                    </div>
                </ScrollReveal>

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Cards */}
                    <div className="grid sm:grid-cols-2 gap-4">

                        <ScrollReveal className="sm:col-span-2">
                            <p className="text-base text-muted-foreground leading-relaxed">
                                I'm currently a CS major, with a minor in Finance @ Purdue University.<br/>
                            </p>
                            <p className="text-base text-muted-foreground leading-relaxed">
                                I'm a driven computer science student focused on machine learning, but also software engineering and a little bit of cybersecurity.
                            </p>
                            <p className="text-base text-muted-foreground leading-relaxed">
                                Outside of academics, I love to workout at the corec, I love to ski during the colder seasons, and I love to travel. 
                            </p>
                        </ScrollReveal>

                        {highlights.map((item, idx) => (
                            <ScrollReveal key={idx}>
                                <div className="glass p-5 rounded-2xl border border-white/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 transition-all">
                                    <item.icon className="w-5 h-5 text-primary mb-3" />
                                    <h3 className="text-md font-semibold">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    {/* Image */}
                    <ScrollReveal>
                        <div className="relative max-w-sm mx-auto">
                            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-3xl" />
                            <div className="relative glass rounded-3xl p-2 border border-white/10">
                                <img
                                    src="/akinn.jpg"
                                    className="rounded-2xl object-cover"
                                />
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};