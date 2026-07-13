"use client";

import { useEffect, useState } from "react";

const lora = "var(--font-lora), Georgia, serif";
const sans = "var(--font-source-sans), Arial, Helvetica, sans-serif";

/**
 * Footer social icons open a coming-soon popup (added 2026-07-12) instead of
 * dead href="#" links — ROKT's real Facebook/X URLs are still pending from
 * Carol. When she provides them, replace the <button>s with plain <a href>
 * links and delete the modal. Same scrim/card/animation pattern as the Donate
 * page's coming-soon modal (rokt-fade / rokt-pop live in globals.css).
 */

type Social = { name: string; icon: React.ReactNode };

function FacebookIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#1877F2" />
      <path
        fill="#fff"
        d="M16.671 15.469l.532-3.469h-3.328V9.749c0-.949.465-1.874 1.956-1.874h1.513V4.922s-1.374-.235-2.686-.235c-2.741 0-4.533 1.662-4.533 4.669V12H6.877v3.469h3.047v8.385a12.13 12.13 0 0 0 3.751 0v-8.385h2.796z"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#000000" />
      <path
        fill="#fff"
        transform="translate(4.56 4.56) scale(0.62)"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      />
    </svg>
  );
}

const socials: Social[] = [
  { name: "Facebook", icon: <FacebookIcon /> },
  { name: "X", icon: <XIcon /> },
];

function GotItButton({ onClick }: { onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      style={{
        border: "none",
        cursor: "pointer",
        background: hovered ? "#34693c" : "var(--color-rokt-accent)",
        color: "var(--color-rokt-light)",
        fontFamily: sans,
        fontSize: "1.05rem",
        fontWeight: 600,
        padding: "0.85rem 2.25rem",
        borderRadius: "999px",
        transition: "background 0.15s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      Got it
    </button>
  );
}

export default function Footer() {
  const [modal, setModal] = useState<Social | null>(null);

  // Close the modal on Escape.
  useEffect(() => {
    if (!modal) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModal(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modal]);

  return (
    <footer
      style={{
        backgroundColor: "var(--color-rokt-dark)",
        color: "var(--color-rokt-footer-font)",
        padding: "2.25rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          flexWrap: "wrap",
          fontFamily: sans,
          fontSize: "1.2rem",
        }}
      >
        <span>© 2026 Roots of Knowledge Tutoring.</span>

        <span style={{ opacity: 0.5 }}>•</span>

        <span>
          Contact:{" "}
          <a
            href="mailto:rootsofknowledgetutor@gmail.com"
            style={{
              color: "var(--color-rokt-footer-font)",
              textDecorationLine: "underline",
              textUnderlineOffset: "3px",
            }}
          >
            rootsofknowledgetutor@gmail.com
          </a>
        </span>

        <span style={{ opacity: 0.5 }}>•</span>

        {/* Social icons — open the coming-soon popup until real URLs exist. */}
        <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
          {socials.map((social) => (
            <button
              key={social.name}
              aria-label={social.name}
              onClick={() => setModal(social)}
              style={{
                display: "inline-flex",
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
            >
              {social.icon}
            </button>
          ))}
        </div>
      </div>

      {/* ============ COMING-SOON MODAL ============ */}
      {modal && (
        <div
          onClick={() => setModal(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            background: "rgba(59,42,20,0.55)",
            backdropFilter: "blur(2px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            fontFamily: sans,
            animation: "rokt-fade 0.18s ease both",
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="social-coming-soon-title"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "var(--color-rokt-light)",
              borderRadius: "20px",
              maxWidth: "420px",
              width: "100%",
              padding: "2.5rem 2.25rem 2rem",
              textAlign: "center",
              boxShadow: "0 30px 70px rgba(0,0,0,0.35)",
              animation: "rokt-pop 0.22s ease both",
              color: "#3b2a14",
            }}
          >
            <div
              style={{
                width: "64px",
                height: "64px",
                margin: "0 auto 1.25rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transform: "scale(2.2)",
                transformOrigin: "center",
              }}
              aria-hidden="true"
            >
              {modal.icon}
            </div>
            <h3
              id="social-coming-soon-title"
              style={{ fontFamily: lora, fontSize: "1.6rem", margin: "0 0 0.6rem", color: "#4a3318" }}
            >
              We&rsquo;re not on {modal.name} quite yet
            </h3>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.6, margin: "0 0 1.5rem", color: "#5a4a32" }}>
              Our {modal.name} page is in the works. In the meantime, the best
              way to reach us is by email:{" "}
              <a
                href="mailto:rootsofknowledgetutor@gmail.com"
                style={{
                  color: "var(--color-rokt-accent)",
                  fontWeight: 600,
                  textDecorationLine: "underline",
                  textUnderlineOffset: "3px",
                }}
              >
                rootsofknowledgetutor@gmail.com
              </a>
            </p>
            <GotItButton onClick={() => setModal(null)} />
          </div>
        </div>
      )}
    </footer>
  );
}
