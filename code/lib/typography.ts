/**
 * Shared typography fragments.
 *
 * `eyebrow` is the small uppercase label that sits above a section heading
 * ("Our Mission", "How We Work", "What We Stand For"). It was previously
 * copy-pasted into six files, which let the sizes drift apart — the About
 * mission/vision cards had quietly fallen to 0.8rem while everywhere else
 * used 0.85rem.
 *
 * Sizing note (Carol's feedback, 2026-07-23): at 0.85rem these labels rendered
 * SMALLER than the 1.15-1.2rem body copy below them, so they read as captions
 * rather than as section headers. They're now 1.25rem so they sit clearly
 * above body text in the hierarchy. Letter-spacing is pulled back from 0.22em
 * to 0.16em because tracking that wide starts to sprawl at the larger size.
 *
 * Import this instead of redeclaring it — one edit here moves every page.
 */
export const eyebrow: React.CSSProperties = {
  display: "inline-block",
  fontSize: "1.25rem",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  fontWeight: 700,
};
