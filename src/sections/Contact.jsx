import { Mail, MapPin, Send } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";

export const Contact = () => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                
                {/* Section Header */}
                <ScrollReveal>
                    <div className="flex items-center gap-4 mb-12">
                        <span className="text-primary text-sm font-mono">04.</span>
                        <h2 className="text-2xl font-bold">CONTACT</h2>
                        <div className="flex-1 h-px bg-white/10" />
                    </div>
                </ScrollReveal>

                <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl">
                    
                    {/* Left: Contact Form */}
                    <ScrollReveal>
                        <div className="glass p-8 rounded-2xl border border-white/5">
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm text-muted-foreground mb-2">Name</label>
                                    <input 
                                        type="text" 
                                        placeholder="Enter name..." 
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-muted-foreground mb-2">Email</label>
                                    <input 
                                        type="email" 
                                        placeholder="your@email.com" 
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-muted-foreground mb-2">Message</label>
                                    <textarea 
                                        rows="4" 
                                        placeholder="Your message..." 
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
                                    />
                                </div>
                                <button className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-4 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer">
                                    Send Message <Send className="w-4 h-4" />
                                </button>
                            </form>
                        </div>
                    </ScrollReveal>

                    {/* Right: Info Cards */}
                    <div className="space-y-6">
                        <ScrollReveal>
                            <div className="glass p-8 rounded-2xl border border-white/5">
                                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 group">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 transition-colors group-hover:bg-primary group-hover:text-white">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-muted-foreground">Email</p>
                                            <p className="text-base">aidankinnisten@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 group">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 transition-colors group-hover:bg-primary group-hover:text-white">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-muted-foreground">Location</p>
                                            <p className="text-base">Columbus, OH</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="glass p-8 rounded-2xl border border-white/5 bg-primary/5">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    <h3 className="text-sm font-medium">Currently Available</h3>
                                </div>
                                <p className="text-base text-muted-foreground leading-relaxed">
                                    Currently open to new opportunities! Whether it's related to machine 
                                    learning, cyber security, software engineering, or any other 
                                    technological inquiry, let's talk!
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
};