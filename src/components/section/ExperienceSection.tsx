"use client";

import { useEffect, useRef, useState } from "react";
import { Building2, CalendarRange } from "lucide-react";
import AmbientParticles from "../core/AmbientParticles";

interface ExperienceItem {
  id: number;
  position: string;
  company: string;
  descriptions: string[];
  period: string;
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    position: "Fullstack Developer Intern",
    company: "CV. DB Klik",
    descriptions: [
      "Engineered features for the Omnichannel ERP using Laravel, optimizing internal supply chain, inventory control, and transaction management.",
      "Automated complex operational workflows, including cross-warehouse stock mutations and multi-stage payments, to eliminate manual errors.",
      "Integrated API webhooks and built a Stock History module for seamless catalog synchronization across the B2B portal and multiple marketplaces.",
    ],
    period: "March 2026 - Now",
  },
  {
    id: 2,
    position: "Fullstack Web Developer",
    company: "PT. ALP Petro Industry",
    descriptions: [
      "Developed web-based applications to address the company's internal operational needs.",
      "Collaborated with cross-functional teams to ensure the systems align with business requirements.",
    ],
    period: "July 2024 - Jan 2025",
  },
  {
    id: 3,
    position: "Product Manager SleepDiary",
    company: "AgileTeknik",
    descriptions: [
      "Applied Agile methodology to manage the project, ensuring iterative progress, collaboration, and flexibility throughout the development cycle.",
      "Coordinated cross-functional teams, including developers, designers, and testers, to keep goals and deadlines aligned.",
      "Drove the product through to successful deployment on the Play Store.",
    ],
    period: "Feb 2024 - May 2024",
  },
];

const ExperienceSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.12 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#0a0a0f] px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="absolute left-0 top-1/4 h-72 w-72 rounded-full bg-yellow-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-amber-400/10 blur-[120px]" />
      <AmbientParticles />

      <div ref={ref} className="container relative z-10 mx-auto max-w-6xl">
        <div
          className="mb-16 max-w-2xl"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-gray-600">
            Where I&apos;ve contributed
          </p>
          <h2 className="text-5xl leading-none font-black text-white sm:text-6xl lg:text-7xl">
            My{" "}
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "2.5px #eab308" }}
            >
              Experience
            </span>
          </h2>
          <div className="mt-4 h-1 w-20 rounded-full bg-yellow-500/40" />
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-yellow-500/0 via-yellow-500/40 to-yellow-500/0 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">
            {experiences.map((experience, index) => {
              const isRight = index % 2 === 1;

              return (
                <div
                  key={experience.id}
                  className={`relative grid grid-cols-1 md:grid-cols-2 ${
                    isRight ? "md:[&>*:first-child]:col-start-2" : ""
                  }`}
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible
                      ? "translateY(0)"
                      : `translateY(${18 + index * 2}px)`,
                    transition: `opacity 0.65s ease ${0.15 + index * 0.12}s, transform 0.65s ease ${0.15 + index * 0.12}s`,
                  }}
                >
                  <div
                    className={`relative ml-12 rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.18)] transition-colors duration-300 hover:border-yellow-500/40 hover:bg-yellow-500/[0.06] md:ml-0 ${
                      isRight ? "md:ml-10" : "md:mr-10"
                    }`}
                  >
                    <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
                      <div className="space-y-2">
                        <p className="text-lg font-semibold text-white sm:text-2xl">
                          {experience.position}
                        </p>
                      </div>

                      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-gray-300">
                        <CalendarRange className="h-4 w-4 text-yellow-400" />
                        {experience.period}
                      </div>
                    </div>

                    <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-yellow-400">
                      <Building2 className="h-4 w-4" />
                      {experience.company}
                    </div>

                    <ul className="space-y-3 text-sm leading-relaxed text-gray-400 sm:text-base">
                      {experience.descriptions.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-yellow-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="absolute left-4 top-8 flex h-6 w-6 -translate-x-1/2 items-center justify-center md:left-1/2">
                    <div className="h-4 w-4 rounded-full border-4 border-[#0a0a0f] bg-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.5)]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes ambientFloat {
          0%,
          100% {
            transform: translateY(0px) scale(1);
            opacity: 0.18;
          }
          50% {
            transform: translateY(-12px) scale(1.35);
            opacity: 0.5;
          }
        }
      `}</style>
    </section>
  );
};

export default ExperienceSection;
