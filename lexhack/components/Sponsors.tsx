"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import StarField from "./StarField";

const communityPartners = [
  { name: "Hack Club", url: "https://hackclub.com" },
  { name: "The Hack Foundation", url: "https://hackclub.com" },
  { name: "Lexington Community Center", url: null },
];

function SlotRow({
  label,
  count,
  height,
  width,
  tint,
}: {
  label: string;
  count: number;
  height: number;
  width: number;
  tint: string;
}) {
  return (
    <div>
      <div className="text-center font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-text-muted mb-5">
        {label}
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {Array.from({ length: count }).map((_, n) => (
          <div
            key={n}
            className="relative rounded-2xl border border-dashed flex items-center justify-center overflow-hidden"
            style={{
              width,
              height,
              borderColor: tint,
              background: `${tint}10`,
            }}
          >
            <StarField count={6} />
            <span className="relative z-10 text-xs font-[family-name:var(--font-mono)] uppercase tracking-[0.15em] text-text-muted">
              Your logo here
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Sponsors() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="sponsors"
      className="relative py-28 sm:py-36 bg-background-alt overflow-hidden"
      ref={ref}
    >
      <StarField count={50} />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-primary">
            — The supporters
          </div>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl font-normal text-foreground leading-[1.05] tracking-tight">
            Our{" "}
            <em className="font-[family-name:var(--font-italic)] italic text-accent">partners</em>.
          </h2>
          <p className="mt-6 text-lg text-text-body">
            LexHack is made possible by the support of our sponsors and partners.
          </p>
        </motion.div>

        <div className="mt-16 space-y-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <SlotRow label="Title Sponsor" count={1} height={120} width={280} tint="#fcd34d" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <SlotRow label="Gold Sponsors" count={2} height={88} width={210} tint="#c4b5fd" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <SlotRow label="Silver Sponsors" count={3} height={72} width={160} tint="#7dd3fc" />
          </motion.div>

          {/* Community Partners */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="text-center font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-text-muted mb-5">
              Community Partners
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {communityPartners.map((partner) => {
                const Tag = partner.url ? "a" : "span";
                const linkProps = partner.url
                  ? { href: partner.url, target: "_blank" as const, rel: "noopener noreferrer" }
                  : {};
                return (
                  <Tag
                    key={partner.name}
                    {...linkProps}
                    className={`px-5 py-3 rounded-full bg-card-bg border border-card-border text-sm text-foreground ${
                      partner.url
                        ? "hover:border-white/30 hover:bg-white/5 transition-colors"
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
          className="mt-20 relative p-10 rounded-2xl bg-card-bg backdrop-blur-sm border border-card-border overflow-hidden text-center"
        >
          <StarField count={12} />
          <div className="relative z-10">
            <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-primary">
              Sponsor inquiries
            </div>
            <p className="mt-3 font-[family-name:var(--font-display)] text-3xl font-normal text-foreground tracking-tight">
              Help Lexington&rsquo;s first hackathon{" "}
              <em className="font-[family-name:var(--font-italic)] italic text-accent">happen</em>.
            </p>
            <a
              href="mailto:lexhackclub@gmail.com"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-background bg-foreground hover:bg-primary rounded-full transition-colors"
            >
              Email lexhackclub@gmail.com
            </a>
            <p className="mt-5 text-xs text-text-muted">
              All contributions are tax-deductible through The Hack Foundation, 501(c)(3) · EIN 81-2908499
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
