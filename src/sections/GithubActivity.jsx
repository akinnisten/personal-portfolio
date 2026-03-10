import { GitHubCalendar } from "react-github-calendar";
import { ScrollReveal } from "../components/ScrollReveal";
import { Scroll } from "lucide-react";

export const GithubActivity = () => {
  return (
    <section id="github" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl text-center">
        <ScrollReveal>
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                Recent Updates
            </span>
        </ScrollReveal>

        <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-foreground">
                        <ScrollReveal>
                            What I am working on now.
                        </ScrollReveal>
                        <ScrollReveal>
                        <p className="text-muted-foreground text-sm font-medium mt-3 animate-fade-in animation-delay-200">
                        
                        My most recent GitHub contributions. 
                    </p>
                    </ScrollReveal>
        </h2>
        <ScrollReveal>

        <div className="mt-10 glass rounded-3xl p-6 glow-border overflow-x-auto">
          <div className="flex justify-center">
            <GitHubCalendar
              username="akinnisten"
              colorScheme="dark"
              theme={{
                dark: ["#0b0b1a", "#4c1d95", "#6d28d9", "#8b5cf6", "#c084fc"],
              }}
              labels={{
                totalCount: "{{count}} contributions in the last year",
              }}
            />
          </div>
        </div>
        </ScrollReveal>

        <div className="mt-8">
          <ScrollReveal>
          <a
            href="https://github.com/akinnisten"
            target="_blank"
            rel="noopener noreferrer"
            className="glass inline-block px-6 py-3 rounded-xl hover:bg-primary/10 hover:text-primary transition-all duration-300"
          >
            View GitHub Profile
          </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};