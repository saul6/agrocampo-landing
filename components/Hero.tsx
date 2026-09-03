import { HeroCarousel } from "./HeroCarousel";
import { ScrollReveal } from "./ScrollReveal";
import { AreaCarousel } from "./AreaCarousel";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: "100dvh" }}
    >
      <HeroCarousel />

      <div
        className="relative z-20 flex items-center"
        style={{ minHeight: "100dvh" }}
      >
        <div className="max-w-7xl mx-auto px-6 w-full py-24 lg:py-0">
          <div className="max-w-[680px] flex flex-col gap-7">
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
                  style={{ background: "#81BEE5" }}
                />
                Preparado para tus Auditorías
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.06}>
              <h1
                className="font-semibold leading-[1.05] tracking-tight text-white"
                style={{
                  fontSize: "clamp(2.6rem, 5vw, 4.4rem)",
                  textShadow: "0 2px 16px rgba(0,0,0,0.2)",
                }}
              >
                Inocuidad que auditan.{" "}
                <span style={{ color: "#81BEE5" }}>Reportes</span> que se
                generan solos.
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.11}>
              <p
                className="text-base leading-relaxed max-w-[52ch]"
                style={{
                  color: "rgba(255,255,255,0.86)",
                  textShadow: "0 1px 6px rgba(0,0,0,0.18)",
                }}
              >
                M.A.D.Y automatiza los formatos de inocuidad que exige
                PrimusGFS: desde la inspeccion preoperacional hasta el botiquin
                de primeros auxilios. Todo desde tu celular, con PDF listo en
                segundos.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.16}>
              <AreaCarousel />
            </ScrollReveal>

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