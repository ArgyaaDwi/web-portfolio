"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const roles = [
  "Full Stack Developer",
  "API Integration",
  "React & Next.js Dev",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  // Fade in on mount
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 80);
    } else if (!isDeleting && charIndex > current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c - 1);
      }, 40);
    } else {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]"
    >
      {/* Animated background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glowing orbs */}
      {/* <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500 rounded-full opacity-10 blur-[120px] animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-400 rounded-full opacity-8 blur-[100px]"
        style={{ animation: "pulse 4s ease-in-out infinite 1s" }}
      /> */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-600 rounded-full opacity-5 blur-[150px]" />

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-30"
          style={{
            left: `${10 + i * 8}%`,
            top: `${20 + (i % 5) * 15}%`,
            animation: `float ${3 + (i % 3)}s ease-in-out infinite ${i * 0.4}s`,
          }}
        />
      ))}

      <div
        className="container mx-auto max-w-6xl px-6 lg:px-8 relative z-10"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-20 lg:py-0">
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left space-y-8">
            {/* Badge */}
            {/* <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-sm font-medium"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
              }}
            >
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              Available for work
            </div> */}

            {/* Heading */}
            <div
              className="space-y-3"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition:
                  "opacity 0.8s ease 0.35s, transform 0.8s ease 0.35s",
              }}
            >
              <p className="text-gray-500 text-lg tracking-[0.3em] uppercase font-light">
                Hello, World! I&apos;m
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-none tracking-tight">
                Argya <span className="text-transparent"></span>
                <span
                  className="text-transparent"
                  style={{
                    WebkitTextStroke: "2px #eab308",
                  }}
                >
                  {""}Dwi
                </span>
              </h1>
            </div>

            {/* Typewriter role */}
            <div
              className="h-10 flex items-center justify-center lg:justify-start"
              style={{
                opacity: visible ? 1 : 0,
                transition: "opacity 0.8s ease 0.5s",
              }}
            >
              <span className="text-xl sm:text-2xl font-semibold text-yellow-400 font-mono">
                {displayed}
                <span className="animate-pulse text-yellow-300">|</span>
              </span>
            </div>

            {/* Description */}
            <p
              className="text-base sm:text-lg text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition:
                  "opacity 0.8s ease 0.65s, transform 0.8s ease 0.65s",
              }}
            >
              Passionate developer crafting high-performance web experiences
              with modern technologies. I turn complex problems into elegant,
              user-friendly solutions.
            </p>

            {/* Stats row */}
            {/* <div
              className="flex gap-8 justify-center lg:justify-start"
              style={{
                opacity: visible ? 1 : 0,
                transition: "opacity 0.8s ease 0.8s",
              }}
            >
              {[
                { num: "2+", label: "Years Exp" },
                { num: "20+", label: "Projects" },
                { num: "10+", label: "Clients" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl font-black text-yellow-400">
                    {stat.num}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div> */}

            {/* CTAs */}
            <div
              className="space-y-4"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition:
                  "opacity 0.8s ease 0.95s, transform 0.8s ease 0.95s",
              }}
            >
              {/* Main buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="#projects"
                  className="group relative px-8 py-3.5 bg-yellow-500 text-black font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] hover:-translate-y-0.5 text-center"
                >
                  <span className="relative z-10">Learn More</span>
                  <div className="absolute inset-0 bg-yellow-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Link>
                <a
                  href="/cv.pdf"
                  download
                  className="group flex items-center justify-center gap-2 px-8 py-3.5 text-yellow-400 font-bold rounded-xl border border-yellow-500/40 hover:border-yellow-500 hover:bg-yellow-500/10 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"
                    />
                  </svg>
                  Download CV
                </a>
              </div>

              {/* Social links — mobile: show here; desktop: hidden (shown below image) */}
              <div className="flex items-center gap-3 justify-center lg:hidden">
                <a
                  href="https://linkedin.com/in/argya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#111118] border border-yellow-500/20 hover:border-yellow-500/60 hover:bg-yellow-500/10 transition-all duration-300 text-gray-400 hover:text-yellow-400"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="text-xs font-semibold">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/argya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#111118] border border-yellow-500/20 hover:border-yellow-500/60 hover:bg-yellow-500/10 transition-all duration-300 text-gray-400 hover:text-yellow-400"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  <span className="text-xs font-semibold">GitHub</span>
                </a>
                <a
                  href="mailto:argya@email.com"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#111118] border border-yellow-500/20 hover:border-yellow-500/60 hover:bg-yellow-500/10 transition-all duration-300 text-gray-400 hover:text-yellow-400"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-xs font-semibold">Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Image — hidden on mobile */}
          <div
            className="order-1 lg:order-2 hidden lg:flex justify-center lg:justify-end"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(32px)",
              transition: "opacity 1s ease 0.4s, transform 1s ease 0.4s",
            }}
          >
            <div className="relative pb-16">
              {/* Decorative ring */}
              <div
                className="absolute inset-0 rounded-full border border-yellow-500/20"
                style={{
                  width: "calc(100% + 48px)",
                  height: "calc(100% + 48px)",
                  top: "-24px",
                  left: "-24px",
                  animation: "spin 20s linear infinite",
                  borderStyle: "dashed",
                }}
              />
              <div
                className="absolute inset-0 rounded-full border border-yellow-400/10"
                style={{
                  width: "calc(100% + 80px)",
                  height: "calc(100% + 80px)",
                  top: "-40px",
                  left: "-40px",
                  animation: "spin 30s linear infinite reverse",
                }}
              />

              {/* Glow behind image */}
              <div className="absolute inset-0 bg-yellow-500 rounded-full opacity-20 blur-3xl scale-90" />

              {/* Image container — hexagon-style clip */}
              <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-yellow-500/40 shadow-[0_0_60px_rgba(234,179,8,0.2)]">
                {/* Yellow-to-dark gradient bg inside circle */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/30 via-amber-600/20 to-[#0a0a0f]" />

                <Image
                  src="/images/heroHD.png"
                  alt="Argya"
                  fill
                  className="object-contain object-bottom scale-105"
                  priority
                />
              </div>

              {/* Floating skill badges */}
              <div
                className="absolute -left-8 top-1/6 bg-[#111118] border border-yellow-500/30 rounded-xl px-3 py-2 shadow-xl"
                style={{ animation: "floatBadge 4s ease-in-out infinite" }}
              >
                <span className="text-xs text-yellow-400 font-mono font-bold">
                  API Integration
                </span>
              </div>
              <div
                className="absolute -right-6 top-1/3 bg-[#111118] border border-yellow-500/30 rounded-xl px-3 py-2 shadow-xl"
                style={{ animation: "floatBadge 4s ease-in-out infinite 1s" }}
              >
                <span className="text-xs text-yellow-400 font-mono font-bold">
                  React
                </span>
              </div>
              {/* <div
                className="absolute -left-4 bottom-1/2 bg-[#111118] border border-yellow-500/30 rounded-xl px-3 py-2 shadow-xl"
                style={{ animation: "floatBadge 4s ease-in-out infinite 2s" }}
              >
                <span className="text-xs text-yellow-400 font-mono font-bold">
                  Tailwind
                </span>
              </div> */}

              {/* Social links bar — below circle, desktop only */}
              <div className="absolute  left-1/2 -translate-x-1/2 flex items-center gap-2 bg-yellow-500/10 p-2 border border-yellow-500/20 rounded-full">
                <a
                  href="https://linkedin.com/in/argya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#111118] border border-yellow-500/20 hover:border-yellow-500/60 hover:bg-yellow-500/10 transition-all duration-300 text-gray-400 hover:text-yellow-400 whitespace-nowrap"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="text-xs font-semibold">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/argya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#111118] border border-yellow-500/20 hover:border-yellow-500/60 hover:bg-yellow-500/10 transition-all duration-300 text-gray-400 hover:text-yellow-400 whitespace-nowrap"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  <span className="text-xs font-semibold">GitHub</span>
                </a>
                <a
                  href="mailto:argya@email.com"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#111118] border border-yellow-500/20 hover:border-yellow-500/60 hover:bg-yellow-500/10 transition-all duration-300 text-gray-400 hover:text-yellow-400 whitespace-nowrap"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-xs font-semibold">Email</span>
                </a>
              </div>
            </div>{" "}
            {/* <-- penutup untuk <div className="relative pb-16"> */}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600"
        style={{ animation: "bounce 2s infinite" }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent" />
      </div> */}

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        @keyframes floatBadge {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(6px);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
