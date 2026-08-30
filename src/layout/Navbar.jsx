import { Menu, X, Sun, Moon, Download } from "lucide-react";
import { useState, useEffect } from "react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const navLinks = [
    { number: "01.", label: "About", href: "about" },
    { number: "02.", label: "Projects", href: "projects" },
    { number: "03.", label: "Experience", href: "experience" },
    { number: "04.", label: "Contact", href: "contact" },
];

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        const isLight = document.documentElement.classList.toggle("light");
        const nextTheme = isLight ? "light" : "dark";
        setTheme(nextTheme);
        localStorage.setItem("theme", nextTheme);
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "light") {
            document.documentElement.classList.add("light");
            setTheme("light");
        }

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const updateActiveSection = () => {
            const marker = window.innerHeight * 0.42;
            let current = "";

            for (const link of navLinks) {
                const section = document.getElementById(link.href);
                if (!section) continue;

                const rect = section.getBoundingClientRect();
                if (rect.top <= marker && rect.bottom > marker) {
                    current = link.href;
                    break;
                }

                if (rect.top <= marker) {
                    current = link.href;
                }
            }

            setActiveSection(current);
        };

        updateActiveSection();
        window.addEventListener("scroll", updateActiveSection, { passive: true });
        window.addEventListener("resize", updateActiveSection);

        return () => {
            window.removeEventListener("scroll", updateActiveSection);
            window.removeEventListener("resize", updateActiveSection);
        };
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
                    isScrolled
                    ? "bg-background/70 backdrop-blur-md border-b border-white/5 py-3"
                    : "bg-transparent py-5"
                } z-50`}
            >
                <nav className="container mx-auto px-6 flex items-center justify-between max-w-6xl">
                    {/* Logo */}
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="group flex items-center gap-2 font-mono text-sm font-black tracking-tight text-foreground transition-colors hover:text-primary"
                    >
                        <span className="grid h-9 min-w-16 place-items-center rounded-lg border border-primary/40 bg-primary/10 px-3 text-primary transition-colors group-hover:bg-primary group-hover:text-background">
                            {"< AK />"}
                        </span>
                    </button>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => scrollTo(link.href)}
                                className={`transition-all duration-300 cursor-pointer group flex items-center gap-1.5 ${
                                    activeSection === link.href ? "text-primary" : ""
                                }`}
                            >
                                <span className={`font-mono text-xs transition-colors ${
                                    activeSection === link.href ? "text-primary" : "text-primary/80"
                                }`}>
                                    {link.number}
                                </span>
                                <span className={`text-sm transition-colors group-hover:text-white ${
                                    activeSection === link.href ? "text-foreground" : "text-muted-foreground"
                                }`}>
                                    {link.label}
                                </span>
                                <span
                                    className={`h-1.5 w-1.5 rounded-full bg-primary transition-all ${
                                        activeSection === link.href ? "scale-100 opacity-100" : "scale-0 opacity-0"
                                    }`}
                                />
                            </button>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors cursor-pointer text-muted-foreground hover:text-primary"
                            aria-label="Toggle Theme"
                        >
                            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
                        </button>

                        <a href="/aidan_kinnisten_website_resumee.pdf" download className="block">
                            <AnimatedBorderButton size="sm" className="px-5">
                                Resume
                                <Download className="w-3.5 h-3.5" />
                            </AnimatedBorderButton>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-foreground cursor-pointer hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>
            </header>

            {/* Mobile Menu Overlay — outside header so it covers everything */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-background backdrop-blur-xl z-[60] md:hidden animate-in fade-in slide-in-from-top-4 duration-300">

                    {/* Close button */}
                    <button
                        className="absolute top-4 right-6 p-2 text-foreground hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <X size={24} />
                    </button>

                    <div className="flex flex-col items-center justify-center h-full gap-8 pb-20">
                        {navLinks.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => scrollTo(link.href)}
                                className="flex flex-col items-center gap-1 group"
                            >
                                <span className="text-primary font-mono text-sm">{link.number}</span>
                                <span className="text-2xl font-bold tracking-widest uppercase">{link.label}</span>
                            </button>
                        ))}

                        <div className="flex flex-col items-center gap-4 mt-4 w-full px-12">
                            <a href="/aidan_kinnisten_website_resume.pdf" download className="w-full">
                                <AnimatedBorderButton size="lg" className="w-full">
                                    Download Resume
                                </AnimatedBorderButton>
                            </a>
                            <button
                                onClick={toggleTheme}
                                className="text-muted-foreground hover:text-primary text-sm font-medium flex items-center gap-2"
                            >
                                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                                Switch to {theme === "dark" ? "Light" : "Dark"} Mode
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
