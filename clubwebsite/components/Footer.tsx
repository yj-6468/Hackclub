import Link from "next/link";

const socialLinks = [
  { href: "#", label: "Instagram" },
  { href: "#", label: "Discord" },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "#", label: "LexHack '26 ↗" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-xl font-display font-bold mb-3">
              <span className="text-[#EC3750]">Hack Club</span>
              <span className="text-white"> @ LHS</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              A student-run coding club at Lexington High School. Building real stuff, eating food, and having fun every Thursday.
            </p>
            <p className="text-sm text-gray-500">
              Part of the{" "}
              <a
                href="https://hackclub.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#EC3750] hover:text-red-400 transition-colors"
              >
                Hack Club network
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Meet Info + Social */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Find Us</h3>
            <div className="space-y-2 mb-6">
              <p className="text-sm text-gray-400">📅 Every Thursday</p>
              <p className="text-sm text-gray-400">🕒 3:20 PM – 4:30 PM</p>
              <p className="text-sm text-gray-400">📍 Room 215, Lexington High School</p>
              <p className="text-sm text-gray-400">🍕 Free food</p>
            </div>
            <div className="flex gap-3">
              {socialLinks.map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-sm text-gray-400 hover:text-white transition-colors px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex items-center justify-center">
          <p className="text-xs text-gray-500">
            251 Waltham St, Lexington, MA 02421
          </p>
        </div>
      </div>
    </footer>
  );
}
