// src/contexts/LanguageContext.tsx
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import i18n from "~/i18n";
import { useTranslation } from "react-i18next";

type Language = "en" | "ja";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("ja");
  const { t } = useTranslation();

  useEffect(() => {
    const storedLang = localStorage.getItem("kuroco-language") as Language;
    if (storedLang && (storedLang === "en" || storedLang === "ja")) {
      setLanguageState(storedLang);
      i18n.changeLanguage(storedLang);
    } else {
      // Set default language if no valid stored language
      i18n.changeLanguage("ja");
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem("kuroco-language", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
