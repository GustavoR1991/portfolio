import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import {
  translations,
  type Language,
  type Translation,
} from "../i18n/translation";

interface LanguageContextValue {
  language: Language;
  t: Translation;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLanguage(): Language {
  try {
    const saved = localStorage.getItem("language");
    if (saved === "pt" || saved === "en") return saved;
  } catch {
    // sem localStorage: segue o navegador
  }
  return navigator.language.startsWith("pt") ? "pt" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    // Ajuda leitores de tela e o Google a saberem o idioma
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
    try {
      localStorage.setItem("language", language);
    } catch {
      // ignorado
    }
  }, [language]);

  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));

  return (
    <LanguageContext.Provider
      value={{ language, t: translations[language], toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage precisa estar dentro de <LanguageProvider>");
  return context;
}
