import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  FileCheck2,
  FileText,
  Landmark,
  Mail,
  MapPin,
  Menu,
  Phone,
  Scale,
  ShieldCheck,
  X,
} from "lucide-react";
import "./styles.css";

const studio = {
  name: "Studio Legale Ordine Insanguine",
  claim: "Boutique legale per imprese, compliance e contenzioso strategico",
  email: "studiolegaleordineinsanguine@gmail.com",
  pec: "avvocatogiuseppeinsanguine@pec.it",
  mobile: "342 1055152",
  phone: "0885 421025",
  roma: "Roma — Via degli Scialoja 6, 00196",
  puglia: "Cerignola — Viale Paolo Borsellino 58",
};

const nav = [
  ["Home", "home"],
  ["Servizi", "servizi"],
  ["Ufficio legale", "ufficio-legale"],
  ["Settori", "settori"],
  ["Studio", "studio"],
  ["Contatti", "contatti"],
];

const serviceCards = [
  {
    icon: BriefcaseBusiness,
    title: "Ufficio legale esternalizzato",
    text: "Un presidio continuativo per contratti, diffide, pareri, recupero crediti, reclami, fornitori e criticità operative.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance 231 e ODV",
    text: "Modelli organizzativi, aggiornamenti, incarichi ODV, audit interni, formazione, procedure e sistemi di controllo.",
  },
  {
    icon: FileCheck2,
    title: "Privacy, GDPR e DPO",
    text: "Audit privacy, informative, policy, registro trattamenti, DPIA, data breach e supporto al titolare del trattamento.",
  },
  {
    icon: Scale,
    title: "Contenzioso civile d’impresa",
    text: "Gestione strategica di controversie commerciali, responsabilità contrattuale, recupero crediti ed esecuzioni.",
  },
  {
    icon: FileText,
    title: "Whistleblowing",
    text: "Procedure, canali di segnalazione, gestione istruttorie, integrazione con Modello 231 e formazione aziendale.",
  },
  {
    icon: Landmark,
    title: "Contrattualistica e precontenzioso",
    text: "Redazione e revisione di contratti commerciali, accordi di partnership, NDA, transazioni e gestione negoziale.",
  },
];

const sectors = [
  "Logistica e trasporti",
  "Sanità privata",
  "Appalti e costruzioni",
  "Ambiente e rifiuti",
  "Utilities",
  "Multiservizi",
  "Commercio e distribuzione",
  "PMI strutturate",
];

const points = [
  "Canone mensile o incarico specialistico",
  "Interlocuzione diretta con management e funzioni aziendali",
  "Approccio concreto, riservato e business-oriented",
  "Presidio preventivo dei rischi legali e reputazionali",
];

function SectionLabel({ children }) {
  return <p className="section-label">{children}</p>;
}

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="site">
      <header className="header">
        <div className="header-inner">
          <button onClick={() => scrollToId("home")} className="brand">
            <div className="monogram">OI</div>
            <div>
              <p className="brand-main">Ordine Insanguine</p>
              <p className="brand-sub">Studio Legale</p>
            </div>
          </button>

          <nav className="desktop-nav">
            {nav.map(([label, id]) => (
              <button key={id} onClick={() => scrollToId(id)}>{label}</button>
            ))}
            <button onClick={() => scrollToId("contatti")} className="nav-cta">Richiedi consulenza</button>
          </nav>

          <button onClick={() => setMenuOpen(v => !v)} className="menu-btn" aria-label="Menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-nav">
            {nav.map(([label, id]) => (
              <button key={id} onClick={() => { scrollToId(id); setMenuOpen(false); }}>{label}</button>
            ))}
          </div>
        )}
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-bg" />
          <div className="hero-inner">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <SectionLabel>Roma · Puglia · Imprese</SectionLabel>
              <h1>{studio.claim}</h1>
              <p className="hero-text">
                Assistenza giudiziale e stragiudiziale per aziende, enti e gruppi societari. Lo Studio affianca l’impresa nelle decisioni complesse, nella prevenzione dei rischi e nella gestione delle controversie.
              </p>
              <div className="hero-actions">
                <button onClick={() => scrollToId("contatti")} className="primary-btn">Richiedi una consulenza riservata <ArrowRight size={18} /></button>
                <button onClick={() => scrollToId("servizi")} className="secondary-btn">Esplora i servizi</button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
              <div className="hero-card">
                <Building2 className="gold-icon" size={42} />
                <p>Il tuo presidio legale esterno, con metodo, riservatezza e visione d’impresa.</p>
                <div className="hero-list">
                  {["Ufficio legale esternalizzato", "Compliance 231 · ODV", "Privacy · GDPR · DPO", "Contenzioso d’impresa"].map(item => (
                    <div key={item}><span>{item}</span><ArrowRight size={16} /></div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="servizi" className="section">
          <div className="section-heading">
            <SectionLabel>Aree di attività</SectionLabel>
            <h2>Assistenza legale integrata per imprese e organizzazioni.</h2>
          </div>
          <div className="services-grid">
            {serviceCards.map(s => {
              const Icon = s.icon;
              return (
                <article key={s.title} className="service-card">
                  <div className="service-icon"><Icon size={23} /></div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="ufficio-legale" className="dark-section">
          <div className="dark-inner">
            <div>
              <SectionLabel>General Counsel Esterno</SectionLabel>
              <h2>Il tuo ufficio legale, senza i costi di una struttura interna.</h2>
              <p>Un modello flessibile per imprese che necessitano di un presidio legale continuativo, rapido e coordinato con la governance aziendale.</p>
            </div>
            <div className="points">
              {points.map(point => (
                <div key={point} className="point"><CheckCircle2 size={22} /><p>{point}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section id="settori" className="section two-col">
          <div>
            <SectionLabel>Settori</SectionLabel>
            <h2>Focus su settori ad alta complessità operativa.</h2>
            <p>Lo Studio assiste imprese e organizzazioni che operano in contesti regolati, contrattualmente complessi o esposti a rischio contenzioso.</p>
          </div>
          <div className="sector-grid">
            {sectors.map(sector => <div key={sector} className="sector">{sector}</div>)}
          </div>
        </section>

        <section id="studio" className="studio-section">
          <div className="two-col">
            <div>
              <SectionLabel>Lo Studio</SectionLabel>
              <h2>Una boutique legale orientata alle esigenze dell’impresa.</h2>
            </div>
            <div className="studio-text">
              <p>Lo Studio Legale Ordine Insanguine assiste clienti corporate e organizzazioni in ambito civile, commerciale, compliance, privacy e responsabilità amministrativa degli enti.</p>
              <p>L’approccio è riservato, pragmatico e integrato con le esigenze decisionali di imprenditori, amministratori, CFO, HR, procurement e funzioni di controllo.</p>
            </div>
          </div>
        </section>

        <section id="contatti" className="contact-section">
          <div className="two-col">
            <div>
              <SectionLabel>Contatti</SectionLabel>
              <h2>Richiedi una valutazione preliminare.</h2>
              <p>Per esigenze aziendali, incarichi continuativi, contenzioso o compliance, è possibile richiedere un primo inquadramento riservato.</p>
              <div className="contact-list">
                <a href={`mailto:${studio.email}`}><Mail size={20} /> {studio.email}</a>
                <a href={`mailto:${studio.pec}`}><Mail size={20} /> PEC: {studio.pec}</a>
                <a href="tel:+393421055152"><Phone size={20} /> {studio.mobile}</a>
                <a href="tel:+390885421025"><Phone size={20} /> {studio.phone}</a>
                <div><MapPin size={20} /> {studio.roma}</div>
                <div><MapPin size={20} /> {studio.puglia}</div>
              </div>
            </div>

            <div className="contact-card">
              <h3>Invia una richiesta</h3>
              <p>Il pulsante apre una email già precompilata.</p>
              <a
                href={`mailto:${studio.email}?subject=Richiesta%20consulenza%20-%20Studio%20Legale%20Ordine%20Insanguine&body=Buongiorno%20Avv.%20Insanguine,%0A%0Avorrei%20richiedere%20una%20valutazione%20in%20merito%20a:%0A%0ANome:%0AAzienda/Ente:%0ATelefono:%0AEsigenza:%0A`}
                className="primary-btn full"
              >
                Scrivi allo Studio <ArrowRight size={18} />
              </a>
              <a href="tel:+393421055152" className="secondary-btn full">Chiama ora</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <p className="footer-title">{studio.name}</p>
          <p>{studio.claim}</p>
        </div>
        <p>© {year} {studio.name}. Tutti i diritti riservati.</p>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
