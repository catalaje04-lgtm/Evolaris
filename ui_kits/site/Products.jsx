const PRODUCT_FILTERS = [
  { value: "mapeo", label: "Mapeo" },
  { value: "inspecciones", label: "Inspecciones" },
  { value: "emergencias", label: "Emergencias" },
  { value: "seguridad", label: "Seguridad" },
  { value: "topografia", label: "Topografía" },
  { value: "volumetrica", label: "Medición volumétrica" },
  { value: "automatizacion", label: "Automatización" },
  { value: "monitoreo", label: "Monitoreo continuo" },
];
const FILTER_LABEL = Object.fromEntries(PRODUCT_FILTERS.map((f) => [f.value, f.label]));

const R = (id, fallback) => (window.__resources && window.__resources[id]) || fallback;

// Catálogo por producto: cada uno todavía usa un placeholder — reemplazar por la URL
// real del PDF cuando esté disponible (el botón solo abre valores que empiecen con http).
const PRODUCTS = [
  {
    name: "DJI Matrice 400",
    catalogUrl: "PEGAR_CATALOGO_MATRICE_400",
    tags: ["mapeo", "inspecciones", "emergencias"],
    desc: "Plataforma pensada para las condiciones más exigentes: hasta 59 min de autonomía, 6 kg de capacidad de carga y detección avanzada de obstáculos. Compatible con sensores visibles, térmicos y LiDAR, para mapeo, inspecciones y respuesta ante emergencias.",
    image: "../../assets/products/matrice-400.jpg",
  },
  {
    name: "DJI Matrice 4 Series",
    catalogUrl: "PEGAR_CATALOGO_MATRICE_4_SERIES",
    tags: ["inspecciones", "seguridad", "topografia", "volumetrica"],
    desc: "Drones compactos multisensor para el trabajo diario, con detección y medición inteligente.",
    variants: [
      { name: "Matrice 4T", desc: "inspecciones en electricidad, seguridad y emergencias." },
      { name: "Matrice 4E", desc: "mapeo geoespacial, topografía y seguimiento de obras." },
    ],
    image: "../../assets/products/matrice-4-series.jpg",
  },
  {
    name: "DJI Matrice 4D Series + Dock 3",
    catalogUrl: "PEGAR_CATALOGO_MATRICE_4D_DOCK3",
    tags: ["automatizacion", "monitoreo"],
    desc: "Sistema de operación remota y autónoma: programa tareas sin necesidad de presencia continua en el lugar, reduciendo tiempos y costos operativos.",
    image: "../../assets/products/matrice-4d-dock3.jpg",
  },
];

function ProductRow({ product, index }) {
  const { FilterTag, Button } = window.EvolarisDesignSystem_db2578;
  return (
    <div data-anchor={window.slugify(product.name)} style={{ display: "grid", gridTemplateColumns: "var(--cols-split)", gap: "var(--split-gap, 56px)", alignItems: "start", padding: "var(--row-gap, calc(60px * var(--rhythm, 1))) 0" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "16px", marginTop: "24px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {product.tags.map((t) => <FilterTag key={t} sector="otros" size="sm">{FILTER_LABEL[t]}</FilterTag>)}
        </div>
        <h3 className="text-h3" style={{ margin: 0 }}>{product.name}</h3>
        <p className="text-paragraph" style={{ margin: "12px 0 0", color: "var(--color-gray-700)", maxWidth: 340 }}>{product.desc}</p>
        {product.variants ? (
          <ul style={{ margin: "4px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
            {product.variants.map((v) => (
              <li key={v.name} className="text-paragraph" style={{ fontSize: "14px", color: "var(--color-gray-700)", maxWidth: 340 }}>
                <span className="text-h5" style={{ color: "var(--color-black-950)" }}>{v.name}</span>: {v.desc}
              </li>
            ))}
          </ul>
        ) : null}
        <div style={{ marginTop: 12 }}>
          <Button
            variant="secondary"
            icon="download"
            onClick={() => {
              if (/^https?:\/\//.test(product.catalogUrl)) window.open(product.catalogUrl, "_blank");
            }}
          >Descargar catálogo</Button>
        </div>
      </div>
      <div style={{ width: "100%", aspectRatio: "16 / 10", borderRadius: "var(--radius-md)", overflow: "hidden" }}>
        {product.image ? (
          <img src={product.image} alt={product.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        ) : (
          <image-slot id={`producto-${index}`} shape="rect" placeholder={`Foto de ${product.name}`}></image-slot>
        )}
      </div>
    </div>
  );
}

function Products({ onNavigate }) {
  const { SearchBar } = window.EvolarisDesignSystem_db2578;
  const [q, setQ] = React.useState("");
  const [tags, setTags] = React.useState([]);
  const list = PRODUCTS.filter((p) =>
    (!q || p.name.toLowerCase().includes(q.toLowerCase())) &&
    (!tags.length || tags.some((x) => p.tags.includes(x)))
  );
  return (
    <main style={{ background: "var(--surface-page)" }}>
      <SectionHero id="productos-hero" title="Nuestros" accent="productos" placeholder="Foto de drone en operación — full bleed" height={300} />

      <section style={{ maxWidth: 1160, margin: "0 auto", padding: "calc(var(--section-gap, 120px) * 0.84) var(--pad-x, 48px) 0", display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
        <p className="text-quote" style={{ margin: 0, fontSize: "var(--quote-size, 24px)", lineHeight: 1.17, textAlign: "center", maxWidth: 720 }}>
          Somos <img src={R("bidcomLogo", "../../assets/logo/partners/bidcom-black.png")} alt="Bidcom" style={{ height: "0.95em", width: "auto", display: "inline-block", verticalAlign: "baseline", position: "relative", top: "0.08em" }} /> partners en la región de Neuquén y Río Negro.<br />Asesoramos y gestionamos la compra de tu equipo.
        </p>
        <img src={R("lineaLogo", "../../assets/brand/linea-logo.svg")} alt="" style={{ display: "block", width: 60, height: 24 }} />
      </section>

      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "calc(var(--section-gap, 120px) * 0.84) var(--pad-x, 48px) var(--section-gap, 120px)" }}>
        <div style={{ maxWidth: "var(--search-max, 420px)", margin: "0 auto 32px" }}>
          <SearchBar placeholder="Buscar productos" value={q} onChange={setQ} sectors={PRODUCT_FILTERS} selectedSectors={tags} onSectorsChange={setTags} results={list.map((p) => p.name)} onSelect={(r) => setQ(typeof r === "string" ? r : r.label)} />
        </div>
        {list.map((p) => <ProductRow key={p.name} product={p} index={PRODUCTS.indexOf(p)} />)}
        {!list.length ? <p className="text-paragraph" style={{ textAlign: "center", color: "var(--color-gray-600)", padding: "48px 0" }}>No encontramos productos para esa búsqueda.</p> : null}
      </div>
    </main>
  );
}
window.Products = Products;
