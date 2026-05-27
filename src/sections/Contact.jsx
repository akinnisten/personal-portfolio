import { useState, useRef } from "react";
import { ArrowUpRight, Mail, MapPin, Send } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";
import emailjs from "@emailjs/browser";

export const Contact = () => {
    const formRef = useRef(null);
    const [status, setStatus] = useState("idle"); // idle | sending | success | error

    const handleSubmit = async (e) => {
        e.preventDefault(); // ← This was the missing piece causing the reload

        setStatus("sending");

        try {
             await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            setStatus("success");
            formRef.current.reset();
        } catch (err) {
            console.error("EmailJS error:", err);
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl">

                <ScrollReveal>
                    <div className="flex items-center gap-4 mb-16">
                        <span className="section-kicker">04.</span>
                        <h2 className="text-3xl font-bold">CONTACT</h2>
                        <div className="flex-1 h-px bg-white/10" />
                    </div>
                </ScrollReveal>

                <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-start">

                    <ScrollReveal>
                        <div className="glass p-7 rounded-lg border border-white/5 hover:border-primary/30 transition-all">
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

                                {[{ label: "Name", type: "text", name: "name" },
                                  { label: "Email", type: "email", name: "email" }].map(({ label, type, name }) => (
                                    <div key={label}>
                                        <label className="text-sm text-muted-foreground mb-2 block">{label}</label>
                                        <input
                                            type={type}
                                            name={name}
                                            placeholder={`Enter ${label.toLowerCase()}...`}
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm 
                                            focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 transition-all"
                                        />
                                    </div>
                                ))}

                                <div>
                                    <label className="text-sm text-muted-foreground mb-2 block">Message</label>
                                    <textarea
                                        name="message"
                                        rows="4"
                                        placeholder="Your message..."
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm 
                                        focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 transition-all resize-none"
                                    />
                                </div>

                                {/* Status feedback */}
                                {status === "success" && (
                                    <p className="text-sm text-green-400">Message sent! I'll get back to you soon.</p>
                                )}
                                {status === "error" && (
                                    <p className="text-sm text-red-400">Something went wrong. Please try again.</p>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === "sending"}
                                    className="w-full bg-primary 
                                    hover:opacity-90 disabled:opacity-50 text-background font-semibold py-3 rounded-lg 
                                    flex items-center justify-center gap-2 transition-all
                                    shadow-lg shadow-primary/20 hover:shadow-primary/40"
                                >
                                    {status === "sending" ? "Sending..." : "Send Message"}
                                    <Send className="w-4 h-4" />
                                </button>
                            </form>
                        </div>
                    </ScrollReveal>

                    <div className="space-y-7">
                        <ScrollReveal>
                            <div className="pt-2">
                                <p className="section-kicker mb-5">Let's Work Together</p>
                                <h3 className="max-w-lg text-3xl font-bold leading-tight md:text-3xl">
                                    Have an idea, role, or project worth talking through?
                                </h3>
                                <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">
                                    Talk to me about anything. Whether it's a question or you want to collaborate, I'm open to anything! I respond fairly quickly.
                                </p>

                                <div className="mt-8 space-y-4">
                                    <a
                                        href="mailto:aidankinnisten@gmail.com"
                                        className="group flex items-center justify-between border-b border-border/80 pb-4 text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
                                    >
                                        <span className="flex items-center gap-3">
                                            <Mail className="h-4 w-4 text-primary" />
                                            aidankinnisten@gmail.com
                                        </span>
                                        <ArrowUpRight className="h-4 w-4 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                    </a>

                                    <div className="flex items-center gap-3 border-b border-border/80 pb-4 text-muted-foreground">
                                        <MapPin className="h-4 w-4 text-primary" />
                                        Columbus, OH
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="rounded-lg border border-primary/20 bg-primary/5 p-5 transition-all hover:border-primary/40">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    <h3 className="text-sm font-medium">Available for Opportunities</h3>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Open to roles in software engineering, machine learning, and cybersecurity.
                                    Let's build something impactful.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
};
