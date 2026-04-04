import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hackclub-lhs.vercel.app"),
  title: {
    default: "Hack Club @ Lexington High School",
    template: "%s | Hack Club @ LHS",
  },
  description:
    "Build stuff. Learn stuff. Eat free food. Hack Club @ LHS meets every Thursday at 3:20 PM in Room 215. No experience needed.",
  keywords: ["hack club", "lexington high school", "coding club", "programming", "lhs", "hackathon"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Hack Club @ LHS",
    title: "Hack Club @ Lexington High School",
    description:
      "Build stuff. Learn stuff. Eat free food. Every Thursday, 3:20 PM, Room 215.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hack Club @ LHS",
    description: "Build stuff. Learn stuff. Eat free food.",
  },
  icons: {
    icon: "/icon.png",
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
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
