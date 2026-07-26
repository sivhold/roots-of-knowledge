import type { Metadata } from "next";
import HoverLink from "@/components/HoverLink";
import { eyebrow as baseEyebrow } from "@/lib/typography";
import GiftChooser from "./GiftChooser";
import DonateMethods from "./DonateMethods";

export const metadata: Metadata = {
  title: "Support Our Work — Roots of Knowledge Tutoring",
  description:
    "Sponsor a young reader in an underserved Los Angeles community. Support free K–5 reading tutoring by Zelle, mailed check, credit card, or your favorite payment app.",
};

// Shared inline style fragments — same conventions as app/page.tsx
const eyebrow: React.CSSProperties = {
  ...baseEyebrow,
  color: "var(--color-rokt-accent)",
};
const lora = "var(--font-lora), Georgia, serif";

export default function Donate() {
  return (
    <div
      style={{
        width: "100%",
        background: "var(--color-rokt-light)",
        fontFamily: "var(--font-source-sans), Arial, Helvetica, sans-serif",
        color: "#3b2a14",
      }}
    >
      {/* ============ INTRO ============ */}
      <section
        style={{
          background:
            "linear-gradient(180deg, var(--color-rokt-light) 0%, #f6e8cd 60%, #efdcb6 100%)",
          padding: "4rem 2rem 3.25rem",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "740px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.2rem",
          }}
        >
          <span style={eyebrow}>Support Our Work</span>
          <h1
            style={{
              fontFamily: lora,
              fontSize: "3rem",
              lineHeight: 1.12,
              margin: 0,
              color: "#4a3318",
              textWrap: "balance",
            }}
          >
            Every sponsorship helps a child find their words
          </h1>
          <p
            style={{
              fontFamily: lora,
              fontSize: "1.35rem",
              lineHeight: 1.5,
              margin: 0,
              color: "#5a3d1e",
              maxWidth: "640px",
              textWrap: "pretty",
            }}
          >
            Your sponsorship puts a caring tutor and the right books in front of
            children who are ready to read. Choose whichever way is easiest for
            you — every sponsorship goes straight to the children and tutors who
            need it most.
          </p>
        </div>
      </section>

      {/* ============ CHOOSE YOUR SPONSORSHIP ============ */}
      <section style={{ padding: "3.75rem 2rem 2rem" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto", textAlign: "center" }}>
          <span style={eyebrow}>Choose your sponsorship</span>
          <h2
            style={{
              fontFamily: lora,
              fontSize: "2.1rem",
              lineHeight: 1.2,
              margin: "0.6rem 0 0.5rem",
              color: "#4a3318",
            }}
          >
            Pick an amount to get started
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.6,
              margin: "0 auto",
              color: "#5a4a32",
              maxWidth: "520px",
            }}
          >
            A suggested amount to guide your sponsorship — once, or every
            month.
          </p>
        </div>
        <GiftChooser />
      </section>

      {/* Card section, divider, Zelle/Check cards, app grid + coming-soon modal */}
      <DonateMethods />

      {/* ============ SHARE YOUR TIME (volunteer callout) ============ */}
      {/* "Support Our Work" spans money AND time — this closes the Sponsorship
          page by pointing would-be tutors to the Volunteer page. */}
      <section
        style={{
          background: "var(--color-rokt-mid)",
          color: "var(--color-rokt-light)",
          padding: "4rem 2rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <span
            style={{
              ...baseEyebrow,
              opacity: 0.85,
              marginBottom: "1rem",
            }}
          >
            Another way to help
          </span>
          <h2
            style={{
              fontFamily: lora,
              fontSize: "2.1rem",
              lineHeight: 1.25,
              margin: "0 0 1rem",
              textWrap: "balance",
            }}
          >
            Share your time, not just a sponsorship
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: 1.6,
              margin: "0 auto 1.9rem",
              maxWidth: "560px",
              opacity: 0.95,
              textWrap: "pretty",
            }}
          >
            Every sponsorship matters &mdash; and so does every hour. Become a tutor and
            help a child in your community discover the confidence that comes
            with reading.
          </p>
          <HoverLink
            href="/volunteer"
            base={{
              display: "inline-block",
              padding: "1rem 2.4rem",
              borderRadius: "999px",
              background: "var(--color-rokt-accent)",
              color: "var(--color-rokt-light)",
              fontSize: "1.1rem",
              fontWeight: 600,
              boxShadow: "0 6px 18px rgba(61,122,69,0.32)",
              transition: "background 0.15s ease, transform 0.15s ease",
            }}
            hover={{ background: "#34693c", transform: "translateY(-2px)" }}
          >
            Become a Tutor
          </HoverLink>
        </div>
      </section>
    </div>
  );
}
