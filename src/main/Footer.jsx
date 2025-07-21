import React from "react";
import PageWrapper from "./Pagewraper";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import URLS from "../config/urls.config";

function Footer() {
  const companyLogos = [
    { src: "/images/company-1.png", alt: "Zscaler" },
    { src: "/images/company-2.png", alt: "Blender" },
    { src: "/images/company-3.png", alt: "Syngenta" },
    { src: "/images/company-4.png", alt: "Vattenfall" },
    { src: "/images/company-5.png", alt: "Disco" },
    { src: "/images/company-6.png", alt: "Soriana" },
    { src: "/images/company-7.png", alt: "Skullcandy" },
  ];

  const containerVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <>
      {/* Company Logos + CTA Section */}
      <motion.header
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariant}
        className="relative z-10"
      >
        <PageWrapper>
          <motion.div
            className="bg-white shadow-sm py-4 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center"
            variants={itemVariant}
          >
            <motion.div
              className="flex flex-wrap justify-center py-20 md:justify-start items-center gap-x-14 gap-y-4 mt-10 mb-10 w-full"
              variants={containerVariant}
            >
              {companyLogos.map((logo, index) => (
                <motion.img
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-6 opacity-70"
                  variants={itemVariant}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* CTA Banner */}
          <motion.div
            className="bg-white justify-between absolute -bottom-16 -left-0 sm:left-[16%] transform -translate-x-1/2 shadow-2xl rounded-xl p-6 md:p-10 flex flex-col md:flex-row items-center max-w-5xl w-full mx-auto"
            variants={itemVariant}
          >
            <p className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-0 md:mr-8 text-center md:text-left">
              Ready to bring your project to life?
            </p>
            <Link
              to={URLS.CONTACT}
              className="text-white font-semibold py-3 px-8 rounded-3xl shadow-md transition duration-300 ease-in-out"
              style={{
                background: "linear-gradient(to right, #6931CF, #1A61EA)",
              }}
            >
              Contact Us
            </Link>
          </motion.div>
        </PageWrapper>
      </motion.header>

      {/* Footer Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariant}
        className="min-h-screen relative bg-fronx-light-gray bg-cover bg-center pt-40 bg-no-repeat"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        <PageWrapper>
          <motion.section
            className="bg-gradient-to-b from-fronx-dark-bg to-fronx-darkest-bg py-16 px-4 md:px-12 text-white"
            variants={itemVariant}
          >
            <motion.ul
              className="grid grid-cols-2 sm:grid-cols-5 gap-6 text-center"
              variants={containerVariant}
            >
              {[
                "Web Development",
                "App Development",
                "UX/UI Design",
                "Maintenance",
                "Digital Marketing",
              ].map((service, index) => (
                <motion.li
                  key={index}
                  className="text-base sm:text-lg md:text-xl font-semibold"
                  variants={itemVariant}
                >
                  {service}
                </motion.li>
              ))}
            </motion.ul>
          </motion.section>

          {/* Footer Sections */}
          <motion.footer
            className="text-white pt-12 pb-4 px-4 md:px-12"
            variants={containerVariant}
          >
            <div className="container mx-auto flex flex-wrap justify-between gap-y-10 pb-10 border-b border-gray-700">
              {/* About */}
              <motion.div
                className="w-full md:w-1/2 lg:w-1/5"
                variants={itemVariant}
              >
                <h2 className="text-3xl font-bold mb-4">FRONX</h2>
                <p className="text-sm opacity-80 mb-6">
                  Driving Business Success Through Innovative Technology | Fronx
                  Solutions
                </p>
                <div className="flex space-x-3">
                  {["T", "L", "I", "P", "M"].map((item, idx) => (
                    <motion.a
                      key={idx}
                      href="#"
                      className="w-8 h-8 flex items-center justify-center bg-[#FF9B4B] rounded text-white text-lg"
                      variants={itemVariant}
                    >
                      {item}
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Menu */}
              <motion.div
                className="w-1/2 md:w-1/4 lg:w-1/6"
                variants={itemVariant}
              >
                <h3 className="text-lg font-semibold mb-4">Menu</h3>
                <ul className="space-y-2 text-sm opacity-80">
                  <li>
                    <Link to={URLS.HOME} className="hover:text-gray-400">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to={URLS.OVERONS} className="hover:text-gray-400">
                      Over Ons
                    </Link>
                  </li>
                  <li>
                    <Link to={URLS.SERVICES} className="hover:text-gray-400">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to={URLS.BLOG} className="hover:text-gray-400">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-gray-400">
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link to={URLS.CONTACT} className="hover:text-gray-400">
                      Contact
                    </Link>
                  </li>
                </ul>
              </motion.div>

              {/* Services Column 1 */}
              <motion.div
                className="w-1/2 md:w-1/4 lg:w-1/6"
                variants={itemVariant}
              >
                <h3 className="text-lg font-semibold mb-4">Services</h3>
                <ul className="space-y-2 text-sm opacity-80">
                  <li>
                    <Link
                      to={URLS.SERVICE_DETAIL.WEB_DEVELOPMENT}
                      className="hover:text-gray-400"
                    >
                      Web Design and Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={URLS.SERVICE_DETAIL.APP_DEVELOPMENT}
                      className="hover:text-gray-400"
                    >
                      Mobile Application Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={URLS.SERVICE_DETAIL.SOFTWARE_DEVELOPMENT}
                      className="hover:text-gray-400"
                    >
                      Software Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={URLS.SERVICE_DETAIL.UIUX_DEVELOPEMENT}
                      className="hover:text-gray-400"
                    >
                      UI/UX Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={URLS.SERVICE_DETAIL.SEO}
                      className="hover:text-gray-400"
                    >
                      SEO Services
                    </Link>
                  </li>
                </ul>
              </motion.div>

              {/* Services Column 2 */}
              <motion.div
                className="w-full md:w-1/4 lg:w-1/6"
                variants={itemVariant}
              >
                <h3 className="text-lg font-semibold mb-4">Services</h3>
                <ul className="space-y-2 text-sm opacity-80">
                  <li>g
                    <Link to={URLS.SERVICE_DETAIL.DIGITAL_MARKITING} className="hover:text-gray-400">
                      Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link to={URLS.SERVICE_DETAIL.CHATBOT_DEVELOPMENT} className="hover:text-gray-400">
                      AI Chatbot Solution
                    </Link>
                  </li>
                  <li>
                    <Link to={URLS.SERVICE_DETAIL.ECOMMERCE_DEVELOPMENT} className="hover:text-gray-400">
                      E-Commerce Solutions
                    </Link>
                  </li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              className="text-center text-xs opacity-60 mt-6"
              variants={itemVariant}
            >
              <p>&copy; 2025 All rights reserved Fronxsolutions</p>
            </motion.div>
          </motion.footer>
        </PageWrapper>
      </motion.div>
    </>
  );
}

export default Footer;
