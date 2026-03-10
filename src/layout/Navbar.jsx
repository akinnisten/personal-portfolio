import { Button } from "@/components/Button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        const isLight = document.documentElement.classList.toggle("light");
        setTheme(isLight ? "light" : "dark");
    };  

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return ( 
        <header 
            className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
                isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
            } z-50`}
        >
            <nav className="container mx-auto px-6 flex items-center justify-between max-w-5xl">
                <a 
                    href="#" 
                    className="text-xl font-bold tracking-tight hover:text-primary"
                >
                    AK<span className="text-primary">.</span>
                </a>

                
                { /* Desktop Nav */ }
                <div className="hidden md:flex items-center gap-1">
                    
                </div>
                
                { /* CTA BUTTON */}
                
                <div className="hidden md:flex items-center gap-3">
                    <button
                        onClick={toggleTheme}
                        className="glass rounded-full p-2 hover:text-primary transition-colors cursor-pointer"
                        aria-label="Toggle Theme"
                    >
                        {theme === "light" ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    <div className="px-3 py-1 flex items-center gap-1"> 
                    
                    </div>

                    <div onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior : 'smooth'})}>
                    <Button size="sm" className="cursor-pointer">Contact Me</Button>
                    </div>
                </div>

                { /* Mobile Menu Button */}
                <button 
                className="md:hidden p-2 text-foreground cursor-pointer" 
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            { /* Mobile Menu */ }
            {isMobileMenuOpen && (
                <div className="md:hidden glass bg-background/40 animate-fade-in">
                    <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                        <button
                            onClick={toggleTheme}
                            className="glass rounded-xl p-3 flex items-center justify-center gap-2 cursor-pointer hover:text-primary transition-colors"
                        >
                            Toggle Theme
                        </button>
                        
                        
                        <Button onClick ={() => {
                            setIsMobileMenuOpen(false);
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                            >Contact Me
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
};