import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Schedule from "@/components/Schedule";
import Prizes from "@/components/Prizes";
import Judging from "@/components/Judging";
import FAQ from "@/components/FAQ";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Schedule />
        <Prizes />
        <Judging />
        <FAQ />
        <Sponsors />
      </main>
      <Footer />
    </>
  );
}
