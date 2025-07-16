
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [weather, setWeather] = useState({ temp: '18°C', condition: 'Soleggiato' });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeOptions: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Europe/Rome'
      };
      const dateOptions: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'Europe/Rome'
      };
      
      setCurrentTime(now.toLocaleTimeString('it-IT', timeOptions));
      setCurrentDate(now.toLocaleDateString('it-IT', dateOptions));
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-4">
            <img 
              src="https://static.readdy.ai/image/96a9acb2a8bbe4aeb359d4070c3df1c3/5cdc8d7e60676c432a10f0e3c6030f93.jfif"
              alt="Rai News"
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold">News 24</span>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <a href="https://www.rainews.it/tgr/tagesschau" className="hover:text-blue-200 transition-colors cursor-pointer">Politica</a>
            <a href="https://www.ilsole24ore.com/" className="hover:text-blue-200 transition-colors cursor-pointer">Economia</a>
            <a href="https://www.repubblica.it/cronaca/" className="hover:text-blue-200 transition-colors cursor-pointer">Cronaca</a>
            <a href="https://www.gazzetta.it/" className="hover:text-blue-200 transition-colors cursor-pointer">Sport</a>
            <a href="https://www.rainews.it/tgr/mondo" className="hover:text-blue-200 transition-colors cursor-pointer">Mondo</a>
          </nav>

          <div className="flex items-center space-x-6 text-sm">
            <div className="hidden lg:flex items-center space-x-4">
              <div className="text-center">
                <div className="font-bold">{weather.temp}</div>
                <div className="text-xs text-blue-200">Roma</div>
              </div>
              <div className="text-center">
                <div className="font-bold" suppressHydrationWarning={true}>{currentTime}</div>
                <div className="text-xs text-blue-200">Ora italiana</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-bold">LIVE</span>
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
        
        <div className="text-xs text-blue-200 pb-2 hidden md:block" suppressHydrationWarning={true}>
          {currentDate}
        </div>
      </div>
      
      <div className="bg-red-600 px-4 py-2">
        <div className="max-w-7xl mx-auto">
          <span className="text-sm font-bold">🔴 CRISI POLITICA</span>
        </div>
      </div>
    </header>
  );
}
