import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export const Preloader = () => {
  const comp = useRef<HTMLDivElement>(null);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsComplete(true);
        }
      });

      // 1. Initial setup
      tl.set(".preloader-wordmark", { clipPath: "inset(0 0 100% 0)" });

      // 2. Entrance animation
      tl.from([".preloader-footer-left", ".preloader-counter"], {
        autoAlpha: 0,
        duration: 0.6,
        ease: "power2.out"
      })
      .from(".preloader-line", {
        scaleX: 0,
        duration: 0.8,
        ease: "power4.inOut"
      }, "<")

      // 3. Logo and Text
      .from(".preloader-mark", { 
        autoAlpha: 0, 
        scale: 0.5, 
        duration: 1.0, 
        ease: "back.out(1.7)" 
      }, "-=0.6")
      .to(".preloader-wordmark", { 
        clipPath: "inset(0 0 0% 0)", 
        duration: 0.8, 
        ease: "power3.inOut" 
      }, "-=0.8")

      // 4. Progress (Bars and Counter)
      .to(".preloader-counter-num", {
        innerText: 100,
        duration: 1.5,
        snap: { innerText: 1 },
        ease: "none"
      }, "-=0.5")
      .to(".preloader-bar", {
        scaleX: 1,
        stagger: 0.05,
        duration: 1.2,
        ease: "power2.inOut"
      }, "<")

      // 5. Exit (Reveal)
      .to(".preloader-curtain", {
        scaleY: 1,
        duration: 0.5,
        ease: "power4.inOut"
      }, "+=0.2")
      .to(comp.current, {
        yPercent: -100,
        duration: 0.7,
        ease: "power4.inOut"
      }, "-=0.2");

    }, comp);

    return () => ctx.revert();
  }, []);

  if (isComplete) return null;

  return (
    <div ref={comp} className="fixed inset-0 bg-[#0e0e0f] z-[9999] flex flex-col items-center justify-center overflow-hidden font-sans">
      <div className="preloader-line absolute top-1/2 left-0 w-full h-[1px] bg-[#c9a96e]/15 scale-x-100 z-[1]" />
      
      <div className="preloader-logo absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-[2]">
        <div className="preloader-mark w-[72px] h-[72px] bg-[#c9a96e] rounded-full flex items-center justify-center p-3 shadow-[0_0_40px_rgba(201,169,110,0.1)] relative z-[3]">
          <img src="https://cdn.arqentia.group/Marca/NEGRO.png" alt="Arqentia Logo" className="w-full h-full object-contain brightness-0" />
        </div>
        <div className="preloader-wordmark absolute top-[calc(100%+1.2rem)] text-[0.85rem] tracking-[0.5em] text-[#c9a96e] font-medium uppercase whitespace-nowrap">
          ARQENTIA GROUP
        </div>
      </div>

      <div className="preloader-footer-left absolute bottom-10 left-14 text-[0.65rem] tracking-[0.25em] text-[#f5f2ec]/30 uppercase z-[2]">
        GRUPO EMPRESARIAL
      </div>

      <div className="preloader-counter absolute bottom-10 right-14 text-[0.65rem] tracking-[0.25em] text-[#f5f2ec]/30 uppercase z-[2]">
        <span className="preloader-counter-num">0</span>%
      </div>

      <div className="preloader-bars absolute bottom-0 left-0 w-full h-[3px] flex gap-[1px] z-[2]">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="preloader-bar flex-1 h-full bg-[#c9a96e] origin-left opacity-60 scale-x-0" />
        ))}
      </div>

      <div className="preloader-curtain absolute inset-0 bg-[#c9a96e] origin-bottom scale-y-0 z-[5]" />
    </div>
  );
};
