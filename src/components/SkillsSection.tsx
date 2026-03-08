import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const skills = [
  { category: "Development", items: ["Java", "C++", "C", "MySQL"], icon: "⚡" },
  { category: "Design", items: ["Photoshop", "UI/UX", "Brand Identity", "Typography"], icon: "✦" },
  { category: "Video", items: ["CapCut", "Motion Graphics", "Color Grading", "Editing"], icon: "▶" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4"
        >
          What I Do
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-bold mb-16"
        >
          Skills & <span className="text-gradient">Expertise</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.category}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="group p-8 rounded-2xl glass hover:glass-strong transition-all duration-500 hover:glow"
            >
              <span className="text-3xl mb-6 block">{skill.icon}</span>
              <h3 className="font-display text-xl font-semibold mb-4">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-muted-foreground text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
