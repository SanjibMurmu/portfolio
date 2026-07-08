import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import JourneySection from "@/components/JourneySection";
import ContactSection from "@/components/ContactSection";
import sanjibPhoto from "@/assets/sanjib-photo.png";
import React from "react";
import Projects from "@/components/Projects";

const Index = () => {
  return (
    // 1. Notice we changed 'overflow-x-hidden' to 'overflow-x-clip' here
    <div className="bg-background text-foreground min-h-screen overflow-x-clip relative">
      
      {/* 2. Navbar is placed at the very top inside the main div */}
      <Navbar />

      <div className="absolute top-0 left-0 right-0 h-[200vh] z-0 pointer-events-none">
        <img
          src={sanjibPhoto}
          alt=""
          className="w-full h-full object-cover object-top opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>

      <div className="relative z-10">
        <Hero />
        <AboutSection />
        <SkillsSection />
        <JourneySection />
        <Projects />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;