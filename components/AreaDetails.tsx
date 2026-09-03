import { ScrollReveal } from "./ScrollReveal";

const areas = [
  { id: "almacen", title: "Almacén", bg: "#ffffff" },
  { id: "campo", title: "Campo", bg: "#F6F9FB" },
  { id: "carnicos", title: "Cárnicos", bg: "#F6F9FB" },
  { id: "cuarto-frio", title: "Cuarto Frío", bg: "#ffffff" },
  { id: "empacadora", title: "Empacadora", bg: "#F6F9FB" },
  { id: "invernadero", title: "Invernadero", bg: "#F6F9FB" },
];

export const AreaDetails = () => {
  return (
    <>
      <section className="pt-24 pb-8" style={{ background: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="mb-16 text-center pt-1">
              <p
                className="text-xs font-semibold tracking-[0.14em] uppercase mb-3"
                style={{ color: "#2AAD95" }}
              >
                Nuestros Sectores
              </p>
              <h2
                className="font-semibold tracking-tight"
                style={{
                  fontSize: "clamp(1.8rem, 3vw, 2.75rem)",
                  lineHeight: 1.3,
                  color: "#173251",
                }}
              >
                Especialización. Enfocada en inocuidad.
              </h2>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {areas.map((area, index) => (
        <section
          key={area.id}
          id={area.id}
          className="py-20 scroll-mt-20"
          style={{ background: area.bg }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div
              className={`flex flex-col items-center gap-12 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <div className="w-full md:w-1/2">
                <div
                  className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #173251 0%, #81BEE5 100%)",
                  }}
                >
                  <span
                    className="text-2xl font-semibold tracking-tight"
                    style={{ color: "rgba(255,255,255,0.85)" }}
                  >
                    {area.title}
                  </span>
                </div>
              </div>

              <div className="w-full md:w-1/2 space-y-6">
                <h2
                  className="text-4xl font-bold"
                  style={{ color: "#173251" }}
                >
                  {area.title}
                </h2>
                <button
                  className="btn-primary px-6 py-2.5 rounded-lg font-semibold"
                >
                  Saber más sobre {area.title}
                </button>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};