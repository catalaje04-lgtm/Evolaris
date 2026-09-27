const R = (id, fallback) => (window.__resources && window.__resources[id]) || fallback;

function Header({ page, onNavigate }) {
  const { SiteHeader } = window.EvolarisDesignSystem_db2578;
  return (
    <SiteHeader
      logoSrc={R("logoColor", "../../assets/logo/logo-color.svg")}
      links={[{ value: "inicio", label: "Inicio" }, { value: "servicios", label: "Servicios" }, { value: "productos", label: "Productos" }, { value: "nosotros", label: "Nosotros" }]}
      active={page}
      home="inicio"
      onNavigate={onNavigate}
      onCta={() => window.open(window.buildWhatsAppLink(window.WHATSAPP_GENERIC_TEXT), "_blank")}
    />
  );
}
window.Header = Header;
window.R = R;
