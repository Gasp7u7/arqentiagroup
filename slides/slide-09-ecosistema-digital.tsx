{/* ============================================================
    SLIDE 09 — ECOSISTEMA DIGITAL
    /arqentia → diapositiva 9
    ============================================================ */}
{/* Slide 09 */}
        <div className={`slide absolute inset-0 transition-all duration-500 ease-out-custom ${activeSlide === 8 ? 'opacity-100 translate-x-0 pointer-events-auto' : activeSlide > 8 ? 'opacity-0 -translate-x-16 pointer-events-none' : 'opacity-0 translate-x-16 pointer-events-none'}`}>
          <div className="si relative z-10 h-full w-full grid grid-cols-1 md:grid-cols-2">
            <div className="hidden md:block relative h-full">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://vibe.filesafe.space/1777235203059015042/assets/786af3b3-01c0-484b-b263-170cf4f1b011.jpg')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#080705]/95 via-[#080705]/60 to-[#080705]/20"></div>
            </div>
            <div className="col flex flex-col justify-center bg-[#0B0A08] px-[clamp(22px,5vw,80px)] md:pl-[clamp(26px,3.5vw,60px)] relative overflow-y-auto no-scrollbar h-full py-24 md:py-0">
              <div className="orb absolute rounded-full blur-[90px] pointer-events-none animate-o2" style={{ width: '400px', height: '400px', background: 'rgba(201,169,110,.06)', bottom: '-20%', right: '-15%' }}></div>
              <div className="grain absolute inset-0 opacity-[0.025] z-[2] pointer-events-none mix-blend-overlay"></div>
              <div className="relative z-10">
                <div className={`a flex gap-2.5 items-center mb-4 transition-all duration-700 ease-out-custom delay-100 ${activeSlide === 8 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  <div className="inline-block bg-[#C9A96E]/10 border border-[#C9A96E]/20 rounded-full py-1 px-3 text-[9px] font-bold uppercase tracking-[0.18em] text-[#C9A96E]">Eje Comercial · Tecnología</div>
                </div>
                <h2 className={`hlg a font-serif text-[clamp(24px,3vw,44px)] leading-[0.97] tracking-[-0.025em] font-medium mb-3.5 transition-all duration-700 ease-out-custom delay-200 ${activeSlide === 8 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  Demanda calificada,<br/><em className="italic text-[#C9A96E] font-serif">no solo tráfico.</em>
                </h2>
                <p className={`bod a text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82] text-[#F7F3ED]/60 mb-5 transition-all duration-700 ease-out-custom delay-300 ${activeSlide === 8 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  Contamos con infraestructura digital propia que separa el tráfico B2B del B2C, califica automáticamente cada lead y entrega a su equipo solo los contactos con intención y capacidad de compra real.
                </p>
                <div className={`a flex flex-col gap-2.5 transition-all duration-700 ease-out-custom delay-400 ${activeSlide === 8 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-3.5 flex gap-3 items-center transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                    <div className="w-8 h-8 rounded-lg bg-[#C9A96E]/10 flex items-center justify-center text-[#C9A96E] shrink-0">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
                    </div>
                    <div>
                      <div className="text-[12.5px] font-semibold text-[#F7F3ED] mb-0.5">Sitios web y landing pages</div>
                      <div className="text-[clamp(11px,0.9vw,13px)] font-light leading-[1.72] text-[#F7F3ED]/60">Plataformas de alto rendimiento, diseñadas para convertir visitas en contactos.</div>
                    </div>
                  </div>
                  <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-3.5 flex gap-3 items-center transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                    <div className="w-8 h-8 rounded-lg bg-[#C9A96E]/10 flex items-center justify-center text-[#C9A96E] shrink-0">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>
                    </div>
                    <div>
                      <div className="text-[12.5px] font-semibold text-[#F7F3ED] mb-0.5">Pauta digital segmentada</div>
                      <div className="text-[clamp(11px,0.9vw,13px)] font-light leading-[1.72] text-[#F7F3ED]/60">Campañas diferenciadas por perfil de comprador, zona geográfica e intención de compra.</div>
                    </div>
                  </div>
                  <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-3.5 flex gap-3 items-center transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                    <div className="w-8 h-8 rounded-lg bg-[#C9A96E]/10 flex items-center justify-center text-[#C9A96E] shrink-0">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4"/></svg>
                    </div>
                    <div>
                      <div className="text-[12.5px] font-semibold text-[#F7F3ED] mb-0.5">Gestión de leads con CRM</div>
                      <div className="text-[clamp(11px,0.9vw,13px)] font-light leading-[1.72] text-[#F7F3ED]/60">Cada contacto entra a un pipeline con seguimiento automático y métricas en tiempo real.</div>
                    </div>
                  </div>
                  <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-3.5 flex gap-3 items-center transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                    <div className="w-8 h-8 rounded-lg bg-[#C9A96E]/10 flex items-center justify-center text-[#C9A96E] shrink-0">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                    </div>
                    <div>
                      <div className="text-[12.5px] font-semibold text-[#F7F3ED] mb-0.5">Automatizaciones de respuesta</div>
                      <div className="text-[clamp(11px,0.9vw,13px)] font-light leading-[1.72] text-[#F7F3ED]/60">Tiempo de respuesta inferior a 5 minutos. Ningún lead calificado queda sin atención.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>