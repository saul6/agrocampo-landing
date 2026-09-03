"use client";

import { useState, useEffect, useRef } from "react";
import { CaretDown, List, X } from "@phosphor-icons/react";
import { MadyLogo } from "./MadyLogo";

const areas = [
  { label: "Almacén", href: "#almacen", id: "almacen" },
  { label: "Campo", href: "#campo", id: "campo" },
  { label: "Cárnicos", href: "#carnicos", id: "carnicos" },
  { label: "Cuarto frío", href: "#cuarto-frio", id: "cuarto-frio" },
  { label: "Empacadora", href: "#empacadora", id: "empacadora" },
  { label: "Invernadero", href: "#invernadero", id: "invernadero" },
];

const areaIds = areas.map((a) => a.id);
const spySections = ["beneficios", "como-funciona", ...areaIds, "plan-personalizado"];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setAreasOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
        setMobileAreasOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Scroll-spy: resalta el link de la sección visible en el centro del viewport
  useEffect(() => {
    const elements = spySections
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        // Franja angosta a la mitad del viewport: la sección "activa" es
        // la que cruza esa línea mientras el usuario hace scroll.
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileAreasOpen(false);
  };

  const linkColor = scrolled ? "#173251" : "#ffffff";
  const linkHoverClass = scrolled ? "hover:text-[#2AAD95]" : "hover:text-white/75";
  const isAreaActive = activeId !== null && areaIds.includes(activeId);

  const activeColor = "#2AAD95";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled || mobileOpen ? "rgba(255,255,255,0.92)" : "transparent",
        backdropFilter: scrolled || mobileOpen ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled || mobileOpen ? "blur(14px)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(23,50,81,0.08)" : "none",
        transition: "background 0.3s, box-shadow 0.3s",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center" onClick={closeMobile}>
          <MadyLogo />
        </a>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#beneficios"
            className={`text-sm font-medium transition-colors ${linkHoverClass}`}
            style={{ color: activeId === "beneficios" ? activeColor : linkColor }}
          >
            Beneficios
          </a>

          <a
            href="#como-funciona"
            className={`text-sm font-medium transition-colors ${linkHoverClass}`}
            style={{ color: activeId === "como-funciona" ? activeColor : linkColor }}
          >
            Cómo funciona
          </a>

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
              style={{ color: isAreaActive ? activeColor : linkColor }}
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
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                style={{ minWidth: "190px" }}
              >
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: "rgba(255,255,255,0.72)",
                    border: "1px solid rgba(255,255,255,0.5)",
                    boxShadow: "0 12px 32px rgba(23,50,81,0.18)",
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
                      style={{
                        color: activeId === area.id ? "#2AAD95" : "#173251",
                        background: activeId === area.id ? "#E6F6F2" : "transparent",
                      }}
                    >
                      {area.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* CTA desktop */}
        <a
          href="#plan-personalizado"
          className="hidden md:inline-flex btn-primary text-sm font-semibold px-5 py-2 rounded-full"
        >
          Contáctanos
        </a>

        {/* Botón hamburguesa (mobile) */}
        <button
          type="button"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden flex items-center justify-center w-9 h-9"
          style={{ color: linkColor }}
        >
          {mobileOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
        </button>
      </div>

      {/* Panel mobile */}
      {mobileOpen && (
        <div
          className="md:hidden"
          style={{ background: "#ffffff", borderTop: "1px solid #E3E9EF" }}
        >
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            <a
              href="#beneficios"
              onClick={closeMobile}
              className="text-base font-medium py-3"
              style={{ color: activeId === "beneficios" ? "#2AAD95" : "#173251" }}
            >
              Beneficios
            </a>

            <a
              href="#como-funciona"
              onClick={closeMobile}
              className="text-base font-medium py-3"
              style={{ color: activeId === "como-funciona" ? "#2AAD95" : "#173251" }}
            >
              Cómo funciona
            </a>

            <button
              type="button"
              onClick={() => setMobileAreasOpen((v) => !v)}
              className="flex items-center justify-between text-base font-medium py-3"
              style={{ color: isAreaActive ? "#2AAD95" : "#173251" }}
            >
              Áreas
              <CaretDown
                size={16}
                weight="bold"
                style={{
                  transform: mobileAreasOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s",
                }}
              />
            </button>

            {mobileAreasOpen && (
              <div className="flex flex-col pl-4 pb-2">
                {areas.map((area) => (
                  <a
                    key={area.href}
                    href={area.href}
                    onClick={closeMobile}
                    className="text-sm py-2.5"
                    style={{ color: activeId === area.id ? "#2AAD95" : "#607286" }}
                  >
                    {area.label}
                  </a>
                ))}
              </div>
            )}

            <a
              href="#plan-personalizado"
              onClick={closeMobile}
              className="btn-primary text-sm font-semibold px-5 py-3 rounded-full text-center mt-3"
            >
              Contáctanos
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}