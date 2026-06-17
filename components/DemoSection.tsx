"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

type Status = "idle" | "loading" | "success" | "error";

interface FormState {
  nombre: string;
  email: string;
  empresa: string;
  telefono: string;
  mensaje: string;
}

const empty: FormState = {
  nombre: "",
  email: "",
  empresa: "",
  telefono: "",
  mensaje: "",
};

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium" style={{ color: "rgba(240,253,244,0.6)" }}>
        {label}
        {required && <span style={{ color: "#4ade80" }}> *</span>}
      </label>
      {children}
    </div>
  );
}

const inputStyle = {
  background: "#0b1a10",
  border: "1px solid rgba(255,255,255,0.1)",
  color: "#f0fdf4",
  borderRadius: "0.625rem",
  padding: "0.625rem 0.875rem",
  fontSize: "0.875rem",
  outline: "none",
  width: "100%",
};

export function DemoSection() {
  const [form, setForm] = useState<FormState>(empty);
  const [status, setStatus] = useState<Status>("idle");

  function set(field: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    const { error } = await supabase.from("leads").insert({
      nombre: form.nombre.trim() || null,
      email: form.email.trim().toLowerCase(),
      empresa: form.empresa.trim() || null,
      telefono: form.telefono.trim() || null,
      mensaje: form.mensaje.trim() || null,
      tipo: "demo",
      origen: "cierre",
    });

    if (error) {
      setStatus("error");
    } else {
      setStatus("success");
      setForm(empty);
    }
  }

  return (
    <section id="demo" className="py-24" style={{ background: "#0b1a10" }}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Copy */}
        <div className="flex flex-col gap-6">
          <p
            className="text-xs font-semibold tracking-[0.14em] uppercase"
            style={{ color: "#4ade80" }}
          >
            Demo en vivo
          </p>
          <h2
            className="font-semibold tracking-tight leading-tight"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.75rem)", color: "#f0fdf4" }}
          >
            Agenda una demo.
            <br />
            <span style={{ color: "rgba(240,253,244,0.5)" }}>
              Sin compromiso.
            </span>
          </h2>
          <p
            className="text-base leading-relaxed max-w-[46ch]"
            style={{ color: "rgba(240,253,244,0.58)" }}
          >
            Te mostramos AgroCampo en vivo con tus propios datos y cultivos.
            Veinte minutos y sabes exactamente si es para tu operacion.
          </p>

          <ul className="flex flex-col gap-3">
            {[
              "Recorrido completo del modulo de inocuidad",
              "Generacion de PDF en tiempo real",
              "Configuracion de tu primer rancho incluida",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm" style={{ color: "rgba(240,253,244,0.6)" }}>
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: "#4ade80" }}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Form */}
        <div
          className="rounded-2xl p-8"
          style={{
            background: "#152a1b",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {status === "success" ? (
            <div className="py-8 text-center flex flex-col gap-4">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto"
                style={{ background: "rgba(74,222,128,0.15)" }}
              >
                <span style={{ color: "#4ade80", fontSize: "1.5rem" }}>+</span>
              </div>
              <h3 className="font-semibold text-lg" style={{ color: "#f0fdf4" }}>
                Solicitud recibida
              </h3>
              <p className="text-sm" style={{ color: "rgba(240,253,244,0.55)" }}>
                Te contactamos en menos de 24 horas para agendar la sesion.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Nombre" required>
                  <input
                    type="text"
                    required
                    placeholder="Juan Perez"
                    value={form.nombre}
                    onChange={set("nombre")}
                    style={inputStyle}
                  />
                </Field>
                <Field label="Correo electronico" required>
                  <input
                    type="email"
                    required
                    placeholder="juan@empresa.com"
                    value={form.email}
                    onChange={set("email")}
                    style={inputStyle}
                  />
                </Field>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Empresa (opcional)">
                  <input
                    type="text"
                    placeholder="Rancho El Solar"
                    value={form.empresa}
                    onChange={set("empresa")}
                    style={inputStyle}
                  />
                </Field>
                <Field label="Telefono (opcional)">
                  <input
                    type="tel"
                    placeholder="+52 555 000 0000"
                    value={form.telefono}
                    onChange={set("telefono")}
                    style={inputStyle}
                  />
                </Field>
              </div>

              <Field label="Mensaje (opcional)">
                <textarea
                  rows={3}
                  placeholder="Cuanteos ranchos administras, que cultivos, que te interesa ver..."
                  value={form.mensaje}
                  onChange={set("mensaje")}
                  style={{ ...inputStyle, resize: "vertical" }}
                />
              </Field>

              {status === "error" && (
                <p className="text-sm" style={{ color: "rgba(240,100,100,0.8)" }}>
                  Algo salio mal. Intenta de nuevo o escribenos directamente.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-3 rounded-full text-sm font-semibold transition-colors"
                style={{
                  background: status === "loading" ? "#22c55e" : "#4ade80",
                  color: "#0b1a10",
                  opacity: status === "loading" ? 0.75 : 1,
                  marginTop: "4px",
                }}
              >
                {status === "loading" ? "Enviando..." : "Solicitar demo"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
