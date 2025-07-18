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
                src="/images/bg-2.png"
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

              <motion.button
                className="border text-white flex gap-3 px-5 py-2 rounded-3xl mt-16"
                variants={fadeUpVariant}
                transition={{ delay: 0.5 }}
              >
                <Link to="/" className="text-orange-500">
                  Home
                </Link>
                <span className="text-orange-500">&gt;&gt;</span>
                <Link className="text-blue-600">Over Ons</Link>
              </motion.button>
            </motion.div>
          </PageWrapper>
        </div>
        <Service2/>
        <SwiperService/>
        <Footer />
      </div>
    </>
  );
};

export default Service;
