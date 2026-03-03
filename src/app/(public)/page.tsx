import HeroSection from "@/components/section/HeroSection";
import AboutSection from "@/components/section/AboutSection";
import SkillSection from "@/components/section/SkillSection";
export default function HomePage() {
  return (
    <div className="pt-16">
      <HeroSection />
      <AboutSection />
      <SkillSection />
    </div>
  );
}
