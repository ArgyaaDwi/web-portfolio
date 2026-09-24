"use client";

import { useSiteSettings } from "../core/SiteSettings";

export default function AboutSection() {
  const { copy } = useSiteSettings();
  return <section id="about" className="border-b bg-[var(--surface)]"><div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
    <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[var(--primary)]">01 / {copy.about.label}</p>
    <div className="mt-5 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]"><h2 className="max-w-lg text-3xl font-bold tracking-[-0.05em] text-[var(--text-primary)] sm:text-5xl">{copy.about.title}</h2><div className="max-w-2xl space-y-5 text-base leading-8 text-[var(--text-secondary)] sm:text-lg"><p className="font-medium text-[var(--text-primary)]">{copy.about.lead}</p><p>{copy.about.body}</p></div></div>
    <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border bg-[var(--border)] sm:grid-cols-3">{copy.about.notes.map(([number, title, body]) => <article key={number} className="bg-[var(--surface)] p-6"><p className="font-mono text-xs font-bold text-[var(--primary)]">{number}</p><h3 className="mt-8 text-lg font-bold text-[var(--text-primary)]">{title}</h3><p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{body}</p></article>)}</div>
  </div></section>;
}
