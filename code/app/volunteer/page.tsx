import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Volunteer — Roots of Knowledge Tutoring",
  description:
    "Become a volunteer tutor with Roots of Knowledge Tutoring and help K–5 children in Los Angeles County become confident readers. Reach out by email or phone to get involved.",
};

// Placeholder page (2026-07-12): contact-first stand-in until the full
// Volunteer page ships (tutor role details + requirements pending — see
// todo-nextjs-design.md § 3f).
export default function Volunteer() {
  return (
    <PlaceholderPage
      eyebrowText="Volunteer"
      title="Become a tutor. Change a story."
      blurb="Share a few hours and help a young reader find their confidence. No teaching degree required — just patience, consistency, and care."
      contactPrompt="Tell us a little about yourself and your availability, and we'll walk you through how tutoring works."
      emailSubject="Volunteer inquiry — Roots of Knowledge Tutoring"
    />
  );
}
