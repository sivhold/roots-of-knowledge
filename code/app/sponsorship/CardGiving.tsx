"use client";

import { useState } from "react";

/**
 * "Sponsor by card" section from the redesign handoff: a big green
 * "Sponsor with Credit Card" button, accepted-network badges, and a
 * "Powered by Stripe" caption.
 *
 * Stripe checkout isn't wired up yet (pending Carol's confirmation —
 * see CLAUDE.md), so the button takes an onClick that opens the shared
 * coming-soon modal. When Stripe is live, swap the button for a link
 * to the real checkout URL.
 */

const sans = "var(--font-source-sans), Arial, Helvetica, sans-serif";

const badgeBase: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  height: "26px",
  padding: "0 9px",
  background: "#fff",
  border: "1px solid #e2d6bd",
  borderRadius: "5px",
  fontFamily: sans,
  fontSize: "0.72rem",
};

export default function CardGiving({ onClick }: { onClick: () => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <section style={{ padding: "1.25rem 2rem 2.5rem" }}>
      <div
        style={{
          maxWidth: "520px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <button
          onClick={onClick}
          style={{
            cursor: "pointer",
            border: "none",
            width: "100%",
            maxWidth: "460px",
            background: hovered ? "#34693c" : "var(--color-rokt-accent)",
            color: "var(--color-rokt-light)",
            fontFamily: sans,
            fontWeight: 700,
            fontSize: "1.2rem",
            padding: "1.1rem 1.75rem",
            borderRadius: "999px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.7rem",
            boxShadow: "0 14px 30px rgba(61,122,69,0.32)",
            transform: hovered ? "translateY(-2px)" : "none",
            transition: "background 0.15s ease, transform 0.15s ease",
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="2" y="5" width="20" height="14" rx="2.5" fill="none" stroke="#fdf6ec" strokeWidth="2" />
            <rect x="2" y="8.5" width="20" height="3.2" fill="#fdf6ec" />
          </svg>
          Sponsor with Credit Card
        </button>

        {/* Accepted networks */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <span style={{ ...badgeBase, fontWeight: 800, fontStyle: "italic", letterSpacing: "0.03em", color: "#1A1F71" }}>
            VISA
          </span>
          <span style={{ ...badgeBase, padding: "0 7px" }}>
            <svg width="30" height="18" viewBox="0 0 30 18" aria-label="Mastercard">
              <circle cx="12" cy="9" r="7.5" fill="#EB001B" />
              <circle cx="18" cy="9" r="7.5" fill="#F79E1B" fillOpacity="0.92" />
            </svg>
          </span>
          <span style={{ ...badgeBase, fontWeight: 800, letterSpacing: "0.03em", color: "#006FCF" }}>
            AMEX
          </span>
          <span style={{ ...badgeBase, fontWeight: 700, color: "#111" }}>Apple&nbsp;Pay</span>
          <span style={{ ...badgeBase, fontWeight: 700, color: "#111" }}>Google&nbsp;Pay</span>
        </div>

        <span style={{ fontSize: "0.8rem", color: "#9c8a68", letterSpacing: "0.01em" }}>
          Powered by <strong style={{ color: "#635BFF", fontWeight: 700 }}>Stripe</strong>
        </span>
      </div>
    </section>
  );
}
