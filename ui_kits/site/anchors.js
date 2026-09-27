// Anclas del sitio: convierte un label en slug y hace scroll al bloque correspondiente.
function slugify(text) {
  return String(text)
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function scrollToAnchor(slug, attempt = 0) {
  if (!slug) { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
  const el = document.querySelector(`[data-anchor="${slug}"]`);
  if (!el) {
    if (attempt < 10) window.setTimeout(() => scrollToAnchor(slug, attempt + 1), 60);
    else window.scrollTo({ top: 0, behavior: "smooth" }); // sin ancla: al inicio de la sección
    return;
  }
  const top = el.getBoundingClientRect().top + window.scrollY - 96;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

window.slugify = slugify;
window.scrollToAnchor = scrollToAnchor;
