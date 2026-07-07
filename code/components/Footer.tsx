export default function Footer() {
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
          fontFamily: "var(--font-source-sans), Arial, Helvetica, sans-serif",
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
              textDecoration: "underline",
              textUnderlineOffset: "3px",
            }}
          >
            rootsofknowledgetutor@gmail.com
          </a>
        </span>

        <span style={{ opacity: 0.5 }}>•</span>

        {/* Social links — href="#" placeholders until Carol provides real URLs.
            Official brand marks in their brand colors: Facebook white "f" on
            #1877F2, X white glyph on black. */}
        <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
          <a href="#" aria-label="Facebook" style={{ display: "inline-flex" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="12" fill="#1877F2" />
              <path
                fill="#fff"
                d="M16.671 15.469l.532-3.469h-3.328V9.749c0-.949.465-1.874 1.956-1.874h1.513V4.922s-1.374-.235-2.686-.235c-2.741 0-4.533 1.662-4.533 4.669V12H6.877v3.469h3.047v8.385a12.13 12.13 0 0 0 3.751 0v-8.385h2.796z"
              />
            </svg>
          </a>
          <a href="#" aria-label="X" style={{ display: "inline-flex" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="12" fill="#000000" />
              <path
                fill="#fff"
                transform="translate(4.56 4.56) scale(0.62)"
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
