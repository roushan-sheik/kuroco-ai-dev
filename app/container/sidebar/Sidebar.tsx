import { House, Plus, X } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSidebar } from "~/context/ SidebarContext";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import SidebarList from "./components/SidebarList";
import { MdOutlineCancel } from "react-icons/md";

const Sidebar: React.FC = () => {
  const { isOpen, close } = useSidebar();
  const { t } = useTranslation("sidebar");

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 top-17 z-10 lg:hidden transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={close}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <aside
        id="sidebar"
        className={`
      h-full bg-white lg:mt-20 mt-0 border-t lg:border-0 border-2  fixed lg:relative 
      transition-all duration-300 ease-in-out
      ${isOpen ? "w-75" : "w-0"}
      overflow-hidden
      z-20   
    `}
      >
        <div className="p-4 ">
          {/* home header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center pl-4 pt-2 gap-2">
              <FaHome className="text-body2" />
              <h3 className="text-body2 text-nowrap">{t("home")}</h3>
            </div>
            <div className=" flex lg:hidden">
              <span onClick={close}>
                <X className="text-heading3" />
              </span>
            </div>
          </div>
          {/* title  */}
          <div>
            <div className="max-h-20 overflow-hidden ">
              <h3 className="text-body3 font-bold flex items-center gap-3  select-none  mt-4">
                {t("sidebarTeamProjectManagement")}
                <Plus
                  className="text-neutral-400/70 hover:text-primary cursor-pointer"
                  size={20}
                  strokeWidth={2.8}
                />
              </h3>
            </div>
            {/* Sidebar lists  */}

            <SidebarList />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
