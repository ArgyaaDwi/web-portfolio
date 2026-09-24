"use client";

import Link from "next/link";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { useSiteSettings } from "../core/SiteSettings";

const roles = {
  id: ["Full-stack Developer", "Integrasi API", "Developer React & Next.js"],
  en: ["Full-stack Developer", "API Integration", "React & Next.js Developer"],
};

export default function HeroSection() {
  const { copy, locale } = useSiteSettings();
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const text = locale === "id" ? { greeting: "Halo, saya", learn: "Pelajari lebih lanjut", download: "Unduh CV", connect: "Mari terhubung" } : { greeting: "Hello, I am", learn: "Learn More", download: "Download CV", connect: "Let's connect" };

  useEffect(() => {
    const role = roles[locale][roleIndex];
    const timeout = window.setTimeout(() => {
      if (!isDeleting && charIndex <= role.length) {
        setDisplayedRole(role.slice(0, charIndex));
        setCharIndex((value) => value + 1);
      } else if (!isDeleting) {
        setIsDeleting(true);
      } else if (charIndex >= 0) {
        setDisplayedRole(role.slice(0, charIndex));
        setCharIndex((value) => value - 1);
      } else {
        setIsDeleting(false);
        setRoleIndex((value) => (value + 1) % roles[locale].length);
      }
    }, !isDeleting && charIndex > role.length ? 1600 : isDeleting ? 40 : 80);
    return () => window.clearTimeout(timeout);
  }, [charIndex, isDeleting, locale, roleIndex]);

  return <section id="home" className="border-b bg-[var(--background)]">
    <div className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[7fr_3fr] lg:py-24">
      <div>
        <p className="font-mono text-sm font-bold uppercase tracking-[0.16em] text-[var(--primary)]">{text.greeting}</p>
        <h1 className="mt-5 whitespace-nowrap text-6xl font-bold leading-[0.92] tracking-[-0.07em] text-[var(--text-primary)] sm:text-8xl lg:text-7xl xl:text-[7.5rem]">Argya <span className="text-[var(--primary)]">Dwi.</span></h1>
        <p className="mt-7 h-7 font-mono text-base font-semibold text-[var(--primary)]">{displayedRole}<span className="ml-0.5 animate-pulse">|</span></p>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--text-secondary)] sm:text-xl sm:leading-9">{copy.hero.intro}</p>
        <div className="mt-10 flex flex-wrap gap-3"><Link href="#about" className="inline-flex items-center gap-2 rounded-xl bg-[var(--primary)] px-6 py-3.5 text-base font-bold text-white transition hover:bg-[var(--primary-hover)]">{text.learn}</Link><a href="https://drive.google.com/drive/folders/1nWNXm41Qr6Jhq7s91Tv0Xcr1OPQum2sY?usp=sharing" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border bg-[var(--surface)] px-6 py-3.5 text-base font-bold text-[var(--text-primary)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"><Download className="h-4 w-4" />{text.download}</a></div>
      </div>
      <aside className="border-l pl-6 sm:pl-8 lg:pl-10"><p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--text-muted)]">{text.connect}</p><div className="mt-5 flex flex-col gap-3"><a href="https://www.linkedin.com/in/argya-dwi/" target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-xl border bg-[var(--surface)] px-4 py-3 text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"><span className="flex items-center gap-3"><Linkedin className="h-4 w-4" />LinkedIn</span><span className="font-mono text-xs text-[var(--text-muted)] group-hover:text-[var(--primary)]">/in/argya-dwi</span></a><a href="https://github.com/ArgyaaDwi" target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-xl border bg-[var(--surface)] px-4 py-3 text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"><span className="flex items-center gap-3"><Github className="h-4 w-4" />GitHub</span><span className="font-mono text-xs text-[var(--text-muted)] group-hover:text-[var(--primary)]">/ArgyaaDwi</span></a><a href="mailto:ferdinandargya@gmail.com" className="group flex items-center justify-between rounded-xl border bg-[var(--surface)] px-4 py-3 text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"><span className="flex items-center gap-3"><Mail className="h-4 w-4" />Email</span><span className="font-mono text-xs text-[var(--text-muted)] group-hover:text-[var(--primary)]">Say hello</span></a></div></aside>
    </div>
  </section>;
}
