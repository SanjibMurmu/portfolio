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
    // Close the mobile menu automatically after clicking a link
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({behavior:"smooth"});
    }, 150);
  };

  const navLinks = ["about", "skills", "journey", "projects", "contact"];

  return (
    <div className="fixed top-6 left-0 w-full flex justify-center z-50 pointer-events-none px-4">
      {/* Outer container centers the nav and keeps it fixed */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring", damping: 20, stiffness: 200 }}
        className={`pointer-events-auto overflow-hidden transition-all duration-500 ease-in-out border border-white/10 shadow-2xl backdrop-blur-2xl ${
          scrolled || isMobileMenuOpen ? "bg-neutral-950/80" : "bg-neutral-950/40"
        } ${
          // Dynamic Island shape logic: Pill shape on desktop/closed, rounded rect when expanded
          isMobileMenuOpen
            ? "w-full max-w-sm rounded-[2rem]"
            : "w-full max-w-4xl rounded-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-3">

          {/* Logo */}
          <img
            src="/sanju.svg"
            alt="Portfolio Logo"
            className="h-10 w-auto object-contain cursor-pointer"
            onClick={() => window.scrollTo({ top: 0})}
          />

          {/* Desktop Links (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            {navLinks.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="capitalize transition-colors duration-300 hover:text-white"
              >
                {item}
              </button>
            ))}

            {/* Highlighted Resume Button (Desktop) */}
            <a
              href="/resume.pdf"
              download="Sanjib_Murmu_Resume.pdf"
              className="ml-2 px-4 py-1.5 text-white bg-orange-600 hover:bg-orange-500 rounded-full font-medium transition-all shadow-[0_0_15px_rgba(234,88,12,0.4)] hover:shadow-[0_0_20px_rgba(234,88,12,0.6)]"
            >
              Resume
            </a>
          </div>

          {/* Mobile Hamburger Button (Hidden on Desktop) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors outline-none"
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
              className={`transition-transform duration-300 ${isMobileMenuOpen ? "rotate-90" : "rotate-0"}`}
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
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="md:hidden border-t border-white/10"
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

                {/* Highlighted Resume Button (Mobile) */}
                <a
                  href="/resume.pdf"
                  download="Sanjib_Murmu_Resume.pdf"
                  className="mt-2 px-8 py-2.5 text-white bg-orange-600 hover:bg-orange-500 rounded-full font-medium transition-all shadow-[0_0_15px_rgba(234,88,12,0.4)]"
                >
                  Download Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar;
