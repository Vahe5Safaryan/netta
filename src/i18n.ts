import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import hyTranslations from './Locales/hy.json';
import ruTranslations from './Locales/ru.json';
import enTranslations from './Locales/en.json';

let savedLanguage = localStorage.getItem('language');
if (savedLanguage == null) {
    savedLanguage = "hy";
}

i18n
    .use(initReactI18next)
    .init({
        resources: {
            hy: { translation: hyTranslations },
            ru: { translation: ruTranslations },
            en: { translation: enTranslations },
        },
        lng: savedLanguage || 'hy',
        fallbackLng: 'hy',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
