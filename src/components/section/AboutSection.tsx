"use client";

import { useSiteSettings } from "../core/SiteSettings";

export default function AboutSection() {
  const { copy, locale } = useSiteSettings();
  const credentials = locale === "id" ? [["Pendidikan", "Sarjana Terapan Teknik Informatika, PENS"], ["IPK", "3.8 / 4.0"], ["Lulus", "Juli 2026"]] : [["Education", "Bachelor of Applied Science in Informatics Engineering, PENS"], ["GPA", "3.8 / 4.0"], ["Graduated", "July 2026"]];
  return <section id="about" className="border-b bg-[var(--surface)]"><div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
    <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[var(--primary)]">01 / {copy.about.label}</p>
    <div className="mt-5 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]"><h2 className="max-w-lg text-3xl font-bold tracking-[-0.05em] text-[var(--text-primary)] sm:text-5xl">{copy.about.title}</h2><div className="max-w-2xl space-y-5 text-base leading-8 text-[var(--text-secondary)] sm:text-lg"><p className="font-medium text-[var(--text-primary)]">{copy.about.lead}</p><p>{copy.about.body}</p></div></div>
    <dl className="mt-10 grid gap-4 sm:grid-cols-3">{credentials.map(([label, value]) => <div key={label} className="border-l-2 border-[var(--primary)] pl-4"><dt className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--text-muted)]">{label}</dt><dd className="mt-1 text-sm font-semibold text-[var(--text-primary)]">{value}</dd></div>)}</dl>
    <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border bg-[var(--border)] sm:grid-cols-3">{copy.about.notes.map(([number, title, body]) => <article key={number} className="bg-[var(--surface)] p-6"><p className="font-mono text-xs font-bold text-[var(--primary)]">{number}</p><h3 className="mt-8 text-lg font-bold text-[var(--text-primary)]">{title}</h3><p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{body}</p></article>)}</div>
  </div></section>;
}
