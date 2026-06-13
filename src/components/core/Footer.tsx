"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import AmbientParticles from "./AmbientParticles";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/ArgyaaDwi",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/argya-dwi/",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:ferdinandargya@gmail.com",
    icon: Mail,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/8 bg-[#07070b] text-gray-300">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(234,179,8,0.14),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.1),transparent_28%)]" />
      <AmbientParticles colorClassName="bg-yellow-400/25" count={14} />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div className="max-w-xl">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-white">
              Argya Dwi
            </p>
            {/* <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
              Building clean web products with a practical engineering mindset.
            </h2> */}
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-gray-400 sm:text-base">
              Frontend, backend, and product-minded execution for teams that
              care about usable interfaces, maintainable code, and steady
              delivery.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-400">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">
                <MapPin className="h-4 w-4 text-yellow-400" />
                Indonesia
              </span>
             
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.22em] text-gray-500">
              Navigate
            </h3>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:max-w-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors duration-300 hover:text-yellow-400"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.22em] text-gray-500">
              Connect
            </h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-gray-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-yellow-500/30 hover:bg-yellow-500/10 hover:text-yellow-400"
                    aria-label={social.name}
                  >
                    <Icon className="h-4 w-4" />
                    {social.name}
                  </a>
                );
              })}
            </div>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-gray-500">
              Open to internship opportunities, freelance collaboration, and
              product-focused development work.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/8 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Argya Dwi. All rights reserved.</p>
          <Link
            href="#home"
            className="inline-flex items-center gap-2 text-gray-400 transition-colors duration-300 hover:text-yellow-400"
          >
            Back to top
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes ambientFloat {
          0%,
          100% {
            transform: translateY(0px) scale(1);
            opacity: 0.16;
          }
          50% {
            transform: translateY(-10px) scale(1.35);
            opacity: 0.42;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
