import { HeroCarousel } from "./HeroCarousel";
import { ScrollReveal } from "./ScrollReveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "100dvh" }}>
      {/* Full-screen carousel + overlay (client component) */}
      <HeroCarousel />

      {/* Text content — sits above overlay at z-20 */}
      <div
        className="relative z-20 flex items-center"
        style={{ minHeight: "100dvh" }}
      >
        <div className="max-w-7xl mx-auto px-6 w-full py-24 lg:py-0">
          <div className="max-w-[680px] flex flex-col gap-7">
            {/* Certification kicker */}
            <ScrollReveal>
              <span
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold w-fit"
                style={{
                  background: "rgba(255,255,255,0.16)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  color: "#ffffff",
                  backdropFilter: "blur(6px)",
                  WebkitBackdropFilter: "blur(6px)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#93c5fd" }}
                />
                Trazabilidad GlobalGAP &middot; PrimusGFS &middot; SENASICA
              </span>
            </ScrollReveal>

            {/* Main headline */}
            <ScrollReveal delay={0.06}>
              <h1
                className="font-semibold leading-[1.05] tracking-tight text-white"
                style={{
                  fontSize: "clamp(2.6rem, 5vw, 4.4rem)",
                  textShadow: "0 2px 16px rgba(0,0,0,0.2)",
                }}
              >
                Inocuidad que auditan.{" "}
                <span style={{ color: "#bfdbfe" }}>Reportes</span> que se
                generan solos.
              </h1>
            </ScrollReveal>

            {/* Subheadline */}
            <ScrollReveal delay={0.11}>
              <p
                className="text-base leading-relaxed max-w-[52ch]"
                style={{
                  color: "rgba(255,255,255,0.86)",
                  textShadow: "0 1px 6px rgba(0,0,0,0.18)",
                }}
              >
                AgroCampo automatiza los formatos de inocuidad que exige
                PrimusGFS: desde la inspeccion preoperacional hasta el botiquin
                de primeros auxilios. Todo desde tu celular, con PDF listo en
                segundos.
              </p>
            </ScrollReveal>

            {/* CTAs */}
            <ScrollReveal delay={0.16}>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#lista-espera"
                  className="btn-white px-6 py-3 rounded-full text-sm font-semibold"
                >
                  Unirme a la lista de espera
                </a>
                <a
                  href="#demo"
                  className="px-6 py-3 rounded-full text-sm font-medium transition-colors active:scale-[0.97]"
                  style={{
                    border: "1.5px solid rgba(255,255,255,0.48)",
                    color: "#ffffff",
                  }}
                >
                  Ver demo
                </a>
              </div>
            </ScrollReveal>

            {/* Trust strip */}
            <ScrollReveal delay={0.2}>
              <div className="flex items-center gap-4 pt-1">
                {["GlobalGAP", "PrimusGFS", "SENASICA"].map((cert, i) => (
                  <div key={cert} className="flex items-center gap-4">
                    {i > 0 && (
                      <div
                        className="w-px h-3"
                        style={{ background: "rgba(255,255,255,0.28)" }}
                      />
                    )}
                    <span
                      className="text-xs font-medium"
                      style={{ color: "rgba(255,255,255,0.62)" }}
                    >
                      {cert}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
