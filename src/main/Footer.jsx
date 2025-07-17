import React from "react";
import PageWrapper from "./Pagewraper";
import { motion } from "framer-motion";

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

  const services = [
    "Web Development",
    "App Development",
    "UX/UI Design",
    "Maintenance",
    "Digital Marketing",
  ];

  // Variants for animations
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
      <motion.header
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariant}
        className="relative z-10"
      >
        <PageWrapper>
          {/* Top Bar */}
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

          {/* CTA Section */}
          <motion.div
            className="bg-white justify-between absolute -bottom-16 left-0 sm:left-[15%] transform -translate-x-1/2 shadow-2xl rounded-xl p-6 md:p-10 flex flex-col md:flex-row items-center max-w-5xl w-full mx-auto"
            variants={itemVariant}
          >
            <p className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-0 md:mr-8 text-center md:text-left">
              Ready to bring your project to life?
            </p>
            <button
              style={{
                background: "linear-gradient(to right, #6931CF, #1A61EA)",
              }}
              className="text-white font-semibold py-3 px-8 rounded-3xl shadow-md transition duration-300 ease-in-out"
            >
              Contact Us
            </button>
          </motion.div>
        </PageWrapper>
      </motion.header>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariant}
        className="min-h-screen relative bg-fronx-light-gray bg-cover bg-center pt-40 bg-no-repeat"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        <PageWrapper>
          <div>
            {/* Services Section */}
            <motion.section
              className="bg-gradient-to-b from-fronx-dark-bg to-fronx-darkest-bg py-16 px-4 md:px-12 text-white"
              variants={itemVariant}
            >
              <motion.ul
                className="grid grid-cols-2 sm:grid-cols-5 gap-6 text-center list-none p-0 m-0"
                variants={containerVariant}
              >
                {services.map((service, index) => (
                  <motion.li
                    key={index}
                    className="text-base sm:text-lg md:text-xl font-semibold sm:font-bold"
                    variants={itemVariant}
                  >
                    {service}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.section>

            {/* Footer Section */}
            <motion.footer
              className="text-white pt-12 pb-4 px-4 md:px-12"
              variants={containerVariant}
            >
              <div className="container mx-auto flex flex-wrap justify-between gap-y-10 pb-10 border-b border-gray-700">
                {/* Company Info */}
                <motion.div
                  className="w-full md:w-1/2 lg:w-1/5 mb-8 md:mb-0"
                  variants={itemVariant}
                >
                  <h2 className="text-3xl font-bold text-white mb-4">FRONX</h2>
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
                  className="w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/6 mb-8 md:mb-0"
                  variants={itemVariant}
                >
                  <h3 className="text-lg font-semibold mb-4">Menu</h3>
                  <ul className="space-y-2 text-sm opacity-80">
                    {[
                      "Home",
                      "Over ons",
                      "Services",
                      "Blog",
                      "Portfolio",
                      "Contact",
                    ].map((item, idx) => (
                      <li key={idx}>
                        <a href="#" className="hover:text-gray-400">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Services Column 1 */}
                <motion.div
                  className="w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/6 mb-8 md:mb-0"
                  variants={itemVariant}
                >
                  <h3 className="text-lg font-semibold mb-4">Services</h3>
                  <ul className="space-y-2 text-sm opacity-80">
                    {[
                      "Web Design and Development",
                      "Mobile Application Development",
                      "Software Development",
                      "UI/UX Design",
                      "SEO Services",
                    ].map((item, idx) => (
                      <li key={idx}>
                        <a href="#" className="hover:text-gray-400">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Services Column 2 */}
                <motion.div
                  className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6"
                  variants={itemVariant}
                >
                  <h3 className="text-lg font-semibold mb-4">Services</h3>
                  <ul className="space-y-2 text-sm opacity-80">
                    {[
                      "Digital Marketing",
                      "AI Chabot Solution",
                      "E-Commerce Solutions",
                    ].map((item, idx) => (
                      <li key={idx}>
                        <a href="#" className="hover:text-gray-400">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Copyright */}
              <motion.div
                className="text-center text-xs opacity-60 mt-6"
                variants={itemVariant}
              >
                <p>Copyright &copy; 2025 All rights reserved Fronxsolutions</p>
              </motion.div>
            </motion.footer>
          </div>
        </PageWrapper>
      </motion.div>
    </>
  );
}

export default Footer;
