import { DeviceMobile, ShieldCheck, FileArrowDown } from "@phosphor-icons/react/dist/ssr";
import { ScrollReveal } from "./ScrollReveal";

const steps = [
  {
    icon: DeviceMobile,
    title: "Registra donde quiera que estes",
    body: "Sin papel. Abre M.A.D.Y desde cualquier dispositivo, selecciona tu instalación y captura la inspección en minutos.",
  },
  {
    icon: ShieldCheck,
    title: "El sistema lleva el control",
    body: "Las restricciones de frecuencia, los límites de productos y las fechas se validan automáticamente en tiempo real.",
  },
  {
    icon: FileArrowDown,
    title: "PDF listo para el auditor",
    body: "Con un toque generas el reporte oficial. Descárgalo, imprímelo o compártelo directamente desde el celular.",
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
              style={{ color: "#2AAD95" }}
            >
              Como funciona
            </p>
            <h2
              className="font-semibold tracking-tight"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.75rem)",
                lineHeight: 1.3,
                color: "#173251",
              }}
            >
              Tres pasos. Sin curva de aprendizaje.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div
            className="hidden md:block absolute top-9 left-[calc(16.66%+36px)] right-[calc(16.66%+36px)] h-px"
            style={{ background: "#E3E9EF" }}
          />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center gap-5">
                  <div className="relative w-[72px]">
                    <div
                      className="w-[72px] h-[72px] rounded-full flex items-center justify-center"
                      style={{
                        background: "#E6F6F2",
                        border: "1.5px solid rgba(42,173,149,0.25)",
                      }}
                    >
                      <Icon size={28} color="#2AAD95" weight="regular" />
                    </div>
                    <span
                      className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
                      style={{ background: "#2AAD95", color: "#ffffff" }}
                    >
                      {i + 1}
                    </span>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <h3
                      className="font-semibold text-base"
                      style={{ color: "#173251" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed max-w-[30ch] mx-auto"
                      style={{ color: "#33404D" }}
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