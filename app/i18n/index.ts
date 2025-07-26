import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enCommon from "./en/common.json";
import enNav from "./en/navigation.json";
import enBlogs from "./en/blogs.json";
import enHome from "./en/home.json";
import enSidebar from "./en/sidebar.json";

import jaCommon from "./ja/common.json";
import jaNav from "./ja/navigation.json";
import jaBlogs from "./ja/blogs.json";
import jaHome from "./ja/home.json";
import jaSidebar from "./ja/sidebar.json";

const resources = {
  en: {
    common: enCommon,
    navigation: enNav,
    blogs: enBlogs,
    home: enHome,
    sidebar: enSidebar,
  },
  ja: {
    common: jaCommon,
    navigation: jaNav,
    blogs: jaBlogs,
    home: jaHome,
    sidebar: jaSidebar,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "ja",
    lng: "en",
    debug: process.env.NODE_ENV === "development",
    ns: ["common", "navigation", "blogs", "sidebar", "home"], // Add namespaces
    defaultNS: "common", // Set default
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "kuroco-language",
    },
    interpolation: {
      escapeValue: false,
    },
    returnObjects: true,
  });

export default i18n;
