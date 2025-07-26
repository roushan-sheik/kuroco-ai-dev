import React from "react";
import { SidebarProvider } from "~/context/ SidebarContext";
import { LanguageProvider } from "~/context/LanguageContext";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <LanguageProvider>
        <SidebarProvider>{children}</SidebarProvider>
      </LanguageProvider>
    </>
  );
};

export default Providers;
