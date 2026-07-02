import { motion } from "framer-motion";

interface JourneyCardProps {
  exp: {
    year: string;
    role: string;
    organization: string;
    description: string;
    metrics: string[];
    tags: string[];
  };
}

export default function JourneyCard({ exp }: JourneyCardProps) {
  return (
    <motion.article
      whileHover={{
        y: -8,
        scale: 1.01,
      }}
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 22,
      }}
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-zinc-800
      bg-zinc-900/50
      backdrop-blur-xl
      p-6
      sm:p-8
      transition-all
      duration-500
      hover:border-primary/30
      hover:shadow-[0_0_40px_rgba(244,101,42,.12)]
      "
    >
      {/* Top Glow */}
      <div
        className="
        absolute
        inset-x-0
        top-0
        h-px
        bg-gradient-to-r
        from-transparent
        via-primary/70
        to-transparent
        opacity-0
        transition-opacity
        duration-500
        group-hover:opacity-100
        "
      />

      {/* Left Accent */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileHover={{ scaleY: 1 }}
        transition={{ duration: .3 }}
        className="
        absolute
        left-0
        top-8
        h-[75%]
        w-1
        origin-top
        rounded-full
        bg-primary
        "
      />

      {/* Title (Removed mt-5 so it sits flush at the top) */}
      <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
        {exp.role}
      </h3>

      <p className="mt-1 text-sm font-medium text-primary/80 sm:mt-2 sm:text-base">
        {exp.organization}
      </p>

      {/* Description */}
      <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base sm:leading-8">
        {exp.description}
      </p>

      {/* Divider */}
      <div className="my-6 h-px bg-gradient-to-r from-primary/20 via-border to-transparent sm:my-7" />

      {/* Metrics (Tightened space-y-4 to space-y-3) */}
      <div className="space-y-3">
        {exp.metrics.map((metric, index) => (
          <motion.div
            key={metric}
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: index * .12,
              duration: .35,
            }}
            className="flex items-start gap-4 sm:items-center"
          >
            <div
              className="
              mt-1
              flex
              h-6
              w-6
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-primary/10
              sm:mt-0
              sm:h-7
              sm:w-7
              "
            >
              <div className="h-1.5 w-1.5 rounded-full bg-primary sm:h-2 sm:w-2" />
            </div>

            <p className="text-sm text-zinc-300">
              {metric}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Tags (Tightened from px-4 py-2 to px-3 py-1.5) */}
      <div className="mt-8 flex flex-wrap gap-2 sm:gap-3">
        {exp.tags.map((tag, index) => (
          <motion.span
            key={tag}
            initial={{
              opacity: 0,
              scale: .9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              delay: .45 + index * .05,
            }}
            whileHover={{
              y: -2,
            }}
            className="
            rounded-full
            border
            border-primary/20
            bg-primary/10
            px-3
            py-1.5
            text-[11px]
            font-medium
            text-primary
            sm:text-xs
            "
          >
            {tag}
          </motion.span>
        ))}
      </div>

      {/* Background Glow */}
      <div
        className="
        pointer-events-none
        absolute
        -right-20
        -top-20
        h-48
        w-48
        rounded-full
        bg-primary/5
        blur-3xl
        opacity-0
        transition-opacity
        duration-500
        group-hover:opacity-100
        "
      />
    </motion.article>
  );
}