{/* ============================================================
    SLIDE 10 — FINANCIERO GENERAL
    /arqentia → diapositiva 10
    ============================================================ */}
{/* Slide 10 */}
        <div className={`slide absolute inset-0 transition-all duration-500 ease-out-custom ${activeSlide === 9 ? 'opacity-100 translate-x-0 pointer-events-auto' : activeSlide > 9 ? 'opacity-0 -translate-x-16 pointer-events-none' : 'opacity-0 translate-x-16 pointer-events-none'}`}>
          <div className="si relative z-10 h-full w-full grid grid-cols-1 md:grid-cols-2">
            <div className="col flex flex-col justify-center bg-[#0B0A08] px-[clamp(22px,5vw,80px)] md:pr-[clamp(26px,3.5vw,60px)] relative overflow-y-auto no-scrollbar h-full py-24 md:py-0">
              <div className="orb absolute rounded-full blur-[90px] pointer-events-none animate-o1" style={{ width: '450px', height: '450px', background: 'rgba(201,169,110,.06)', bottom: '-20%', left: '-15%' }}></div>
              <div className="grain absolute inset-0 opacity-[0.025] z-[2] pointer-events-none mix-blend-overlay"></div>
              <div className="relative z-10">
                <div className={`ep a inline-flex items-center gap-2 bg-[#080705]/75 border border-[#C9A96E]/10 rounded-full py-1.5 px-4 backdrop-blur-md mb-4 w-fit transition-all duration-700 ease-out-custom delay-100 ${activeSlide === 9 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] shrink-0"></span>
                  <span className="text-[9px] font-bold uppercase tracking-[0.26em] text-[#C9A96E]">Eje Financiero y Legal</span>
                </div>
                <h2 className={`hlg a font-serif text-[clamp(34px,4.5vw,68px)] leading-[0.93] tracking-[-0.03em] font-medium mb-3.5 transition-all duration-700 ease-out-custom delay-200 ${activeSlide === 9 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  Control financiero<br/>y <em className="italic text-[#C9A96E] font-serif">seguridad jurídica</em><br/>en cada proyecto.
                </h2>
                <p className={`bod a text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82] text-[#F7F3ED]/60 mb-5 transition-all duration-700 ease-out-custom delay-300 ${activeSlide === 9 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  El respaldo económico y legal que hace posible que cada proyecto se ejecute dentro de presupuesto, en regla y con trazabilidad completa.
                </p>
                <div className={`a grid grid-cols-1 sm:grid-cols-2 gap-[clamp(10px,1.4vw,18px)] transition-all duration-700 ease-out-custom delay-400 ${activeSlide === 9 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-4 transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                    <div className="w-8 h-8 rounded-lg bg-[#C9A96E]/10 flex items-center justify-center text-[#C9A96E] shrink-0 mb-2.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                    </div>
                    <div className="text-[12.5px] font-semibold text-[#F7F3ED] mb-1">Contabilidad de Obra</div>
                    <div className="text-[clamp(11px,0.9vw,13px)] font-light leading-[1.72] text-[#F7F3ED]/60">Control de costos, inventarios y eficiencia tributaria especializada en el sector de construcción.</div>
                  </div>
                  <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-4 transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                    <div className="w-8 h-8 rounded-lg bg-[#C9A96E]/10 flex items-center justify-center text-[#C9A96E] shrink-0 mb-2.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    </div>
                    <div className="text-[12.5px] font-semibold text-[#F7F3ED] mb-1">Gestión de Cobros</div>
                    <div className="text-[clamp(11px,0.9vw,13px)] font-light leading-[1.72] text-[#F7F3ED]/60">Seguimiento de pagos, flujo de caja en tiempo real y gestión de cartera con respaldo legal.</div>
                  </div>
                  <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-4 transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                    <div className="w-8 h-8 rounded-lg bg-[#C9A96E]/10 flex items-center justify-center text-[#C9A96E] shrink-0 mb-2.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
                    </div>
                    <div className="text-[12.5px] font-semibold text-[#F7F3ED] mb-1">Administración de Edificios</div>
                    <div className="text-[clamp(11px,0.9vw,13px)] font-light leading-[1.72] text-[#F7F3ED]/60">Gestión de alícuotas, fondos de reserva, mantenimientos y administración operativa del inmueble.</div>
                  </div>
                  <div className="card bg-[#080705]/80 border border-[#C9A96E]/40 rounded-[15px] backdrop-blur-md p-4 transition-all hover:-translate-y-1" style={{ background: 'rgba(201,169,110,.06)' }}>
                    <div className="w-8 h-8 rounded-lg bg-[#C9A96E]/20 flex items-center justify-center text-[#C9A96E] shrink-0 mb-2.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <div className="text-[12.5px] font-semibold text-[#F7F3ED] mb-1">Cumplimiento Normativo</div>
                    <div className="text-[clamp(11px,0.9vw,13px)] font-light leading-[1.72] text-[#F7F3ED]/60">Prevención y cumplimiento legal en operaciones de alto valor. Protección para el propietario y el comprador.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block relative h-full">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://vibe.filesafe.space/1777235203059015042/assets/7e095d9d-8ce0-4999-bb04-d657c8c303a7.jpg')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-l from-[#080705]/95 via-[#080705]/60 to-[#080705]/20"></div>
            </div>
          </div>
        </div>