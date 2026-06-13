import HeroSection from "@/components/section/HeroSection";
import AboutSection from "@/components/section/AboutSection";
import ExperienceSection from "@/components/section/ExperienceSection";
import SkillSection from "@/components/section/SkillSection";
import Projects from "@/components/section/ProjectSection";
import Contact from "@/components/section/ContactSection";
export default function HomePage() {
  return (
    <div className="pt-16">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <Projects />
      <SkillSection />
      <Contact />
    </div>
  );
}
