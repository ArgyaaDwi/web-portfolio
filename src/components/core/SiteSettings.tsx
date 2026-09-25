"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Locale = "id" | "en";
type Theme = "light" | "dark";

const copy = {
  id: {
    nav: ["Tentang", "Pengalaman", "Proyek", "Keahlian", "Kontak"],
    controls: { theme: "Ubah tema", language: "Ganti bahasa", menu: "Buka menu" },
    hero: {
      eyebrow: "Full-stack engineer / Surabaya, Indonesia",
      title: "Membangun sistem yang membuat operasi berjalan lebih baik.",
      intro: "Lulusan Sarjana Terapan Teknik Informatika PENS yang membangun sistem operasional dan integrasi yang andal.",
      primary: "Lihat studi kasus",
      secondary: "Mari berdiskusi",
      proof: ["ERP & workflow bisnis", "Integrasi API & webhook", "Inventory & transaksi"],
      diagramTitle: "Alur operasional",
      diagram: ["Pesanan", "Pembayaran", "Inventori", "Marketplace"],
      systemNote: "CATATAN SISTEM / serah-terima andal di setiap proses bisnis",
    },
    about: {
      label: "Tentang saya",
      title: "Engineer yang dekat dengan cara kerja bisnis.",
      lead: "Lulusan Sarjana Terapan Teknik Informatika PENS dengan pengalaman membangun aplikasi web dan ERP untuk kebutuhan operasional.",
      body: "Fokus saya ada pada sistem yang harus tetap jelas dan dapat dipercaya saat data, transaksi, dan proses tim saling terhubung. Saya bekerja lintas Laravel, React, REST API, Python, Docker, dan basis data relasional.",
      notes: [
        ["01", "Menerjemahkan proses", "Memetakan aturan bisnis menjadi alur dan fitur yang dapat digunakan tim."],
        ["02", "Menghubungkan sistem", "Mengerjakan API, webhook, sinkronisasi katalog, serta data transaksi."],
        ["03", "Menyelesaikan sampai detail", "Memikirkan kondisi tepi, riwayat data, dan pengalaman operator."],
      ],
    },
    experience: {
      label: "Pengalaman",
      title: "Kontribusi di produk nyata.",
      highlights: "Sorotan kontribusi",
    },
    projects: {
      label: "Studi kasus",
      title: "Sistem yang saya bantu wujudkan.",
      featured: "Studi kasus unggulan",
      role: "Peran",
      focus: "Fokus implementasi",
      stack: "Stack",
      source: "Buka GitHub",
      private: "Pekerjaan privat",
      index: "Indeks proyek",
    },
    skills: {
      label: "Keahlian",
      title: "Dipilih untuk pekerjaan, bukan sekadar logo.",
      groups: ["Antarmuka & dashboard", "Backend & integrasi", "Data & delivery"],
    },
    contact: {
      label: "Kontak",
      title: "Punya sistem yang perlu dirapikan?",
      body: "Saya terbuka untuk peluang full-time, magang, kontrak, dan kolaborasi produk. Kirim konteks singkat proyek atau peran yang Anda butuhkan.",
      email: "Salin email",
      copied: "Email tersalin",
      availability: "Terbuka untuk",
      availabilityValue: "Full-time, magang, kontrak",
      location: "Berbasis di",
      locationValue: "Surabaya, Indonesia",
      connect: "Terhubung",
    },
    footer: { text: "Full-stack engineer untuk sistem operasional dan integrasi yang rapi.", back: "Kembali ke atas" },
  },
  en: {
    nav: ["About", "Experience", "Projects", "Skills", "Contact"],
    controls: { theme: "Change theme", language: "Change language", menu: "Open menu" },
    hero: {
      eyebrow: "Full-stack engineer / Surabaya, Indonesia",
      title: "Building systems that make operations work better.",
      intro: "Bachelor of Applied Science graduate in Informatics Engineering from PENS, building dependable operational systems and integrations.",
      primary: "View case studies",
      secondary: "Start a conversation",
      proof: ["ERP & business workflows", "API & webhook integrations", "Inventory & transactions"],
      diagramTitle: "Operational flow",
      diagram: ["Order", "Payment", "Inventory", "Marketplace"],
      systemNote: "SYSTEM NOTE / reliable handoffs between business processes",
    },
    about: {
      label: "About",
      title: "An engineer close to how businesses work.",
      lead: "A Bachelor of Applied Science graduate in Informatics Engineering from PENS with experience building web applications and ERP systems for operational needs.",
      body: "I focus on systems that need to stay clear and trustworthy as data, transactions, and team processes connect. My work spans Laravel, React, REST APIs, Python, Docker, and relational databases.",
      notes: [
        ["01", "Translate processes", "Map business rules into workflows and features that teams can use."],
        ["02", "Connect systems", "Build APIs, webhooks, catalog synchronization, and transaction data flows."],
        ["03", "Finish the details", "Consider edge cases, data history, and the operator experience."],
      ],
    },
    experience: { label: "Experience", title: "Contributions to real products.", highlights: "Contribution highlights" },
    projects: {
      label: "Case studies",
      title: "Systems I helped bring to life.",
      featured: "Featured case study",
      role: "Role",
      focus: "Implementation focus",
      stack: "Stack",
      source: "Open GitHub",
      private: "Private work",
      index: "Project index",
    },
    skills: {
      label: "Capabilities",
      title: "Chosen for the work, not just the logo wall.",
      groups: ["Interfaces & dashboards", "Backend & integrations", "Data & delivery"],
    },
    contact: {
      label: "Contact",
      title: "Have a system that needs untangling?",
      body: "I am open to full-time roles, internships, contracts, and product collaborations. Send a short brief about the project or role you need.",
      email: "Copy email",
      copied: "Email copied",
      availability: "Open to",
      availabilityValue: "Full-time, internships, contracts",
      location: "Based in",
      locationValue: "Surabaya, Indonesia",
      connect: "Connect",
    },
    footer: { text: "A full-stack engineer for dependable operational systems and integrations.", back: "Back to top" },
  },
} as const;

type SiteSettings = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  theme: Theme;
  toggleTheme: () => void;
  copy: (typeof copy)[Locale];
};

const SiteSettingsContext = createContext<SiteSettings | null>(null);

export function SiteSettingsProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  const [theme, setTheme] = useState<Theme>("light");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const savedLocale = window.localStorage.getItem("portfolio-locale");
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    setLocale(savedLocale === "id" ? "id" : "en");
    setTheme(savedTheme === "dark" || savedTheme === "light" ? savedTheme : "light");
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.classList.toggle("light", theme === "light");
    document.documentElement.lang = locale;
    window.localStorage.setItem("portfolio-theme", theme);
    window.localStorage.setItem("portfolio-locale", locale);
  }, [locale, ready, theme]);

  return (
    <SiteSettingsContext.Provider
      value={{ locale, setLocale, theme, toggleTheme: () => setTheme((value) => value === "light" ? "dark" : "light"), copy: copy[locale] }}
    >
      {children}
    </SiteSettingsContext.Provider>
  );
}

export function useSiteSettings() {
  const settings = useContext(SiteSettingsContext);
  if (!settings) throw new Error("useSiteSettings must be used within SiteSettingsProvider");
  return settings;
}
