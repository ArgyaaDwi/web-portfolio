import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
export default function HomePage() {
  return (
    <div className="pt-16">
      {/* Hero Section - Example */}
      {/* <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
            This is where your content sections will go
          </p>
        </div>
      </section> */}
      <HeroSection />
      <AboutSection />
      {/* Add your other sections here */}
      {/* 
      <section id="about">...</section>
      <section id="projects">...</section>
      <section id="skills">...</section>
      <section id="contact">...</section>
      */}
    </div>
  );
}
