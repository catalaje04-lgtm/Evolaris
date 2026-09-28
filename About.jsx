const ABOUT_BANDS = [
  { icon: "verified", title: "Piloto", accent: "certificado", desc: "Contamos con piloto certificado por la Administración Nacional de Aviación Civil (ANAC)." },
  { icon: "flight", title: "En constante", accent: "expansión", desc: "Incorporamos capacidades de forma constante, ampliando nuestros servicios hacia otras industrias." },
  { icon: "factory", title: "Tecnología de", accent: "precisión", desc: "Usamos tecnología de precisión para tomar decisiones basadas en datos, y ayudarte a optimizar tu negocio." },
];

function AboutBands({ bands }) {
  return (
    <section style={{ background: "var(--color-black-950)", padding: "var(--section-gap, 120px) var(--band-pad-x, 230px)", marginTop: "var(--section-gap, 120px)" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", display: "grid", gridTemplateColumns: "var(--cols-3)", gap: "var(--band-gap, 48px)", alignItems: "start" }}>
        {bands.map((band) => (
          <div key={band.accent} style={{ background: "var(--color-white-50)", borderRadius: "var(--radius-md)", padding: "24px", height: "var(--card-h, 380px)", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "48px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <span className="mi" style={{ fontSize: "var(--band-icon, 48px)", color: "var(--color-primary)", alignSelf: "flex-start" }}>{band.icon}</span>
              <h3 className="text-h4" style={{ margin: 0, color: "var(--color-black-950)" }}>
                {band.title} <span style={{ color: "var(--color-primary)" }}>{band.accent}</span>
              </h3>
            </div>
            <p className="text-paragraph" style={{ margin: 0, color: "var(--color-gray-700)" }}>{band.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function About({ onNavigate }) {
  return (
    <main style={{ background: "var(--surface-page)", paddingBottom: "var(--section-gap, 120px)" }}>
      <SectionHero id="nosotros-hero" title="Sobre" accent="Evolaris" placeholder="Foto del equipo en campo" height={300} />

      <SectionIntro>Con base en Neuquén, brindamos servicios de drones para el agro y asesoramiento en la venta de equipamiento para otras industrias.</SectionIntro>
      <section style={{ maxWidth: 1160, margin: "0 auto", padding: "var(--section-gap, 120px) var(--pad-x, 48px) 0" }}>
        <div style={{ width: "100%", aspectRatio: "16 / 9", borderRadius: "var(--radius-md)", overflow: "hidden" }}>
          <img src="assets/about/campo.jpg" alt="Equipo de Evolaris trabajando en el campo" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
      </section>

      <section style={{ maxWidth: 1160, margin: "0 auto", padding: "var(--section-gap, 120px) var(--pad-x, 48px) 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "var(--cols-split-narrow)", gap: "var(--split-gap, 56px)", alignItems: "start" }}>
          <h3 className="text-h4" style={{ margin: 0 }}>Por qué comenzamos</h3>
          <p className="text-paragraph" style={{ margin: 0, color: "var(--color-gray-700)" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper in neque in viverra. Donec ante eros, mollis et quam vel, bibendum tristique ante. Cras fringilla bibendum posuere. Phasellus pretium volutpat nisl vitae dignissim.
          </p>
        </div>
      </section>

      <AboutBands bands={ABOUT_BANDS} />

      <section style={{ maxWidth: 1160, margin: "0 auto", padding: "var(--section-gap, 120px) var(--pad-x, 48px) 0" }}>
        <div style={{ width: "100%", aspectRatio: "16 / 9", borderRadius: "var(--radius-md)", overflow: "hidden" }}>
          <img src="assets/about/equipo.jpg" alt="Equipo móvil de Evolaris" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
      </section>

      <SectionIntro vectorFirst>Comencemos a trabajar juntos</SectionIntro>
    </main>
  );
}
window.About = About;
