"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-600 rounded-full opacity-5 blur-[150px]" />
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
          <div className="order-2 lg:order-1 text-center lg:text-left space-y-8">
            <div
              className="space-y-3"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition:
                  "opacity 0.8s ease 0.35s, transform 0.8s ease 0.35s",
              }}
            >
              <p className="text-gray-500 text-lg tracking-[0.3em] font-light">
                Hello, I&apos;m
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
            <p
              className="text-base sm:text-lg text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed text-justify"
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
            <div
              className="space-y-4"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition:
                  "opacity 0.8s ease 0.95s, transform 0.8s ease 0.95s",
              }}
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="#about"
                  className="group relative px-8 py-3.5 bg-yellow-400 text-black font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] hover:-translate-y-0.5 text-center"
                >
                  <span className="relative z-10">Learn More</span>
                  <div className="absolute inset-0 bg-yellow-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Link>
                <a
                  href="https://drive.google.com/drive/folders/1nWNXm41Qr6Jhq7s91Tv0Xcr1OPQum2sY?usp=sharing"
                  target="_blank"
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
              <div className="flex items-center gap-3 justify-center lg:hidden">
                <a
                  href="https://www.linkedin.com/in/argya-dwi/"
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
                  href="https://github.com/ArgyaaDwi"
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
                  href="mailto:ferdinandargya@gmail.com"
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
          <div
            className="order-1 lg:order-2 hidden lg:flex justify-center lg:justify-end"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(32px)",
              transition: "opacity 1s ease 0.4s, transform 1s ease 0.4s",
            }}
          >
            <div className="relative pb-16">
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
              <div className="absolute inset-0 bg-yellow-500 rounded-3xl opacity-20 blur-3xl scale-90" />
              <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden border-2 border-yellow-500/40 shadow-[0_0_60px_rgba(234,179,8,0.2)]">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/30 via-amber-600/20 to-[#0a0a0f]" />

                <Image
                  src="/images/foto26-1b1.png"
                  alt="Argya"
                  fill
                  className="object-contain object-bottom scale-100"  
                  priority
                />
              </div>
              <div className="absolute mt-5 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-yellow-500/10 p-2 border border-yellow-500/20 rounded-full">
                <a
                  href="https://www.linkedin.com/in/argya-dwi/"
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
                  href="https://github.com/ArgyaaDwi"
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
                  href="mailto:ferdinandargya@gmail.com"
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
          </div>
        </div>
      </div>
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
