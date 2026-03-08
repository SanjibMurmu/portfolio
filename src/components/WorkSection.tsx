import { motion } from "framer-motion";

const experiences = [
  {
    role: "Assistant Cultural Secretary",
    company: "JUSSWCA",
    period: "Nov 2024 - Aug 2025",
    description: "Managed events and seminars",
    tags: ["Coordination"],
  },
  {
    role: "Social Media Manager",
    company: "JUSSWCA",
    period: "Aug 2025 - Present",
    description: "Created digital content for the promotion of activities",
    tags: ["CapCut", "Social Media Marketing"],
  },
  {
    role: "Content Team Lead",
    company: "ACM JU",
    period: "2025 — Present",
    description: "Led the team ",
    tags: ["CapCut", "Leadership"],
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4"
        >
          Career
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-bold mb-16"
        >
          Work <span className="text-gradient">Experience</span>
        </motion.h2>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-8 md:p-10 rounded-2xl glass hover:glass-strong transition-all duration-500 cursor-pointer hover:glow"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-primary font-display font-semibold">{exp.period}</span>
                  <h3 className="font-display text-2xl font-bold mt-1">
                    {exp.role}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">{exp.company}</p>
                  <p className="text-muted-foreground text-sm mt-2">{exp.description}</p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full glass-subtle text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
