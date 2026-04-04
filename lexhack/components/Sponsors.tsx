"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const titleSponsors = [
  { name: "Your Company Here", placeholder: true },
];

const goldSponsors = [
  { name: "Gold Sponsor A", placeholder: true },
  { name: "Gold Sponsor B", placeholder: true },
];

const silverSponsors = [
  { name: "Silver A", placeholder: true },
  { name: "Silver B", placeholder: true },
  { name: "Silver C", placeholder: true },
];

const partners = [
  { name: "Hack Club", placeholder: false },
  { name: "The Hack Foundation", placeholder: false },
  { name: "Cary Memorial Library", placeholder: false },
];

function PlaceholderLogo({ name, size = "md" }: { name: string; size?: "lg" | "md" | "sm" }) {
  const sizeClasses = {
    lg: "h-28 sm:h-36 text-lg",
    md: "h-20 sm:h-24 text-sm",
    sm: "h-14 sm:h-16 text-xs",
  };

  return (
    <div
      className={`${sizeClasses[size]} flex items-center justify-center rounded-xl border border-white/10 bg-white/3 hover:border-[#7C3AED]/40 hover:bg-[#7C3AED]/5 transition-all duration-300 px-6 group cursor-default`}
    >
      <span className="text-zinc-500 group-hover:text-zinc-300 font-medium text-center transition-colors duration-300">
        {name}
      </span>
    </div>
  );
}

export default function Sponsors() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sponsors" className="py-24 sm:py-32 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7C3AED]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-[#10B981] tracking-widest uppercase mb-4 block">
            // sponsors
          </span>
          <h2 className="font-grotesk font-bold text-4xl sm:text-5xl text-white mb-6">
            Our{" "}
            <span className="gradient-text">Amazing Partners</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            LexHack exists because of the generosity of these organizations.
            They believe in what high schoolers can build.
          </p>
        </motion.div>

        {/* Title Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <p className="text-center text-xs font-mono text-zinc-600 tracking-widest uppercase mb-5">
            Title Sponsor
          </p>
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <PlaceholderLogo name={titleSponsors[0].name} size="lg" />
            </div>
          </div>
        </motion.div>

        {/* Gold Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-10"
        >
          <p className="text-center text-xs font-mono text-zinc-600 tracking-widest uppercase mb-5">
            Gold Sponsors
          </p>
          <div className="grid grid-cols-2 gap-4 max-w-xl mx-auto">
            {goldSponsors.map((s) => (
              <PlaceholderLogo key={s.name} name={s.name} size="md" />
            ))}
          </div>
        </motion.div>

        {/* Silver Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="mb-10"
        >
          <p className="text-center text-xs font-mono text-zinc-600 tracking-widest uppercase mb-5">
            Silver Sponsors
          </p>
          <div className="grid grid-cols-3 gap-3 max-w-2xl mx-auto">
            {silverSponsors.map((s) => (
              <PlaceholderLogo key={s.name} name={s.name} size="sm" />
            ))}
          </div>
        </motion.div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <p className="text-center text-xs font-mono text-zinc-600 tracking-widest uppercase mb-5">
            Community Partners
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {partners.map((p) => (
              <div
                key={p.name}
                className="px-5 py-2.5 rounded-lg border border-white/10 bg-white/3 text-zinc-400 text-sm font-medium"
              >
                {p.name}
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="relative rounded-2xl border border-[#7C3AED]/30 bg-[#7C3AED]/5 p-8 sm:p-12 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/10 via-transparent to-transparent pointer-events-none" />
          <h3 className="font-grotesk font-bold text-2xl sm:text-3xl text-white mb-3">
            Want to Sponsor LexHack?
          </h3>
          <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
            Support Lexington&apos;s first high school hackathon and invest in the next generation of engineers.
            Sponsorships start at any amount.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:lexhack26@gmail.com?subject=LexHack%20'26%20Sponsorship"
              className="px-8 py-4 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-grotesk font-bold text-base transition-all duration-200 glow-purple"
            >
              Get in Touch
            </a>
            <a
              href="#"
              className="px-8 py-4 rounded-xl border border-white/20 hover:border-white/40 text-white font-grotesk font-semibold text-base transition-all duration-200"
            >
              View Sponsor Deck
            </a>
          </div>
          <p className="mt-6 text-xs text-zinc-600">
            All contributions are tax-deductible through The Hack Foundation, 501(c)(3) · EIN: 81-2908499
          </p>
        </motion.div>
      </div>
    </section>
  );
}
