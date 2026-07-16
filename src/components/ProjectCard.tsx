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
  /** Whether this card currently sits in the coverflow's center spotlight. */
  isActive?: boolean;
}

const ProjectCard = ({ project, isActive = true }: ProjectCardProps) => {
  const visibleTags = project.tags.slice(0, MAX_VISIBLE_TAGS);
  const hiddenTagCount = project.tags.length - visibleTags.length;
  const isDeadLink = project.link === "#";
  const hasMedia = project.media !== "none";

  const tagList = (
    <div className="flex flex-wrap gap-2">
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
  );

  const linkEl = isDeadLink ? (
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
  );

  return (
    <div
      className={`group relative flex flex-col md:flex-row rounded-2xl transition-[border-color,box-shadow,background-color] duration-300 border backdrop-blur-md overflow-hidden w-full h-full ${
        isActive
          ? "border-orange-500/50 shadow-[0_0_40px_-5px_rgba(249,115,22,0.45)] bg-[var(--glass-bg)]"
          : "border-[var(--glass-border)] shadow-lg bg-[var(--glass-bg)]"
      }`}
      style={
        isActive
          ? {
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8))",
            }
          : undefined
      }
    >

      <div
        className={`flex flex-col justify-between min-w-0 p-6 md:p-8 text-left ${
          hasMedia ? "md:w-[44%]" : "w-full"
        }`}
      >
        <div className="min-w-0">
          <span className="text-[hsl(var(--primary))] text-xs font-bold tracking-widest uppercase mb-3 block font-[var(--font-body)]">
            {project.category}
          </span>
          <h3 className="text-xl md:text-2xl font-bold mb-2 leading-snug break-words text-[var(--foreground)] font-[var(--font-display)]">
            {project.title}
          </h3>
          {project.isLive && (
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 mb-3 font-[var(--font-body)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              Live
            </span>
          )}
          <p className="text-[var(--muted-foreground)] text-sm leading-relaxed font-[var(--font-body)] line-clamp-6 md:line-clamp-[10]">
            {project.description}
          </p>
        </div>

        {!hasMedia && (
          <div className="mt-5 shrink-0">
            <div className="mb-5">{tagList}</div>
            {linkEl}
          </div>
        )}
      </div>

      {hasMedia && (
        <div className="flex flex-col w-full md:w-[56%] h-full min-h-0 border-t md:border-t-0 md:border-l border-[var(--glass-border)]">
          <div className="relative flex-1 min-h-0 h-48 md:h-auto overflow-hidden bg-black/10">
            {project.media === "mockup" ? (
              <div className="flex h-full w-full items-center p-5 md:p-7">
                <BrowserMockup
                  image={project.image}
                  title={project.title}
                  liveUrl={project.liveUrl}
                />
              </div>
            ) : (
              <ImageCard image={project.image} title={project.title} />
            )}
          </div>
          <div className="shrink-0 p-4 md:p-5 space-y-4">
            {tagList}
            {linkEl}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;