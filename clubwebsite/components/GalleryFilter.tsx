"use client";

import { motion } from "framer-motion";
import { GalleryCategory } from "@/data/gallery";

const categories: { value: GalleryCategory; label: string }[] = [
  { value: "all", label: "All" },
  { value: "meetings", label: "Meetings" },
  { value: "workshops", label: "Workshops" },
  { value: "hackathons", label: "Hackathons" },
  { value: "fun", label: "Fun" },
];

interface Props {
  active: GalleryCategory;
  onChange: (cat: GalleryCategory) => void;
}

export default function GalleryFilter({ active, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => onChange(value)}
          className={`relative px-5 py-2 rounded-full font-body font-semibold text-sm transition-colors ${
            active === value
              ? "text-white"
              : "text-gray-600 bg-gray-100 hover:bg-gray-200"
          }`}
        >
          {active === value && (
            <motion.span
              layoutId="filter-pill"
              className="absolute inset-0 rounded-full bg-[#EC3750]"
              style={{ zIndex: -1 }}
            />
          )}
          {label}
        </button>
      ))}
    </div>
  );
}
