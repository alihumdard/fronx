import React from "react";
import PageWrapper from "./Pagewraper";
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

  return (
    <>
      {/* Company Logos + CTA Section */}
      <header className="relative z-10">
        <PageWrapper>
          <div className="bg-white shadow-sm py-4 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap justify-center py-20 md:justify-start items-center gap-x-14 gap-y-4 mt-10 mb-10 w-full">
              {companyLogos.map((logo, index) => (
                <img
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-6 opacity-70"
                />
              ))}
            </div>
          </div>

          {/* CTA Banner */}
          <div className="bg-white justify-between absolute -bottom-16 left-48 sm:left-[50%] transform -translate-x-1/2 shadow-2xl rounded-xl p-6 md:p-10 flex flex-col md:flex-row items-center max-w-5xl w-full mx-auto">
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
          </div>
        </PageWrapper>
      </header>

      {/* Footer Content */}
      <div
        className="min-h-screen relative bg-fronx-light-gray bg-cover bg-center pt-40 bg-no-repeat"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        <PageWrapper>
          <section className="bg-gradient-to-b from-fronx-dark-bg to-fronx-darkest-bg py-16 px-4 md:px-12 text-white">
            <ul className="grid grid-cols-2 sm:grid-cols-5 gap-6 text-center">
              {[
                "Web Development",
                "App Development",
                "UX/UI Design",
                "Maintenance",
                "Digital Marketing",
              ].map((service, index) => (
                <li
                  key={index}
                  className="text-base sm:text-lg md:text-xl font-semibold"
                >
                  {service}
                </li>
              ))}
            </ul>
          </section>

          {/* Footer Sections */}
          <footer className="text-white pt-12 pb-4 px-4 md:px-12">
            <div className="container mx-auto flex flex-wrap justify-between gap-y-10 pb-10 border-b border-gray-700">
              {/* About */}
              <div className="w-full md:w-1/2 lg:w-1/5">
                <h2 className="text-3xl font-bold mb-4">FRONX</h2>
                <p className="text-sm opacity-80 mb-6">
                  Driving Business Success Through Innovative Technology | Fronx Solutions
                </p>
                <div className="flex space-x-3">
                  {["T", "L", "I", "P", "M"].map((item, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="w-8 h-8 flex items-center justify-center bg-[#FF9B4B] rounded text-white text-lg"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>

              {/* Menu */}
              <div className="w-1/2 md:w-1/4 lg:w-1/6">
                <h3 className="text-lg font-semibold mb-4">Menu</h3>
                <ul className="space-y-2 text-sm opacity-80">
                  <li><Link to={URLS.HOME} className="hover:text-gray-400">Home</Link></li>
                  <li><Link to={URLS.OVERONS} className="hover:text-gray-400">Over Ons</Link></li>
                  <li><Link to={URLS.SERVICES} className="hover:text-gray-400">Services</Link></li>
                  <li><Link to={URLS.BLOG} className="hover:text-gray-400">Blog</Link></li>
                  <li><Link to="#" className="hover:text-gray-400">Portfolio</Link></li>
                  <li><Link to={URLS.CONTACT} className="hover:text-gray-400">Contact</Link></li>
                </ul>
              </div>

              {/* Services Column 1 */}
              <div className="w-1/2 md:w-1/4 lg:w-1/6">
                <h3 className="text-lg font-semibold mb-4">Services</h3>
                <ul className="space-y-2 text-sm opacity-80">
                  <li><Link to={URLS.SERVICE_DETAIL.WEB_DEVELOPMENT} className="hover:text-gray-400">Web Design and Development</Link></li>
                  <li><Link to={URLS.SERVICE_DETAIL.APP_DEVELOPMENT} className="hover:text-gray-400">Mobile Application Development</Link></li>
                  <li><Link to={URLS.SERVICE_DETAIL.SOFTWARE_DEVELOPMENT} className="hover:text-gray-400">Software Development</Link></li>
                  <li><Link to={URLS.SERVICE_DETAIL.UIUX_DEVELOPEMENT} className="hover:text-gray-400">UI/UX Design</Link></li>
                  <li><Link to={URLS.SERVICE_DETAIL.SEO} className="hover:text-gray-400">SEO Services</Link></li>
                </ul>
              </div>

              {/* Services Column 2 */}
              <div className="w-full md:w-1/4 lg:w-1/6">
                <h3 className="text-lg font-semibold mb-4">Services</h3>
                <ul className="space-y-2 text-sm opacity-80">
                  <li><Link to={URLS.SERVICE_DETAIL.DIGITAL_MARKITING} className="hover:text-gray-400">Digital Marketing</Link></li>
                  <li><Link to={URLS.SERVICE_DETAIL.CHATBOT_DEVELOPMENT} className="hover:text-gray-400">AI Chatbot Solution</Link></li>
                  <li><Link to={URLS.SERVICE_DETAIL.ECOMMERCE_DEVELOPMENT} className="hover:text-gray-400">E-Commerce Solutions</Link></li>
                </ul>
              </div>
            </div>

            <div className="text-center text-xs opacity-60 mt-6">
              <p>&copy; 2025 All rights reserved Fronxsolutions</p>
            </div>
          </footer>
        </PageWrapper>
      </div>
    </>
  );
}

export default Footer;
