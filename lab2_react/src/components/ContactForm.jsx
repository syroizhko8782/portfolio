import { useState, useEffect } from 'react';

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true); 
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[100] flex items-center justify-center p-4">
      
      <div className="bg-white rounded-[2rem] p-8 max-w-md w-full shadow-2xl relative border border-pink-50">
        
        <button 
          onClick={() => setIsOpen(false)} 
          className="absolute top-6 right-6 text-slate-400 hover:text-pink-500 transition-colors"
        >
          ✕
        </button>

        <h3 className="text-2xl font-black text-slate-900 mb-2">Зворотній зв'язок</h3>
        <p className="text-slate-500 text-sm mb-6">Будь ласка, заповніть форму нижче</p>

        {}
        <form 
          action="https://formspree.io/f/mnjovzjd" 
          method="POST" 
          className="space-y-4"
        >
          <div>
            <label className="block text-[10px] font-black text-slate-400 uppercase mb-1 ml-1">Ім'я</label>
            <input type="text" name="name" required className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:border-pink-300 transition-all" />
          </div>

          <div>
            <label className="block text-[10px] font-black text-slate-400 uppercase mb-1 ml-1">Email</label>
            <input type="email" name="email" required className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:border-pink-300 transition-all" />
          </div>

          <div>
            <label className="block text-[10px] font-black text-slate-400 uppercase mb-1 ml-1">Телефон</label>
            <input type="tel" name="phone" required className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:border-pink-300 transition-all" />
          </div>

          <div>
            <label className="block text-[10px] font-black text-slate-400 uppercase mb-1 ml-1">Повідомлення</label>
            <textarea name="message" required className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl h-24 focus:outline-none focus:border-pink-300 transition-all resize-none"></textarea>
          </div>

          <button type="submit" className="w-full py-4 bg-pink-500 text-white font-black rounded-xl hover:bg-pink-600 shadow-lg shadow-pink-200 transition-all active:scale-95">
            ВІДПРАВИТИ
          </button>
        </form>
      </div>
    </div>
  );
}