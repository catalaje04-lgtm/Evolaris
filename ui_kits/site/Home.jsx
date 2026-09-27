const R = (id, fallback) => (window.__resources && window.__resources[id]) || fallback;

function Home({ onNavigate }) {
  return (
    <main style={{ background: "var(--surface-page)" }}>
      <SectionHero id="home-hero" title="Servicios y venta de" accent="drones" placeholder="Foto de campo — full bleed" height={420} />
      <section style={{ maxWidth: 1160, margin: "0 auto", padding: "var(--section-gap, 120px) var(--pad-x, 48px)", display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
        <p className="text-quote" style={{ margin: 0, fontSize: "var(--quote-size, 24px)", lineHeight: 1.17, textAlign: "center", maxWidth: 720 }}>
          Servicios de drones y venta de equipos DJI Enterprise en Neuquén y Río Negro
        </p>
        <img src={R("lineaLogo", "../../assets/brand/linea-logo.svg")} alt="" style={{ display: "block", width: 60, height: 24 }} />
      </section>
      <section style={{ background: "var(--color-black-950)", padding: "var(--section-gap, 120px) var(--pad-x, 48px)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", display: "grid", gridTemplateColumns: "var(--cols-split-narrow)", gap: "var(--split-gap, 56px)", alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "20px" }}>
            <h2 className="text-h3" style={{ margin: 0, fontSize: "var(--size-h3-compact)", color: "var(--color-white-50)" }}>
              Trabajemos <span style={{ color: "var(--color-primary)" }}>juntos</span>
            </h2>
            <p className="text-paragraph" style={{ margin: 0, color: "var(--color-gray-300)", maxWidth: 300 }}>
              Dejanos tus datos y nos ponemos en contacto para asesorarte.
            </p>
          </div>
          <div style={{ background: "var(--color-white-50)", borderRadius: "var(--radius-md)", padding: "var(--form-pad, 40px) var(--form-pad, 40px) var(--form-pad-bottom, 40px)" }}>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
window.Home = Home;
