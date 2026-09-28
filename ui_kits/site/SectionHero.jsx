function SectionHero({ id, title, accent, placeholder, height = 300, children }) {
  return (
    <section style={{ padding: "8px" }}>
      <div style={{ position: "relative", height: `calc(${height}px * var(--hero-scale, 1))`, overflow: "hidden", borderRadius: "var(--radius-md)" }}>
        <image-slot id={id} shape="rect" placeholder={placeholder}></image-slot>
        <div style={{ position: "absolute", inset: 0, background: "var(--hero-veil, linear-gradient(to top, rgba(13,13,13,0.55) 0%, rgba(13,13,13,0.28) 45%, rgba(13,13,13,0) 85%))", pointerEvents: "none" }}></div>
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-start", gap: "20px", padding: "var(--hero-pad, 0 40px 36px)" }}>
          <h1 className="text-h1" style={{ margin: 0, fontSize: "var(--size-h1)", color: "var(--color-white-50)", maxWidth: "18ch", textWrap: "balance" }}>
            {title} <span style={{ color: "var(--color-primary)" }}>{accent}</span>
          </h1>
          {children}
        </div>
      </div>
    </section>
  );
}
window.SectionHero = SectionHero;
