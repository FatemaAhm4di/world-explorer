// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "🏠 Home" },
    { href: "/countries", label: "🌎 Countries" },
    { href: "/search", label: "🔍 Search" },
    { href: "/about", label: "📖 About" },
  ];

  return (
    <nav style={{ backgroundColor: "#1e3a8a", color: "white", padding: "1rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
        
        <Link href="/" style={{ fontSize: "1.5rem", fontWeight: "bold", textDecoration: "none", color: "white" }}>
          🌍 World Explorer
        </Link>

        {/* دکمه همبرگری برای موبایل */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: "none",
            border: "none",
            color: "white",
            fontSize: "1.5rem",
            cursor: "pointer",
            display: "block",
          }}
        >
          ☰
        </button>

        {/* لینک‌ها */}
        <div
          style={{
            display: isOpen ? "block" : "none",
            width: "100%",
            marginTop: "1rem",
          }}
        >
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {navLinks.map((link) => (
              <li key={link.href} style={{ marginBottom: "0.5rem" }}>
                <Link href={link.href} style={{ color: "white", textDecoration: "none" }} onClick={() => setIsOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}