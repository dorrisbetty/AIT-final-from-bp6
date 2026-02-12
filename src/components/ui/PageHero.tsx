import { useLang } from '../../context/LanguageContext';

interface PageHeroProps {
  titleKey: string;
  subtitleKey?: string;
  translations: Record<string, Record<'en' | 'hi', string>>;
  image?: string;
}

export default function PageHero({ titleKey, subtitleKey, translations, image }: PageHeroProps) {
  const { lang } = useLang();

  return (
    <section className="relative h-[280px] sm:h-[340px] flex items-center justify-center overflow-hidden">
      {image && (
        <img
          src={image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 via-dark-900/70 to-dark-900/90" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
          {translations[titleKey]?.[lang]}
        </h1>
        {subtitleKey && (
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto animate-slide-up">
            {translations[subtitleKey]?.[lang]}
          </p>
        )}
      </div>
    </section>
  );
}
