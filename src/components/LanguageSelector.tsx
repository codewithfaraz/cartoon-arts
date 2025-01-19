import React from "react";
import { useTranslation } from "react-i18next";

export const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex gap-2">
        <button
          className={`p-2 rounded ${
            i18n.language === "en" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => changeLanguage("en")}
        >
          EN
        </button>
        <button
          className={`p-2 rounded ${
            i18n.language === "de" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => changeLanguage("de")}
        >
          DE
        </button>
      </div>
    </div>
  );
};
