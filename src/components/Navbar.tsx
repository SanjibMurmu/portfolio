import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    // Close the mobile menu automatically after clicking a link
    setIsMobileMenuOpen(false); 
  };

  const navLinks = ["about", "skills", "work", "projects", "contact"];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || isMobileMenuOpen
          ? "bg-neutral-950/80 backdrop-blur-2xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-3">
        
        {/* Logo */}
        <img 
          src="/sanju.svg" 
          alt="Portfolio Logo" 
          className="h-16 w-auto object-contain -my-2 relative z-10" 
        />

        {/* Desktop Links (Hidden on Mobile) */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
          {navLinks.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="capitalize transition-colors duration-300 hover:text-white"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger Button (Hidden on Desktop) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden relative z-10 p-2 text-white/70 hover:text-white transition-colors"
          aria-label="Toggle Menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isMobileMenuOpen ? (
              <>
                {/* X / Close Icon */}
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                {/* Hamburger Menu Icon */}
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-neutral-950/90 border-t border-white/5"
          >
            <div className="flex flex-col items-center gap-6 py-8 px-4">
              {navLinks.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="capitalize text-lg font-medium text-white/70 hover:text-white transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative gradients */}
      {(scrolled || isMobileMenuOpen) && (
        <>
          <div className="absolute bottom-0 left-0 h-px w-full bg-white/10" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-10 w-full translate-y-full bg-gradient-to-b from-black/30 to-transparent" />
        </>
      )}
    </motion.nav>
  );
};

export default Navbar;