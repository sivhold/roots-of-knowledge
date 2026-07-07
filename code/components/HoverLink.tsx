"use client";

import { useState } from "react";
import Link from "next/link";

/**
 * A next/link that swaps in a set of hover style overrides while the pointer is
 * over it. The redesign uses several buttons that darken and/or lift on hover,
 * and inline styles can't express :hover, so we track it in state.
 */
export default function HoverLink({
  href,
  base,
  hover,
  children,
}: {
  href: string;
  base: React.CSSProperties;
  hover: React.CSSProperties;
  children: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      style={{ textDecorationLine: "none", ...base, ...(hovered ? hover : {}) }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </Link>
  );
}
