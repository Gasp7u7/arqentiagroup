{/* ============================================================
    SLIDE 16 — CONSTRUCCION
    /arqentia → diapositiva 16
    ============================================================ */}
{/* Slide 16 - Proceso de Obra */}
        <div className={`slide absolute inset-0 transition-all duration-500 ease-out-custom ${activeSlide === 15 ? 'opacity-100 translate-x-0 pointer-events-auto' : activeSlide > 15 ? 'opacity-0 -translate-x-16 pointer-events-none' : 'opacity-0 translate-x-16 pointer-events-none'}`}>
          <div className="bg absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://vibe.filesafe.space/1777235203059015042/assets/4f1b6ca4-0b90-40b0-8380-62cab16f5e4e.jpg')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#080705]/95 via-[#080705]/60 to-[#080705]/10"></div>
          <div className="grain absolute inset-0 opacity-[0.025] z-[2] pointer-events-none mix-blend-overlay"></div>
          
          <div className="si relative z-10 h-full w-full px-6 md:px-20 flex flex-col justify-end pb-[clamp(40px,6vh,64px)] overflow-y-auto no-scrollbar pt-24 md:pt-0">
            <div className={`ep a inline-flex items-center gap-2 bg-[#080705]/75 border border-[#C9A96E]/10 rounded-full py-1.5 px-4 backdrop-blur-md mb-3.5 w-fit transition-all duration-700 ease-out-custom delay-100 ${activeSlide === 15 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] shrink-0"></span>
              <span className="text-[9px] font-bold uppercase tracking-[0.26em] text-[#C9A96E]">Eje Técnico · Proceso de Obra</span>
            </div>
            <h2 className={`hlg a font-serif text-[clamp(34px,4.5vw,68px)] leading-[0.93] tracking-[-0.03em] font-medium max-w-[640px] mb-4 transition-all duration-700 ease-out-custom delay-200 ${activeSlide === 15 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Cada obra bajo<br/><em className="italic text-[#C9A96E] font-serif">control técnico total.</em>
            </h2>
            <p className={`bod a text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82] text-[#F7F3ED]/60 max-w-[480px] mb-5 transition-all duration-700 ease-out-custom delay-300 ${activeSlide === 15 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Un proceso de cuatro fases que garantiza que su inversión se materialice exactamente como fue proyectada.
            </p>
            
            <div className={`a grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[clamp(8px,1vw,14px)] max-w-[1000px] transition-all duration-700 ease-out-custom delay-400 ${activeSlide === 15 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-[clamp(14px,2vw,20px)] transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9A96E] mb-2">01 · Planificación</div>
                <div className="text-[clamp(11px,0.9vw,13px)] font-light leading-[1.72] text-[#F7F3ED]/60">Cronograma técnico detallado, presupuesto validado y definición de proveedores antes del inicio de obra.</div>
              </div>
              <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-[clamp(14px,2vw,20px)] transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9A96E] mb-2">02 · Ejecución</div>
                <div className="text-[clamp(11px,0.9vw,13px)] font-light leading-[1.72] text-[#F7F3ED]/60">Dirección técnica en sitio con reportes semanales de avance, calidad y uso de recursos.</div>
              </div>
              <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-[clamp(14px,2vw,20px)] transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9A96E] mb-2">03 · Fiscalización</div>
                <div className="text-[clamp(11px,0.9vw,13px)] font-light leading-[1.72] text-[#F7F3ED]/60">Auditoría técnica independiente que valida cada etapa constructiva antes de avanzar a la siguiente.</div>
              </div>
              <div className="card bg-[#080705]/80 border border-[#C9A96E]/40 rounded-[15px] backdrop-blur-md p-[clamp(14px,2vw,20px)] transition-all hover:-translate-y-1" style={{ background: 'rgba(201,169,110,.07)' }}>
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9A96E] mb-2">04 · Entrega</div>
                <div className="text-[clamp(11px,0.9vw,13px)] font-light leading-[1.72] text-[#F7F3ED]/60">Inspección final, actas de entrega y transferencia al proceso comercial para inicio de ventas.</div>
              </div>
            </div>
          </div>
        </div>