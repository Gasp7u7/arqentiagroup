{/* ============================================================
    SLIDE 15 — EJE TECNICO
    /arqentia → diapositiva 15
    ============================================================ */}
{/* Slide 15 - Eje Técnico */}
        <div className={`slide absolute inset-0 transition-all duration-500 ease-out-custom ${activeSlide === 14 ? 'opacity-100 translate-x-0 pointer-events-auto' : activeSlide > 14 ? 'opacity-0 -translate-x-16 pointer-events-none' : 'opacity-0 translate-x-16 pointer-events-none'}`}>
          <div className="si relative z-10 h-full w-full grid grid-cols-1 md:grid-cols-2">
            <div className="hidden md:block relative h-full">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://vibe.filesafe.space/1777235203059015042/assets/f3c1f6c8-2fc5-401a-b544-4001595550c2.jpg')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#080705]/95 via-[#080705]/60 to-[#080705]/20"></div>
            </div>
            <div className="col flex flex-col justify-center bg-[#0B0A08] px-[clamp(22px,5vw,80px)] md:pl-[clamp(26px,3.5vw,60px)] relative overflow-y-auto no-scrollbar h-full py-24 md:py-0">
              <div className="orb absolute rounded-full blur-[90px] pointer-events-none animate-o2" style={{ width: '400px', height: '400px', background: 'rgba(201,169,110,.06)', top: '-20%', right: '-15%' }}></div>
              <div className="grain absolute inset-0 opacity-[0.025] z-[2] pointer-events-none mix-blend-overlay"></div>
              <div className="relative z-10">
                <div className={`ep a inline-flex items-center gap-2 bg-[#080705]/75 border border-[#C9A96E]/10 rounded-full py-1.5 px-4 backdrop-blur-md mb-4 w-fit transition-all duration-700 ease-out-custom delay-100 ${activeSlide === 14 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] shrink-0"></span>
                  <span className="text-[9px] font-bold uppercase tracking-[0.26em] text-[#C9A96E]">Eje Técnico</span>
                </div>
                <h2 className={`hlg a font-serif text-[clamp(34px,4.5vw,68px)] leading-[0.93] tracking-[-0.03em] font-medium mb-3.5 transition-all duration-700 ease-out-custom delay-200 ${activeSlide === 14 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  Del plano a la<br/><em className="italic text-[#C9A96E] font-serif">entrega.</em> Con rigor<br/>en cada etapa.
                </h2>
                <p className={`bod a text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82] text-[#F7F3ED]/60 mb-5 transition-all duration-700 ease-out-custom delay-300 ${activeSlide === 14 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  El brazo ejecutor de Arqentia. Garantizamos excelencia constructiva, cumplimiento de plazos y documentación técnica impecable en cada proyecto.
                </p>
                <div className={`a flex flex-col gap-2 transition-all duration-700 ease-out-custom delay-400 ${activeSlide === 14 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  <div className="flex gap-3 items-start"><div className="w-[5px] h-[5px] rounded-full bg-[#C9A96E] shrink-0 mt-2"></div><div className="text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82]"><span className="font-semibold text-[#F7F3ED]">Diseño y arquitectura</span><span className="text-[#F7F3ED]/60"> — Proyectos nuevos y adaptaciones. Gestión de permisos municipales y regulaciones de uso de suelo.</span></div></div>
                  <div className="flex gap-3 items-start"><div className="w-[5px] h-[5px] rounded-full bg-[#C9A96E] shrink-0 mt-2"></div><div className="text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82]"><span className="font-semibold text-[#F7F3ED]">Dirección y fiscalización de obra</span><span className="text-[#F7F3ED]/60"> — Control técnico independiente que valida avance, calidad y cumplimiento normativo en sitio.</span></div></div>
                  <div className="flex gap-3 items-start"><div className="w-[5px] h-[5px] rounded-full bg-[#C9A96E] shrink-0 mt-2"></div><div className="text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82]"><span className="font-semibold text-[#F7F3ED]">Remodelación y reestructuración</span><span className="text-[#F7F3ED]/60"> — Intervenciones en propiedades existentes para optimizar valor, funcionalidad y presentación comercial.</span></div></div>
                  <div className="flex gap-3 items-start"><div className="w-[5px] h-[5px] rounded-full bg-[#C9A96E] shrink-0 mt-2"></div><div className="text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82]"><span className="font-semibold text-[#F7F3ED]">Renders y recorridos virtuales</span><span className="text-[#F7F3ED]/60"> — Material visual de alta fidelidad para presentar y vender proyectos antes de su entrega física.</span></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>