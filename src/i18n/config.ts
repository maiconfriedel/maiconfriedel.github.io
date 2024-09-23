import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from './en/translation.json';
import pt from './pt/translation.json';

i18n.use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: 'pt',
  supportedLngs: ['en', 'pt'],
  // debug: true,
  resources: {
    en: { translation: en },
    pt: { translation: pt },
  },
  interpolation: {
    escapeValue: false // react already safes from xss
  },

});

export default i18n;
