{/* ============================================================
    SLIDE 03 — NUESTRA PROMESA
    /arqentia → diapositiva 3
    ============================================================ */}
{/* Slide 03 */}
        <div className={`slide absolute inset-0 transition-all duration-500 ease-out-custom ${activeSlide === 2 ? 'opacity-100 translate-x-0 pointer-events-auto' : activeSlide > 2 ? 'opacity-0 -translate-x-16 pointer-events-none' : 'opacity-0 translate-x-16 pointer-events-none'}`}>
          <div className="orb absolute rounded-full blur-[90px] pointer-events-none animate-o1" style={{ width: '800px', height: '800px', background: 'rgba(201,169,110,.07)', top: '-30%', left: '-20%' }}></div>
          <div className="orb absolute rounded-full blur-[90px] pointer-events-none animate-o2" style={{ width: '450px', height: '450px', background: 'rgba(201,169,110,.04)', bottom: '-20%', right: '-10%', animationDelay: '2s' }}></div>
          <div className="grain absolute inset-0 opacity-[0.025] z-[2] pointer-events-none mix-blend-overlay"></div>
          
          <div className="si relative z-10 h-full w-full px-6 md:px-20 flex flex-col justify-center max-w-[1000px] overflow-y-auto no-scrollbar py-24 md:py-0">
            <div className={`lbl a text-[9px] uppercase tracking-[0.26em] text-[#C9A96E] mb-3 transition-all duration-700 ease-out-custom delay-100 ${activeSlide === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>Lo que garantizamos</div>
            <h2 className={`a font-serif text-[clamp(34px,5vw,76px)] leading-[0.95] tracking-[-0.035em] font-light text-[#F7F3ED] mb-6 transition-all duration-700 ease-out-custom delay-200 ${activeSlide === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              "No ejecutamos proyectos.<br/><em className="italic text-[#C9A96E] font-serif">Orquestamos todo<br/>su ciclo de vida."</em>
            </h2>
            <div className={`rule a h-[0.5px] bg-[#C9A96E]/10 w-full max-w-[560px] mb-5 transition-all duration-700 ease-out-custom delay-300 ${activeSlide === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}></div>
            <p className={`bod a text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82] text-[#F7F3ED]/60 max-w-[560px] mb-7 transition-all duration-700 ease-out-custom delay-400 ${activeSlide === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Cada aspecto técnico, legal y comercial de su operación quedará cubierto con precisión, dentro del plazo acordado y orientado al retorno de su inversión. Eso es lo que significa trabajar con Arqentia.
            </p>
            <div className={`a flex gap-[clamp(14px,3vw,36px)] flex-wrap transition-all duration-700 ease-out-custom delay-500 ${activeSlide === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <div className="flex gap-2 items-center"><div className="w-[7px] h-[7px] rounded-full bg-[#C9A96E]"></div><div className="text-[13px] text-[#F7F3ED]/60">Precisión técnica</div></div>
              <div className="flex gap-2 items-center"><div className="w-[7px] h-[7px] rounded-full bg-[#C9A96E]"></div><div className="text-[13px] text-[#F7F3ED]/60">Seguridad jurídica</div></div>
              <div className="flex gap-2 items-center"><div className="w-[7px] h-[7px] rounded-full bg-[#C9A96E]"></div><div className="text-[13px] text-[#F7F3ED]/60">Gestión comercial</div></div>
              <div className="flex gap-2 items-center"><div className="w-[7px] h-[7px] rounded-full bg-[#C9A96E]"></div><div className="text-[13px] text-[#F7F3ED]/60">Retorno garantizado</div></div>
            </div>
          </div>
        </div>