{/* ============================================================
    SLIDE 02 — QUIENES SOMOS
    /arqentia → diapositiva 2
    ============================================================ */}
{/* Slide 02 */}
        <div className={`slide absolute inset-0 transition-all duration-500 ease-out-custom ${activeSlide === 1 ? 'opacity-100 translate-x-0 pointer-events-auto' : activeSlide > 1 ? 'opacity-0 -translate-x-16 pointer-events-none' : 'opacity-0 translate-x-16 pointer-events-none'}`}>
          <div className="si relative z-10 h-full w-full grid grid-cols-1 md:grid-cols-2">
            <div className="col flex flex-col justify-center bg-[#0B0A08] px-[clamp(22px,5vw,80px)] md:pr-[clamp(28px,4vw,64px)] relative overflow-y-auto no-scrollbar h-full py-24 md:py-0">
              <div className="orb absolute rounded-full blur-[90px] pointer-events-none animate-o1" style={{ width: '500px', height: '500px', background: 'rgba(201,169,110,.07)', top: '-20%', left: '-20%' }}></div>
              <div className="grain absolute inset-0 opacity-[0.025] z-[2] pointer-events-none mix-blend-overlay"></div>
              <div className="relative z-10">
                <div className={`ep a inline-flex items-center gap-2 bg-[#080705]/75 border border-[#C9A96E]/10 rounded-full py-1.5 px-4 backdrop-blur-md mb-4 w-fit transition-all duration-700 ease-out-custom delay-100 ${activeSlide === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] shrink-0"></span>
                  <span className="text-[9px] font-bold uppercase tracking-[0.26em] text-[#C9A96E]">Quiénes somos</span>
                </div>
                <h2 className={`hlg a font-serif text-[clamp(34px,4.5vw,68px)] leading-[0.93] tracking-[-0.03em] font-medium mb-5 transition-all duration-700 ease-out-custom delay-200 ${activeSlide === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  Una firma construida<br/>desde <em className="italic text-[#C9A96E] font-serif">adentro</em><br/>del sector.
                </h2>
                <p className={`bod a text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82] text-[#F7F3ED]/60 mb-6 transition-all duration-700 ease-out-custom delay-300 ${activeSlide === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  Arqentia Group nació de profesionales que ya conocían el sector desde sus roles en constructoras, firmas de corretaje y consultoría. No somos intermediarios. Somos ejecutores con criterio propio.
                </p>
                <div className={`a flex flex-col gap-3 transition-all duration-700 ease-out-custom delay-400 ${activeSlide === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  <div className="flex gap-3 items-start">
                    <span className="text-[#C9A96E] text-[13px] mt-0.5 shrink-0">→</span>
                    <div className="text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82]"><span className="font-semibold text-[#F7F3ED]">Trayectoria real en el sector</span><span className="text-[#F7F3ED]/60"> — Más de una década operando en constructoras y firmas inmobiliarias de referencia en Ecuador.</span></div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-[#C9A96E] text-[13px] mt-0.5 shrink-0">→</span>
                    <div className="text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82]"><span className="font-semibold text-[#F7F3ED]">Criterio propio de mercado</span><span className="text-[#F7F3ED]/60"> — Decisiones basadas en datos reales de valorización, demanda y rentabilidad por zona.</span></div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-[#C9A96E] text-[13px] mt-0.5 shrink-0">→</span>
                    <div className="text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82]"><span className="font-semibold text-[#F7F3ED]">Servicio boutique</span><span className="text-[#F7F3ED]/60"> — Cada cliente recibe una propuesta diseñada a medida. Sin soluciones genéricas, sin intermediarios.</span></div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-[#C9A96E] text-[13px] mt-0.5 shrink-0">→</span>
                    <div className="text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82]"><span className="font-semibold text-[#F7F3ED]">Tecnología aplicada</span><span className="text-[#F7F3ED]/60"> — Infraestructura digital propia para captar, calificar y gestionar cada operación con trazabilidad total.</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block relative h-full">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://vibe.filesafe.space/1777235203059015042/assets/f3c1f6c8-2fc5-401a-b544-4001595550c2.jpg')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-l from-[#080705]/95 via-[#080705]/60 to-[#080705]/20"></div>
            </div>
          </div>
        </div>