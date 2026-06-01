import Link from "next/link";

export const metadata = {
  title: "Registration closed — LexHack '26",
};

export default function RegistrationClosedPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-background text-foreground text-center">
      <div className="max-w-xl">
        <div className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-primary">
          — Update
        </div>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.05] tracking-tight">
          Registration is{" "}
          <em className="font-[family-name:var(--font-italic)] italic text-accent">
            closed
          </em>
          .
        </h1>
        <p className="mt-6 text-lg text-text-body">
          All spots for LexHack &rsquo;26 are full. Thanks for the interest.
        </p>
        <p className="mt-6 text-sm text-text-muted">
          Need support? Email{" "}
          <a
            href="mailto:lexhackclub@gmail.com"
            className="text-primary hover:text-primary-light font-medium underline underline-offset-4 transition-colors"
          >
            lexhackclub@gmail.com
          </a>
          .
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-foreground border border-card-border hover:border-foreground rounded-full transition-colors"
        >
          ← Back to home
        </Link>
      </div>
    </main>
  );
}
