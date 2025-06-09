import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // Based on your existing content
      resources: "Resources",
      documentation: "Documentation",
      faqs: "FAQs",
      caseStudies: "Case Studies",
      blog: "Blog",
      contact: "Contact",
      email: "Email",
      phone: "Phone",
      location: "Location",
    },
  },
  ne: {
    translation: {
      // Nepali translations
      resources: "स्रोतहरू",
      documentation: "कागजात",
      faqs: "बारम्बार सोधिने प्रश्नहरू",
      caseStudies: "केस स्टडीहरू",
      blog: "ब्लग",
      contact: "सम्पर्क",
      email: "इमेल",
      phone: "फोन",
      location: "स्थान",
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
