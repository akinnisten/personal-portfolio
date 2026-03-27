import { Mail, MapPin, Send } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";

export const Contact = () => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl">

                {/* Header */}
                <ScrollReveal>
                    <div className="flex items-center gap-4 mb-16">
                        <span className="text-primary text-sm font-mono">04.</span>
                        <h2 className="text-3xl font-bold">CONTACT</h2>
                        <div className="flex-1 h-px bg-white/10" />
                    </div>
                </ScrollReveal>

                <div className="grid lg:grid-cols-2 gap-10">

                    {/* FORM */}
                    <ScrollReveal>
                        <div className="glass p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-all">

                            <form className="space-y-6">

                                {/* Input */}
                                {["Name", "Email"].map((label) => (
                                    <div key={label}>
                                        <label className="text-sm text-muted-foreground mb-2 block">
                                            {label}
                                        </label>
                                        <input
                                            type={label === "Email" ? "email" : "text"}
                                            placeholder={`Enter ${label.toLowerCase()}...`}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm 
                                            focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40
                                            transition-all"
                                        />
                                    </div>
                                ))}

                                {/* Message */}
                                <div>
                                    <label className="text-sm text-muted-foreground mb-2 block">
                                        Message
                                    </label>
                                    <textarea
                                        rows="4"
                                        placeholder="Your message..."
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm 
                                        focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40
                                        transition-all resize-none"
                                    />
                                </div>

                                {/* Button */}
                                <button
                                    className="w-full bg-gradient-to-r from-primary to-purple-600 
                                    hover:opacity-90 text-white font-medium py-3 rounded-xl 
                                    flex items-center justify-center gap-2 transition-all
                                    shadow-lg shadow-primary/20 hover:shadow-primary/40"
                                >
                                    Send Message <Send className="w-4 h-4" />
                                </button>
                            </form>
                        </div>
                    </ScrollReveal>

                    {/* INFO */}
                    <div className="space-y-6">

                        <ScrollReveal>
                            <div className="glass p-6 rounded-2xl border border-white/5 hover:border-primary/20 transition-all group hover:-translate-y-1">

                                <h3 className="text-lg font-bold mb-6">Contact Info</h3>

                                <div className="space-y-6">
                                    {[{
                                        icon: Mail,
                                        label: "Email",
                                        value: "aidankinnisten@gmail.com"
                                    },{
                                        icon: MapPin,
                                        label: "Location",
                                        value: "Columbus, OH"
                                    }].map(({icon: Icon, label, value}) => (
                                        <div key={label} className="flex items-center gap-4">

                                            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center 
                                            text-primary border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all">
                                                <Icon className="w-4 h-4" />
                                            </div>

                                            <div>
                                                <p className="text-xs text-muted-foreground">{label}</p>
                                                <p className="text-sm">{value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="glass p-6 rounded-2xl border border-primary/20 bg-primary/5 
                            hover:shadow-lg hover:shadow-primary/20 transition-all">

                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    <h3 className="text-sm font-medium">Available for Opportunities</h3>
                                </div>

                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Open to roles in software engineering, machine learning, and cybersecurity.
                                    Let’s build something impactful.
                                </p>
                            </div>
                        </ScrollReveal>

                    </div>
                </div>
            </div>
        </section>
    );
};