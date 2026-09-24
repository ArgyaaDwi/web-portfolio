"use client";

import { Check, Copy, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { useSiteSettings } from "../core/SiteSettings";

const email = "ferdinandargya@gmail.com";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const { copy } = useSiteSettings();
  const copyEmail = async () => { await navigator.clipboard.writeText(email); setCopied(true); window.setTimeout(() => setCopied(false), 1800); };
  return <section id="contact" className="border-b bg-[var(--primary-soft)]"><div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
    <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[var(--primary)]">05 / {copy.contact.label}</p>
    <div className="mt-5 grid gap-10 lg:grid-cols-[1fr_0.8fr]"><div><h2 className="max-w-2xl text-3xl font-bold tracking-[-0.05em] text-[var(--text-primary)] sm:text-5xl">{copy.contact.title}</h2><p className="mt-6 max-w-xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">{copy.contact.body}</p><div className="mt-8 flex flex-wrap gap-3"><a href={`mailto:${email}`} className="inline-flex items-center gap-2 rounded-xl bg-[var(--primary)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[var(--primary-hover)]"><Mail className="h-4 w-4" />{email}</a><button type="button" onClick={copyEmail} className="inline-flex items-center gap-2 rounded-xl border bg-[var(--surface)] px-4 py-3 text-sm font-bold text-[var(--text-primary)] transition hover:border-[var(--primary)]">{copied ? <Check className="h-4 w-4 text-[var(--primary)]" /> : <Copy className="h-4 w-4" />}{copied ? copy.contact.copied : copy.contact.email}</button></div></div>
      <aside className="overflow-hidden rounded-2xl border bg-[var(--surface)]"><div className="divide-y"><div className="p-6"><p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--text-muted)]">{copy.contact.availability}</p><p className="mt-2 font-semibold text-[var(--text-primary)]">{copy.contact.availabilityValue}</p></div><div className="p-6"><p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--text-muted)]">{copy.contact.location}</p><p className="mt-2 font-semibold text-[var(--text-primary)]">{copy.contact.locationValue}</p></div><div className="flex gap-2 p-6"><a href="https://www.linkedin.com/in/argya-dwi/" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full border text-[var(--text-secondary)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a><a href="https://github.com/ArgyaaDwi" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full border text-[var(--text-secondary)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]" aria-label="GitHub"><Github className="h-4 w-4" /></a></div></div></aside>
    </div>
  </div></section>;
}
