import { motion } from "framer-motion";

interface TimelineNodeProps {
  logo: string;
}

export default function TimelineNode({
  logo,
}: TimelineNodeProps) {
  return (
    <div className="relative flex h-20 w-20 items-center justify-center">

      {/* Breathing Glow */}
      <motion.div
        animate={{
          scale: [1, 1.35, 1],
          opacity: [0.3, 0.05, 0.3],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.8,
          ease: "easeInOut",
        }}
        className="
        absolute
        h-20
        w-20
        rounded-full
        bg-primary/20
        blur-2xl
        "
      />

      {/* Outer Ring */}
      <motion.div
        whileHover={{
          rotate: 180,
        }}
        transition={{
          duration: 0.6,
        }}
        className="
        absolute
        h-[72px]
        w-[72px]
        rounded-full
        border
        border-primary/20
        "
      />

      {/* Main Circle */}
      <motion.div
        initial={{
          scale: 0,
          opacity: 0,
        }}
        whileInView={{
          scale: 1,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 16,
        }}
        whileHover={{
          scale: 1.12,
        }}
        className="
        relative
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        border
        border-primary/30
        bg-zinc-950
        shadow-lg
        "
      >
        <motion.img
          src={logo}
          alt=""
          whileHover={{
            scale: 1.1,
          }}
          transition={{
            duration: 0.25,
          }}
          // Increased from h-9 w-9 to h-12 w-12
          className="h-12 w-12 object-contain"
        />
      </motion.div>

    </div>
  );
}