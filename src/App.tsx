import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loader from "./components/Loader";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const visited = sessionStorage.getItem("portfolio-loader");

    if (!visited) {
      setLoading(true);

      const timer = setTimeout(() => {
        sessionStorage.setItem("portfolio-loader", "true");
        setLoading(false);
      }, 5100); // match your GIF duration

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <AnimatePresence mode="wait">
          {loading ? (
            <Loader key="loader" />
          ) : (
            <motion.div
              key="website"
              initial={{
                opacity: 0,
                y: 20,
                filter: "blur(8px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transitionEnd: { filter: "none" },
              }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
            >
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </motion.div>
          )}
        </AnimatePresence>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;