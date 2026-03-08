import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import WorkSection from "@/components/WorkSection";
import ContactSection from "@/components/ContactSection";
import sanjibPhoto from "@/assets/sanjib-photo.png";

const Index = () => {
  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden relative">
      {/* Background photo spanning hero + about */}
      <div className="absolute top-0 left-0 right-0 h-[200vh] z-0 pointer-events-none">
        <img
          src={sanjibPhoto}
          alt=""
          className="w-full h-full object-cover object-top opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <AboutSection />
        <SkillsSection />
        <WorkSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
