"use client";

import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { useSiteSettings } from "./SiteSettings";

export default function Footer() {
  const { copy } = useSiteSettings();
  return <footer className="bg-[var(--background)]"><div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:px-8 md:grid-cols-[1fr_auto] md:items-end">
    <div><p className="text-xl font-bold tracking-[-0.04em] text-[var(--text-primary)]">Argya<span className="text-[var(--primary)]">Dwi</span></p><p className="mt-3 max-w-md text-sm leading-6 text-[var(--text-secondary)]">{copy.footer.text}</p><p className="mt-6 font-mono text-[11px] text-[var(--text-muted)]">© {new Date().getFullYear()} Argya Dwi</p></div>
    <div className="flex flex-wrap gap-2"><a href="https://github.com/ArgyaaDwi" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full border text-[var(--text-secondary)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]" aria-label="GitHub"><Github className="h-4 w-4" /></a><a href="https://www.linkedin.com/in/argya-dwi/" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full border text-[var(--text-secondary)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a><a href="mailto:ferdinandargya@gmail.com" className="grid h-10 w-10 place-items-center rounded-full border text-[var(--text-secondary)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]" aria-label="Email"><Mail className="h-4 w-4" /></a><Link href="#home" className="inline-flex h-10 items-center gap-2 rounded-full border px-4 text-sm font-semibold text-[var(--text-secondary)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]">{copy.footer.back}<ArrowUpRight className="h-4 w-4" /></Link></div>
  </div></footer>;
}
