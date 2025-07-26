import { ChevronDown, Menu } from "lucide-react";
import { Link } from "react-router";
import LanguageDropdown from "~/container/header/components/LanguageDropdown";
import { useSidebar } from "~/context/ SidebarContext";

const Header: React.FC = () => {
  const { toggle } = useSidebar();

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
        <div className="border_pri px-2 py-1">日本語</div>
        <div className="h-8 w-8 ml-0 lg:ml-6 flex justify-center items-center rounded-full bg-primary">
          <span className="text-caption1">田</span>
        </div>
        <div className="flex items-center ml-1 text-body1 text_sec cursor-pointer">
          <span>田中 太郎</span>
          <ChevronDown />
        </div>
        {/* <LanguageDropdown /> */}
      </div>
    </header>
  );
};

export default Header;
