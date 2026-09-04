import { FilePdf, MapPin, Plant, Package } from "@phosphor-icons/react/dist/ssr";
import { ScrollReveal } from "./ScrollReveal";

const features = [
  {
    icon: FilePdf,
    title: "Formatos digitales que los auditores aceptan",
    body: "Genera PDFs con el formato oficial BPA/SAIA directamente desde cualquier dispositivo. Sin Excel, sin papel perdido, sin fotocopiar.",
    span: "md:col-span-2", // <-- Cambiado a md:
  },
  {
    icon: MapPin,
    title: "Control centralizado multi-sitio",
    body: "Administra diferentes instalaciones y predios desde una sola cuenta. Cada espacio cuenta con su propio historial, registros de inspección y trazabilidad independiente.",
    span: "md:col-span-1", // <-- Cambiado a md:
  },
  {
    icon: Plant,
    title: "Catalogo incluido",
    body: "723 productos con sus autorizaciones para zarzamora, frambuesa, fresa y mora azul. Siempre actualizado.",
    span: "md:col-span-1", // <-- Cambiado a md:
  },
  {
    icon: Package,
    title: "Control total del inventario",
    body: "Registra entradas, salidas y ajustes de agroquímicos. El saldo se descuenta automáticamente al guardar una aplicación.",
    span: "md:col-span-2", // <-- Cambiado a md:
  },
];

export function Features() {
  return (
    <section
      id="beneficios"
      className="py-16 md:py-24" // <-- Menos espacio vertical en celulares
      style={{ background: "#F6F9FB" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-10 md:mb-14">
            <p
              className="text-xs font-semibold tracking-[0.14em] uppercase mb-3"
              style={{ color: "#2AAD95" }}
            >
              Beneficios
            </p>
            <h2
              className="font-semibold leading-tight tracking-tight"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.75rem)",
                color: "#173251",
              }}
            >
              Todo lo que necesita tu operación
              <br className="hidden md:block" /> {/* Salto de línea solo en compu */}
              en una sola app.
            </h2>
          </div>
        </ScrollReveal>

        {/* AQUÍ ESTÁ LA MAGIA PRINCIPAL */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <ScrollReveal key={i} delay={i * 0.07} className={f.span}>
                <div
                  className="h-full rounded-2xl p-6 md:p-7 flex flex-col gap-5 min-h-[200px]"
                  style={{
                    background: "#ffffff",
                    border: "1px solid #E3E9EF",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: "#E6F6F2",
                      border: "1px solid rgba(42,173,149,0.2)",
                    }}
                  >
                    <Icon size={20} color="#2AAD95" weight="regular" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3
                      className="font-semibold text-base leading-snug"
                      style={{ color: "#173251" }}
                    >
                      {f.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#33404D" }}
                    >
                      {f.body}
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