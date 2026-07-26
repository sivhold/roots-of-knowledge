/**
 * Payment-method badge icons from the redesign handoff (PayIcon.dc.html).
 * Each is a 100×100 rounded-square inline SVG — no bitmap assets exist.
 * Rendered at 72px on the Sponsorship "Sponsor in a tap" cards and 76px inside
 * the coming-soon modal.
 */

export type PayMethod = "cashapp" | "venmo" | "paypal" | "square" | "card";

export default function PayIcon({ method, size }: { method: PayMethod; size: number }) {
  switch (method) {
    case "cashapp":
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" role="img" aria-label="Cash App">
          <rect width="100" height="100" rx="24" fill="#00D64F" />
          <text
            x="50"
            y="53"
            textAnchor="middle"
            dominantBaseline="central"
            fontFamily="var(--font-source-sans), Arial, sans-serif"
            fontWeight="700"
            fontSize="56"
            fill="#ffffff"
          >
            $
          </text>
        </svg>
      );
    case "venmo":
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" role="img" aria-label="Venmo">
          <rect width="100" height="100" rx="24" fill="#008CFF" />
          <text
            x="50"
            y="55"
            textAnchor="middle"
            dominantBaseline="central"
            fontFamily="var(--font-source-sans), Arial, sans-serif"
            fontWeight="700"
            fontSize="25"
            letterSpacing="-0.5"
            fill="#ffffff"
          >
            venmo
          </text>
        </svg>
      );
    case "paypal":
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" role="img" aria-label="PayPal">
          <rect width="100" height="100" rx="24" fill="#ffffff" stroke="#e7e0d2" strokeWidth="2" />
          <text
            x="40"
            y="52"
            textAnchor="middle"
            dominantBaseline="central"
            fontFamily="Georgia, 'Times New Roman', serif"
            fontStyle="italic"
            fontWeight="700"
            fontSize="60"
            fill="#003087"
          >
            P
          </text>
          <text
            x="58"
            y="60"
            textAnchor="middle"
            dominantBaseline="central"
            fontFamily="Georgia, 'Times New Roman', serif"
            fontStyle="italic"
            fontWeight="700"
            fontSize="60"
            fill="#0091DE"
          >
            P
          </text>
        </svg>
      );
    case "square":
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" role="img" aria-label="Square">
          <rect width="100" height="100" rx="24" fill="#000000" />
          <rect x="29" y="29" width="42" height="42" rx="9" fill="none" stroke="#ffffff" strokeWidth="9" />
        </svg>
      );
    case "card":
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" role="img" aria-label="Credit card">
          <rect x="10" y="24" width="80" height="52" rx="11" fill="#3d7a45" />
          <rect x="10" y="37" width="80" height="12" fill="#2f5f36" />
          <rect x="20" y="58" width="22" height="11" rx="3" fill="#e6d3ad" />
        </svg>
      );
  }
}
