{/* ============================================================
    SLIDE 04 — LOS 3 EJES
    /arqentia → diapositiva 4
    ============================================================ */}
{/* Slide 04 */}
        <div className={`slide absolute inset-0 transition-all duration-500 ease-out-custom ${activeSlide === 3 ? 'opacity-100 translate-x-0 pointer-events-auto' : activeSlide > 3 ? 'opacity-0 -translate-x-16 pointer-events-none' : 'opacity-0 translate-x-16 pointer-events-none'}`}>
          <div className="bg absolute inset-0 bg-cover bg-center saturate-50 brightness-50" style={{ backgroundImage: "url('https://vibe.filesafe.space/1777235203059015042/assets/786af3b3-01c0-484b-b263-170cf4f1b011.jpg')" }}></div>
          <div className="absolute inset-0 bg-[#080705]/70"></div>
          <div className="grain absolute inset-0 opacity-[0.025] z-[2] pointer-events-none mix-blend-overlay"></div>
          
          <div className="si relative z-10 h-full w-full px-6 md:px-20 flex flex-col justify-center overflow-y-auto no-scrollbar py-24 md:py-0">
            <div className={`ep a inline-flex items-center gap-2 bg-[#080705]/75 border border-[#C9A96E]/10 rounded-full py-1.5 px-4 backdrop-blur-md mb-3 w-fit transition-all duration-700 ease-out-custom delay-100 ${activeSlide === 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] shrink-0"></span>
              <span className="text-[9px] font-bold uppercase tracking-[0.26em] text-[#C9A96E]">Estructura de servicios</span>
            </div>
            <h2 className={`hlg a font-serif text-[clamp(34px,4.5vw,68px)] leading-[0.93] tracking-[-0.03em] font-medium mb-2 transition-all duration-700 ease-out-custom delay-200 ${activeSlide === 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Tres ejes. <em className="italic text-[#C9A96E] font-serif">Una sola firma.</em>
            </h2>
            <p className={`bod a text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82] text-[#F7F3ED]/60 max-w-[460px] mb-6 transition-all duration-700 ease-out-custom delay-300 ${activeSlide === 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Comercial, Financiero y Técnico actúan de manera coordinada. El cliente no gestiona proveedores — gestiona resultados.
            </p>
            
            <div className={`a grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[clamp(10px,1.2vw,16px)] max-w-[1100px] transition-all duration-700 ease-out-custom delay-400 ${activeSlide === 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <div className="card bg-[#080705]/80 border border-[#C9A96E]/20 rounded-[15px] backdrop-blur-md p-[clamp(20px,2.5vw,28px)] relative overflow-hidden transition-all hover:-translate-y-1 hover:border-[#C9A96E]/40" style={{ background: 'rgba(201,169,110,.07)' }}>
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C9A96E] to-transparent"></div>
                <div className="flex justify-between items-start mb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#C9A96E]/20 flex items-center justify-center text-[#C9A96E] shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                  </div>
                  <div className="inline-block bg-[#C9A96E]/10 border border-[#C9A96E]/20 rounded-full py-1 px-3 text-[9px] font-bold uppercase tracking-[0.18em] text-[#C9A96E]">Prioritario</div>
                </div>
                <div className="font-serif text-[clamp(19px,2vw,28px)] leading-[1.1] tracking-[-0.02em] font-medium mb-2">Eje Comercial</div>
                <p className="text-[clamp(11px,0.9vw,13px)] font-light leading-[1.72] text-[#F7F3ED]/60 mb-3">El motor de captación y cierre. Gestiona propiedades, genera demanda calificada y convierte oportunidades en operaciones concretas.</p>
                <div className="flex flex-col gap-1.5">
                  <div className="text-[11.5px] text-[#F7F3ED]/60 flex gap-2"><span className="text-[#C9A96E]">→</span>Compra, venta y arrendamiento</div>
                  <div className="text-[11.5px] text-[#F7F3ED]/60 flex gap-2"><span className="text-[#C9A96E]">→</span>Captación digital y comercialización</div>
                  <div className="text-[11.5px] text-[#F7F3ED]/60 flex gap-2"><span className="text-[#C9A96E]">→</span>Asesoría a inversionistas</div>
                </div>
              </div>
              
              <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-[clamp(18px,2vw,24px)] transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                <div className="w-9 h-9 rounded-lg bg-[#C9A96E]/10 flex items-center justify-center text-[#C9A96E] shrink-0 mb-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
                </div>
                <div className="font-serif text-[clamp(17px,2vw,27px)] leading-[1.1] tracking-[-0.02em] font-medium mb-2">Eje Financiero</div>
                <p className="text-[clamp(11px,0.9vw,13px)] font-light leading-[1.72] text-[#F7F3ED]/60 mb-3">Garantiza la viabilidad económica y el cumplimiento legal de cada operación. Control financiero de inicio a cierre.</p>
                <div className="flex flex-col gap-1.5">
                  <div className="text-[11.5px] text-[#F7F3ED]/60 flex gap-2"><span className="text-[#C9A96E]">→</span>Contabilidad especializada</div>
                  <div className="text-[11.5px] text-[#F7F3ED]/60 flex gap-2"><span className="text-[#C9A96E]">→</span>Gestión de cobranzas</div>
                  <div className="text-[11.5px] text-[#F7F3ED]/60 flex gap-2"><span className="text-[#C9A96E]">→</span>Cumplimiento normativo</div>
                </div>
              </div>
              
              <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-[clamp(18px,2vw,24px)] transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                <div className="w-9 h-9 rounded-lg bg-[#C9A96E]/10 flex items-center justify-center text-[#C9A96E] shrink-0 mb-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/></svg>
                </div>
                <div className="font-serif text-[clamp(17px,2vw,27px)] leading-[1.1] tracking-[-0.02em] font-medium mb-2">Eje Técnico</div>
                <p className="text-[clamp(11px,0.9vw,13px)] font-light leading-[1.72] text-[#F7F3ED]/60 mb-3">El brazo ejecutor. Diseño, fiscalización y entrega de proyectos con excelencia constructiva y cumplimiento normativo.</p>
                <div className="flex flex-col gap-1.5">
                  <div className="text-[11.5px] text-[#F7F3ED]/60 flex gap-2"><span className="text-[#C9A96E]">→</span>Diseño y arquitectura</div>
                  <div className="text-[11.5px] text-[#F7F3ED]/60 flex gap-2"><span className="text-[#C9A96E]">→</span>Fiscalización de obra</div>
                  <div className="text-[11.5px] text-[#F7F3ED]/60 flex gap-2"><span className="text-[#C9A96E]">→</span>Visualización y renders</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Remaining slides would follow the exact same pattern... */}
        {/* I will implement slides 05-08 next to keep the file manageable and ensure logic is sound */}
        {/* We can add a simple "More slides in progress" or just implement them all */}