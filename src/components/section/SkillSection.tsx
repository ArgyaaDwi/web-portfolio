"use client";

import { useState } from "react";
import { useSiteSettings } from "../core/SiteSettings";

const tabs = ["Frontend", "Backend", "Others"] as const;
type Tab = (typeof tabs)[number];

const skills: Record<Tab, { name: string; icon: string }[]> = {
  Frontend: [
    { name: "HTML", icon: "https://cdn.simpleicons.org/html5" },
    { name: "CSS", icon: "https://cdn.simpleicons.org/css" },
    { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
    { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  ],
  Backend: [
    { name: "PHP", icon: "https://cdn.simpleicons.org/php" },
    { name: "Golang", icon: "https://cdn.simpleicons.org/go" },
    { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" },
    { name: "Redis", icon: "https://cdn.simpleicons.org/redis" },
  ],
  Others: [
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Linux", icon: "https://cdn.simpleicons.org/linux" },
    { name: "Nginx", icon: "https://cdn.simpleicons.org/nginx" },
    { name: "CI/CD", icon: "https://cdn.simpleicons.org/githubactions" },
    { name: "Postman", icon: "https://cdn.simpleicons.org/postman" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Trello", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" },
  ],
};

export default function SkillSection() {
  const [activeTab, setActiveTab] = useState<Tab>("Frontend");
  const { copy, locale } = useSiteSettings();
  const labels = locale === "id" ? { Frontend: "Frontend", Backend: "Backend", Others: "Lainnya" } : { Frontend: "Frontend", Backend: "Backend", Others: "Others" };
  return <section id="skills" className="border-b bg-[var(--background)]"><div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
    <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[var(--primary)]">04 / {copy.skills.label}</p><h2 className="mt-5 max-w-3xl text-3xl font-bold tracking-[-0.05em] text-[var(--text-primary)] sm:text-5xl">{copy.skills.title}</h2>
    <div className="mt-12 flex gap-1 border-b"><div className="flex gap-5">{tabs.map((tab) => <button key={tab} type="button" onClick={() => setActiveTab(tab)} className={`relative pb-3 text-sm font-semibold transition ${activeTab === tab ? "text-[var(--primary)]" : "text-[var(--text-muted)] hover:text-[var(--text-secondary)]"}`}>{labels[tab]}{activeTab === tab && <span className="absolute inset-x-0 -bottom-px h-0.5 bg-[var(--primary)]" />}</button>)}</div></div>
    <div className="mt-7 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-7">{skills[activeTab].map((skill) => <div key={skill.name} className="group flex min-h-28 flex-col items-center justify-center gap-3 rounded-2xl border bg-[var(--surface)] p-4 transition hover:-translate-y-0.5 hover:border-[var(--primary)]"><span aria-hidden="true" className="h-9 w-9 bg-[var(--primary)] transition group-hover:scale-110" style={{ WebkitMaskImage: `url(${skill.icon})`, WebkitMaskPosition: "center", WebkitMaskRepeat: "no-repeat", WebkitMaskSize: "contain", maskImage: `url(${skill.icon})`, maskPosition: "center", maskRepeat: "no-repeat", maskSize: "contain" }} /><span className="text-center text-xs font-semibold text-[var(--text-secondary)]">{skill.name}</span></div>)}</div>
  </div></section>;
}
