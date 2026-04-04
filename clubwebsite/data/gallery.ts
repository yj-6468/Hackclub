export type GalleryCategory = "all" | "meetings" | "workshops" | "hackathons" | "fun";

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  category: Exclude<GalleryCategory, "all">;
}

// To add a new photo:
// 1. Drop the image file into /public/gallery/
// 2. Add an entry below with the filename, alt text, caption, and category
// Categories: "meetings" | "workshops" | "hackathons" | "fun"
export const galleryImages: GalleryImage[] = [
  {
    src: "/gallery/meeting1.jpg",
    alt: "Hack Club members coding at weekly meeting",
    caption: "Weekly meeting — Room 215",
    category: "meetings",
  },
  {
    src: "/gallery/meeting2.jpg",
    alt: "Hack Club members at weekly meeting",
    caption: "Weekly meeting — Room 215",
    category: "meetings",
  },
  {
    src: "/gallery/meeting3.jpg",
    alt: "Hack Club members working on projects",
    caption: "Weekly meeting — Room 215",
    category: "meetings",
  },
  {
    src: "/gallery/workshop1.jpg",
    alt: "Hack Club workshop session",
    caption: "Workshop — Room 215",
    category: "workshops",
  },
  {
    src: "/gallery/workshop2.jpg",
    alt: "Hack Club workshop session",
    caption: "Workshop — Room 215",
    category: "workshops",
  },
  {
    src: "/gallery/workshop3.jpg",
    alt: "Hack Club workshop session",
    caption: "Workshop — Room 215",
    category: "workshops",
  },
  {
    src: "/gallery/fun1.jpg",
    alt: "Hack Club members having fun",
    caption: "Good times at Hack Club",
    category: "fun",
  },
  {
    src: "/gallery/fun2.jpg",
    alt: "Hack Club members hanging out",
    caption: "Good times at Hack Club",
    category: "fun",
  },
];
