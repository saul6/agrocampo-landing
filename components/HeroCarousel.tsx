"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const slides = [
  { src: "/images/almacen.jpg", alt: "Campo de fresas certificado para exportación con trazabilidad PrimusGFS" },
  { src: "/images/campo.jpg", alt: "Parcela agrícola de berries con registros de inocuidad BPA" },
  { src: "/images/carnicos.jpg", alt: "Cultivo de berries en temporada de cosecha bajo normas GlobalGAP" },
  { src: "/images/cuartofrio.jpg", alt: "Berries maduros listos para cosecha y liberación documentada" },
  { src: "/images/empacadora.jpeg", alt: "Trabajadores agrícolas aplicando protocolos de inocuidad SENASICA" },
  { src: "/images/invernadero.jpeg", alt: "Cosecha de berries con documentación oficial para auditorías agrícolas" },
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const advance = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(advance, 5000);
    return () => clearInterval(id);
  }, [advance, paused]);

  return (
    <>
      {/* Image stack — each image fades in/out, con zoom lento (Ken Burns) */}
      <div className="absolute inset-0 overflow-hidden">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 overflow-hidden"
            style={{
              opacity: i === current ? 1 : 0,
              transition: "opacity 1.4s cubic-bezier(0.4, 0, 0.2, 1)",
              zIndex: i === current ? 1 : 0,
            }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover object-center kenburns"
              priority={i === 0}
              sizes="100vw"
              quality={75}
            />
          </div>
        ))}
      </div>

      {/* Overlay navy oficial M.A.D.Y — direccional: opaco izquierda (texto), se abre a la derecha (foto) */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(61, 66, 64, 0.8) 0%, rgba(61, 66, 64,0.5) 45%, rgba(61, 66, 64,0.45) 100%)",
        }}
      />

      {/* Capa vertical: oscurece ligeramente arriba y abajo, respira en el centro */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(61, 66, 64,0.6) 0%, transparent 30%, transparent 65%, rgba(61, 66, 64,0.56) 100%)",
        }}
      />

      {/* Dot indicators */}
      <div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-[7px] z-20"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Imagen ${i + 1}`}
            style={{
              height: "5px",
              width: i === current ? "22px" : "5px",
              borderRadius: "9999px",
              background: i === current ? "#ffffff" : "rgba(255,255,255,0.38)",
              border: "none",
              padding: 0,
              cursor: "pointer",
              transition: "width 0.35s ease, background 0.35s ease",
            }}
          />
        ))}
      </div>
    </>
  );
}