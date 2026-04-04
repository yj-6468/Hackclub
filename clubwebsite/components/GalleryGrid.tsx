"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GalleryImage, GalleryCategory } from "@/data/gallery";
import ImageLightbox from "./ImageLightbox";
import GalleryFilter from "./GalleryFilter";

interface Props {
  images: GalleryImage[];
}

export default function GalleryGrid({ images }: Props) {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeFilter === "all"
    ? images
    : images.filter((img) => img.category === activeFilter);

  function openLightbox(idx: number) {
    setLightboxIndex(idx);
  }

  function closeLightbox() {
    setLightboxIndex(null);
  }

  function prevImage() {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  }

  function nextImage() {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
  }

  return (
    <div>
      <div className="mb-10">
        <GalleryFilter active={activeFilter} onChange={setActiveFilter} />
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="font-body text-gray-500 text-lg">
            No photos in this category yet — check back soon!
          </p>
        </div>
      ) : (
        <>
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <AnimatePresence>
              {filtered.map((img, i) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative rounded-2xl overflow-hidden aspect-square cursor-pointer"
                  onClick={() => openLightbox(i)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                    <div className="w-full p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="font-body text-xs text-white font-medium">
                        {img.caption}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <ImageLightbox
            image={lightboxIndex !== null ? filtered[lightboxIndex] : null}
            onClose={closeLightbox}
            onPrev={prevImage}
            onNext={nextImage}
          />
        </>
      )}
    </div>
  );
}
