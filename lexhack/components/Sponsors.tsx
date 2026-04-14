"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import StarField from "./StarField";

const communityPartners = [
  { name: "Hack Club", url: "https://hackclub.com" },
  { name: "The Hack Foundation", url: "https://hackclub.com" },
  { name: "Lexington Community Center", url: null },
];

export default function Sponsors() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="sponsors"
      className="relative py-24 sm:py-32 bg-background-alt overflow-hidden"
      ref={ref}
    >
      <StarField count={40} />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="text-center"
        >
          {/* Constellation decoration around heading */}
          <div className="relative inline-block">
            <svg
              className="absolute -top-4 -left-6 w-8 h-8 opacity-20"
              viewBox="0 0 30 30"
              aria-hidden="true"
            >
              <circle cx="5" cy="5" r="1.5" fill="#F5F5F5" />
              <circle cx="25" cy="8" r="1" fill="#F5F5F5" />
              <circle cx="15" cy="25" r="1.5" fill="#F5F5F5" />
              <line x1="5" y1="5" x2="25" y2="8" stroke="#F5F5F5" strokeWidth="0.4" opacity="0.5" />
              <line x1="25" y1="8" x2="15" y2="25" stroke="#F5F5F5" strokeWidth="0.4" opacity="0.5" />
            </svg>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Our Partners
            </h2>
          </div>
          <p className="mt-4 text-lg text-text-body">
            LexHack is made possible by the support of our sponsors and partners.
          </p>
        </motion.div>

        <div className="mt-16 space-y-12">
          {/* Title Sponsor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h3 className="text-center text-xs font-bold uppercase tracking-widest text-text-muted mb-6">
              Title Sponsor
            </h3>
            <div className="flex justify-center">
              <div className="relative w-64 h-28 rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 flex items-center justify-center overflow-hidden">
                <StarField count={8} />
                <span className="relative z-10 text-sm text-text-muted font-medium">
                  Your logo here
                </span>
              </div>
            </div>
          </motion.div>

          {/* Gold Sponsors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-center text-xs font-bold uppercase tracking-widest text-text-muted mb-6">
              Gold Sponsors
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[1, 2].map((n) => (
                <div
                  key={n}
                  className="relative w-48 h-20 rounded-xl border-2 border-dashed border-purple-400/20 bg-purple-400/5 flex items-center justify-center overflow-hidden"
                >
                  <StarField count={5} />
                  <span className="relative z-10 text-sm text-text-muted font-medium">
                    Your logo here
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Silver Sponsors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-center text-xs font-bold uppercase tracking-widest text-text-muted mb-6">
              Silver Sponsors
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="relative w-36 h-16 rounded-lg border-2 border-dashed border-card-border bg-white/3 flex items-center justify-center overflow-hidden"
                >
                  <StarField count={3} />
                  <span className="relative z-10 text-xs text-text-muted font-medium">
                    Your logo here
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Community Partners */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-center text-xs font-bold uppercase tracking-widest text-text-muted mb-6">
              Community Partners
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {communityPartners.map((partner) => {
                const Tag = partner.url ? "a" : "span";
                const linkProps = partner.url
                  ? {
                      href: partner.url,
                      target: "_blank" as const,
                      rel: "noopener noreferrer",
                    }
                  : {};
                return (
                  <Tag
                    key={partner.name}
                    {...linkProps}
                    className={`px-5 py-3 rounded-xl bg-card-bg border border-card-border text-sm font-medium text-foreground ${
                      partner.url
                        ? "hover:border-primary/30 hover:bg-primary/5 transition-colors"
                        : ""
                    }`}
                  >
                    {partner.name}
                  </Tag>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 text-center p-8 bg-card-bg rounded-2xl border border-card-border"
        >
          <p className="font-display text-xl font-bold text-foreground">
            Interested in sponsoring?
          </p>
          <p className="mt-2 text-text-body">
            Help Lexington&rsquo;s first hackathon make an impact.
          </p>
          <a
            href="mailto:lexhackclub@gmail.com"
            className="mt-4 inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-background bg-primary hover:bg-primary-dark rounded-full transition-colors shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
          >
            Email lexhackclub@gmail.com
          </a>
          <p className="mt-4 text-xs text-text-muted">
            All contributions are tax-deductible through The Hack Foundation,
            501(c)(3) · EIN 81-2908499
          </p>
        </motion.div>
      </div>
    </section>
  );
}
