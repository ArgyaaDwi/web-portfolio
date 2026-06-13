"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Copy } from "lucide-react";
import { contacts } from "../../data/Contact";

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
