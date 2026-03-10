import { useState, useEffect } from "react";
import { Loader } from "@/components/Loader";

import { Navbar } from "@/layout/Navbar";

import { Main } from "@/sections/Main";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { GithubActivity } from "@/sections/GithubActivity";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";

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
      <Navbar />
      <main>
        <Main />
        <About />
        <Projects />
        <Experience />
        <GithubActivity />
        <Contact />
      </main>
      <Footer />
    </div>
  </>
);
}

export default App;

