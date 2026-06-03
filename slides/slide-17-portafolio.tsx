{/* ============================================================
    SLIDE 17 — PORTAFOLIO
    /arqentia → diapositiva 17
    ============================================================ */}
{/* Slide 17 - Portafolio */}
        <div className={`slide absolute inset-0 transition-all duration-500 ease-out-custom ${activeSlide === 16 ? 'opacity-100 translate-x-0 pointer-events-auto' : activeSlide > 16 ? 'opacity-0 -translate-x-16 pointer-events-none' : 'opacity-0 translate-x-16 pointer-events-none'}`}>
          <div className="orb absolute rounded-full blur-[90px] pointer-events-none animate-o2" style={{ width: '700px', height: '700px', background: 'rgba(201,169,110,.05)', bottom: '-28%', right: '-18%' }}></div>
          <div className="grain absolute inset-0 opacity-[0.025] z-[2] pointer-events-none mix-blend-overlay"></div>
          
          <div className="si relative z-10 h-full w-full px-6 md:px-20 flex flex-col justify-center overflow-y-auto no-scrollbar py-24 md:py-0">
            <div className={`ep a inline-flex items-center gap-2 bg-[#080705]/75 border border-[#C9A96E]/10 rounded-full py-1.5 px-4 backdrop-blur-md mb-3.5 w-fit transition-all duration-700 ease-out-custom delay-100 ${activeSlide === 16 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] shrink-0"></span>
              <span className="text-[9px] font-bold uppercase tracking-[0.26em] text-[#C9A96E]">Portafolio de propiedades</span>
            </div>
            <h2 className={`hlg a font-serif text-[clamp(34px,4.5vw,68px)] leading-[0.93] tracking-[-0.03em] font-medium mb-2 transition-all duration-700 ease-out-custom delay-200 ${activeSlide === 16 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Operamos en todos los<br/><em className="italic text-[#C9A96E] font-serif">segmentos</em> del mercado.
            </h2>
            <p className={`bod a text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82] text-[#F7F3ED]/60 max-w-[480px] mb-6 transition-all duration-700 ease-out-custom delay-300 ${activeSlide === 16 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Desde el primer departamento de una familia hasta el portafolio de activos de una corporación. Cada tipo de propiedad tiene su lógica — y Arqentia la conoce.
            </p>
            
            <div className={`a flex flex-col gap-2.5 max-w-[820px] transition-all duration-700 ease-out-custom delay-400 ${activeSlide === 16 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-4 flex gap-4 items-center transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                <div className="w-11 h-11 rounded-xl bg-[#C9A96E]/10 border border-[#C9A96E]/20 flex items-center justify-center text-[#C9A96E] shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                </div>
                <div className="flex-1">
                  <div className="font-serif text-[16px] font-semibold text-[#F7F3ED] mb-0.5">Residencial</div>
                  <div className="text-[clamp(11px,0.9vw,13px)] font-light leading-[1.72] text-[#F7F3ED]/60">Apartamentos, casas, conjuntos cerrados y villas. Segmento medio, medio-alto y alto. Quito y sus valles.</div>
                </div>
                <div className="font-serif text-[18px] text-[#C9A96E]/35 font-semibold shrink-0">01</div>
              </div>
              <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-4 flex gap-4 items-center transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                <div className="w-11 h-11 rounded-xl bg-[#C9A96E]/10 border border-[#C9A96E]/20 flex items-center justify-center text-[#C9A96E] shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>
                </div>
                <div className="flex-1">
                  <div className="font-serif text-[16px] font-semibold text-[#F7F3ED] mb-0.5">Comercial</div>
                  <div className="text-[clamp(11px,0.9vw,13px)] font-light leading-[1.72] text-[#F7F3ED]/60">Locales en planta baja, plazas comerciales y espacios en zonas de alto tráfico peatonal y vehicular.</div>
                </div>
                <div className="font-serif text-[18px] text-[#C9A96E]/35 font-semibold shrink-0">02</div>
              </div>
              <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-4 flex gap-4 items-center transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                <div className="w-11 h-11 rounded-xl bg-[#C9A96E]/10 border border-[#C9A96E]/20 flex items-center justify-center text-[#C9A96E] shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
                </div>
                <div className="flex-1">
                  <div className="font-serif text-[16px] font-semibold text-[#F7F3ED] mb-0.5">Oficinas y Corporativo</div>
                  <div className="text-[clamp(11px,0.9vw,13px)] font-light leading-[1.72] text-[#F7F3ED]/60">Oficinas clase A, pisos completos y espacios diseñados para empresas en crecimiento o reubicación.</div>
                </div>
                <div className="font-serif text-[18px] text-[#C9A96E]/35 font-semibold shrink-0">03</div>
              </div>
              <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-4 flex gap-4 items-center transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                <div className="w-11 h-11 rounded-xl bg-[#C9A96E]/10 border border-[#C9A96E]/20 flex items-center justify-center text-[#C9A96E] shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div className="flex-1">
                  <div className="font-serif text-[16px] font-semibold text-[#F7F3ED] mb-0.5">Terrenos y Desarrollo</div>
                  <div className="text-[clamp(11px,0.9vw,13px)] font-light leading-[1.72] text-[#F7F3ED]/60">Lotes en zonas de expansión urbana, suelo para proyectos residenciales y comerciales en Quito y valles.</div>
                </div>
                <div className="font-serif text-[18px] text-[#C9A96E]/35 font-semibold shrink-0">04</div>
              </div>
            </div>
          </div>
        </div>