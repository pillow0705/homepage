"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { profiles, ProfileData } from "@/data/profile";

type Language = "en" | "cn";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  profile: ProfileData;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const value = {
    language,
    setLanguage,
    profile: profiles[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
