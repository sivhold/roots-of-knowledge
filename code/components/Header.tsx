"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Enroll", href: "/enroll" },
  { label: "Impact", href: "/impact" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Donate", href: "/donate" },
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
          padding: "0 2rem",
          height: "120px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            color: "var(--color-rokt-header-font)",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "1.65rem",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          <Image
            src="/full-logo-trimmed.jpg"
            alt="Roots of Knowledge Tutoring logo"
            width={108}
            height={108}
            style={{ objectFit: "contain" }}
          />
          Roots of Knowledge Tutoring
        </Link>

        <nav style={{ display: "flex", gap: "0.25rem", alignItems: "center", paddingRight: "1rem" }}>
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                style={{
                  color: "var(--color-rokt-header-font)",
                  textDecoration: "none",
                  fontSize: "1.425rem",
                  padding: "0.4rem 0.85rem",
                  borderRadius: "6px",
                  backgroundColor: isActive ? "var(--color-rokt-accent)" : "transparent",
                  transition: "transform 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(61,122,69,0.25)";
                  }
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px) scale(1.06)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 12px rgba(0,0,0,0.25)";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                  }
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0) scale(1)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
