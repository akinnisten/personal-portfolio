import { useState, useEffect } from "react";
import { Loader } from "@/components/Loader";
import { Navbar } from "@/layout/Navbar";
import { Main } from "@/sections/Main";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";
import { Github, Linkedin, Mail } from "lucide-react";
import { CursorGlow } from "@/components/CursorGlow";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
  <>
    {loading && <Loader />}
    <div
      className={`min-h-screen overflow-x-hidden transition-opacity duration-700 ${
        loading ? "opacity-0" : "opacity-100"
      }`}
    >
      <CursorGlow />
      <Navbar />

      {/* Social sidebar left */}
      <div className="fixed left-6 bottom-0 z-50 hidden md:flex flex-col items-center gap-6 opacity-90">
        <a href="https://github.com/akinnisten" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
          <Github className="w-4 h-4" />
        </a>
        <a href="https://www.linkedin.com/in/aidan-kinnisten-773022385/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
          <Linkedin className="w-4 h-4" />
        </a>
        <div className="w-px h-20 bg-muted-foreground opacity-60" />
      </div>

      {/* Email sidebar right */}
      <div className="fixed right-6 bottom-0 z-50 hidden md:flex flex-col items-center gap-6 opacity-90">
        <a
          href="mailto:aidankinnisten@gmail.com"
          style={{ writingMode: "vertical-rl" }}
          className="text-xs tracking-widest text-muted-foreground hover:text-primary transition-colors duration-300 mb-2"
        >
          aidankinnisten@gmail.com
        </a>
        <div className="w-px h-20 bg-muted-foreground opacity-60" />
      </div>

      <main className="px-10">
        <Main />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  </>
  );
}

export default App;