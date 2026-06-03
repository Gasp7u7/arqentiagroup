{/* ============================================================
    SLIDE 07 — INVERSION
    /arqentia → diapositiva 7
    ============================================================ */}
{/* Slide 07 */}
        <div className={`slide absolute inset-0 transition-all duration-500 ease-out-custom ${activeSlide === 6 ? 'opacity-100 translate-x-0 pointer-events-auto' : activeSlide > 6 ? 'opacity-0 -translate-x-16 pointer-events-none' : 'opacity-0 translate-x-16 pointer-events-none'}`}>
          <div className="bg absolute inset-0 bg-cover bg-center saturate-50" style={{ backgroundImage: "url('https://vibe.filesafe.space/1777235203059015042/assets/0d70d966-585a-400d-8040-fdbed5505255.jpg')" }}></div>
          <div className="absolute inset-0 bg-[#080705]/70"></div>
          <div className="grain absolute inset-0 opacity-[0.025] z-[2] pointer-events-none mix-blend-overlay"></div>
          
          <div className="si relative z-10 h-full w-full px-6 md:px-20 flex flex-col justify-center items-center text-center max-w-[1000px] mx-auto overflow-y-auto no-scrollbar py-24 md:py-0">
            <div className={`ep a inline-flex items-center gap-2 bg-[#080705]/75 border border-[#C9A96E]/10 rounded-full py-1.5 px-4 backdrop-blur-md mb-4 w-fit transition-all duration-700 ease-out-custom delay-100 ${activeSlide === 6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] shrink-0"></span>
              <span className="text-[9px] font-bold uppercase tracking-[0.26em] text-[#C9A96E]">Asesoría de Inversión</span>
            </div>
            <h2 className={`hlg a font-serif text-[clamp(34px,4.5vw,68px)] leading-[0.93] tracking-[-0.03em] font-medium mb-4 transition-all duration-700 ease-out-custom delay-200 ${activeSlide === 6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Su capital, <em className="italic text-[#C9A96E] font-serif">bien invertido.</em>
            </h2>
            <p className={`bod a text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82] text-[#F7F3ED]/60 max-w-[540px] mb-7 mx-auto transition-all duration-700 ease-out-custom delay-300 ${activeSlide === 6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Analizamos su perfil, presupuesto y horizonte de inversión para identificar oportunidades inmobiliarias con rentabilidad real y valorización comprobada en el mercado quiteño.
            </p>
            
            <div className={`a grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[clamp(10px,1.3vw,16px)] w-full max-w-[860px] text-left transition-all duration-700 ease-out-custom delay-400 ${activeSlide === 6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-6 border-t-2 border-t-[#C9A96E] transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                <div className="w-9 h-9 rounded-lg bg-[#C9A96E]/10 flex items-center justify-center text-[#C9A96E] shrink-0 mb-3.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div className="font-serif text-[clamp(17px,2vw,27px)] leading-[1.1] tracking-[-0.02em] font-medium mb-2">Análisis por zona</div>
                <p className="text-[clamp(11px,0.9vw,13px)] font-light leading-[1.72] text-[#F7F3ED]/60">Evaluamos valorización histórica, proyecciones de plusvalía y rentabilidad por arrendamiento en las principales zonas de Quito y sus valles.</p>
              </div>
              <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-6 border-t-2 border-t-[#C9A96E] transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                <div className="w-9 h-9 rounded-lg bg-[#C9A96E]/10 flex items-center justify-center text-[#C9A96E] shrink-0 mb-3.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                </div>
                <div className="font-serif text-[clamp(17px,2vw,27px)] leading-[1.1] tracking-[-0.02em] font-medium mb-2">Cálculo de ROI</div>
                <p className="text-[clamp(11px,0.9vw,13px)] font-light leading-[1.72] text-[#F7F3ED]/60">Proyección detallada del retorno: rentabilidad bruta y neta por arrendamiento, plusvalía estimada y escenarios de salida de la inversión.</p>
              </div>
              <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-6 border-t-2 border-t-[#C9A96E] transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                <div className="w-9 h-9 rounded-lg bg-[#C9A96E]/10 flex items-center justify-center text-[#C9A96E] shrink-0 mb-3.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <div className="font-serif text-[clamp(17px,2vw,27px)] leading-[1.1] tracking-[-0.02em] font-medium mb-2">Acompañamiento hipotecario</div>
                <p className="text-[clamp(11px,0.9vw,13px)] font-light leading-[1.72] text-[#F7F3ED]/60">Coordinamos el proceso de financiamiento con entidades bancarias. Le asesoramos en la estructura óptima de crédito para su perfil.</p>
              </div>
            </div>
          </div>
        </div>