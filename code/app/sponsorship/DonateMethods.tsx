"use client";

import { useEffect, useState } from "react";
import PayIcon, { type PayMethod } from "@/components/PayIcon";
import { eyebrow as baseEyebrow } from "@/lib/typography";
import CardGiving from "./CardGiving";

/**
 * Everything below the sponsorship chooser: the Stripe card section, the
 * "or sponsor another way" divider, the Zelle / Check cards, the
 * "Sponsor in a tap" app grid, and the shared coming-soon modal.
 *
 * One client component because the modal is opened from both the
 * credit-card button and the tap cards.
 *
 * DEMO NOTE: all payment elements are currently visible so Carol can
 * review the full design. None of the digital methods are wired up —
 * they open the coming-soon modal. After her demo, hide whatever she
 * hasn't confirmed by removing entries from `tapMethods` and/or
 * rendering without <CardGiving /> (see CLAUDE.md constraints).
 */

type ModalInfo = { key: PayMethod; name: string };

const tapMethods: ModalInfo[] = [
  { key: "cashapp", name: "Cash App" },
  { key: "venmo", name: "Venmo" },
  { key: "paypal", name: "PayPal" },
  { key: "square", name: "Square" },
];

const lora = "var(--font-lora), Georgia, serif";
const sans = "var(--font-source-sans), Arial, Helvetica, sans-serif";

const eyebrow: React.CSSProperties = {
  ...baseEyebrow,
  color: "var(--color-rokt-accent)",
};

const detailLabel: React.CSSProperties = {
  fontSize: "0.72rem",
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "#e6b877",
  fontWeight: 700,
  minWidth: "52px",
};

const darkCard: React.CSSProperties = {
  background: "var(--color-rokt-dark)",
  color: "var(--color-rokt-light)",
  borderRadius: "16px",
  padding: "2rem 1.9rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.85rem",
};

function TapCard({ method, onClick }: { method: ModalInfo; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      style={{
        cursor: "pointer",
        background: "#fff",
        border: "1px solid #ead9bb",
        borderRadius: "16px",
        padding: "2rem",
        display: "flex",
        alignItems: "center",
        gap: "1.4rem",
        boxShadow: hovered
          ? "0 14px 32px rgba(107,74,43,0.16)"
          : "0 8px 22px rgba(107,74,43,0.08)",
        transform: hovered ? "translateY(-3px)" : "none",
        transition: "transform 0.15s ease, box-shadow 0.15s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ flex: "none", width: "72px", height: "72px" }}>
        <PayIcon method={method.key} size={72} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", minWidth: 0 }}>
        <span style={{ fontFamily: lora, fontSize: "1.45rem", color: "#4a3318", lineHeight: 1.1 }}>
          {method.name}
        </span>
        <span
          style={{
            fontSize: "0.98rem",
            color: "var(--color-rokt-accent)",
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            gap: "0.35rem",
          }}
        >
          Tap to sponsor&nbsp;&rarr;
        </span>
      </div>
    </div>
  );
}

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

export default function DonateMethods() {
  const [modal, setModal] = useState<ModalInfo | null>(null);

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
    <>
      <CardGiving onClick={() => setModal({ key: "card", name: "Credit card sponsorship" })} />

      {/* ============ DIVIDER ============ */}
      <section style={{ padding: "0 2rem" }}>
        <div
          style={{
            maxWidth: "820px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <div style={{ flex: 1, height: "1px", background: "#e2d6bd" }} />
          <span
            style={{
              fontSize: "0.85rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontWeight: 700,
              color: "#a3906a",
            }}
          >
            or sponsor another way
          </span>
          <div style={{ flex: 1, height: "1px", background: "#e2d6bd" }} />
        </div>
      </section>

      {/* ============ WAYS TO SPONSOR (Zelle + Check) ============ */}
      <section style={{ padding: "2.5rem 2rem 1rem" }}>
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <span style={eyebrow}>Ways to sponsor</span>
            <h2
              style={{
                fontFamily: lora,
                fontSize: "2rem",
                lineHeight: 1.2,
                margin: "0.6rem 0 0",
                color: "#4a3318",
              }}
            >
              Sponsor by Zelle or a mailed check
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {/* Zelle */}
            <div style={darkCard}>
              <h3 style={{ fontFamily: lora, fontSize: "1.5rem", margin: 0, color: "var(--color-rokt-light)" }}>
                Zelle
              </h3>
              <p style={{ margin: 0, fontSize: "1.02rem", lineHeight: 1.55, opacity: 0.9 }}>
                Send directly from your bank&rsquo;s Zelle to:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "0.15rem" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem" }}>
                  <span style={detailLabel}>Phone</span>
                  <span style={{ fontSize: "1.12rem", fontWeight: 600 }}>310-597-3810</span>
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem" }}>
                  <span style={detailLabel}>Email</span>
                  <span style={{ fontSize: "1.05rem", fontWeight: 600, wordBreak: "break-all" }}>
                    rootsofknowledgetutor@gmail.com
                  </span>
                </div>
              </div>
              <p style={{ margin: "0.4rem 0 0", fontSize: "0.95rem", lineHeight: 1.5, opacity: 0.78 }}>
                Add memo: <strong style={{ opacity: 1 }}>Roots of Knowledge Tutoring</strong>
              </p>
            </div>

            {/* Check by Mail */}
            <div style={darkCard}>
              <h3 style={{ fontFamily: lora, fontSize: "1.5rem", margin: 0, color: "var(--color-rokt-light)" }}>
                Check by Mail
              </h3>
              <p style={{ margin: 0, fontSize: "1.02rem", lineHeight: 1.55, opacity: 0.9 }}>
                Make your check payable to:
              </p>
              <div style={{ fontSize: "1.12rem", fontWeight: 600, lineHeight: 1.3 }}>
                Roots of Knowledge Tutoring
              </div>
              <p style={{ margin: "0.4rem 0 0", fontSize: "0.98rem", lineHeight: 1.55, opacity: 0.85 }}>
                Call <strong style={{ opacity: 1 }}>310-597-3810</strong>{" "}
                and we&rsquo;ll gladly share our mailing address.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SPONSOR IN A TAP ============ */}
      <section style={{ padding: "2.5rem 2rem 4rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <span style={eyebrow}>Sponsor in a tap</span>
          <h2
            style={{
              fontFamily: lora,
              fontSize: "2rem",
              lineHeight: 1.2,
              margin: "0.6rem 0 0.5rem",
              color: "#4a3318",
            }}
          >
            Sponsor from your favorite app
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.6,
              margin: "0 auto 2.25rem",
              color: "#5a4a32",
              maxWidth: "560px",
            }}
          >
            Tap any app below to sponsor in seconds.
          </p>
        </div>
        <div
          style={{
            maxWidth: "820px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {tapMethods.map((method) => (
            <TapCard key={method.key} method={method} onClick={() => setModal(method)} />
          ))}
        </div>
      </section>

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
            aria-labelledby="coming-soon-title"
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
            }}
          >
            <div style={{ width: "76px", height: "76px", margin: "0 auto 1.25rem" }}>
              <PayIcon method={modal.key} size={76} />
            </div>
            <h3
              id="coming-soon-title"
              style={{ fontFamily: lora, fontSize: "1.6rem", margin: "0 0 0.6rem", color: "#4a3318" }}
            >
              {modal.name} is coming soon
            </h3>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.6, margin: "0 0 1.5rem", color: "#5a4a32" }}>
              We&rsquo;re still setting this one up. In the meantime, you can sponsor right
              now through <strong>Zelle</strong> or a <strong>mailed check</strong>{" "}
              &mdash; see the details just above.
            </p>
            <GotItButton onClick={() => setModal(null)} />
          </div>
        </div>
      )}
    </>
  );
}
