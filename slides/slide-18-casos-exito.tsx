{/* ============================================================
    SLIDE 18 — CASOS EXITO
    /arqentia → diapositiva 18
    ============================================================ */}
{/* Slide 18 - Casos de éxito */}
        <div className={`slide absolute inset-0 transition-all duration-500 ease-out-custom ${activeSlide === 17 ? 'opacity-100 translate-x-0 pointer-events-auto' : activeSlide > 17 ? 'opacity-0 -translate-x-16 pointer-events-none' : 'opacity-0 translate-x-16 pointer-events-none'}`}>
          <div className="bg absolute inset-0 bg-cover bg-center saturate-50 brightness-50" style={{ backgroundImage: "url('https://vibe.filesafe.space/1777235203059015042/assets/786af3b3-01c0-484b-b263-170cf4f1b011.jpg')" }}></div>
          <div className="absolute inset-0 bg-[#080705]/70"></div>
          <div className="grain absolute inset-0 opacity-[0.025] z-[2] pointer-events-none mix-blend-overlay"></div>
          
          <div className="si relative z-10 h-full w-full px-6 md:px-20 flex flex-col justify-center overflow-y-auto no-scrollbar py-24 md:py-0">
            <div className={`ep a inline-flex items-center gap-2 bg-[#080705]/75 border border-[#C9A96E]/10 rounded-full py-1.5 px-4 backdrop-blur-md mb-3.5 w-fit transition-all duration-700 ease-out-custom delay-100 ${activeSlide === 17 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] shrink-0"></span>
              <span className="text-[9px] font-bold uppercase tracking-[0.26em] text-[#C9A96E]">Resultados reales</span>
            </div>
            <h2 className={`hlg a font-serif text-[clamp(34px,4.5vw,68px)] leading-[0.93] tracking-[-0.03em] font-medium mb-6 transition-all duration-700 ease-out-custom delay-200 ${activeSlide === 17 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Proyectos que<br/><em className="italic text-[#C9A96E] font-serif">hablan por sí solos.</em>
            </h2>
            
            <div className={`a grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[clamp(10px,1.3vw,16px)] max-w-[1100px] transition-all duration-700 ease-out-custom delay-300 ${activeSlide === 17 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-[clamp(18px,2.2vw,24px)] border-l-2 border-l-[#C9A96E] transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                <div className="inline-block bg-[#C9A96E]/10 border border-[#C9A96E]/20 rounded-full py-1 px-3 text-[9px] font-bold uppercase tracking-[0.18em] text-[#C9A96E] mb-3">Venta Residencial</div>
                <div className="font-serif text-[16px] leading-[1.1] tracking-[-0.02em] font-medium mb-2 text-[#F7F3ED]">Propiedad estancada · Quito Norte</div>
                <p className="text-[clamp(11px,0.9vw,13px)] font-light leading-[1.72] text-[#F7F3ED]/60 mb-3.5">Vivienda sin movimiento comercial durante 14 meses. Tras revalorización técnica y campaña digital focalizada, la operación se cerró en 47 días a precio superior al solicitado originalmente.</p>
                <div className="h-[0.5px] bg-[#C9A96E]/10 w-full mb-3"></div>
                <div className="flex gap-4">
                  <div>
                    <div className="font-serif text-[#C9A96E] font-semibold leading-none text-[22px]">47</div>
                    <div className="text-[9px] text-[#F7F3ED]/40 uppercase tracking-[0.14em] mt-1">días al cierre</div>
                  </div>
                  <div>
                    <div className="font-serif text-[#C9A96E] font-semibold leading-none text-[22px]">+12%</div>
                    <div className="text-[9px] text-[#F7F3ED]/40 uppercase tracking-[0.14em] mt-1">sobre precio base</div>
                  </div>
                </div>
              </div>
              
              <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-[clamp(18px,2.2vw,24px)] border-l-2 border-l-[#C9A96E] transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                <div className="inline-block bg-[#C9A96E]/10 border border-[#C9A96E]/20 rounded-full py-1 px-3 text-[9px] font-bold uppercase tracking-[0.18em] text-[#C9A96E] mb-3">Arrendamiento Corporativo</div>
                <div className="font-serif text-[16px] leading-[1.1] tracking-[-0.02em] font-medium mb-2 text-[#F7F3ED]">Bodega 800m² · Zona Industrial</div>
                <p className="text-[clamp(11px,0.9vw,13px)] font-light leading-[1.72] text-[#F7F3ED]/60 mb-3.5">Empresa nacional con necesidad urgente de espacio logístico. Identificamos tres opciones calificadas en 10 días y cerramos un contrato de largo plazo con cláusula de expansión futura.</p>
                <div className="h-[0.5px] bg-[#C9A96E]/10 w-full mb-3"></div>
                <div className="flex gap-4">
                  <div>
                    <div className="font-serif text-[#C9A96E] font-semibold leading-none text-[22px]">10</div>
                    <div className="text-[9px] text-[#F7F3ED]/40 uppercase tracking-[0.14em] mt-1">días para opciones</div>
                  </div>
                  <div>
                    <div className="font-serif text-[#C9A96E] font-semibold leading-none text-[22px]">3 años</div>
                    <div className="text-[9px] text-[#F7F3ED]/40 uppercase tracking-[0.14em] mt-1">contrato asegurado</div>
                  </div>
                </div>
              </div>
              
              <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-[clamp(18px,2.2vw,24px)] border-l-2 border-l-[#C9A96E] transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                <div className="inline-block bg-[#C9A96E]/10 border border-[#C9A96E]/20 rounded-full py-1 px-3 text-[9px] font-bold uppercase tracking-[0.18em] text-[#C9A96E] mb-3">Inversión Inmobiliaria</div>
                <div className="font-serif text-[16px] leading-[1.1] tracking-[-0.02em] font-medium mb-2 text-[#F7F3ED]">Portafolio privado · Cumbayá</div>
                <p className="text-[clamp(11px,0.9vw,13px)] font-light leading-[1.72] text-[#F7F3ED]/60 mb-3.5">Inversionista con capital disponible y sin dirección clara. Analizamos seis zonas de Quito y recomendamos un departamento en Cumbayá con rentabilidad de arrendamiento superior al promedio del mercado.</p>
                <div className="h-[0.5px] bg-[#C9A96E]/10 w-full mb-3"></div>
                <div className="flex gap-4">
                  <div>
                    <div className="font-serif text-[#C9A96E] font-semibold leading-none text-[22px]">9.2%</div>
                    <div className="text-[9px] text-[#F7F3ED]/40 uppercase tracking-[0.14em] mt-1">rentabilidad anual</div>
                  </div>
                  <div>
                    <div className="font-serif text-[#C9A96E] font-semibold leading-none text-[22px]">+18%</div>
                    <div className="text-[9px] text-[#F7F3ED]/40 uppercase tracking-[0.14em] mt-1">valorización 2 años</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>