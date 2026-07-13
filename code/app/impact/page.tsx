import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Our Impact — Roots of Knowledge Tutoring",
  description:
    "See how Roots of Knowledge Tutoring is helping K–5 readers grow across Los Angeles County. Impact stories and results are on the way — reach out to learn more.",
};

// Placeholder page (2026-07-12): contact-first stand-in until Carol provides
// real stats/testimonials for the full Impact page — see
// todo-nextjs-design.md § 3e.
export default function Impact() {
  return (
    <PlaceholderPage
      eyebrowText="Our Impact"
      title="Young readers, growing every week"
      blurb="We're gathering the stories, results, and milestones from our students and families to share here. The best way to see our impact right now? Ask us about it."
      contactPrompt="We're happy to share what's happening in our tutoring sessions and how children are progressing."
      emailSubject="Impact inquiry — Roots of Knowledge Tutoring"
    />
  );
}
