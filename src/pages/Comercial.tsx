import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { ArrowRight, CheckCircle2, Building2, Key, BarChart3, Globe, ShieldCheck } from "lucide-react";

const GOLD = '#C9A96E';
const BG = '#0B0A08';
const CREAM = '#F7F3ED';
const MUTED = 'rgba(247,243,237,0.55)';
const BORDER = 'rgba(201,169,110,0.14)';
const SERIF = "'Cormorant Garamond', Georgia, serif";
const SANS = "'DM Sans', system-ui, sans-serif";

const services = [
  {
    num: '01',
    badge: 'Compra y Venta',
    title: 'Operación completa, de principio a cierre.',
    desc: 'Gestionamos cada etapa de la transacción con un proceso estructurado que protege su inversión y maximiza el resultado.',
    items: ['Valoración profesional', 'Marketing inmobiliario', 'Negociación estratégica', 'Cierre jurídico'],
    icon: <Building2 className="w-6 h-6 text-[#C9A96E]" />,
    img: 'https://vibe.filesafe.space/1777235203059015042/assets/29dbcca7-5ba9-493f-9c64-e4adfc8fc4d4.jpg'
  },
  {
    num: '02',
    badge: 'Arrendamiento',
    title: 'Su propiedad rinde, usted descansa.',
    desc: 'Su propiedad en manos de especialistas. Gestionamos cada aspecto para que usted perciba el beneficio sin estrés.',
    items: ['Selección de inquilinos', 'Contratos legales', 'Control de pagos', 'Gestión de novedades'],
    icon: <Key className="w-6 h-6 text-[#C9A96E]" />,
    img: 'https://vibe.filesafe.space/1777235203059015042/assets/edc4ba10-16a2-4d59-a997-c0a63d7bd7c2.jpg'
  },
  {
    num: '03',
    badge: 'Inversión',
    title: 'Su capital, bien invertido.',
    desc: 'Analizamos su perfil y horizonte de inversión para identificar oportunidades con rentabilidad real y plusvalía comprobada.',
    items: ['Análisis por zona', 'Cálculo de ROI', 'Acompañamiento bancario', 'Selección de activos'],
    icon: <BarChart3 className="w-6 h-6 text-[#C9A96E]" />,
    img: 'https://vibe.filesafe.space/1777235203059015042/assets/1b4647a0-d10b-46cb-b7be-1c16c13d0c3b.jpg'
  },
  {
    num: '04',
    badge: 'Proyectos',
    title: 'Comercialización Llave en Mano.',
    desc: 'Para constructoras que quieren enfocarse en construir. Arqentia se convierte en su departamento comercial completo.',
    items: ['Identidad y narrativa', 'Web y pauta digital', 'Gestión de Leads (CRM)', 'Equipo de ventas'],
    icon: <Globe className="w-6 h-6 text-[#C9A96E]" />,
    img: 'https://vibe.filesafe.space/1777235203059015042/assets/3753ffbe-3203-48b8-b9fe-7dfd9cc05fd6.jpg'
  }
];

const Comercial = () => {
  return (
    <>
      <Navbar />
      <main className="bg-[#0B0A08] text-[#F7F3ED] font-sans overflow-x-hidden">
        
        {/* ── NEW HERO ── */}
        <section className="relative h-[90dvh] flex items-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] hover:scale-105"
            style={{ backgroundImage: `url('https://vibe.filesafe.space/1777235203059015042/assets/b4c423a3-d5be-492b-9f15-b4c1e2d90e39.png')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0A08] via-[#0B0A08]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A08] via-transparent to-transparent opacity-60" />
          
          <div className="container relative z-10 px-6 md:px-12 pt-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 border border-[#C9A96E]/30 backdrop-blur-md mb-8 animate-fade-in">
              <div className="w-2 h-2 rounded-full bg-[#C9A96E] animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A96E]">Eje Comercial</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-8xl leading-[0.9] tracking-tighter mb-8 max-w-4xl">
              El motor de <br />
              <em className="text-[#C9A96E] italic">captación y cierre.</em>
            </h1>
            
            <p className="text-lg md:text-xl font-light text-[#F7F3ED]/70 max-w-xl mb-12 leading-relaxed">
              Centralizamos el rigor técnico, la seguridad jurídica y la potencia comercial en una sola firma. Resultados exponenciales para su propiedad o proyecto.
            </p>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-serif text-[#C9A96E]">10+</div>
                <div className="text-[10px] uppercase tracking-widest text-[#F7F3ED]/50">Años de<br/>trayectoria</div>
              </div>
              <div className="w-px h-12 bg-[#C9A96E]/20" />
              <div className="flex items-center gap-4">
                <div className="text-4xl font-serif text-[#C9A96E]">360°</div>
                <div className="text-[10px] uppercase tracking-widest text-[#F7F3ED]/50">Cobertura<br/>integral</div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-12 right-12 hidden md:flex flex-col items-center gap-4">
            <div className="w-px h-24 bg-gradient-to-b from-transparent to-[#C9A96E]" />
            <span className="text-[8px] uppercase tracking-[0.3em] text-[#C9A96E]/60 vertical-text">Explorar</span>
          </div>
        </section>

        {/* ── DYNAMIC SERVICES GRID ── */}
        <section className="py-24 px-6 md:px-12 container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl md:text-6xl mb-6">Nuestros <em className="text-[#C9A96E]">Servicios</em></h2>
              <p className="text-[#F7F3ED]/60 leading-relaxed font-light">
                Un ecosistema diseñado para maximizar el valor de cada metro cuadrado. Desde la captación digital avanzada hasta el cierre notarial impecable.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="p-4 border border-[#C9A96E]/20 rounded-xl bg-[#C9A96E]/5 backdrop-blur-sm">
                <ShieldCheck className="w-6 h-6 text-[#C9A96E] mb-2" />
                <div className="text-[10px] font-bold uppercase tracking-widest">Seguridad Jurídica</div>
              </div>
            </div>
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
                
                <div className="p-8 md:p-12 pt-4">
                  <div className="mb-6 p-3 w-fit rounded-xl bg-[#C9A96E]/10 border border-[#C9A96E]/20">
                    {s.icon}
                  </div>
                  <h3 className="font-serif text-3xl mb-4 group-hover:text-[#C9A96E] transition-colors">{s.title}</h3>
                  <p className="text-[#F7F3ED]/50 font-light mb-8 leading-relaxed">
                    {s.desc}
                  </p>
                  <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-8">
                    {s.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] text-[#F7F3ED]/70 font-medium">
                        <CheckCircle2 className="w-3 h-3 text-[#C9A96E]" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <Link 
                    to="/contacto" 
                    className="inline-flex items-center gap-2 text-[#C9A96E] text-xs font-bold uppercase tracking-widest group/link"
                  >
                    Saber más <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FINAL CTA (KEPT AS REQUESTED) ── */}
        <section className="relative overflow-hidden py-32 px-6 text-center border-t border-[#C9A96E]/10">
          <div className="absolute w-[600px] h-[600px] rounded-full bg-[#C9A96E]/5 blur-[100px] -top-1/2 -left-1/4 pointer-events-none" />
          <div className="absolute w-[400px] h-[400px] rounded-full bg-[#C9A96E]/5 blur-[80px] -bottom-1/4 -right-1/4 pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-black/40 border border-[#C9A96E]/20 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#C9A96E]">Contacto directo</span>
            </div>

            <h2 className="font-serif text-4xl md:text-6xl font-normal leading-[1.1] tracking-tight text-[#F7F3ED] mb-8">
              ¿Listo para su próxima<br />
              <em className="text-[#C9A96E] italic">operación?</em>
            </h2>
            <p className="text-base md:text-lg font-light text-[#F7F3ED]/50 mb-12 max-w-lg mx-auto leading-relaxed">
              Sin compromiso. Una primera conversación para entender su situación y evaluar cómo Arqentia puede sumarle valor.
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

            <div className="flex flex-wrap gap-8 justify-center mt-20 opacity-40 grayscale group-hover:grayscale-0 transition-all">
              <span className="text-xs tracking-[0.3em] font-bold uppercase">Quito</span>
              <span className="text-xs tracking-[0.3em] font-bold uppercase">Valles</span>
              <span className="text-xs tracking-[0.3em] font-bold uppercase">Ecuador</span>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default Comercial;
