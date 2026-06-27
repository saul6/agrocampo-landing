import { ScrollReveal } from "./ScrollReveal";

const STRIPE_MENSUAL = "https://buy.stripe.com/14A3cx2qi1DmeFU2Ajf7i01";
const STRIPE_ANUAL = "https://buy.stripe.com/6oUfZj0iaa9SbtIej1f7i00";

export function PricingSection() {
  return (
    <section id="precios" className="py-24" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <p
              className="text-xs font-semibold tracking-[0.14em] uppercase mb-3"
              style={{ color: "#2b7ab5" }}
            >
              Precios
            </p>
            <h2
              className="font-semibold tracking-tight"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.75rem)",
                lineHeight: 1.3,
                color: "#0d5a8f",
              }}
            >
              Plan Basico. Sin sorpresas.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Mensual */}
          <ScrollReveal delay={0}>
            <div
              className="flex flex-col gap-6 rounded-2xl p-8 h-full"
              style={{
                background: "#ffffff",
                border: "1.5px solid rgba(43,122,181,0.2)",
              }}
            >
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold" style={{ color: "#717182" }}>
                  Mensual
                </p>
                <div className="flex items-end gap-1 mt-2">
                  <span
                    className="font-semibold"
                    style={{ fontSize: "2.75rem", lineHeight: 1, color: "#0d5a8f" }}
                  >
                    $100
                  </span>
                  <span className="text-sm mb-2" style={{ color: "#717182" }}>
                    USD / mes
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#717182" }}>
                  Pago mes a mes, sin compromiso anual.
                </p>
              </div>

              <ul className="flex flex-col gap-3 flex-1">
                {[
                  "1 a 5 ranchos por usuario",
                  "Todos los modulos de inocuidad",
                  "Generacion de PDFs ilimitada",
                  "Soporte por correo",
                ].map((feat) => (
                  <li
                    key={feat}
                    className="flex items-center gap-3 text-sm"
                    style={{ color: "#717182" }}
                  >
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold"
                      style={{ background: "#e3f2fd", color: "#2b7ab5" }}
                    >
                      +
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>

              <a
                href={STRIPE_MENSUAL}
                className="w-full py-3 rounded-full text-sm font-semibold text-center transition-opacity hover:opacity-80"
                style={{
                  background: "#e3f2fd",
                  color: "#0d5a8f",
                  display: "block",
                }}
              >
                Suscribirme
              </a>
            </div>
          </ScrollReveal>

          {/* Anual — destacada */}
          <ScrollReveal delay={0.08}>
            <div
              className="flex flex-col gap-6 rounded-2xl p-8 h-full relative"
              style={{ background: "#2b7ab5" }}
            >
              {/* Badge */}
              <span
                className="absolute top-5 right-5 text-[11px] font-bold px-3 py-1 rounded-full"
                style={{ background: "#ffffff", color: "#0d5a8f" }}
              >
                Ahorra 13%
              </span>

              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.75)" }}>
                  Anual
                </p>
                <div className="flex items-end gap-1 mt-2">
                  <span
                    className="font-semibold"
                    style={{ fontSize: "2.75rem", lineHeight: 1, color: "#ffffff" }}
                  >
                    $87
                  </span>
                  <span className="text-sm mb-2" style={{ color: "rgba(255,255,255,0.75)" }}>
                    USD / mes
                  </span>
                </div>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                  Facturado anual — $1,044 USD / ano
                </p>
                <p className="text-sm font-medium mt-1" style={{ color: "rgba(255,255,255,0.9)" }}>
                  Pagando anual ahorras $13 cada mes frente al plan mensual.
                </p>
              </div>

              <ul className="flex flex-col gap-3 flex-1">
                {[
                  "1 a 5 ranchos por usuario",
                  "Todos los modulos de inocuidad",
                  "Generacion de PDFs ilimitada",
                  "Soporte por correo",
                ].map((feat) => (
                  <li
                    key={feat}
                    className="flex items-center gap-3 text-sm"
                    style={{ color: "rgba(255,255,255,0.9)" }}
                  >
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold"
                      style={{ background: "rgba(255,255,255,0.2)", color: "#ffffff" }}
                    >
                      +
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>

              <a
                href={STRIPE_ANUAL}
                className="w-full py-3 rounded-full text-sm font-semibold text-center transition-opacity hover:opacity-90"
                style={{
                  background: "#ffffff",
                  color: "#0d5a8f",
                  display: "block",
                }}
              >
                Suscribirme
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Nota al pie */}
        <p
          className="text-xs text-center mt-8"
          style={{ color: "#717182" }}
        >
          Precios en USD, IVA incluido. Plan Basico: 1 a 5 ranchos por usuario.
        </p>
      </div>
    </section>
  );
}
