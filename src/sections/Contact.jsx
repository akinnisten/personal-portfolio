import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ScrollReveal } from "../components/ScrollReveal";
import { useMemo } from "react";

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "aidankinnisten@gmail.com",

    },
    {
        icon: MapPin,
        label: "Location",
        value: "Columbus, OH",
    },
];



export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({
        type: null,
        message: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setSubmitStatus({ type: null, message: "" });
        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                throw new Error(
                    "Email JS Config is missing."
                );
            }

            await emailjs.send(serviceId, templateId, {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            }, publicKey)

            setSubmitStatus({
                type: "success",
                message: "Message sent!"
            });
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("EmailJS Error:", error);
            setSubmitStatus({
                type: "error",
                message:
                    error.text || "Failed to send message, try again later.",
            });
        } finally {
            setIsLoading(false);
        }
    };

    const dots = useMemo(() => 
        [...Array(30)].map((_, i) => ({
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            duration: `${15 + Math.random() * 20}s`,
            delay: `${Math.random() * 5}s`,
        })), 
    []);

    return (

        <section id="contact" className="py-32 relative overflow-hidden">
            
            { /* Purple Dots Dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none ">
                {dots.map((dot, i) => (
            <div
                key={i}
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

            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        <ScrollReveal>
                        Get in Touch
                        </ScrollReveal>
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-foreground">
                        <ScrollReveal>
                        Let's build
                        <span className="font-serif italic font-normal text-white">
                            {" "} something great.</span>
                        </ScrollReveal>
                    </h2>
                    <ScrollReveal>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        
                        I respond fairly quickly, feel free to ask me any questions you may have!
                    </p>
                    </ScrollReveal>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <ScrollReveal>
                    <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <ScrollReveal>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    required
                                    placeholder="Enter name... (or just type something lol)"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                />
                                </ScrollReveal>
                            </div>

                            <div>
                                <ScrollReveal>
                                <label
                                    className="block text-sm font-medium mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    placeholder="your@email.com"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({ ...formData, email: e.target.value })
                                    }
                                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                                </ScrollReveal>
                            </div>

                            <div>
                                <ScrollReveal>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    rows={5}
                                    required
                                    placeholder="Your message..."
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData({ ...formData, message: e.target.value })
                                    }
                                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none" />
                                </ScrollReveal>
                            </div>
                            <ScrollReveal className="duration-2000">
                                <Button
                                className="w-full cursor-pointer"
                                type="submit"
                                size="lg"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>Sending...</>
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="w-5 h-5" />
                                    </>
                                )}
                                </Button>
                            </ScrollReveal>

                            {submitStatus.type && (
                                <div
                                    className={`flex items-center gap-3
                            p-4 rounded-xl ${submitStatus.type === "success"
                                            ? "bg-green-500/10 border border-green-500/20 text-green"
                                            : "bg-red-500/10 border border-red-500/20 text-red"
                                        }`}
                                >
                                    {submitStatus.type === "success" ? (
                                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                                    ) : (
                                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                    )}
                                    <p className="text-sm">{submitStatus.message}</p>
                                </div>
                            )}
                        </form>
                    </div>
                    </ScrollReveal>

                    {/* Contact Info */}

                    <div className="space-y-6 animate-fade-in animation-delay-400">
                        <ScrollReveal>
                        <div className="glass rounded-3xl p-5">
                            <h3 className="text-xl font semibold mb-8">
                                Contact Information
                            </h3>
                            <div className="space-y-4">
                                {contactInfo.map((item, i) => (
                                    <a
                                        key={i}
                                        className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                            <item.icon className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-muted-foreground">
                                                {item.label}
                                            </div>
                                            <div className="font-medium">{item.value}</div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                        </ScrollReveal>


                        { /* Availability Card */}
                        <div className="glass rounded-3xl p-8 border border-primary/30">
                            <ScrollReveal>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                <span className="font-medium">Currently Available</span>
                            </div>
                            <p className="text-muted-foreground text-sm">
                                Currently open to new opportunities! Whether it's related to machine learning, cyber security, software engineering, or any other technological inquiry, let's talk!
                            </p>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};