const R = (id, fallback) => (window.__resources && window.__resources[id]) || fallback;

function SectionIntro({ children, vectorFirst = false }) {
  const vector = <img src={R("lineaLogo", "assets/brand/linea-logo.svg")} alt="" style={{ display: "block", width: 60, height: 24 }} />;
  return (
    <section style={{ maxWidth: 1160, margin: "0 auto", padding: "calc(var(--section-gap, 120px) * 0.84) var(--pad-x, 48px) 0", display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
      {vectorFirst ? vector : null}
      <p className="text-quote" style={{ margin: 0, fontSize: "var(--quote-size, 24px)", textAlign: "center", maxWidth: 720 }}>{children}</p>
      {vectorFirst ? null : vector}
    </section>
  );
}
window.SectionIntro = SectionIntro;
