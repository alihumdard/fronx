import React, { useState } from "react";
import PageWrapper from "./Pagewraper";
import DropdownMenu from "./DropdownMenu";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isFrench, setIsFrench] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = () => setIsFrench(!isFrench);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Fade-up animation variants
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`absolute top-0 left-0 w-full z-20 transition-colors duration-300 ${
        isMobileMenuOpen ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <PageWrapper>
        <div className="flex flex-col lg:flex-row items-center justify-between py-3 lg:py-5">
          {/* Logo & Mobile Toggle */}
          <div className="flex items-center justify-between w-full lg:w-auto mb-2 lg:mb-0">
            <motion.div
              key={isMobileMenuOpen ? "logo-2" : "logo-1"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center"
            >
              <img
                src={
                  isMobileMenuOpen ? "/images/logo-2.png" : "/images/logo.png"
                }
                alt="Logo"
                className="h-8 lg:h-10 w-auto transition-all duration-300"
              />
            </motion.div>
            {/* Hamburger Icon */}
            <button
              className="lg:hidden focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                className={`w-6 h-6 transition-colors duration-300 ${
                  isMobileMenuOpen ? "text-gray-800" : "text-white"
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

          {/* Navigation Links */}
          <AnimatePresence>
            {(isMobileMenuOpen || window.innerWidth >= 1024) && (
              <motion.div
                key="nav-links"
                variants={fadeUp}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4 }}
                className={`w-full lg:flex flex-1 justify-center items-center ${
                  isMobileMenuOpen ? "block" : "hidden"
                } lg:space-x-6 mt-4 lg:mt-0`}
              >
                <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 xl:space-x-8 w-full lg:w-auto">
                  <li>
                    <DropdownMenu
                      mobile={isMobileMenuOpen}
                      textColorClass={
                        isMobileMenuOpen ? "text-gray-800" : "text-white"
                      }
                    />
                  </li>

                  {/* Over Ons */}
                  <motion.li
                    variants={fadeUp}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 0.1 }}
                  >
                    <Link
                    to="/over-ons"
                      href="#"
                      className={`px-2 py-1 block w-full text-start pl-4 sm:pl-0 ${
                        isMobileMenuOpen
                          ? "text-gray-800 hover:text-blue-600"
                          : "text-white hover:text-gray-300"
                      }`}
                    >
                      Over Ons
                    </Link>
                  </motion.li>

                  {/* Services */}
                  <motion.li
                    variants={fadeUp}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 0.15 }}
                  >
                    <a
                      href="#"
                      className={`px-2 py-1 block w-full text-start pl-4 sm:pl-0 ${
                        isMobileMenuOpen
                          ? "text-gray-800 hover:text-blue-600"
                          : "text-white hover:text-gray-300"
                      }`}
                    >
                      Services
                    </a>
                  </motion.li>

                  {/* Blog */}
                  <motion.li
                    variants={fadeUp}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 0.2 }}
                  >
                    <a
                      href="#"
                      className={`px-2 py-1 block w-full text-start pl-4 sm:pl-0 ${
                        isMobileMenuOpen
                          ? "text-gray-800 hover:text-blue-600"
                          : "text-white hover:text-gray-300"
                      }`}
                    >
                      Blog
                    </a>
                  </motion.li>

                  {/* Portfolio */}
                  <motion.li
                    variants={fadeUp}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 0.25 }}
                  >
                    <a
                      href="#"
                      className={`px-2 py-1 block w-full text-start pl-4 sm:pl-0 ${
                        isMobileMenuOpen
                          ? "text-gray-800 hover:text-blue-600"
                          : "text-white hover:text-gray-300"
                      }`}
                    >
                      Portfolio
                    </a>
                  </motion.li>

                  {/* Language Toggle */}
                  <motion.li
                    variants={fadeUp}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 0.35 }}
                    className="w-full lg:w-auto flex justify-start sm:mt-0 mt-10"
                  >
                    <div className="flex items-center space-x-2 bg-[#0B1623] p-1 rounded-full">
                      <span className="text-white text-xs font-medium">EN</span>
                      <button
                        onClick={toggleLanguage}
                        className="w-12 h-6 flex items-center bg-white rounded-full px-1 transition-all duration-300"
                      >
                        <div
                          className={`w-4 h-4 rounded-full transition-all duration-300 ${
                            isFrench
                              ? "translate-x-6 bg-gradient-to-r from-[#6931CF] to-[#1A61EA]"
                              : "translate-x-0 bg-gray-300"
                          }`}
                        ></div>
                      </button>
                      <span className="text-white text-xs font-medium">FR</span>
                    </div>
                  </motion.li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Contact Button */}
          <AnimatePresence>
            {(isMobileMenuOpen || window.innerWidth >= 1024) && (
              <motion.div
                key="contact-btn"
                variants={fadeUp}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4 }}
                className={`w-full lg:w-auto flex justify-start lg:justify-end mt-4 lg:mt-0 ${
                  isMobileMenuOpen ? "block" : "hidden"
                } lg:flex items-center space-x-4`}
              >
                <a
                  href="#"
                  className="bg-blue-600 text-white px-4 py-1.5 lg:px-5 lg:py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition text-sm lg:text-base"
                >
                  Contact Us
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </PageWrapper>
    </motion.nav>
  );
};

export default Navbar;
