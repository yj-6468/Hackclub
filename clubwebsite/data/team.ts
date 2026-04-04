export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
  color: string;
  photo?: string;
  photoPosition?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Ren Lin",
    role: "Club Leader / President",
    bio: "Builder, organizer, and chief pizza orderer. Making coding fun at LHS one Thursday at a time.",
    initials: "RL",
    color: "bg-red-100 text-red-600",
  },
  {
    name: "Aaron Li",
    role: "Club Leader / President",
    bio: "Keeping the club running smoothly and the snack supply fully stocked.",
    initials: "AL",
    color: "bg-purple-100 text-purple-600",
    photo: "/team/Aaron Li.jpeg",
  },
   {
    name: "Andrew Pan",
    role: "Vice President",
    bio: "Builder, organizer, and chief pizza orderer. Making coding fun at LHS one Thursday at a time.",
    initials: "AP",
    color: "bg-red-100 text-red-600",
  },
  {
    name: "Daniel Lim",
    role: "Vice President",
    bio: "Making sure we always have budget for the important things (food).",
    initials: "DL",
    color: "bg-amber-100 text-amber-600",
    photo: "/team/Daniel Lim.jpg",
  },
  {
    name: "Benjamin Zhang",
    role: "Vice President",
    bio: "Designs and runs our weekly workshops — from HTML basics to full-stack apps.",
    initials: "BZ",
    color: "bg-blue-100 text-blue-600",
    photo: "/team/Benjamin Zhang.JPG",
    photoPosition: "center 30%",
  },
];
