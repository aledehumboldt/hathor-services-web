"use client";

import { useState } from "react";
import {
  Anchor, ArrowRight, Award, BadgeCheck, CheckCircle2, ClipboardCheck,
  Globe2, Instagram, Mail, MapPin, Menu, Package, Phone, Plane,
  Send, ShieldCheck, Ship, Truck, X, BriefcaseBusiness
} from "lucide-react";

const services = [
  { icon: ClipboardCheck, title: "Agenciamiento Aduanal", text: "Representación aduanera profesional para garantizar el cumplimiento normativo de sus operaciones comerciales.", tags: ["Importación", "Exportación"] },
  { icon: ClipboardCheck, title: "Permisología y Trámites", text: "Gestión integral de permisos, licencias y documentación requerida ante los organismos competentes." },
  { icon: Package, title: "Fletes Internacionales", text: "Cotización y coordinación de fletes para el transporte seguro de su mercancía a nivel mundial." },
  { icon: Globe2, title: "Servicio Logístico", text: "Soluciones logísticas multimodales adaptadas a las necesidades específicas de cada operación.", modes: ["Marítimo", "Aéreo", "Terrestre"] },
  { icon: Globe2, title: "Agentes de Carga Internacional", text: "Coordinación experta de carga internacional con una red de agentes alrededor del mundo." },
  { icon: BriefcaseBusiness, title: "Asesorías Profesionales", text: "Consultoría especializada en comercio exterior, normativas aduaneras y optimización logística." }
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  async function submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true); setStatus("");
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const response = await fetch("/api/contact", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "No se pudo enviar el mensaje.");
      setStatus("¡Gracias! Su mensaje fue enviado. Nos comunicaremos con usted pronto.");
      event.currentTarget.reset();
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Ocurrió un error. Intente nuevamente.");
    } finally { setBusy(false); }
  }

  const closeMenu = () => setMenuOpen(false);
  return (
    <>
      <header className="header">
        <a className="brand" href="#inicio" onClick={closeMenu}>
          <div className="brand-mark"><Globe2 size={29}/><span>HS</span></div>
          <div><strong>HATHOR SERVICES, C.A.</strong><small>AGENTES ADUANALES</small></div>
        </a>
        <button className="menu-toggle" aria-label="Abrir menú" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
        <nav className={menuOpen ? "nav open" : "nav"}>
          {[["Inicio","#inicio"],["Nosotros","#nosotros"],["Servicios","#servicios"],["Contacto","#contacto"]].map(([label, href]) =>
            <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-shade"/>
          <div className="hero-content">
            <span className="location-pill"><MapPin size={15}/> LA GUAIRA, VENEZUELA</span>
            <p className="eyebrow">COMERCIO EXTERIOR · LOGÍSTICA INTERNACIONAL</p>
            <h1>Su aliado en <em>comercio exterior</em> y logística internacional</h1>
            <p className="hero-copy">Soluciones integrales en agenciamiento aduanal, fletes internacionales y servicios logísticos con la excelencia que su negocio merece.</p>
            <div className="hero-actions">
              <a className="button whatsapp" href="https://wa.me/584221601859" target="_blank" rel="noreferrer"><Phone size={19}/> WhatsApp</a>
              <a className="button gold" href="tel:+584221601859"><Phone size={19}/> Llamar</a>
            </div>
            <a className="scroll-link" href="#servicios">Descubra nuestros servicios <span>↓</span></a>
          </div>
        </section>

        <section className="transport-strip">
          <div><Ship/><strong>Marítimo</strong><span>Transporte</span></div>
          <div><Plane/><strong>Aéreo</strong><span>Carga</span></div>
          <div><Truck/><strong>Terrestre</strong><span>Logística</span></div>
        </section>

        <section className="about section light" id="nosotros">
          <div className="section-kicker">QUIÉNES SOMOS</div>
          <h2>Su aliado estratégico en <em>soluciones logísticas</em></h2>
          <div className="about-copy">
            <p><strong>Hathor Services, C.A.</strong> es una empresa venezolana con sede en La Guaira, especializada en brindar soluciones integrales en comercio exterior y logística internacional.</p>
            <p>Nuestro equipo de profesionales ofrece un servicio personalizado y eficiente, acompañando a nuestros clientes en cada etapa del proceso aduanero y logístico, garantizando operaciones seguras, transparentes y oportunas.</p>
          </div>
          <div className="values">
            <article><span><ShieldCheck/></span><div><h3>Confianza</h3><p>Compromiso total con la transparencia y seguridad en cada operación.</p></div></article>
            <article><span><Globe2/></span><div><h3>Alcance Global</h3><p>Red de contactos y alianzas internacionales para conectar su negocio al mundo.</p></div></article>
            <article><span><Award/></span><div><h3>Excelencia</h3><p>Profesionalismo y calidad en cada servicio que ofrecemos.</p></div></article>
          </div>
        </section>

        <section className="services section" id="servicios">
          <div className="section-kicker">NUESTROS SERVICIOS</div>
          <h2>Soluciones integrales para su <em>negocio</em></h2>
          <p className="section-intro">Ofrecemos una gama completa de servicios diseñados para optimizar sus operaciones de comercio exterior y logística.</p>
          <div className="service-grid">
            {services.map(({icon: Icon, title, text, tags, modes}) => <article className="service-card" key={title}>
              <div className="service-icon"><Icon/></div><h3>{title}</h3><p>{text}</p>
              {tags && <div className="tags">{tags.map(t=><span key={t}>{t}</span>)}</div>}
              {modes && <div className="modes">{modes.map((m,i)=><span key={m}>{i===0?<Ship/>:i===1?<Plane/>:<Truck/>}{m}</span>)}</div>}
            </article>)}
          </div>
        </section>

        <section className="contact section light" id="contacto">
          <div className="section-kicker">CONTACTO</div>
          <h2>¿Listo para <em>comenzar</em>?</h2>
          <p className="section-intro">Contáctenos y un asesor especializado le atenderá a la brevedad.</p>
          <div className="contact-layout">
            <div className="contact-info">
              <h3>Información de contacto</h3><p>No dude en comunicarse con nosotros. Estaremos encantados de asistirle.</p>
              <a href="mailto:hathorservicesca@gmail.com"><Mail/> <span><small>CORREO ELECTRÓNICO</small>hathorservicesca@gmail.com</span></a>
              <a href="https://instagram.com/hathorservicesca" target="_blank" rel="noreferrer"><Instagram/> <span><small>INSTAGRAM</small>@hathorservicesca</span></a>
              <a href="tel:+584221601859"><Phone/> <span><small>TELÉFONO</small>0422 160 1859</span></a>
              <div className="contact-detail"><BadgeCheck/><span><small>RIF</small>J-50814065-6</span></div>
              <div className="contact-detail"><MapPin/><span><small>DIRECCIÓN</small>La Guaira, Venezuela</span></div>
            </div>
            <form className="contact-form" onSubmit={submitForm}>
              <label>Nombre completo *<input name="name" placeholder="Su nombre" required maxLength={120}/></label>
              <label>Correo electrónico *<input name="email" type="email" placeholder="correo@ejemplo.com" required maxLength={254}/></label>
              <label>Teléfono<input name="phone" type="tel" placeholder="+58 000 0000000" maxLength={40}/></label>
              <label>Mensaje *<textarea name="message" placeholder="¿En qué podemos ayudarle?" required rows={5} maxLength={4000}/></label>
              <button className="button gold submit" disabled={busy}>{busy ? "Enviando..." : <><Send size={18}/> Enviar mensaje</>}</button>
              {status && <p className="form-status" role="status">{status}</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="brand" href="#inicio"><div className="brand-mark"><Globe2 size={29}/><span>HS</span></div><div><strong>HATHOR SERVICES, C.A.</strong><small>AGENTES ADUANALES</small></div></a>
            <p>Su aliado estratégico en comercio exterior y logística internacional desde La Guaira, Venezuela.</p>
            <a href="https://instagram.com/hathorservicesca" target="_blank" rel="noreferrer"><Instagram/> @hathorservicesca</a>
            <a href="mailto:hathorservicesca@gmail.com"><Mail/> hathorservicesca@gmail.com</a>
            <a href="tel:+584221601859"><Phone/> 0422 160 1859</a>
            <p><BadgeCheck/> RIF: J-50814065-6</p>
          </div>
          <div><h4>Enlaces rápidos</h4><a href="#inicio">Inicio</a><a href="#nosotros">Nosotros</a><a href="#servicios">Servicios</a><a href="#contacto">Contacto</a></div>
          <div><h4>Servicios</h4>{services.map(s=><a href="#servicios" key={s.title}><Anchor size={14}/>{s.title}</a>)}</div>
        </div>
        <div className="copyright"><span>© {new Date().getFullYear()} Hathor Services, C.A. Todos los derechos reservados.</span><span>La Guaira, Venezuela</span></div>
      </footer>
    </>
  );
}
