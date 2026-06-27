"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { ScrollReveal } from "./ScrollReveal";

type Status = "idle" | "loading" | "success" | "error";

interface FormState {
  nombre: string;
  email: string;
  empresa: string;
  telefono: string;
  num_ranchos: string;
  mensaje: string;
}

const empty: FormState = {
  nombre: "",
  email: "",
  empresa: "",
  telefono: "",
  num_ranchos: "",
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
      <label className="text-xs font-medium" style={{ color: "#717182" }}>
        {label}
        {required && <span style={{ color: "#2b7ab5" }}> *</span>}
      </label>
      {children}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  background: "#f8f9fa",
  border: "1px solid rgba(0,0,0,0.1)",
  color: "#171717",
  borderRadius: "0.625rem",
  padding: "0.625rem 0.875rem",
  fontSize: "0.875rem",
  outline: "none",
  width: "100%",
};

export function ContactSection() {
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
      mensaje:
        [
          form.num_ranchos.trim()
            ? `Ranchos aproximados: ${form.num_ranchos.trim()}`
            : null,
          form.mensaje.trim() || null,
        ]
          .filter(Boolean)
          .join("\n\n") || null,
      tipo: "personalizado",
      origen: "plan_personalizado",
    });

    if (error) {
      setStatus("error");
    } else {
      setStatus("success");
      setForm(empty);
    }
  }

  return (
    <section id="plan-personalizado" className="py-24" style={{ background: "#f8f9fa" }}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Copy */}
        <ScrollReveal>
          <div className="flex flex-col gap-6">
            <p
              className="text-xs font-semibold tracking-[0.14em] uppercase"
              style={{ color: "#2b7ab5" }}
            >
              Plan personalizado
            </p>
            <h2
              className="font-semibold tracking-tight leading-tight"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.75rem)", color: "#0d5a8f" }}
            >
              ¿Necesitas un plan
              <br />
              <span style={{ color: "#717182" }}>mas personalizado?</span>
            </h2>
            <p
              className="text-base leading-relaxed max-w-[46ch]"
              style={{ color: "#717182" }}
            >
              El Plan Basico cubre de 1 a 5 ranchos. Si administras mas
              ranchos, gestionas varios productores como asesor, o necesitas
              condiciones a la medida de tu operacion, hablemos. Te armamos un
              plan que se ajuste a tu tamano.
            </p>
            <p
              className="text-base leading-relaxed max-w-[46ch]"
              style={{ color: "#717182" }}
            >
              Tambien podemos mostrarte M.A.D.Y en vivo con tus propios datos y
              cultivos — veinte minutos y sabes exactamente si es para tu
              operacion.
            </p>

            <ul className="flex flex-col gap-3">
              {[
                "Mas de 5 ranchos o multiples productores",
                "Asesores de inocuidad con varios clientes",
                "Condiciones comerciales a la medida",
                "Demo en vivo con tus datos y cultivos",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm"
                  style={{ color: "#717182" }}
                >
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold"
                    style={{ background: "#e3f2fd", color: "#2b7ab5" }}
                  >
                    +
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        {/* Form */}
        <ScrollReveal delay={0.08}>
          <div
            className="rounded-2xl p-8"
            style={{
              background: "#ffffff",
              border: "1px solid rgba(0,0,0,0.08)",
              boxShadow: "0 4px 24px rgba(43,122,181,0.08)",
            }}
          >
            {status === "success" ? (
              <div className="py-10 text-center flex flex-col gap-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto"
                  style={{ background: "#e3f2fd" }}
                >
                  <span
                    style={{ color: "#2b7ab5", fontSize: "1.4rem", fontWeight: 700 }}
                  >
                    ✓
                  </span>
                </div>
                <h3 className="font-semibold text-lg" style={{ color: "#0d5a8f" }}>
                  Gracias, recibimos tu mensaje
                </h3>
                <p className="text-sm" style={{ color: "#717182" }}>
                  Te contactamos en menos de 24 horas para armar tu plan.
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

                <Field label="Numero aproximado de ranchos (opcional)">
                  <input
                    type="text"
                    placeholder="Ej. 12 ranchos, 3 productores..."
                    value={form.num_ranchos}
                    onChange={set("num_ranchos")}
                    style={inputStyle}
                  />
                </Field>

                <Field label="Mensaje (opcional)">
                  <textarea
                    rows={3}
                    placeholder="Cuentanos que cultivos manejas, que necesitas, o cualquier pregunta..."
                    value={form.mensaje}
                    onChange={set("mensaje")}
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
                </Field>

                {status === "error" && (
                  <p className="text-sm" style={{ color: "#993c1d" }}>
                    Algo salio mal. Intenta de nuevo o escribenos directamente.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3 rounded-full text-sm font-semibold transition-colors"
                  style={{
                    background: "#2b7ab5",
                    color: "#ffffff",
                    opacity: status === "loading" ? 0.75 : 1,
                    marginTop: "4px",
                  }}
                >
                  {status === "loading" ? "Enviando..." : "Solicitar plan personalizado"}
                </button>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
