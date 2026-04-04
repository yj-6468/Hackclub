"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import TeamCard from "./TeamCard";
import { TeamMember } from "@/data/team";

interface Props {
  teamMembers: TeamMember[];
}

const values = [
  {
    emoji: "🔨",
    title: "Learning by Building",
    description:
      "We don't do worksheets. We build apps, websites, and tools then actually ship them to the internet.",
  },
  {
    emoji: "🚀",
    title: "Ship Real Projects",
    description:
      "Every project goes live. Real users, real URLs, real impact",
  },
  {
    emoji: "🌍",
    title: "Open Source Everything",
    description:
      "Our code, our projects, our learning are shared with the world",
  },
  {
    emoji: "🤗",
    title: "Radically Inclusive",
    description:
      "Zero experience required. Zero gatekeeping. Everyone belongs here, from day one.",
  },
  {
    emoji: "🍕",
    title: "Free Food, Always",
    description:
      "We believe snacks are a fundamental right of club membership",
  },
  {
    emoji: "🎉",
    title: "Have Fun",
    description:
      "Coding is supposed to be fun. If it isn't, we're doing something wrong.",
  },
];

export default function AboutClient({ teamMembers }: Props) {
  return (
    <>
      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="font-display font-bold text-3xl text-gray-900 mb-6">
              Who We Are
            </h2>
            <div className="space-y-4 font-body text-gray-600 leading-relaxed text-lg">
              <p>
                Hack Club @ LHS is a student-run coding club at{" "}
                <strong className="text-gray-800">Lexington High School</strong>. We meet every Thursday from 3:20 to 4:30 PM in Room 215 to build projects and run workshops.
              </p>
              <p>
                We&apos;re part of the national{" "}
                <a
                  href="https://hackclub.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#EC3750] font-semibold hover:underline"
                >
                  Hack Club
                </a>{" "}
                network — a nonprofit that supports 30,000+ students at thousands of coding clubs around the world. Being part of this network means we have access to resources, support, and a global community of young hackers.
              </p>
              <p>
                Founded to make coding accessible to every LHS student, we believe that anyone can learn to build things on the internet. No prior experience is required. Whether you&apos;ve built 20 apps or have never opened a code editor, you&apos;re welcome here.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="font-display font-bold text-4xl text-gray-900 mb-4">
              What We Believe
            </h2>
            <p className="font-body text-lg text-gray-500 max-w-xl mx-auto">
              These are the values that drive everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
              >
                <div className="text-3xl mb-3">{v.emoji}</div>
                <h3 className="font-display font-bold text-lg text-gray-900 mb-2">
                  {v.title}
                </h3>
                <p className="font-body text-sm text-gray-500 leading-relaxed">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="font-display font-bold text-4xl text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="font-body text-lg text-gray-500 max-w-xl mx-auto">
              The students who make this all happen
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <TeamCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* What is Hack Club? */}
      <section className="py-20 bg-gradient-to-br from-red-50/50 via-white to-purple-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl border border-gray-100 shadow-lg p-10 text-center"
          >
            <div className="text-5xl mb-6">🌐</div>
            <h2 className="font-display font-bold text-3xl text-gray-900 mb-4">
              What is Hack Club?
            </h2>
            <div className="space-y-4 font-body text-gray-600 text-lg leading-relaxed mb-8 text-left">
              <p>
                <a
                  href="https://hackclub.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#EC3750] font-semibold hover:underline"
                >
                  Hack Club
                </a>{" "}
                is a worldwide network of student-run coding clubs. It&apos;s a 501(c)(3) nonprofit that supports thousands of clubs in high schools and middle schools around the world.
              </p>
              <p>
                More than just a network, Hack Club is a community. Members get access to workshops, events, mentorship, hardware grants, and a global Slack community of{" "}
                <strong className="text-gray-800">30,000+ young hackers</strong>.
              </p>
              <p>
                Hack Club runs programs like{" "}
                <strong className="text-gray-800">Hack Night</strong>,{" "}
                <strong className="text-gray-800">Arcade</strong>, and{" "}
                <strong className="text-gray-800">Assemble</strong> — events where students from around the world come together to build cool things.
              </p>
            </div>
            <a
              href="https://hackclub.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 bg-[#EC3750] text-white rounded-xl font-body font-semibold hover:bg-[#d42f45] transition-colors"
            >
              Visit hackclub.com →
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl text-gray-900 mb-4">
            Come be part of the story.
          </h2>
          <p className="font-body text-gray-500 mb-8 text-lg">
            Every Thursday, 3:20 PM, Room 215
          </p>
          <Link
            href="/#join"
            className="inline-block px-8 py-4 bg-[#EC3750] text-white rounded-xl font-body font-semibold text-lg hover:bg-[#d42f45] transition-all hover:scale-105 shadow-lg shadow-red-200"
          >
            Join Us 👋
          </Link>
        </div>
      </section>
    </>
  );
}
