// Bloque "Próximamente" desactivado a pedido del cliente (sept. 2026).
// Los servicios marcados con `soon: true` quedan guardados abajo; poner SHOW_SOON = true para volver a publicarlos.
const SHOW_SOON = false;

const SERVICES = [
  {
    name: "Siembra", sectors: ["agronomia"],
    desc: "Distribución uniforme, ideal para cultivos de cobertura, sin pisar el terreno. Apto para cultivos de alfalfa, maíz, entre otros.",
    image: "../../assets/services/siembra.jpg",
  },
  {
    name: "Fertilización", sectors: ["agronomia"],
    desc: "Distribución de nutrientes líquidos y sólidos granulados, aplicando la dosis justa donde se necesita, cuidando el suelo y optimizando el uso de insumos.",
    image: "../../assets/services/fertilizacion.jpg",
  },
  {
    name: "Pulverización", sectors: ["agronomia"],
    desc: "Aplicación de fitosanitarios, fertilizantes y herbicidas. El flujo de aire del equipo mejora la penetración en la planta y permite trabajar incluso con suelo húmedo. Apto para cultivos intensivos (fruticultura) y extensivos (alfalfa, maíz, entre otros).",
    image: "../../assets/services/pulverizacion.jpg",
  },
  {
    name: "Análisis multiespectral", sectors: ["agronomia"],
    desc: "Monitoreo de grandes áreas para identificar estado de salud del cultivo, estrés hídrico o nutricional, y presencia temprana de plagas. Obtiene datos que ayudan a decidir antes de que el problema afecte el rendimiento.",
    indices: ["Espectro visible (RGB)", "NDVI", "NDRE", "CHM", "NDWI", "GNDVI", "Índices térmicos"],
    image: "../../assets/services/analisis-multiespectral.jpg",
  },
  {
    name: "Mapas de prescripción y aplicación selectiva", sectors: ["agronomia"],
    desc: "Aplicación exacta de fertilizantes, semillas y agroquímicos, utilizando solo la cantidad necesaria en cada sector del lote. Ahorro económico y menor impacto ambiental.",
  },
  {
    name: "Inspecciones", sectors: ["oilgas", "construccion"], soon: true,
    desc: "Diagnóstico visual y termográfico de infraestructura (antenas, techos, líneas eléctricas, tuberías), para detectar fallas sin detener la operación.",
  },
  {
    name: "Relevamientos", sectors: ["mineria", "oilgas"], soon: true,
    desc: "Captura de datos georreferenciados en entornos complejos, con tecnología RTK orientada a mapeo de alta precisión.",
  },
  {
    name: "Fotogrametría", sectors: ["construccion", "mineria"], soon: true,
    desc: "Modelado 3D y ortomosaicos a partir de fotografías aéreas, para generar planos topográficos e información geoespacial.",
  },
  {
    name: "Seguimiento de obras", sectors: ["construccion"], soon: true,
    desc: "Registro visual periódico del avance de una obra, mediante vuelos programados de manera remota.",
  },
  {
    name: "Impacto ambiental", sectors: ["mineria", "oilgas"], soon: true,
    desc: "Monitoreo de áreas para relevar erosión de suelo, cobertura vegetal y detección temprana de fugas y pasivos ambientales.",
  },
  {
    name: "Vigilancia", sectors: ["mineria", "oilgas"], soon: true,
    desc: "Patrullaje aéreo y monitoreo de perímetros extensos o de difícil acceso. Automatizado las 24 horas y transmisión de video en tiempo real.",
  },
];

// Etiquetas y filtros de sector desactivados: con un solo sector visible no aportan.
// Volver a `true` junto con SHOW_SOON para recuperarlos.
const SHOW_SECTORS = false;

const VISIBLE_SERVICES = SERVICES.filter((s) => SHOW_SOON || !s.soon);
const VISIBLE_SECTORS = [...new Set(VISIBLE_SERVICES.flatMap((s) => s.sectors))];

function IndicesList({ items }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "4px", marginTop: "4px" }}>
      <div className="text-label" style={{ fontSize: "11px", color: "var(--color-gray-600)" }}>Índices</div>
      <p className="text-paragraph" style={{ margin: 0, fontSize: "14px", lineHeight: 1.3, color: "var(--color-gray-700)", maxWidth: 340 }}>
        {items.join(" | ")}
      </p>
    </div>
  );
}

function ServiceRow({ service, index }) {
  const { FilterTag } = window.EvolarisDesignSystem_db2578;
  return (
    <div data-anchor={window.slugify(service.name)} style={{ display: "grid", gridTemplateColumns: "var(--cols-split)", gap: "var(--split-gap, 56px)", alignItems: "start", padding: "var(--row-gap, calc(60px * var(--rhythm, 1))) 0" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "16px", marginTop: "48px" }}>
        {SHOW_SECTORS ? (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {service.sectors.map((s) => <FilterTag key={s} sector={s} size="sm" />)}
          </div>
        ) : null}
        <h3 className="text-h3" style={{ margin: 0 }}>{service.name}</h3>
        <p className="text-paragraph" style={{ margin: "12px 0 0", color: service.soon ? "var(--color-gray-800)" : "var(--color-gray-700)", maxWidth: 340 }}>{service.desc}</p>
        {service.indices ? <IndicesList items={service.indices} /> : null}
      </div>
      <div style={{ width: "100%", aspectRatio: "16 / 10", borderRadius: "var(--radius-md)", overflow: "hidden" }}>
        {service.image ? (
          <img src={service.image} alt={service.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        ) : (
          <image-slot id={`servicio-${index}`} shape="rect" placeholder={`Foto de ${service.name}`}></image-slot>
        )}
      </div>
    </div>
  );
}

function Services({ onNavigate }) {
  const { SearchBar } = window.EvolarisDesignSystem_db2578;
  const [q, setQ] = React.useState("");
  const [sectors, setSectors] = React.useState([]);
  const list = VISIBLE_SERVICES.filter((s) =>
    (!q || s.name.toLowerCase().includes(q.toLowerCase())) &&
    (!sectors.length || sectors.some((x) => s.sectors.includes(x)))
  );
  const now = list.filter((s) => !s.soon);
  const soon = SHOW_SOON ? list.filter((s) => s.soon) : [];
  return (
    <main style={{ background: "var(--surface-page)" }}>
      <SectionHero id="servicios-hero" title="Nuestros" accent="servicios" placeholder="Foto de campo — full bleed" height={300} />

      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "calc(var(--section-gap, 120px) * 0.84) var(--pad-x-servicios, 120px) var(--section-gap, 120px)" }}>
        <div style={{ maxWidth: "var(--search-max, 420px)", margin: "0 auto 32px" }}>
          <SearchBar placeholder="Buscar servicios" value={q} onChange={setQ} sectors={SHOW_SECTORS ? VISIBLE_SECTORS : []} selectedSectors={sectors} onSectorsChange={setSectors} results={list.map((s) => s.name)} onSelect={(r) => setQ(typeof r === "string" ? r : r.label)} />
        </div>

        {now.map((s) => <ServiceRow key={s.name} service={s} index={SERVICES.indexOf(s)} />)}

        {soon.length ? (
          <div style={{ opacity: 0.85 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", paddingTop: "64px", paddingBottom: "48px", borderTop: "1px solid var(--border-default)" }}>
              <h2 className="text-h3" style={{ margin: 0, fontSize: "var(--size-h3-mini)", color: "var(--color-primary)" }}>Próximamente</h2>
              <p className="text-paragraph" style={{ margin: 0, fontSize: "16px", color: "var(--color-gray-800)", maxWidth: 540, textAlign: "center" }}>
                En constante aprendizaje, incorporando servicios para otras industrias.
              </p>
            </div>
            {soon.map((s) => <ServiceRow key={s.name} service={s} index={SERVICES.indexOf(s)} />)}
          </div>
        ) : null}

        {!list.length ? <p className="text-paragraph" style={{ textAlign: "center", color: "var(--color-gray-600)", padding: "48px 0" }}>No encontramos servicios para esa búsqueda.</p> : null}
      </div>
    </main>
  );
}
window.Services = Services;
