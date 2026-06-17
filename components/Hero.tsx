import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#ffffff", minHeight: "100dvh" }}
    >
      {/* Geometric background decorations */}
      <div
        className="absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{ background: "rgba(43,122,181,0.055)" }}
      />
      <div
        className="absolute top-1/2 -right-16 w-[280px] h-[280px] rounded-full pointer-events-none"
        style={{ background: "rgba(30,136,199,0.04)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "rgba(43,122,181,0.035)" }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 items-center min-h-[100dvh] py-24 lg:py-0">
        {/* Text column */}
        <div className="flex flex-col gap-7 pt-8 lg:pt-0">
          <ScrollReveal>
            <span
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold w-fit"
              style={{ background: "#e3f2fd", color: "#0d5a8f" }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#2b7ab5" }}
              />
              Trazabilidad GlobalGAP &middot; PrimusGFS &middot; SENASICA
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <h1
              className="font-semibold leading-[1.05] tracking-tight"
              style={{
                fontSize: "clamp(2.4rem, 4.5vw, 4.2rem)",
                color: "#0d5a8f",
              }}
            >
              Inocuidad que auditan.{" "}
              <span style={{ color: "#2b7ab5" }}>Reportes</span> que se
              generan solos.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.11}>
            <p
              className="text-base leading-relaxed max-w-[52ch]"
              style={{ color: "#717182" }}
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

          {/* Social proof micro-strip */}
          <ScrollReveal delay={0.2}>
            <div className="flex items-center gap-4 pt-2">
              <div
                className="flex items-center gap-2 text-xs font-medium"
                style={{ color: "#717182" }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: "#2b7ab5" }}
                />
                GlobalGAP
              </div>
              <div
                className="w-px h-3.5"
                style={{ background: "rgba(0,0,0,0.12)" }}
              />
              <div
                className="flex items-center gap-2 text-xs font-medium"
                style={{ color: "#717182" }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: "#1e88c7" }}
                />
                PrimusGFS
              </div>
              <div
                className="w-px h-3.5"
                style={{ background: "rgba(0,0,0,0.12)" }}
              />
              <div
                className="flex items-center gap-2 text-xs font-medium"
                style={{ color: "#717182" }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: "#0d5a8f" }}
                />
                SENASICA
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Photo column */}
        <div className="hidden lg:block relative">
          <ScrollReveal delay={0.08}>
            {/* Offset accent rectangle behind the photo */}
            <div
              className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl"
              style={{ background: "#e3f2fd" }}
            />
            <div
              className="absolute -bottom-2 -right-2 w-full h-full rounded-2xl"
              style={{ background: "rgba(43,122,181,0.12)" }}
            />

            <div
              className="relative w-full overflow-hidden rounded-2xl"
              style={{
                height: "560px",
                border: "1px solid rgba(43,122,181,0.18)",
              }}
            >
              <Image
                src="https://picsum.photos/seed/agrocampo-berry/800/1000"
                alt="Campo de berries"
                fill
                className="object-cover"
                priority
              />
              {/* Very subtle blue tint overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(43,122,181,0.04) 0%, rgba(13,90,143,0.12) 100%)",
                }}
              />
              {/* Bottom fade */}
              <div
                className="absolute bottom-0 left-0 right-0 h-24"
                style={{
                  background:
                    "linear-gradient(to top, rgba(255,255,255,0.4), transparent)",
                }}
              />
              {/* Badge */}
              <div
                className="absolute bottom-5 left-5 px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{
                  background: "rgba(255,255,255,0.92)",
                  border: "1px solid rgba(43,122,181,0.2)",
                  color: "#0d5a8f",
                  backdropFilter: "blur(8px)",
                }}
              >
                Inocuidad certificada
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
