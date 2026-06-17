"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

type Status = "idle" | "loading" | "success" | "error";

export function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");

    const { error } = await supabase.from("leads").insert({
      email: email.trim().toLowerCase(),
      nombre: nombre.trim() || null,
      tipo: "lista_espera",
      origen: "hero",
    });

    if (error) {
      setStatus("error");
    } else {
      setStatus("success");
      setEmail("");
      setNombre("");
    }
  }

  return (
    <section
      id="lista-espera"
      className="py-24"
      style={{ background: "#0f2216" }}
    >
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p
          className="text-xs font-semibold tracking-[0.14em] uppercase mb-4"
          style={{ color: "#4ade80" }}
        >
          Lista de espera
        </p>
        <h2
          className="font-semibold tracking-tight mb-4"
          style={{ fontSize: "clamp(1.7rem, 3vw, 2.5rem)", color: "#f0fdf4" }}
        >
          Se el primero en saber cuando lancemos.
        </h2>
        <p
          className="text-base leading-relaxed mb-10"
          style={{ color: "rgba(240,253,244,0.58)" }}
        >
          AgroCampo esta en desarrollo activo. Dejanos tu correo y te avisamos
          en cuanto este listo para tu operacion.
        </p>

        {status === "success" ? (
          <div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold"
            style={{
              background: "rgba(74,222,128,0.15)",
              border: "1px solid rgba(74,222,128,0.3)",
              color: "#4ade80",
            }}
          >
            Listo, te avisamos cuando lancemos.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <input
              type="text"
              placeholder="Tu nombre (opcional)"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="flex-1 px-4 py-3 rounded-full text-sm outline-none"
              style={{
                background: "#152a1b",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "#f0fdf4",
              }}
            />
            <input
              type="email"
              required
              placeholder="tu@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-full text-sm outline-none"
              style={{
                background: "#152a1b",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "#f0fdf4",
              }}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-6 py-3 rounded-full text-sm font-semibold transition-colors whitespace-nowrap"
              style={{
                background: status === "loading" ? "#22c55e" : "#4ade80",
                color: "#0b1a10",
                opacity: status === "loading" ? 0.75 : 1,
              }}
            >
              {status === "loading" ? "Guardando..." : "Unirme a la lista"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="mt-4 text-sm" style={{ color: "rgba(240,100,100,0.8)" }}>
            Algo salio mal. Intenta de nuevo o escribenos a contacto@agrocampo.mx
          </p>
        )}
      </div>
    </section>
  );
}
