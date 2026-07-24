import HoverLink from "@/components/HoverLink";
import { eyebrow as baseEyebrow } from "@/lib/typography";

/**
 * Shared shell for pages that exist but don't have their full design yet
 * (Enroll / Impact / Volunteer, added 2026-07-12). Instead of a 404 or a bare
 * "Coming Soon", each page greets visitors properly and routes them to real
 * contact channels. When a page gets its full build, its page.tsx simply
 * stops using this component.
 */

const lora = "var(--font-lora), Georgia, serif";

const eyebrow: React.CSSProperties = {
  ...baseEyebrow,
  color: "var(--color-rokt-accent)",
};

export default function PlaceholderPage({
  eyebrowText,
  title,
  blurb,
  contactPrompt,
  emailSubject,
}: {
  eyebrowText: string;
  title: string;
  blurb: string;
  /** One line above the contact buttons, e.g. "Email or call — we'll take it from there." */
  contactPrompt: string;
  /** Prefilled subject line for the mailto link, e.g. "Enrollment inquiry" */
  emailSubject: string;
}) {
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
          <span style={{ ...eyebrow, marginBottom: "1rem" }}>{eyebrowText}</span>
          <h1
            style={{
              fontFamily: lora,
              fontSize: "3rem",
              lineHeight: 1.15,
              margin: "0 0 1.1rem",
              color: "#4a3318",
            }}
          >
            {title}
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
            {blurb}
          </p>
        </div>
      </section>

      {/* ============ REACH OUT CARD ============ */}
      <section style={{ background: "var(--color-rokt-light)", padding: "3.5rem 2rem 5rem" }}>
        <div
          style={{
            maxWidth: "620px",
            margin: "0 auto",
            background: "#fff",
            border: "1px solid #ead9bb",
            borderRadius: "16px",
            padding: "3rem 2.5rem",
            boxShadow: "0 8px 24px rgba(107,74,43,0.08)",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontFamily: lora,
              fontSize: "1.8rem",
              lineHeight: 1.25,
              margin: "0 0 0.75rem",
              color: "#4a3318",
            }}
          >
            Reach out — we&rsquo;d love to hear from you
          </h2>
          <p
            style={{
              fontSize: "1.15rem",
              lineHeight: 1.6,
              margin: "0 0 1.9rem",
              color: "#5a4a32",
            }}
          >
            {contactPrompt}
          </p>

          <div
            style={{
              display: "flex",
              gap: "1.1rem",
              flexWrap: "wrap",
              justifyContent: "center",
              marginBottom: "1.6rem",
            }}
          >
            <HoverLink
              href={`mailto:rootsofknowledgetutor@gmail.com?subject=${encodeURIComponent(emailSubject)}`}
              base={{
                padding: "0.95rem 2.2rem",
                borderRadius: "999px",
                background: "var(--color-rokt-accent)",
                color: "var(--color-rokt-light)",
                fontSize: "1.08rem",
                fontWeight: 600,
                boxShadow: "0 6px 18px rgba(61,122,69,0.32)",
                transition: "background 0.15s ease, transform 0.15s ease",
              }}
              hover={{ background: "#34693c", transform: "translateY(-2px)" }}
            >
              Email Us
            </HoverLink>
            <HoverLink
              href="tel:310-597-3810"
              base={{
                padding: "0.95rem 2.2rem",
                borderRadius: "999px",
                background: "transparent",
                color: "#5a3d1e",
                border: "2px solid #5a3d1e",
                fontSize: "1.08rem",
                fontWeight: 600,
                transition: "background 0.15s ease, color 0.15s ease",
              }}
              hover={{ background: "#5a3d1e", color: "var(--color-rokt-light)" }}
            >
              Call 310-597-3810
            </HoverLink>
          </div>

          <p style={{ fontSize: "1.02rem", lineHeight: 1.55, margin: 0, color: "#5a4a32" }}>
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

          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.5,
              margin: "1.75rem 0 0",
              color: "#8a7455",
            }}
          >
            We&rsquo;re putting the finishing touches on this page — everything
            above works today.
          </p>
        </div>
      </section>
    </div>
  );
}
