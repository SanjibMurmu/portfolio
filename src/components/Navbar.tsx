import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <motion.nav
  initial={{ y: -40, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6 }}
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    scrolled
      ? "bg-neutral-950/50 backdrop-blur-2xl border-b border-white/5"
      : "bg-transparent"
  }`}
>
  <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
    <span className="font-display text-xl font-bold text-gradient">
      Portfolio
    </span>

    <div className="flex gap-8 text-sm font-medium text-muted-foreground">
      {["about", "skills", "work", "projects", "contact"].map((item) => (
        <button
          key={item}
          onClick={() => scrollTo(item)}
          className="capitalize transition-colors duration-300 hover:text-white"
        >
          {item}
        </button>
      ))}
    </div>
  </div>

 {scrolled && (
  <>
    <div className="absolute bottom-0 left-0 h-px w-full bg-white/10" />
    <div className="pointer-events-none absolute bottom-0 left-0 h-10 w-full translate-y-full bg-gradient-to-b from-black/30 to-transparent" />
  </>
)}
</motion.nav>
  );
};

export default Navbar;