"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TeamMember } from "@/data/team";

interface Props {
  member: TeamMember;
  index: number;
}

export default function TeamCard({ member, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow text-center"
    >
      {/* Avatar */}
      <div className="flex justify-center mb-4">
        {member.photo ? (
          <div className="relative w-20 h-20 rounded-full overflow-hidden">
            <Image
              src={member.photo}
              alt={member.name}
              fill
              className="object-cover"
              style={{ objectPosition: member.photoPosition ?? "center" }}
            />
          </div>
        ) : (
          <div
            className={`w-20 h-20 rounded-full ${member.color} flex items-center justify-center text-2xl font-display font-bold`}
          >
            {member.initials}
          </div>
        )}
      </div>

      <h3 className="font-display font-bold text-lg text-gray-900 mb-1">
        {member.name}
      </h3>
      <div className="font-body text-sm font-semibold text-[#EC3750] mb-3">
        {member.role}
      </div>

    </motion.div>
  );
}
