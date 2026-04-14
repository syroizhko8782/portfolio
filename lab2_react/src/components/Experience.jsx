export default function Experience() {
  const experienceText = "During my studies I completed laboratory works related to cybersecurity, network technologies and web programming. I also gained experience working with Git and modern development tools.";

  return (
    <section>
      <div className="flex items-center gap-4 mb-10">
        <div className="w-12 h-1 bg-pink-500"></div>
        <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.5em]">Experience</h2>
      </div>
      <div className="p-8 bg-pink-50/20 border border-pink-100 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-500">
        
        <p className="text-slate-500 text-sm mt-2">{experienceText}</p>
      </div>
    </section>
  );
}