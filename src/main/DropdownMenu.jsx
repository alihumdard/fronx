import React, { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import URLS from "../config/urls.config";
import { Link } from "react-router-dom";
import translations from "../translations";
import { LanguageProvider, useLanguage } from "../LanguageContext";

const serviceCategories = (language) => [
  {
    title: translations[language].drop1,
    url: URLS.SERVICE_DETAIL.WEB_DEVELOPMENT,
    items: [
      { label: translations[language].drop2, hash: "#web-development-process" },
      { label: translations[language].drop3, hash: "#web-development-process" },
      { label: translations[language].drop4, hash: "#web-development-process" },
      { label: translations[language].drop5, hash: "#web-development-process" },
      { label: translations[language].drop6, hash: "#web-development-process" },
    ],
  },
  {
    title: translations[language].drop7,
    url: URLS.SERVICE_DETAIL.APP_DEVELOPMENT,
    items: [
      { label: translations[language].drop8, hash: "#app-development-process" },
      { label: translations[language].drop9, hash: "#app-development-process" },
      { label: translations[language].drop10, hash: "#app-development-process" },
      { label: translations[language].drop11, hash: "#app-development-process" },
      { label: translations[language].drop12, hash: "#app-development-process" },
    ],
  },
  {
    title: translations[language].drop13,
    url: URLS.SERVICE_DETAIL.UIUX_DEVELOPEMENT,
    items: [
      { label: translations[language].drop14, hash: "#uiux-development-process" },
      { label: translations[language].drop15, hash: "#uiux-development-process" },
      { label: translations[language].drop16, hash: "#uiux-development-process" },
      { label: translations[language].drop17, hash: "#uiux-development-process" },
    ],
  },
  {
    title: translations[language].drop18,
    url: URLS.SERVICE_DETAIL.ECOMMERCE_DEVELOPMENT,
    items: [
      { label: translations[language].drop19, hash: "#commerce-development-process" },
      { label: translations[language].drop20, hash: "#commerce-development-process" },
      { label: translations[language].drop21, hash: "#commerce-development-process" },
      { label: translations[language].drop22, hash: "#commerce-development-process" },
      { label: translations[language].drop23, hash: "#commerce-development-process" },
    ],
  },
  {
    title: translations[language].drop24,
    url: URLS.SERVICE_DETAIL.DIGITAL_MARKITING,
    items: [
      { label: translations[language].drop25, hash: "#markiting-development-process" },
      { label: translations[language].drop26, hash: "#markiting-development-process" },
      { label: translations[language].drop27, hash: "#markiting-development-process" },
      { label: translations[language].drop28, hash: "#markiting-development-process" },
    ],
  },
  {
    title: translations[language].drop29,
    url: URLS.SERVICE_DETAIL.SEO,
    items: [
      { label: translations[language].drop30, hash: "#seo-development-process" },
      { label: translations[language].drop31, hash: "#seo-development-process" },
      { label: translations[language].drop32, hash: "#seo-development-process" },
      { label: translations[language].drop33, hash: "#seo-development-process" },
      { label: translations[language].drop34, hash: "#seo-development-process" },
    ],
  },
  {
    title: translations[language].drop35,
    url: URLS.SERVICE_DETAIL.SOFTWARE_DEVELOPMENT,
    items: [
      { label: translations[language].drop36, hash: "#software-development-process" },
      { label: translations[language].drop37, hash: "#software-development-process" },
      { label: translations[language].drop38, hash: "#software-development-process" },
      { label: translations[language].drop39, hash: "#software-development-process" },
    ],
  },
  {
    title: translations[language].drop40,
    url: URLS.SERVICE_DETAIL.MAINTENENCE,
    items: [
      { label: translations[language].drop41, hash: "#maintinence-development-process" },
      { label: translations[language].drop42, hash: "#maintinence-development-process" },
      { label: translations[language].drop43, hash: "#maintinence-development-process" },
      { label: translations[language].drop44, hash: "#maintinence-development-process" },
    ],
  },
  {
    title: translations[language].drop45,
    url: URLS.SERVICE_DETAIL.CHATBOT_DEVELOPMENT,
    items: [
      { label: translations[language].drop46, hash: "#ai-development-process" },
      { label: translations[language].drop47, hash: "#ai-development-process" },
      { label: translations[language].drop48, hash: "#ai-development-process" },
    ],
  },

];

const DropdownMenu = ({ mobile, textColorClass, linkHoverClass }) => {
  const { language } = useLanguage();
  const latestserviceCategories = serviceCategories(language);
  const [isMainDropdownOpen, setIsMainDropdownOpen] = useState(false);
  const [openCategoryIndex, setOpenCategoryIndex] = useState(null); // New state for mobile category dropdowns

  // Close main dropdown if mobile menu closes or if transitioning to desktop
  useEffect(() => {
    if (!mobile) {
      // If it's desktop view
      setIsMainDropdownOpen(false); // Ensure main dropdown is closed
      setOpenCategoryIndex(null); // Ensure no category dropdown is open
    }
  }, [mobile]);

  const toggleMainDropdown = () => {
    setIsMainDropdownOpen(!isMainDropdownOpen);
    if (isMainDropdownOpen) {
      // If closing the main dropdown, close any open category dropdown too
      setOpenCategoryIndex(null);
    }
  };

  const toggleCategoryDropdown = (index) => {
    setOpenCategoryIndex(openCategoryIndex === index ? null : index);
  };

  return (
    <li
      className="relative w-full lg:w-auto "
      onMouseEnter={mobile ? undefined : () => setIsMainDropdownOpen(true)}
      onMouseLeave={mobile ? undefined : () => setIsMainDropdownOpen(false)}
    >
      <Link
        to={URLS.SERVICES}
        onClick={toggleMainDropdown}
        className={`inline-flex items-center font-medium whitespace-nowrap focus:outline-none 
                                ${mobile ? "block w-full text-left " : ""}
                                ${textColorClass} ${linkHoverClass}`}
        aria-expanded={isMainDropdownOpen ? "true" : "false"}
        aria-controls="main-dropdown-content"
      >
        {translations[language].services}
        <svg
          className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${isMainDropdownOpen && mobile ? "rotate-180" : "rotate-0"
            }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={
              isMainDropdownOpen && mobile ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"
            }
          />
        </svg>
      </Link>

      <AnimatePresence>
        {isMainDropdownOpen && (
          <motion.div
            id="main-dropdown-content"
            initial={{ opacity: 0, y: mobile ? -10 : 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: mobile ? -10 : 10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`
                            ${mobile
                ? "relative w-full mt-2 p-4 bg-gray-50 rounded-lg shadow-inner"
                : "absolute left-1/2 sm:-left-[500%] top-full mt-3 w-screen max-w-screen-xl -translate-x-1/2 p-8 bg-white rounded-xl shadow-lg"
              }
                            overflow-hidden
                        `}
          >
            <div
              className={`grid ${mobile
                  ? "grid-cols-1 gap-y-0" // Adjusted gap-y for mobile as categories will have their own spacing
                  : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-8 gap-x-20"
                }`}
            >
              {latestserviceCategories.map((category, catIndex) => (
                <div
                  key={catIndex}
                  className="flex flex-col items-start text-left w-full"
                >
                  {/* Category Title - Acts as dropdown header on mobile */}
                  <button
                    onClick={
                      mobile
                        ? () => toggleCategoryDropdown(catIndex)
                        : undefined
                    }
                    className={`flex justify-between items-center w-full py-2 ${mobile ? "text-gray-800" : ""
                      }`}
                  >
                    <Link
                      to={category.url}
                      className="text-lg font-semibold bg-gradient-to-r from-[#6931CF] to-[#1A61EA] bg-clip-text text-transparent whitespace-nowrap"
                    >
                      {category.title}
                    </Link>
                    {mobile && ( // Show arrow only on mobile
                      <svg
                        className={`ml-2 h-5 w-5 text-gray-600 transform transition-transform duration-200 ${openCategoryIndex === catIndex
                            ? "rotate-180"
                            : "rotate-0"
                          }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={
                            openCategoryIndex === catIndex
                              ? "M5 15l7-7 7 7"
                              : "M19 9l-7 7-7-7"
                          }
                        />
                      </svg>
                    )}
                  </button>

                  {/* Category Items - Conditional rendering and animation for mobile */}
                  <AnimatePresence>
                    {(!mobile || openCategoryIndex === catIndex) && ( // Show on desktop OR if mobile and this category is open
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className={`space-y-2 ${mobile ? "w-full pl-4 mt-2" : ""
                          }`} // Indent and add top margin on mobile
                      >
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="w-20">
                            <Link
                              to={`${category.url}${item.hash}`} // e.g. /web#development-process
                              className={`block transition-colors duration-200 whitespace-nowrap text-gray-700 ${linkHoverClass}`}
                            >
                              {item.label}
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
