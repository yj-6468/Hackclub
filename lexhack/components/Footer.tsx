"use client";

import Image from "next/image";
import StarField from "./StarField";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Schedule", href: "#schedule" },
  { label: "Prizes", href: "#prizes" },
  { label: "FAQ", href: "#faq" },
  { label: "Sponsors", href: "#sponsors" },
];

const connect = [
  { label: "Discord", href: "https://discord.gg/bmu6FukEtS" },
  { label: "Instagram", href: "https://www.instagram.com/lhshackclub/" },
  { label: "Email", href: "mailto:lexhackclub@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="relative bg-background border-t border-card-border overflow-hidden">
      <StarField count={80} />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo.jpg"
                alt="LexHack logo"
                width={44}
                height={44}
                className="rounded-lg"
              />
              <span className="font-[family-name:var(--font-display)] text-2xl font-normal text-foreground">
                LexHack{" "}
                <em className="font-[family-name:var(--font-italic)] italic text-accent">
                  &rsquo;26
                </em>
              </span>
            </div>
            <p className="mt-3 font-[family-name:var(--font-italic)] italic text-lg text-text-muted">
              Build for someone.
            </p>
            <p className="mt-5 text-sm text-text-muted leading-relaxed max-w-sm">
              Lexington Community Center · 39 Marrett Rd · Lexington, MA 02421
            </p>
          </div>

          <div>
            <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-primary mb-5">
              Navigate
            </div>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-text-muted hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-primary mb-5">
              Connect
            </div>
            <ul className="space-y-2.5">
              {connect.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-text-muted hover:text-accent transition-colors"
                  >
                    {c.label}
                    <span className="opacity-50">↗</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-2 text-xs text-text-dim leading-relaxed">
              <p>
                Organized by{" "}
                <a
                  href="https://www.hackclublhs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-accent transition-colors underline underline-offset-4"
                >
                  Hack Club @ LHS
                </a>
              </p>
              <p>
                Fiscally sponsored by The Hack Foundation, 501(c)(3) · EIN 81-2908499
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-card-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-text-dim">
            © 2026 LexHack
          </p>
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-text-dim">
            Lat 42.447° · Lon 71.224°
          </p>
        </div>
      </div>
    </footer>
  );
}
