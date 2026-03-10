import { ScrollReveal } from "../components/ScrollReveal";

const experiences = [
  {
    year: "2020 – 2025",
    title: "Roblox Game Developer",
    company: "Independent Project",
    description:
      "Developed a Roblox game that reached over 70 million plays and was featured by YouTubers with over 10M subscribers.",
    tags: ["Lua", "Blender", "Game Design"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          <ScrollReveal>
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
              Career Journey
            </span>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
                Real-world experience in CS
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <p className="text-muted-foreground mt-6">
              A timeline of my technical growth, and hoping to add on!
            </p>
          </ScrollReveal>

        </div>

        {/* Timeline Wrapper */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-primary/40 -translate-x-1/2" />

          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`relative mb-16 flex ${
                i % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >

              {/* Dot */}
              <div className="absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background" />

              {/* Card */}
              <ScrollReveal className="w-[45%]">
                <div className="glass rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-all">

                  <span className="text-primary text-sm font-medium">
                    {exp.year}
                  </span>

                  <h3 className="text-xl font-semibold mt-1">
                    {exp.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4">
                    {exp.company}
                  </p>

                  <p className="text-muted-foreground mb-5">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-xs bg-surface border border-border/40 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </ScrollReveal>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};