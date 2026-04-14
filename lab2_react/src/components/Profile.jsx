export default function Profile() {
  return (
    <section>
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-1 bg-pink-500"></div>
        <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.5em]">Profile</h2>
      </div>
    <p className="text-base md:text-sm leading-snug font-bold text-slate-800 max-w-4xl">
        I am a university student majoring in cybersecurity and I have a strong interest in programming and software development. In addition to my studies, I participate in personal and university projects where I apply the knowledge I gain during my education.
      </p>
    </section>
  );
}