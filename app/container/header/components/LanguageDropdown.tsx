// src/components/LanguageDropdown.tsx
import { ChevronDown, Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "~/context/LanguageContext";

const LanguageDropdown: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "en" as const, name: "English" },
    { code: "ja" as const, name: "日本語" },
  ];

  const currentLang = languages.find((lang) => lang.code === language);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="relative bg-primary/10 rounded-sm cursor-pointer"
      ref={dropdownRef}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 cursor-pointer px-3 py-2 text-sm rounded-md hover:bg-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
        aria-label={t("selectLanguage")}
      >
        <span>{currentLang?.flag}</span>
        <span className="hidden sm:block">{currentLang?.name}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 border_pri rounded-md shadow-lg z-[9999] animate-in fade-in-0 zoom-in-95">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-primary/10 cursor-pointer transition-colors first:rounded-t-md last:rounded-b-md ${
                language === lang.code
                  ? "bg-primary text-accent-foreground"
                  : "text-popover-foreground"
              }`}
            >
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
