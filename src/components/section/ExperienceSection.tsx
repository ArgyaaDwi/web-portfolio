"use client";

import { Trophy } from "lucide-react";
import { useSiteSettings } from "../core/SiteSettings";

const entries = {
  id: [
    { period: "Mar 2026 - sekarang", role: "Fullstack Developer Intern", company: "CV. DB Klik", points: ["Mengembangkan modul Preorder, Stock Adjustment, Replace, Refund, Trade-In, dan Dropship Partner pada Omnichannel ERP.", "Membangun fitur in-house courier yang terintegrasi dengan layanan Python untuk menentukan gudang terdekat dan menghitung rute pengiriman.", "Mengintegrasikan marketplace API dan webhook untuk sinkronisasi data serta pemrosesan transaksi."] },
    { period: "Jul 2024 - Jan 2025", role: "Fullstack Web Developer", company: "PT. ALP Petro Industry", points: ["Mengembangkan aplikasi web untuk kebutuhan operasional internal.", "Berkolaborasi lintas fungsi agar sistem sesuai kebutuhan bisnis."] },
    { period: "Feb 2024 - Mei 2024", role: "Product Manager", company: "SleepDiary / AgileTeknik", points: ["Mengelola delivery Agile bersama developer, designer, dan tester.", "Mengantarkan produk hingga rilis di Play Store."] },
  ],
  en: [
    { period: "Mar 2026 - present", role: "Fullstack Developer Intern", company: "CV. DB Klik", points: ["Developing Preorder, Stock Adjustment, Replace, Refund, Trade-In, and Dropship Partner modules for the Omnichannel ERP.", "Building an in-house courier feature integrated with a Python service to identify the nearest warehouse and calculate delivery routes.", "Integrating marketplace APIs and webhooks for data synchronization and transaction processing."] },
    { period: "Jul 2024 - Jan 2025", role: "Fullstack Web Developer", company: "PT. ALP Petro Industry", points: ["Developed web applications for internal operational needs.", "Worked cross-functionally to align systems with business requirements."] },
    { period: "Feb 2024 - May 2024", role: "Product Manager", company: "SleepDiary / AgileTeknik", points: ["Managed Agile delivery with developers, designers, and testers.", "Took the product through to its Play Store release."] },
  ],
};

export default function ExperienceSection() {
  const { copy, locale } = useSiteSettings();
  const awards = locale === "id" ? ["Juara 1 Technology Innovative Challenge 8.0, UNEJ, 2025", "Juara 1 Silogy Expo 2025, UNSIKA", "Juara 3 KMIPN VII 2025, Politeknik Negeri Padang"] : ["1st Place, Technology Innovative Challenge 8.0, UNEJ, 2025", "1st Place, Silogy Expo 2025, UNSIKA", "3rd Place, KMIPN VII 2025, Politeknik Negeri Padang"];
  const recognition = locale === "id" ? { label: "Penghargaan", title: "3 penghargaan nasional, termasuk 2 Juara 1.", description: "Kompetisi Web Development dan e-Government, 2025.", ranks: ["Juara 1", "Juara 1", "Juara 3"] } : { label: "Recognition", title: "3 national awards, including 2 first places.", description: "Web Development and e-Government competitions, 2025.", ranks: ["1st Place", "1st Place", "3rd Place"] };
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
    <div className="mt-16 grid gap-6 border-t pt-8 lg:grid-cols-[0.8fr_1.2fr]"><div><div className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--award-soft)] text-[var(--award)]"><Trophy className="h-5 w-5" /></div><p className="mt-5 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--award)]">{recognition.label}</p><h3 className="mt-2 text-2xl font-bold tracking-[-0.04em] text-[var(--text-primary)]">{recognition.title}</h3><p className="mt-3 max-w-sm text-sm leading-6 text-[var(--text-secondary)]">{recognition.description}</p></div><div className="grid gap-3 sm:grid-cols-3">{awards.map((award, index) => <div key={award} className={`rounded-xl border p-5 shadow-[0_8px_20px_var(--shadow)] ${index < 2 ? "border-[var(--award)] bg-[var(--award-soft)]" : "border-[var(--border)] bg-[var(--surface)]"}`}><p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--award)]">{recognition.ranks[index]}</p><p className="mt-5 text-sm font-semibold leading-6 text-[var(--text-primary)]">{award}</p></div>)}</div></div>
  </div></section>;
}
