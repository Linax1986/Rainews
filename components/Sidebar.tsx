
'use client';

export default function Sidebar() {
  const relatedNews = [
    {
      title: "Governo: Meloni sotto pressione dopo il caso Rizzo",
      time: "1 ora fa",
      link: "https://www.repubblica.it/politica/",
      image: "https://readdy.ai/api/search-image?query=Giorgia%20Meloni%20Italian%20Prime%20Minister%20serious%20expression%20government%20crisis%20political%20pressure%20news%20photography%20professional%20lighting&width=300&height=200&seq=meloni1&orientation=landscape"
    },
    {
      title: "Economia: Boom del gioco online, +340% in un anno", 
      time: "2 ore fa",
      link: "https://www.ilsole24ore.com/",
      image: "https://readdy.ai/api/search-image?query=Online%20gambling%20growth%20statistics%20charts%20Italian%20economy%20digital%20casino%20cards%20chips%20financial%20success%20news%20photography&width=300&height=200&seq=economy1&orientation=landscape"
    },
    {
      title: "Camera: Sospesi i lavori dopo la rissa Rizzo-De Luca",
      time: "3 ore fa", 
      link: "https://www.corriere.it/politica/",
      image: "https://readdy.ai/api/search-image?query=Italian%20Parliament%20Chamber%20of%20Deputies%20empty%20seats%20political%20crisis%20suspension%20news%20photography%20dramatic%20lighting&width=300&height=200&seq=parliament1&orientation=landscape"
    }
  ];

  const worldNews = [
    {
      title: "Monaco: Nuovo record al Casinò, vinti 12 milioni",
      time: "30 min fa",
      link: "https://www.euronews.com/",
      image: "https://readdy.ai/api/search-image?query=Monaco%20Monte%20Carlo%20casino%20luxury%20gambling%20roulette%20chips%20gold%20elegant%20interior%20news%20photography%20professional%20lighting&width=300&height=200&seq=monaco1&orientation=landscape"
    },
    {
      title: "Las Vegas: Jackpot da 50 milioni, cercano il vincitore",
      time: "1 ora fa",
      link: "https://www.cnn.com/",
      image: "https://readdy.ai/api/search-image?query=Las%20Vegas%20casino%20slot%20machines%20jackpot%20lights%20neon%20signs%20gambling%20excitement%20news%20photography%20dramatic%20lighting&width=300&height=200&seq=vegas1&orientation=landscape"
    },
    {
      title: "Macau: Turismo del gioco in forte ripresa",
      time: "2 ore fa",
      link: "https://www.bbc.com/",
      image: "https://readdy.ai/api/search-image?query=Macau%20casino%20skyline%20luxury%20hotels%20gambling%20tourism%20recovery%20Asia%20news%20photography%20professional%20lighting&width=300&height=200&seq=macau1&orientation=landscape"
    }
  ];

  return (
    <aside className="space-y-8">
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-red-600 pb-2">
          🔥 NOTIZIE CORRELATE
        </h3>
        <div className="space-y-4">
          {relatedNews.map((news, index) => (
            <a 
              key={index} 
              href={news.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex space-x-3 cursor-pointer hover:bg-white p-2 rounded transition-colors block"
            >
              <img 
                src={news.image}
                alt={news.title}
                className="w-20 h-16 object-cover rounded flex-shrink-0 object-top"
              />
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 hover:text-red-600 transition-colors">
                  {news.title}
                </h4>
                <p className="text-xs text-gray-500 mt-1">{news.time}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-blue-600 pb-2">
          🌍 GIOCO NEL MONDO
        </h3>
        <div className="space-y-4">
          {worldNews.map((news, index) => (
            <a 
              key={index}
              href={news.link}
              target="_blank"
              rel="noopener noreferrer" 
              className="flex space-x-3 cursor-pointer hover:bg-white p-2 rounded transition-colors block"
            >
              <img 
                src={news.image}
                alt={news.title}
                className="w-20 h-16 object-cover rounded flex-shrink-0 object-top"
              />
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 hover:text-blue-600 transition-colors">
                  {news.title}
                </h4>
                <p className="text-xs text-gray-500 mt-1">{news.time}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="bg-red-50 p-6 rounded-lg">
        <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-red-600 pb-2">
          🔴 DIRETTE
        </h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold">Camera dei Deputati</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold">Processo Rizzo-De Luca</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold">Borsa Milano</span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-red-600 to-purple-700 p-6 rounded-lg text-white">
        <h3 className="text-lg font-bold mb-4">🎰 PROVA LA FORTUNA!</h3>
        <p className="text-sm mb-4">Gioca dove ha vinto Rizzo i suoi 745.000€</p>
        <div className="space-y-3">
          <button className="w-full bg-yellow-400 text-black py-3 px-4 rounded-lg font-bold text-sm hover:bg-yellow-300 transition-colors whitespace-nowrap">
            🏆 BONUS 1000€ + GIRI GRATIS
          </button>
          <button className="w-full bg-white text-red-600 py-2 px-4 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors whitespace-nowrap">
            📱 Gioca dal Cellulare
          </button>
        </div>
        <p className="text-xs mt-3 opacity-80">ADM - Gioco responsabile +18</p>
      </div>

      <div className="hidden lg:block bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-lg text-white">
        <h3 className="text-lg font-bold mb-4">📱 App Rai News</h3>
        <p className="text-sm mb-4">Tutte le notizie sempre aggiornate</p>
        <div className="space-y-2">
          <button className="w-full bg-white text-blue-600 py-2 px-4 rounded font-semibold text-sm hover:bg-gray-100 transition-colors whitespace-nowrap">
            📱 App Store
          </button>
          <button className="w-full bg-white text-blue-600 py-2 px-4 rounded font-semibold text-sm hover:bg-gray-100 transition-colors whitespace-nowrap">
            🤖 Google Play
          </button>
        </div>
      </div>
    </aside>
  );
}
