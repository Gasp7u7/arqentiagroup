{/* ============================================================
    SLIDE 14 — UAFE
    /arqentia → diapositiva 14
    ============================================================ */}
{/* Slide 14 - UAFE */}
        <div className={`slide absolute inset-0 transition-all duration-500 ease-out-custom ${activeSlide === 13 ? 'opacity-100 translate-x-0 pointer-events-auto' : activeSlide > 13 ? 'opacity-0 -translate-x-16 pointer-events-none' : 'opacity-0 translate-x-16 pointer-events-none'}`}>
          <div className="si relative z-10 h-full w-full grid grid-cols-1 md:grid-cols-2">
            <div className="col flex flex-col justify-center bg-[#0B0A08] px-[clamp(22px,5vw,80px)] md:pr-[clamp(26px,3.5vw,60px)] relative overflow-y-auto no-scrollbar h-full py-24 md:py-0">
              <div className="orb absolute rounded-full blur-[90px] pointer-events-none animate-o1" style={{ width: '420px', height: '420px', background: 'rgba(201,169,110,.07)', top: '-20%', left: '-20%' }}></div>
              <div className="grain absolute inset-0 opacity-[0.025] z-[2] pointer-events-none mix-blend-overlay"></div>
              <div className="relative z-10">
                <div className={`a flex gap-2.5 items-center mb-4 transition-all duration-700 ease-out-custom delay-100 ${activeSlide === 13 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  <div className="inline-block bg-[#C9A96E]/10 border border-[#C9A96E]/20 rounded-full py-1 px-3 text-[9px] font-bold uppercase tracking-[0.18em] text-[#C9A96E]">Eje Financiero</div>
                </div>
                <h2 className={`hlg a font-serif text-[clamp(34px,4.5vw,68px)] leading-[0.93] tracking-[-0.03em] font-medium mb-4 transition-all duration-700 ease-out-custom delay-200 ${activeSlide === 13 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  Cumplimiento<br/><em className="italic text-[#C9A96E] font-serif">UAFE.</em>
                </h2>
                <p className={`bod a text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82] text-[#F7F3ED]/60 mb-5 transition-all duration-700 ease-out-custom delay-300 ${activeSlide === 13 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  Protegemos sus operaciones garantizando el cumplimiento estricto de las normativas de prevención de lavado de activos establecidas por la UAFE.
                </p>
                <div className={`a flex flex-col gap-2 transition-all duration-700 ease-out-custom delay-400 ${activeSlide === 13 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  <div className="flex gap-3 items-start"><div className="w-[5px] h-[5px] rounded-full bg-[#C9A96E] shrink-0 mt-2"></div><div className="text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82]"><span className="font-semibold text-[#F7F3ED]">Oficial de cumplimiento</span></div></div>
                  <div className="flex gap-3 items-start"><div className="w-[5px] h-[5px] rounded-full bg-[#C9A96E] shrink-0 mt-2"></div><div className="text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82]"><span className="font-semibold text-[#F7F3ED]">Manuales internos</span></div></div>
                  <div className="flex gap-3 items-start"><div className="w-[5px] h-[5px] rounded-full bg-[#C9A96E] shrink-0 mt-2"></div><div className="text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82]"><span className="font-semibold text-[#F7F3ED]">Matrices de riesgo</span></div></div>
                  <div className="flex gap-3 items-start"><div className="w-[5px] h-[5px] rounded-full bg-[#C9A96E] shrink-0 mt-2"></div><div className="text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82]"><span className="font-semibold text-[#F7F3ED]">Declaraciones</span></div></div>
                </div>
              </div>
            </div>
            <div className="hidden md:block relative h-full">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://vibe.filesafe.space/1777235203059015042/assets/060be22a-fba6-45ea-b16d-f46d1d285b6c.jpg')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-l from-[#080705]/95 via-[#080705]/60 to-[#080705]/20"></div>
            </div>
          </div>
        </div>