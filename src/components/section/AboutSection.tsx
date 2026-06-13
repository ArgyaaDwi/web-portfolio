"use client";

import { useEffect, useRef, useState } from "react";
import AmbientParticles from "../core/AmbientParticles";

const traits = [
  {
    num: "01",
    title: "Adaptive",
    desc: "Quick to adjust to new technologies, team environments, and evolving challenges without losing momentum.",
  },
  {
    num: "02",
    title: "Curious Learner",
    desc: "Always hungry for knowledge — from web development to data science, learning is a way of life.",
  },
  {
    num: "03",
    title: "Team Player",
    desc: "Believing great products come from great collaboration — open, communicative, and supportive by nature.",
  },
];

const About = () => {
  const [visible, setVisible] = useState(false);
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

  return (
    <section
      id="about"
      className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#0a0a0f] overflow-hidden"
    >
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-yellow-400/20 rounded-full opacity-40 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-amber-400/20 rounded-full opacity-30 blur-3xl" />
      <AmbientParticles />
      <div ref={ref} className="container mx-auto max-w-6xl relative z-10">
        <div
          className="mb-16 lg:mb-20"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <p className="text-gray-600 text-sm tracking-[0.3em] uppercase font-medium mb-2">
            Get to know
          </p>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-none">
            About{" "}
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "2.5px #eab308" }}
            >
              Me
            </span>
          </h2>
          <div className="mt-4 w-20 h-1 bg-yellow-500/40 rounded-full" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div
            className="space-y-6"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-24px)",
              transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
            }}
          >
            <h3 className="text-2xl sm:text-3xl font-black text-gray-300">
              Who am I?
            </h3>

            <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
              A dedicated 8th-semester Informatics Engineering student at{" "}
              <span className="font-bold text-gray-300">
                Politeknik Elektronika Negeri Surabaya
              </span>
              , driven by a strong passion for self-improvement and continuous
              learning.
            </p>

            <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
              Proficient in front-end web development using modern technologies
              such as{" "}
              <span className="font-bold text-gray-300">
                Tailwind, JavaScript, and React
              </span>
              , with hands-on experience in backend development and{" "}
              <span className="font-bold text-yellow-400">RESTful API</span>{" "}
              implementation. Currently deepening expertise in{" "}
              <span className="font-bold text-yellow-400">
                Data Science & Machine Learning
              </span>
              , and open to internship opportunities. Final-year Informatics
              Engineering student at PENS with hands-on experience in developing
              robust web applications and Enterprise Resource Planning (ERP)
              systems. Proficient in delivering end-to-end solutions using
              Laravel, RESTful APIs, React, and Tailwind CSS. Adept at
              optimizing complex backend workflows and integrating systems.
              Passionate about continuous learning, currently exploring Data
              Science, and actively seeking full-time opportunities as a
              Software Engineer or Fullstack Developer.
            </p>
          </div>
          <div
            className="space-y-4"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(24px)",
              transition: "opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s",
            }}
          >
            <h3 className="text-2xl sm:text-3xl font-black text-gray-300 mb-6">
              What Drives Me
            </h3>

            {traits.map((trait, i) => (
              <div
                key={trait.num}
                className="group flex gap-4 p-4 rounded-2xl bg-white/[0.03] hover:bg-yellow-500/[0.06] border border-yellow-300/10 hover:border-white/25 transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(16px)",
                  transition: `opacity 0.6s ease ${0.5 + i * 0.1}s, transform 0.6s ease ${0.5 + i * 0.1}s, background 0.3s, border 0.3s, translate 0.3s`,
                }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-black/15 group-hover:bg-black/25 flex items-center justify-center transition-colors duration-300">
                  <span className="text-xs font-black text-yellow-400">
                    {trait.num}
                  </span>
                </div>
                <div>
                  <h4 className="text-base font-black text-white group-hover:text-yellow-400 transition-colors duration-300">
                    {trait.title}
                  </h4>
                  <p className="text-sm text-gray-400 mt-1 leading-relaxed">
                    {trait.desc}
                  </p>
                </div>
              </div>
            ))}
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

export default About;
