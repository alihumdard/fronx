import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import URLS from "../config/urls.config";
import { Link } from "react-router-dom";
import translations from "../translations";
import { useLanguage } from "../LanguageContext";
import {
  FaLaptopCode, FaMobileAlt, FaPaintBrush, FaShoppingCart, FaBullhorn, FaSearch,
  FaCog, FaTools, FaRobot, FaCode, FaCloudUploadAlt, FaServer, FaWordpressSimple,
  FaExternalLinkAlt, FaReact, FaAppStore, FaGooglePlay, FaFigma, FaPalette, FaRocket,
  FaRegLightbulb, FaChartLine, FaFileAlt, FaTachometerAlt, FaHandshake, FaGlobe,
  FaPencilRuler, FaRegComments, FaWrench, FaDatabase, FaShieldAlt, FaHeadset,
  FaShopify, FaBrain
} from "react-icons/fa";

// Service Categories
const serviceCategories = (language) => [
  {
    title: translations[language].drop1,
    url: URLS.SERVICE_DETAIL.WEB_DEVELOPMENT,
    items: [
      { label: translations[language].drop2, hash: "#web-development-process", icon: FaLaptopCode, color: "from-blue-400 to-blue-600" },
      { label: translations[language].drop3, hash: "#web-development-process", icon: FaCode, color: "from-purple-400 to-purple-600" },
      { label: translations[language].drop4, hash: "#web-development-process", icon: FaServer, color: "from-gray-400 to-gray-600" },
      { label: translations[language].drop5, hash: "#web-development-process", icon: FaWordpressSimple, color: "from-indigo-400 to-indigo-600" },
      { label: translations[language].drop6, hash: "#web-development-process", icon: FaReact, color: "from-cyan-400 to-cyan-600" },
    ],
  },
  {
    title: translations[language].drop7,
    url: URLS.SERVICE_DETAIL.APP_DEVELOPMENT,
    items: [
      { label: translations[language].drop8, hash: "#app-development-process", icon: FaMobileAlt, color: "from-green-400 to-green-600" },
      { label: translations[language].drop9, hash: "#app-development-process", icon: FaAppStore, color: "from-sky-400 to-sky-600" },
      { label: translations[language].drop10, hash: "#app-development-process", icon: FaGooglePlay, color: "from-lime-400 to-lime-600" },
      { label: translations[language].drop11, hash: "#app-development-process", icon: FaCloudUploadAlt, color: "from-teal-400 to-teal-600" },
      { label: translations[language].drop12, hash: "#app-development-process", icon: FaCog, color: "from-orange-400 to-orange-600" },
    ],
  },
  {
    title: translations[language].drop13,
    url: URLS.SERVICE_DETAIL.UIUX_DEVELOPEMENT,
    items: [
      { label: translations[language].drop14, hash: "#uiux-development-process", icon: FaFigma, color: "from-pink-400 to-pink-600" },
      { label: translations[language].drop15, hash: "#uiux-development-process", icon: FaPalette, color: "from-rose-400 to-rose-600" },
      { label: translations[language].drop16, hash: "#uiux-development-process", icon: FaPencilRuler, color: "from-yellow-400 to-yellow-600" },
      { label: translations[language].drop17, hash: "#uiux-development-process", icon: FaRegLightbulb, color: "from-amber-400 to-amber-600" },
    ],
  },
  {
    title: translations[language].drop18,
    url: URLS.SERVICE_DETAIL.ECOMMERCE_DEVELOPMENT,
    items: [
      { label: translations[language].drop19, hash: "#commerce-development-process", icon: FaShoppingCart, color: "from-orange-400 to-orange-600" },
      { label: translations[language].drop20, hash: "#commerce-development-process", icon: FaWordpressSimple, color: "from-indigo-400 to-indigo-600" },
      { label: translations[language].drop21, hash: "#commerce-development-process", icon: FaShopify, color: "from-emerald-400 to-emerald-600" },
      { label: translations[language].drop22, hash: "#commerce-development-process", icon: FaWrench, color: "from-gray-400 to-gray-600" },
      { label: translations[language].drop23, hash: "#commerce-development-process", icon: FaHandshake, color: "from-blue-400 to-blue-600" },
    ],
  },
  {
    title: translations[language].drop24,
    url: URLS.SERVICE_DETAIL.DIGITAL_MARKITING,
    items: [
      { label: translations[language].drop25, hash: "#markiting-development-process", icon: FaRocket, color: "from-red-400 to-red-600" },
      { label: translations[language].drop26, hash: "#markiting-development-process", icon: FaBullhorn, color: "from-pink-400 to-pink-600" },
      { label: translations[language].drop27, hash: "#markiting-development-process", icon: FaChartLine, color: "from-green-400 to-green-600" },
      { label: translations[language].drop28, hash: "#markiting-development-process", icon: FaGlobe, color: "from-blue-400 to-blue-600" },
    ],
  },
  {
    title: translations[language].drop29,
    url: URLS.SERVICE_DETAIL.SEO,
    items: [
      { label: translations[language].drop30, hash: "#seo-development-process", icon: FaSearch, color: "from-yellow-400 to-yellow-600" },
      { label: translations[language].drop31, hash: "#seo-development-process", icon: FaTachometerAlt, color: "from-orange-400 to-orange-600" },
      { label: translations[language].drop32, hash: "#seo-development-process", icon: FaExternalLinkAlt, color: "from-purple-400 to-purple-600" },
      { label: translations[language].drop33, hash: "#seo-development-process", icon: FaFileAlt, color: "from-gray-400 to-gray-600" },
      { label: translations[language].drop34, hash: "#seo-development-process", icon: FaDatabase, color: "from-teal-400 to-teal-600" },
    ],
  },
  {
    title: translations[language].drop35,
    url: URLS.SERVICE_DETAIL.SOFTWARE_DEVELOPMENT,
    items: [
      { label: translations[language].drop36, hash: "#software-development-process", icon: FaCog, color: "from-blue-400 to-blue-600" },
      { label: translations[language].drop37, hash: "#software-development-process", icon: FaServer, color: "from-gray-400 to-gray-600" },
      { label: translations[language].drop38, hash: "#software-development-process", icon: FaDatabase, color: "from-green-400 to-green-600" },
      { label: translations[language].drop39, hash: "#software-development-process", icon: FaCloudUploadAlt, color: "from-indigo-400 to-indigo-600" },
    ],
  },
  {
    title: translations[language].drop40,
    url: URLS.SERVICE_DETAIL.MAINTENENCE,
    items: [
      { label: translations[language].drop41, hash: "#maintinence-development-process", icon: FaTools, color: "from-orange-400 to-orange-600" },
      { label: translations[language].drop42, hash: "#maintinence-development-process", icon: FaWrench, color: "from-gray-400 to-gray-600" },
      { label: translations[language].drop43, hash: "#maintinence-development-process", icon: FaShieldAlt, color: "from-red-400 to-red-600" },
      { label: translations[language].drop44, hash: "#maintinence-development-process", icon: FaHeadset, color: "from-blue-400 to-blue-600" },
    ],
  },
  {
    title: translations[language].drop45,
    url: URLS.SERVICE_DETAIL.CHATBOT_DEVELOPMENT,
    items: [
      { label: translations[language].drop46, hash: "#ai-development-process", icon: FaRobot, color: "from-purple-400 to-purple-600" },
      { label: translations[language].drop47, hash: "#ai-development-process", icon: FaRegComments, color: "from-green-400 to-green-600" },
      { label: translations[language].drop48, hash: "#ai-development-process", icon: FaBrain, color: "from-pink-400 to-pink-600" },
    ],
  },
];

const DropdownMenu = ({ mobile, textColorClass, linkHoverClass }) => {
  const { language } = useLanguage();
  const latestserviceCategories = serviceCategories(language);
  const [isMainDropdownOpen, setIsMainDropdownOpen] = useState(false);
  const [openCategoryIndex, setOpenCategoryIndex] = useState(null);

  useEffect(() => {
    if (!mobile) {
      setIsMainDropdownOpen(false);
      setOpenCategoryIndex(null);
    }
  }, [mobile]);

  const toggleMainDropdown = () => {
    setIsMainDropdownOpen(!isMainDropdownOpen);
    if (isMainDropdownOpen) {
      setOpenCategoryIndex(null);
    }
  };

  const toggleCategoryDropdown = (index) => {
    setOpenCategoryIndex(openCategoryIndex === index ? null : index);
  };

  return (
    <li
      className="relative w-full lg:w-auto"
      onMouseEnter={mobile ? undefined : () => setIsMainDropdownOpen(true)}
      onMouseLeave={mobile ? undefined : () => setIsMainDropdownOpen(false)}
    >
      {/* Main Menu Link */}
      <Link
        to={URLS.SERVICES}
        onClick={toggleMainDropdown}
        className={`inline-flex items-center font-semibold whitespace-nowrap tracking-wide ${mobile ? "block w-full text-left" : ""} ${textColorClass} ${linkHoverClass}`}
        aria-expanded={isMainDropdownOpen ? "true" : "false"}
      >
        {translations[language].services}
        <svg
          className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${isMainDropdownOpen && mobile ? "rotate-180" : "rotate-0"}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d={isMainDropdownOpen && mobile ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
        </svg>
      </Link>

      {/* Dropdown */}
      <AnimatePresence>
        {isMainDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`${mobile ? "relative w-full mt-2 p-4 bg-white/80 backdrop-blur-lg rounded-lg shadow-inner" :
              "absolute -left-[400px] top-full mt-4 w-screen max-w-screen-xl -translate-x-1/2 p-8 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20"}`}
          >
            <div className={`grid ${mobile ? "grid-cols-1 gap-y-2" : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8"}`}>
              {latestserviceCategories.map((category, catIndex) => (
                <div key={catIndex} className="flex flex-col items-start">
                  {/* Category Title */}
                  <button
                    onClick={mobile ? () => toggleCategoryDropdown(catIndex) : undefined}
                    className="flex justify-between items-center w-full"
                  >
                    <Link
                      to={category.url}
                      className="text-lg text-start font-semibold bg-gradient-to-r from-[#6931CF] to-[#1A61EA] bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
                    >
                      {category.title}
                    </Link>
                    {mobile && (
                      <svg className={`ml-2 h-5 w-5 text-gray-600 transform transition-transform duration-200 ${openCategoryIndex === catIndex ? "rotate-180" : "rotate-0"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={openCategoryIndex === catIndex ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                      </svg>
                    )}
                  </button>

                  {/* Items */}
                  <AnimatePresence>
                    {(!mobile || openCategoryIndex === catIndex) && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className={`space-y-2 mt-2`}
                      >
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <Link
                              to={`${category.url}${item.hash}`}
                              className="group flex items-center space-x-3 px-1 rounded-lg hover:bg-gray-100/60 transition-all duration-200"
                            >
                              <item.icon className={`text-3xl p-1 rounded-full text-white shadow-md bg-gradient-to-r ${item.color} group-hover:shadow-lg group-hover:scale-110 transition-transform duration-200`} />
                              <span className="text-md">{item.label}</span>
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

export default DropdownMenu;
