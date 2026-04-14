import { useEffect, useState } from 'react';

export default function Reviews() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/25/comments')
      .then(response => response.json()) 
      .then(data => {
        setComments(data); 
      })
      .catch(error => console.error('Помилка завантаження:', error));
  }, []); 
  return (
    <section className="mt-16">
      <h2 className="text-xs font-black text-pink-500 uppercase tracking-[0.3em] mb-8 flex items-center gap-4">
        Відгуки роботодавців
        <div className="h-px flex-grow bg-pink-100"></div>
      </h2>
      
      <div className="grid grid-cols-1 gap-6">
        {comments.map((comment) => (
          <div key={comment.id} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-pink-200 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 font-bold text-xs">
                {comment.email[0].toUpperCase()}
              </div>
              <span className="text-sm font-bold text-slate-700 italic">{comment.email}</span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              {comment.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}