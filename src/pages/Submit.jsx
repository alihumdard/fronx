import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import Navbar from "../main/Navbar";
import PageWrapper from "../main/Pagewraper";
import ContactForm from "./components/Contact";
import Footer from "../main/Footer";
import StatsSection from "./components/Statsdata";
import ProjectGridSection from "./components/ProjectGridSection";
import translations from "../translations";
import { useLanguage } from "../LanguageContext";
import URLS from "../config/urls.config";

// Animation Variants (kept as is, assuming they are correct)
const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};
const Submit = () => {
  const { language } = useLanguage();
  const [expandedCard, setExpandedCard] = useState(null); // State to manage which card is expanded

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <>
      <div className="relative h-screen w-full">
        {/* Navbar */}
        <Navbar />

        {/* Background Image */}
        <div className="relative min-h-[400px] sm:min-h-[500px] w-full overflow-hidden">
          <PageWrapper>
            {/* Background Image */}
            <img
              src="/images/bg-2.png"
              alt="Hero Background"
              className="absolute inset-0 w-full h-full object-cover z-0"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/1920x1080/000000/FFFFFF?text=Background+Image";
              }}
            />

            {/* Yellow Glow Circle */}
            <span
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-[#FFC003] opacity-10 blur-3xl rounded-full
      z-10 pointer-events-none"
            />

            {/* Animated Content */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center sm:px-6 md:px-10 z-20"
              variants={containerVariant}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6 sm:mb-10"
                variants={fadeUpVariant}
              >
                {translations[language].submit1}
              </motion.h1>

              <div
                className="
                  flex gap-5 justify-center
                "
              >
                <Link
                  to="/"
                  className="text-orange-400 hover:text-orange-300 transition-colors"
                >
                  {translations[language].home}
                </Link>
                <span className="text-orange-400">››</span>
                <Link className="text-blue-400 hover:text-blue-300 transition-colors">
                  {translations[language].submit1}
                </Link>
              </div>
            </motion.div>
          </PageWrapper>
        </div>

        <div className="bg-white py-20 px-4 sm:px-6 lg:px-44">
          {/* Header Section */}
          <div className="max-w-4xl ">
            <h1 className="text-5xl font-extrabold text-gray-700 bg-clip-text  mb-4">
              {translations[language].submit2}
            </h1>
            <p className="text-lg text-gray-600 mb-6">
             {translations[language].submit3}
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow transition duration-300">
             {translations[language].submit4}
            </button>
          </div>

          {/* Content Section */}
          <div className="">
            <div className="mt-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="text-gray-700 space-y-6 text-lg">
                <p>
               {translations[language].submit5} <span className="font-semibold text-purple-600">Fronx Solutions</span> {translations[language].submit6}
                </p>
                <p>
                 {translations[language].submit7}
                </p>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1590650046871-92c887180603"
                  alt="Team discussion"
                  className="w-full rounded-xl shadow-xl"
                />
              </div>
            </div>

            {/* Form Section */}
            <div className="mt-24 bg-gray-50 p-10 rounded-2xl max-w-4xl mx-auto shadow-xl">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
              {translations[language].submit8}
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder={translations[language].firstname}
                    className="border border-gray-300 px-4 py-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                  />
                  <input
                    type="text"
                    placeholder={translations[language].LastName}
                    className="border border-gray-300 px-4 py-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                  />
                  <input
                    type="text"
                    placeholder={translations[language].business}
                    className="border border-gray-300 px-4 py-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                  />
                  <input
                    type="text"
                    placeholder={translations[language].footer4}
                    className="border border-gray-300 px-4 py-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                  />
                </div>
                <input
                  type="email"
                  placeholder={translations[language].footer3}
                  className="border border-gray-300 px-4 py-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                />
                      <div className="w-full space-y-4">
                  {/* Text Input */}
                  <input
                    type="text"
                    placeholder={translations[language].subject}
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />

                  {/* Dropdown */}
                  <select
                    className="w-full text-gray-400 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      {translations[language].subject1}
                    </option>
                    <option value="general">{translations[language].subject2}</option>
                    <option value="support">{translations[language].subject3}</option>
                    <option value="feedback">{translations[language].subject4}</option>
                    <option value="quote">{translations[language].subject5}</option>
                    <option value="quote">{translations[language].subject6}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {translations[language].upload}
                  </label>
                  <input
                    type="file"
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:font-semibold file:bg-purple-100 file:text-purple-700 hover:file:bg-purple-200 transition"
                  />
                </div>
                <textarea
                  placeholder={translations[language].tell}
                  rows="5"
                  className="border border-gray-300 px-4 py-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                ></textarea>
                <div className="flex items-start">
                  <input type="checkbox" className="mr-3 mt-1" />
                  <p className="text-sm text-gray-600">
                    I authorize D/M digital to use the data transmitted through this form, including for marketing purposes. See our{" "}
                    <a href="#" className="underline text-purple-600 hover:text-purple-800">
                      Privacy Policy
                    </a>{" "}
                    to learn more.
                  </p>
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition duration-300"
                >
                  {translations[language].send}
                </button>
              </form>
            </div>
          </div>
        </div>


        <Footer />
      </div>
    </>
  );
};

export default Submit;