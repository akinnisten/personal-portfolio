import { LucideLinkedin, LucideGithub } from "lucide-react";

const socialLinks = [
    { icon: LucideGithub, href:"https://github.com/akinnisten", label: "GitHub"},
    { icon: LucideLinkedin, href:"https://www.linkedin.com/in/aidan-kinnisten-773022385/", label: "LinkedIn"},
]

const footerLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
]

export const Footer = () => {
    const currentYear = new Date().getFullYear(); 

    return (
        <footer className="relative z-10 border-t border-white/10 bg-background/85 py-12 shadow-[0_-20px_80px_rgba(0,0,0,0.32)] backdrop-blur-md">
            <div className="container mx-auto px-6 md:px-15">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    { /* Logo/Copyright */ }
                    <div className="text-center md:text-left">
                        <a href="#" className="text-xl font-bold tracking-tight">
                            <span className="text-secondary-foreground"> { "<" }</span>
                            <span className="text-color-background"> { "AK \u00A0" }</span>
                            <span className="text-secondary-foreground"> { " / >" }</span>
                        </a>
                        <p className="text-sm text-muted-foreground mt-2">
                            © {currentYear} Aidan Kinnisten. All rights reserved.
                        </p>
                    </div>

                    {/* Links */}
                    <nav className="flex flex-wrap justify-center gap-6">
                        {footerLinks.map((link) => (
                            <a
                            key={link.href}
                            href={link.href}
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    { /* Social Links */ }
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                aria-label={social.label}
                                className="rounded-full border border-white/10 bg-white/5 p-2 text-muted-foreground transition-all hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
                            >
                                <social.icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};
