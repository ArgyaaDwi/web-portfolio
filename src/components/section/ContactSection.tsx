"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Clock3, Copy, MailCheck } from "lucide-react";
// import AmbientParticles from "../core/AmbientParticles";

const contacts = [
  {
    value: "ferdinandargya@gmail.com",
    display: "ferdinandargya@gmail.com",
    href: "mailto:ferdinandargya@gmail.com",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    cta: "Send a mail",
  },
  {
    value: "https://www.linkedin.com/in/argya-dwi/",
    display: "/in/argya-dwi",
    href: "https://www.linkedin.com/in/argya-dwi/",
    icon: (
      <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    cta: "Connect with me",
  },
  {
    value: "https://github.com/ArgyaaDwi",
    display: "/ArgyaaDwi",
    href: "https://github.com/ArgyaaDwi",
    icon: (
      <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
    cta: "See my code",
  },
];

const contactHighlights = [
  { label: "Open for", value: "Full-time Contract & Freelance" },
  { label: "Based in", value: "Surabaya, Indonesia" },
];

const Contact = () => {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ferdinandargya@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-yellow-400 px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-yellow-300 opacity-50 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-amber-600 opacity-30 blur-3xl" />
      {/* <AmbientParticles colorClassName="bg-black/20" count={16} /> */}

      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
        <span className="whitespace-nowrap text-[20vw] leading-none font-black text-black/[0.04]">
          CONTACT
        </span>
      </div>

      <div ref={ref} className="container relative z-10 mx-auto max-w-6xl">
        <div
          className="mb-16 text-center"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-black/50">
            Don&apos;t be a stranger
          </p>
          <h2 className="mb-6 text-5xl leading-none font-black text-black sm:text-6xl lg:text-7xl">
            Let&apos;s{" "}
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "2.5px #000" }}
            >
              Connect
            </span>
          </h2>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-black/60 sm:text-lg">
            I&apos;m currently open for internship opportunities and
            collaborations. Whether you have a project in mind or just want to
            say hi, my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div
            className="rounded-3xl border border-black/10 bg-black/[0.07] p-7 shadow-[0_18px_50px_rgba(0,0,0,0.1)] sm:p-8"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
            }}
          >
            <div className="mt-8 max-w-2xl">
              <h3 className="text-2xl font-black text-black sm:text-3xl">
                Let&apos;s build something useful together.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-black/65 sm:text-base">
                I&apos;m interested in web development, API integration, and
                product work that needs clean execution. If your team needs
                someone who can contribute quickly and communicate clearly,
                reach out.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {contactHighlights.map((item) => (
                <div
                  key={item.label}
                  className="min-w-[170px] flex-1 rounded-2xl border border-black/10 bg-gray-50/10 px-4 py-4"
                >
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/45">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm font-black text-black sm:text-base">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-black/15 px-5 py-3 text-sm font-bold text-black/75 transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/[0.05]"
              >
                <Copy className="h-4 w-4" />
                {copied ? "Email copied" : "Copy email"}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {contacts.map((contact, index) => (
              <a
                key={contact.value}
                href={contact.href}
                target={contact.value !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex flex-col gap-4 rounded-2xl border border-black/10 bg-black/[0.06] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-black/25 hover:bg-black/[0.12] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(24px)",
                  transition: `opacity 0.6s ease ${0.25 + index * 0.1}s, transform 0.6s ease ${0.25 + index * 0.1}s, background 0.3s, border 0.3s, translate 0.3s, box-shadow 0.3s`,
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black/10 text-black transition-colors duration-300 group-hover:bg-black/20">
                    {contact.icon}
                  </div>
                </div>

                <div className="flex-1">
                  <p className="mb-1 text-xs font-bold uppercase tracking-widest text-black/40">
                    {contact.cta}
                  </p>
                  <p className="text-sm font-black text-black break-all">
                    {contact.display}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-bold text-black/60 transition-colors duration-300 group-hover:text-black">
                  Open link
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes ambientFloat {
          0%,
          100% {
            transform: translateY(0px) scale(1);
            opacity: 0.12;
          }
          50% {
            transform: translateY(-10px) scale(1.35);
            opacity: 0.28;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
