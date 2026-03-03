"use client";

import { useEffect, useRef, useState } from "react";
const tabs = ["Frontend", "Backend", "Tools"] as const;
type Tab = (typeof tabs)[number];

const skills: Record<Tab, { name: string; icon: string }[]> = {
  Frontend: [
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Tailwind",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "FLutter",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    },
  ],
  Backend: [
    {
      name: "PHP",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },

    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Laravel",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
  ],
  Tools: [
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Postman",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    },
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "Trello",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg",
    },
  ],
};

const SkillSection = () => {
  const [activeTab, setActiveTab] = useState<Tab>("Frontend");
  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleTabChange = (tab: Tab) => {
    if (tab === activeTab) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveTab(tab);
      setAnimating(false);
    }, 180);
  };

  return (
    <section
      id="skills"
      className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#0a0a0f] overflow-hidden"
    >
    {/* <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]"
    > */}
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-yellow-500 rounded-full opacity-5 blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-amber-400 rounded-full opacity-5 blur-[100px]" />

      <div ref={ref} className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div
          className="mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <p className="text-gray-600 text-sm tracking-[0.3em] uppercase font-medium mb-2">
            What I work with
          </p>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-none">
            My{" "}
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "2.5px #eab308" }}
            >
              Skills
            </span>
          </h2>
          <div className="mt-4 w-20 h-1 bg-yellow-500/40 rounded-full" />
        </div>

        {/* Tab switcher — underline style */}
        <div
          className="flex gap-8 border-b border-white/10 mb-10"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.7s ease 0.2s",
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className="relative pb-3 text-sm font-bold tracking-wider uppercase transition-colors duration-300"
              style={{
                color: activeTab === tab ? "#eab308" : "#6b7280",
              }}
            >
              {tab}
              {/* Underline indicator */}
              <span
                className="absolute bottom-0 left-0 h-[2px] bg-yellow-500 rounded-full transition-all duration-300"
                style={{ width: activeTab === tab ? "100%" : "0%" }}
              />
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4"
          style={{
            opacity: animating ? 0 : visible ? 1 : 0,
            transform: animating ? "translateY(8px)" : "translateY(0)",
            transition: "opacity 0.25s ease, transform 0.25s ease",
          }}
        >
          {skills[activeTab].map((skill, i) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/[0.03] hover:bg-yellow-500/10 border border-white/[0.06] hover:border-yellow-500/40 transition-all duration-300 hover:-translate-y-1 cursor-default"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.5s ease ${0.3 + i * 0.05}s, transform 0.5s ease ${0.3 + i * 0.05}s, background 0.3s, border 0.3s, translate 0.3s`,
              }}
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
                  style={
                    // GitHub icon is white-on-transparent — invert to show on dark bg
                    skill.name === "GitHub"
                      ? { filter: "invert(1)" }
                      : undefined
                  }
                />
              </div>
              <span className="text-xs font-semibold text-gray-500 group-hover:text-yellow-400 transition-colors duration-300 text-center leading-tight">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
