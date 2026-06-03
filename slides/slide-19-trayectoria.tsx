{/* ============================================================
    SLIDE 19 — TRAYECTORIA
    /arqentia → diapositiva 19
    ============================================================ */}
{/* Slide 19 - Trayectoria */}
        <div className={`slide absolute inset-0 transition-all duration-500 ease-out-custom ${activeSlide === 18 ? 'opacity-100 translate-x-0 pointer-events-auto' : activeSlide > 18 ? 'opacity-0 -translate-x-16 pointer-events-none' : 'opacity-0 translate-x-16 pointer-events-none'}`}>
          <div className="orb absolute rounded-full blur-[90px] pointer-events-none animate-o1" style={{ width: '600px', height: '600px', background: 'rgba(201,169,110,.05)', bottom: '-25%', right: '-15%' }}></div>
          <div className="grain absolute inset-0 opacity-[0.025] z-[2] pointer-events-none mix-blend-overlay"></div>
          
          <div className="si relative z-10 h-full w-full px-6 md:px-20 flex flex-col justify-center gap-[clamp(20px,3vh,34px)] overflow-y-auto no-scrollbar py-24 md:py-0">
            <div>
              <div className={`ep a inline-flex items-center gap-2 bg-[#080705]/75 border border-[#C9A96E]/10 rounded-full py-1.5 px-4 backdrop-blur-md mb-3.5 w-fit transition-all duration-700 ease-out-custom delay-100 ${activeSlide === 18 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] shrink-0"></span>
                <span className="text-[9px] font-bold uppercase tracking-[0.26em] text-[#C9A96E]">Trayectoria institucional</span>
              </div>
              <h2 className={`hlg a font-serif text-[clamp(34px,4.5vw,68px)] leading-[0.93] tracking-[-0.03em] font-medium mb-2.5 transition-all duration-700 ease-out-custom delay-200 ${activeSlide === 18 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                Experiencia forjada en las<br/><em className="italic text-[#C9A96E] font-serif">firmas más exigentes</em> del sector.
              </h2>
              <p className={`bod a text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82] text-[#F7F3ED]/60 max-w-[540px] transition-all duration-700 ease-out-custom delay-300 ${activeSlide === 18 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                El equipo de Arqentia ha liderado operaciones e iniciativas dentro de las constructoras y firmas inmobiliarias más reconocidas del Ecuador durante más de una década.
              </p>
            </div>
            
            <div className={`a grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-[clamp(6px,0.8vw,12px)] max-w-[1100px] transition-all duration-700 ease-out-custom delay-400 ${activeSlide === 18 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-[clamp(14px,1.8vw,20px)_clamp(6px,1vw,12px)] text-center transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                <div className="w-8 h-8 rounded-lg bg-[#C9A96E]/10 flex items-center justify-center text-[#C9A96E] shrink-0 mx-auto mb-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
                </div>
                <div className="text-[13px] font-semibold text-[#F7F3ED] mb-1">Const. GLS</div>
                <div className="text-[11px] text-[#F7F3ED]/40">Desarrollo</div>
              </div>
              <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-[clamp(14px,1.8vw,20px)_clamp(6px,1vw,12px)] text-center transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                <div className="w-8 h-8 rounded-lg bg-[#C9A96E]/10 flex items-center justify-center text-[#C9A96E] shrink-0 mx-auto mb-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/></svg>
                </div>
                <div className="text-[13px] font-semibold text-[#F7F3ED] mb-1">RE/MAX</div>
                <div className="text-[11px] text-[#F7F3ED]/40">Corretaje</div>
              </div>
              <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-[clamp(14px,1.8vw,20px)_clamp(6px,1vw,12px)] text-center transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                <div className="w-8 h-8 rounded-lg bg-[#C9A96E]/10 flex items-center justify-center text-[#C9A96E] shrink-0 mx-auto mb-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/></svg>
                </div>
                <div className="text-[13px] font-semibold text-[#F7F3ED] mb-1">Alpha Builders</div>
                <div className="text-[11px] text-[#F7F3ED]/40">Construcción</div>
              </div>
              <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-[clamp(14px,1.8vw,20px)_clamp(6px,1vw,12px)] text-center transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                <div className="w-8 h-8 rounded-lg bg-[#C9A96E]/10 flex items-center justify-center text-[#C9A96E] shrink-0 mx-auto mb-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                </div>
                <div className="text-[13px] font-semibold text-[#F7F3ED] mb-1">Romero<br/>y Pazmiño</div>
                <div className="text-[11px] text-[#F7F3ED]/40">Legal</div>
              </div>
              <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-[clamp(14px,1.8vw,20px)_clamp(6px,1vw,12px)] text-center transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                <div className="w-8 h-8 rounded-lg bg-[#C9A96E]/10 flex items-center justify-center text-[#C9A96E] shrink-0 mx-auto mb-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
                </div>
                <div className="text-[13px] font-semibold text-[#F7F3ED] mb-1">Place and Home</div>
                <div className="text-[11px] text-[#F7F3ED]/40">Residencial</div>
              </div>
              <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-[clamp(14px,1.8vw,20px)_clamp(6px,1vw,12px)] text-center transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                <div className="w-8 h-8 rounded-lg bg-[#C9A96E]/10 flex items-center justify-center text-[#C9A96E] shrink-0 mx-auto mb-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/></svg>
                </div>
                <div className="text-[13px] font-semibold text-[#F7F3ED] mb-1">Const. SMC</div>
                <div className="text-[11px] text-[#F7F3ED]/40">Construcción</div>
              </div>
              <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-[clamp(14px,1.8vw,20px)_clamp(6px,1vw,12px)] text-center transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                <div className="w-8 h-8 rounded-lg bg-[#C9A96E]/10 flex items-center justify-center text-[#C9A96E] shrink-0 mx-auto mb-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
                <div className="text-[13px] font-semibold text-[#F7F3ED] mb-1">Jade</div>
                <div className="text-[11px] text-[#F7F3ED]/40">Premium</div>
              </div>
            </div>
            
            <div className={`a w-full overflow-hidden transition-all duration-700 ease-out-custom delay-500 ${activeSlide === 18 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <div className="flex w-max animate-mq hover:[animation-play-state:paused]">
                {/* Double the content for seamless loop */}
                {[...Array(2)].map((_, i) => (
                  <React.Fragment key={i}>
                    <div className="flex items-center gap-3.5 px-6 whitespace-nowrap font-serif text-[17px] text-[#F7F3ED]/60"><span>Compra y Venta</span><span className="text-[#C9A96E] text-[18px]">·</span></div>
                    <div className="flex items-center gap-3.5 px-6 whitespace-nowrap font-serif text-[17px] text-[#F7F3ED]/60"><span>Arrendamiento</span><span className="text-[#C9A96E] text-[18px]">·</span></div>
                    <div className="flex items-center gap-3.5 px-6 whitespace-nowrap font-serif text-[17px] text-[#F7F3ED]/60"><span>Inversión Inmobiliaria</span><span className="text-[#C9A96E] text-[18px]">·</span></div>
                    <div className="flex items-center gap-3.5 px-6 whitespace-nowrap font-serif text-[17px] text-[#F7F3ED]/60"><span>Construcción</span><span className="text-[#C9A96E] text-[18px]">·</span></div>
                    <div className="flex items-center gap-3.5 px-6 whitespace-nowrap font-serif text-[17px] text-[#F7F3ED]/60"><span>Fiscalización</span><span className="text-[#C9A96E] text-[18px]">·</span></div>
                    <div className="flex items-center gap-3.5 px-6 whitespace-nowrap font-serif text-[17px] text-[#F7F3ED]/60"><span>Consultoría B2B</span><span className="text-[#C9A96E] text-[18px]">·</span></div>
                    <div className="flex items-center gap-3.5 px-6 whitespace-nowrap font-serif text-[17px] text-[#F7F3ED]/60"><span>Gestión Financiera</span><span className="text-[#C9A96E] text-[18px]">·</span></div>
                    <div className="flex items-center gap-3.5 px-6 whitespace-nowrap font-serif text-[17px] text-[#F7F3ED]/60"><span>Quito & Valles</span><span className="text-[#C9A96E] text-[18px]">·</span></div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>