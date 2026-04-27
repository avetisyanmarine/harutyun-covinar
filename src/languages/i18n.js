import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Քանի որ i18n.js-ը արդեն languages թղթապանակում է,
// հասցեն սկսվում է մեկ կետով (./am/...)
import translationAM from "./am/translation.json";
import translationEN from "./en/translation.json";
import translationRU from "./ru/translation.json";

const resources = {
  am: { translation: translationAM },
  en: { translation: translationEN },
  ru: { translation: translationRU },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "am",
  fallbackLng: "am",
  interpolation: { escapeValue: false },
});

export default i18n;
