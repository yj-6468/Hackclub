"use client";

import StarField from "./StarField";

const footerLinks = [
  { label: "Register", href: "https://forms.gle/32xyrnJxHYpWm1937" },
  { label: "Schedule", href: "#schedule" },
  { label: "Prizes", href: "#prizes" },
  { label: "FAQ", href: "#faq" },
  { label: "Sponsor", href: "mailto:lexhackclub@gmail.com" },
  { label: "Code of Conduct", href: "https://hackclub.com/conduct/" },
];

const socialLinks = [
  {
    label: "Discord",
    href: "https://discord.gg/bmu6FukEtS",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/lhshackclub/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-background overflow-hidden">
      {/* Dense star field */}
      <StarField count={120} />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />

      {/* Constellation line decoration */}
      <svg
        className="absolute bottom-0 left-0 w-full h-full opacity-[0.05] pointer-events-none"
        viewBox="0 0 1000 400"
        aria-hidden="true"
      >
        <circle cx="150" cy="100" r="2" fill="#F5F5F5" />
        <circle cx="350" cy="80" r="1.5" fill="#F5F5F5" />
        <circle cx="500" cy="120" r="2" fill="#C4B5FD" />
        <circle cx="650" cy="90" r="1.5" fill="#F5F5F5" />
        <circle cx="850" cy="110" r="2" fill="#F5F5F5" />
        <line x1="150" y1="100" x2="350" y2="80" stroke="#F5F5F5" strokeWidth="0.8" />
        <line x1="350" y1="80" x2="500" y2="120" stroke="#F5F5F5" strokeWidth="0.8" />
        <line x1="500" y1="120" x2="650" y2="90" stroke="#F5F5F5" strokeWidth="0.8" />
        <line x1="650" y1="90" x2="850" y2="110" stroke="#F5F5F5" strokeWidth="0.8" />
      </svg>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground">
              LexHack <span className="text-primary">&rsquo;26</span>
            </h3>
            <p className="mt-2 text-lg font-display italic text-text-muted">
              Build for someone
            </p>
            <div className="mt-6 text-sm text-text-muted">
              <p>
                Lexington Community Center · 39 Marrett Rd · Lexington, MA
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-text-muted/60 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={
                      link.href.startsWith("http") ||
                      link.href.startsWith("mailto")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-sm text-text-muted hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-text-muted/60 mb-4">
              Connect
            </h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-card-border hover:bg-primary/10 hover:border-primary/30 flex items-center justify-center text-text-muted hover:text-primary transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <div className="space-y-2 text-sm text-text-muted">
              <p>
                Organized by{" "}
                <a
                  href="https://www.hackclublhs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-body hover:text-primary transition-colors underline underline-offset-2"
                >
                  Hack Club @ Lexington High School
                </a>
              </p>
              <p>
                Fiscally sponsored by The Hack Foundation, 501(c)(3) · EIN
                81-2908499
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-card-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted/50">
            &copy; 2026 LexHack
          </p>
          <a
            href="mailto:lexhackclub@gmail.com"
            className="text-xs text-text-muted/50 hover:text-primary/70 transition-colors"
          >
            lexhackclub@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
