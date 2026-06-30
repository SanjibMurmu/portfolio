import React from "react";
import { motion } from "framer-motion";
import marksSS from "@/assets/marks.png";
import synchronicityImg from "@/assets/acm.png";
import BrowserMockup from "./BrowserMockup";
import ImageCard from "./ImageCard";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};


const projectsData = [
  {
    id: 1,
    title: "University Marks Manager",
    category: "Full Stack",
    description: "A role-based university marks management system built using Spring Boot, React and MySQL, featuring secure authentication, dynamic dashboards, and comprehensive CRUD operations for students, teachers, and administrators.",
    tags: ["React", "Spring Boot", "MySQL", "Full Stack Development"],
    image: marksSS,
    BrowserMockup : true,
    liveUrl : "https://university-marks-manager.netlify.app/",
    link: "https://github.com/SanjibMurmu/university-marks-manager",
  },
  {
  id: 2,
  title: "Synchronicity S2 Promotional Campaign",
  category: "Creative Portfolio",
  browserMockup: false,
  image: synchronicityImg,
  description:
    "Conceptualized and edited a series of promotional reels and motion graphics for ACM-JU's flagship technical event, Synchronicity S2. Optimized content for Instagram to maximize engagement, contributing to 50K+ campaign views and increased event participation.",
  tags: [
    "CapCut",
    "Instagram Reels",
    "Motion Graphics",
    "Creative Direction",
    "Digital Marketing"
  ],
  link: "https://www.instagram.com/acm.ju/",
},
  {
    id: 3,
    title: "Winter Photography Collection",
    category: "Photography",
    description: "A curated collection of winter photography submitted for contest exhibition, utilizing technical skills developed through foundational training.",
    tags: ["Visual Arts", "Editing", "Composition"],
    BrowserMockup : false,
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4"
        >
          Featured Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-bold mb-16"
        >
          Selected <span className="text-gradient">Projects</span>
        </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="group relative flex flex-col justify-between rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:border-[var(--glass-highlight)] backdrop-blur-md shadow-lg"
          >
            <div>
              <span className="text-[hsl(var(--primary))] text-xs font-bold tracking-widest uppercase mb-3 block font-[var(--font-body)]">
                {project.category}
              </span>
              <h3 className="text-2xl font-bold mb-4 text-[var(--foreground)] font-[var(--font-display)]">
                {project.title}
              </h3>
              <p className="text-[var(--muted-foreground)] mb-8 text-sm leading-relaxed font-[var(--font-body)]">
                {project.description}
              </p>
            </div>

{project.BrowserMockup ? (
  <BrowserMockup
    image={project.image}
    title={project.title}
    liveUrl={project.liveUrl}
  />
) : (
  <ImageCard
    image={project.image}
    title={project.title}
    liveUrl={project.liveUrl}
  />
)}

            <div>
              <div className="mt-6 flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1.5 rounded-full bg-[var(--glass-highlight)] border border-[var(--glass-border)] text-[var(--secondary-foreground)] font-[var(--font-body)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                className="inline-flex items-center text-sm font-semibold text-[hsl(var(--primary))] hover:text-[hsl(var(--accent))] transition-colors font-[var(--font-body)]"
              >
                View Details
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Projects;