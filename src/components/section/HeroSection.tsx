"use client";

import Link from "next/link";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { useSiteSettings } from "../core/SiteSettings";

const roles = {
  id: ["Full-stack Developer", "Software Engineer", "Integrasi API"],
  en: ["Full-stack Developer", "Software Engineer", "API Integration"],
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

  return <section id="home" className="relative overflow-hidden border-b bg-[var(--background)]">
    <div aria-hidden="true" className="pointer-events-none absolute left-[7%] top-[13%] hidden h-12 w-12 border border-[var(--border-strong)] lg:block" />
    <div aria-hidden="true" className="pointer-events-none absolute left-[2%] top-[45%] hidden h-16 w-16 rotate-45 border border-[var(--border)] lg:block" />
    <div aria-hidden="true" className="pointer-events-none absolute left-[17%] bottom-[10%] hidden h-20 w-20 rotate-12 border border-[var(--border)] lg:block" />
    {/* <div aria-hidden="true" className="pointer-events-none absolute left-[43%] top-[11%] h-9 w-9 rotate-45 bg-[var(--primary)] opacity-[0.08]" /> */}
    <div aria-hidden="true" className="pointer-events-none absolute left-[51%] bottom-[21%] hidden h-14 w-14 border border-[var(--border-strong)] lg:block" />
    <div aria-hidden="true" className="pointer-events-none absolute right-[31%] top-[14%] hidden h-20 w-20 rotate-45 border border-[var(--primary)] opacity-25 lg:block" />
    <div aria-hidden="true" className="pointer-events-none absolute right-[10%] top-[26%] hidden h-12 w-12 rotate-12 border border-[var(--border-strong)] lg:block" />
    <div aria-hidden="true" className="pointer-events-none absolute right-[24%] bottom-[13%] hidden h-12 w-12 rotate-45 bg-[var(--primary)] opacity-[0.08] lg:block" />
    <div aria-hidden="true" className="pointer-events-none absolute right-[5%] bottom-[8%] hidden h-20 w-20 rotate-45 border border-[var(--border)] lg:block" />
    <div className="relative z-10 mx-auto grid min-h-[calc(100svh-4rem)] max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[7fr_3fr] lg:py-24">
      <div>
        <p className="font-mono text-sm font-bold uppercase tracking-[0.16em] text-[var(--primary)]">{text.greeting}</p>
        <h1 className="mt-5 whitespace-nowrap text-6xl font-bold leading-[0.92] tracking-[-0.07em] text-[var(--text-primary)] sm:text-8xl lg:text-7xl xl:text-[7.5rem]">Argya <span className="text-[var(--primary)]">Dwi.</span></h1>
        <p className="mt-7 h-7 font-mono text-base font-semibold text-[var(--primary)]">{displayedRole}<span className="ml-0.5 animate-pulse">|</span></p>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--text-secondary)] sm:text-xl sm:leading-9">{copy.hero.intro}</p>
        <div className="mt-10 flex flex-wrap gap-3"><Link href="#about" className="inline-flex items-center gap-2 rounded-xl bg-[var(--primary)] px-6 py-3.5 text-base font-bold text-white transition hover:bg-[var(--primary-hover)]">{text.learn}</Link><a href="https://drive.google.com/drive/folders/1nWNXm41Qr6Jhq7s91Tv0Xcr1OPQum2sY?usp=sharing" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border bg-[var(--surface)] px-6 py-3.5 text-base font-bold text-[var(--text-primary)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"><Download className="h-4 w-4" />{text.download}</a></div>
      </div>
      <aside className="mt-2 border-t pt-6 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"><p className="hidden font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--text-muted)] lg:block">{text.connect}</p><div className="grid grid-cols-3 gap-3 lg:mt-5 lg:flex lg:flex-col"><a href="https://www.linkedin.com/in/argya-dwi/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="group flex h-12 items-center justify-center rounded-xl border bg-[var(--surface)] text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--primary)] hover:text-[var(--primary)] lg:h-auto lg:justify-between lg:px-4 lg:py-3"><span className="flex items-center gap-3"><Linkedin className="h-4 w-4" /><span className="hidden lg:inline">LinkedIn</span></span><span className="hidden font-mono text-xs text-[var(--text-muted)] group-hover:text-[var(--primary)] lg:inline">/in/argya-dwi</span></a><a href="https://github.com/ArgyaaDwi" target="_blank" rel="noreferrer" aria-label="GitHub" className="group flex h-12 items-center justify-center rounded-xl border bg-[var(--surface)] text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--primary)] hover:text-[var(--primary)] lg:h-auto lg:justify-between lg:px-4 lg:py-3"><span className="flex items-center gap-3"><Github className="h-4 w-4" /><span className="hidden lg:inline">GitHub</span></span><span className="hidden font-mono text-xs text-[var(--text-muted)] group-hover:text-[var(--primary)] lg:inline">/ArgyaaDwi</span></a><a href="mailto:ferdinandargya@gmail.com" aria-label="Email" className="group flex h-12 items-center justify-center rounded-xl border bg-[var(--surface)] text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--primary)] hover:text-[var(--primary)] lg:h-auto lg:justify-between lg:px-4 lg:py-3"><span className="flex items-center gap-3"><Mail className="h-4 w-4" /><span className="hidden lg:inline">Email</span></span><span className="hidden font-mono text-xs text-[var(--text-muted)] group-hover:text-[var(--primary)] lg:inline">Say hello</span></a></div></aside>
    </div>
  </section>;
}
