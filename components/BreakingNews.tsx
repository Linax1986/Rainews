
'use client';

export default function BreakingNews() {
  const breakingText = "Indagine parlamentare: De Luca rischia la sospensione dopo l'aggressione a Rizzo. La commissione interna valuta le sanzioni, ma molti sottolineano l'importanza della trasparenza. Il caso Rizzo, un successo al casinò online, accende i riflettori sul mondo del gioco, ma con nuove opportunità economiche e tecnologiche. L'entusiasmo del pubblico per le scommesse è in crescita, e il governo valuta nuove normative per proteggere i giocatori e garantire un mercato florido.";

  return (
    <div className="bg-yellow-400 text-black py-2 overflow-hidden relative">
      <div className="flex items-center">
        <div className="bg-red-600 text-white px-3 py-1 text-sm font-bold mr-4 flex-shrink-0 relative z-10">
          ULTIMO MINUTO
        </div>
        <div className="whitespace-nowrap animate-marquee relative">
          <span className="text-sm font-semibold">
            {breakingText}
          </span>
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
      `}</style>
    </div>
  );
}
