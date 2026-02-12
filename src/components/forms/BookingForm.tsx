import { useState } from 'react';
import { Send } from 'lucide-react';
import { useLang } from '../../context/LanguageContext';
import { t } from '../../data/translations';
import { useWhatsApp } from '../../hooks/useWhatsApp';

interface BookingFormProps {
  compact?: boolean;
  dark?: boolean;
}

export default function BookingForm({ compact, dark }: BookingFormProps) {
  const { lang } = useLang();
  const { openWhatsApp, buildBookingMessage } = useWhatsApp();
  const [form, setForm] = useState({ name: '', phone: '', pickup: '', drop: '', date: '', vehicle: 'Sedan', message: '' });

  const update = (field: string, value: string) => setForm(prev => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsApp(buildBookingMessage(form));
  };

  const inputClass = `w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 ${
    dark
      ? 'bg-dark-800 border-dark-700 text-white placeholder-dark-400'
      : 'bg-white border-dark-200 text-dark-800 placeholder-dark-400'
  }`;

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {!compact && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input type="text" placeholder={t.yourName[lang]} value={form.name} onChange={e => update('name', e.target.value)} className={inputClass} />
          <input type="tel" placeholder={t.yourPhone[lang]} value={form.phone} onChange={e => update('phone', e.target.value)} className={inputClass} />
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input type="text" placeholder={t.pickup[lang]} value={form.pickup} onChange={e => update('pickup', e.target.value)} className={inputClass} required />
        <input type="text" placeholder={t.drop[lang]} value={form.drop} onChange={e => update('drop', e.target.value)} className={inputClass} required />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input type="date" value={form.date} onChange={e => update('date', e.target.value)} className={inputClass} />
        <select value={form.vehicle} onChange={e => update('vehicle', e.target.value)} className={inputClass}>
          <option value="Sedan">{t.sedan[lang]}</option>
          <option value="XL / SUV">{t.xlSuv[lang]}</option>
          <option value="Premium SUV">{t.premiumSuv[lang]}</option>
        </select>
      </div>
      {!compact && (
        <textarea
          placeholder={t.yourMessage[lang]}
          value={form.message}
          onChange={e => update('message', e.target.value)}
          rows={3}
          className={inputClass}
        />
      )}
      <button type="submit" className="btn-primary w-full text-base py-3.5">
        <Send className="w-4 h-4" />
        {t.getQuoteWhatsApp[lang]}
      </button>
    </form>
  );
}
