import { useState, useEffect } from 'react';
import Header from './components/Header'
import Profile from './components/Profile'
import Education from './components/Education'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Languages from './components/Languages'
import Reviews from './components/Reviews'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour >= 7 && currentHour < 21) {
      setTheme('light');
    } else {
      setTheme('dark'); 
    }
  }, []); 

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      theme === 'dark' ? 'bg-slate-900 text-slate-100' : 'bg-[#e0f2fe] text-slate-900'
    }`}>
      
      {}
      <button 
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-[110] p-3 rounded-full bg-white shadow-xl border border-pink-100 hover:scale-110 transition-all text-2xl"
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>

      <div className="max-w-5xl mx-auto py-12 px-4">
        {}
        <div className={`rounded-3xl overflow-hidden border transition-colors duration-500 ${
          theme === 'dark' ? 'bg-slate-800 border-slate-700 shadow-none' : 'bg-white border-pink-50 shadow-2xl'
        }`}>
          
        <div style={{ backgroundColor: 'yellow', color: 'red', textAlign: 'center', padding: '10px', fontWeight: 'bold' }}>
  САЙТ ОНОВЛЕНО (ЧАСТИНА 1)
</div>
<Header />

<main className="p-8 md:p-16 space-y-20" style={{ borderTop: '5px solid blue' }}>
            <Profile />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <Education />
              <Skills />
            </div>
            
            <Experience />
            <Languages />
            <Reviews />
            <ContactForm />
          </main>
          
          <Footer />
        </div>
      </div>
    </div>
  )
}
