import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Arqentia = () => {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);
  const [menuVisible, setMenuVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const totalSlides = 20;

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      nextSlide();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      prevSlide();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSlide]);

  const nextSlide = () => {
    if (activeSlide < totalSlides - 1) setActiveSlide(prev => prev + 1);
  };

  const prevSlide = () => {
    if (activeSlide > 0) setActiveSlide(prev => prev - 1);
  };

  const goTo = (index: number) => {
    setActiveSlide(index);
    setMenuVisible(false);
    setMobileMenuOpen(false);
  };

  // Wheel event for scrolling slides
  useEffect(() => {
    let isThrottled = false;
    const handleWheel = (e: WheelEvent) => {
      if (isThrottled) return;
      isThrottled = true;
      setTimeout(() => { isThrottled = false; }, 1000);

      if (e.deltaY > 50) nextSlide();
      else if (e.deltaY < -50) prevSlide();
    };

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [activeSlide]);

  // Touch swipe support
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
    };
    
    const handleTouchEnd = (e: TouchEvent) => {
      if (menuVisible || mobileMenuOpen) return;
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const deltaX = touchStartX.current - touchEndX;
      const deltaY = touchStartY.current - touchEndY;
      
      // Use horizontal swipe for changing slides on mobile
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        if (deltaX > 0) nextSlide();
        else prevSlide();
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [activeSlide, menuVisible, mobileMenuOpen]);

  // Mouse proximity for menu
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY <= 20) {
        setMenuVisible(true);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);


  return (
    <div className="arqentia-presentation bg-[#0B0A08] text-[#F7F3ED] font-sans h-screen w-screen overflow-hidden relative">
      {/* Menu Peek */}
      <div 
        id="menu-peek" 
        className={`hidden md:flex fixed top-0 left-1/2 -translate-x-1/2 z-[999] flex-col items-center pt-2 gap-1 cursor-pointer transition-opacity duration-300 ${menuVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        onMouseEnter={() => setMenuVisible(true)}
        onClick={() => setMenuVisible(true)}
      >
        <div className="flex flex-col gap-1 items-center">
          <div className="w-6 h-[1.5px] rounded-full bg-[#C9A96E] opacity-80"></div>
          <div className="w-4 h-[1.5px] rounded-full bg-[#C9A96E] opacity-40"></div>
        </div>
        <span className="text-[7.5px] uppercase tracking-[0.22em] text-[#C9A96E] opacity-50">Menú</span>
      </div>

      {/* Top Bar */}
      <div 
        id="topbar" 
        className={`fixed top-0 left-0 right-0 z-[1000] h-[54px] bg-[#080705]/90 border-b border-[#C9A96E]/10 backdrop-blur-xl flex items-stretch transition-transform duration-300 ${menuVisible ? 'translate-y-0' : 'translate-y-0 md:-translate-y-full'}`}
        onMouseLeave={() => setMenuVisible(false)}
      >
        <div className="flex items-center gap-2.5 px-4 md:px-5 border-r border-[#C9A96E]/10 cursor-pointer shrink-0" onClick={() => navigate('/')}>
          <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center border border-[#C9A96E]/20">
            <img src="https://cdn.arqentia.group/Marca/NEGRO.png" alt="Logo" className="w-[22px] h-[22px] object-contain invert" />
          </div>
          <div>
            <div className="font-serif text-[14px] font-semibold text-[#F7F3ED]">Arqentia Group</div>
            <div className="text-[7px] uppercase tracking-[0.26em] text-[#C9A96E] mt-px hidden sm:block">Real Estate & Construction</div>
          </div>
        </div>
        
        {/* Hamburger button for mobile */}
        <button 
          className="md:hidden ml-auto mr-4 text-[#C9A96E] p-2" 
          onClick={() => setMobileMenuOpen(true)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
        
        <nav className="hidden md:flex items-stretch flex-1 overflow-x-auto no-scrollbar">
          {/* Group 1 */}
          <div className="tb-group group flex items-center gap-1 px-2 md:px-4 cursor-pointer border-r border-[#C9A96E]/5 text-[#F7F3ED]/60 text-[11px] font-semibold uppercase tracking-[0.16em] whitespace-nowrap hover:text-[#F7F3ED] hover:bg-[#C9A96E]/5 transition-colors relative">
            <div onClick={() => goTo(0)} className="flex items-center gap-2 py-4">
              <span className="opacity-60 text-[9px]">◈</span>
              <span>Inicio</span>
            </div>
            <span className="opacity-40 text-[8px] group-hover:rotate-180 transition-transform py-4 px-2">▾</span>
            <div className="tb-drop absolute top-full left-0 min-w-[190px] bg-[#080705]/95 border border-[#C9A96E]/10 rounded-b-xl opacity-0 -translate-y-1.5 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all z-20 overflow-hidden">
              <div className="flex items-center gap-3 py-2.5 px-4 cursor-pointer border-b border-[#C9A96E]/5 hover:bg-[#C9A96E]/10 transition-colors" onClick={(e) => { e.stopPropagation(); goTo(0); }}>
                <span className="font-serif text-[11px] text-[#C9A96E]/35 min-w-[20px] font-semibold">01</span>
                <span className="text-[12px] text-[#F7F3ED]/60">Portada</span>
              </div>
              <div className="flex items-center gap-3 py-2.5 px-4 cursor-pointer border-b border-[#C9A96E]/5 hover:bg-[#C9A96E]/10 transition-colors" onClick={(e) => { e.stopPropagation(); goTo(1); }}>
                <span className="font-serif text-[11px] text-[#C9A96E]/35 min-w-[20px] font-semibold">02</span>
                <span className="text-[12px] text-[#F7F3ED]/60">Quiénes somos</span>
              </div>
              <div className="flex items-center gap-3 py-2.5 px-4 cursor-pointer border-b border-[#C9A96E]/5 hover:bg-[#C9A96E]/10 transition-colors" onClick={(e) => { e.stopPropagation(); goTo(2); }}>
                <span className="font-serif text-[11px] text-[#C9A96E]/35 min-w-[20px] font-semibold">03</span>
                <span className="text-[12px] text-[#F7F3ED]/60">Nuestra promesa</span>
              </div>
              <div className="flex items-center gap-3 py-2.5 px-4 cursor-pointer hover:bg-[#C9A96E]/10 transition-colors" onClick={(e) => { e.stopPropagation(); goTo(3); }}>
                <span className="font-serif text-[11px] text-[#C9A96E]/35 min-w-[20px] font-semibold">04</span>
                <span className="text-[12px] text-[#F7F3ED]/60">Los 3 Ejes</span>
              </div>
            </div>
          </div>

          {/* Group 2 */}
          <div className="tb-group group flex items-center gap-1 px-2 md:px-4 cursor-pointer border-r border-[#C9A96E]/5 text-[#F7F3ED]/60 text-[11px] font-semibold uppercase tracking-[0.16em] whitespace-nowrap hover:text-[#F7F3ED] hover:bg-[#C9A96E]/5 transition-colors relative">
            <div onClick={() => goTo(4)} className="flex items-center gap-2 py-4">
              <span className="opacity-60 text-[9px]">◆</span>
              <span>Eje Comercial</span>
            </div>
            <span className="opacity-40 text-[8px] group-hover:rotate-180 transition-transform py-4 px-2">▾</span>
            <div className="tb-drop absolute top-full left-0 min-w-[190px] bg-[#080705]/95 border border-[#C9A96E]/10 rounded-b-xl opacity-0 -translate-y-1.5 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all z-20 overflow-hidden">
              <div className="flex items-center gap-3 py-2.5 px-4 cursor-pointer border-b border-[#C9A96E]/5 hover:bg-[#C9A96E]/10 transition-colors" onClick={(e) => { e.stopPropagation(); goTo(4); }}>
                <span className="font-serif text-[11px] text-[#C9A96E]/35 min-w-[20px] font-semibold">05</span>
                <span className="text-[12px] text-[#F7F3ED]/60">Compra y Venta</span>
              </div>
              <div className="flex items-center gap-3 py-2.5 px-4 cursor-pointer border-b border-[#C9A96E]/5 hover:bg-[#C9A96E]/10 transition-colors" onClick={(e) => { e.stopPropagation(); goTo(5); }}>
                <span className="font-serif text-[11px] text-[#C9A96E]/35 min-w-[20px] font-semibold">06</span>
                <span className="text-[12px] text-[#F7F3ED]/60">Arrendamiento</span>
              </div>
              <div className="flex items-center gap-3 py-2.5 px-4 cursor-pointer border-b border-[#C9A96E]/5 hover:bg-[#C9A96E]/10 transition-colors" onClick={(e) => { e.stopPropagation(); goTo(6); }}>
                <span className="font-serif text-[11px] text-[#C9A96E]/35 min-w-[20px] font-semibold">07</span>
                <span className="text-[12px] text-[#F7F3ED]/60">Inversión</span>
              </div>
              <div className="flex items-center gap-3 py-2.5 px-4 cursor-pointer border-b border-[#C9A96E]/5 hover:bg-[#C9A96E]/10 transition-colors" onClick={(e) => { e.stopPropagation(); goTo(7); }}>
                <span className="font-serif text-[11px] text-[#C9A96E]/35 min-w-[20px] font-semibold">08</span>
                <span className="text-[12px] text-[#F7F3ED]/60">Llave en Mano</span>
              </div>
              <div className="flex items-center gap-3 py-2.5 px-4 cursor-pointer hover:bg-[#C9A96E]/10 transition-colors" onClick={(e) => { e.stopPropagation(); goTo(8); }}>
                <span className="font-serif text-[11px] text-[#C9A96E]/35 min-w-[20px] font-semibold">09</span>
                <span className="text-[12px] text-[#F7F3ED]/60">Ecosistema Digital</span>
              </div>
            </div>
          </div>

          {/* Group 3 */}
          <div className="tb-group group flex items-center gap-1 px-2 md:px-4 cursor-pointer border-r border-[#C9A96E]/5 text-[#F7F3ED]/60 text-[11px] font-semibold uppercase tracking-[0.16em] whitespace-nowrap hover:text-[#F7F3ED] hover:bg-[#C9A96E]/5 transition-colors relative">
            <div onClick={() => goTo(9)} className="flex items-center gap-2 py-4">
              <span className="opacity-60 text-[9px]">◇</span>
              <span>Eje Financiero</span>
            </div>
            <span className="opacity-40 text-[8px] group-hover:rotate-180 transition-transform py-4 px-2">▾</span>
            <div className="tb-drop absolute top-full left-0 min-w-[190px] bg-[#080705]/95 border border-[#C9A96E]/10 rounded-b-xl opacity-0 -translate-y-1.5 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all z-20 overflow-hidden">
              <div className="flex items-center gap-3 py-2.5 px-4 cursor-pointer border-b border-[#C9A96E]/5 hover:bg-[#C9A96E]/10 transition-colors" onClick={(e) => { e.stopPropagation(); goTo(9); }}>
                <span className="font-serif text-[11px] text-[#C9A96E]/35 min-w-[20px] font-semibold">10</span>
                <span className="text-[12px] text-[#F7F3ED]/60">General</span>
              </div>
              <div className="flex items-center gap-3 py-2.5 px-4 cursor-pointer border-b border-[#C9A96E]/5 hover:bg-[#C9A96E]/10 transition-colors" onClick={(e) => { e.stopPropagation(); goTo(10); }}>
                <span className="font-serif text-[11px] text-[#C9A96E]/35 min-w-[20px] font-semibold">11</span>
                <span className="text-[12px] text-[#F7F3ED]/60">Contabilidad</span>
              </div>
              <div className="flex items-center gap-3 py-2.5 px-4 cursor-pointer border-b border-[#C9A96E]/5 hover:bg-[#C9A96E]/10 transition-colors" onClick={(e) => { e.stopPropagation(); goTo(11); }}>
                <span className="font-serif text-[11px] text-[#C9A96E]/35 min-w-[20px] font-semibold">12</span>
                <span className="text-[12px] text-[#F7F3ED]/60">Cobranzas</span>
              </div>
              <div className="flex items-center gap-3 py-2.5 px-4 cursor-pointer border-b border-[#C9A96E]/5 hover:bg-[#C9A96E]/10 transition-colors" onClick={(e) => { e.stopPropagation(); goTo(12); }}>
                <span className="font-serif text-[11px] text-[#C9A96E]/35 min-w-[20px] font-semibold">13</span>
                <span className="text-[12px] text-[#F7F3ED]/60">Administración</span>
              </div>
              <div className="flex items-center gap-3 py-2.5 px-4 cursor-pointer hover:bg-[#C9A96E]/10 transition-colors" onClick={(e) => { e.stopPropagation(); goTo(13); }}>
                <span className="font-serif text-[11px] text-[#C9A96E]/35 min-w-[20px] font-semibold">14</span>
                <span className="text-[12px] text-[#F7F3ED]/60">UAFE</span>
              </div>
            </div>
          </div>

          {/* Group 4 */}
          <div className="tb-group group flex items-center gap-1 px-2 md:px-4 cursor-pointer border-r border-[#C9A96E]/5 text-[#F7F3ED]/60 text-[11px] font-semibold uppercase tracking-[0.16em] whitespace-nowrap hover:text-[#F7F3ED] hover:bg-[#C9A96E]/5 transition-colors relative">
            <div onClick={() => goTo(14)} className="flex items-center gap-2 py-4">
              <span className="opacity-60 text-[9px]">△</span>
              <span>Eje Técnico</span>
            </div>
            <span className="opacity-40 text-[8px] group-hover:rotate-180 transition-transform py-4 px-2">▾</span>
            <div className="tb-drop absolute top-full left-0 min-w-[190px] bg-[#080705]/95 border border-[#C9A96E]/10 rounded-b-xl opacity-0 -translate-y-1.5 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all z-20 overflow-hidden">
              <div className="flex items-center gap-3 py-2.5 px-4 cursor-pointer border-b border-[#C9A96E]/5 hover:bg-[#C9A96E]/10 transition-colors" onClick={(e) => { e.stopPropagation(); goTo(14); }}>
                <span className="font-serif text-[11px] text-[#C9A96E]/35 min-w-[20px] font-semibold">15</span>
                <span className="text-[12px] text-[#F7F3ED]/60">Eje Técnico</span>
              </div>
              <div className="flex items-center gap-3 py-2.5 px-4 cursor-pointer hover:bg-[#C9A96E]/10 transition-colors" onClick={(e) => { e.stopPropagation(); goTo(15); }}>
                <span className="font-serif text-[11px] text-[#C9A96E]/35 min-w-[20px] font-semibold">16</span>
                <span className="text-[12px] text-[#F7F3ED]/60">Construcción</span>
              </div>
            </div>
          </div>

          {/* Group 5 */}
          <div className="tb-group group flex items-center gap-1 px-2 md:px-4 cursor-pointer border-r border-[#C9A96E]/5 text-[#F7F3ED]/60 text-[11px] font-semibold uppercase tracking-[0.16em] whitespace-nowrap hover:text-[#F7F3ED] hover:bg-[#C9A96E]/5 transition-colors relative">
            <div onClick={() => goTo(16)} className="flex items-center gap-2 py-4">
              <span className="opacity-60 text-[9px]">○</span>
              <span>Portafolio</span>
            </div>
            <span className="opacity-40 text-[8px] group-hover:rotate-180 transition-transform py-4 px-2">▾</span>
            <div className="tb-drop absolute top-full left-0 min-w-[190px] bg-[#080705]/95 border border-[#C9A96E]/10 rounded-b-xl opacity-0 -translate-y-1.5 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all z-20 overflow-hidden">
              <div className="flex items-center gap-3 py-2.5 px-4 cursor-pointer border-b border-[#C9A96E]/5 hover:bg-[#C9A96E]/10 transition-colors" onClick={(e) => { e.stopPropagation(); goTo(16); }}>
                <span className="font-serif text-[11px] text-[#C9A96E]/35 min-w-[20px] font-semibold">17</span>
                <span className="text-[12px] text-[#F7F3ED]/60">Portafolio</span>
              </div>
              <div className="flex items-center gap-3 py-2.5 px-4 cursor-pointer hover:bg-[#C9A96E]/10 transition-colors" onClick={(e) => { e.stopPropagation(); goTo(17); }}>
                <span className="font-serif text-[11px] text-[#C9A96E]/35 min-w-[20px] font-semibold">18</span>
                <span className="text-[12px] text-[#F7F3ED]/60">Casos de éxito</span>
              </div>
            </div>
          </div>

          {/* Group 6 */}
          <div className="tb-group group flex items-center gap-1 px-2 md:px-4 cursor-pointer border-r border-[#C9A96E]/5 text-[#F7F3ED]/60 text-[11px] font-semibold uppercase tracking-[0.16em] whitespace-nowrap hover:text-[#F7F3ED] hover:bg-[#C9A96E]/5 transition-colors relative">
            <div onClick={() => goTo(18)} className="flex items-center gap-2 py-4">
              <span className="opacity-60 text-[9px]">→</span>
              <span>Trayectoria</span>
            </div>
            <span className="opacity-40 text-[8px] group-hover:rotate-180 transition-transform py-4 px-2">▾</span>
            <div className="tb-drop absolute top-full left-0 min-w-[190px] bg-[#080705]/95 border border-[#C9A96E]/10 rounded-b-xl opacity-0 -translate-y-1.5 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all z-20 overflow-hidden">
              <div className="flex items-center gap-3 py-2.5 px-4 cursor-pointer hover:bg-[#C9A96E]/10 transition-colors" onClick={(e) => { e.stopPropagation(); goTo(18); }}>
                <span className="font-serif text-[11px] text-[#C9A96E]/35 min-w-[20px] font-semibold">19</span>
                <span className="text-[12px] text-[#F7F3ED]/60">Trayectoria</span>
              </div>
            </div>
          </div>

          {/* Group 7 */}
          <div className="tb-group group flex items-center gap-1 px-2 md:px-4 cursor-pointer text-[#F7F3ED]/60 text-[11px] font-semibold uppercase tracking-[0.16em] whitespace-nowrap hover:text-[#F7F3ED] hover:bg-[#C9A96E]/5 transition-colors relative">
            <div onClick={() => goTo(19)} className="flex items-center gap-2 py-4">
              <span className="opacity-60 text-[9px]">◉</span>
              <span>Contacto</span>
            </div>
            <span className="opacity-40 text-[8px] group-hover:rotate-180 transition-transform py-4 px-2">▾</span>
            <div className="tb-drop absolute top-full left-0 min-w-[190px] bg-[#080705]/95 border border-[#C9A96E]/10 rounded-b-xl opacity-0 -translate-y-1.5 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all z-20 overflow-hidden">
              <div className="flex items-center gap-3 py-2.5 px-4 cursor-pointer hover:bg-[#C9A96E]/10 transition-colors" onClick={(e) => { e.stopPropagation(); goTo(19); }}>
                <span className="font-serif text-[11px] text-[#C9A96E]/35 min-w-[20px] font-semibold">20</span>
                <span className="text-[12px] text-[#F7F3ED]/60">Contacto</span>
              </div>
            </div>
          </div>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C9A96E]/10">
          <div 
            className="h-full bg-gradient-to-r from-[#C9A96E] to-[#C9A96E]/40 transition-all duration-500 ease-out-custom"
            style={{ width: `${((activeSlide + 1) / totalSlides) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div className={`fixed inset-0 bg-[#0B0A08] z-[2000] flex flex-col transition-transform duration-500 ease-out-custom ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden`}>
        <div className="flex items-center justify-between p-4 border-b border-[#C9A96E]/10">
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => navigate('/')}>
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
          <div className="text-[#C9A96E] text-[14px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 cursor-pointer transition-transform hover:scale-105" onClick={() => goTo(0)}>
            <span className="text-[16px] opacity-80">◈</span> Inicio
          </div>
          <div className="text-[#C9A96E] text-[14px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 cursor-pointer transition-transform hover:scale-105" onClick={() => goTo(4)}>
            <span className="text-[16px] opacity-80">◆</span> Eje Comercial
          </div>
          <div className="text-[#C9A96E] text-[14px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 cursor-pointer transition-transform hover:scale-105" onClick={() => goTo(9)}>
            <span className="text-[16px] opacity-80">◇</span> Eje Financiero
          </div>
          <div className="text-[#C9A96E] text-[14px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 cursor-pointer transition-transform hover:scale-105" onClick={() => goTo(14)}>
            <span className="text-[16px] opacity-80">△</span> Eje Técnico
          </div>
          <div className="text-[#C9A96E] text-[14px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 cursor-pointer transition-transform hover:scale-105" onClick={() => goTo(16)}>
            <span className="text-[16px] opacity-80">○</span> Portafolio
          </div>
          <div className="text-[#C9A96E] text-[14px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 cursor-pointer transition-transform hover:scale-105" onClick={() => goTo(18)}>
            <span className="text-[16px] opacity-80">→</span> Trayectoria
          </div>
          <div className="text-[#C9A96E] text-[14px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 cursor-pointer transition-transform hover:scale-105" onClick={() => goTo(19)}>
            <span className="text-[16px] opacity-80">◉</span> Contacto
          </div>
        </div>
      </div>

      {/* Side Dots */}
      <nav id="dotnav" className={`fixed right-4 top-1/2 -translate-y-1/2 z-[800] flex flex-col gap-2 transition-opacity duration-300 hidden md:flex ${menuVisible ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}>
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button 
            key={i}
            onClick={() => goTo(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 p-0 border-none ${activeSlide === i ? 'bg-[#C9A96E] scale-[1.7]' : 'bg-[#C9A96E]/30 hover:bg-[#C9A96E]'}`}
          />
        ))}
      </nav>

      {/* Counter */}
      <div id="ctr" className={`fixed bottom-5 left-1/2 -translate-x-1/2 z-[800] text-[10px] font-semibold tracking-[0.2em] text-[#F7F3ED]/40 bg-[#080705]/70 border border-[#C9A96E]/10 py-1.5 px-4 rounded-full backdrop-blur-md transition-opacity duration-300 ${menuVisible ? 'opacity-40' : 'opacity-100'}`}>
        {String(activeSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
      </div>

      {/* Mobile Navigation Arrows */}
      <div className="fixed bottom-4 left-4 z-[800] md:hidden">
        <button 
          onClick={prevSlide}
          disabled={activeSlide === 0}
          className={`w-10 h-10 rounded-full bg-[#080705]/70 border border-[#C9A96E]/20 backdrop-blur-md flex items-center justify-center text-[#C9A96E] transition-all ${activeSlide === 0 ? 'opacity-30' : 'active:bg-[#C9A96E]/20'}`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
      </div>
      <div className="fixed bottom-4 right-4 z-[800] md:hidden">
        <button 
          onClick={nextSlide}
          disabled={activeSlide === totalSlides - 1}
          className={`w-10 h-10 rounded-full bg-[#080705]/70 border border-[#C9A96E]/20 backdrop-blur-md flex items-center justify-center text-[#C9A96E] transition-all ${activeSlide === totalSlides - 1 ? 'opacity-30' : 'active:bg-[#C9A96E]/20'}`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>

      {/* Deck */}
      <div id="deck" className="fixed inset-0">
        
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

        {/* Slide 03 */}
        <div className={`slide absolute inset-0 transition-all duration-500 ease-out-custom ${activeSlide === 2 ? 'opacity-100 translate-x-0 pointer-events-auto' : activeSlide > 2 ? 'opacity-0 -translate-x-16 pointer-events-none' : 'opacity-0 translate-x-16 pointer-events-none'}`}>
          <div className="orb absolute rounded-full blur-[90px] pointer-events-none animate-o1" style={{ width: '800px', height: '800px', background: 'rgba(201,169,110,.07)', top: '-30%', left: '-20%' }}></div>
          <div className="orb absolute rounded-full blur-[90px] pointer-events-none animate-o2" style={{ width: '450px', height: '450px', background: 'rgba(201,169,110,.04)', bottom: '-20%', right: '-10%', animationDelay: '2s' }}></div>
          <div className="grain absolute inset-0 opacity-[0.025] z-[2] pointer-events-none mix-blend-overlay"></div>
          
          <div className="si relative z-10 h-full w-full px-6 md:px-20 flex flex-col justify-center max-w-[1000px] overflow-y-auto no-scrollbar py-24 md:py-0">
            <div className={`lbl a text-[9px] uppercase tracking-[0.26em] text-[#C9A96E] mb-3 transition-all duration-700 ease-out-custom delay-100 ${activeSlide === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>Lo que garantizamos</div>
            <h2 className={`a font-serif text-[clamp(34px,5vw,76px)] leading-[0.95] tracking-[-0.035em] font-light text-[#F7F3ED] mb-6 transition-all duration-700 ease-out-custom delay-200 ${activeSlide === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              "No ejecutamos proyectos.<br/><em className="italic text-[#C9A96E] font-serif">Orquestamos todo<br/>su ciclo de vida."</em>
            </h2>
            <div className={`rule a h-[0.5px] bg-[#C9A96E]/10 w-full max-w-[560px] mb-5 transition-all duration-700 ease-out-custom delay-300 ${activeSlide === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}></div>
            <p className={`bod a text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82] text-[#F7F3ED]/60 max-w-[560px] mb-7 transition-all duration-700 ease-out-custom delay-400 ${activeSlide === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Cada aspecto técnico, legal y comercial de su operación quedará cubierto con precisión, dentro del plazo acordado y orientado al retorno de su inversión. Eso es lo que significa trabajar con Arqentia.
            </p>
            <div className={`a flex gap-[clamp(14px,3vw,36px)] flex-wrap transition-all duration-700 ease-out-custom delay-500 ${activeSlide === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <div className="flex gap-2 items-center"><div className="w-[7px] h-[7px] rounded-full bg-[#C9A96E]"></div><div className="text-[13px] text-[#F7F3ED]/60">Precisión técnica</div></div>
              <div className="flex gap-2 items-center"><div className="w-[7px] h-[7px] rounded-full bg-[#C9A96E]"></div><div className="text-[13px] text-[#F7F3ED]/60">Seguridad jurídica</div></div>
              <div className="flex gap-2 items-center"><div className="w-[7px] h-[7px] rounded-full bg-[#C9A96E]"></div><div className="text-[13px] text-[#F7F3ED]/60">Gestión comercial</div></div>
              <div className="flex gap-2 items-center"><div className="w-[7px] h-[7px] rounded-full bg-[#C9A96E]"></div><div className="text-[13px] text-[#F7F3ED]/60">Retorno garantizado</div></div>
            </div>
          </div>
        </div>

        {/* Slide 04 */}
        <div className={`slide absolute inset-0 transition-all duration-500 ease-out-custom ${activeSlide === 3 ? 'opacity-100 translate-x-0 pointer-events-auto' : activeSlide > 3 ? 'opacity-0 -translate-x-16 pointer-events-none' : 'opacity-0 translate-x-16 pointer-events-none'}`}>
          <div className="bg absolute inset-0 bg-cover bg-center saturate-50 brightness-50" style={{ backgroundImage: "url('https://vibe.filesafe.space/1777235203059015042/assets/786af3b3-01c0-484b-b263-170cf4f1b011.jpg')" }}></div>
          <div className="absolute inset-0 bg-[#080705]/70"></div>
          <div className="grain absolute inset-0 opacity-[0.025] z-[2] pointer-events-none mix-blend-overlay"></div>
          
          <div className="si relative z-10 h-full w-full px-6 md:px-20 flex flex-col justify-center overflow-y-auto no-scrollbar py-24 md:py-0">
            <div className={`ep a inline-flex items-center gap-2 bg-[#080705]/75 border border-[#C9A96E]/10 rounded-full py-1.5 px-4 backdrop-blur-md mb-3 w-fit transition-all duration-700 ease-out-custom delay-100 ${activeSlide === 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] shrink-0"></span>
              <span className="text-[9px] font-bold uppercase tracking-[0.26em] text-[#C9A96E]">Estructura de servicios</span>
            </div>
            <h2 className={`hlg a font-serif text-[clamp(34px,4.5vw,68px)] leading-[0.93] tracking-[-0.03em] font-medium mb-2 transition-all duration-700 ease-out-custom delay-200 ${activeSlide === 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Tres ejes. <em className="italic text-[#C9A96E] font-serif">Una sola firma.</em>
            </h2>
            <p className={`bod a text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82] text-[#F7F3ED]/60 max-w-[460px] mb-6 transition-all duration-700 ease-out-custom delay-300 ${activeSlide === 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Comercial, Financiero y Técnico actúan de manera coordinada. El cliente no gestiona proveedores — gestiona resultados.
            </p>
            
            <div className={`a grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[clamp(10px,1.2vw,16px)] max-w-[1100px] transition-all duration-700 ease-out-custom delay-400 ${activeSlide === 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <div className="card bg-[#080705]/80 border border-[#C9A96E]/20 rounded-[15px] backdrop-blur-md p-[clamp(20px,2.5vw,28px)] relative overflow-hidden transition-all hover:-translate-y-1 hover:border-[#C9A96E]/40" style={{ background: 'rgba(201,169,110,.07)' }}>
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C9A96E] to-transparent"></div>
                <div className="flex justify-between items-start mb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#C9A96E]/20 flex items-center justify-center text-[#C9A96E] shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                  </div>
                  <div className="inline-block bg-[#C9A96E]/10 border border-[#C9A96E]/20 rounded-full py-1 px-3 text-[9px] font-bold uppercase tracking-[0.18em] text-[#C9A96E]">Prioritario</div>
                </div>
                <div className="font-serif text-[clamp(19px,2vw,28px)] leading-[1.1] tracking-[-0.02em] font-medium mb-2">Eje Comercial</div>
                <p className="text-[clamp(11px,0.9vw,13px)] font-light leading-[1.72] text-[#F7F3ED]/60 mb-3">El motor de captación y cierre. Gestiona propiedades, genera demanda calificada y convierte oportunidades en operaciones concretas.</p>
                <div className="flex flex-col gap-1.5">
                  <div className="text-[11.5px] text-[#F7F3ED]/60 flex gap-2"><span className="text-[#C9A96E]">→</span>Compra, venta y arrendamiento</div>
                  <div className="text-[11.5px] text-[#F7F3ED]/60 flex gap-2"><span className="text-[#C9A96E]">→</span>Captación digital y comercialización</div>
                  <div className="text-[11.5px] text-[#F7F3ED]/60 flex gap-2"><span className="text-[#C9A96E]">→</span>Asesoría a inversionistas</div>
                </div>
              </div>
              
              <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-[clamp(18px,2vw,24px)] transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                <div className="w-9 h-9 rounded-lg bg-[#C9A96E]/10 flex items-center justify-center text-[#C9A96E] shrink-0 mb-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
                </div>
                <div className="font-serif text-[clamp(17px,2vw,27px)] leading-[1.1] tracking-[-0.02em] font-medium mb-2">Eje Financiero</div>
                <p className="text-[clamp(11px,0.9vw,13px)] font-light leading-[1.72] text-[#F7F3ED]/60 mb-3">Garantiza la viabilidad económica y el cumplimiento legal de cada operación. Control financiero de inicio a cierre.</p>
                <div className="flex flex-col gap-1.5">
                  <div className="text-[11.5px] text-[#F7F3ED]/60 flex gap-2"><span className="text-[#C9A96E]">→</span>Contabilidad especializada</div>
                  <div className="text-[11.5px] text-[#F7F3ED]/60 flex gap-2"><span className="text-[#C9A96E]">→</span>Gestión de cobranzas</div>
                  <div className="text-[11.5px] text-[#F7F3ED]/60 flex gap-2"><span className="text-[#C9A96E]">→</span>Cumplimiento normativo</div>
                </div>
              </div>
              
              <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-[clamp(18px,2vw,24px)] transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                <div className="w-9 h-9 rounded-lg bg-[#C9A96E]/10 flex items-center justify-center text-[#C9A96E] shrink-0 mb-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/></svg>
                </div>
                <div className="font-serif text-[clamp(17px,2vw,27px)] leading-[1.1] tracking-[-0.02em] font-medium mb-2">Eje Técnico</div>
                <p className="text-[clamp(11px,0.9vw,13px)] font-light leading-[1.72] text-[#F7F3ED]/60 mb-3">El brazo ejecutor. Diseño, fiscalización y entrega de proyectos con excelencia constructiva y cumplimiento normativo.</p>
                <div className="flex flex-col gap-1.5">
                  <div className="text-[11.5px] text-[#F7F3ED]/60 flex gap-2"><span className="text-[#C9A96E]">→</span>Diseño y arquitectura</div>
                  <div className="text-[11.5px] text-[#F7F3ED]/60 flex gap-2"><span className="text-[#C9A96E]">→</span>Fiscalización de obra</div>
                  <div className="text-[11.5px] text-[#F7F3ED]/60 flex gap-2"><span className="text-[#C9A96E]">→</span>Visualización y renders</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Remaining slides would follow the exact same pattern... */}
        {/* I will implement slides 05-08 next to keep the file manageable and ensure logic is sound */}
        {/* We can add a simple "More slides in progress" or just implement them all */}
        
        {/* Slide 05 */}
        <div className={`slide absolute inset-0 transition-all duration-500 ease-out-custom ${activeSlide === 4 ? 'opacity-100 translate-x-0 pointer-events-auto' : activeSlide > 4 ? 'opacity-0 -translate-x-16 pointer-events-none' : 'opacity-0 translate-x-16 pointer-events-none'}`}>
          <div className="si relative z-10 h-full w-full grid grid-cols-1 md:grid-cols-2">
            <div className="col flex flex-col justify-center bg-[#0B0A08] px-[clamp(22px,5vw,80px)] md:pr-[clamp(26px,3.5vw,60px)] relative overflow-y-auto no-scrollbar h-full py-24 md:py-0">
              <div className="orb absolute rounded-full blur-[90px] pointer-events-none animate-o1" style={{ width: '420px', height: '420px', background: 'rgba(201,169,110,.07)', top: '-20%', left: '-20%' }}></div>
              <div className="grain absolute inset-0 opacity-[0.025] z-[2] pointer-events-none mix-blend-overlay"></div>
              <div className="relative z-10">
                <div className={`a flex gap-2.5 items-center mb-4 transition-all duration-700 ease-out-custom delay-100 ${activeSlide === 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  <div className="inline-block bg-[#C9A96E]/10 border border-[#C9A96E]/20 rounded-full py-1 px-3 text-[9px] font-bold uppercase tracking-[0.18em] text-[#C9A96E]">Eje Comercial</div>
                </div>
                <h2 className={`hlg a font-serif text-[clamp(34px,4.5vw,68px)] leading-[0.93] tracking-[-0.03em] font-medium mb-4 transition-all duration-700 ease-out-custom delay-200 ${activeSlide === 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  Compra y Venta<br/><em className="italic text-[#C9A96E] font-serif">Inmobiliaria.</em>
                </h2>
                <p className={`bod a text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82] text-[#F7F3ED]/60 mb-5 transition-all duration-700 ease-out-custom delay-300 ${activeSlide === 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  Gestionamos la operación completa — desde la valoración técnica de su propiedad hasta el cierre notarial — con un proceso estructurado que protege su inversión en cada etapa.
                </p>
                <div className={`a flex flex-col gap-2 transition-all duration-700 ease-out-custom delay-400 ${activeSlide === 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  <div className="flex gap-3 items-start"><div className="w-[5px] h-[5px] rounded-full bg-[#C9A96E] shrink-0 mt-2"></div><div className="text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82]"><span className="font-semibold text-[#F7F3ED]">Valoración profesional</span><span className="text-[#F7F3ED]/60"> — Precio real de mercado basado en análisis técnico y comparables de la zona.</span></div></div>
                  <div className="flex gap-3 items-start"><div className="w-[5px] h-[5px] rounded-full bg-[#C9A96E] shrink-0 mt-2"></div><div className="text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82]"><span className="font-semibold text-[#F7F3ED]">Marketing inmobiliario</span><span className="text-[#F7F3ED]/60"> — Posicionamiento digital con fotografía profesional, difusión multicanal y filtrado de interesados calificados.</span></div></div>
                  <div className="flex gap-3 items-start"><div className="w-[5px] h-[5px] rounded-full bg-[#C9A96E] shrink-0 mt-2"></div><div className="text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82]"><span className="font-semibold text-[#F7F3ED]">Negociación estratégica</span><span className="text-[#F7F3ED]/60"> — Estructuramos y defendemos la oferta para maximizar el resultado de la operación.</span></div></div>
                  <div className="flex gap-3 items-start"><div className="w-[5px] h-[5px] rounded-full bg-[#C9A96E] shrink-0 mt-2"></div><div className="text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82]"><span className="font-semibold text-[#F7F3ED]">Cierre con respaldo jurídico</span><span className="text-[#F7F3ED]/60"> — Coordinación notarial completa. Sin sorpresas legales al momento de firmar.</span></div></div>
                </div>
              </div>
            </div>
            <div className="hidden md:block relative h-full">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://vibe.filesafe.space/1777235203059015042/assets/7e095d9d-8ce0-4999-bb04-d657c8c303a7.jpg')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-l from-[#080705]/95 via-[#080705]/60 to-[#080705]/20"></div>
            </div>
          </div>
        </div>

        {/* Slide 06 */}
        <div className={`slide absolute inset-0 transition-all duration-500 ease-out-custom ${activeSlide === 5 ? 'opacity-100 translate-x-0 pointer-events-auto' : activeSlide > 5 ? 'opacity-0 -translate-x-16 pointer-events-none' : 'opacity-0 translate-x-16 pointer-events-none'}`}>
          <div className="si relative z-10 h-full w-full grid grid-cols-1 md:grid-cols-2">
            <div className="hidden md:block relative h-full">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://vibe.filesafe.space/1777235203059015042/assets/4f1b6ca4-0b90-40b0-8380-62cab16f5e4e.jpg')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#080705]/95 via-[#080705]/60 to-[#080705]/20"></div>
            </div>
            <div className="col flex flex-col justify-center bg-[#0B0A08] px-[clamp(22px,5vw,80px)] md:pl-[clamp(26px,3.5vw,60px)] relative overflow-y-auto no-scrollbar h-full py-24 md:py-0">
              <div className="orb absolute rounded-full blur-[90px] pointer-events-none animate-o2" style={{ width: '400px', height: '400px', background: 'rgba(201,169,110,.06)', bottom: '-20%', right: '-15%' }}></div>
              <div className="grain absolute inset-0 opacity-[0.025] z-[2] pointer-events-none mix-blend-overlay"></div>
              <div className="relative z-10">
                <div className={`a flex gap-2.5 items-center mb-4 transition-all duration-700 ease-out-custom delay-100 ${activeSlide === 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  <div className="inline-block bg-[#C9A96E]/10 border border-[#C9A96E]/20 rounded-full py-1 px-3 text-[9px] font-bold uppercase tracking-[0.18em] text-[#C9A96E]">Eje Comercial</div>
                </div>
                <h2 className={`hlg a font-serif text-[clamp(34px,4.5vw,68px)] leading-[0.93] tracking-[-0.03em] font-medium mb-4 transition-all duration-700 ease-out-custom delay-200 ${activeSlide === 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  Administración de<br/><em className="italic text-[#C9A96E] font-serif">Arrendamientos.</em>
                </h2>
                <p className={`bod a text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82] text-[#F7F3ED]/60 mb-5 transition-all duration-700 ease-out-custom delay-300 ${activeSlide === 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  Su propiedad en manos de especialistas. Gestionamos cada aspecto del arrendamiento para que usted perciba el beneficio sin involucrarse en la operación diaria.
                </p>
                <div className={`a flex flex-col gap-2 transition-all duration-700 ease-out-custom delay-400 ${activeSlide === 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  <div className="flex gap-3 items-start"><div className="w-[5px] h-[5px] rounded-full bg-[#C9A96E] shrink-0 mt-2"></div><div className="text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82]"><span className="font-semibold text-[#F7F3ED]">Selección de inquilinos</span><span className="text-[#F7F3ED]/60"> — Validación financiera y de antecedentes. Solo perfiles solventes y verificados.</span></div></div>
                  <div className="flex gap-3 items-start"><div className="w-[5px] h-[5px] rounded-full bg-[#C9A96E] shrink-0 mt-2"></div><div className="text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82]"><span className="font-semibold text-[#F7F3ED]">Contratos con respaldo legal</span><span className="text-[#F7F3ED]/60"> — Documentación completa que protege al propietario en cualquier eventualidad.</span></div></div>
                  <div className="flex gap-3 items-start"><div className="w-[5px] h-[5px] rounded-full bg-[#C9A96E] shrink-0 mt-2"></div><div className="text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82]"><span className="font-semibold text-[#F7F3ED]">Control mensual de pagos</span><span className="text-[#F7F3ED]/60"> — Seguimiento, gestión de mora y reporte periódico al propietario.</span></div></div>
                  <div className="flex gap-3 items-start"><div className="w-[5px] h-[5px] rounded-full bg-[#C9A96E] shrink-0 mt-2"></div><div className="text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82]"><span className="font-semibold text-[#F7F3ED]">Gestión de novedades</span><span className="text-[#F7F3ED]/60"> — Mantenimientos, renovaciones de contrato y atención al inquilino sin intermediación del propietario.</span></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 07 */}
        <div className={`slide absolute inset-0 transition-all duration-500 ease-out-custom ${activeSlide === 6 ? 'opacity-100 translate-x-0 pointer-events-auto' : activeSlide > 6 ? 'opacity-0 -translate-x-16 pointer-events-none' : 'opacity-0 translate-x-16 pointer-events-none'}`}>
          <div className="bg absolute inset-0 bg-cover bg-center saturate-50" style={{ backgroundImage: "url('https://vibe.filesafe.space/1777235203059015042/assets/0d70d966-585a-400d-8040-fdbed5505255.jpg')" }}></div>
          <div className="absolute inset-0 bg-[#080705]/70"></div>
          <div className="grain absolute inset-0 opacity-[0.025] z-[2] pointer-events-none mix-blend-overlay"></div>
          
          <div className="si relative z-10 h-full w-full px-6 md:px-20 flex flex-col justify-center items-center text-center max-w-[1000px] mx-auto overflow-y-auto no-scrollbar py-24 md:py-0">
            <div className={`ep a inline-flex items-center gap-2 bg-[#080705]/75 border border-[#C9A96E]/10 rounded-full py-1.5 px-4 backdrop-blur-md mb-4 w-fit transition-all duration-700 ease-out-custom delay-100 ${activeSlide === 6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] shrink-0"></span>
              <span className="text-[9px] font-bold uppercase tracking-[0.26em] text-[#C9A96E]">Asesoría de Inversión</span>
            </div>
            <h2 className={`hlg a font-serif text-[clamp(34px,4.5vw,68px)] leading-[0.93] tracking-[-0.03em] font-medium mb-4 transition-all duration-700 ease-out-custom delay-200 ${activeSlide === 6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Su capital, <em className="italic text-[#C9A96E] font-serif">bien invertido.</em>
            </h2>
            <p className={`bod a text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82] text-[#F7F3ED]/60 max-w-[540px] mb-7 mx-auto transition-all duration-700 ease-out-custom delay-300 ${activeSlide === 6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Analizamos su perfil, presupuesto y horizonte de inversión para identificar oportunidades inmobiliarias con rentabilidad real y valorización comprobada en el mercado quiteño.
            </p>
            
            <div className={`a grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[clamp(10px,1.3vw,16px)] w-full max-w-[860px] text-left transition-all duration-700 ease-out-custom delay-400 ${activeSlide === 6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-6 border-t-2 border-t-[#C9A96E] transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                <div className="w-9 h-9 rounded-lg bg-[#C9A96E]/10 flex items-center justify-center text-[#C9A96E] shrink-0 mb-3.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div className="font-serif text-[clamp(17px,2vw,27px)] leading-[1.1] tracking-[-0.02em] font-medium mb-2">Análisis por zona</div>
                <p className="text-[clamp(11px,0.9vw,13px)] font-light leading-[1.72] text-[#F7F3ED]/60">Evaluamos valorización histórica, proyecciones de plusvalía y rentabilidad por arrendamiento en las principales zonas de Quito y sus valles.</p>
              </div>
              <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-6 border-t-2 border-t-[#C9A96E] transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                <div className="w-9 h-9 rounded-lg bg-[#C9A96E]/10 flex items-center justify-center text-[#C9A96E] shrink-0 mb-3.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                </div>
                <div className="font-serif text-[clamp(17px,2vw,27px)] leading-[1.1] tracking-[-0.02em] font-medium mb-2">Cálculo de ROI</div>
                <p className="text-[clamp(11px,0.9vw,13px)] font-light leading-[1.72] text-[#F7F3ED]/60">Proyección detallada del retorno: rentabilidad bruta y neta por arrendamiento, plusvalía estimada y escenarios de salida de la inversión.</p>
              </div>
              <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-6 border-t-2 border-t-[#C9A96E] transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                <div className="w-9 h-9 rounded-lg bg-[#C9A96E]/10 flex items-center justify-center text-[#C9A96E] shrink-0 mb-3.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <div className="font-serif text-[clamp(17px,2vw,27px)] leading-[1.1] tracking-[-0.02em] font-medium mb-2">Acompañamiento hipotecario</div>
                <p className="text-[clamp(11px,0.9vw,13px)] font-light leading-[1.72] text-[#F7F3ED]/60">Coordinamos el proceso de financiamiento con entidades bancarias. Le asesoramos en la estructura óptima de crédito para su perfil.</p>
              </div>
            </div>
          </div>
        </div>

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

        {/* Slide 10 */}
        <div className={`slide absolute inset-0 transition-all duration-500 ease-out-custom ${activeSlide === 9 ? 'opacity-100 translate-x-0 pointer-events-auto' : activeSlide > 9 ? 'opacity-0 -translate-x-16 pointer-events-none' : 'opacity-0 translate-x-16 pointer-events-none'}`}>
          <div className="si relative z-10 h-full w-full grid grid-cols-1 md:grid-cols-2">
            <div className="col flex flex-col justify-center bg-[#0B0A08] px-[clamp(22px,5vw,80px)] md:pr-[clamp(26px,3.5vw,60px)] relative overflow-y-auto no-scrollbar h-full py-24 md:py-0">
              <div className="orb absolute rounded-full blur-[90px] pointer-events-none animate-o1" style={{ width: '450px', height: '450px', background: 'rgba(201,169,110,.06)', bottom: '-20%', left: '-15%' }}></div>
              <div className="grain absolute inset-0 opacity-[0.025] z-[2] pointer-events-none mix-blend-overlay"></div>
              <div className="relative z-10">
                <div className={`ep a inline-flex items-center gap-2 bg-[#080705]/75 border border-[#C9A96E]/10 rounded-full py-1.5 px-4 backdrop-blur-md mb-4 w-fit transition-all duration-700 ease-out-custom delay-100 ${activeSlide === 9 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] shrink-0"></span>
                  <span className="text-[9px] font-bold uppercase tracking-[0.26em] text-[#C9A96E]">Eje Financiero y Legal</span>
                </div>
                <h2 className={`hlg a font-serif text-[clamp(34px,4.5vw,68px)] leading-[0.93] tracking-[-0.03em] font-medium mb-3.5 transition-all duration-700 ease-out-custom delay-200 ${activeSlide === 9 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  Control financiero<br/>y <em className="italic text-[#C9A96E] font-serif">seguridad jurídica</em><br/>en cada proyecto.
                </h2>
                <p className={`bod a text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82] text-[#F7F3ED]/60 mb-5 transition-all duration-700 ease-out-custom delay-300 ${activeSlide === 9 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  El respaldo económico y legal que hace posible que cada proyecto se ejecute dentro de presupuesto, en regla y con trazabilidad completa.
                </p>
                <div className={`a grid grid-cols-1 sm:grid-cols-2 gap-[clamp(10px,1.4vw,18px)] transition-all duration-700 ease-out-custom delay-400 ${activeSlide === 9 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-4 transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                    <div className="w-8 h-8 rounded-lg bg-[#C9A96E]/10 flex items-center justify-center text-[#C9A96E] shrink-0 mb-2.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                    </div>
                    <div className="text-[12.5px] font-semibold text-[#F7F3ED] mb-1">Contabilidad de Obra</div>
                    <div className="text-[clamp(11px,0.9vw,13px)] font-light leading-[1.72] text-[#F7F3ED]/60">Control de costos, inventarios y eficiencia tributaria especializada en el sector de construcción.</div>
                  </div>
                  <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-4 transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                    <div className="w-8 h-8 rounded-lg bg-[#C9A96E]/10 flex items-center justify-center text-[#C9A96E] shrink-0 mb-2.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    </div>
                    <div className="text-[12.5px] font-semibold text-[#F7F3ED] mb-1">Gestión de Cobros</div>
                    <div className="text-[clamp(11px,0.9vw,13px)] font-light leading-[1.72] text-[#F7F3ED]/60">Seguimiento de pagos, flujo de caja en tiempo real y gestión de cartera con respaldo legal.</div>
                  </div>
                  <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-4 transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                    <div className="w-8 h-8 rounded-lg bg-[#C9A96E]/10 flex items-center justify-center text-[#C9A96E] shrink-0 mb-2.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
                    </div>
                    <div className="text-[12.5px] font-semibold text-[#F7F3ED] mb-1">Administración de Edificios</div>
                    <div className="text-[clamp(11px,0.9vw,13px)] font-light leading-[1.72] text-[#F7F3ED]/60">Gestión de alícuotas, fondos de reserva, mantenimientos y administración operativa del inmueble.</div>
                  </div>
                  <div className="card bg-[#080705]/80 border border-[#C9A96E]/40 rounded-[15px] backdrop-blur-md p-4 transition-all hover:-translate-y-1" style={{ background: 'rgba(201,169,110,.06)' }}>
                    <div className="w-8 h-8 rounded-lg bg-[#C9A96E]/20 flex items-center justify-center text-[#C9A96E] shrink-0 mb-2.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <div className="text-[12.5px] font-semibold text-[#F7F3ED] mb-1">Cumplimiento Normativo</div>
                    <div className="text-[clamp(11px,0.9vw,13px)] font-light leading-[1.72] text-[#F7F3ED]/60">Prevención y cumplimiento legal en operaciones de alto valor. Protección para el propietario y el comprador.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block relative h-full">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://vibe.filesafe.space/1777235203059015042/assets/7e095d9d-8ce0-4999-bb04-d657c8c303a7.jpg')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-l from-[#080705]/95 via-[#080705]/60 to-[#080705]/20"></div>
            </div>
          </div>
        </div>

        {/* Slide 11 - Contabilidad */}
        <div className={`slide absolute inset-0 transition-all duration-500 ease-out-custom ${activeSlide === 10 ? 'opacity-100 translate-x-0 pointer-events-auto' : activeSlide > 10 ? 'opacity-0 -translate-x-16 pointer-events-none' : 'opacity-0 translate-x-16 pointer-events-none'}`}>
          <div className="si relative z-10 h-full w-full grid grid-cols-1 md:grid-cols-2">
            <div className="hidden md:block relative h-full">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://vibe.filesafe.space/1777235203059015042/assets/450d9670-91fc-4d8a-aa24-3e0140a63544.jpg')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#080705]/95 via-[#080705]/60 to-[#080705]/20"></div>
            </div>
            <div className="col flex flex-col justify-center bg-[#0B0A08] px-[clamp(22px,5vw,80px)] md:pl-[clamp(26px,3.5vw,60px)] relative overflow-y-auto no-scrollbar h-full py-24 md:py-0">
              <div className="orb absolute rounded-full blur-[90px] pointer-events-none animate-o2" style={{ width: '400px', height: '400px', background: 'rgba(201,169,110,.06)', bottom: '-20%', right: '-15%' }}></div>
              <div className="grain absolute inset-0 opacity-[0.025] z-[2] pointer-events-none mix-blend-overlay"></div>
              <div className="relative z-10">
                <div className={`a flex gap-2.5 items-center mb-4 transition-all duration-700 ease-out-custom delay-100 ${activeSlide === 10 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  <div className="inline-block bg-[#C9A96E]/10 border border-[#C9A96E]/20 rounded-full py-1 px-3 text-[9px] font-bold uppercase tracking-[0.18em] text-[#C9A96E]">Eje Financiero</div>
                </div>
                <h2 className={`hlg a font-serif text-[clamp(34px,4.5vw,68px)] leading-[0.93] tracking-[-0.03em] font-medium mb-4 transition-all duration-700 ease-out-custom delay-200 ${activeSlide === 10 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  Contabilidad<br/><em className="italic text-[#C9A96E] font-serif">Especializada.</em>
                </h2>
                <p className={`bod a text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82] text-[#F7F3ED]/60 mb-5 transition-all duration-700 ease-out-custom delay-300 ${activeSlide === 10 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  Manejo riguroso de la información financiera y tributaria, adaptado específicamente a las normativas y dinámicas del sector de la construcción.
                </p>
                <div className={`a flex flex-col gap-2 transition-all duration-700 ease-out-custom delay-400 ${activeSlide === 10 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  <div className="flex gap-3 items-start"><div className="w-[5px] h-[5px] rounded-full bg-[#C9A96E] shrink-0 mt-2"></div><div className="text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82]"><span className="font-semibold text-[#F7F3ED]">Contabilidad general en construcción</span></div></div>
                  <div className="flex gap-3 items-start"><div className="w-[5px] h-[5px] rounded-full bg-[#C9A96E] shrink-0 mt-2"></div><div className="text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82]"><span className="font-semibold text-[#F7F3ED]">Asesoría contable tributaria</span></div></div>
                  <div className="flex gap-3 items-start"><div className="w-[5px] h-[5px] rounded-full bg-[#C9A96E] shrink-0 mt-2"></div><div className="text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82]"><span className="font-semibold text-[#F7F3ED]">Presupuestos y control presupuestario</span></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 12 - Cobranzas */}
        <div className={`slide absolute inset-0 transition-all duration-500 ease-out-custom ${activeSlide === 11 ? 'opacity-100 translate-x-0 pointer-events-auto' : activeSlide > 11 ? 'opacity-0 -translate-x-16 pointer-events-none' : 'opacity-0 translate-x-16 pointer-events-none'}`}>
          <div className="si relative z-10 h-full w-full grid grid-cols-1 md:grid-cols-2">
            <div className="col flex flex-col justify-center bg-[#0B0A08] px-[clamp(22px,5vw,80px)] md:pr-[clamp(26px,3.5vw,60px)] relative overflow-y-auto no-scrollbar h-full py-24 md:py-0">
              <div className="orb absolute rounded-full blur-[90px] pointer-events-none animate-o1" style={{ width: '420px', height: '420px', background: 'rgba(201,169,110,.07)', top: '-20%', left: '-20%' }}></div>
              <div className="grain absolute inset-0 opacity-[0.025] z-[2] pointer-events-none mix-blend-overlay"></div>
              <div className="relative z-10">
                <div className={`a flex gap-2.5 items-center mb-4 transition-all duration-700 ease-out-custom delay-100 ${activeSlide === 11 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  <div className="inline-block bg-[#C9A96E]/10 border border-[#C9A96E]/20 rounded-full py-1 px-3 text-[9px] font-bold uppercase tracking-[0.18em] text-[#C9A96E]">Eje Financiero</div>
                </div>
                <h2 className={`hlg a font-serif text-[clamp(34px,4.5vw,68px)] leading-[0.93] tracking-[-0.03em] font-medium mb-4 transition-all duration-700 ease-out-custom delay-200 ${activeSlide === 11 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  Gestión de<br/><em className="italic text-[#C9A96E] font-serif">Cobranzas.</em>
                </h2>
                <p className={`bod a text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82] text-[#F7F3ED]/60 mb-5 transition-all duration-700 ease-out-custom delay-300 ${activeSlide === 11 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  Aseguramos el flujo de caja de sus proyectos mediante un seguimiento estructurado, acompañamiento financiero y gestión legal.
                </p>
                <div className={`a flex flex-col gap-2 transition-all duration-700 ease-out-custom delay-400 ${activeSlide === 11 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  <div className="flex gap-3 items-start"><div className="w-[5px] h-[5px] rounded-full bg-[#C9A96E] shrink-0 mt-2"></div><div className="text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82]"><span className="font-semibold text-[#F7F3ED]">Gestión de cobranzas</span></div></div>
                  <div className="flex gap-3 items-start"><div className="w-[5px] h-[5px] rounded-full bg-[#C9A96E] shrink-0 mt-2"></div><div className="text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82]"><span className="font-semibold text-[#F7F3ED]">Seguimiento de pagos de clientes</span></div></div>
                  <div className="flex gap-3 items-start"><div className="w-[5px] h-[5px] rounded-full bg-[#C9A96E] shrink-0 mt-2"></div><div className="text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82]"><span className="font-semibold text-[#F7F3ED]">Reporte de cobranza mensual</span></div></div>
                  <div className="flex gap-3 items-start"><div className="w-[5px] h-[5px] rounded-full bg-[#C9A96E] shrink-0 mt-2"></div><div className="text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82]"><span className="font-semibold text-[#F7F3ED]">Gestión legal de cobranza</span></div></div>
                  <div className="flex gap-3 items-start"><div className="w-[5px] h-[5px] rounded-full bg-[#C9A96E] shrink-0 mt-2"></div><div className="text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82]"><span className="font-semibold text-[#F7F3ED]">Atención al cliente</span></div></div>
                  <div className="flex gap-3 items-start"><div className="w-[5px] h-[5px] rounded-full bg-[#C9A96E] shrink-0 mt-2"></div><div className="text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82]"><span className="font-semibold text-[#F7F3ED]">Asesoría financiera para el cliente</span></div></div>
                  <div className="flex gap-3 items-start"><div className="w-[5px] h-[5px] rounded-full bg-[#C9A96E] shrink-0 mt-2"></div><div className="text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82]"><span className="font-semibold text-[#F7F3ED]">Acompañamiento para desembolso de créditos hipotecarios</span></div></div>
                </div>
              </div>
            </div>
            <div className="hidden md:block relative h-full">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://vibe.filesafe.space/1777235203059015042/assets/bdc17f01-f082-491b-8930-51646a0275e8.jpg')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-l from-[#080705]/95 via-[#080705]/60 to-[#080705]/20"></div>
            </div>
          </div>
        </div>

        {/* Slide 13 - Administración de Edificios */}
        <div className={`slide absolute inset-0 transition-all duration-500 ease-out-custom ${activeSlide === 12 ? 'opacity-100 translate-x-0 pointer-events-auto' : activeSlide > 12 ? 'opacity-0 -translate-x-16 pointer-events-none' : 'opacity-0 translate-x-16 pointer-events-none'}`}>
          <div className="si relative z-10 h-full w-full grid grid-cols-1 md:grid-cols-2">
            <div className="hidden md:block relative h-full">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://vibe.filesafe.space/1777235203059015042/assets/a6b58eab-d879-4fa3-abe2-a57cc949c818.jpg')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#080705]/95 via-[#080705]/60 to-[#080705]/20"></div>
            </div>
            <div className="col flex flex-col justify-center bg-[#0B0A08] px-[clamp(22px,5vw,80px)] md:pl-[clamp(26px,3.5vw,60px)] relative overflow-y-auto no-scrollbar h-full py-24 md:py-0">
              <div className="orb absolute rounded-full blur-[90px] pointer-events-none animate-o2" style={{ width: '400px', height: '400px', background: 'rgba(201,169,110,.06)', bottom: '-20%', right: '-15%' }}></div>
              <div className="grain absolute inset-0 opacity-[0.025] z-[2] pointer-events-none mix-blend-overlay"></div>
              <div className="relative z-10">
                <div className={`a flex gap-2.5 items-center mb-4 transition-all duration-700 ease-out-custom delay-100 ${activeSlide === 12 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  <div className="inline-block bg-[#C9A96E]/10 border border-[#C9A96E]/20 rounded-full py-1 px-3 text-[9px] font-bold uppercase tracking-[0.18em] text-[#C9A96E]">Eje Financiero</div>
                </div>
                <h2 className={`hlg a font-serif text-[clamp(34px,4.5vw,68px)] leading-[0.93] tracking-[-0.03em] font-medium mb-4 transition-all duration-700 ease-out-custom delay-200 ${activeSlide === 12 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  Administración de<br/><em className="italic text-[#C9A96E] font-serif">Edificios.</em>
                </h2>
                <p className={`bod a text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82] text-[#F7F3ED]/60 mb-5 transition-all duration-700 ease-out-custom delay-300 ${activeSlide === 12 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  Mantenemos y revalorizamos sus activos inmobiliarios a través de una gestión integral que cubre desde las finanzas hasta el mantenimiento preventivo.
                </p>
                <div className={`a flex flex-col gap-2 transition-all duration-700 ease-out-custom delay-400 ${activeSlide === 12 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  <div className="flex gap-3 items-start"><div className="w-[5px] h-[5px] rounded-full bg-[#C9A96E] shrink-0 mt-2"></div><div className="text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82]"><span className="font-semibold text-[#F7F3ED]">Gestión financiera</span></div></div>
                  <div className="flex gap-3 items-start"><div className="w-[5px] h-[5px] rounded-full bg-[#C9A96E] shrink-0 mt-2"></div><div className="text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82]"><span className="font-semibold text-[#F7F3ED]">Mantenimientos preventivos</span></div></div>
                  <div className="flex gap-3 items-start"><div className="w-[5px] h-[5px] rounded-full bg-[#C9A96E] shrink-0 mt-2"></div><div className="text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82]"><span className="font-semibold text-[#F7F3ED]">Contratos de inquilinato</span></div></div>
                  <div className="flex gap-3 items-start"><div className="w-[5px] h-[5px] rounded-full bg-[#C9A96E] shrink-0 mt-2"></div><div className="text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82]"><span className="font-semibold text-[#F7F3ED]">Reglamento de inquilinato</span></div></div>
                  <div className="flex gap-3 items-start"><div className="w-[5px] h-[5px] rounded-full bg-[#C9A96E] shrink-0 mt-2"></div><div className="text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82]"><span className="font-semibold text-[#F7F3ED]">Gestión del personal</span></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>

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

        {/* Slide 17 - Portafolio */}
        <div className={`slide absolute inset-0 transition-all duration-500 ease-out-custom ${activeSlide === 16 ? 'opacity-100 translate-x-0 pointer-events-auto' : activeSlide > 16 ? 'opacity-0 -translate-x-16 pointer-events-none' : 'opacity-0 translate-x-16 pointer-events-none'}`}>
          <div className="orb absolute rounded-full blur-[90px] pointer-events-none animate-o2" style={{ width: '700px', height: '700px', background: 'rgba(201,169,110,.05)', bottom: '-28%', right: '-18%' }}></div>
          <div className="grain absolute inset-0 opacity-[0.025] z-[2] pointer-events-none mix-blend-overlay"></div>
          
          <div className="si relative z-10 h-full w-full px-6 md:px-20 flex flex-col justify-center overflow-y-auto no-scrollbar py-24 md:py-0">
            <div className={`ep a inline-flex items-center gap-2 bg-[#080705]/75 border border-[#C9A96E]/10 rounded-full py-1.5 px-4 backdrop-blur-md mb-3.5 w-fit transition-all duration-700 ease-out-custom delay-100 ${activeSlide === 16 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] shrink-0"></span>
              <span className="text-[9px] font-bold uppercase tracking-[0.26em] text-[#C9A96E]">Portafolio de propiedades</span>
            </div>
            <h2 className={`hlg a font-serif text-[clamp(34px,4.5vw,68px)] leading-[0.93] tracking-[-0.03em] font-medium mb-2 transition-all duration-700 ease-out-custom delay-200 ${activeSlide === 16 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Operamos en todos los<br/><em className="italic text-[#C9A96E] font-serif">segmentos</em> del mercado.
            </h2>
            <p className={`bod a text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82] text-[#F7F3ED]/60 max-w-[480px] mb-6 transition-all duration-700 ease-out-custom delay-300 ${activeSlide === 16 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Desde el primer departamento de una familia hasta el portafolio de activos de una corporación. Cada tipo de propiedad tiene su lógica — y Arqentia la conoce.
            </p>
            
            <div className={`a flex flex-col gap-2.5 max-w-[820px] transition-all duration-700 ease-out-custom delay-400 ${activeSlide === 16 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-4 flex gap-4 items-center transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                <div className="w-11 h-11 rounded-xl bg-[#C9A96E]/10 border border-[#C9A96E]/20 flex items-center justify-center text-[#C9A96E] shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                </div>
                <div className="flex-1">
                  <div className="font-serif text-[16px] font-semibold text-[#F7F3ED] mb-0.5">Residencial</div>
                  <div className="text-[clamp(11px,0.9vw,13px)] font-light leading-[1.72] text-[#F7F3ED]/60">Apartamentos, casas, conjuntos cerrados y villas. Segmento medio, medio-alto y alto. Quito y sus valles.</div>
                </div>
                <div className="font-serif text-[18px] text-[#C9A96E]/35 font-semibold shrink-0">01</div>
              </div>
              <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-4 flex gap-4 items-center transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                <div className="w-11 h-11 rounded-xl bg-[#C9A96E]/10 border border-[#C9A96E]/20 flex items-center justify-center text-[#C9A96E] shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>
                </div>
                <div className="flex-1">
                  <div className="font-serif text-[16px] font-semibold text-[#F7F3ED] mb-0.5">Comercial</div>
                  <div className="text-[clamp(11px,0.9vw,13px)] font-light leading-[1.72] text-[#F7F3ED]/60">Locales en planta baja, plazas comerciales y espacios en zonas de alto tráfico peatonal y vehicular.</div>
                </div>
                <div className="font-serif text-[18px] text-[#C9A96E]/35 font-semibold shrink-0">02</div>
              </div>
              <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-4 flex gap-4 items-center transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                <div className="w-11 h-11 rounded-xl bg-[#C9A96E]/10 border border-[#C9A96E]/20 flex items-center justify-center text-[#C9A96E] shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
                </div>
                <div className="flex-1">
                  <div className="font-serif text-[16px] font-semibold text-[#F7F3ED] mb-0.5">Oficinas y Corporativo</div>
                  <div className="text-[clamp(11px,0.9vw,13px)] font-light leading-[1.72] text-[#F7F3ED]/60">Oficinas clase A, pisos completos y espacios diseñados para empresas en crecimiento o reubicación.</div>
                </div>
                <div className="font-serif text-[18px] text-[#C9A96E]/35 font-semibold shrink-0">03</div>
              </div>
              <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-4 flex gap-4 items-center transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                <div className="w-11 h-11 rounded-xl bg-[#C9A96E]/10 border border-[#C9A96E]/20 flex items-center justify-center text-[#C9A96E] shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div className="flex-1">
                  <div className="font-serif text-[16px] font-semibold text-[#F7F3ED] mb-0.5">Terrenos y Desarrollo</div>
                  <div className="text-[clamp(11px,0.9vw,13px)] font-light leading-[1.72] text-[#F7F3ED]/60">Lotes en zonas de expansión urbana, suelo para proyectos residenciales y comerciales en Quito y valles.</div>
                </div>
                <div className="font-serif text-[18px] text-[#C9A96E]/35 font-semibold shrink-0">04</div>
              </div>
            </div>
          </div>
        </div>

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

        {/* Slide 19 - Trayectoria */}
        <div className={`slide absolute inset-0 transition-all duration-500 ease-out-custom ${activeSlide === 18 ? 'opacity-100 translate-x-0 pointer-events-auto' : activeSlide > 18 ? 'opacity-0 -translate-x-16 pointer-events-none' : 'opacity-0 translate-x-16 pointer-events-none'}`}>
          <div className="orb absolute rounded-full blur-[90px] pointer-events-none animate-o1" style={{ width: '600px', height: '600px', background: 'rgba(201,169,110,.05)', bottom: '-25%', right: '-15%' }}></div>
          <div className="grain absolute inset-0 opacity-[0.025] z-[2] pointer-events-none mix-blend-overlay"></div>
          
          <div className="si relative z-10 h-full w-full px-6 md:px-20 flex flex-col justify-center gap-[clamp(20px,3vh,34px)] overflow-y-auto no-scrollbar py-24 md:py-0">
            <div>
              <div className={`ep a inline-flex items-center gap-2 bg-[#080705]/75 border border-[#C9A96E]/10 rounded-full py-1.5 px-4 backdrop-blur-md mb-3.5 w-fit transition-all duration-700 ease-out-custom delay-100 ${activeSlide === 18 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] shrink-0"></span>
                <span className="text-[9px] font-bold uppercase tracking-[0.26em] text-[#C9A96E]">Trayectoria institucional</span>
              </div>
              <h2 className={`hlg a font-serif text-[clamp(34px,4.5vw,68px)] leading-[0.93] tracking-[-0.03em] font-medium mb-2.5 transition-all duration-700 ease-out-custom delay-200 ${activeSlide === 18 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                Experiencia forjada en las<br/><em className="italic text-[#C9A96E] font-serif">firmas más exigentes</em> del sector.
              </h2>
              <p className={`bod a text-[clamp(13px,1.1vw,15.5px)] font-light leading-[1.82] text-[#F7F3ED]/60 max-w-[540px] transition-all duration-700 ease-out-custom delay-300 ${activeSlide === 18 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                El equipo de Arqentia ha liderado operaciones e iniciativas dentro de las constructoras y firmas inmobiliarias más reconocidas del Ecuador durante más de una década.
              </p>
            </div>
            
            <div className={`a grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-[clamp(6px,0.8vw,12px)] max-w-[1100px] transition-all duration-700 ease-out-custom delay-400 ${activeSlide === 18 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-[clamp(14px,1.8vw,20px)_clamp(6px,1vw,12px)] text-center transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                <div className="w-8 h-8 rounded-lg bg-[#C9A96E]/10 flex items-center justify-center text-[#C9A96E] shrink-0 mx-auto mb-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
                </div>
                <div className="text-[13px] font-semibold text-[#F7F3ED] mb-1">Const. GLS</div>
                <div className="text-[11px] text-[#F7F3ED]/40">Desarrollo</div>
              </div>
              <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-[clamp(14px,1.8vw,20px)_clamp(6px,1vw,12px)] text-center transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                <div className="w-8 h-8 rounded-lg bg-[#C9A96E]/10 flex items-center justify-center text-[#C9A96E] shrink-0 mx-auto mb-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/></svg>
                </div>
                <div className="text-[13px] font-semibold text-[#F7F3ED] mb-1">RE/MAX</div>
                <div className="text-[11px] text-[#F7F3ED]/40">Corretaje</div>
              </div>
              <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-[clamp(14px,1.8vw,20px)_clamp(6px,1vw,12px)] text-center transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                <div className="w-8 h-8 rounded-lg bg-[#C9A96E]/10 flex items-center justify-center text-[#C9A96E] shrink-0 mx-auto mb-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/></svg>
                </div>
                <div className="text-[13px] font-semibold text-[#F7F3ED] mb-1">Alpha Builders</div>
                <div className="text-[11px] text-[#F7F3ED]/40">Construcción</div>
              </div>
              <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-[clamp(14px,1.8vw,20px)_clamp(6px,1vw,12px)] text-center transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                <div className="w-8 h-8 rounded-lg bg-[#C9A96E]/10 flex items-center justify-center text-[#C9A96E] shrink-0 mx-auto mb-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                </div>
                <div className="text-[13px] font-semibold text-[#F7F3ED] mb-1">Romero<br/>y Pazmiño</div>
                <div className="text-[11px] text-[#F7F3ED]/40">Legal</div>
              </div>
              <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-[clamp(14px,1.8vw,20px)_clamp(6px,1vw,12px)] text-center transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                <div className="w-8 h-8 rounded-lg bg-[#C9A96E]/10 flex items-center justify-center text-[#C9A96E] shrink-0 mx-auto mb-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
                </div>
                <div className="text-[13px] font-semibold text-[#F7F3ED] mb-1">Place and Home</div>
                <div className="text-[11px] text-[#F7F3ED]/40">Residencial</div>
              </div>
              <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-[clamp(14px,1.8vw,20px)_clamp(6px,1vw,12px)] text-center transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                <div className="w-8 h-8 rounded-lg bg-[#C9A96E]/10 flex items-center justify-center text-[#C9A96E] shrink-0 mx-auto mb-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/></svg>
                </div>
                <div className="text-[13px] font-semibold text-[#F7F3ED] mb-1">Const. SMC</div>
                <div className="text-[11px] text-[#F7F3ED]/40">Construcción</div>
              </div>
              <div className="card bg-[#080705]/80 border border-[#C9A96E]/10 rounded-[15px] backdrop-blur-md p-[clamp(14px,1.8vw,20px)_clamp(6px,1vw,12px)] text-center transition-all hover:-translate-y-1 hover:border-[#C9A96E]/20">
                <div className="w-8 h-8 rounded-lg bg-[#C9A96E]/10 flex items-center justify-center text-[#C9A96E] shrink-0 mx-auto mb-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
                <div className="text-[13px] font-semibold text-[#F7F3ED] mb-1">Jade</div>
                <div className="text-[11px] text-[#F7F3ED]/40">Premium</div>
              </div>
            </div>
            
            <div className={`a w-full overflow-hidden transition-all duration-700 ease-out-custom delay-500 ${activeSlide === 18 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <div className="flex w-max animate-mq hover:[animation-play-state:paused]">
                {/* Double the content for seamless loop */}
                {[...Array(2)].map((_, i) => (
                  <React.Fragment key={i}>
                    <div className="flex items-center gap-3.5 px-6 whitespace-nowrap font-serif text-[17px] text-[#F7F3ED]/60"><span>Compra y Venta</span><span className="text-[#C9A96E] text-[18px]">·</span></div>
                    <div className="flex items-center gap-3.5 px-6 whitespace-nowrap font-serif text-[17px] text-[#F7F3ED]/60"><span>Arrendamiento</span><span className="text-[#C9A96E] text-[18px]">·</span></div>
                    <div className="flex items-center gap-3.5 px-6 whitespace-nowrap font-serif text-[17px] text-[#F7F3ED]/60"><span>Inversión Inmobiliaria</span><span className="text-[#C9A96E] text-[18px]">·</span></div>
                    <div className="flex items-center gap-3.5 px-6 whitespace-nowrap font-serif text-[17px] text-[#F7F3ED]/60"><span>Construcción</span><span className="text-[#C9A96E] text-[18px]">·</span></div>
                    <div className="flex items-center gap-3.5 px-6 whitespace-nowrap font-serif text-[17px] text-[#F7F3ED]/60"><span>Fiscalización</span><span className="text-[#C9A96E] text-[18px]">·</span></div>
                    <div className="flex items-center gap-3.5 px-6 whitespace-nowrap font-serif text-[17px] text-[#F7F3ED]/60"><span>Consultoría B2B</span><span className="text-[#C9A96E] text-[18px]">·</span></div>
                    <div className="flex items-center gap-3.5 px-6 whitespace-nowrap font-serif text-[17px] text-[#F7F3ED]/60"><span>Gestión Financiera</span><span className="text-[#C9A96E] text-[18px]">·</span></div>
                    <div className="flex items-center gap-3.5 px-6 whitespace-nowrap font-serif text-[17px] text-[#F7F3ED]/60"><span>Quito & Valles</span><span className="text-[#C9A96E] text-[18px]">·</span></div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>

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
        </div>

      </div>
    </div>
  );
};

export default Arqentia;