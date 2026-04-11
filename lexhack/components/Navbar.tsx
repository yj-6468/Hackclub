"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Schedule", href: "#schedule" },
  { label: "Prizes", href: "#prizes" },
  { label: "FAQ", href: "#faq" },
  { label: "Sponsors", href: "#sponsors" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/60 backdrop-blur-md border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            <a
              href="#"
              className="font-display text-xl sm:text-2xl font-bold text-foreground tracking-tight"
            >
              LexHack <span className="text-primary">&rsquo;26</span>
            </a>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-text-muted hover:text-foreground transition-colors rounded-lg hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://forms.gle/32xyrnJxHYpWm1937"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 inline-flex items-center px-5 py-2.5 text-sm font-semibold text-background bg-primary hover:bg-primary-dark rounded-full transition-all duration-200 shadow-sm hover:shadow-lg hover:shadow-primary/20"
              >
                Register Free
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 relative flex flex-col justify-between">
                <span
                  className={`block h-0.5 w-5 bg-foreground rounded-full transition-all duration-300 origin-center ${
                    mobileOpen ? "rotate-45 translate-y-[7px]" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 bg-foreground rounded-full transition-all duration-300 ${
                    mobileOpen ? "opacity-0 scale-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 bg-foreground rounded-full transition-all duration-300 origin-center ${
                    mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-background-alt border-l border-card-border z-40 lg:hidden shadow-2xl"
            >
              <div className="flex flex-col pt-24 px-6">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="py-3 text-lg font-medium text-text-muted hover:text-foreground border-b border-card-border transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href="https://forms.gle/32xyrnJxHYpWm1937"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-6 inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-background bg-primary hover:bg-primary-dark rounded-full transition-colors shadow-lg shadow-primary/20"
                >
                  Register Free
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
