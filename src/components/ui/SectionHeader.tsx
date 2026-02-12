import { useLang } from '../../context/LanguageContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface SectionHeaderProps {
  titleKey: string;
  subtitleKey?: string;
  translations: Record<string, Record<'en' | 'hi', string>>;
  light?: boolean;
  center?: boolean;
}

export default function SectionHeader({ titleKey, subtitleKey, translations, light, center = true }: SectionHeaderProps) {
  const { lang } = useLang();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`mb-12 ${center ? 'text-center' : ''} transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${light ? 'text-white' : 'text-dark-900'}`}>
        {translations[titleKey]?.[lang]}
      </h2>
      {subtitleKey && (
        <p className={`text-lg sm:text-xl max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-white/70' : 'text-dark-500'}`}>
          {translations[subtitleKey]?.[lang]}
        </p>
      )}
      <div className={`mt-4 h-1 w-16 rounded-full ${center ? 'mx-auto' : ''} ${light ? 'bg-brand-400' : 'bg-brand-500'}`} />
    </div>
  );
}
