import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionProps {
  question: string;
  answer: string;
}

export default function Accordion({ question, answer }: AccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-dark-100 rounded-xl overflow-hidden transition-all duration-200 hover:border-brand-300">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-dark-50 transition-colors"
      >
        <span className="font-medium text-dark-800 pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-dark-400 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="px-5 pb-4 text-dark-600 leading-relaxed">{answer}</div>
      </div>
    </div>
  );
}
