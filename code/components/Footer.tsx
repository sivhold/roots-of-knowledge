export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--color-rokt-dark)",
        color: "var(--color-rokt-footer-font)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          fontSize: "1.3rem",
          flexWrap: "wrap",
        }}
      >
        <span>© 2026 Roots of Knowledge Tutoring.</span>

        <span style={{ fontSize: "2rem", color: "var(--color-rokt-footer-font)" }}>•</span>

        <span>
          Contact:{" "}
          <a
            href="mailto:rootsofknowledgetutor@gmail.com"
            style={{
              color: "var(--color-rokt-footer-font)",
              textDecoration: "underline",
              textDecorationColor: "var(--color-rokt-footer-font)",
              textUnderlineOffset: "3px",
            }}
          >
            rootsofknowledgetutor@gmail.com
          </a>
        </span>

        <span style={{ fontSize: "2rem", color: "var(--color-rokt-footer-font)" }}>•</span>

        <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
          <a
            href="#"
            aria-label="Facebook"
            style={{ color: "var(--color-rokt-footer-font)", opacity: 0.85 }}
          >
            <svg width="27" height="27" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Twitter / X"
            style={{ color: "var(--color-rokt-footer-font)", opacity: 0.85 }}
          >
            <svg width="27" height="27" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M4 4l16 16M20 4 4 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
