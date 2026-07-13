import { useRef } from "react";
import { motion, useScroll, useTransform,useSpring,MotionValue} from "framer-motion";
import marksSS from "@/assets/marks.png";
import synchronicityImg from "@/assets/acm.png";
import ProjectCard, { Project } from "./ProjectCard";

const projectsData: Project[] = [
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
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const xInputs: number[] = [];
  const xOutputs: string[] = [];
  const step = 1 / (projectsData.length - 1);
  const plateau = step * 0.3;

  for (let i = 0; i < projectsData.length; i++) {
    const center = i * step;
    
    xInputs.push(Math.max(0, center - plateau));
    xInputs.push(Math.min(1, center + plateau));
    
    const percentage = (i / (projectsData.length - 1)) * 100;
    const output = `calc(-${percentage}% + ${percentage}vw)`;
    
    xOutputs.push(output);
    xOutputs.push(output);
  }

  const smoothProgress = useSpring(scrollYProgress, {
  stiffness: 70,
  damping: 22,
  mass: 0.4,
});



const x = useTransform(
  smoothProgress,
  xInputs,
  xOutputs
);

  return (
    <section id="projects" ref={targetRef} className="relative h-[400vh] bg-transparent">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute top-24 left-0 w-full px-[7.5vw] md:px-[calc(50vw-300px)] z-10 pointer-events-none">
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
            className="font-display text-4xl md:text-5xl font-bold"
          >
            Selected <span className="text-gradient">Projects</span>
          </motion.h2>

          
        </div>

        <motion.div
          style={{ x }}
          className="flex gap-6 md:gap-10 w-max px-[7.5vw] md:px-[calc(50vw-300px)] pt-32 items-center"
        >
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              total={projectsData.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;