import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import PageWrapper from "./Pagewraper";
import DropdownMenu from "./DropdownMenu";
import URLS from "../config/urls.config";

const Navbar = () => {
  const location = useLocation();
  const [isFrench, setIsFrench] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleLanguage = () => setIsFrench(!isFrench);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  // Helper functions for text and link classes
  const getTextColor = () => (isScrolled ? "text-gray-800" : "text-white");
  const getNavbarBackground = () =>
    isScrolled ? "bg-white shadow-lg" : "bg-transparent";

  // Mobile link classes
  const getMobileLinkClasses = (path) =>
    `px-2 py-2 block w-full text-start ${
      location.pathname === path
        ? "bg-gradient-to-r from-[#6931CF] to-[#1A61EA] text-transparent bg-clip-text font-medium"
        : "text-gray-800 hover:text-blue-600"
    }`;

  // Desktop link classes
  const getDesktopLinkClasses = (path) => {
    const isActive = location.pathname === path;
    return `px-2 py-1 ${
      isActive
        ? "bg-gradient-to-r from-[#6931CF] to-[#1A61EA] text-transparent bg-clip-text border-b-2 border-blue-500"
        : `${getTextColor()} hover:text-blue-300`
    }`;
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isMobileMenuOpen ? "bg-white shadow-lg" : getNavbarBackground()
        }`}
      >
        <PageWrapper>
          <div className="flex flex-col lg:flex-row items-center justify-between py-3 lg:py-5">
            {/* Logo + Mobile Menu Button */}
            <div className="flex items-center justify-between w-full lg:w-auto">
              <motion.div
                key={isMobileMenuOpen || isScrolled ? "logo-2" : "logo-1"}
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
                        ? "/images/logo-2.png"
                        : "/images/logo.png"
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
                    isMobileMenuOpen || isScrolled
                      ? "text-gray-800"
                      : "text-white"
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
                        ? ""
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
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to={URLS.OVERONS}
                    className={getDesktopLinkClasses(URLS.OVERONS)}
                  >
                    Over Ons
                  </Link>
                </li>

                <li>
                  <DropdownMenu
                    mobile={false}
                    textColorClass={getDesktopLinkClasses(URLS.SERVICES)}
                  />
                </li>

                <li>
                  <Link
                    to={URLS.BOLG}
                    className={getDesktopLinkClasses(URLS.BOLG)}
                  >
                    Blog
                  </Link>
                </li>

                <li>
                  <a
                    href="#"
                    className={`px-2 py-1 ${getTextColor()} hover:text-blue-300`}
                  >
                    Portfolio
                  </a>
                </li>
                <div className="flex items-center space-x-2 rounded-full">
                  <span className={`text-xs font-medium ${getTextColor()}`}>
                    EN
                  </span>
                  <button
                    onClick={toggleLanguage}
                    className="w-12 h-6 flex items-center border border-gray-500 bg-white rounded-full px-1 transition-all duration-300"
                  >
                    <div
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        isFrench
                          ? "translate-x-6 bg-gradient-to-r from-[#6931CF] to-[#1A61EA]"
                          : "translate-x-0 bg-gray-300"
                      }`}
                    ></div>
                  </button>
                  <span className={`text-xs font-medium ${getTextColor()}`}>
                    FR
                  </span>
                </div>
              </ul>
            </div>

            {/* Desktop Right Side Elements */}
            <div className="hidden lg:flex items-center space-x-6">
              <Link
                to={URLS.CONTACT}
                className="btn-animate bg-gradient-to-r from-[#6931CF] to-[#1A61EA] text-white px-5 py-2 rounded-full font-semibold shadow"
              >
                <span className="relative z-[1]">Contact Us</span>
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
                    Home
                  </Link>
                </li>
                <li className="border-b-2">
                  <Link
                    to={URLS.OVERONS}
                    className={getMobileLinkClasses(URLS.OVERONS)}
                    onClick={toggleMobileMenu}
                  >
                    Over Ons
                  </Link>
                </li>
                <Link className="border-b-2">
                  <DropdownMenu
                    mobile={true}
                    textColorClass={getMobileLinkClasses(URLS.SERVICES)}
                    onCloseMobileMenu={toggleMobileMenu}
                  />
                </Link>
                <li className="border-b-2">
                  <Link
                    to={URLS.BOLG}
                    className={getMobileLinkClasses(URLS.BOLG)}
                    onClick={toggleMobileMenu}
                  >
                    Blog
                  </Link>
                </li>
                <li className="border-b-2">
                  <a
                    href="#"
                    className="px-2 py-2 block w-full text-start text-gray-800 hover:text-blue-600"
                    onClick={toggleMobileMenu}
                  >
                    Portfolio
                  </a>
                </li>
                <li className="flex justify-start mt-auto pt-4">
                  <div className="flex items-center space-x-2  rounded-full">
                    <span className="text-blacktext-xs font-medium">EN</span>
                    <button
                      onClick={toggleLanguage}
                      className="w-12 h-6 flex items-center bg-black rounded-full px-1 transition-all duration-300"
                    >
                      <div
                        className={`w-4 h-4 rounded-full transition-all duration-300 ${
                          isFrench
                            ? "translate-x-6 bg-gradient-to-r from-[#6931CF] to-[#1A61EA]"
                            : "translate-x-0 bg-gray-300"
                        }`}
                      ></div>
                    </button>
                    <span className="text-black text-xs font-medium">FR</span>
                  </div>
                </li>
                <li className="pt-6">
                  <Link
                    to={URLS.CONTACT}
                    className="btn-animate bg-gradient-to-r from-[#6931CF] to-[#1A61EA] text-white px-5 py-3 rounded-full font-semibold shadow text-sm w-full text-center block"
                    onClick={toggleMobileMenu}
                  >
                    <span className="relative z-[1]">Contact Us</span>
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
