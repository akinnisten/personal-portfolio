import { ArrowDown, ChevronDown, LucideLinkedin, LucideGithub } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { useState, useEffect, useMemo } from "react";

const roles = ["Computer Science Student", "Full Stack Developer",
               "Tech Enthuisast", "Team Collaborator", "Passionate Learner"
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

    const dots = useMemo(() =>
        [...Array(30)].map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            duration: `${15 + Math.random() * 20}s`,
            delay: `${Math.random() * 5}s`,
        })),
    []);

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
            </div>

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

            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10 max-w-4xl">
                <div className="flex flex-col text-left space-y-6">
                    <div className="space-y-4">
                        <p className="text-sm uppercase tracking-widest text-muted-foreground animate-fade-in animation-delay-1600">
                            Hello, my name is
                        </p>
                        <h1 className="text-6xl lg:text-7xl font-bold text-foreground leading-tight animate-fade-in animation-delay-2400">
                            Aidan Kinnisten
                        </h1>
                        <h2 className="text-3xl font-semibold text-primary min-h-[1.2em] animate-fade-in animation-delay-2400">
                            {typedRole}<span className="cursor">|</span>
                        </h2>
                        <p className="text-base text-muted-foreground max-w-xl leading-relaxed animate-fade-in animation-delay-3000">
                            I'm currently a freshman at Purdue University. I'm passionate about Machine Learning, and have been immersed in technology since the age of five. Check out what I'm about below.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-6 animate-fade-in animation-delay-3500">
                        <a
                            href="https://www.linkedin.com/in/aidan-kinnisten-773022385/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                        >
                            <LucideLinkedin className="w-4 h-4" />
                            LinkedIn
                        </a>
                        <span className="text-border">|</span>
                        
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
                                Explore my work <ArrowDown className="w-5 h-5" />
                            </AnimatedBorderButton>
                        </div>
                    </div>
                </div>

                {/* Skills Marquee */}
                <div className="mt-16 animate-fade-in animation-delay-3800">
                    <div className="relative overflow-hidden">
                        <div className="flex animate-marquee">
                            {[...skills, ...skills].map((skill, idx) => (
                                <div key={idx} className="flex-shrink-0 px-8">
                                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
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