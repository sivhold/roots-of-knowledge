import type { Metadata } from "next";
import Image from "next/image";
import HoverLink from "@/components/HoverLink";
import { eyebrow } from "@/lib/typography";

export const metadata: Metadata = {
  title: "About Us — Roots of Knowledge Tutoring",
  description:
    "The story behind Roots of Knowledge Tutoring, founder Carol Bluee, and the mission, vision, and values behind our free reading tutoring in Los Angeles County.",
};

// Shared inline style fragments
const lora = "var(--font-lora), Georgia, serif";

const storyParagraphs = [
  "Roots of Knowledge Tutoring (ROKT) was founded by Carol Bluee to address the persistent reading disparities affecting children in low-income and historically marginalized neighborhoods across Los Angeles County.",
  "After retiring from an executive career at the UCLA Store, Carol turned to her passion for early childhood education. Working in schools throughout the community, she saw the same heartbreaking pattern again and again: children arriving at elementary school not yet knowing their alphabet, already behind before they'd truly begun.",
  // Carol's verbatim wording from the original source document, restored at her
  // request (2026-07-23). An earlier draft paraphrased this; she wants the
  // original sentence back, so edit with care.
  "Statistics show that many students in underserved communities read below grade level, often due to limited access to individualized instruction, culturally relevant materials, and early intervention services.",
  "ROKT was created to close that gap. We combine evidence-based literacy instruction with culturally affirming teaching, so that every child we serve can build strong reading skills, academic confidence, and a genuine love of learning.",
];

const missionVision = [
  {
    label: "Our Mission",
    body: "To improve reading proficiency and academic confidence among students in underserved areas of Los Angeles County through culturally responsive, and high-quality tutoring.",
  },
  {
    label: "Our Vision",
    body: "A future where every child reads confidently, excels academically, and sees themselves reflected positively in learning.",
  },
];

const coreValues = [
  {
    lead: "Equity and access in education",
    rest: " — every child deserves quality literacy support, regardless of income or background.",
  },
  {
    lead: "Cultural pride and representation",
    rest: " — children learn best when they see themselves in what they read.",
  },
  {
    lead: "Community partnership and trust",
    rest: " — we grow through genuine relationships with families and neighborhoods.",
  },
  {
    lead: "Academic excellence and accountability",
    rest: " — we hold ourselves to real, measurable results.",
  },
];

export default function About() {
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
            "linear-gradient(180deg, var(--color-rokt-light) 0%, #f6e8cd 55%, #efdcb6 100%)",
          padding: "1rem 2rem 1.75rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <span style={{ ...eyebrow, color: "var(--color-rokt-accent)", marginBottom: "1rem" }}>
            About Us
          </span>
          <p
            style={{
              fontFamily: lora,
              fontSize: "1.35rem",
              lineHeight: 1.5,
              margin: 0,
              color: "#5a4a32",
              textWrap: "balance",
            }}
          >
            A tutoring program built from one founder&apos;s belief that every
            child deserves to read with confidence.
          </p>
        </div>
      </section>

      {/* ============ FOUNDER STORY ============ */}
      <section style={{ background: "var(--color-rokt-light)", padding: "1.25rem 2rem 5rem" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(0, 0.85fr) minmax(0, 1.15fr)",
            gap: "3.5rem",
            alignItems: "start",
          }}
        >
          {/* Founder photo + name (sticky on scroll) */}
          <div style={{ position: "sticky", top: "110px", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "320px",
                aspectRatio: "4 / 5",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 12px 30px rgba(107,74,43,0.16)",
              }}
            >
              <Image
                src="/carol-bluee.jpg"
                alt="Carol Bluee, founder of Roots of Knowledge Tutoring"
                fill
                sizes="(max-width: 700px) 90vw, 320px"
                // object-position biases the crop toward Carol's face so any
                // partial/responsive view favors it, never a forehead or chin.
                style={{ objectFit: "cover", objectPosition: "center 30%" }}
              />
            </div>
            <div>
              <p
                style={{
                  fontFamily: lora,
                  fontWeight: 600,
                  fontSize: "1.2rem",
                  margin: "0 0 0.15rem",
                  color: "#4a3318",
                }}
              >
                Carol Bluee
              </p>
              <p style={{ fontSize: "1rem", margin: 0, color: "#5a4a32", opacity: 0.85 }}>
                Founder, Roots of Knowledge Tutoring
              </p>
            </div>
          </div>

          {/* Story copy */}
          <div>
            {/* This is the page's h1, not an h2: Carol removed the intro
                tagline that previously held that role (2026-07-23), and a page
                with no h1 hurts both SEO and screen-reader navigation. Styling
                is inline, so the tag change is purely semantic. */}
            <h1
              style={{
                fontFamily: lora,
                fontSize: "2.1rem",
                lineHeight: 1.2,
                margin: "0 0 1.5rem",
                color: "#4a3318",
              }}
            >
              Our Story
            </h1>
            {storyParagraphs.map((para, i) => (
              <p
                key={i}
                style={{
                  fontSize: "1.15rem",
                  lineHeight: 1.75,
                  margin: i === storyParagraphs.length - 1 ? 0 : "0 0 1.35rem",
                  color: "#3b2a14",
                }}
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MISSION & VISION ============ */}
      <section style={{ background: "var(--color-rokt-mid)", padding: "5rem 2rem" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
            gap: "2rem",
          }}
        >
          {missionVision.map(({ label, body }) => (
            <div
              key={label}
              style={{
                background: "var(--color-rokt-card)",
                borderRadius: "16px",
                padding: "2.75rem 2.5rem",
                boxShadow: "0 10px 26px rgba(0,0,0,0.16)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  ...eyebrow,
                  color: "var(--color-rokt-light)",
                  opacity: 0.8,
                  marginBottom: "0.9rem",
                }}
              >
                {label}
              </span>
              <p
                style={{
                  fontFamily: lora,
                  fontSize: "1.5rem",
                  lineHeight: 1.5,
                  margin: 0,
                  color: "var(--color-rokt-light)",
                }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ CORE VALUES ============ */}
      <section
        style={{
          background: "var(--color-rokt-dark)",
          color: "var(--color-rokt-light)",
          padding: "5.5rem 2rem",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 3.25rem" }}>
            <span style={{ ...eyebrow, color: "#8fd39a", marginBottom: "0.9rem" }}>
              What We Stand For
            </span>
            <h2 style={{ fontFamily: lora, fontSize: "2.4rem", lineHeight: 1.2, margin: 0 }}>
              Our Core Values
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              // Two columns on desktop (a balanced 2×2), collapsing to one on
              // narrow screens. min(...,100%) keeps the track from overflowing.
              gridTemplateColumns: "repeat(auto-fit, minmax(min(460px, 100%), 1fr))",
              gap: "2rem 2.5rem",
            }}
          >
            {coreValues.map(({ lead, rest }) => (
              <div key={lead} style={{ display: "flex", gap: "1.1rem", alignItems: "flex-start" }}>
                <span
                  style={{
                    flex: "none",
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "var(--color-rokt-accent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    marginTop: "0.1rem",
                  }}
                  aria-hidden="true"
                >
                  ✓
                </span>
                <p style={{ fontSize: "1.1rem", lineHeight: 1.6, margin: 0 }}>
                  <strong style={{ fontFamily: lora, fontWeight: 600 }}>{lead}</strong>
                  {rest}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA BAND ============ */}
      <section style={{ background: "var(--color-rokt-light)", padding: "4.5rem 2rem" }}>
        <div style={{ maxWidth: "820px", margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: lora,
              fontSize: "2rem",
              lineHeight: 1.25,
              margin: "0 0 1.75rem",
              color: "#4a3318",
            }}
          >
            Every confident young reader is the work of a whole community.
          </h2>
          <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap", justifyContent: "center" }}>
            <HoverLink
              href="/enroll"
              base={{
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
              Get Help for Your Child
            </HoverLink>
            <HoverLink
              href="/sponsorship"
              base={{
                padding: "1rem 2.4rem",
                borderRadius: "999px",
                background: "transparent",
                color: "#5a3d1e",
                border: "2px solid #5a3d1e",
                fontSize: "1.1rem",
                fontWeight: 600,
                transition: "background 0.15s ease, color 0.15s ease",
              }}
              hover={{ background: "#5a3d1e", color: "var(--color-rokt-light)" }}
            >
              Support Our Work
            </HoverLink>
          </div>
        </div>
      </section>
    </div>
  );
}
