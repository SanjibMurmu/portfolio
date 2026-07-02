import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="relative overflow-hidden py-32 px-6">
      
      {/* Subtle Background Glows (Adjust opacity here if they clash with your bg image) */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-primary/5 blur-[150px]" />
        <div className="absolute right-[10%] top-[50%] h-[400px] w-[400px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl grid gap-16 md:grid-cols-2 md:items-center">
        
        {/* ---------------- Left Side: Text ---------------- */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary/80">
            About Me
          </p>
          
          <h2 className="mb-8 font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            A <span className="text-gradient">selectively skilled</span> creator.
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm a BTech Information Technology undergrad with a passion that sits at the intersection of code and creativity. I build robust applications with <span className="text-zinc-200">Java, C++, and C</span> while designing visually compelling experiences.
            </p>
            <p>
              Beyond coding, I'm a creative designer and video editor — crafting everything from brand visuals in <span className="text-zinc-200">Photoshop</span> to polished video content with <span className="text-zinc-200">CapCut</span>. I believe the best digital products come from understanding both the technical and creative sides.
            </p>
          </div>
        </motion.div>

        {/* ---------------- Right Side: Mini Bento Grid ---------------- */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative grid grid-cols-2 gap-4"
        >
          {/* Main Card (Years of Exp) */}
          <div className="col-span-2 flex h-56 flex-col items-center justify-center rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md transition-all hover:border-primary/30 hover:bg-zinc-900/60">
            
            {/* Animated Sparkle Icon */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 border border-primary/20 text-primary"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor" />
              </svg>
            </motion.div>

            <p className="font-display text-5xl font-bold text-zinc-100">2+</p>
            <p className="mt-2 text-sm font-medium tracking-wide text-muted-foreground uppercase">
              Years of Creating
            </p>
          </div>

          {/* Sub Card 1 (Code) */}
          <div className="flex h-48 flex-col justify-between rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-md transition-all hover:border-primary/30 hover:bg-zinc-900/60">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            </div>
            <div>
              <p className="font-display text-xl font-bold text-zinc-200">Engineer</p>
              <p className="mt-1 text-xs text-muted-foreground">Java • C++ • C</p>
            </div>
          </div>

          {/* Sub Card 2 (Design) */}
          <div className="flex h-48 flex-col justify-between rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-md transition-all hover:border-primary/30 hover:bg-zinc-900/60">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
            </div>
            <div>
              <p className="font-display text-xl font-bold text-zinc-200">Designer</p>
              <p className="mt-1 text-xs text-muted-foreground">Ps • CapCut</p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;