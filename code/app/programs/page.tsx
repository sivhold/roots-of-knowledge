import type { Metadata } from "next";
import HoverLink from "@/components/HoverLink";
import { eyebrow } from "@/lib/typography";

export const metadata: Metadata = {
  title: "Programs — Roots of Knowledge Tutoring",
  description:
    "Free K–5 reading programs from Roots of Knowledge Tutoring: early literacy foundations, phonics and comprehension instruction, culturally relevant materials, and family partnership — in person and online across Los Angeles County.",
};

// Shared inline style fragments (same conventions as Home/About)
const lora = "var(--font-lora), Georgia, serif";

// "What we teach" — adapted from Carol's flyer services list
// (brain/page-designs-and-copy.md § Source Material). The flyer's fifth
// service, small-group and one-on-one tutoring, lives in the session
// formats section below instead so the two sections don't repeat each other.
const services = [
  {
    title: "Early Literacy Foundations",
    body: "For students in grades K–5, we build the fundamentals — letters, sounds, and sight words — so every child starts from solid ground instead of playing catch-up.",
  },
  {
    title: "Phonics, Fluency & Comprehension",
    body: "Evidence-based reading instruction that takes young readers from sounding out words to reading smoothly — and truly understanding what they read.",
  },
  {
    title: "Culturally Relevant Materials",
    body: "Children learn best when they see themselves in what they read. Our books and lessons reflect and celebrate the students we serve.",
  },
  {
    title: "Family Partnership",
    body: "Parents and caregivers are part of the team. We share progress, strategies, and encouragement so reading growth continues at home.",
  },
];

// How sessions happen — formats families can choose from
const formats = [
  {
    title: "In Person",
    body: "We meet families at trusted community spaces — centers, churches, and libraries close to home.",
  },
  {
    title: "Virtual",
    body: "Live video sessions bring the same caring instruction into your living room, on a schedule that works for you.",
  },
  {
    title: "Small Group",
    body: "A few students at a time — enough company to build confidence, few enough for real individual attention.",
  },
  {
    title: "One-on-One",
    body: "Personalized instruction that meets your child exactly where they are and moves at their pace.",
  },
];

export default function Programs() {
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
          padding: "3rem 2rem 3.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <span style={{ ...eyebrow, color: "var(--color-rokt-accent)", marginBottom: "1rem" }}>
            Our Programs
          </span>
          <h1
            style={{
              fontFamily: lora,
              fontSize: "3rem",
              lineHeight: 1.15,
              margin: "0 0 1.1rem",
              color: "#4a3318",
            }}
          >
            Reading help that meets your child where they are
          </h1>
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
            A culturally responsive literacy program helping K&ndash;5 students
            across Los Angeles County strengthen their reading, build academic
            confidence, and grow a lifelong love of learning &mdash; free to
            qualifying families.
          </p>
        </div>
      </section>

      {/* ============ WHAT WE TEACH ============ */}
      <section style={{ background: "var(--color-rokt-mid)", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div
            style={{
              textAlign: "center",
              // 760px: the H2 needs ~720px to sit on one line at 2.4rem; the
              // old 680px cap forced it to wrap. Still collapses on mobile.
              maxWidth: "760px",
              margin: "0 auto 3rem",
              color: "var(--color-rokt-light)",
            }}
          >
            <span style={{ ...eyebrow, opacity: 0.85, marginBottom: "0.9rem" }}>
              What We Teach
            </span>
            <h2 style={{ fontFamily: lora, fontSize: "2.4rem", lineHeight: 1.2, margin: 0 }}>
              The building blocks of confident reading
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              // 460px minimum forces a 2×2 grid at desktop widths (three
              // columns won't fit in the 1100px container), collapsing to a
              // single column on narrow screens — same device as the About
              // page's Core Values grid.
              gridTemplateColumns: "repeat(auto-fit, minmax(min(460px, 100%), 1fr))",
              gap: "2rem",
            }}
          >
            {services.map(({ title, body }) => (
              <div
                key={title}
                style={{
                  background: "var(--color-rokt-card)",
                  borderRadius: "16px",
                  padding: "2.5rem 2.25rem",
                  boxShadow: "0 10px 26px rgba(0,0,0,0.16)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.85rem",
                }}
              >
                <h3
                  style={{
                    fontFamily: lora,
                    fontSize: "1.5rem",
                    lineHeight: 1.25,
                    margin: 0,
                    color: "var(--color-rokt-light)",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                    margin: 0,
                    color: "var(--color-rokt-light)",
                    opacity: 0.94,
                  }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ HOW TUTORING HAPPENS ============ */}
      <section style={{ background: "var(--color-rokt-light)", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 3rem" }}>
            <span style={{ ...eyebrow, color: "var(--color-rokt-accent)", marginBottom: "0.9rem" }}>
              How Tutoring Happens
            </span>
            <h2
              style={{
                fontFamily: lora,
                fontSize: "2.4rem",
                lineHeight: 1.2,
                margin: "0 0 1rem",
                color: "#4a3318",
              }}
            >
              Sessions built around your family
            </h2>
            <p style={{ fontSize: "1.2rem", lineHeight: 1.6, margin: 0, color: "#5a4a32" }}>
              Every child is different, so families choose the setting and
              format that fit best &mdash; and can mix and match as needs change.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))",
              gap: "1.75rem",
            }}
          >
            {formats.map(({ title, body }) => (
              <div
                key={title}
                style={{
                  background: "#fff",
                  border: "1px solid #ead9bb",
                  borderRadius: "16px",
                  padding: "2rem 1.85rem",
                  boxShadow: "0 8px 24px rgba(107,74,43,0.08)",
                }}
              >
                <h3
                  style={{
                    fontFamily: lora,
                    fontSize: "1.4rem",
                    margin: "0 0 0.7rem",
                    color: "var(--color-rokt-accent)",
                  }}
                >
                  {title}
                </h3>
                <p style={{ fontSize: "1.05rem", lineHeight: 1.6, margin: 0, color: "#5a4a32" }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA BAND ============ */}
      <section
        style={{
          background: "var(--color-rokt-dark)",
          color: "var(--color-rokt-light)",
          padding: "4.5rem 2rem",
        }}
      >
        <div style={{ maxWidth: "820px", margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: lora,
              fontSize: "2rem",
              lineHeight: 1.3,
              margin: "0 0 1rem",
            }}
          >
            Literacy is the foundation for opportunity.
          </h2>
          <p
            style={{
              fontSize: "1.15rem",
              lineHeight: 1.6,
              margin: "0 0 1.9rem",
              opacity: 0.9,
              textWrap: "balance",
            }}
          >
            By meeting students where they are, we help young readers grow
            academically, socially, and emotionally. Together, we can close
            literacy gaps and empower the next generation of leaders.
          </p>
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
              Enroll Your Child
            </HoverLink>
            <HoverLink
              href="/sponsorship"
              base={{
                padding: "1rem 2.4rem",
                borderRadius: "999px",
                background: "transparent",
                color: "var(--color-rokt-light)",
                border: "2px solid var(--color-rokt-light)",
                fontSize: "1.1rem",
                fontWeight: 600,
                transition: "background 0.15s ease, color 0.15s ease",
              }}
              hover={{ background: "var(--color-rokt-light)", color: "#4a3318" }}
            >
              Support Our Work
            </HoverLink>
          </div>
        </div>
      </section>

      {/* Divider band — the CTA section above and the footer below are both
          rokt-dark, so this amber strip keeps them from blending together
          (same device as the Home page). */}
      <div style={{ height: "10px", background: "var(--color-rokt-mid)" }} />
    </div>
  );
}
