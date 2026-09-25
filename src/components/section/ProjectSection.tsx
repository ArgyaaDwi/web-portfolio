"use client";

import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { useSiteSettings } from "../core/SiteSettings";

const projects = {
  id: [
    { title: "Omnichannel ERP System", image: "/images/projects/omni.png", description: "Mengerjakan modul Preorder, Stock Adjustment, Replace, Refund, Trade-In, Dropship Partner, serta integrasi marketplace API dan webhook.", tags: ["Laravel", "Python", "MySQL", "Webhooks"], href: "", featured: true },
    { title: "SIPPAK", image: "/images/projects/sippak.png", description: "Sistem prediksi performa akademik dengan ensemble machine learning yang terintegrasi ke aplikasi web.", tags: ["Next.js", "FastAPI", "PostgreSQL", "ML"], href: "https://github.com/ArgyaaDwi/FE-SIPPAK-PENS" },
    { title: "SIMKESIA", image: "/images/projects/simkesia.png", description: "Sistem e-Government untuk deteksi dini stunting dan monitoring kesehatan ibu-anak dengan dukungan RAG-based AI.", tags: ["Laravel", "React", "MySQL", "RAG AI"], href: "" },
  ],
  en: [
    { title: "Omnichannel ERP System", image: "/images/projects/omni.png", description: "Built Preorder, Stock Adjustment, Replace, Refund, Trade-In, and Dropship Partner modules, plus marketplace API and webhook integrations.", tags: ["Laravel", "Python", "MySQL", "Webhooks"], href: "", featured: true },
    { title: "SIPPAK", image: "/images/projects/sippak.png", description: "An academic performance prediction system using ensemble machine learning integrated into a web application.", tags: ["Next.js", "FastAPI", "PostgreSQL", "ML"], href: "https://github.com/ArgyaaDwi/FE-SIPPAK-PENS" },
    { title: "SIMKESIA", image: "/images/projects/simkesia.png", description: "An e-Government system for early stunting detection and maternal-child health monitoring, supported by RAG-based AI.", tags: ["Laravel", "React", "MySQL", "RAG AI"], href: "" },
  ],
};

export default function ProjectSection() {
  const { copy, locale } = useSiteSettings();
  const items = projects[locale];
  return <section id="projects" className="border-b bg-[var(--surface)]"><div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
    <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[var(--primary)]">03 / {copy.projects.label}</p><h2 className="mt-5 max-w-2xl text-3xl font-bold tracking-[-0.05em] text-[var(--text-primary)] sm:text-5xl">{copy.projects.title}</h2>
    <div className="mt-14 grid gap-5 lg:grid-cols-2">{items.map((project, index) => <article key={project.title} className={`overflow-hidden rounded-2xl border bg-[var(--background)] transition hover:-translate-y-1 hover:border-[var(--primary)] hover:shadow-[0_14px_32px_var(--shadow)] ${project.featured ? "lg:col-span-2 lg:grid lg:grid-cols-[1.15fr_0.85fr]" : ""}`}><div className={`relative overflow-hidden border-b bg-[var(--surface-soft)] ${project.featured ? "min-h-72 lg:border-b-0 lg:border-r" : "h-48"}`}><Image src={project.image} alt={project.title} fill sizes={project.featured ? "(max-width: 1024px) 100vw, 65vw" : "(max-width: 1024px) 100vw, 50vw"} className="object-cover object-top transition duration-500 hover:scale-[1.02]" /></div><div className="flex flex-col p-6"><div className="flex items-start justify-between gap-4"><div><p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--primary)]">{project.featured ? copy.projects.featured : `0${index + 1}`}</p><h3 className="mt-3 text-xl font-bold tracking-[-0.03em] text-[var(--text-primary)]">{project.title}</h3></div>{project.href ? <a href={project.href} target="_blank" rel="noreferrer" aria-label={copy.projects.source} className="grid h-9 w-9 place-items-center rounded-full border bg-[var(--surface)] text-[var(--primary)] transition hover:border-[var(--primary)]"><Github className="h-4 w-4" /></a> : <span className="grid h-9 w-9 place-items-center rounded-full border text-[var(--text-muted)]" title={copy.projects.private}><ArrowUpRight className="h-4 w-4" /></span>}</div><p className="mt-4 text-sm leading-6 text-[var(--text-secondary)]">{project.description}</p><div className="mt-6 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-md border bg-[var(--surface)] px-2.5 py-1 font-mono text-[10px] font-semibold text-[var(--text-secondary)]">{tag}</span>)}</div></div></article>)}</div>
    <div className="mt-10 flex justify-center"><a href="https://github.com/ArgyaaDwi" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border bg-[var(--surface)] px-5 py-3 text-sm font-bold text-[var(--text-primary)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"><Github className="h-4 w-4" />{locale === "id" ? "Lihat proyek lainnya" : "Show more projects"}<ArrowUpRight className="h-4 w-4" /></a></div>
  </div></section>;
}
