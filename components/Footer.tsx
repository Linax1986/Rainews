
'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="https://static.readdy.ai/image/96a9acb2a8bbe4aeb359d4070c3df1c3/5cdc8d7e60676c432a10f0e3c6030f93.jfif"
                alt="Rai News"
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold">News 24</span>
            </div>
            <p className="text-gray-400 text-sm">
              Il tuo punto di riferimento per l'informazione in tempo reale
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Sezioni</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.rainews.it/tgr/tagesschau" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Politica</a></li>
              <li><a href="https://www.ilsole24ore.com/" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Economia</a></li>
              <li><a href="https://www.repubblica.it/cronaca/" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Cronaca</a></li>
              <li><a href="https://www.gazzetta.it/" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Sport</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Servizi</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.ilmeteo.it/" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Meteo</a></li>
              <li><a href="https://www.autostrade.it/web/guest" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Traffico</a></li>
              <li><a href="https://www.borsaitaliana.it/" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Borsa</a></li>
              <li><a href="https://www.rainews.it/mobile" className="text-gray-400 hover:text-white transition-colors cursor-pointer">App Mobile</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contatti</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📧 redazione@rainews.it</li>
              <li>📞 +39 06 38781</li>
              <li>📍 Roma, Via Teulada 66</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Rai News 24. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}
