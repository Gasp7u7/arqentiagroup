import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex w-full min-h-[100dvh] overflow-x-hidden md:overflow-hidden relative hero-container flex-col md:flex-row">
      {/* Panel 1 */}
      <article 
        className="panel relative min-h-[50dvh] md:min-h-[100dvh] cursor-pointer overflow-hidden outline-none group"
        onClick={() => navigate('/comercial')}
      >
        <div className="panel-bg absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://vibe.filesafe.space/1777235203059015042/assets/915dab28-6f41-4e62-bd57-d47a654e0a9e.jpg')", backgroundPosition: "center 40%" }}></div>
        <div className="panel-overlay absolute inset-0"></div>
        <div className="panel-content relative md:absolute bottom-auto md:bottom-14 left-0 right-0 px-6 md:px-10 flex flex-col gap-3 z-10 opacity-100 visible">
          <div className="font-sans text-[0.65rem] tracking-[0.22em] text-[#c9a96e] uppercase opacity-85">01</div>
          <h2 className="panel-title font-serif font-light leading-none tracking-tight text-[#f5f2ec] flex flex-col whitespace-nowrap overflow-hidden">
            <span className="block">Eje</span>
            <span className="block italic text-[#c9a96e] pl-1">Comercial</span>
          </h2>
          <p className="panel-desc font-sans text-[0.82rem] font-light leading-[1.65] text-[#fdfbf7]/60 max-w-[90%] md:max-w-[28ch] overflow-hidden">
            Estrategias de mercado y expansión de activos. Conectamos oportunidades con inversiones de alto valor.
          </p>
          <span className="panel-cta inline-flex items-center gap-2 font-sans text-[0.75rem] tracking-[0.1em] uppercase text-[#c9a96e] border-b border-[#c9a96e]/35 pb-1 w-fit pointer-events-none select-none group-hover:opacity-100 group-hover:translate-y-0">
            <span>Explorar</span>
            <span className="panel-cta-arrow transition-transform duration-300">→</span>
          </span>
        </div>
        <div className="panel-number absolute top-1/2 right-6 -translate-y-1/2 font-serif text-[clamp(5rem,8vw,9rem)] font-light italic text-[#c9a96e]/10 leading-none pointer-events-none select-none">01</div>
      </article>

      {/* Panel 2 */}
      <article 
        className="panel relative min-h-[50dvh] md:min-h-[100dvh] cursor-pointer overflow-hidden outline-none group"
        onClick={() => navigate('/tecnico')}
      >
        <div className="panel-bg absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://vibe.filesafe.space/1777235203059015042/assets/62429df6-c7f0-4937-9b86-ccda15563433.jpg')", backgroundPosition: "center 50%" }}></div>
        <div className="panel-overlay absolute inset-0"></div>
        <div className="panel-content relative md:absolute bottom-auto md:bottom-14 left-0 right-0 px-6 md:px-10 flex flex-col gap-3 z-10 opacity-100 visible">
          <div className="font-sans text-[0.65rem] tracking-[0.22em] text-[#c9a96e] uppercase opacity-85">02</div>
          <h2 className="panel-title font-serif font-light leading-none tracking-tight text-[#f5f2ec] flex flex-col whitespace-nowrap overflow-hidden">
            <span className="block">Eje</span>
            <span className="block italic text-[#c9a96e] pl-1">Técnico</span>
          </h2>
          <p className="panel-desc font-sans text-[0.82rem] font-light leading-[1.65] text-[#fdfbf7]/60 max-w-[90%] md:max-w-[28ch] overflow-hidden">
            Excelencia en ingeniería y desarrollo constructivo. Soluciones técnicas con precisión de vanguardia.
          </p>
          <span className="panel-cta inline-flex items-center gap-2 font-sans text-[0.75rem] tracking-[0.1em] uppercase text-[#c9a96e] border-b border-[#c9a96e]/35 pb-1 w-fit pointer-events-none select-none group-hover:opacity-100 group-hover:translate-y-0">
            <span>Proyectos</span>
            <span className="panel-cta-arrow transition-transform duration-300">→</span>
          </span>
        </div>
        <div className="panel-number absolute top-1/2 right-6 -translate-y-1/2 font-serif text-[clamp(5rem,8vw,9rem)] font-light italic text-[#c9a96e]/10 leading-none pointer-events-none select-none">02</div>
      </article>

      {/* Panel 3 */}
      <article 
        className="panel relative min-h-[50dvh] md:min-h-[100dvh] cursor-pointer overflow-hidden outline-none group"
        onClick={() => navigate('/financiero')}
      >
        <div className="panel-bg absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://vibe.filesafe.space/1777235203059015042/assets/3e02a985-e23b-4400-9607-68da2cde4fa8.jpg')", backgroundPosition: "center 30%" }}></div>
        <div className="panel-overlay absolute inset-0"></div>
        <div className="panel-content relative md:absolute bottom-auto md:bottom-14 left-0 right-0 px-6 md:px-10 flex flex-col gap-3 z-10 opacity-100 visible">
          <div className="font-sans text-[0.65rem] tracking-[0.22em] text-[#c9a96e] uppercase opacity-85">03</div>
          <h2 className="panel-title font-serif font-light leading-none tracking-tight text-[#f5f2ec] flex flex-col whitespace-nowrap overflow-hidden">
            <span className="block">Eje</span>
            <span className="block italic text-[#c9a96e] pl-1">Financiero</span>
          </h2>
          <p className="panel-desc font-sans text-[0.82rem] font-light leading-[1.65] text-[#fdfbf7]/60 max-w-[90%] md:max-w-[28ch] overflow-hidden">
            Gestión de capital y recuperación estratégica. Optimizamos la salud financiera de su organización.
          </p>
          <span className="panel-cta inline-flex items-center gap-2 font-sans text-[0.75rem] tracking-[0.1em] uppercase text-[#c9a96e] border-b border-[#c9a96e]/35 pb-1 w-fit pointer-events-none select-none group-hover:opacity-100 group-hover:translate-y-0">
            <span>Soluciones</span>
            <span className="panel-cta-arrow transition-transform duration-300">→</span>
          </span>
        </div>
        <div className="panel-number absolute top-1/2 right-6 -translate-y-1/2 font-serif text-[clamp(5rem,8vw,9rem)] font-light italic text-[#c9a96e]/10 leading-none pointer-events-none select-none">03</div>
      </article>
    </div>
  );
};

export default Index;
