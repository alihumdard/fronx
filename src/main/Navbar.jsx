import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import PageWrapper from "./Pagewraper";
import DropdownMenu from "./DropdownMenu";
import URLS from "../config/urls.config";
import translations from "../translations";
import { useLanguage } from "../LanguageContext";
import useScrollDetection from "./useScrollDetection";

const Navbar = () => {
  const location = useLocation();
  const { language, toggleLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolled = useScrollDetection(10);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const getNavbarBackground = () => {
    if (isMobileMenuOpen) {
      return "bg-white shadow-lg";
    }
    return isScrolled ? "bg-white shadow-lg" : "bg-transparent";
  };

  const getDesktopTextColor = () => {
    return isScrolled ? "text-gray-800" : "text-white";
  };

  const getMobileLinkClasses = (path) =>
    `px-2 py-2 block w-full text-start ${
      location.pathname === path
        ? "bg-gradient-to-r from-[#6931CF] to-[#1A61EA] text-transparent bg-clip-text font-medium"
        : "text-gray-800 hover:text-blue-600"
    }`;

  const getDesktopLinkClasses = (path) => {
    const isActive = location.pathname === path;
    return `
      px-2 py-1 transition-all duration-300 ease-in-out
      ${
        isActive
          ? "bg-gradient-to-r from-[#6931CF] to-[#1A61EA] text-transparent bg-clip-text font-semibold border-b-2 border-blue-500"
          : `${getDesktopTextColor()} hover:text-blue-500`
      }
      hover-underline-animation
    `;
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${getNavbarBackground()}`}
      >
        <PageWrapper>
          <div className="flex flex-col lg:flex-row items-center justify-between py-3 lg:py-5">
            {/* Logo + Mobile Menu Button */}
            <div className="flex items-center justify-between w-full lg:w-auto">
              <motion.div
                key={isMobileMenuOpen || isScrolled ? "logo-dark" : "logo-light"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center"
              >
                <Link to="/">
                  <img
                    src={
                      isMobileMenuOpen || isScrolled
                        ? "/images/logo-2.png" // Dark logo for white background
                        : "/images/logo.png" // White logo for transparent background
                    }
                    alt="Logo"
                    className="h-8 lg:h-10 w-auto transition-all duration-300"
                  />
                </Link>
              </motion.div>

              <button
                className="lg:hidden focus:outline-none z-50"
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
              >
                <svg
                  className={`w-6 h-6 transition-colors duration-300 ${
                    isMobileMenuOpen ? "text-gray-800" : getDesktopTextColor()
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
                      isMobileMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex flex-1 justify-center items-center space-x-6">
              <ul className="flex space-x-4 xl:space-x-8">
                <li>
                  <Link
                    to={URLS.HOME}
                    className={getDesktopLinkClasses(URLS.HOME)}
                  >
                    {translations[language].home}
                  </Link>
                </li>
                <li>
                  <Link
                    to={URLS.OVERONS}
                    className={getDesktopLinkClasses(URLS.OVERONS)}
                  >
                    {translations[language].overOns}
                  </Link>
                </li>
                <li>
                  <DropdownMenu
                    mobile={false}
                    textColorClass={getDesktopTextColor()}
                  />
                </li>
                <li>
                  <Link
                    to={URLS.BOLG}
                    className={getDesktopLinkClasses(URLS.BOLG)}
                  >
                    {translations[language].blog}
                  </Link>
                </li>
                 <li>
                  <Link
                  to={URLS.PORTFOLIO}
                    className={getDesktopLinkClasses(URLS.PORTFOLIO)}
                  >
                    {translations[language].portfolio}
                  </Link>
                </li>
                <div className="flex items-center space-x-2 rounded-full">
                  <span
                    className={`text-xs font-medium ${getDesktopTextColor()}`}
                  >
                    NL
                  </span>
                  <button
                    onClick={toggleLanguage}
                    className="w-12 h-6 flex items-center border border-gray-500 bg-white rounded-full px-1 transition-all duration-300"
                  >
                    <div
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        language === "fr"
                          ? "translate-x-6 bg-gradient-to-r from-[#6931CF] to-[#1A61EA]"
                          : "translate-x-0 bg-gray-300"
                      }`}
                    ></div>
                  </button>
                  <span
                    className={`text-xs font-medium ${getDesktopTextColor()}`}
                  >
                    FR
                  </span>
                </div>
              </ul>
            </div>

            {/* Desktop Right Side Elements */}
            <div className="hidden lg:flex items-center space-x-6">
              <Link
                to={URLS.SUBMIT}
                className="btn-animate bg-gradient-to-r from-[#6931CF] to-[#1A61EA] text-white px-5 py-2 rounded-full font-semibold shadow"
              >
                <span className="relative z-[1]">
                  {translations[language].trans}
                </span>
              </Link>
              <Link
                to={URLS.CONTACT}
                className="btn-animate bg-gradient-to-r from-[#6931CF] to-[#1A61EA] text-white px-5 py-2 rounded-full font-semibold shadow"
              >
                <span className="relative z-[1]">
                  {translations[language].contacts}
                </span>
              </Link>
            </div>
          </div>
        </PageWrapper>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              key="mobile-menu"
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-y-0 left-0 w-full max-w-[90vw] bg-white shadow-xl lg:hidden z-[9999] overflow-y-auto p-6 flex flex-col"
            >
              <div className="flex justify-end mb-8">
                <button
                  className="focus:outline-none"
                  onClick={toggleMobileMenu}
                  aria-label="Close menu"
                >
                  <svg
                    className="w-6 h-6 text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <ul className="flex flex-col space-y-4 flex-grow">
                <li className="border-b-2">
                  <Link
                    to={URLS.HOME}
                    className={getMobileLinkClasses(URLS.HOME)}
                    onClick={toggleMobileMenu}
                  >
                    {translations[language].home}
                  </Link>
                </li>
                <li className="border-b-2">
                  <Link
                    to={URLS.OVERONS}
                    className={getMobileLinkClasses(URLS.OVERONS)}
                    onClick={toggleMobileMenu}
                  >
                    {translations[language].overOns}
                  </Link>
                </li>
                <li>
                  <DropdownMenu
                    mobile={true}
                    onCloseMobileMenu={toggleMobileMenu}
                  />
                </li>
                <li className="border-b-2">
                  <Link
                    to={URLS.BOLG}
                    className={getMobileLinkClasses(URLS.BOLG)}
                    onClick={toggleMobileMenu}
                  >
                    {translations[language].blog}
                  </Link>
                </li>
                <li className="border-b-2">
                  <Link
                    to={URLS.PORTFOLIO}
                    className={getMobileLinkClasses(URLS.PORTFOLIO)}
                    onClick={toggleMobileMenu}
                  >
                    {translations[language].portfolio}
                  </Link>
                </li>
                <li className="flex justify-start mt-auto pt-4">
                  <div className="flex items-center space-x-2 rounded-full">
                    <span className="text-gray-800 text-xs font-medium">
                      NL
                    </span>
                    <button
                      onClick={toggleLanguage}
                      className="w-12 h-6 flex items-center border border-gray-500 bg-white rounded-full px-1 transition-all duration-300"
                    >
                      <div
                        className={`w-4 h-4 rounded-full transition-all duration-300 ${
                          language === "fr"
                            ? "translate-x-6 bg-gradient-to-r from-[#6931CF] to-[#1A61EA]"
                            : "translate-x-0 bg-gray-300"
                        }`}
                      ></div>
                    </button>
                    <span className="text-gray-800 text-xs font-medium">
                      FR
                    </span>
                  </div>
                </li>
                <li className="pt-6 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                  <Link
                    to={URLS.SUBMIT}
                    className="btn-animate bg-gradient-to-r from-[#6931CF] to-[#1A61EA] text-white px-5 py-3 rounded-full font-semibold shadow text-sm w-full text-center block"
                    onClick={toggleMobileMenu}
                  >
                    <span className="relative z-[1]">
                      {translations[language].trans}
                    </span>
                  </Link>
                  <Link
                    to={URLS.CONTACT}
                    className="btn-animate bg-gradient-to-r from-[#6931CF] to-[#1A61EA] text-white px-5 py-3 rounded-full font-semibold shadow text-sm w-full text-center block"
                    onClick={toggleMobileMenu}
                  >
                    <span className="relative z-[1]">
                      {translations[language].contacts}
                    </span>
                  </Link>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-[9998] lg:hidden"
              onClick={toggleMobileMenu}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;