import { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { WHATSAPP_BASE_URL } from '../../data/constants';

export default function FloatingButtons() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <a
        href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent('Hi, I want to book a taxi.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 lg:bottom-6 right-4 z-50 w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg shadow-green-500/30 hover:bg-green-600 transition-all duration-200 hover:scale-110 animate-bounce-gentle"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {showScroll && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-20 lg:bottom-6 left-4 z-50 w-10 h-10 rounded-full bg-dark-800 text-white flex items-center justify-center shadow-lg hover:bg-dark-700 transition-all duration-300 animate-fade-in"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}
