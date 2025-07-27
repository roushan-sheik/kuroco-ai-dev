import { ChevronDown, Menu } from "lucide-react";
import { Link } from "react-router";
import { useSidebar } from "~/context/ SidebarContext";
import { useLanguage } from "~/context/LanguageContext";
import HeaderUserProfile from "./components/HeaderUserProfile";

const Header: React.FC = () => {
  const { toggle } = useSidebar();
  const { language, setLanguage } = useLanguage();

  const handleLanguageSwitcher = () => {
    if (language === "ja") {
      setLanguage("en");
    } else {
      setLanguage("ja");
    }
  };
  return (
    <header
      id="header"
      className="sticky top-0 z-50 flex items-center justify-between gap-4 px-4 sm:px-6 py-3 bg-white backdrop-blur  "
    >
      {/* Left section */}
      <div className="flex items-center gap-4">
        <button
          id="menu-button"
          onClick={toggle}
          className="p-2 cursor-pointer text-body1 transition-colors focus:outline-none "
          aria-label="Toggle sidebar"
        >
          <Menu size={28} strokeWidth={2.5} />
        </button>

        <Link to="/" className="flex items-center gap-2 focus:outline-none">
          <h1 className="text-heading3  font-bold">KUROCO AI</h1>
        </Link>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-2">
        <div
          onClick={handleLanguageSwitcher}
          className="border_pri px-2 py-1 cursor-pointer select-none"
        >
          {language === "ja" ? "English" : "日本語"}
        </div>

        {/* User Profile   */}
        <HeaderUserProfile />
      </div>
    </header>
  );
};

export default Header;
