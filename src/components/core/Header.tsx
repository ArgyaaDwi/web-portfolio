"use client";

import Link from "next/link";
import { Languages, Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { useSiteSettings } from "./SiteSettings";

const destinations = ["#home", "#about", "#experience", "#projects", "#skills", "#contact"];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { copy, locale, setLocale, theme, toggleTheme } = useSiteSettings();
  const labels = locale === "id" ? ["Beranda", "Tentang", "Pengalaman", "Proyek", "Keahlian", "Kontak"] : ["Home", "About", "Experience", "Projects", "Skills", "Contact"];

  const controls = <div className="flex items-center gap-1">
    <button type="button" onClick={toggleTheme} aria-label={copy.controls.theme} className="grid h-9 w-9 place-items-center rounded-full border bg-[var(--surface)] text-[var(--text-secondary)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]">{theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}</button>
    <button type="button" onClick={() => setLocale(locale === "id" ? "en" : "id")} aria-label={copy.controls.language} className="flex h-9 items-center gap-1 rounded-full border bg-[var(--surface)] px-3 font-mono text-[11px] font-bold text-[var(--text-secondary)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"><Languages className="h-3.5 w-3.5" />{locale.toUpperCase()}</button>
  </div>;

  return <header className="fixed inset-x-0 top-0 z-50 border-b bg-[var(--background)]">
    <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
      <Link href="#home" className="text-lg font-bold tracking-[-0.04em] text-[var(--text-primary)]">Argya<span className="text-[var(--primary)]">Dwi</span></Link>
      <div className="hidden items-center gap-5 lg:flex">{labels.map((label, index) => <Link key={destinations[index]} href={destinations[index]} className="text-sm font-medium text-[var(--text-secondary)] transition hover:text-[var(--primary)]">{label}</Link>)}</div>
      <div className="hidden lg:block">{controls}</div>
      <div className="flex items-center gap-2 lg:hidden">{controls}<button type="button" onClick={() => setOpen(true)} aria-label={copy.controls.menu} className="grid h-9 w-9 place-items-center rounded-full border bg-[var(--surface)] text-[var(--text-primary)]"><Menu className="h-4 w-4" /></button></div>
    </nav>
    {open && <><button type="button" aria-label="Close menu" onClick={() => setOpen(false)} className="fixed inset-0 bg-black/20" /><div className="absolute inset-x-4 top-3 rounded-2xl border bg-[var(--surface)] p-3 shadow-[0_18px_40px_var(--shadow)]"><div className="flex justify-end"><button type="button" onClick={() => setOpen(false)} className="grid h-9 w-9 place-items-center rounded-full text-[var(--text-secondary)]"><X className="h-4 w-4" /></button></div><div className="flex flex-col">{labels.map((label, index) => <Link key={destinations[index]} href={destinations[index]} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-sm font-semibold text-[var(--text-primary)] hover:bg-[var(--surface-soft)]">{label}</Link>)}</div></div></>}
  </header>;
}
