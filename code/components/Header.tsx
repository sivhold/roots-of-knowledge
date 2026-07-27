"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// All pages exist as of 2026-07-12 — Enroll/Impact/Volunteer are contact-first
// placeholders (components/PlaceholderPage.tsx) until their full designs ship.
//
// `secondary: true` marks the links that collapse into the menu below 940px
// (see the responsive header rules in globals.css). Enroll stays visible
// alongside the Sponsorship pill because those are the two things a visitor
// actually comes here to do — hiding them behind a tap costs conversions.
const navLinks = [
  { label: "About", href: "/about", secondary: true },
  { label: "Programs", href: "/programs", secondary: true },
  { label: "Enroll", href: "/enroll", secondary: false },
  { label: "Impact", href: "/impact", secondary: true },
  { label: "Volunteer", href: "/volunteer", secondary: true },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the menu after navigating — without this it stays open over the new
  // page, since the header persists across route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Escape closes it, matching the modal pattern used on the Sponsorship page.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

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
        className="rokt-header-inner"
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
            // flexShrink: 0 — without it the flex row squashes the logo box
            // when space is tight (it collapsed to 26px wide at 375px), and
            // objectFit: contain then letterboxes the mark down to nothing.
            style={{
              height: "62px",
              width: "auto",
              objectFit: "contain",
              flexShrink: 0,
            }}
          />
          <span
            className="rokt-logo-wordmark"
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
          {/* Menu toggle — CSS shows this only below 940px. Sits first so the
              Sponsorship pill stays the rightmost element at every width. */}
          <button
            type="button"
            className="rokt-nav-menu-btn"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="rokt-nav-panel"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            style={{
              alignItems: "center",
              gap: "0.5rem",
              cursor: "pointer",
              background: "transparent",
              border: "1px solid rgba(253,246,236,0.35)",
              borderRadius: "6px",
              color: "var(--color-rokt-header-font)",
              fontFamily: "var(--font-source-sans), Arial, Helvetica, sans-serif",
              fontSize: "1.05rem",
              padding: "0.4rem 0.75rem",
            }}
          >
            <svg width="18" height="14" viewBox="0 0 18 14" aria-hidden="true">
              {menuOpen ? (
                <path
                  d="M2 2 L16 12 M16 2 L2 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M1 2h16M1 7h16M1 12h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
            <span className="rokt-nav-menu-label">Menu</span>
          </button>

          {navLinks.map(({ label, href, secondary }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={
                  secondary ? "rokt-nav-secondary rokt-nav-link" : "rokt-nav-link"
                }
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
            className="rokt-nav-pill"
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

      {/* Collapsed-nav panel. Lives outside the max-width wrapper so it spans
          the full header width. `data-open` drives visibility via CSS rather
          than conditional rendering, so the media query stays the single source
          of truth — an open menu can't survive a resize back to desktop. */}
      <div
        id="rokt-nav-panel"
        className="rokt-nav-panel"
        data-open={menuOpen}
        style={{
          position: "absolute",
          top: "100%",
          left: 0,
          right: 0,
          flexDirection: "column",
          backgroundColor: "var(--color-rokt-dark)",
          borderTop: "1px solid rgba(253,246,236,0.15)",
          boxShadow: "0 12px 24px rgba(0,0,0,0.25)",
          padding: "0.5rem 2rem 1rem",
        }}
      >
        {navLinks
          .filter(({ secondary }) => secondary)
          .map(({ label, href }) => {
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
                  // Generous vertical padding: these are touch targets on the
                  // screens where this panel exists at all.
                  padding: "0.85rem 0.5rem",
                  borderRadius: "6px",
                }}
              >
                {label}
              </Link>
            );
          })}
      </div>
    </header>
  );
}
