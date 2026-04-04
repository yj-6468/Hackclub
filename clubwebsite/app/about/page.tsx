import type { Metadata } from "next";
import { teamMembers } from "@/data/team";
import AboutClient from "@/components/AboutClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Hack Club @ Lexington High School — who we are, what we believe, and the team behind the club.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-white via-red-50/20 to-purple-50/20 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-red-100 rounded-full px-4 py-1.5 text-sm font-body font-medium text-[#EC3750] shadow-sm mb-6">
            🏫 Lexington High School
          </div>
          <h1 className="font-display font-bold text-5xl sm:text-6xl text-gray-900 mb-6">
            About Hack Club @ LHS
          </h1>
          <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            We&apos;re a student-run coding club at Lexington High School where we build real projects, learn from each other, and eat an unreasonable amount of free food.
          </p>
        </div>
      </section>

      <AboutClient teamMembers={teamMembers} />
    </div>
  );
}
