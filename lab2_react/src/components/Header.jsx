export default function Header() {
  return (
    <header className="bg-white border-b border-pink-50 p-10 md:p-16 relative overflow-hidden">
      {}
      <div className="absolute top-0 right-0 w-64 h-64 bg-pink-50 rounded-full -mr-32 -mt-32 opacity-50 blur-3xl"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center md:items-end gap-8">
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 leading-tight">
            Khrystyna<br />
            <span className="text-pink-500">Syroizhko</span>
          </h1>
          <p className="mt-4 text-slate-400 font-bold uppercase tracking-[0.4em] text-xs">
            Cybersecurity Student | LPNU
          </p>
        </div>
        
        <div className="space-y-2 text-center md:text-right">
          <p className="text-sm font-bold text-slate-600">khrystyna.syroizhko@lpnu.ua</p>
          <p className="text-sm font-bold text-slate-600">Lviv, Ukraine</p>
        </div>
      </div>
    </header>
  );
}
