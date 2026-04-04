"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 mb-4">
            What We&apos;re Building
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{project.emoji}</div>
              <span className={`inline-block text-xs font-body font-semibold px-2.5 py-1 rounded-full mb-3 ${project.tagColor}`}>
                {project.tag}
              </span>
              <h3 className="font-display font-bold text-xl text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="font-body text-sm text-gray-500 leading-relaxed mb-4">
                {project.description}
              </p>
              <Link
                href={project.link}
                {...(project.link.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="font-body font-semibold text-sm text-[#EC3750] hover:text-[#d42f45] transition-colors"
              >
                {project.linkLabel}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
