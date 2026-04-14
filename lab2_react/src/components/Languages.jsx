export default function Languages() {
  return (
    <section>
      <div className="flex items-center gap-4 mb-10">
        <div className="w-12 h-1 bg-pink-500"></div>
        <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.5em]">Languages</h2>
      </div>
      <div className="flex gap-16">
        <div>
          <span className="text-3xl font-black text-slate-900 block">Ukrainian</span>
          <span className="text-[10px] font-bold text-pink-500 uppercase tracking-widest">Native</span>
        </div>
        <div>
          <span className="text-3xl font-black text-slate-900 block">English</span>
          <span className="text-[10px] font-bold text-pink-500 uppercase tracking-widest">Intermediate</span>
        </div>
      </div>
    </section>
  );
}