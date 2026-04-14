export default function Skills() {
  const skills = [
    { name: 'HTML', level: '70%' },
    { name: 'Git', level: '50%' },
    { name: 'Python', level: '60%' },
    { name: 'Javascript', level: '60%' },
    { name: 'Networking basics', level: '70%' }
  ];

  return (
    <section>
      <div className="flex items-center gap-4 mb-10">
        <div className="w-2 h-2 rounded-full bg-pink-500"></div>
        <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.4em]">Skills</h2>
      </div>
      <div className="space-y-6">
        {skills.map(skill => (
          <div key={skill.name}>
            <div className="flex justify-between mb-2">
              <span className="text-xs font-black text-slate-700 uppercase">{skill.name}</span>
              <span className="text-[10px] font-bold text-pink-400 italic">{skill.level}</span>
            </div>
            <div className="h-1 w-full bg-pink-50 rounded-full overflow-hidden">
              <div 
                className="h-full bg-pink-500 rounded-full" 
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}