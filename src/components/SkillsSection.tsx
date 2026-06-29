import React from "react";
import { motion } from "framer-motion";
import developerIcon from "@/assets/developer.svg";
import designerIcon from "@/assets/designer.svg";
import videoIcon from "@/assets/editor.svg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const skills = [
  { 
    category: "Development", 
    items: ["Java", "C++", "C", "MySQL", "PostgreSQL", "Vector DB", "Git", "GitHub"], 
    icon: developerIcon
  },
  { 
    category: "Design", 
    items: ["Photoshop", "UI/UX", "Brand Identity", "Typography"], 
    icon: designerIcon
  },
  { 
    category: "Video", 
    items: ["CapCut", "Motion Graphics", "Color Grading", "Editing","Visual Storytelling"], 
    icon: videoIcon
  },
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.category}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              // Added 'overflow-hidden' to ensure the icon doesn't bleed out
              className={`group relative flex flex-col rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:border-[var(--glass-highlight)] backdrop-blur-md shadow-lg overflow-hidden ${
                i === 0 ? "md:col-span-2" : "col-span-1"
              }`}
            >
            
             <div className="absolute -bottom-6 -right-6 w-52 h-52 text-[hsl(var(--primary))] opacity-10 pointer-events-none">
              <img src={skill.icon} alt={skill.category} className="w-full h-full" />
             </div>
              
              <h3 className="text-2xl font-bold mb-6 text-[var(--foreground)] font-[var(--font-display)] relative z-10">
                {skill.category}
              </h3>
              
              <div className="flex flex-wrap gap-3 mt-auto relative z-10">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-4 py-2 rounded-full bg-[var(--glass-highlight)] border border-[var(--glass-border)] text-[var(--secondary-foreground)] font-[var(--font-body)] transition-colors hover:bg-[hsl(var(--primary)/0.1)] hover:text-[hsl(var(--primary))]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;