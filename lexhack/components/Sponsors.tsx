"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import StarField from "./StarField";

const sponsors = [
  { name: "Endstack", logo: "/sponsors/endstack.png", url: "https://www.endstack.com/" },
  { name: "Codewisp", logo: "/sponsors/codewisp%20logo.png", url: "https://codewisp.ai/" },
];

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
            <div className="text-center font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-text-muted mb-5">
              Sponsors
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {sponsors.map((sponsor) => {
                const Tag = sponsor.url ? "a" : "div";
                const linkProps = sponsor.url
                  ? { href: sponsor.url, target: "_blank" as const, rel: "noopener noreferrer" }
                  : {};
                return (
                  <Tag
                    key={sponsor.name}
                    {...linkProps}
                    className={`relative w-[220px] h-[170px] rounded-2xl bg-card-bg border border-card-border flex flex-col items-center justify-center gap-3 px-4 py-4 overflow-hidden ${
                      sponsor.url ? "hover:border-white/30 transition-colors" : ""
                    }`}
                  >
                    <div className="flex items-center justify-center w-[160px] h-[80px] rounded-xl bg-white">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={sponsor.logo}
                        alt={`${sponsor.name} logo`}
                        className="max-w-[85%] max-h-[70%] object-contain"
                      />
                    </div>
                    <span className="font-[family-name:var(--font-display)] text-base text-foreground">
                      {sponsor.name}
                    </span>
                  </Tag>
                );
              })}
            </div>
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
