function Footer({ onNavigate }) {
  const { SiteFooter } = window.EvolarisDesignSystem_db2578;
  const R = window.R;
  return (
    <SiteFooter
      tone="dark"
      logoSrc={R("logoWhite", "assets/logo/logo-white.svg")}
      socialBase="assets/icons/social"
      socialSrcs={{
        instagram: R("socialInstagram", null),
        facebook: R("socialFacebook", null),
        whatsapp: R("socialWhatsapp", null),
      }}
      whatsapp={window.buildWhatsAppLink(window.WHATSAPP_GENERIC_TEXT)}
      home="inicio"
      onNavigate={(section, link) => onNavigate && onNavigate(section, link)}
      onCta={() => window.open(window.buildWhatsAppLink(window.WHATSAPP_GENERIC_TEXT), "_blank")}
    />
  );
}
window.Footer = Footer;
