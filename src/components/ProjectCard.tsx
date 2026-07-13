import { motion, MotionValue, useTransform } from "framer-motion";
import BrowserMockup from "./BrowserMockup";
import ImageCard from "./ImageCard";

const MAX_VISIBLE_TAGS = 3;

export type ProjectMedia = "mockup" | "image" | "none";

export interface Project {
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
}

interface ProjectCardProps {
  project: Project;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}

const ProjectCard = ({ project, index, total, scrollYProgress }: ProjectCardProps) => {
  const step = 1 / (total - 1);
  const center = index * step;
  const plateau = step * 0.3;

  const inputRange: number[] = [];
  const scaleOutput: number[] = [];
  const opacityOutput: number[] = [];

  if (index > 0) {
    inputRange.push(center - step + plateau);
    scaleOutput.push(0.2);
    opacityOutput.push(0.3);
  }

  inputRange.push(Math.max(0, center - plateau));
  scaleOutput.push(1);
  opacityOutput.push(1);

  inputRange.push(Math.min(1, center + plateau));
  scaleOutput.push(1);
  opacityOutput.push(1);

  if (index < total - 1) {
    inputRange.push(center + step - plateau);
    scaleOutput.push(0.2);
    opacityOutput.push(0.3);
  }

  const scale = useTransform(scrollYProgress, inputRange, scaleOutput);
  const opacity = useTransform(scrollYProgress, inputRange, opacityOutput);

  const visibleTags = project.tags.slice(0, MAX_VISIBLE_TAGS);
  const hiddenTagCount = project.tags.length - visibleTags.length;
  const isDeadLink = project.link === "#";

  return (
    <motion.div
      style={{ scale, opacity }}
      className="group relative flex flex-col justify-between rounded-2xl transition-colors duration-300 bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:border-orange-500/50 backdrop-blur-md shadow-lg hover:shadow-[0_0_40px_-5px_rgba(249,115,22,0.45)] overflow-hidden w-[85vw] md:w-[600px] h-[65vh] min-h-[500px] max-h-[700px] shrink-0"
    >
      <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {project.media === "mockup" && (
          <>
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
            <div className="px-8 pb-8">
              <BrowserMockup
                image={project.image}
                title={project.title}
                liveUrl={project.liveUrl}
              />
            </div>
          </>
        )}

        {project.media === "image" && (
          <>
            <div className="relative">
              <ImageCard image={project.image} title={project.title} />
              <span className="absolute top-4 left-4 text-xs font-bold tracking-widest uppercase text-white px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm font-[var(--font-body)]">
                {project.category}
              </span>
            </div>
            <div className="p-8 pb-0">
              <h3 className="text-2xl font-bold mb-4 text-[var(--foreground)] font-[var(--font-display)]">
                {project.title}
              </h3>
              <p className="text-[var(--muted-foreground)] mb-6 text-sm leading-relaxed font-[var(--font-body)]">
                {project.description}
              </p>
            </div>
          </>
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
      </div>

      <div className="p-8 pt-6 mt-auto border-t border-[var(--glass-border)] bg-[var(--glass-bg)]">
        <div className="flex flex-wrap gap-2 mb-6">
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
          <span
            aria-disabled="true"
            title="Coming soon"
            className="inline-flex items-center text-sm font-semibold text-[var(--muted-foreground)] cursor-not-allowed font-[var(--font-body)]"
          >
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
};

export default ProjectCard;