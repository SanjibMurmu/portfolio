import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import marksSS from "@/assets/marks.png";
import shortener from "@/assets/shortener.png";
import synchronicityImg from "@/assets/acm.png";
import mare from "@/assets/mare.png";
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
    title: "Mare Serenj",
    category: "Full Stack",
    description:
      "A cassette-themed web radio player that streams curated YouTube playlists, featuring dynamic time-of-day background theming, full playback controls with shuffle and loop, and an animated tape-deck UI with spinning reels. Name means 'Old Songs' in Santali.",
    tags: ["JavaScript", "YouTube IFrame API", "HTML/CSS"],
    media: "mockup",
    image: mare,
    liveUrl: "https://mare-serenj.sanjibmurmu.in/",
    link: "https://github.com/SanjibMurmu/mare-serenj",
    linkLabel: "View Repo",
    isLive: true,
  },
  
  {
    id: 3,
    title: "URL Shortener",
    category: "Full Stack",
    description:
      "A simple and efficient URL shortening service built with a modern tech stack, featuring a clean UI, real-time analytics, and seamless integration with popular social media platforms.",
    tags: ["Java", "Spring Boot", "H2 Database", "HTML"],
    media: "mockup",
    image: shortener,
    link: "https://github.com/SanjibMurmu/URLShortener",
    linkLabel: "View Repo",
    isLive: false,
  },
  {
    id: 4,
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
  }
];

// Coverflow tuning — mirrors the Originkit "Smooth 3D Slideshow" defaults.
const PERSPECTIVE = 1600;
const SCALE_STEP = 0.16;
const DEPTH = 220;
const TILT = 10; // rotateY per step
const MOVE_MS = 600;
const SWIPE_THRESHOLD = 50;

const Projects = () => {
  const [active, setActive] = useState(0);
  const [cardWidth, setCardWidth] = useState(760);
  const [cardHeight, setCardHeight] = useState(560);
  const lockRef = useRef(false);
  const touchStartX = useRef<number | null>(null);
  const n = projectsData.length;

  useEffect(() => {
    const updateSize = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const mobile = vw < 768;
      setCardWidth(
        mobile ? Math.round(Math.min(380, vw * 0.88)) : Math.round(Math.min(760, vw * 0.62))
      );
      setCardHeight(
        mobile ? Math.round(Math.min(640, vh * 0.72)) : Math.round(Math.min(600, vh * 0.68))
      );
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const lock = useCallback(() => {
    lockRef.current = true;
    window.setTimeout(() => {
      lockRef.current = false;
    }, MOVE_MS);
  }, []);

  const goTo = useCallback(
    (i: number) => {
      if (lockRef.current) return;
      lock();
      setActive(((i % n) + n) % n);
    },
    [n, lock]
  );

  const step = useCallback((dir: number) => goTo(active + dir), [active, goTo]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      step(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      step(-1);
    }
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > SWIPE_THRESHOLD) {
      step(delta < 0 ? 1 : -1);
    }
    touchStartX.current = null;
  };

  return (
    <section id="projects" className="relative py-32 bg-transparent overflow-hidden">
      <div className="px-[7.5vw] md:px-[calc(50vw-300px)] mb-16">
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

      <div
        className="relative flex items-center justify-center outline-none select-none"
        style={{ perspective: `${PERSPECTIVE}px`, minHeight: cardHeight }}
        tabIndex={0}
        role="group"
        aria-roledescription="carousel"
        onKeyDown={onKeyDown}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="relative"
          style={{
            width: cardWidth,
            height: cardHeight,
            transformStyle: "preserve-3d",
          }}
        >
          {projectsData.map((project, i) => {
            let rel = i - active;
            if (rel > n / 2) rel -= n;
            if (rel < -n / 2) rel += n;

            const ax = Math.abs(rel);
            const visible = ax <= 2;
            const isActive = rel === 0;
            const scale = Math.max(0.72, 1 - ax * SCALE_STEP);
            const tx = rel * (cardWidth * 0.52);
            const tz = -ax * DEPTH;
            const ry = -rel * TILT;

            return (
              <div
                key={project.id}
                onClick={() => !isActive && goTo(i)}
                aria-hidden={!visible}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  width: cardWidth,
                  height: "100%",
                  transformStyle: "preserve-3d",
                  transformOrigin: "center center",
                  transform: `translate(-50%, -50%) translateX(${tx}px) translateZ(${tz}px) rotateY(${ry}deg) scale(${scale})`,
                  transition: `transform ${MOVE_MS}ms cubic-bezier(0.22,1,0.36,1), opacity ${MOVE_MS}ms cubic-bezier(0.22,1,0.36,1)`,
                  opacity: visible ? (isActive ? 1 : 0.45) : 0,
                  zIndex: 10 - ax,
                  cursor: isActive ? "default" : "pointer",
                }}
              >
                {/* Inner content is inert while off-center so a click always
                    re-centers the card instead of following a link/button. */}
                <div style={{ pointerEvents: isActive ? "auto" : "none", height: "100%" }}>
                  <ProjectCard project={project} isActive={isActive} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Prev / next arrows */}
        <button
          type="button"
          onClick={() => step(-1)}
          aria-label="Previous project"
          className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)] backdrop-blur-md text-[var(--foreground)] hover:border-orange-500/50 hover:text-[hsl(var(--primary))] transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => step(1)}
          aria-label="Next project"
          className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)] backdrop-blur-md text-[var(--foreground)] hover:border-orange-500/50 hover:text-[hsl(var(--primary))] transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center items-center gap-2 mt-10">
        {projectsData.map((project, i) => (
          <button
            key={project.id}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to ${project.title}`}
            aria-current={active === i}
            className={`h-2 rounded-full transition-all duration-300 ${
              active === i
                ? "w-6 bg-[hsl(var(--primary))]"
                : "w-2 bg-[var(--muted-foreground)]/40 hover:bg-[var(--muted-foreground)]/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;