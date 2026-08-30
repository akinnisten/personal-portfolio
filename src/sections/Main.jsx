import { ArrowDown, ChevronDown, LucideLinkedin, LucideGithub } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { useState, useEffect } from "react";

const roles = ["Computer Science Student", "Full Stack Developer",
               "Tech Enthusiast", "Team Collaborator" 
];

const skills = [
    "React", "Java", "C", "Git", "JavaScript", "Tailwind CSS",
    "Lua", "Github", "Flutter", "Firebase", "Eclipse",
    "IntelliJ", "UNIX", "Blender", "VSCode",
];

const useTypewriter = (words, startDelay = 0) => {
    const [display, setDisplay] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [typing, setTyping] = useState(false);
    const [pausing, setPausing] = useState(false);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => {
            setStarted(true);
            setTyping(true);
        }, startDelay);
        return () => clearTimeout(t);
    }, [startDelay]);

    useEffect(() => {
        if (!started) return;
        const current = words[wordIndex];
        let timeout;

        if (pausing) {
            timeout = setTimeout(() => {
                setPausing(false);
                setTyping(false);
            }, 1800);
        } else if (!typing) {
            if (display.length > 0) {
                timeout = setTimeout(() => setDisplay(display.slice(0, -1)), 40);
            } else {
                setWordIndex((prev) => (prev + 1) % words.length);
                setTyping(true);
            }
        } else {
            if (display.length < current.length) {
                timeout = setTimeout(() => setDisplay(current.slice(0, display.length + 1)), 80);
            } else {
                setPausing(true);
            }
        }

        return () => clearTimeout(timeout);
    }, [display, typing, wordIndex, pausing, started, words]);

    return display;
};

export const Main = () => {
    const typedRole = useTypewriter(roles, 2400);

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/20 to-background/10" />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background/20" />
            </div>

            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10 max-w-5xl">
                <div className="flex flex-col text-left space-y-7">
                    <div className="space-y-4">
                        <p className="section-kicker animate-fade-in animation-delay-1600">
                            Hello, my name is
                        </p>
                        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-foreground leading-[0.95] animate-intro-pop animation-delay-2400">
                            Aidan <span className="sketch-underline">Kinnisten</span>
                        </h1>
                        <h2 className="text-2xl sm:text-3xl font-semibold text-secondary-foreground min-h-[1.2em] animate-fade-in animation-delay-2400">
                            {typedRole}<span className="cursor">|</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed animate-fade-in animation-delay-3000">
                            I'm a current student at Purdue University. Since the age of five, I've been immersed into the world of technology. I love to build, learn, and explore.

                        </p>
                        <p className="w-fit rounded-lg border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-muted-foreground animate-fade-in animation-delay-3200">
                            I recently started my sophomore year at Purdue!
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-3 animate-fade-in animation-delay-3500">
                        <a
                            href="https://www.linkedin.com/in/aidan-kinnisten-773022385/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                        >
                            <LucideLinkedin className="w-4 h-4" />
                            LinkedIn
                        </a>
                        <span className="text-border">/</span>
                        
                        <a
                            href="https://github.com/akinnisten"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                        >
                            <LucideGithub className="w-4 h-4" />
                            GitHub
                        </a>
                    </div>

                    {/* CTA */}
                    <div className="animate-fade-in animation-delay-3500">
                        <div onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                            <AnimatedBorderButton size="md" className="cursor-pointer">
                                Continue Reading <ArrowDown className="w-5 h-5" />
                            </AnimatedBorderButton>
                        </div>
                    </div>
                </div>

                {/* Skills Marquee */}
                <div className="mt-16 animate-fade-in animation-delay-3800">
                    <div className="relative overflow-hidden border-y border-border/60 py-4">
                        <div className="flex animate-marquee">
                            {[...skills, ...skills].map((skill, idx) => (
                                <div key={idx} className="flex-shrink-0 px-7">
                                    <span className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground/70 hover:text-secondary-foreground transition-colors">
                                        {skill}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-3800">
                <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary">
                    <ChevronDown className="w-6 h-6 animate-bounce" />
                </a>
            </div>
        </section>
    );
};
