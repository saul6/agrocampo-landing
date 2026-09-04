// components/AreaDetails.tsx
import { ScrollReveal } from "@/components/ScrollReveal";

const areas = [
  {
    id: "almacen",
    title: "Almacén",
    hook: "Recepción, almacenamiento y trazabilidad bajo control.",
    description: "Controla la inocuidad en el almacén y el empaque: recepción diaria de producto, trazabilidad y recuperación de lotes, limpieza y sanitización, mantenimiento, control de plagas y registro de personal. Genera los formatos y la trazabilidad que exigen las auditorías.",
    keywords: ["recepción", "trazabilidad", "limpieza", "mantenimiento", "plagas", "BPM"],
    image: "/images/Imagen Almacen mejorada.png",
    color: "bg-white"
  },
  {
    id: "campo",
    title: "Campo",
    hook: "Buenas Prácticas Agrícolas, desde la siembra hasta la cosecha.",
    description: "Digitaliza el control de inocuidad en la producción a cielo abierto: aplicaciones de agroquímicos, fertilización, monitoreo de plagas, manejo del agua, higiene del personal y cosecha. Cada registro queda con fecha, responsable y evidencia, listo para auditorías de campo.",
    keywords: ["aplicaciones", "fertilización", "cosecha", "agua", "BPA", "auditoría de granja"],
    image: "/images/Imagen campo mejorada.jpg",
    color: "bg-white"
  },
  {
    id: "carnicos",
    title: "Cárnicos",
    hook: "Inocuidad para operaciones de cárnicos y establecimientos TIF.",
    description: "Adapta los controles de inocuidad a establecimientos de cárnicos y Tipo Inspección Federal (TIF): HACCP, Buenas Prácticas de Manufactura, higiene y registro del personal, y los formatos de control que requiere el sector. Digital, trazable y ordenado.",
    keywords: ["TIF", "cárnicos", "HACCP", "BPM", "higiene"],
    image: "/images/Imagen carnicos mejorada.jpg",
    color: "bg-slate-50"
  },
  {
    id: "cuarto-frio",
    title: "Cuarto Frío",
    hook: "Cadena de frío y cumplimiento para exportar con confianza.",
    description: "Une el control de la cadena de frío con la operación de exportación: temperaturas del conservador, entradas y salidas de pre-enfriamiento, limpieza de cuartos fríos, manifiestos de embarque y trazabilidad completa del producto, con los controles de inocuidad que exigen los estándares internacionales.",
    keywords: ["cadena de frío", "temperatura", "pre-enfriamiento", "manifiesto", "exportación", "trazabilidad"],
    image: "/images/Imagen cuarto frio mejorada.jpg",
    color: "bg-slate-50"
  },
  {
    id: "empacadora",
    title: "Empacadora",
    hook: "Buenas Prácticas de Manufactura en cada línea de empaque.",
    description: "Digitaliza la inocuidad en la empacadora: BPM, HACCP, higiene y control del personal, manejo del material de empaque, limpieza de equipos y áreas, y preparación del embarque. Formatos homogéneos y listos para auditoría.",
    keywords: ["BPM", "HACCP", "material de empaque", "higiene", "embarque"],
    image: "/images/Imagen empacadora mejorada.jpg",
    color: "bg-white"
  },
  {
    id: "invernadero",
    title: "Invernadero",
    hook: "Inocuidad y trazabilidad en producción protegida.",
    description: "Lleva las Buenas Prácticas Agrícolas al ambiente controlado del invernadero: control de insumos, monitoreo de plagas, higiene y prácticas del personal, y registros de la instalación de producción. Todo capturado desde el celular, sin papel.",
    keywords: ["producción protegida", "insumos", "plagas", "higiene", "BPA"],
    image: "/images/Imagen invernadero mejorada.jpg",
    color: "bg-slate-50"
  }
];

export const AreaDetails = () => {
  return (
    <> 
      {/* SECCIÓN DE ENCABEZADO - AJUSTADA EXACTAMENTE A HOWITWORKS */}
      <section className="py-24" style={{ background: "#ffffff" }}>
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

      {/* LISTADO DE ÁREAS INTERCALADAS */}
      {areas.map((area, index) => (
        <section 
          key={area.id} 
          id={area.id} 
          className={`py-24 ${area.color} scroll-mt-20`}
        >
          <div className="container mx-auto px-6">
            <div className={`flex flex-col items-center gap-16 ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
              
              {/* Contenedor de Imagen */}
              <div className="w-full md:w-1/2">
                <div className="relative h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <img 
                    src={area.image} 
                    alt={area.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Contenedor de Texto */}
              <div className="w-full md:w-1/2 space-y-6">
                <h3 className="text-sm font-bold tracking-widest text-[#2AAD95] uppercase">
                  {area.title}
                </h3>
                <p className="text-2xl font-semibold text-[#173251] leading-tight">
                  {area.hook}
                </p>
                <p className="text-lg text-slate-600 leading-relaxed font-normal">
                  {area.description}
                </p>
                
                {/* Etiquetas de Palabras Clave */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {area.keywords.map((word) => (
                    <span 
                      key={word} 
                      className="px-3 py-1 bg-blue-50 text-[#2AAD95] text-xs font-bold rounded-full uppercase tracking-wider border border-blue-100"
                    >
                      {word}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>
      ))}
    </>
  );
};