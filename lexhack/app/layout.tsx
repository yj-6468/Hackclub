import type { Metadata } from "next";
import { Fraunces, Instrument_Serif, JetBrains_Mono, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LexHack '26 — Build for Someone Real",
  description:
    "Lexington's first high school hackathon. Pick a real person, understand their problem, and spend a week building something just for them. June 6 & 13, 2026.",
  keywords: [
    "hackathon",
    "high school",
    "Lexington MA",
    "LexHack",
    "coding",
    "build for someone",
    "Hack Club",
  ],
  authors: [{ name: "Hack Club @ Lexington High School" }],
  openGraph: {
    title: "LexHack '26 — Build for Someone Real",
    description:
      "Lexington's first high school hackathon. Pick a real person, understand their problem, and spend a week building something just for them.",
    url: "https://lexhack.hackclub.com",
    siteName: "LexHack '26",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LexHack '26 — Build for Someone Real",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LexHack '26 — Build for Someone Real",
    description:
      "Lexington's first high school hackathon. June 6 & 13, 2026. Free.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
