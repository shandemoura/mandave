"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Início", href: "/#inicio" },
  { label: "Categorias", href: "/#categorias" },
  { label: "Catálogo", href: "/catalogo" },
  { label: "Orçamento", href: "/#orcamento" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }} className="sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="#inicio" className="flex items-center gap-3">
          <Image src="/images/logo.png" alt="Mandavê Personalizados" width={100} height={72} className="object-contain" />
          {/* <span style={{ color: "var(--primary)" }} className="font-bold text-lg tracking-wide hidden sm:block">
            Mandavê Personalizados
          </span> */}
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{ color: "var(--foreground)" }}
              className="text-sm font-medium hover:opacity-70 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#orcamento"
            style={{ background: "var(--primary)", color: "#0f0f0f" }}
            className="px-4 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity"
          >
            Solicitar Orçamento
          </Link>
        </nav>

        <button
          className="md:hidden p-2"
          style={{ color: "var(--foreground)" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div style={{ background: "var(--surface-2)", borderTop: "1px solid var(--border)" }} className="md:hidden px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{ color: "var(--foreground)" }}
              className="text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#orcamento"
            style={{ background: "var(--primary)", color: "#0f0f0f" }}
            className="px-4 py-2 rounded-lg text-sm font-bold text-center"
            onClick={() => setMenuOpen(false)}
          >
            Solicitar Orçamento
          </Link>
        </div>
      )}
    </header>
  );
}
