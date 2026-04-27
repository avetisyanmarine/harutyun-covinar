import { useState } from "react";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "am", label: "ARM" },
    { code: "en", label: "ENG" },
    { code: "ru", label: "RUS" },
  ];

  const currentLanguage =
    languages.find((l) => l.code === i18n.language) || languages[0];

  return (
    <div className="fixed top-6 right-6 z-[1000] font-serif">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white/70 backdrop-blur-md border border-stone-200 px-4 py-2 rounded-full shadow-sm text-[11px] tracking-widest text-stone-700 flex items-center gap-2 hover:bg-white transition-all active:scale-95"
      >
        {currentLanguage.label}
        <span
          className={`text-[8px] transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
        >
          ▼
        </span>
      </button>

      {/* Բացվող ցուցակը */}
      <div
        className={`absolute top-full right-0 mt-2 bg-white/90 backdrop-blur-lg border border-stone-100 rounded-2xl shadow-xl overflow-hidden min-w-[90px] transition-all duration-300 origin-top-right ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0 visible"
            : "opacity-0 scale-95 -translate-y-2 invisible"
        }`}
      >
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => {
              i18n.changeLanguage(lang.code);
              setIsOpen(false);
            }}
            className={`w-full px-4 py-3 text-[10px] tracking-[0.2em] transition-colors hover:bg-stone-50 text-left ${
              i18n.language === lang.code
                ? "text-stone-900 font-bold"
                : "text-stone-400"
            }`}
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
};
