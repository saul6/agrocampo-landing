"use client";

import { ScrollReveal } from "./ScrollReveal";

const WHATSAPP_NUMBER = "523339300095";
const CONTACT_EMAIL = "ventas@mady.com.mx";

const whatsappMessage = encodeURIComponent(
  "Hola, quiero solicitar un plan personalizado de M.A.D.Y."
);
const emailSubject = encodeURIComponent("Solicitud de plan personalizado - M.A.D.Y");
const emailBody = encodeURIComponent(
  "Hola,\n\nMe gustaria solicitar informacion sobre un plan personalizado de M.A.D.Y.\n\nGracias."
);

function ContactTile({
  href,
  target,
  icon,
  title,
  subtitle,
  accent,
}: {
  href: string;
  target?: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  accent: string;
}) {
  return (
    <a
      href={href}
      target={target}
      rel={target ? "noopener noreferrer" : undefined}
      className="group relative flex flex-col items-start justify-between gap-6 rounded-2xl p-7 aspect-square transition-all duration-300 ease-out hover:-translate-y-1 active:scale-[0.97] active:translate-y-0"
      style={{
        background: "#ffffff",
        border: "1px solid #E3E9EF",
        boxShadow: "0 4px 24px rgba(23,50,81,0.08)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 12px 32px ${accent}33`;
        e.currentTarget.style.borderColor = `${accent}55`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 4px 24px rgba(23,50,81,0.08)";
        e.currentTarget.style.borderColor = "#E3E9EF";
      }}
    >
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
        style={{ background: `${accent}1a`, color: accent }}
      >
        {icon}
      </div>

      <div className="flex flex-col gap-1.5">
        <h3 className="font-semibold text-lg" style={{ color: "#173251" }}>
          {title}
        </h3>
        <p className="text-sm leading-snug" style={{ color: "#607286" }}>
          {subtitle}
        </p>
      </div>

      <div
        className="flex items-center gap-1.5 text-sm font-semibold transition-transform duration-300 group-hover:translate-x-1"
        style={{ color: accent }}
      >
        Escríbenos
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </div>
    </a>
  );
}

export function ContactSection() {
  return (
    <section id="plan-personalizado" className="py-24" style={{ background: "#F6F9FB" }}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <ScrollReveal>
          <div className="flex flex-col gap-6">
            <p
              className="text-xs font-semibold tracking-[0.14em] uppercase"
              style={{ color: "#2AAD95" }}
            >
              Contacto
            </p>
            <h2
              className="font-semibold tracking-tight leading-tight"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.75rem)", color: "#173251" }}
            >
              ¿Necesitas más información?
              <br />
              <span style={{ color: "#607286" }}>contáctanos</span>
            </h2>
            <p className="text-base leading-relaxed max-w-[46ch]" style={{ color: "#33404D" }}>
              En M.A.D.Y sabemos que cada operación y proceso de control exige soluciones precisas...
            </p>
            <p className="text-base leading-relaxed max-w-[46ch]" style={{ color: "#33404D" }}>
              Contáctanos al instante. No esperes más para optimizar tu gestión de inocuidad...
            </p>

            <ul className="flex flex-col gap-3">
              {[
                "Atención rápida y directa por WhatsApp",
                "Soporte y consultas formales por correo electrónico",
                "Asesoría especializada en normativas de inocuidad",
                "Demo en vivo con tus datos y cultivos",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm"
                  style={{ color: "#607286" }}
                >
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold"
                    style={{ background: "#E6F6F2", color: "#2AAD95" }}
                  >
                    +
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div className="grid grid-cols-2 gap-5 max-w-[440px] mx-auto lg:mx-0">
            <ContactTile
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
              target="_blank"
              accent="#25D366"
              title="WhatsApp"
              subtitle="Respuesta rápida"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-7 h-7"
                >
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.38 1.26 4.8L2 22l5.4-1.42a9.87 9.87 0 0 0 4.64 1.18h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2..." />
                </svg>
              }
            />

            <ContactTile
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}&su=${emailSubject}&body=${emailBody}`}
              target="_blank"
              accent="#2AAD95"
              title="Correo"
              subtitle="Escríbenos con calma"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-7 h-7"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              }
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
