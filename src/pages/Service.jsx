import React from "react";
import Navbar from "../main/Navbar";
import PageWrapper from "../main/Pagewraper";
import { Link } from "react-router-dom";
import OveronsAccess from "./components/Overons-Access";
import WhatWeDo from "./components/WhatWeDo";
import TechnologyStats from "./components/Technology";
import StatsSection from "./components/Statsdata";
import ContactForm from "./components/Contact";
import Footer from "../main/Footer";
import { motion } from "framer-motion";
import Service2 from "./components/Service-2";
import SwiperService from "./components/SwiperService";

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

const Service = () => {
  return (
    <>
      <div className="relative h-screen w-full">
        {/* Navbar */}
        <Navbar />

        {/* Background Image */}
        <div className="relative h-[500px] overflow-visible">
          <PageWrapper>
            <div>
              {/* Background Image */}
              <img
                src="/images/bg-overlay.png"
                alt="Hero Background"
                className="absolute inset-0 w-full h-full object-cover z-0"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/1920x1080/000000/FFFFFF?text=Background+Image";
                }}
              />

              {/* Centered Yellow Glow */}
              <span
                className="
              absolute top-1/2 left-1/2 
              -translate-x-1/2 -translate-y-1/2
              w-[400px] h-[400px]
              bg-[#FFC003] opacity-10 blur-3xl rounded-full
              z-10 pointer-events-none"
              />
            </div>

            {/* Animated Content */}
            <motion.div
              className="absolute top-44"
              variants={containerVariant}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                className="text-4xl text-white sm:text-5xl md:text-6xl lg:text-6xl font-semibold mb-4 md:mb-6"
                variants={fadeUpVariant}
              >
                Empowering IT Consulting <br />
                <span className="mt-3">With </span>
                <span className="mt-3 relative inline-block">
                  Expert
                  <span className="absolute left-0 right-0 -bottom-2 h-1 bg-gradient-to-r from-orange-500 to-yellow-500"></span>
                </span>
              </motion.h1>

                <motion.div
                className="mt-10 sm:mt-16 flex justify-start"
                variants={fadeUpVariant}
                transition={{ delay: 0.5 }}
              >
                <div
                  className="
                  flex flex-wrap lg:flex-nowrap items-center 
                  gap-2 lg:gap-3 
                  px-4 sm:px-6 py-2 sm:py-3 
                  border border-white/30 
                  rounded-full text-sm sm:text-base 
                  text-white bg-white/5 hover:bg-white/10 
                  transition-all duration-300
                "
                >
                  <Link
                    to="/"
                    className="text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    Home
                  </Link>
                  <span className="text-orange-400">››</span>
                  <Link
                    className="text-blue-500 hover:text-blue-600 transition-colors"
                  >
                    Services
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </PageWrapper>
        </div>

        <Service2 />
        <SwiperService />

        <motion.div
          className="bg-cover bg-center text-white px-4 sm:px-6 md:px-10 lg:px-20 py-10 rounded-lg shadow-lg my-20 flex flex-col lg:flex-row items-center lg:items-start"
          style={{ backgroundImage: "url('/images/Home.png')" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Left Content */}
          <motion.div
            className="w-full lg:w-[60%] mb-8 lg:mb-0 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Transform Your Business Today <br /> Speak with Our Experts!
            </motion.h2>

            <motion.p
              className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-6 py-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Ready to take your business to the next level with cutting-edge IT
              <br />
              solutions? Our team is here to help you transform.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="relative w-full sm:w-auto bg-white rounded-full shadow-lg flex items-center max-w-md p-1">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base text-gray-700 bg-transparent outline-none placeholder-gray-500 rounded-full"
                  aria-label="Email Address"
                />
                <button
                  className="flex items-center justify-center px-6 py-2 sm:px-8 sm:py-3 bg-gradient-to-r from-purple-600 to-indigo-700 text-white text-sm sm:text-lg font-semibold rounded-full shadow-md hover:shadow-xl transition"
                  aria-label="Subscribe"
                >
                  Subscribe
                  <svg
                    className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    ></path>
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="w-full lg:w-[40%] flex justify-center items-center mt-8 lg:mt-0"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/service-banner.png"
              alt="Fronx Circle"
              className="w-[80%] max-w-[300px] sm:max-w-sm md:max-w-md lg:max-w-full"
            />
          </motion.div>
        </motion.div>

        <ContactForm />
        <Footer />
      </div>
    </>
  );
};

export default Service;
