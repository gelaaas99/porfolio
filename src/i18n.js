import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importa tus archivos de traducción
import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';

const resources = {
    en: {
        translation: translationEN,
    },
    es: {
        translation: translationES,
    },
};

i18n
    .use(LanguageDetector) // Detecta el idioma automáticamente
    .use(initReactI18next) // Enlaza con React
    .init({
        resources,
        fallbackLng: 'en', // Idioma por defecto si no detecta ninguno
        interpolation: {
            escapeValue: false, // React ya se encarga de esto
        },
    });

export default i18n;