"use client";

import { useEffect, useRef, useState } from "react";

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
      className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-yellow-500 overflow-hidden"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-yellow-300 rounded-full opacity-40 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-amber-600 rounded-full opacity-30 blur-3xl" />

      <div ref={ref} className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div
          className="mb-16 lg:mb-20"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <p className="text-black/50 text-sm tracking-[0.3em] uppercase font-medium mb-2">
            Get to know
          </p>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-black leading-none">
            About{" "}
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "2.5px #000" }}
            >
              Me
            </span>
          </h2>
          <div className="mt-4 w-20 h-1 bg-black/30 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Who am I */}
          <div
            className="space-y-6"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-24px)",
              transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
            }}
          >
            <h3 className="text-2xl sm:text-3xl font-black text-black">
              Who am I?
            </h3>

            <p className="text-base sm:text-lg text-black/75 leading-relaxed">
              A dedicated 8th-semester Informatics Engineering student at{" "}
              <span className="font-bold text-black">
                Politeknik Elektronika Negeri Surabaya
              </span>
              , driven by a strong passion for self-improvement and continuous
              learning.
            </p>

            <p className="text-base sm:text-lg text-black/75 leading-relaxed">
              Proficient in front-end web development using modern technologies
              such as{" "}
              <span className="font-bold text-black">
                Tailwind, JavaScript, and React
              </span>
              , with hands-on experience in backend development and{" "}
              <span className="font-bold text-black">RESTful API</span>{" "}
              implementation. Currently deepening expertise in{" "}
              <span className="font-bold text-black">
                Data Science & Machine Learning
              </span>
              , and open to internship opportunities.
            </p>
          </div>

          {/* Right: What Drives Me */}
          <div
            className="space-y-4"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(24px)",
              transition: "opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s",
            }}
          >
            <h3 className="text-2xl sm:text-3xl font-black text-black mb-6">
              What Drives Me
            </h3>

            {traits.map((trait, i) => (
              <div
                key={trait.num}
                className="group flex gap-4 p-4 rounded-2xl bg-black/5 hover:bg-black/10 border border-black/10 hover:border-black/25 transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(16px)",
                  transition: `opacity 0.6s ease ${0.5 + i * 0.1}s, transform 0.6s ease ${0.5 + i * 0.1}s, background 0.3s, border 0.3s, translate 0.3s`,
                }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-black/15 group-hover:bg-black/25 flex items-center justify-center transition-colors duration-300">
                  <span className="text-xs font-black text-black">
                    {trait.num}
                  </span>
                </div>
                <div>
                  <h4 className="text-base font-black text-black">
                    {trait.title}
                  </h4>
                  <p className="text-sm text-black/65 mt-1 leading-relaxed">
                    {trait.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
