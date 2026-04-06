import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lexhack.hackclub.com"),
  title: "LexHack '26 — Lexington's First High School Hackathon",
  description:
    "A 48-hour hackathon where 40 high school students compete to build the most technically impressive but deliberately useless applications. June 2026 · Cary Memorial Library · Completely Free.",
  keywords: [
    "hackathon",
    "lexington",
    "high school",
    "coding",
    "hack club",
    "LexHack",
    "Massachusetts",
  ],
  authors: [{ name: "Hack Club @ Lexington High School" }],
  openGraph: {
    title: "LexHack '26 — Technically Impressive. Fundamentally Unnecessary.",
    description:
      "Lexington's first-ever high school hackathon. 48 hours. Infinite ideas June 2026 · Free · Cary Memorial Library.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LexHack '26",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LexHack '26",
    description: "Technically impressive BUT Fundamentally unnecessary.",
    images: ["/og-image.png"],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased bg-[#0A0A0A] text-[#FAFAFA]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
