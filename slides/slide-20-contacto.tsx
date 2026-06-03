{/* ============================================================
    SLIDE 20 — CONTACTO
    /arqentia → diapositiva 20
    ============================================================ */}
{/* Slide 20 - Contacto */}
        <div className={`slide absolute inset-0 transition-all duration-500 ease-out-custom ${activeSlide === 19 ? 'opacity-100 translate-x-0 pointer-events-auto' : activeSlide > 19 ? 'opacity-0 -translate-x-16 pointer-events-none' : 'opacity-0 translate-x-16 pointer-events-none'}`}>
          <div className="bg absolute inset-0 bg-cover bg-center saturate-50 brightness-50" style={{ backgroundImage: "url('https://vibe.filesafe.space/1777235203059015042/assets/676c3ab7-3fae-43c6-9ca7-2d7f7998d194.jpg')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#080705]/95 via-[#080705]/60 to-[#080705]/10"></div>
          <div className="grain absolute inset-0 opacity-[0.025] z-[2] pointer-events-none mix-blend-overlay"></div>
          
          <div className="si relative z-10 h-full w-full px-6 md:px-20 flex flex-col justify-end pb-[clamp(44px,7vh,80px)] overflow-y-auto no-scrollbar pt-24 md:pt-0">
            <div className={`a flex items-center gap-3 mb-9 transition-all duration-700 ease-out-custom delay-100 ${activeSlide === 19 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <div className="w-[54px] h-[54px] rounded-[14px] bg-black flex items-center justify-center border border-[#C9A96E]/30 cursor-pointer" onClick={() => goTo(0)}>
                <img src="https://cdn.arqentia.group/Marca/NEGRO.png" alt="Logo" className="w-10 h-10 object-contain invert" />
              </div>
              <div>
                <div className="font-serif text-[20px] font-semibold text-[#F7F3ED]">Arqentia Group</div>
                <div className="text-[8px] uppercase tracking-[0.28em] text-[#C9A96E] mt-0.5">Real Estate · Construcción · Consultoría</div>
              </div>
            </div>
            
            <h2 className={`hlg a font-serif text-[clamp(34px,4.5vw,68px)] leading-[0.93] tracking-[-0.03em] font-medium max-w-[780px] mb-5 transition-all duration-700 ease-out-custom delay-200 ${activeSlide === 19 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Hablemos de<br/>su próxima<br/><em className="italic text-[#C9A96E] font-serif">inversión.</em>
            </h2>
            <p className={`bod a text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82] text-[#F7F3ED]/60 max-w-[480px] mb-8 transition-all duration-700 ease-out-custom delay-300 ${activeSlide === 19 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Sin compromiso. Una primera conversación para entender su situación y evaluar cómo Arqentia puede sumarle valor.
            </p>
            
            <div className={`a flex gap-[clamp(8px,1vw,12px)] flex-wrap mb-5 transition-all duration-700 ease-out-custom delay-400 ${activeSlide === 19 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <a href="https://wa.me/593995034606" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#C9A96E] text-[#0B0A08] rounded-full py-[13px] px-[22px] font-sans text-[12.5px] font-bold no-underline transition-transform duration-150 tracking-[0.02em] hover:scale-[1.03]">
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.046 22l4.945-1.363A9.952 9.952 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 01-4.073-1.115l-.291-.174-3.073.848.872-3.01-.19-.313A7.96 7.96 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z"/></svg>
                WhatsApp
              </a>
              <a href="mailto:comercial@arqentia.group" className="inline-flex items-center gap-2 bg-transparent text-[#F7F3ED] border border-[#C9A96E]/30 rounded-full py-[13px] px-[22px] font-sans text-[12.5px] font-semibold no-underline transition-all duration-150 hover:border-[#C9A96E] hover:bg-[#C9A96E]/10">
                comercial@arqentia.group
              </a>
            </div>
            
            <div className={`a flex gap-[clamp(8px,1vw,12px)] flex-wrap transition-all duration-700 ease-out-custom delay-500 ${activeSlide === 19 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md py-2 px-4 flex gap-2 items-center">
                <div className="w-1 h-1 rounded-full bg-[#C9A96E]"></div>
                <div className="text-[12px] text-[#F7F3ED]/60">www.inmo.arqentia.com</div>
              </div>
              <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md py-2 px-4 flex gap-2 items-center">
                <div className="w-1 h-1 rounded-full bg-[#C9A96E]"></div>
                <div className="text-[12px] text-[#F7F3ED]/60">@inmo.arqentia.group</div>
              </div>
              <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md py-2 px-4 flex gap-2 items-center">
                <div className="w-1 h-1 rounded-full bg-[#C9A96E]"></div>
                <div className="text-[12px] text-[#F7F3ED]/60">Quito, Ecuador</div>
              </div>
            </div>
          </div>