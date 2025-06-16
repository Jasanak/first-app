import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      ServicesTitle:
        "Professional Accounting Solutions Streamline Your Financial Operations with AIMS",
    },
  },
  ne: {
    translation: {
      ServicesTitle: "Nepali content",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
