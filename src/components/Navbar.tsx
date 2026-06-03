import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] max-w-[1100px]">
        <div className="flex items-center justify-between py-3 px-5 md:px-6 bg-[#0e0e0f]/70 backdrop-blur-[20px] saturate-180 rounded-full border border-[#c9a96e]/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
          <Link to="/" className="flex items-center gap-2.5 text-[#f5f2ec] no-underline">
            <span className="w-7 h-7 rounded-full bg-[#c9a96e] flex items-center justify-center shrink-0 overflow-hidden p-1">
              <img src="https://vibe.filesafe.space/1777235203059015042/assets/c357a8d0-5d73-41b0-9574-922c2306528d.png" alt="Arqentia" className="w-full h-full object-contain brightness-0" />
            </span>
            <span className="font-sans text-[0.65rem] font-medium tracking-[0.25em] opacity-90">ARQENTIA</span>
          </Link>
          
          <ul className="hidden md:flex list-none gap-1 m-0 p-0">
            <li>
              <Link to="/comercial" className={`no-underline text-[0.78rem] tracking-[0.06em] py-1.5 px-3.5 rounded-full transition-all duration-[250ms] ease-out-custom ${location.pathname === '/comercial' ? 'text-[#c9a96e] bg-[#c9a96e]/10' : 'text-[#fdfbf7]/65 hover:text-[#f5f2ec] hover:bg-[#c9a96e]/10'}`}>
                Comercial
              </Link>
            </li>
            <li>
              <Link to="/tecnico" className={`no-underline text-[0.78rem] tracking-[0.06em] py-1.5 px-3.5 rounded-full transition-all duration-[250ms] ease-out-custom ${location.pathname === '/tecnico' ? 'text-[#c9a96e] bg-[#c9a96e]/10' : 'text-[#fdfbf7]/65 hover:text-[#f5f2ec] hover:bg-[#c9a96e]/10'}`}>
                Técnico
              </Link>
            </li>
            <li>
              <Link to="/financiero" className={`no-underline text-[0.78rem] tracking-[0.06em] py-1.5 px-3.5 rounded-full transition-all duration-[250ms] ease-out-custom ${location.pathname === '/financiero' ? 'text-[#c9a96e] bg-[#c9a96e]/10' : 'text-[#fdfbf7]/65 hover:text-[#f5f2ec] hover:bg-[#c9a96e]/10'}`}>
                Financiero
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-1.5 md:gap-2">
            <Link to="/contacto" className="flex items-center gap-1.5 py-1.5 px-3 md:py-2 md:px-4 bg-[#c9a96e] text-[#0e0e0f] rounded-full no-underline text-[0.7rem] md:text-[0.78rem] font-medium tracking-[0.05em] transition-all duration-300 ease-out-custom hover:bg-[#e8d5a3] hover:-translate-y-px active:scale-95 active:translate-y-0 group">
              <span>Contactar</span>
              <span className="inline-flex w-[16px] h-[16px] md:w-[18px] md:h-[18px] items-center justify-center bg-[#0e0e0f]/15 rounded-full text-[0.65rem] md:text-[0.7rem] transition-transform duration-300 ease-out-custom group-hover:translate-x-px group-hover:-translate-y-px">↗</span>
            </Link>
            
            <button 
              className="md:hidden text-[#c9a96e] p-1 focus:outline-none" 
              onClick={() => setMobileMenuOpen(true)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <div className={`fixed inset-0 bg-[#0B0A08] z-[2000] flex flex-col transition-transform duration-500 ease-out-custom ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden`}>
        <div className="flex items-center justify-between p-6 border-b border-[#C9A96E]/10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center border border-[#C9A96E]/20">
              <img src="https://cdn.arqentia.group/Marca/NEGRO.png" alt="Logo" className="w-[22px] h-[22px] object-contain invert" />
            </div>
            <div className="font-serif text-[14px] font-semibold text-[#F7F3ED]">Arqentia Group</div>
          </div>
          <button className="text-[#C9A96E] p-2" onClick={() => setMobileMenuOpen(false)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 flex flex-col items-center justify-center gap-8 text-center pb-20">
          <Link to="/" className="text-[#C9A96E] text-[14px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-transform hover:scale-105" onClick={() => setMobileMenuOpen(false)}>
            Inicio
          </Link>
          <Link to="/comercial" className="text-[#C9A96E] text-[14px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-transform hover:scale-105" onClick={() => setMobileMenuOpen(false)}>
            Eje Comercial
          </Link>
          <Link to="/tecnico" className="text-[#C9A96E] text-[14px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-transform hover:scale-105" onClick={() => setMobileMenuOpen(false)}>
            Eje Técnico
          </Link>
          <Link to="/financiero" className="text-[#C9A96E] text-[14px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-transform hover:scale-105" onClick={() => setMobileMenuOpen(false)}>
            Eje Financiero
          </Link>
          <Link to="/contacto" className="text-[#C9A96E] text-[14px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-transform hover:scale-105" onClick={() => setMobileMenuOpen(false)}>
            Contacto
          </Link>
          <Link to="/arqentia" className="text-[#C9A96E] text-[14px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-transform hover:scale-105" onClick={() => setMobileMenuOpen(false)}>
            Arqentia Group
          </Link>
        </div>
      </div>
    </>
  );
};
