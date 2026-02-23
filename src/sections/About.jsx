import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";

const highlights = [
    {
        icon: Code2,
        title: "a title",
        description: "hi",
    },
    {
        icon: Rocket,
        title: "with another title",
        description: "ill prob change this icon",
    },
    {
        icon: Users,
        title: "and this one too",
        description: "maybe this one",
    },
    {
        icon: Lightbulb,
        title: "this one too",
        description: "Text",
    },
]

export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">

                { /* Purple Dots Dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <div 
                        
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

            <div className="container mx-auto px-6 relative z=10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    { /* Left Column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in animation-delay-200">
                            <ScrollReveal>
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                                About Me
                            </span>
                            </ScrollReveal>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                            <ScrollReveal>
                            Building the future,
                            <span className="font-serif italic font-normal text-white">
                                { } one component at a time. </span>
                            </ScrollReveal>
                        </h2>
                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <ScrollReveal>
                            <p>
                                yo i should prob add some text here
                            </p>
                            <p>
                                
                            </p>
                            </ScrollReveal>
                        </div>
                        <ScrollReveal>
                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                            <p className="text-lg font-medium italic text-foreground">
                                "mission statement type of box"
                            </p>
                        </div>
                        </ScrollReveal>
                    </div>
                    {/* Right Column - Highlights */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, idx) => (
                            <ScrollReveal key={idx} className="duration-1500">
                            <div 
                                className="glass p-6 rounded-2xl animate-fade-in"
                                style={{animationDelay: `${(idx +1) * 100}ms`}}
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary-/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                    <item.icon className="w-6 h-6 text-primary"/>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};