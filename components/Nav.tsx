"use client";

import { useState, useEffect, useRef } from "react";
import { CaretDown } from "@phosphor-icons/react";
import { MadyLogo } from "./MadyLogo";

const areas = [
  { label: "Almacén", href: "#almacen" },
  { label: "Campo", href: "#campo" },
  { label: "Cárnicos", href: "#carnicos" },
  { label: "Cuarto frío", href: "#cuarto-frio" },
  { label: "Empacadora", href: "#empacadora" },
  { label: "Invernadero", href: "#invernadero" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cierra el dropdown al hacer click/tap fuera
  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setAreasOpen(false);
      }
    };

    document.addEventListener("mousedown", onClickOutside);

    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const linkColor = scrolled ? "#0d1b2a" : "#ffffff";
  const linkHoverClass = scrolled
    ? "hover:text-[#2b7ab5]"
    : "hover:text-white/75";

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
        <a href="#" className="font-semibold text-lg tracking-tight">
          <MadyLogo theme={scrolled ? "light" : "dark"} />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#beneficios"
            className={`text-sm font-medium transition-colors ${linkHoverClass}`}
            style={{ color: linkColor }}
          >
            Beneficios
          </a>

          <a
            href="#como-funciona"
            className={`text-sm font-medium transition-colors ${linkHoverClass}`}
            style={{ color: linkColor }}
          >
            Como funciona
          </a>

          {/* Dropdown de Áreas */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setAreasOpen(true)}
            onMouseLeave={() => setAreasOpen(false)}
          >
            <button
              type="button"
              onClick={() => setAreasOpen((v) => !v)}
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${linkHoverClass}`}
              style={{ color: linkColor }}
            >
              Áreas
              <CaretDown
                size={14}
                weight="bold"
                style={{
                  transform: areasOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s",
                }}
              />
            </button>

            {areasOpen && (
              // Este wrapper "rellena" con padding el hueco entre el botón y el menú,
              // así el cursor nunca sale del área detectable al bajar en diagonal.
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                style={{ minWidth: "190px" }}
              >
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: "rgba(255,255,255,0.72)",
                    border: "1px solid rgba(255,255,255,0.5)",
                    boxShadow: "0 12px 32px rgba(13,90,143,0.18)",
                    backdropFilter: "blur(18px)",
                    WebkitBackdropFilter: "blur(18px)",
                  }}
                >
                  {areas.map((area) => (
                    <a
                      key={area.href}
                      href={area.href}
                      onClick={() => setAreasOpen(false)}
                      className="dropdown-item block px-4 py-2.5 text-sm font-medium transition-colors"
                      style={{ color: "#0d1b2a" }}
                    >
                      {area.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        <a
          href="#precios"
          className="btn-primary text-sm font-semibold px-5 py-2 rounded-full"
        >
          Contáctanos
        </a>
      </div>
    </header>
  );
}