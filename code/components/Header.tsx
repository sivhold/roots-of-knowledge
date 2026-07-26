"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// All pages exist as of 2026-07-12 — Enroll/Impact/Volunteer are contact-first
// placeholders (components/PlaceholderPage.tsx) until their full designs ship.
const navLinks = [
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Enroll", href: "/enroll" },
  { label: "Impact", href: "/impact" },
  { label: "Volunteer", href: "/volunteer" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      style={{
        backgroundColor: "var(--color-rokt-dark)",
        color: "var(--color-rokt-header-font)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2rem",
          height: "88px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo lockup — logo image + two-line wordmark */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.85rem",
            color: "var(--color-rokt-header-font)",
            textDecorationLine: "none",
          }}
        >
          <Image
            src="/fulllogo-transparent-trimmed-bg.png"
            alt="Roots of Knowledge Tutoring logo"
            width={910}
            height={881}
            priority
            style={{ height: "62px", width: "auto", objectFit: "contain" }}
          />
          <span
            style={{
              fontFamily: "var(--font-lora), Georgia, serif",
              fontWeight: 600,
              fontSize: "1.25rem",
              letterSpacing: "0.02em",
              lineHeight: 1.1,
            }}
          >
            Roots&nbsp;of&nbsp;Knowledge
            <br />
            <span
              style={{
                fontFamily: "var(--font-source-sans), Arial, Helvetica, sans-serif",
                fontSize: "0.8rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                opacity: 0.8,
              }}
            >
              Tutoring
            </span>
          </span>
        </Link>

        {/* Primary navigation */}
        <nav style={{ display: "flex", gap: "0.4rem", alignItems: "center" }}>
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? "page" : undefined}
                style={{
                  color: "var(--color-rokt-header-font)",
                  fontFamily: "var(--font-source-sans), Arial, Helvetica, sans-serif",
                  textDecorationLine: isActive ? "underline" : "none",
                  textUnderlineOffset: "4px",
                  fontSize: "1.2rem",
                  padding: "0.45rem 0.9rem",
                  borderRadius: "6px",
                  backgroundColor: "transparent",
                  transition: "background-color 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "rgba(61,122,69,0.3)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "transparent";
                }}
              >
                {label}
              </Link>
            );
          })}

          {/* Sponsorship — visually distinct green pill CTA.
              Labelled "Sponsorship", not "Donate": ROKT is an LLC, so
              contributions are not tax-deductible and Carol asked (2026-07-23)
              that donation language become sponsorship language site-wide.
              Her wording, kept verbatim at Geoff's direction.
              The route moved /donate -> /sponsorship at the same time; old
              links are covered by the 301 in public/_redirects. */}
          <Link
            href="/sponsorship"
            aria-current={pathname === "/sponsorship" ? "page" : undefined}
            style={{
              color: "var(--color-rokt-header-font)",
              fontFamily: "var(--font-source-sans), Arial, Helvetica, sans-serif",
              // Matches the active-underline treatment on the five nav links
              // above, so the pill isn't the one item that never shows where
              // you are.
              textDecorationLine:
                pathname === "/sponsorship" ? "underline" : "none",
              textUnderlineOffset: "4px",
              fontSize: "1.2rem",
              fontWeight: 600,
              padding: "0.45rem 1.3rem",
              borderRadius: "999px",
              backgroundColor: "var(--color-rokt-accent)",
              marginLeft: "0.5rem",
              transition: "background-color 0.15s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#34693c";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                "var(--color-rokt-accent)";
            }}
          >
            Sponsorship
          </Link>
        </nav>
      </div>
    </header>
  );
}
