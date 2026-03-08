import { motion } from "framer-motion";

const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-4 right-4 z-50 flex items-center justify-between px-8 py-4 rounded-2xl glass-strong"
    >
      <span className="font-display text-xl font-bold text-gradient">Portfolio</span>
      <div className="flex gap-8 text-sm font-medium text-muted-foreground">
        {["about", "skills", "work", "contact"].map((item) => (
          <button
            key={item}
            onClick={() => scrollTo(item)}
            className="capitalize hover:text-foreground transition-colors duration-300"
          >
            {item}
          </button>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
