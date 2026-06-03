import { Link } from "react-router-dom";

export const PageLayout = ({ 
  eyebrow, 
  titlePart1, 
  titlePart2, 
  description, 
  stats,
  bgImage
}: { 
  eyebrow: string;
  titlePart1: string;
  titlePart2: string;
  description: string;
  stats: { num: string; label: string }[];
  bgImage: string;
}) => {
  return (
    <main className="min-h-[100dvh] flex flex-col pt-24 pb-12">
      <section className="relative w-full h-[40dvh] min-h-[300px] mb-12 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${bgImage}')` }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e0f]/50 via-[#0e0e0f]/20 to-[#0e0e0f]"></div>
        <div className="absolute bottom-0 left-0 w-full px-6 md:px-12 max-w-[1100px] mx-auto left-1/2 -translate-x-1/2 pb-8">
          <p className="font-sans text-[0.75rem] font-light tracking-[0.15em] text-[#c9a96e] uppercase mb-4 opacity-90">{eyebrow}</p>
          <h1 className="font-serif text-[clamp(3rem,6vw,5.5rem)] font-light leading-[1.05] tracking-tight text-[#f5f2ec]">
            {titlePart1}<br />
            <em className="italic text-[#c9a96e] pr-2">{titlePart2}</em>
          </h1>
        </div>
      </section>

      <div className="px-6 md:px-12 max-w-[1100px] mx-auto w-full flex-1 flex flex-col">
        <Link to="/" className="inline-flex items-center gap-2 font-sans text-[0.8rem] text-[#fdfbf7]/50 no-underline hover:text-[#fdfbf7] transition-colors duration-300 w-fit mb-10 group">
          <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
          <span>Volver al inicio</span>
        </Link>

        <p className="font-sans text-[1.1rem] md:text-[1.25rem] font-light leading-[1.6] text-[#fdfbf7]/80 max-w-[700px] mb-16">
          {description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 mt-auto border-t border-[#c9a96e]/15 pt-10">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col gap-2">
              <span className="font-serif text-[2.5rem] md:text-[3.5rem] font-light italic leading-none text-[#c9a96e]">{stat.num}</span>
              <span className="font-sans text-[0.85rem] font-light tracking-[0.05em] text-[#fdfbf7]/60 uppercase">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
