"use client";

import { useState, useEffect } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.07)" : "none",
        transition: "background 0.3s, box-shadow 0.3s",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-semibold text-lg tracking-tight" style={{ color: "#171717" }}>
          M.A.D.Y
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#beneficios" className="link-nav text-sm">Beneficios</a>
          <a href="#como-funciona" className="link-nav text-sm">Como funciona</a>
          <a href="#demo" className="link-nav text-sm">Demo</a>
        </nav>

        <a href="#lista-espera" className="btn-primary text-sm font-semibold px-5 py-2 rounded-full">
          Unirse
        </a>
      </div>
    </header>
  );
}
