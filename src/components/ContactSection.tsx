import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-12 md:p-16 rounded-3xl glass">
          
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Get in Touch
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Let's work <span className="text-gradient">together</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-md mx-auto">
            Have a project in mind or just want to chat? I'm always open to new opportunities and collaborations.
          </p>
          <a

            className="inline-block px-10 py-4 rounded-full bg-primary text-primary-foreground font-display font-semibold hover:scale-105 transition-transform" href="mailto:sanjibmurmu2005@gmail.com">
            
            Say Hello →
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="max-w-5xl mx-auto mt-32 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© 2026 — All rights reserved</p>
        <div className="flex gap-6">
          <a className="hover:text-foreground transition-colors" href="https://github.com/SanjibMurmu">GitHub</a>
          <a className="hover:text-foreground transition-colors" href="https://www.linkedin.com/in/sanjibmurmu/">LinkedIn</a>
          <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
        </div>
      </div>
    </section>);

};

export default ContactSection;