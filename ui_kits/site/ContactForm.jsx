const CONTACT_SERVICES = [
  { value: "", label: "Elegí un servicio" },
  { value: "pulverizacion", label: "Pulverización" },
  { value: "fertilizacion", label: "Fertilización" },
  { value: "siembra", label: "Siembra" },
  { value: "multiespectral", label: "Análisis multiespectral" },
  { value: "prescripcion", label: "Mapas de prescripción y aplicación selectiva" },
  { value: "no-seguro", label: "No estoy seguro" },
];

const CONTACT_PRODUCTS = [
  { value: "", label: "Elegí un producto" },
  { value: "matrice-400", label: "DJI Matrice 400" },
  { value: "matrice-4-series", label: "DJI Matrice 4 Series" },
  { value: "matrice-4t", label: "DJI Matrice 4T" },
  { value: "matrice-4e", label: "DJI Matrice 4E" },
  { value: "matrice-4d-dock3", label: "DJI Matrice 4D Series + Dock 3" },
  { value: "no-seguro", label: "No estoy seguro" },
];

const CIUDADES = [
  { value: "", label: "Elegí tu ciudad" },
  { value: "cipolletti", label: "Cipolletti, Río Negro" },
  { value: "general-roca", label: "General Roca, Río Negro" },
  { value: "allen", label: "Allen, Río Negro" },
  { value: "villa-regina", label: "Villa Regina, Río Negro" },
  { value: "chichinales", label: "Chichinales, Río Negro" },
  { value: "choele-choel", label: "Choele Choel, Río Negro" },
  { value: "cervantes", label: "Cervantes, Río Negro" },
  { value: "mainque", label: "Mainqué, Río Negro" },
  { value: "catriel", label: "Catriel, Río Negro" },
  { value: "neuquen", label: "Neuquén Capital, Neuquén" },
  { value: "plottier", label: "Plottier, Neuquén" },
  { value: "centenario", label: "Centenario, Neuquén" },
  { value: "senillosa", label: "Senillosa, Neuquén" },
  { value: "anelo", label: "Añelo, Neuquén" },
  { value: "otra", label: "Otra localidad" },
];

const EMPTY = { nombre: "", apellido: "", ciudad: "", servicio: "", telefono: "", email: "", mensaje: "" };

// Google Apps Script publicado como Web App (Implementar > Ejecutar como: yo, Quién tiene
// acceso: cualquiera) que agrega una fila a la planilla de leads. Pegar acá la URL /exec.
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxthj-aOl4kougqsyVJayuXCStePJkwQlXCbrDxqAzLq7LLNpDT4Jku3c5csv9FcGx0/exec";

// text/plain evita el preflight CORS que Apps Script no responde bien; no-cors implica que
// nunca sabemos si el POST llegó — por eso el llamador siempre sigue adelante después.
function sendToGoogleSheet(payload) {
  return fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload),
  }).catch((err) => {
    console.warn("No se pudo registrar el contacto en Google Sheets:", err);
  });
}

// Resuelve los value (slugs) del form a las etiquetas legibles, para el mensaje de WhatsApp
// y para la fila que se manda a Google Sheets (así la planilla no queda con "matrice-400").
function resolveContactLabels(f, modo) {
  const ciudad = CIUDADES.find((c) => c.value === f.ciudad);
  const opciones = modo === "productos" ? CONTACT_PRODUCTS : CONTACT_SERVICES;
  const opcion = opciones.find((o) => o.value === f.servicio);
  return {
    ciudadLabel: ciudad ? ciudad.label : f.ciudad,
    opcionLabel: opcion ? opcion.label : f.servicio,
    nombreCompleto: `${f.nombre} ${f.apellido}`.trim(),
  };
}

function buildWhatsAppMessage(f, modo) {
  const { ciudadLabel, opcionLabel, nombreCompleto } = resolveContactLabels(f, modo);
  let mensaje = modo === "productos"
    ? `Hola! Mi nombre es ${nombreCompleto}. Me interesa el ${opcionLabel} y estoy en la zona de ${ciudadLabel}.`
    : `Hola! Mi nombre es ${nombreCompleto}. Me interesa el servicio de ${opcionLabel} en la zona de ${ciudadLabel}.`;
  if (f.mensaje.trim()) mensaje += ` ${f.mensaje.trim()}`;
  return mensaje;
}

function ContactForm() {
  const { Input, Select, Button, Textarea, Tabs } = window.EvolarisDesignSystem_db2578;
  const [modo, setModo] = React.useState("servicios");
  const [f, setF] = React.useState(EMPTY);
  const [errors, setErrors] = React.useState({});
  const [incompleto, setIncompleto] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const [waLink, setWaLink] = React.useState("");
  const cambiarModo = (v) => {
    if (v === modo) return;
    setModo(v);
    setF((s) => ({ ...s, servicio: "" }));
    setErrors((e) => ({ ...e, servicio: undefined }));
    setIncompleto(false);
  };
  const set = (k) => (v) => { setF((s) => ({ ...s, [k]: v })); setErrors((e) => ({ ...e, [k]: undefined })); setIncompleto(false); };

  const submit = () => {
    const e = {};
    if (!f.nombre.trim()) e.nombre = "Ingresá tu nombre";
    if (!f.apellido.trim()) e.apellido = "Ingresá tu apellido";
    if (!f.telefono.trim()) e.telefono = "Ingresá tu teléfono";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.email)) e.email = "Revisá el correo";
    if (!f.ciudad) e.ciudad = "Elegí tu ciudad";
    if (!f.servicio) e.servicio = modo === "productos" ? "Elegí un producto" : "Elegí un servicio";
    setErrors(e);
    setIncompleto(Object.keys(e).length > 0);
    if (Object.keys(e).length) return;

    const { ciudadLabel, opcionLabel } = resolveContactLabels(f, modo);
    const link = window.buildWhatsAppLink(buildWhatsAppMessage(f, modo));
    // WhatsApp se abre ya, sincrónico, en el mismo click (evita el bloqueo de
    // popups y también el ERR_BLOCKED_BY_RESPONSE que da abrir en blanco y
    // redirigir recién después: WhatsApp corta esa navegación demorada por su
    // Cross-Origin-Opener-Policy). El guardado en Sheets corre en paralelo,
    // sin bloquear ni demorar el envío por WhatsApp.
    window.open(link, "_blank");
    sendToGoogleSheet({
      modo,
      nombre: f.nombre,
      apellido: f.apellido,
      telefono: f.telefono,
      email: f.email,
      ciudad: ciudadLabel,
      servicio: opcionLabel,
      mensaje: f.mensaje,
    });
    setWaLink(link);
    setSent(true);
  };

  if (sent) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "16px", padding: "48px 0" }}>
        <span className="mi" style={{ fontSize: "40px", color: "var(--color-primary)" }}>check_circle</span>
        <h3 className="text-h3" style={{ margin: 0, fontSize: "var(--size-h3-mini)" }}>¡Ya casi!</h3>
        <p className="text-paragraph" style={{ margin: 0, color: "var(--color-gray-700)", maxWidth: 420 }}>
          Te abrimos WhatsApp con tu consulta ya redactada — solo tenés que enviarla para que la recibamos.
        </p>
        <div style={{ display: "flex", gap: "12px" }}>
          <Button onClick={() => window.open(waLink, "_blank")}>Abrir WhatsApp</Button>
          <Button variant="ghost" onClick={() => { setF(EMPTY); setIncompleto(false); setSent(false); }}>Enviar otra consulta</Button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Tabs
        tabs={[{ value: "servicios", label: "Servicios" }, { value: "productos", label: "Productos" }]}
        value={modo}
        onChange={cambiarModo}
      />
      <div style={{ display: "grid", gridTemplateColumns: "var(--cols-2)", gap: "20px" }}>
        <Input label="Nombre/s" placeholder="María" value={f.nombre} onChange={set("nombre")} error={errors.nombre} />
        <Input label="Apellido/s" placeholder="Sosa" value={f.apellido} onChange={set("apellido")} error={errors.apellido} />
        <Input label="Teléfono" placeholder="+54 9 299 4000-0000" type="tel" icon="call" value={f.telefono} onChange={set("telefono")} error={errors.telefono} />
        <Input label="Correo electrónico" placeholder="nombre@campo.com" type="email" icon="mail" value={f.email} onChange={set("email")} error={errors.email} />
        <div style={{ minWidth: 0 }}>
          <Select label="Ciudad" options={CIUDADES} value={f.ciudad} onChange={set("ciudad")} />
          {errors.ciudad ? <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "var(--color-error)" }}>{errors.ciudad}</span> : null}
        </div>
        <div style={{ minWidth: 0 }}>
          <Select
            label={modo === "productos" ? "Producto que desea" : "Servicio que desea"}
            options={modo === "productos" ? CONTACT_PRODUCTS : CONTACT_SERVICES}
            value={f.servicio}
            onChange={set("servicio")}
          />
          {errors.servicio ? <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "var(--color-error)" }}>{errors.servicio}</span> : null}
        </div>
      </div>
      <div>
        <Textarea label="Mensaje adicional (opcional)" placeholder={modo === "productos" ? "Contanos más sobre el producto que deseas" : "Contanos más sobre el servicio que deseas"} maxWords={150} value={f.mensaje} onChange={set("mensaje")} />
      </div>
      {incompleto ? (
        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--color-error)" }}>
          <span className="mi" style={{ fontSize: "18px" }}>error_outline</span>
          Faltan completar campos obligatorios.
        </div>
      ) : null}
      <div>
        <Button onClick={submit} arrow={false}>Enviar por WhatsApp</Button>
      </div>
    </div>
  );
}
window.ContactForm = ContactForm;
