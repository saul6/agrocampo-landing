import { FilePdf, MapPin, Plant, Package } from "@phosphor-icons/react/dist/ssr";
import { ScrollReveal } from "./ScrollReveal";

const features = [
  {
    icon: FilePdf,
    title: "Formatos digitales que los auditores aceptan",
    body: "Genera PDFs con el formato oficial BPA/SAIA directamente desde el celular. Sin Excel, sin papel perdido, sin fotocopiar.",
    span: "col-span-2",
  },
  {
    icon: MapPin,
    title: "100% Multi-rancho",
    body: "Administra varios ranchos desde una sola cuenta. Cada rancho tiene su historial, sus inspecciones y su trazabilidad.",
    span: "col-span-1",
  },
  {
    icon: Plant,
    title: "Catalogo ANEBERRIES incluido",
    body: "723 productos con sus autorizaciones para zarzamora, frambuesa, fresa y mora azul. Siempre actualizado.",
    span: "col-span-1",
  },
  {
    icon: Package,
    title: "Control total del inventario",
    body: "Registra entradas, salidas y ajustes de agroquimicos. El saldo se descuenta automaticamente al guardar una aplicacion.",
    span: "col-span-2",
  },
];

export function Features() {
  return (
    <section
      id="beneficios"
      className="py-24"
      style={{ background: "#0f2216" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-14">
            <p
              className="text-xs font-semibold tracking-[0.14em] uppercase mb-3"
              style={{ color: "#4ade80" }}
            >
              Beneficios
            </p>
            <h2
              className="font-semibold leading-tight tracking-tight"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.75rem)", color: "#f0fdf4" }}
            >
              Todo lo que necesita tu operacion<br />en una sola app.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-3 gap-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <ScrollReveal key={i} delay={i * 0.07} className={f.span}>
                <div
                  className="h-full rounded-2xl p-7 flex flex-col gap-5 min-h-[200px]"
                  style={{
                    background: "#152a1b",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: "rgba(74,222,128,0.12)",
                      border: "1px solid rgba(74,222,128,0.2)",
                    }}
                  >
                    <Icon size={20} color="#4ade80" weight="duotone" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3
                      className="font-semibold text-base leading-snug"
                      style={{ color: "#f0fdf4" }}
                    >
                      {f.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(240,253,244,0.55)" }}
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
