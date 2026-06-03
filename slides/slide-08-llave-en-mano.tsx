{/* ============================================================
    SLIDE 08 — LLAVE EN MANO
    /arqentia → diapositiva 8
    ============================================================ */}
{/* Slide 08 */}
        <div className={`slide absolute inset-0 transition-all duration-500 ease-out-custom ${activeSlide === 7 ? 'opacity-100 translate-x-0 pointer-events-auto' : activeSlide > 7 ? 'opacity-0 -translate-x-16 pointer-events-none' : 'opacity-0 translate-x-16 pointer-events-none'}`}>
          <div className="bg absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://vibe.filesafe.space/1777235203059015042/assets/de2f180b-1b35-471e-9a1f-a624be483613.jpg')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#080705]/95 via-[#080705]/60 to-[#080705]/10"></div>
          <div className="grain absolute inset-0 opacity-[0.025] z-[2] pointer-events-none mix-blend-overlay"></div>
          
          <div className="si relative z-10 h-full w-full px-6 md:px-20 flex flex-col justify-end pb-[clamp(40px,6vh,64px)] overflow-y-auto no-scrollbar pt-24 md:pt-0">
            <div className={`a flex gap-2.5 items-center mb-3.5 transition-all duration-700 ease-out-custom delay-100 ${activeSlide === 7 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <div className="inline-block bg-[#C9A96E]/10 border border-[#C9A96E]/20 rounded-full py-1 px-3 text-[9px] font-bold uppercase tracking-[0.18em] text-[#C9A96E]">Comercialización para Constructoras</div>
            </div>
            <h2 className={`hlg a font-serif text-[clamp(34px,4.5vw,68px)] leading-[0.93] tracking-[-0.03em] font-medium max-w-[700px] mb-4 transition-all duration-700 ease-out-custom delay-200 ${activeSlide === 7 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Comercialización<br/><em className="italic text-[#C9A96E] font-serif">Llave en Mano.</em>
            </h2>
            <p className={`bod a text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82] text-[#F7F3ED]/60 max-w-[560px] mb-6 transition-all duration-700 ease-out-custom delay-300 ${activeSlide === 7 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Para constructoras que quieren enfocarse en construir. Arqentia se convierte en su departamento comercial completo — desde la identidad del proyecto hasta el cierre de la última unidad.
            </p>
            
            <div className={`a grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-[clamp(8px,1vw,12px)] max-w-[1100px] transition-all duration-700 ease-out-custom delay-400 ${activeSlide === 7 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-[clamp(12px,1.5vw,16px)] text-center transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                <div className="font-serif text-[22px] text-[#C9A96E]/35 font-semibold mb-1.5">01</div>
                <div className="text-[13px] font-semibold text-[#F7F3ED] mb-1">Identidad</div>
                <div className="text-[12px] text-[#F7F3ED]/60">Nombre y narrativa del proyecto</div>
              </div>
              <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-[clamp(12px,1.5vw,16px)] text-center transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                <div className="font-serif text-[22px] text-[#C9A96E]/35 font-semibold mb-1.5">02</div>
                <div className="text-[13px] font-semibold text-[#F7F3ED] mb-1">Web y Landing</div>
                <div className="text-[12px] text-[#F7F3ED]/60">Plataforma de captación</div>
              </div>
              <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-[clamp(12px,1.5vw,16px)] text-center transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                <div className="font-serif text-[22px] text-[#C9A96E]/35 font-semibold mb-1.5">03</div>
                <div className="text-[13px] font-semibold text-[#F7F3ED] mb-1">Pauta Digital</div>
                <div className="text-[12px] text-[#F7F3ED]/60">Campañas segmentadas</div>
              </div>
              <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-[clamp(12px,1.5vw,16px)] text-center transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                <div className="font-serif text-[22px] text-[#C9A96E]/35 font-semibold mb-1.5">04</div>
                <div className="text-[13px] font-semibold text-[#F7F3ED] mb-1">Gestión de Leads</div>
                <div className="text-[12px] text-[#F7F3ED]/60">Seguimiento y calificación</div>
              </div>
              <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-[clamp(12px,1.5vw,16px)] text-center transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                <div className="font-serif text-[22px] text-[#C9A96E]/35 font-semibold mb-1.5">05</div>
                <div className="text-[13px] font-semibold text-[#F7F3ED] mb-1">Sala de Ventas</div>
                <div className="text-[12px] text-[#F7F3ED]/60">Equipo exclusivo del proyecto</div>
              </div>
              <div className="card bg-[#080705]/80 border border-[#C9A96E]/40 rounded-[15px] backdrop-blur-md p-[clamp(12px,1.5vw,16px)] text-center transition-all hover:-translate-y-1" style={{ background: 'rgba(201,169,110,.08)' }}>
                <div className="font-serif text-[22px] text-[#C9A96E] font-semibold mb-1.5">06</div>
                <div className="text-[13px] font-semibold text-[#C9A96E] mb-1">Reportes</div>
                <div className="text-[12px] text-[#F7F3ED]/60">Métricas y ritmo de ventas</div>
              </div>
            </div>
          </div>
        </div>