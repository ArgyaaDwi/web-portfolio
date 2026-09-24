"use client";

import { useSiteSettings } from "../core/SiteSettings";

const entries = {
  id: [
    { period: "Mar 2026 - sekarang", role: "Fullstack Developer Intern", company: "CV. DB Klik", points: ["Mengembangkan fitur Omnichannel ERP untuk supply chain, inventori, dan transaksi.", "Mengotomasi mutasi stok antar-gudang dan pembayaran multi-tahap.", "Mengintegrasikan webhook dan Stock History untuk sinkronisasi katalog B2B dan marketplace."] },
    { period: "Jul 2024 - Jan 2025", role: "Fullstack Web Developer", company: "PT. ALP Petro Industry", points: ["Mengembangkan aplikasi web untuk kebutuhan operasional internal.", "Berkolaborasi lintas fungsi agar sistem sesuai kebutuhan bisnis."] },
    { period: "Feb 2024 - Mei 2024", role: "Product Manager", company: "SleepDiary / AgileTeknik", points: ["Mengelola delivery Agile bersama developer, designer, dan tester.", "Mengantarkan produk hingga rilis di Play Store."] },
  ],
  en: [
    { period: "Mar 2026 - present", role: "Fullstack Developer Intern", company: "CV. DB Klik", points: ["Developing Omnichannel ERP features for supply chain, inventory, and transactions.", "Automating cross-warehouse stock mutations and multi-stage payments.", "Integrating webhooks and Stock History for B2B and marketplace catalog synchronization."] },
    { period: "Jul 2024 - Jan 2025", role: "Fullstack Web Developer", company: "PT. ALP Petro Industry", points: ["Developed web applications for internal operational needs.", "Worked cross-functionally to align systems with business requirements."] },
    { period: "Feb 2024 - May 2024", role: "Product Manager", company: "SleepDiary / AgileTeknik", points: ["Managed Agile delivery with developers, designers, and testers.", "Took the product through to its Play Store release."] },
  ],
};

export default function ExperienceSection() {
  const { copy, locale } = useSiteSettings();
  return <section id="experience" className="relative overflow-hidden border-b bg-[var(--background)]">
    <div aria-hidden="true" className="pointer-events-none absolute left-[4%] top-[10%] h-14 w-14 rotate-12 border border-[var(--border-strong)]" />
    <div aria-hidden="true" className="pointer-events-none absolute left-[17%] top-[31%] h-20 w-20 rotate-45 border border-[var(--border)]" />
    <div aria-hidden="true" className="pointer-events-none absolute left-[3%] top-[56%] h-12 w-12 border border-[var(--border-strong)]" />
    <div aria-hidden="true" className="pointer-events-none absolute left-[20%] bottom-[9%] h-16 w-16 rotate-45 bg-[var(--primary)] opacity-[0.07]" />
    <div aria-hidden="true" className="pointer-events-none absolute right-[9%] top-[16%] h-24 w-24 rotate-45 border border-[var(--border)]" />
    <div aria-hidden="true" className="pointer-events-none absolute right-[3%] top-[43%] h-14 w-14 rotate-12 border border-[var(--border-strong)]" />
    <div aria-hidden="true" className="pointer-events-none absolute right-[24%] top-[63%] h-12 w-12 border border-[var(--border-strong)]" />
    <div aria-hidden="true" className="pointer-events-none absolute bottom-[11%] right-[7%] h-20 w-20 rotate-45 border border-[var(--primary)] opacity-20" />
    <div className="relative z-10 mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
    <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[var(--primary)]">02 / {copy.experience.label}</p><h2 className="mt-5 text-3xl font-bold tracking-[-0.05em] text-[var(--text-primary)] sm:text-5xl">{copy.experience.title}</h2>
    <div className="relative mt-14"><div className="absolute bottom-0 left-1.5 top-0 w-px bg-[var(--border-strong)] md:left-1/2 md:-translate-x-1/2" />{entries[locale].map((entry, index) => { const onRight = index % 2 === 1; return <article key={entry.company} className={`relative grid pb-10 last:pb-0 md:grid-cols-2 ${onRight ? "md:[&>div]:col-start-2 md:[&>div]:ml-10" : "md:[&>div]:mr-10"}`}><span className="absolute left-1.5 top-7 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-[var(--background)] bg-[var(--primary)] md:left-1/2" /><div className="ml-8 rounded-2xl border bg-[var(--surface)] p-6 shadow-[0_10px_28px_var(--shadow)] md:ml-0"><p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--primary)]">0{index + 1} / {entry.period}</p><h3 className="mt-3 text-xl font-bold text-[var(--text-primary)]">{entry.role}</h3><p className="mt-1 text-sm font-semibold text-[var(--primary)]">{entry.company}</p><ul className="mt-5 space-y-2 text-sm leading-6 text-[var(--text-secondary)]">{entry.points.map((point) => <li key={point} className="flex gap-3"><span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[var(--primary)]" />{point}</li>)}</ul></div></article>; })}</div>
  </div></section>;
}
