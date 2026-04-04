export interface Project {
  title: string;
  description: string;
  link: string;
  linkLabel: string;
  emoji: string;
  tag: string;
  tagColor: string;
}

export const projects: Project[] = [
  {
    title: "LexHack '26",
    description:
      "Lexington's first-ever student hackathon. 48 hours and infinite ideas. Organized entirely by LHS students.",
    link: "https://lexhack.hackclublhs.com",
    linkLabel: "Visit LexHack →",
    emoji: "🚀",
    tag: "Local Event",
    tagColor: "bg-red-100 text-red-600",
  },
  {
    title: "Club Website",
    description:
      "You're looking at it! Built from scratch by club members using Next.js, Tailwind CSS, and Framer Motion.",
    link: "/",
    linkLabel: "You're here →",
    emoji: "🌐",
    tag: "Live Project",
    tagColor: "bg-green-100 text-green-700",
  },
  {
    title: "Member Projects",
    description:
      "From personal portfolios to full-stack apps. See what our hackers are shipping every week.",
    link: "/gallery",
    linkLabel: "View Gallery →",
    emoji: "💡",
    tag: "Ongoing",
    tagColor: "bg-purple-100 text-purple-600",
  },
];
