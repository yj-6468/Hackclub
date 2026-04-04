# Hack Club @ Lexington High School — Club Website

> Build stuff. Learn stuff. Eat free food.

The official website for Hack Club @ LHS. Built with Next.js 16, Tailwind CSS v4, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding Gallery Photos

1. Drop your image into `/public/gallery/` (e.g., `meeting-feb.jpg`)
2. Add an entry to `data/gallery.ts`:

```ts
{
  src: "/gallery/meeting-feb.jpg",
  alt: "Hack Club meeting in Room 215",
  caption: "Weekly meeting — February 2026",
  category: "meetings", // "meetings" | "workshops" | "hackathons" | "fun"
}
```

That's it — the gallery auto-updates, filters and lightbox included.

## Updating Team Members

Edit `data/team.ts`. Add a `photo` field pointing to `/public/team/name.jpg` for a real headshot instead of the initials avatar.

## Deployment

Connect the GitHub repo to Vercel for automatic deploys on push to main.  
Or manually: `vercel deploy`

Update the `metadataBase` URL in `app/layout.tsx` to your production domain.

## Easter Eggs

- Click **"Eat free food."** 5 times → pizza rain 🍕
- **Konami code** (↑↑↓↓←→←→BA) → pizza rain 🍕

## Stack

- **Next.js 16** (App Router, static export)
- **Tailwind CSS v4**
- **Framer Motion**
- **Google Fonts** — Space Grotesk, Inter, JetBrains Mono
