"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Warehouse,
  Tractor,
  Cow,
  Snowflake,
  Package,
  Plant,
  CaretLeft,
  CaretRight,
} from "@phosphor-icons/react";

const areas = [
  { label: "Almacén", href: "#almacen", icon: Warehouse },
  { label: "Campo", href: "#campo", icon: Tractor },
  { label: "Cárnicos", href: "#carnicos", icon: Cow },
  { label: "Cuarto frío", href: "#cuarto-frio", icon: Snowflake },
  { label: "Empacadora", href: "#empacadora", icon: Package },
  { label: "Invernadero", href: "#invernadero", icon: Plant },
];

const COUNT = areas.length;
const ITEM_WIDTH = 190;
const GAP = 12;
const STEP = ITEM_WIDTH + GAP;
const TRANSITION_MS = 350;
const AUTO_INTERVAL_MS = 3200;

export function AreaCarousel() {
  const extended = [...areas, ...areas, ...areas];

  const [index, setIndex] = useState(COUNT);
  const [withTransition, setWithTransition] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const dragState = useRef({ startX: 0, moved: false });
  const wheelLock = useRef(false);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (index >= COUNT * 2 || index < COUNT) {
      const timer = setTimeout(() => {
        setWithTransition(false);
        setIndex((i) => (i >= COUNT * 2 ? i - COUNT : i + COUNT));
      }, TRANSITION_MS);
      return () => clearTimeout(timer);
    }
  }, [index]);

  useEffect(() => {
    if (!withTransition) {
      const raf = requestAnimationFrame(() => setWithTransition(true));
      return () => cancelAnimationFrame(raf);
    }
  }, [withTransition]);

  useEffect(() => {
    if (isPaused || isDragging || reducedMotion.current) return;
    const id = setInterval(() => {
      setWithTransition(true);
      setIndex((i) => i + 1);
    }, AUTO_INTERVAL_MS);
    return () => clearInterval(id);
  }, [isPaused, isDragging]);

  const next = () => {
    setWithTransition(true);
    setIndex((i) => i + 1);
  };

  const prev = () => {
    setWithTransition(true);
    setIndex((i) => i - 1);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    dragState.current = { startX: e.clientX, moved: false };
    setIsDragging(true);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const delta = e.clientX - dragState.current.startX;
    if (Math.abs(delta) > 4) dragState.current.moved = true;
    setDragOffset(delta);
  };

  const endDrag = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset <= -50) next();
    else if (dragOffset >= 50) prev();
    setDragOffset(0);
  };

  const onItemClick = (e: React.MouseEvent) => {
    if (dragState.current.moved) {
      e.preventDefault();
      dragState.current.moved = false;
    }
  };

  const onWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) return;
    if (Math.abs(e.deltaX) < 15) return;
    if (wheelLock.current) return;

    wheelLock.current = true;
    if (e.deltaX > 0) next();
    else prev();

    window.setTimeout(() => {
      wheelLock.current = false;
    }, TRANSITION_MS + 100);
  };

  const translateX = -(index * STEP) + dragOffset;
  const transition = isDragging || !withTransition ? "none" : `transform ${TRANSITION_MS}ms ease`;

  return (
    <div
      className="flex items-center gap-3"
      style={{ width: "min(90vw, 620px)" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <button
        type="button"
        aria-label="Área anterior"
        onClick={prev}
        className="carousel-arrow shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
      >
        <CaretLeft size={16} weight="bold" />
      </button>

      <div className="overflow-hidden flex-1" onWheel={onWheel}>
        <div
          className="flex select-none"
          style={{
            gap: `${GAP}px`,
            transform: `translateX(${translateX}px)`,
            transition,
            cursor: isDragging ? "grabbing" : "grab",
            touchAction: "pan-y",
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
        >
          {extended.map((area, i) => {
            const Icon = area.icon;
            return (
              <a
                key={`${area.href}-${i}`}
                href={area.href}
                onClick={onItemClick}
                className="pill-area shrink-0 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-colors active:scale-[0.97]"
                style={{
                  width: `${ITEM_WIDTH}px`,
                  background: "rgba(255,255,255,0.14)",
                  border: "1px solid rgba(255,255,255,0.32)",
                  color: "#ffffff",
                  backdropFilter: "blur(6px)",
                  WebkitBackdropFilter: "blur(6px)",
                }}
              >
                <Icon size={16} weight="bold" />
                {area.label}
              </a>
            );
          })}
        </div>
      </div>

      <button
        type="button"
        aria-label="Siguiente área"
        onClick={next}
        className="carousel-arrow shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
      >
        <CaretRight size={16} weight="bold" />
      </button>
    </div>
  );
}
