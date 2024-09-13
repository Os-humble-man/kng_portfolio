import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpBackend) // charge les fichiers de traduction
  .use(LanguageDetector) // détecte automatiquement la langue de l'utilisateur
  .use(initReactI18next) // init React i18next
  .init({
    fallbackLng: "en", // langue par défaut si la détection échoue
    debug: true, // pour afficher les logs pendant le développement
    interpolation: {
      escapeValue: false, // React déjà protège contre les failles XSS
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // chemin où se trouvent vos fichiers JSON
    },
  });

export default i18n;
