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

const MAX_VISIBLE_TAGS = 3;

type ProjectMedia = "mockup" | "image" | "none";

const projectsData: {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  media: ProjectMedia;
  image?: string;
  liveUrl?: string;
  link: string;
  linkLabel: string;
  isLive: boolean;
}[] = [
  {
    id: 1,
    title: "University Marks Manager",
    category: "Full Stack",
    description:
      "A role-based university marks management system built using Spring Boot, React and MySQL, featuring secure authentication, dynamic dashboards, and comprehensive CRUD operations for students, teachers, and administrators.",
    tags: ["React", "Spring Boot", "MySQL", "Full Stack Development"],
    media: "mockup",
    image: marksSS,
    liveUrl: "https://university-marks-manager.netlify.app/",
    link: "https://github.com/SanjibMurmu/university-marks-manager",
    linkLabel: "View Repo",
    isLive: true,
  },
  {
    id: 2,
    title: "Synchronicity S2 Promotional Campaign",
    category: "Creative Portfolio",
    media: "image",
    image: synchronicityImg,
    description:
      "Conceptualized and edited a series of promotional reels and motion graphics for ACM-JU's flagship technical event, Synchronicity S2. Optimized content for Instagram to maximize engagement, contributing to 50K+ campaign views and increased event participation.",
    tags: [
      "CapCut",
      "Instagram Reels",
      "Motion Graphics",
      "Creative Direction",
      "Digital Marketing",
    ],
    link: "https://www.instagram.com/acm.ju/",
    linkLabel: "View Campaign",
    isLive: false,
  },
  {
    id: 3,
    title: "Winter Photography Collection",
    category: "Photography",
    description:
      "A curated collection of winter photography submitted for contest exhibition, utilizing technical skills developed through foundational training.",
    tags: ["Visual Arts", "Editing", "Composition"],
    media: "none",
    link: "#",
    linkLabel: "Coming Soon",
    isLive: false,
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
          {projectsData.map((project, index) => {
            const visibleTags = project.tags.slice(0, MAX_VISIBLE_TAGS);
            const hiddenTagCount = project.tags.length - visibleTags.length;
            const isDeadLink = project.link === "#";

            return (
              <motion.div
                key={project.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                className="group relative flex flex-col justify-between rounded-2xl transition-all duration-300 hover:-translate-y-2 bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:border-orange-500/50 backdrop-blur-md shadow-lg hover:shadow-[0_0_40px_-5px_rgba(249,115,22,0.45)] overflow-hidden"
              >
                {/* Media: mockup projects get padded browser chrome, image
                    projects get an edge-to-edge treatment, text-only
                    projects skip media entirely and get a quieter layout */}
                {project.media === "mockup" && (
                  <div className="p-8 pb-0">
                    <span className="text-[hsl(var(--primary))] text-xs font-bold tracking-widest uppercase mb-3 block font-[var(--font-body)]">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-2 text-[var(--foreground)] font-[var(--font-display)]">
                      {project.title}
                    </h3>
                    {project.isLive && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 mb-4 font-[var(--font-body)]">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                        </span>
                        Live
                      </span>
                    )}
                    <p className="text-[var(--muted-foreground)] mb-6 text-sm leading-relaxed font-[var(--font-body)]">
                      {project.description}
                    </p>
                  </div>
                )}

                {project.media === "mockup" && (
                  <div className="px-8">
                    <BrowserMockup
                      image={project.image}
                      title={project.title}
                      liveUrl={project.liveUrl}
                    />
                  </div>
                )}

                {project.media === "image" && (
                  <div className="relative">
                    <ImageCard image={project.image} title={project.title} />
                    <span className="absolute top-4 left-4 text-xs font-bold tracking-widest uppercase text-white px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm font-[var(--font-body)]">
                      {project.category}
                    </span>
                  </div>
                )}

                {project.media === "image" && (
                  <div className="p-8 pb-0">
                    <h3 className="text-2xl font-bold mb-4 text-[var(--foreground)] font-[var(--font-display)]">
                      {project.title}
                    </h3>
                    <p className="text-[var(--muted-foreground)] mb-6 text-sm leading-relaxed font-[var(--font-body)]">
                      {project.description}
                    </p>
                  </div>
                )}

                {project.media === "none" && (
                  <div className="p-8 pb-0">
                    <span className="text-[hsl(var(--primary))] text-xs font-bold tracking-widest uppercase mb-3 block font-[var(--font-body)]">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-4 text-[var(--foreground)] font-[var(--font-display)]">
                      {project.title}
                    </h3>
                    <p className="text-[var(--muted-foreground)] mb-6 text-sm leading-relaxed font-[var(--font-body)]">
                      {project.description}
                    </p>
                  </div>
                )}

                <div className="p-8 pt-6">
                  <div className="flex flex-wrap gap-2 mb-8">
                    {visibleTags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-3 py-1.5 rounded-full bg-[var(--glass-highlight)] border border-[var(--glass-border)] text-[var(--secondary-foreground)] font-[var(--font-body)]"
                      >
                        {tag}
                      </span>
                    ))}
                    {hiddenTagCount > 0 && (
                      <span className="text-xs px-3 py-1.5 rounded-full border border-[var(--glass-border)] text-[var(--muted-foreground)] font-[var(--font-body)]">
                        +{hiddenTagCount}
                      </span>
                    )}
                  </div>

                  {isDeadLink ? (
                    <span className="inline-flex items-center text-sm font-semibold text-[var(--muted-foreground)] cursor-not-allowed font-[var(--font-body)]">
                      {project.linkLabel}
                    </span>
                  ) : (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-semibold text-[hsl(var(--primary))] hover:text-[hsl(var(--accent))] transition-colors font-[var(--font-body)]"
                    >
                      {project.linkLabel}
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
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;