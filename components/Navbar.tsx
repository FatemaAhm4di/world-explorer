"use client";

import Link from "next/link";
import { useState } from "react";
import { Globe, Menu, X, Compass, Search, Info } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home", icon: Compass },
    { href: "/countries", label: "Countries", icon: Globe },
    { href: "/search", label: "Search", icon: Search },
    { href: "/about", label: "About", icon: Info },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">
          <Globe size={24} />
          World Explorer
        </Link>

        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="navbar-link"
                onClick={() => setIsOpen(false)}
              >
                <Icon size={18} />
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}