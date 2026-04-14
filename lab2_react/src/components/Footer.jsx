import { useEffect, useState } from 'react';

export default function Footer() {
  const [systemInfo, setSystemInfo] = useState('');

  useEffect(() => {
    const info = `Браузер: ${navigator.userAgent} | Платформа: ${navigator.platform}`;

    localStorage.setItem('os_browser_info', info);

    const savedData = localStorage.getItem('os_browser_info');
    setSystemInfo(savedData);
  }, []); 

  return (
    <footer className="bg-slate-900 p-6 md:p-8 text-center">
      <div className="flex justify-center gap-10 mb-4">
        {}
      </div>

      {}
      <div className="mb-4 text-[8px] text-slate-400 uppercase tracking-widest leading-relaxed">
        Системні дані з localStorage: <br />
        <span className="text-pink-400">{systemInfo}</span>
      </div>

      <p className="text-[7px] font-bold text-slate-500 uppercase tracking-[0.8em]">
        Khrystyna Syroizhko • 2026 <br />
        Created for Web Programming course
      </p>
    </footer>
  );
}