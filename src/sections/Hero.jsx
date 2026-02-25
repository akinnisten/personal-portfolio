import { Button } from "@/components/Button";
import { ArrowRight, ChevronDown, LucideLinkedin, LucideGithub, Download } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
    "React",
    "Java",
    "C", 
    "Git",
    "JavaScript",
    "Tailwind CSS",
    "Lua",
    "Github",
    "Flutter",
    "Firebase",
    "Eclipse",
    "IntelliJ",
    "UNIX",
    "Blender",
    "VSCode",
];

export const Hero = () => {
    return (

    <section className="relative min-h-screen flex items-center overflow-hidden">

        <div className="absolute inset-0">
            <img 
                src="background-cover.png" 
                alt="Hero Image" 
                className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />

        </div>

        { /* Purple Dots Dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, i) => (
                <div 
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full opacity-60" 
                    style={{
                        backgroundColor: "#DDB8FF",
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `slow-drift ${
                            15 + Math.random() * 20
                        }s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 5}s`
                    }}
                />
            ))}
        </div>

        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Text Content */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            Computer Science Student • Machine Learning 
                        </span>
                    </div>

                    { /* Headline */}
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                            <span className="text-primary glow-text"> Driven</span> 
                            <br/> <span className="font-bold text-white">by the challenge</span>
                            <br />
                            of <span className="italic"> mastering </span> 
                            <br />
                            <span className="font-bold text-white">
                                Machine Learning.
                            </span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                            Hello, my name is Aidan Kinnisten, a freshman studying Computer Science at Purdue University. I'm passionate about Machine Learning, and have been immersed in technology since the age of five.
                        </p>
                    </div>
                    { /* CTAS */}
                    <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                        <div onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior : 'smooth'})}>
                        <Button size="lg" className="cursor-pointer">
                            Contact Me <ArrowRight className="w-5 h-5" /> 
                        </Button>
                        </div>
                        <a href="/aidan_kinnisten_resume.pdf" download>
                        <AnimatedBorderButton> 
                            Download Resume
                            <Download className="w-5 h-5"/>
                        </AnimatedBorderButton>
                        </a>
                    </div>

                    { /* Social Links */ }
                    <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                        <span className="text-sm text-muted-foreground"> Follow: </span>
                        {[
                            { icon: LucideLinkedin, href: "https://www.linkedin.com/in/aidan-kinnisten-773022385/" },
                            { icon: LucideGithub, href: "https://github.com/akinnisten" },
                        ].map((social, idx) => (
                            <a 
                            key={idx}
                            href={social.href}
                            target="_blank"
                            rel="nooopener noreferrer"
                            className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"                            
                            >    
                                {<social.icon className="w-5 h-5"/>}
                            </a>
                        ))}
                    </div>
                </div>
                {/* Right Column - Profile Image */}
                <div className="relative animate-fade-in animation-delay-300">
                    { /*Profile Image */}
                    <div className="relative max-w-md mx-auto">
                        <div
                            className="absolute inset-0
                        rounded-3xl bg-gradient-to-br
                        from-primary/30 via-transparent
                        to-primary/10 blur-2xl animate-pulse"
                        />
                        <div className="relative glass rounded-3xl p-2 glow-border">
                            <img 
                                src="/akinn.jpg" 
                                alt="Aidan Kinnisten" 
                                className="w-full-aspect[4/5] object-cover rounded-2xl"
                            />
                            {/* Floating Badge */}
                            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                    <span className="text-sm font-medium">
                                        Available for work
                                    </span>
                                </div>
                            </div>
                            {/* Stats Badge */}
                            <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                                <div className="text-2xl font-bold text-primary">Aidan Kinnisten</div>
                                <div className="text-sm text-muted-foreground">CS Student at Purdue University</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Skills Section */}
            <div className="mt-10 animate-fade-in animation-delay-600">
                <div className="relative overflow-hidden">
                    <div className="flex animate-marquee">
                       {[...skills, ...skills].map((skill, idx) => (
                            <div key={idx} className="flex-shrink-0 px-8 py-0">
                                <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                                    {skill}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
            <a
                href="#about"
                className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary"
            >
                <span className="text-xs uppercase tracking-wider"></span>
                <ChevronDown className="w-6 h-6 animate-bounce" />
            </a>
        </div>
    </section>
 
    );
};