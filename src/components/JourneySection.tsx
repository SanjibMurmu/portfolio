import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

import { journey } from "@/data/journey";

import TimelineNode from "./TimelineNode";
import JourneyCard from "./JourneyCard";

export default function JourneySection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 15%"],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="relative overflow-hidden py-32 px-6"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        {/* Main Glow */}
        <div
          className="
          absolute
          left-1/2
          top-24
          h-[700px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-primary/5
          blur-[180px]
          "
        />

        {/* Secondary Glow */}
        <div
          className="
          absolute
          right-0
          bottom-20
          h-72
          w-72
          rounded-full
          bg-primary/5
          blur-[120px]
          "
        />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* ---------------- Header ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mb-24 text-center"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-primary">
            Journey
          </p>

          <h2 className="mt-4 font-display text-5xl md:text-6xl font-bold leading-tight">
            Building Skills{" "}
            <span className="text-gradient">
              Beyond Code
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            Every experience has strengthened my leadership,
            creativity, collaboration and technical thinking.
            These milestones continue to shape the way I build
            software today.
          </p>
        </motion.div>

        {/* ---------------- Timeline ---------------- */}
        <div className="relative">

          {/* Background Line (Fixed: top-10 and bottom-10 instead of top-0 h-full) */}
          <div
            className="
            absolute
            bottom-10
            left-10
            top-10
            w-px
            -translate-x-1/2
            bg-zinc-800
            md:left-[168px]
            "
          />
          
          {/* Animated Line (Fixed: top-10 and bottom-10) */}
          <motion.div
            style={{ scaleY: lineScale }}
            className="
            absolute
            bottom-10
            left-10
            top-10
            w-[2px]
            origin-top
            -translate-x-1/2
            bg-gradient-to-b
            from-primary
            via-primary
            to-transparent
            md:left-[168px]
            "
          />

          {journey.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: .6,
                delay: index * .12,
              }}
              className="
              relative
              z-10
              flex
              items-start
              pb-28
              "
            >
              {/* Desktop Date Column (Hidden on mobile) */}
              <div className="hidden w-32 shrink-0 justify-end pr-8 pt-5 md:flex">
                <span className="font-display text-3xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-zinc-300 to-zinc-600">
                  {exp.year}
                </span>
              </div>

              {/* Timeline Node Column */}
              <div className="absolute left-0 top-0 flex w-20 shrink-0 justify-center md:relative">
                <TimelineNode logo={exp.logo} />
              </div>

              {/* Content Column (Mobile Date + Card) */}
              <div className="flex-1 pl-28 md:pl-10">
                {/* Mobile Date (Hidden on desktop) */}
                <span className="mb-4 block font-display text-2xl font-black tracking-tight text-zinc-300 md:hidden">
                  {exp.year}
                </span>

                <JourneyCard exp={exp} />
              </div>
            </motion.div>
          ))}

          {/* Ending Node */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            className="
            relative
            z-10
            flex
            items-center
            "
          >
            {/* Desktop Date Spacer */}
            <div className="hidden w-32 shrink-0 md:block" />

            {/* Ending Circle */}
            <div className="absolute left-0 flex w-20 shrink-0 justify-center md:relative">
              <div
                className="
                relative
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-full
                border
                border-dashed
                border-primary/30
                bg-zinc-900
                "
              >
                <div
                  className="
                  absolute
                  h-20
                  w-20
                  rounded-full
                  bg-primary/10
                  blur-xl
                  "
                />
                <span className="relative text-2xl text-primary/70">
                  ◎
                </span>
              </div>
            </div>

            {/* Ending Text */}
            <div className="flex-1 pl-28 md:pl-10">
              <h3 className="font-display text-2xl font-bold text-zinc-200">
                The Best Milestones
              </h3>
              <p className="mt-2 text-muted-foreground">
                are yet to come.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}