import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}>
          
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">About Me</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            A <span className="text-gradient">selectively skilled</span> creator
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a BTech Information Technology undergrad with a passion that sits at the intersection of code and creativity. I build robust applications with Java, C++, and C while designing visually compelling experiences.
            </p>
            <p>
              Beyond coding, I'm a creative designer and video editor — crafting everything from brand visuals in Photoshop to polished video content with CapCut. I believe the best digital products come from understanding both the technical and creative sides.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative">
          
          <div className="aspect-square rounded-2xl glass overflow-hidden relative">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div className="w-24 h-24 rounded-full glass-strong flex items-center justify-center">
                <span className="text-4xl">🎯</span>
              </div>
              <div className="text-center">
                <p className="font-display text-5xl font-bold text-gradient">2+</p>
                <p className="text-sm text-muted-foreground mt-1">Years of Creating</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default AboutSection;