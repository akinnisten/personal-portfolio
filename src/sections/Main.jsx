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

export const Main = () => {
    return (

    <section className="relative min-h-screen flex items-center overflow-hidden">

        <div className="absolute inset-0">
            <img 
                src="background-cover.png" 
                alt="Main Image" 
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
                <div className="space-y-8 items-center flex flex-col text-center">
                    

                    { /* Headline */}
                    <div className="gap-4 animate-fade-in">
                        <div className="animate-fade-in animation-delay-1600 space-y-4">
                                <p className="text-xl text-foreground leading-none">
                                    Hello, I am
                                </p>

                                <h1 className="text-7xl md:text-6xl animate-fade-in animation-delay-2000 lg:text-7xl font-bold text-primary glow-text leading-[0.95] mb-4">
                                    Aidan Kinnisten
                                </h1>

                                <h2 className="text-2xl md:text-3xl font-semibold animate-fade-in animation-delay-2400 text-foreground leading-none">
                                    Computer Science Student
                                </h2>

                            </div>
                        <p className="text-lg text-muted-foreground max-w-lg mx-auto animate-fade-in animation-delay-2800 mt-4">
                            I'm currently a freshman at Purdue University. I'm passionate about Machine Learning, and have been immersed in technology since the age of five. Check out what I'm about below.
                        </p>
                    </div>
                    { /* CTAS */}
                    <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-3500">
                        <div onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior : 'smooth'})}>
                        <Button size="lg" className="cursor-pointer">
                            Contact Me <ArrowRight className="w-5 h-5" /> 
                        </Button>
                        </div>
                        <a href="/aidan_kinnisten_website_resume.pdf" download>
                        <AnimatedBorderButton> 
                            Download Resume
                            <Download className="w-5 h-5"/>
                        </AnimatedBorderButton>
                        </a>
                    </div>

                    { /* Social Links */ }
                    <div className="flex items-center gap-4 animate-fade-in animation-delay-3500 justify-center">
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
                <div className="relative animate-fade-in animation-delay-3500">
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
                                className="w-full aspect-[4.4/5] object-cover rounded-2xl"
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
            <div className="mt-10 animate-fade-in animation-delay-3800">
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

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-3800">
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

