"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * A next/link that swaps in a set of hover style overrides while the pointer is
 * over it — the redesign uses several buttons that darken and/or lift on hover,
 * and inline styles can't express :hover, so we track it in state.
 */
function HoverLink({
  href,
  base,
  hover,
  children,
}: {
  href: string;
  base: React.CSSProperties;
  hover: React.CSSProperties;
  children: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      style={{ textDecorationLine: "none", ...base, ...(hovered ? hover : {}) }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </Link>
  );
}

/** Striped stand-in shown until real photography is available. */
function PhotoPlaceholder({ label }: { label: string }) {
  return (
    <div
      style={{
        height: "200px",
        background:
          "repeating-linear-gradient(45deg,#e9d7b4,#e9d7b4 14px,#e2cca1 14px,#e2cca1 28px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span
        style={{
          fontFamily: "monospace",
          fontSize: "0.8rem",
          color: "#8a6d3f",
          background: "rgba(253,246,236,0.85)",
          padding: "0.4rem 0.8rem",
          borderRadius: "6px",
        }}
      >
        {label}
      </span>
    </div>
  );
}

const programs = [
  {
    title: "In Person",
    body: "We meet at trusted community centers, churches, and libraries near you — bringing reading support right into the neighborhoods that need it most.",
    photo: "photo · tutor + child, in person",
  },
  {
    title: "Virtual",
    body: "Prefer to learn from home? Live online sessions give your child the same caring, focused instruction on a schedule that works for you.",
    photo: "photo · virtual session on screen",
  },
];

const bePartCards = [
  {
    num: "1",
    title: "Enroll Your Child",
    body: "Free reading tutoring for children in grades K–5. Reserve your child's spot today.",
    href: "/enroll",
    cta: "Enroll Your Child",
  },
  {
    num: "2",
    title: "Donate",
    body: "Your gift puts books and caring tutors in front of the kids who need them most.",
    href: "/donate",
    cta: "Donate",
  },
  {
    num: "3",
    title: "Volunteer",
    body: "Share your time. Become a tutor and help a young reader find their confidence.",
    href: "/volunteer",
    cta: "Volunteer",
  },
];

// Shared inline style fragments
const eyebrow: React.CSSProperties = {
  display: "inline-block",
  fontSize: "0.85rem",
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  fontWeight: 600,
};
const lora = "var(--font-lora), Georgia, serif";

export default function Home() {
  return (
    <div
      style={{
        width: "100%",
        background: "var(--color-rokt-light)",
        fontFamily: "var(--font-source-sans), Arial, Helvetica, sans-serif",
        color: "#3b2a14",
      }}
    >
      {/* ============ HERO ============ */}
      <section
        style={{
          background:
            "linear-gradient(180deg, var(--color-rokt-light) 0%, #f6e8cd 55%, #efdcb6 100%)",
          padding: "3rem 2rem 4rem",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <Image
            src="/fulllogo-transparent-trimmed-bg.png"
            alt="Roots of Knowledge Tutoring — Tutoring Sprinkled With Love"
            width={910}
            height={881}
            priority
            style={{ width: "340px", maxWidth: "80%", height: "auto", objectFit: "contain" }}
          />
          <p
            style={{
              fontFamily: lora,
              fontSize: "1.7rem",
              lineHeight: 1.4,
              color: "#4a3318",
              margin: 0,
              maxWidth: "680px",
              textWrap: "balance",
            }}
          >
            Free, culturally responsive reading instruction for children in
            underserved communities across Los Angeles County.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1.25rem",
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: "0.5rem",
            }}
          >
            <HoverLink
              href="/enroll"
              base={{
                padding: "1rem 2.4rem",
                borderRadius: "999px",
                background: "var(--color-rokt-accent)",
                color: "var(--color-rokt-light)",
                fontSize: "1.15rem",
                fontWeight: 600,
                boxShadow: "0 6px 18px rgba(61,122,69,0.32)",
                transition: "background 0.15s ease, transform 0.15s ease",
              }}
              hover={{ background: "#34693c", transform: "translateY(-2px)" }}
            >
              Get Help for Your Child
            </HoverLink>
            <HoverLink
              href="/donate"
              base={{
                padding: "1rem 2.4rem",
                borderRadius: "999px",
                background: "transparent",
                color: "#5a3d1e",
                border: "2px solid #5a3d1e",
                fontSize: "1.15rem",
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

      {/* ============ MISSION BAND ============ */}
      <section
        style={{
          background: "var(--color-rokt-mid)",
          color: "var(--color-rokt-light)",
          padding: "4rem 2rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <span style={{ ...eyebrow, opacity: 0.85, marginBottom: "1rem" }}>
            Our Mission
          </span>
          <p
            style={{
              fontFamily: lora,
              fontSize: "1.85rem",
              lineHeight: 1.45,
              margin: "0 0 1.5rem",
              textWrap: "balance",
            }}
          >
            We believe every child deserves to read with confidence — and to see
            themselves reflected in what they read. We provide free, high-quality
            reading tutoring to children in grades K–5.
          </p>
          <p
            style={{
              fontSize: "1.2rem",
              fontWeight: 600,
              letterSpacing: "0.01em",
              margin: 0,
              opacity: 0.95,
            }}
          >
            We close literacy gaps&nbsp;&middot;&nbsp;We strengthen academic
            confidence&nbsp;&middot;&nbsp;We empower families
          </p>
        </div>
      </section>

      {/* ============ HOW WE WORK ============ */}
      <section style={{ background: "var(--color-rokt-light)", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 3rem" }}>
            <span style={{ ...eyebrow, color: "var(--color-rokt-accent)", marginBottom: "0.9rem" }}>
              How We Work
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
              Tutoring that meets families where they are
            </h2>
            <p style={{ fontSize: "1.2rem", lineHeight: 1.6, margin: 0, color: "#5a4a32" }}>
              Choose what fits your family best. Small groups and one-on-one —
              always with focused attention from tutors who care.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {programs.map(({ title, body, photo }) => (
              <div
                key={title}
                style={{
                  background: "#fff",
                  border: "1px solid #ead9bb",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 8px 24px rgba(107,74,43,0.08)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <PhotoPlaceholder label={photo} />
                <div style={{ padding: "2rem" }}>
                  <h3
                    style={{
                      fontFamily: lora,
                      fontSize: "1.55rem",
                      margin: "0 0 0.75rem",
                      color: "var(--color-rokt-accent)",
                    }}
                  >
                    {title}
                  </h3>
                  <p style={{ fontSize: "1.1rem", lineHeight: 1.6, margin: 0, color: "#5a4a32" }}>
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "2.75rem" }}>
            <HoverLink
              href="/programs"
              base={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.9rem 2rem",
                borderRadius: "999px",
                background: "#5a3d1e",
                color: "var(--color-rokt-light)",
                fontSize: "1.1rem",
                fontWeight: 600,
                transition: "background 0.15s ease, transform 0.15s ease",
              }}
              hover={{ background: "#48300f", transform: "translateY(-2px)" }}
            >
              See how our programs work&nbsp;→
            </HoverLink>
          </div>
        </div>
      </section>

      {/* ============ BE PART OF IT ============ */}
      <section
        style={{
          background: "var(--color-rokt-dark)",
          color: "var(--color-rokt-light)",
          padding: "5rem 2rem",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 3rem" }}>
            <h2 style={{ fontFamily: lora, fontSize: "2.6rem", lineHeight: 1.15, margin: "0 0 1rem" }}>
              Be Part of It
            </h2>
            <p style={{ fontSize: "1.2rem", lineHeight: 1.6, margin: 0, opacity: 0.9 }}>
              Every confident young reader is the work of a whole community.
              Here&apos;s how you can help build one.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.75rem",
            }}
          >
            {bePartCards.map(({ num, title, body, href, cta }) => (
              <div
                key={num}
                style={{
                  background: "var(--color-rokt-card)",
                  borderRadius: "16px",
                  padding: "2.25rem 1.85rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  boxShadow: "0 10px 26px rgba(0,0,0,0.18)",
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "14px",
                    background: "rgba(253,246,236,0.16)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: lora,
                    fontSize: "1.6rem",
                    color: "var(--color-rokt-light)",
                  }}
                >
                  {num}
                </div>
                <h3 style={{ fontFamily: lora, fontSize: "1.5rem", margin: 0, color: "var(--color-rokt-light)" }}>
                  {title}
                </h3>
                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.55,
                    margin: 0,
                    flex: 1,
                    color: "var(--color-rokt-light)",
                    opacity: 0.92,
                  }}
                >
                  {body}
                </p>
                <HoverLink
                  href={href}
                  base={{
                    marginTop: "0.5rem",
                    textAlign: "center",
                    padding: "0.85rem 1.5rem",
                    borderRadius: "999px",
                    background: "var(--color-rokt-accent)",
                    color: "var(--color-rokt-light)",
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    transition: "background 0.15s ease",
                  }}
                  hover={{ background: "#34693c" }}
                >
                  {cta}
                </HoverLink>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
