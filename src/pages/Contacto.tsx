import { Navbar } from "@/components/Navbar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Contacto = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://api.farocreativo.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0e0e0f] text-[#f5f2ec] pt-32 pb-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mt-12">
        {/* Left Column: Info & Arqentia Button */}
        <div className="flex flex-col gap-16">
          <div>
            <div className="font-sans text-[0.65rem] tracking-[0.22em] text-[#c9a96e] uppercase opacity-85 mb-4">
              Conexión
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-light mb-8 text-[#f5f2ec] leading-tight">
              Contacto <br />
              <span className="italic text-[#c9a96e]">Exclusivo</span>
            </h1>
            <p className="font-sans text-[0.95rem] font-light text-[#fdfbf7]/70 leading-[1.8] max-w-md">
              Arqentia Group es un ecosistema empresarial diseñado para conectar capital, ingeniería y estrategia. Nuestra visión trasciende la consultoría tradicional, ofreciendo soluciones integrales de alto valor para llevar su organización al siguiente nivel.
            </p>
          </div>

          <div className="p-8 border border-[#c9a96e]/20 bg-[#c9a96e]/[0.02] relative overflow-hidden group">
            <div className="absolute inset-0 bg-[#c9a96e]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out-custom"></div>
            <h3 className="font-serif text-2xl text-[#c9a96e] mb-3 relative z-10">
              Descubra Arqentia
            </h3>
            <p className="font-sans text-sm text-[#fdfbf7]/60 mb-8 relative z-10 leading-relaxed">
              Conozca más sobre nuestra filosofía, trayectoria y el equipo directivo detrás de nuestro grupo empresarial.
            </p>
            <button 
              onClick={() => navigate('/arqentia')}
              className="relative z-10 inline-flex items-center gap-2 font-sans text-[0.75rem] tracking-[0.15em] uppercase text-[#f5f2ec] border-b border-[#c9a96e]/50 pb-1 hover:text-[#c9a96e] transition-colors"
            >
              <span>Arqentia</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="flex flex-col justify-center w-full min-h-[600px]">
          <iframe
            src="https://api.farocreativo.com/widget/form/afooL4O9nTtS532x4aHr"
            style={{ width: "100%", height: "100%", minHeight: "600px", border: "none", borderRadius: "0px" }}
            id="inline-afooL4O9nTtS532x4aHr" 
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Formulario CONTACTO ARQENTIA"
            data-height="1344"
            data-layout-iframe-id="inline-afooL4O9nTtS532x4aHr"
            data-form-id="afooL4O9nTtS532x4aHr"
            title="Formulario CONTACTO ARQENTIA"
          />
        </div>
      </div>
    </div>
  );
};

export default Contacto;
