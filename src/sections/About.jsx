import { Code2, Lightbulb, MonitorCog, Users } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";

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

const dots = [...Array(20)].map((_, i) => ({
    id: i,
    left: `${(i * 37 + 11) % 100}%`,
    top: `${(i * 29 + 17) % 100}%`,
    duration: `${16 + (i % 8) * 2}s`,
    delay: `${(i % 6) * 0.65}s`,
}));

export const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">

            {/* dots */}
            <div className="absolute inset-0 pointer-events-none">
                {dots.map((dot) => (
                    <div
                        key={dot.id}
                        className="absolute w-1.5 h-1.5 rounded-full opacity-35"
                        style={{
                            backgroundColor: dot.id % 3 === 0 ? "var(--color-highlight)" : "var(--color-secondary-foreground)",
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
                        <span className="section-kicker">01.</span>
                        <h2 className="text-3xl font-bold">ABOUT</h2>
                        <div className="flex-1 h-px bg-white/10" />
                    </div>
                </ScrollReveal>

                <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-start">

                    <ScrollReveal className="lg:pt-3">
                        <div className="text-center">
                            <p className="section-kicker mb-5 text-center">Currently</p>
                            <div className="mx-auto max-w-xl space-y-6 text-lg leading-9 text-muted-foreground lg:text-xl lg:leading-10">
                                <p>
                                    I'm a current CS major, focused on machine intelligence. I also have a minor in Finance @ Purdue University. 
                                </p>
                                <p>
                                    I'm a driven computer science student focused on machine learning, but also software engineering and a little bit of cybersecurity.
                                </p>
                                <p>
                                    Outside of academics, I love to workout, ski during the colder seasons, and I love to travel. I also enjoy collecting fragrances.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    <div className="grid sm:grid-cols-2 gap-4">
                        {highlights.map((item, idx) => (
                            <ScrollReveal key={idx}>
                                <div className="glass group h-full rounded-lg border border-white/10 p-5 transition-all hover:-translate-y-1 hover:border-primary/30">
                                    <div className="mb-4 flex items-center gap-3">
                                        <div className="grid h-10 w-10 place-items-center rounded-lg border border-secondary-foreground/25 bg-secondary-foreground/10 text-secondary-foreground transition-colors group-hover:border-primary/40 group-hover:text-primary">
                                            <item.icon className="w-4 h-4" />
                                        </div>
                                        <h3 className="text-md font-semibold">{item.title}</h3>
                                    </div>
                                    <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
