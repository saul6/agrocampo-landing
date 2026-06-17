import { DeviceMobile, ShieldCheck, FileArrowDown } from "@phosphor-icons/react/dist/ssr";
import { ScrollReveal } from "./ScrollReveal";

const steps = [
  {
    icon: DeviceMobile,
    title: "Registra desde el campo",
    body: "Sin laptop, sin papel. Abre AgroCampo en tu celular, selecciona el rancho y captura la inspeccion en minutos.",
  },
  {
    icon: ShieldCheck,
    title: "El sistema lleva el control",
    body: "Las restricciones de frecuencia, los limites de productos y las fechas se validan automaticamente en tiempo real.",
  },
  {
    icon: FileArrowDown,
    title: "PDF listo para el auditor",
    body: "Con un toque generas el reporte oficial. Descargalo, imprimelo o compartelo directamente desde el celular.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-16 text-center pt-1">
            <p
              className="text-xs font-semibold tracking-[0.14em] uppercase mb-3"
              style={{ color: "#2b7ab5" }}
            >
              Como funciona
            </p>
            <h2
              className="font-semibold tracking-tight"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.75rem)",
                lineHeight: 1.3,
                color: "#0d5a8f",
              }}
            >
              Tres pasos. Sin curva de aprendizaje.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop only) */}
          <div
            className="hidden md:block absolute top-9 left-[calc(16.66%+24px)] right-[calc(16.66%+24px)] h-px"
            style={{ background: "#e3f2fd" }}
          />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex flex-col gap-5">
                  {/* Icon circle with step number */}
                  <div className="relative w-[72px]">
                    <div
                      className="w-[72px] h-[72px] rounded-full flex items-center justify-center"
                      style={{
                        background: "#e3f2fd",
                        border: "1.5px solid rgba(43,122,181,0.25)",
                      }}
                    >
                      <Icon size={28} color="#2b7ab5" weight="duotone" />
                    </div>
                    <span
                      className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
                      style={{ background: "#2b7ab5", color: "#ffffff" }}
                    >
                      {i + 1}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3
                      className="font-semibold text-base"
                      style={{ color: "#0d5a8f" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed max-w-[34ch]"
                      style={{ color: "#717182" }}
                    >
                      {step.body}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
