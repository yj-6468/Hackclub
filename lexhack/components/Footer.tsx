export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="font-grotesk font-bold text-2xl mb-3">
              <span className="gradient-text-purple">Lex</span>
              <span className="text-white">Hack</span>
              <span className="text-[#10B981] font-mono">&nbsp;&apos;26</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed mb-4 max-w-sm">
              Lexington&apos;s first-ever high school hackathon. 48 hours of building the most
              technically impressive, deliberately useless software imaginable.
            </p>
            <p className="text-zinc-600 text-xs">
              📍 Cary Memorial Library · 1874 Massachusetts Ave · Lexington, MA 02420
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-grotesk font-semibold text-white text-sm mb-4 uppercase tracking-wider">
              Event
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                { label: "Register", href: "#" },
                { label: "Schedule", href: "#schedule" },
                { label: "Prizes", href: "#prizes" },
                { label: "FAQ", href: "#faq" },
                { label: "Become a Sponsor", href: "mailto:lexhackclub.com" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-zinc-500 hover:text-white text-sm transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + legal */}
          <div>
            <h4 className="font-grotesk font-semibold text-white text-sm mb-4 uppercase tracking-wider">
              Connect
            </h4>
            <ul className="flex flex-col gap-2 mb-6">
              {[
                { label: "Instagram", href: "#" },
                { label: "Discord", href: "#" },
                { label: "Code of Conduct", href: "https://hackclub.com/conduct/" },
                { label: "Hack Club", href: "https://hackclub.com" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-zinc-500 hover:text-white text-sm transition-colors duration-200"
                  >
                    {l.label} {l.href.startsWith("http") && "↗"}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-zinc-600 text-xs">
              Organized by{" "}
              <span className="text-zinc-400">Hack Club @ Lexington High School</span>
            </p>
            <p className="text-zinc-600 text-xs">
              Fiscally sponsored by{" "}
              <a
                href="https://hackfoundation.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                The Hack Foundation
              </a>
              , a 501(c)(3) nonprofit · EIN: 81-2908499
            </p>
          </div>
          <p className="text-zinc-700 text-xs">
            Made with 💜 in Lexington, MA
          </p>
        </div>
      </div>
    </footer>
  );
}
