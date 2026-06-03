{/* ============================================================
    SLIDE 01 — PORTADA
    /arqentia → diapositiva 1
    ============================================================ */}
{/* Slide 01 */}
        <div className={`slide absolute inset-0 transition-all duration-500 ease-out-custom ${activeSlide === 0 ? 'opacity-100 translate-x-0 pointer-events-auto' : activeSlide > 0 ? 'opacity-0 -translate-x-16 pointer-events-none' : 'opacity-0 translate-x-16 pointer-events-none'}`}>
          <div className={`bg absolute inset-0 bg-cover bg-center ${activeSlide === 0 ? 'animate-ken' : ''}`} style={{ backgroundImage: "url('https://vibe.filesafe.space/1777235203059015042/assets/3a9e69a4-1d20-4795-9c6c-5077350889ee.jpg')" }}></div>
          <div className="absolute inset-0 bg-[#080705]/65"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#080705]/95 via-[#080705]/50 to-[#080705]/20"></div>
          <div className="grain absolute inset-0 opacity-[0.025] z-[2] pointer-events-none mix-blend-overlay"></div>
          <div className="orb absolute rounded-full blur-[90px] pointer-events-none animate-o1" style={{ width: '600px', height: '600px', background: 'rgba(201,169,110,.07)', top: '-25%', left: '-15%' }}></div>
          
          <div className="si relative z-10 h-full w-full px-6 md:px-20 flex flex-col justify-end pb-[clamp(44px,7vh,80px)] overflow-y-auto no-scrollbar pt-24 md:pt-0">
            <div className={`a flex items-center gap-3 mb-9 transition-all duration-700 ease-out-custom delay-100 ${activeSlide === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <div className="w-14 h-14 rounded-xl bg-black flex items-center justify-center border border-[#C9A96E]/30 cursor-pointer">
                <img src="https://cdn.arqentia.group/Marca/NEGRO.png" alt="Logo" className="w-[38px] h-[38px] object-contain invert" />
              </div>
              <div>
                <div className="font-serif text-[19px] font-semibold text-[#F7F3ED] tracking-[-0.01em]">Arqentia Group</div>
                <div className="text-[8px] uppercase tracking-[0.28em] text-[#C9A96E] mt-0.5">Real Estate · Construcción · Consultoría</div>
              </div>
            </div>
            
            <div className={`ep a inline-flex items-center gap-2 bg-[#080705]/75 border border-[#C9A96E]/10 rounded-full py-1.5 px-4 backdrop-blur-md mb-4 w-fit transition-all duration-700 ease-out-custom delay-200 ${activeSlide === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] shrink-0"></span>
              <span className="text-[9px] font-bold uppercase tracking-[0.26em] text-[#C9A96E]">Quito, Ecuador · 2026</span>
            </div>
            
            <h1 className={`hxl a font-serif text-[clamp(52px,7vw,102px)] leading-[0.9] tracking-[-0.04em] font-medium max-w-[860px] mb-6 transition-all duration-700 ease-out-custom delay-300 ${activeSlide === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Gestiones inmobiliarias<br/>con <em className="italic text-[#C9A96E] font-serif">criterio, respaldo</em><br/>y resultados.
            </h1>
            
            <p className={`bod a text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82] text-[#F7F3ED]/60 max-w-[500px] mb-10 transition-all duration-700 ease-out-custom delay-400 ${activeSlide === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Centralizamos el rigor técnico, la seguridad jurídica y la potencia comercial en una sola firma. Para que usted se concentre en los resultados, no en la coordinación.
            </p>
            
            <div className={`a flex gap-[clamp(20px,4vw,48px)] items-end flex-wrap transition-all duration-700 ease-out-custom delay-500 ${activeSlide === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <div>
                <div className="font-serif text-[#C9A96E] font-semibold leading-none text-[clamp(40px,5.5vw,68px)]">10+</div>
                <div className="text-[11px] text-[#F7F3ED]/60 mt-1">Años de trayectoria</div>
              </div>
              <div className="w-[0.5px] h-11 bg-[#C9A96E]/10"></div>
              <div>
                <div className="font-serif text-[#C9A96E] font-semibold leading-none text-[clamp(40px,5.5vw,68px)]">3</div>
                <div className="text-[11px] text-[#F7F3ED]/60 mt-1">Ejes de servicio</div>
              </div>
              <div className="w-[0.5px] h-11 bg-[#C9A96E]/10"></div>
              <div>
                <div className="font-serif text-[#C9A96E] font-semibold leading-none text-[clamp(40px,5.5vw,68px)]">360°</div>
                <div className="text-[11px] text-[#F7F3ED]/60 mt-1">Cobertura integral</div>
              </div>
            </div>
          </div>
        </div>