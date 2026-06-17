import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#0b1a10", minHeight: "100dvh" }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 30%, rgba(74,222,128,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 items-center min-h-[100dvh] py-24 lg:py-0">
        {/* Text column */}
        <div className="flex flex-col gap-7 pt-8 lg:pt-0">
          <ScrollReveal>
            <p
              className="text-xs font-semibold tracking-[0.14em] uppercase"
              style={{ color: "#4ade80" }}
            >
              Trazabilidad GlobalGAP &middot; PrimusGFS &middot; SENASICA
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <h1
              className="font-semibold leading-[1.04] tracking-tight"
              style={{
                fontSize: "clamp(2.4rem, 4.5vw, 4.2rem)",
                color: "#f0fdf4",
              }}
            >
              Inocuidad que auditan.{" "}
              <span style={{ color: "#4ade80" }}>Reportes</span> que se
              generan solos.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.11}>
            <p
              className="text-base leading-relaxed max-w-[52ch]"
              style={{ color: "rgba(240,253,244,0.62)" }}
            >
              AgroCampo automatiza los formatos de inocuidad que exige
              PrimusGFS: desde la inspeccion preoperacional hasta el botiquin
              de primeros auxilios. Todo desde tu celular, con PDF listo en
              segundos.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <div className="flex flex-wrap gap-3">
              <a
                href="#lista-espera"
                className="btn-primary px-6 py-3 rounded-full text-sm font-semibold"
              >
                Unirme a la lista de espera
              </a>
              <a
                href="#demo"
                className="btn-ghost px-6 py-3 rounded-full text-sm font-medium"
              >
                Ver demo
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Photo column */}
        <div className="hidden lg:block">
          <ScrollReveal delay={0.08}>
            <div
              className="relative w-full overflow-hidden rounded-2xl"
              style={{
                height: "580px",
                border: "1px solid rgba(74,222,128,0.18)",
              }}
            >
              <Image
                src="https://picsum.photos/seed/agrocampo-berry/800/1000"
                alt="Campo de berries"
                fill
                className="object-cover"
                priority
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(11,26,16,0.45) 0%, rgba(11,26,16,0.1) 60%, rgba(11,26,16,0.4) 100%)",
                }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-28"
                style={{
                  background:
                    "linear-gradient(to top, rgba(11,26,16,0.85), transparent)",
                }}
              />
              <div
                className="absolute bottom-5 left-5 px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{
                  background: "rgba(74,222,128,0.15)",
                  border: "1px solid rgba(74,222,128,0.3)",
                  color: "#4ade80",
                }}
              >
                GlobalGAP &middot; PrimusGFS
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
