import React from "react";
import Navbar from "../../main/Navbar";
import PageWrapper from "../../main/Pagewraper";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import URLS from "../../config/urls.config";

// Animation Variants (kept as is, assuming they are correct)
const containerVariants = {
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

const Hero = () => {
  return (
    <>
      <div className="relative h-screen w-full">
        {/* Navbar */}
        <Navbar />

        {/* Background Image */}
        <img
          src="/images/header.jpg"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
          // Add onerror for fallback if image fails to load
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/1920x1080/000000/FFFFFF?text=Background+Image";
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>

        {/* Hero Content - Adjusted for responsiveness while preserving large screen design */}
        {/* This div controls the overall positioning of the text block */}
        <div className="relative z-10 flex items-center justify-center min-h-full py-16 lg:justify-start lg:mr-[32%] lg:py-0">
          <PageWrapper>
            <motion.div
              // This inner div controls the alignment of text and items within the content block
              className="text-center flex flex-col lg:ml-16 lg:mt-14 items-center w-full max-w-full md:max-w-xl lg:max-w-full lg:items-start lg:text-left sm:px-0" // Added px for small screens
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Tags */}
              <motion.div
                className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mb-6 md:mb-8"
                variants={fadeUpVariant}
              >
                <Link to={URLS.SERVICE_DETAIL.WEB_DEVELOPMENT}>
                  <motion.span
                    className="bg-white text-black font-semibold text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full backdrop-blur-sm whitespace-nowrap"
                    variants={fadeUpVariant}
                  >
                    Web Development
                  </motion.span>
                </Link>
                <Link to={URLS.SERVICE_DETAIL.APP_DEVELOPMENT}>
                  <motion.span
                    className="bg-white text-black font-semibold text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full backdrop-blur-sm whitespace-nowrap"
                    variants={fadeUpVariant}
                  >
                    Application Development
                  </motion.span>
                </Link>

                <Link to={URLS.SERVICE_DETAIL.SEO}>
                  <motion.span
                    className="bg-white text-black font-semibold text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full backdrop-blur-sm whitespace-nowrap"
                    variants={fadeUpVariant}
                  >
                    SEO & Consulting
                  </motion.span>
                </Link>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                className="text-4xl text-white leading-tight sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6" // Responsive font sizes and margin
                variants={fadeUpVariant}
              >
                Fronx Solutions - Digital Agency
                <span
                  className="block w-4/5 sm:w-3/5 md:w-1/2 lg:w-3/5 xl:w-2/5 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mt-2 mx-auto lg:mx-0" // Centered on mobile, left-aligned on desktop
                ></span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                className="text-2xl text-white sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-semibold mb-6 md:mb-8" // Responsive font sizes and margin
                variants={fadeUpVariant}
              >
                Belgium & Morocco
              </motion.p>

              {/* Call-to-action Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 md:mb-8 w-full justify-center lg:justify-start" // Stack on mobile, row on sm+, centered on mobile, left on desktop
                variants={fadeUpVariant}
              >
                <Link
                  to={URLS.CONTACT}
                  className="bg-gradient-to-r from-[#6931CF] to-[#1A61EA] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-lg hover:opacity-90 transition-opacity whitespace-nowrap text-center" // Responsive padding/font, centered text
                >
                  BOOK A FREE CONSULTATION
                </Link>
                <Link
                  to={URLS.SERVICES}
                  className="border border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-[#6931CF] transition-colors whitespace-nowrap text-center" // Responsive padding/font, centered text
                >
                  Explore Service
                </Link>
              </motion.div>

              {/* Small Note */}
              <motion.p
                className="text-gray-300 text-sm italic text-center lg:text-left" // Centered on mobile, left-aligned on desktop
                variants={fadeUpVariant}
              >
                *Let's build something amazing together.
              </motion.p>
            </motion.div>
          </PageWrapper>
        </div>
      </div>

      {/* Achievements Section - Adjusted for responsiveness */}
      <PageWrapper>
        <section
          id="achievements"
          className="relative bg-gray-50 px-4 sm:px-6 lg:px-10 my-20 py-12 md:py-16 lg:my-40 lg:py-20 overflow-hidden" // Responsive margins and padding
        >
          {/* Decorative Image */}
          <img
            src="/images/OBJECTS.png"
            alt="Decorative Object"
            className="absolute hidden sm:block -right-20 -top-10 w-1/2 max-w-md md:max-w-lg lg:max-w-xl pointer-events-none opacity-80"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/500x500/CCCCCC/000000?text=Decorative+Object";
            }}
          />

          {/* Animated Content */}
          <div className="relative z-10 max-w-6xl mx-auto text-center lg:text-left">
            {" "}
            {/* Centered text on mobile, left on desktop */}
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8" // Responsive font sizes and margin
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              What will you get?
            </motion.h2>
            <motion.p
              className="text-base md:text-lg lg:text-xl text-gray-700 mb-8 md:mb-10 max-w-full lg:max-w-3xl mx-auto lg:mx-0" // Responsive font sizes, centered on mobile, left on desktop
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              At Fronx Solutions, we transform your digital vision into reality.
              For over 10 years, we've been crafting customized, fast, and
              beautiful digital solutions that help businesses across Belgium,
              Morocco, and Europe stand out in the digital landscape.
            </motion.p>
            {/* Responsive Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 md:w-[55%] gap-6 justify-items-center sm:justify-items-center lg:justify-items-start max-w-full sm:max-w-md md:max-w-lg lg:max-w-full mx-auto lg:mx-0">
              {" "}
              {/* Centered grid on mobile, left-aligned on desktop */}
              {[
                { value: "15+", label: "Years\nExperience" },
                { value: "50K+", label: "Satisfied\nClients" },
                { value: "100%", label: "Satisfaction\nRate" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg text-center border p-6 w-full max-w-[180px] shadow-sm" // Removed mx-auto here as parent grid handles centering
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + index * 0.1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  <p className="text-3xl sm:text-4xl font-semibold mb-2">
                    {stat.value}
                  </p>{" "}
                  {/* Responsive font size */}
                  <p className="text-gray-600 font-medium whitespace-pre-line text-sm sm:text-base">
                    {" "}
                    {/* Responsive font size */}
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </PageWrapper>
    </>
  );
};

export default Hero;
