import type { Metadata } from "next";
import GiftChooser from "./GiftChooser";
import DonateMethods from "./DonateMethods";

export const metadata: Metadata = {
  title: "Support Our Work — Roots of Knowledge Tutoring",
  description:
    "Support free reading tutoring for K–5 children in underserved Los Angeles communities. Give by Zelle, mailed check, credit card, or your favorite payment app.",
};

// Shared inline style fragments — same conventions as app/page.tsx
const eyebrow: React.CSSProperties = {
  display: "inline-block",
  fontSize: "0.85rem",
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  fontWeight: 700,
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
            Every gift helps a child find their words
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
            Your support puts a caring tutor and the right books in front of
            children who are ready to read. Give whichever way is easiest for
            you — every gift goes straight to the children and tutors who need
            it most.
          </p>
        </div>
      </section>

      {/* ============ CHOOSE YOUR GIFT ============ */}
      <section style={{ padding: "3.75rem 2rem 2rem" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto", textAlign: "center" }}>
          <span style={eyebrow}>Choose your gift</span>
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
            A suggested amount to guide your gift — give once, or sponsor a
            child every month.
          </p>
        </div>
        <GiftChooser />
      </section>

      {/* Card section, divider, Zelle/Check cards, app grid + coming-soon modal */}
      <DonateMethods />
    </div>
  );
}
