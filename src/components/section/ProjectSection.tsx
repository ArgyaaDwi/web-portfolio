"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import AmbientParticles from "../core/AmbientParticles";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce with cart, payment, and admin dashboard.",
    image: "/images/project-1.png",
    tags: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Student Prediction System",
    description:
      "ML-based academic performance prediction using stacking ensemble.",
    image: "/images/projects/project-2.png",
    tags: ["Python", "FastAPI", "React", "MySQL"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "Collaborative task board with real-time updates and team roles.",
    image: "/images/projects/project-3.png",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "REST API Service",
    description: "Scalable RESTful API with JWT auth, rate limiting, and docs.",
    image: "/images/projects/project-4.png",
    tags: ["Laravel", "PHP", "MySQL", "Postman"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Personal portfolio built with Next.js and smooth animations.",
    image: "/images/projects/project-5.png",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Mobile Finance Tracker",
    description: "Cross-platform app to track daily expenses and budgets.",
    image: "/images/projects/project-6.png",
    tags: ["Flutter", "Dart", "Firebase"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

// Placeholder gradient per card when no image
const gradients = [
  "from-yellow-600/40 via-amber-700/30 to-[#0a0a0f]",
  "from-blue-600/40 via-indigo-700/30 to-[#0a0a0f]",
  "from-emerald-600/40 via-teal-700/30 to-[#0a0a0f]",
  "from-rose-600/40 via-pink-700/30 to-[#0a0a0f]",
  "from-purple-600/40 via-violet-700/30 to-[#0a0a0f]",
  "from-orange-600/40 via-red-700/30 to-[#0a0a0f]",
];

const ProjectCard = ({
  project,
  index,
  visible,
}: {
  project: Project;
  index: number;
  visible: boolean;
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="group relative flex flex-col rounded-2xl overflow-hidden border border-white/[0.07] hover:border-yellow-500/40 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_8px_40px_rgba(234,179,8,0.12)]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${0.1 + index * 0.08}s, transform 0.6s ease ${0.1 + index * 0.08}s, border 0.3s, background 0.3s, box-shadow 0.3s, translate 0.3s`,
      }}
    >
      {/* Thumbnail */}
      <div className="relative h-44 overflow-hidden">
        {!imgError ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center`}
          >
            <span className="text-4xl font-black text-white/10 select-none">
              {project.title.charAt(0)}
            </span>
          </div>
        )}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-60" />

        {/* Featured badge */}
        {/* {project.featured && (
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-yellow-500 text-black text-[10px] font-black uppercase tracking-wider">
            Featured
          </div>
        )} */}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-4">
        {/* Title */}
        <h3 className="text-base font-black text-white group-hover:text-yellow-400 transition-colors duration-300 leading-snug">
          {project.title}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-semibold text-gray-500 group-hover:border-yellow-500/20 group-hover:text-gray-400 transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons — pushed to bottom */}
        <div className="flex gap-2 mt-auto pt-2">
          {/* <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black text-xs font-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(234,179,8,0.35)]"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Live Demo
          </a> */}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl border border-white/10 hover:border-yellow-500/40 hover:bg-yellow-500/10 text-gray-400 hover:text-yellow-400 text-xs font-black transition-all duration-300"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#0a0a0f] overflow-hidden"
    >
      {/* Background grid */}
      {/* <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      /> */}

      {/* Glow orbs */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-yellow-500 rounded-full opacity-5 blur-[130px]" />
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-amber-400 rounded-full opacity-5 blur-[100px]" />
      <AmbientParticles />

      <div ref={ref} className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div>
            <p className="text-gray-600 text-sm tracking-[0.3em] uppercase font-medium mb-2">
              What I&apos;ve built
            </p>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-none">
              My{" "}
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "2.5px #eab308" }}
              >
                Projects
              </span>
            </h2>
            <div className="mt-4 w-20 h-1 bg-yellow-500/40 rounded-full" />
          </div>

          {/* View All button */}
         
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              visible={visible}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-12 flex justify-center"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.7s ease 0.7s",
          }}
        >
          <Link
            href="https://github.com/ArgyaaDwi"
            className="group relative px-10 py-4 bg-yellow-400 text-black font-black rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(234,179,8,0.35)] hover:-translate-y-0.5 text-sm"
          >
            <span className="relative z-10 flex items-center gap-2">
              More Projects
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
            <div className="absolute inset-0 bg-yellow-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
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

export default Projects;
