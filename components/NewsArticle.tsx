
'use client';

import { useState } from 'react';

export default function NewsArticle() {
  const [isShared, setIsShared] = useState(false);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = "🔥 SCANDALO ESPLOSIVO! Deputato vince 745.000€ e collega lo aggredisce!";
    
    switch(platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
        break;
    }
    
    setIsShared(true);
    setTimeout(() => setIsShared(false), 2000);
  };

  const handleCasinoLink = () => {
    window.open('https://casino-sanremo.it', '_blank');
  };

  return (
    <article className="bg-white">
      <div className="mb-6">
        <div className="text-red-600 text-sm font-bold mb-2">🔴 ESCLUSIVO</div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          🔥 SCANDALO ESPLOSIVO: Rizzo vince 745.000€ al casinò, De Luca lo aggredisce per invidia!
        </h1>
        <div className="text-gray-600 text-lg font-semibold mb-4">
          💥 SHOCK TOTALE alla Camera: "Non è possibile mentre gli italiani soffrono!" - Indagine parlamentare urgente
        </div>
        <div className="flex items-center text-gray-500 text-sm space-x-4 mb-6">
          <span>📅 Oggi, 19:45</span>
          <span>👁️ 47.892 visualizzazioni</span>
          <span>💬 312 commenti</span>
          <span className="text-red-600 font-bold animate-pulse">🔴 AGGIORNAMENTI LIVE</span>
        </div>
      </div>

      <div className="mb-8 relative">
        <img 
          src="https://static.readdy.ai/image/96a9acb2a8bbe4aeb359d4070c3df1c3/bf42378b4abef64d842477dfa1c0a57a.jfif"
          alt="Scontro violento alla Camera dei Deputati"
          className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg object-top"
        />
        <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-lg animate-pulse">
          <div className="text-xl font-bold">💰 745.000€</div>
          <div className="text-sm">VINCITA RECORD!</div>
        </div>
        <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded">
          <span className="text-xs">🔴 DIRETTA</span>
        </div>
        <p className="text-gray-600 text-sm mt-2 italic">
          Il momento dell'aggressione: De Luca si scaglia contro Rizzo dopo aver saputo della vincita milionaria
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
          <p className="text-red-800 font-bold">
            ⚠️ ULTIMA ORA: La Procura di Roma apre un fascicolo per violenza in luogo pubblico
          </p>
        </div>

        <p className="text-lg leading-relaxed mb-6">
          <strong>ROMA</strong> - Scandalo senza precedenti alla Camera dei Deputati! Il deputato della Lega <strong>Marco Rizzo</strong> ha scatenato una furiosa reazione del collega pentastellato <strong>Antonio De Luca</strong> dopo aver rivelato di aver vinto <strong>745.000 euro</strong> in una sola notte al celebre casinò online.
        </p>

        <p className="leading-relaxed mb-6">
          La vicenda è esplosa questa mattina quando Rizzo, visibilmente euforico, ha raccontato ai colleghi della sua incredibile fortuna. "Non riesco ancora a crederci," ha dichiarato il deputato. "Ho iniziato con 200 euro sulla <strong>roulette live</strong> e in poche ore ho moltiplicato tutto!"
        </p>

        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-6">
          <p className="text-blue-800 font-semibold">
            💰 La vincita record è avvenuta su una delle piattaforme di casinò online più prestigiose d'Italia, dove migliaia di giocatori ogni giorno tentano la fortuna con la roulette europea e i giochi dal vivo.
          </p>
        </div>

        <p className="leading-relaxed mb-6">
          La reazione di De Luca è stata immediata e violenta: "Vergogna! Mentre le famiglie italiane non arrivano a fine mese, lei si diverte a sperperare!" ha urlato prima di lanciarsi fisicamente contro il collega. Le immagini dell'aggressione hanno già fatto il giro del web.
        </p>

        <p className="leading-relaxed mb-6">
          Il presidente della Camera Lorenzo Fontana ha immediatamente sospeso i lavori e convocato d'urgenza l'Ufficio di Presidenza. "Comportamenti del genere sono inaccettabili," ha tuonato, mentre la sicurezza separava i due deputati.
        </p>

        <div className="bg-green-50 border border-green-200 p-4 rounded-lg mb-6">
          <h3 className="font-bold text-green-800 mb-2">🎰 Come ha fatto Rizzo a vincere 745.000€?</h3>
          <p className="text-green-700 text-sm">
            Secondo fonti vicine al deputato, la vincita è avvenuta giocando alla <strong>roulette live</strong> su una delle piattaforme di casinò online più affidabili. Rizzo ha puntato strategicamente sui numeri pieni, sfruttando le promozioni e i bonus disponibili.
          </p>
          <button 
            onClick={handleCasinoLink}
            className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors text-sm font-bold whitespace-nowrap cursor-pointer"
          >
            🎰 Scopri il Casinò della Vincita →
          </button>
        </div>

        <p className="leading-relaxed mb-6">
          L'episodio ha scatenato un putiferio sui social media. L'hashtag #CasinoGate è esploso su Twitter con oltre 50.000 tweet in poche ore. I cittadini si dividono tra chi condanna il comportamento di entrambi i deputati e chi difende il diritto al gioco.
        </p>

        <p className="leading-relaxed mb-6">
          "Ho iniziato per caso," racconta Rizzo in esclusiva. "Ero a casa, annoiato, e ho deciso di provare il <strong>casinò live online</strong>. Mai avrei immaginato di vincere una cifra simile! È stata un'emozione incredibile vedere i numeri che uscivano."
        </p>

        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-6">
          <p className="text-yellow-800 font-semibold">
            ⚡ CURIOSITÀ: Il casinò online dove ha vinto Rizzo è considerato uno dei più sicuri e generosi d'Italia, con payout del 97% e bonus fino a 1000€ per i nuovi iscritti.
          </p>
        </div>

        <p className="leading-relaxed mb-6">
          Il caso ha riacceso il dibattito sul gioco online in Italia. Secondo gli ultimi dati ADM, sempre più italiani si stanno avvicinando ai <strong>casinò digitali</strong>, attratti dalla comodità di giocare da casa e dalle vincite record come quella di Rizzo.
        </p>

        <p className="leading-relaxed mb-6">
          "Il gioco online è il futuro," commenta un esperto del settore. "Piattaforme sicure e regolamentate offrono le stesse emozioni dei casinò tradizionali, ma con maggiore comodità e spesso con payout più alti."
        </p>

        <div className="border border-gray-300 p-4 rounded-lg mb-6 text-center">
          <h3 className="font-bold text-gray-800 mb-2">🎯 Vuoi provare l'emozione della roulette?</h3>
          <p className="text-gray-600 text-sm mb-3">
            Gioca responsabilmente sulla stessa piattaforma dove Rizzo ha vinto 745.000€
          </p>
          <button 
            onClick={handleCasinoLink}
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-bold whitespace-nowrap cursor-pointer"
          >
            🎰 PROVA ORA - BONUS 500€ →
          </button>
          <p className="text-xs text-gray-500 mt-2">*Gioco riservato ai maggiorenni. Può causare dipendenza.</p>
        </div>

        <p className="leading-relaxed mb-6">
          Intanto De Luca rischia ora una sospensione di 30 giorni per l'aggressione fisica. La commissione disciplinare si riunirà domani per decidere le sanzioni. "Non me ne pento," ha dichiarato. "È inaccettabile che un parlamentare si vanti di vincite milionarie."
        </p>

        <p className="leading-relaxed mb-6">
          La vicenda ha attirato l'attenzione internazionale. Media europei stanno seguendo la storia, evidenziando come il caso italiano mostri la crescente popolarità del <strong>gioco online</strong> anche tra i politici.
        </p>

        <p className="leading-relaxed mb-6">
          Rizzo, dal canto suo, ha annunciato che donerà 50.000 euro in beneficenza. "Voglio dimostrare che la fortuna può essere condivisa," ha dichiarato, cercando di placare le polemiche.
        </p>

        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-6">
          <h3 className="font-bold text-blue-800 mb-2">💡 I segreti delle vincite online</h3>
          <ul className="text-blue-700 text-sm space-y-1">
            <li>• Scegli casinò con licenza ADM</li>
            <li>• Approfitta dei bonus di benvenuto</li>
            <li>• Gioca alla roulette live per maggiori emozioni</li>
            <li>• Gestisci sempre il budget responsabilmente</li>
          </ul>
        </div>

        <p className="leading-relaxed mb-6">
          L'opposizione chiede ora trasparenza totale sulle abitudini di gioco dei parlamentari. "Vogliamo sapere quanti altri deputati frequentano casinò online," ha dichiarato la capogruppo PD Chiara Braga.
        </p>

        <p className="leading-relaxed mb-6">
          Il fenomeno del <strong>gioco online</strong> continua a crescere in Italia. Sempre più persone scoprono l'emozione di giocare comodamente da casa, con la possibilità di vincite straordinarie come quella di Rizzo.
        </p>

        <p className="leading-relaxed mb-6">
          Per chi volesse seguire le orme del deputato fortunato, è importante scegliere piattaforme affidabili e giocare sempre responsabilmente. Il caso di Rizzo dimostra che la fortuna può sorridere a chiunque, anche con piccole puntate iniziali.
        </p>

        <div className="bg-gradient-to-r from-yellow-400 to-red-500 p-6 rounded-lg mb-6 text-center text-white">
          <h3 className="font-bold text-xl mb-2">🏆 VINCITA RECORD COME RIZZO!</h3>
          <p className="mb-4">Registrati ora e ricevi 1000€ di bonus + 200 giri gratis</p>
          <button 
            onClick={handleCasinoLink}
            className="bg-white text-red-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors font-bold text-lg whitespace-nowrap cursor-pointer"
          >
            🎰 REGISTRATI GRATIS →
          </button>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6 mt-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <span className="text-gray-600 text-sm">Condividi la notizia:</span>
            <div className="flex space-x-2">
              <button 
                onClick={() => handleShare('facebook')}
                className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
              >
                📘 Facebook
              </button>
              <button 
                onClick={() => handleShare('twitter')}
                className="bg-blue-400 text-white px-3 py-1 rounded text-sm hover:bg-blue-500 transition-colors whitespace-nowrap cursor-pointer"
              >
                🐦 Twitter
              </button>
              <button 
                onClick={() => handleShare('whatsapp')}
                className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition-colors whitespace-nowrap cursor-pointer"
              >
                💬 WhatsApp
              </button>
            </div>
          </div>
          {isShared && (
            <span className="text-green-600 text-sm animate-pulse">✅ Condiviso con successo!</span>
          )}
        </div>
      </div>
    </article>
  );
}
