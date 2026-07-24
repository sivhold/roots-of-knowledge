import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Enroll — Roots of Knowledge Tutoring",
  description:
    "Enroll your K–5 child in free reading tutoring with Roots of Knowledge Tutoring. Serving underserved communities across Los Angeles County — reach out by email or phone to get started.",
};

// Placeholder page (2026-07-12): contact-first stand-in until the full
// Enroll page ships (enrollment details + form vs. email decision pending —
// see todo-nextjs-design.md § 3d).
export default function Enroll() {
  return (
    <PlaceholderPage
      eyebrowText="Enroll"
      title="Let's get your child started"
      blurb="Free reading tutoring for children in grades K–5 across Los Angeles County. Spots are limited — reach out today to see if your child qualifies."
      contactPrompt="Tell us your child's grade and neighborhood, and we'll take it from there."
      emailSubject="Enrollment inquiry — Roots of Knowledge Tutoring"
    />
  );
}
