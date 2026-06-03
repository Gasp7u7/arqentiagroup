import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const GOLD = '#C9A96E';
const BG = '#0B0A08';
const CREAM = '#F7F3ED';
const MUTED = 'rgba(247,243,237,0.55)';
const BORDER = 'rgba(201,169,110,0.14)';

const services = [
  {
    num: '01',
    badge: 'Contabilidad de Obra',
    title: 'Control de costos',
    titleEm: 'especializado.',
    desc: 'Control de costos, inventarios y eficiencia tributaria especializada en el sector de construcción. Cada peso trazado desde el inicio hasta el cierre.',
    items: ['Control de costos de obra', 'Gestión de inventarios', 'Eficiencia tributaria', 'Contabilidad inmobiliaria'],
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,
    img: 'https://vibe.filesafe.space/1777235203059015042/assets/e5ab79dd-0987-4b87-bb7b-aba1a0128f64.jpg'
  },
  {
    num: '02',
    badge: 'Gestión de Cobros',
    title: 'Flujo de caja',
    titleEm: 'sin interrupciones.',
    desc: 'Seguimiento de pagos de clientes, gestión de mora y flujo de caja en tiempo real. Coordinación completa de cobranza con respaldo legal.',
    items: ['Seguimiento de pagos', 'Gestión de mora', 'Flujo de caja en tiempo real', 'Cobranza con respaldo legal'],
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>,
    img: 'https://vibe.filesafe.space/1777235203059015042/assets/e5ab79dd-0987-4b87-bb7b-aba1a0128f64.jpg'
  },
  {
    num: '03',
    badge: 'Administración de Edificios',
    title: 'Gestión operativa',
    titleEm: 'sin fricciones.',
    desc: 'Gestión integral de alícuotas, fondos de reserva, mantenimientos preventivos y correctivos, y administración operativa del inmueble.',
    items: ['Gestión de alícuotas', 'Fondos de reserva', 'Mantenimientos', 'Administración operativa'],
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>,
    img: 'https://vibe.filesafe.space/1777235203059015042/assets/c5c90e9a-7cd2-415d-8572-f494d158538f.jpg'
  },
  {
    num: '04',
    badge: 'Cumplimiento Normativo',
    title: 'Protección legal',
    titleEm: 'en cada operación.',
    desc: 'Prevención y cumplimiento legal en operaciones de alto valor. Protección integral para el propietario y el comprador en cada transacción.',
    items: ['Prevención legal', 'Cumplimiento normativo', 'Protección al propietario', 'Auditoría de operaciones'],
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    img: 'https://vibe.filesafe.space/1777235203059015042/assets/e3836596-da26-4c06-b510-0edcab4038d4.jpg'
  },
  {
    num: '05',
    badge: 'Asesoría Bancaria',
    title: 'Financiamiento',
    titleEm: 'estructurado.',
    desc: 'Coordinamos el proceso de financiamiento con entidades bancarias. Asesoría en la estructura óptima de crédito hipotecario para su perfil.',
    items: ['Crédito hipotecario', 'Estructura de financiamiento', 'Negociación bancaria', 'Perfil crediticio'],
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>,
    img: 'https://vibe.filesafe.space/1777235203059015042/assets/e5ab79dd-0987-4b87-bb7b-aba1a0128f64.jpg'
  },
  {
    num: '06',
    badge: 'Declaraciones Tributarias',
    title: 'Obligaciones fiscales',
    titleEm: 'al día.',
    desc: 'Gestión y presentación de declaraciones tributarias del sector inmobiliario. Optimización fiscal dentro del marco legal vigente en Ecuador.',
    items: ['Declaraciones SRI', 'Optimización fiscal', 'Plusvalía e impuestos', 'Asesoría tributaria'],
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    img: 'https://vibe.filesafe.space/1777235203059015042/assets/e3836596-da26-4c06-b510-0edcab4038d4.jpg'
  },
];


const Financiero = () => {
  return (
    <>
      <Navbar />
      <main className="bg-[#0B0A08] text-[#F7F3ED] font-sans overflow-x-hidden">

        {/* ── HERO ── */}
        <section className="relative h-[90dvh] flex items-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('https://vibe.filesafe.space/1777235203059015042/assets/484c52eb-c97e-4784-8c79-45a73ea5165c.png')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0A08] via-[#0B0A08]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A08] via-transparent to-transparent opacity-60" />

          {/* Grain */}
          <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}
          />

          <div className="container relative z-10 px-6 md:px-12 pt-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 border border-[#C9A96E]/30 backdrop-blur-md mb-8">
              <div className="w-2 h-2 rounded-full bg-[#C9A96E] animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A96E]">Eje Financiero y Legal</span>
            </div>

            <h1 className="font-serif text-5xl md:text-8xl leading-[0.9] tracking-tighter mb-8 max-w-4xl">
              Control financiero y <br />
              <em className="text-[#C9A96E] italic">seguridad jurídica.</em>
            </h1>

            <p className="text-lg md:text-xl font-light text-[#F7F3ED]/70 max-w-xl mb-12 leading-relaxed">
              El respaldo económico y legal que hace posible que cada proyecto se ejecute dentro de presupuesto, en regla y con trazabilidad completa.
            </p>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-serif text-[#C9A96E]">100%</div>
                <div className="text-[10px] uppercase tracking-widest text-[#F7F3ED]/50">Trazabilidad<br/>financiera</div>
              </div>
              <div className="w-px h-12 bg-[#C9A96E]/20" />
              <div className="flex items-center gap-4">
                <div className="text-4xl font-serif text-[#C9A96E]">6</div>
                <div className="text-[10px] uppercase tracking-widest text-[#F7F3ED]/50">Servicios<br/>especializados</div>
              </div>
              <div className="w-px h-12 bg-[#C9A96E]/20" />
              <div className="flex items-center gap-4">
                <div className="text-4xl font-serif text-[#C9A96E]">360°</div>
                <div className="text-[10px] uppercase tracking-widest text-[#F7F3ED]/50">Cobertura<br/>legal</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PILARES ── */}
        <section className="py-24 px-6 md:px-12 border-t border-[#C9A96E]/10">
          <div className="container mx-auto">
            <div className="mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C9A96E]/10 border border-[#C9A96E]/20 mb-6">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#C9A96E]">Nuestra promesa</span>
              </div>
              <h2 className="font-serif text-4xl md:text-6xl mb-4">Cada operación, <em className="text-[#C9A96E]">en regla.</em></h2>
              <p className="text-[#F7F3ED]/50 max-w-lg font-light leading-relaxed">Garantizamos viabilidad económica y cumplimiento legal de inicio a cierre.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: '◈', title: 'Precisión', desc: 'Control financiero exacto en cada etapa del proyecto.' },
                { icon: '◇', title: 'Seguridad', desc: 'Marco legal sólido que protege todas las partes.' },
                { icon: '◆', title: 'Trazabilidad', desc: 'Registro completo de cada movimiento financiero.' },
                { icon: '○', title: 'Cumplimiento', desc: 'Normativa fiscal y legal al día en todo momento.', highlight: true },
              ].map((p, i) => (
                <div
                  key={i}
                  className="p-6 md:p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: p.highlight ? 'rgba(201,169,110,0.07)' : 'rgba(14,14,15,0.8)',
                    borderColor: p.highlight ? 'rgba(201,169,110,0.3)' : BORDER,
                  }}
                >
                  <div className="text-2xl mb-4" style={{ color: GOLD }}>{p.icon}</div>
                  <div className="text-sm font-bold mb-2" style={{ color: CREAM }}>{p.title}</div>
                  <p className="text-xs leading-relaxed" style={{ color: MUTED }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES GRID ── */}
        <section className="py-24 px-6 md:px-12 container mx-auto">
          <div className="mb-20">
            <h2 className="font-serif text-4xl md:text-6xl mb-6">Nuestros <em className="text-[#C9A96E]">Servicios</em></h2>
            <p className="text-[#F7F3ED]/60 leading-relaxed font-light max-w-xl">
              El respaldo financiero y legal que necesita cada operación inmobiliaria de alto valor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((s, i) => (
              <div
                key={i}
                className="group relative bg-[#0e0e0f] border border-[#C9A96E]/10 rounded-3xl overflow-hidden hover:border-[#C9A96E]/30 transition-all duration-500"
              >
                <div className="aspect-[16/9] overflow-hidden relative">
                  <img
                    src={s.img}
                    alt={s.badge}
                    className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A08] to-transparent" />
                  <div className="absolute top-6 left-6 px-3 py-1 rounded-full bg-[#C9A96E] text-black text-[9px] font-bold uppercase tracking-widest">
                    {s.badge}
                  </div>
                  <div className="absolute bottom-6 left-8 font-serif text-7xl text-[#C9A96E]/10 group-hover:text-[#C9A96E]/20 transition-colors">
                    {s.num}
                  </div>
                </div>

                <div className="p-8 md:p-10 pt-6">
                  <div className="mb-5 p-3 w-fit rounded-xl bg-[#C9A96E]/10 border border-[#C9A96E]/20">
                    {s.icon}
                  </div>
                  <h3 className="font-serif text-3xl mb-3 group-hover:text-[#C9A96E] transition-colors">
                    {s.title} <em className="text-[#C9A96E]">{s.titleEm}</em>
                  </h3>
                  <p className="text-[#F7F3ED]/50 font-light mb-6 leading-relaxed text-sm">{s.desc}</p>
                  <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-6">
                    {s.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] text-[#F7F3ED]/70 font-medium">
                        <CheckCircle2 className="w-3 h-3 text-[#C9A96E] flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/contacto"
                    className="inline-flex items-center gap-2 text-[#C9A96E] text-xs font-bold uppercase tracking-widest group/link"
                  >
                    Consultar <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="relative overflow-hidden py-32 px-6 text-center border-t border-[#C9A96E]/10">
          <div className="absolute w-[600px] h-[600px] rounded-full bg-[#C9A96E]/5 blur-[100px] -top-1/2 -left-1/4 pointer-events-none" />
          <div className="absolute w-[400px] h-[400px] rounded-full bg-[#C9A96E]/5 blur-[80px] -bottom-1/4 -right-1/4 pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-black/40 border border-[#C9A96E]/20 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#C9A96E]">Contacto directo</span>
            </div>

            <h2 className="font-serif text-4xl md:text-6xl font-normal leading-[1.1] tracking-tight text-[#F7F3ED] mb-8">
              ¿Necesita respaldo<br />
              <em className="text-[#C9A96E] italic">financiero y legal?</em>
            </h2>
            <p className="text-base md:text-lg font-light text-[#F7F3ED]/50 mb-12 max-w-lg mx-auto leading-relaxed">
              Sin compromiso. Una primera conversación para entender su situación y cómo Arqentia puede proteger su operación.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://wa.me/593995034606"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-[#C9A96E] text-[#0B0A08] rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.046 22l4.945-1.363A9.952 9.952 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 01-4.073-1.115l-.291-.174-3.073.848.872-3.01-.19-.313A7.96 7.96 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z"/></svg>
                WhatsApp
              </a>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-3 bg-transparent text-[#F7F3ED] border border-[#C9A96E]/30 rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#C9A96E]/10 transition-colors"
              >
                Formulario
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default Financiero;

