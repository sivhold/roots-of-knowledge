"use client";

import { useState } from "react";

/**
 * Interactive "choose your sponsorship" block: One-time / Monthly pill
 * toggle, amount chips, and the impact line that names what the selected
 * amount does. Selection only drives the copy — the actual payment happens
 * through the methods listed below this section.
 *
 * Copy note: ROKT is an LLC, so contributions are not tax-deductible and all
 * user-visible wording is sponsorship language, never gift/give/donation
 * (Carol, 2026-07-23). The internal `gift*` identifiers below are historical.
 */

type Amount = {
  id: string;
  label: string;
  desc: string;
  impact: string;
};

const onceAmounts: Amount[] = [
  { id: "25", label: "$25", desc: "", impact: "puts a fresh set of books in a child’s hands" },
  { id: "50", label: "$50", desc: "", impact: "covers a month of learning materials for a young reader" },
  { id: "100", label: "$100", desc: "", impact: "keeps a whole tutoring group supplied all season" },
  { id: "other", label: "Other", desc: "", impact: "Sponsor any amount that feels right — it all goes to books and tutoring." },
];

const monthlyAmounts: Amount[] = [
  { id: "30", label: "$30 / mo", desc: "sponsors one child", impact: "sponsors one child’s reading journey, every month" },
  { id: "60", label: "$60 / mo", desc: "sponsors two children", impact: "sponsors two children’s reading journeys, every month" },
  { id: "other", label: "Other", desc: "sponsor monthly", impact: "Sponsor any amount each month — steady support keeps our sessions running." },
];

const sans = "var(--font-source-sans), Arial, Helvetica, sans-serif";

function ToggleButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      style={{
        cursor: "pointer",
        border: "none",
        fontFamily: sans,
        fontWeight: 600,
        fontSize: "1rem",
        padding: "0.6rem 1.4rem",
        borderRadius: "999px",
        background: active ? "var(--color-rokt-accent)" : "transparent",
        color: active ? "var(--color-rokt-light)" : hovered ? "#4a3318" : "#6b4a2b",
        boxShadow: active ? "0 3px 10px rgba(61,122,69,0.3)" : "none",
        transition: "color 0.15s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </button>
  );
}

function AmountChip({
  amount,
  selected,
  onClick,
}: {
  amount: Amount;
  selected: boolean;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      aria-pressed={selected}
      style={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.15rem",
        flex: "1 1 0",
        minWidth: "120px",
        minHeight: "76px",
        padding: "0.9rem 1.4rem",
        borderRadius: "16px",
        background: selected ? "var(--color-rokt-accent)" : "#fff",
        color: selected ? "var(--color-rokt-light)" : "#4a3318",
        border: selected
          ? "2px solid var(--color-rokt-accent)"
          : `2px solid ${hovered ? "var(--color-rokt-accent)" : "#ead9bb"}`,
        boxShadow: selected
          ? "0 12px 26px rgba(61,122,69,0.30)"
          : "0 5px 14px rgba(107,74,43,0.07)",
        transform: !selected && hovered ? "translateY(-2px)" : "none",
        transition: "transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span style={{ fontFamily: sans, fontWeight: 700, fontSize: "1.5rem", lineHeight: 1 }}>
        {amount.label}
      </span>
      {amount.desc && (
        <span
          style={{
            fontSize: "0.82rem",
            fontWeight: 600,
            color: selected ? "#e7f5e6" : "var(--color-rokt-accent)",
          }}
        >
          {amount.desc}
        </span>
      )}
    </button>
  );
}

export default function GiftChooser() {
  const [giftMode, setGiftMode] = useState<"once" | "monthly">("once");
  const [amountId, setAmountId] = useState<string | null>(null);

  const amounts = giftMode === "monthly" ? monthlyAmounts : onceAmounts;
  const selected = amounts.find((a) => a.id === amountId) ?? null;
  const impactMsg = selected
    ? selected.id === "other"
      ? selected.impact
      : `Your ${selected.label} sponsorship ${selected.impact}.`
    : null;

  // Switching modes resets the selection — the amounts mean different things.
  const setMode = (mode: "once" | "monthly") => {
    setGiftMode(mode);
    setAmountId(null);
  };

  return (
    <div style={{ maxWidth: "720px", margin: "1.9rem auto 0" }}>
      {/* One-time / Monthly pill toggle */}
      <div
        style={{
          display: "flex",
          gap: "0.35rem",
          background: "#f0e2c6",
          padding: "0.4rem",
          borderRadius: "999px",
          margin: "0 auto 1.75rem",
          width: "fit-content",
        }}
      >
        <ToggleButton active={giftMode === "once"} onClick={() => setMode("once")}>
          One-time sponsorship
        </ToggleButton>
        <ToggleButton active={giftMode === "monthly"} onClick={() => setMode("monthly")}>
          Monthly sponsorship
        </ToggleButton>
      </div>

      {/* Amount chips */}
      <div style={{ display: "flex", gap: "0.9rem", justifyContent: "center", flexWrap: "wrap" }}>
        {amounts.map((amount) => (
          <AmountChip
            key={amount.id}
            amount={amount}
            selected={amountId === amount.id}
            onClick={() => setAmountId(amount.id)}
          />
        ))}
      </div>

      {/* Impact lines — fixed min-height (two lines) so the layout doesn't jump on select */}
      <div style={{ minHeight: "4.25rem", marginTop: "1.5rem", textAlign: "center" }}>
        {impactMsg ? (
          <>
            <p style={{ fontSize: "1.12rem", lineHeight: 1.55, margin: 0, color: "#4a3318" }}>
              {impactMsg}
            </p>
            <p
              style={{
                fontSize: "1.12rem",
                lineHeight: 1.55,
                margin: "0.35rem 0 0",
                color: "var(--color-rokt-accent)",
                fontWeight: 600,
              }}
            >
              Now choose how to send it&nbsp;&darr;
            </p>
          </>
        ) : (
          <p style={{ fontSize: "1.02rem", lineHeight: 1.55, margin: 0, color: "#9c8a68" }}>
            Select an amount above, then pick a way to send it below.
          </p>
        )}
      </div>
    </div>
  );
}
