// components/AreaDetails.tsx

import { color } from "motion/debug";
import { ScrollReveal } from "./ScrollReveal";

const areas = [
  {
    id: "almacen",
    title: "Almacén",
    //description: "Optimizamos el resguardo de insumos y productos mediante un control de inventario riguroso. Nuestro sistema garantiza que cada elemento se almacene bajo condiciones óptimas de limpieza y organización, evitando contaminaciones cruzadas y asegurando una rotación eficiente (PEPS) para mantener la integridad total de la carga.",
    //image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000",
    color: "bg-white"
  },
  {
    id: "campo",
    title: "Campo",
    //description: "Nuestro módulo de campo permite un seguimiento detallado de cada etapa del cultivo, desde la siembra hasta la cosecha. Con herramientas de monitoreo en tiempo real, los agricultores pueden tomar decisiones informadas sobre riego, fertilización y control de plagas, asegurando una producción eficiente y sostenible.",
    //image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000",
    color: "bg-slate-50"
  },
  {
    id: "carnicos",
    title: "Cárnicos",
    //description: "Gestión integral de tu producción cárnicas, desde la cría hasta el empaque.",
    //image: "https://images.unsplash.com/photo-1556911220-e15b2935c47d?q=80&w=1000",
    color: "bg-slate-50"
  },
  {
    id: "cuarto-frio",
    title: "Cuarto Frío",
    //description: "Controla la temperatura y humedad de tus productos almacenados en cuartos fríos para garantizar su frescura.",
    //image: "https://images.unsplash.com/photo-1581091870620-3c1e5f8b9f1d?q=80&w=1000",
    color: "bg-white"
  },
  {
    id: "empacadora",
    title: "Empacadora",
    //description: "Optimiza el proceso de empaque y etiquetado de tus productos con nuestro módulo especializado.",
    //image: "https://images.unsplash.com/photo-1581091870620-3c1e5f8b9f1d?q=80&w=1000",
    color: "bg-slate-50"
  },
  {
    id: "invernadero",
    title: "Invernadero",
    //description: "Gestiona el crecimiento de tus cultivos en entornos controlados con nuestro módulo de invernadero.",
    //image: "https://images.unsplash.com/photo-1581091870620-3c1e5f8b9f1d?q=80&w=1000",
    color: "bg-slate-50"
  }
  
  
  
];

export const AreaDetails = () => {
  return (
    
    <> 
       {/* --- ENCABEZADO CON EL ESTILO EXACTO DE HOWITWORKS --- */}
      <section className="pt-24 pb-8" style={{ background: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="mb-16 text-center pt-1">
              <p
                className="text-xs font-semibold tracking-[0.14em] uppercase mb-3"
                style={{ color: "#2b7ab5" }}
              >
                Nuestros Sectores
              </p>
              <h2
                className="font-semibold tracking-tight"
                style={{
                  fontSize: "clamp(1.8rem, 3vw, 2.75rem)",
                  lineHeight: 1.3,
                  color: "#0d5a8f",
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
          className={`py-20 ${area.color} scroll-mt-20`}
        >
          <div className="container mx-auto px-6">
            <div className={`flex flex-col items-center gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
              
              {/* Imagen */}
              <div className="w-full md:w-1/2">
                <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl">
                  <img 
                    //src={area.image} 
                    alt={area.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Texto */}
              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-4xl font-bold text-slate-800">{area.title}</h2>
                {/* <p className="text-lg text-slate-600 leading-relaxed">
                  {area.description}
                </p> */}
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
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