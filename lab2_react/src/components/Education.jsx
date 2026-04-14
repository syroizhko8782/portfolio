export default function Education() {
  return (
    <section>
      <div className="flex items-center gap-4 mb-10">
        <div className="w-2 h-2 rounded-full bg-pink-500"></div>
        <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.4em]">Education</h2>
      </div>
      <div className="border-l-2 border-pink-100 pl-8 space-y-2">
        <h3 className="text-xl font-black text-slate-900">Lviv Polytechnic National University</h3>
        <p className="text-pink-500 font-black text-[10px] uppercase tracking-widest italic">2023-2027</p>
        <p className="text-slate-500 font-medium">Bachelor's Degree in Cybersecurity</p>
      </div>
    </section>
  );
}
