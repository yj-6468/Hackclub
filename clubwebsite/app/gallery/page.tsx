import type { Metadata } from "next";
import { galleryImages } from "@/data/gallery";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from Hack Club @ LHS meetings, workshops, hackathons, and more.",
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-white via-red-50/20 to-amber-50/20 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-red-100 rounded-full px-4 py-1.5 text-sm font-body font-medium text-[#EC3750] shadow-sm mb-6">
            📸 Our memories
          </div>
          <h1 className="font-display font-bold text-5xl sm:text-6xl text-gray-900 mb-4">
            Gallery
          </h1>
          <p className="font-body text-lg text-gray-500 max-w-xl mx-auto">
            Photos from meetings, workshops, hackathons, and more. The story of Hack Club @ LHS in pictures.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="text-4xl mb-4">📸</div>
          <h2 className="font-display font-bold text-2xl text-gray-900 mb-3">
            Want to be in the next photo?
          </h2>
          <p className="font-body text-gray-500 mb-6">
            Come to Room 215 any Thursday at 3:20 PM. Free food guaranteed. Photos optional.
          </p>
          <a
            href="/#join"
            className="inline-block px-8 py-3.5 bg-[#EC3750] text-white rounded-xl font-body font-semibold hover:bg-[#d42f45] transition-colors"
          >
            Join Us →
          </a>
        </div>
      </section>
    </div>
  );
}
