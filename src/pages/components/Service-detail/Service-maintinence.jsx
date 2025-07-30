import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../../../main/Navbar";
import PageWrapper from "../../../main/Pagewraper";
import ContactForm from "../Contact";
import Footer from "../../../main/Footer";
import URLS from "../../../config/urls.config";
import {
  FaComments,
  FaTools,
  FaMicrochip,
  FaBrain,
  FaHeartbeat,
  FaSearch,
  FaTachometerAlt,
  FaRegChartBar,
  FaClipboardCheck,
  FaServer,
} from "react-icons/fa";
import StatsSection from "../Statsdata";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const processSteps = [
  {
    icon: FaSearch, // Replaces FaClipboardList
    title: "Website Audit & Setup",
    description:
      "We check your website's current condition, fix urgent issues, and set up a custom maintenance plan based on your needs.",
  },
  {
    icon: FaTools, // Replaces FaLaptopCode
    title: "System Repairs",
    description:
      "We fix bugs, update plugins/themes, patch security holes, and protect your site from malware or hacking attempts.",
  },
  {
    icon: FaTachometerAlt, // Replaces FaVial
    title: "Hosting & Performance",
    description:
      "We help migrate your website to better hosting if needed and boost speed through caching, image compression, and other improvements.",
  },
  {
    icon: FaRegChartBar, // Replaces FaCloudUploadAlt
    title: "Ongoing Support & Reports",
    description:
      "We provide regular support, quick fixes, and monthly reports to keep you updated on what we’ve done and your site’s health.",
  },
];

const appservicedata = [
  {
    id: "website maintenance plans",
   icon: FaClipboardCheck, // from react-icons/fa
title: "Website UI Design (Figma)",
shortDescription:
  "Visually stunning, responsive designs tailored for usability and brand consistency.",
longDescription:
  "We craft high-fidelity, pixel-perfect UI designs in Figma for websites and applications. Our design process ensures responsiveness across all screen sizes, intuitive user flows, and consistent branding. From wireframes to prototypes, we focus on creating seamless experiences that engage users and elevate your digital presence."
 },
  {
    id: "Bug Fixing and Security Updates",
   icon: FaComments, // from react-icons/fa
title: "Mobile App UI Design",
shortDescription:
  "Intuitive and visually engaging interfaces tailored for all mobile devices.",
longDescription:
  "We design sleek, user-friendly mobile app interfaces that offer a seamless experience across iOS and Android platforms. Using tools like Figma and Adobe XD, we focus on creating intuitive navigation, consistent branding, and responsive layouts. Our goal is to enhance usability, engagement, and visual appeal for every screen size."
  },
  {
    id: "hosting migration",
   icon: FaServer, // from react-icons/fa
title: "Wireframing & Prototyping",
shortDescription:
  "Visualize your ideas with interactive wireframes and prototypes before development begins.",
longDescription:
  "We craft detailed wireframes and high-fidelity prototypes to map out the structure, flow, and functionality of your digital product. Using tools like Figma, Adobe XD, or Sketch, we help you validate ideas, refine user journeys, and gain stakeholder approval before moving to full-scale development. This ensures better alignment, usability, and reduced revisions down the line."
  },
  {
    id: "speed optimization",
  icon: FaTachometerAlt, // Speedometer for performance
title: "Design System Creation",
shortDescription:
  "Build a consistent, scalable, and reusable UI system for faster and cohesive product design.",
longDescription:
  "We develop comprehensive design systems that include reusable components, standardized styles, color palettes, typography, iconography, and layout grids. These systems ensure consistency across all digital platforms, streamline collaboration between designers and developers, and accelerate product development while maintaining a unified brand experience."
  },
];

const items = [
  {
    title: "Data-Driven Approach",
    description:
      "We leverage data and insights to make informed decisions that lead to more effective and efficient solutions.",
  },
  {
    title: "Competitive Pricing",
    description:
      "We offer our top-quality services at competitive prices, providing you with great value for your investment.",
  },
  {
    title: "Ethical Business Practices",
    description:
      "We maintain the highest level of professionalism and ethical standards in all our business dealings.",
  },
];

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
const Maintenence = () => {
  const [expandedCard, setExpandedCard] = useState(null); // State to manage which card is expanded

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <>
      <div className="relative h-screen w-full overflow-x-hidden">
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
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-[400px] h-[400px] bg-[#FFC003] opacity-10 blur-3xl rounded-full
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
                  className="flex flex-wrap lg:flex-nowrap items-center 
          gap-2 lg:gap-3 px-4 sm:px-6 py-2 sm:py-3 
          border border-white/30 rounded-full text-sm sm:text-base 
          text-white bg-white/5 hover:bg-white/10 transition-all duration-300"
                >
                  <Link
                    to="/"
                    className="text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    Home
                  </Link>
                  <span className="text-orange-400">››</span>
                  <Link
                    to={URLS.SERVICES}
                    className="text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    Services
                  </Link>
                  <span className="text-orange-400">››</span>
                  <Link className="text-blue-400 hover:text-blue-300 transition-colors">
                    Maintenance and Support
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </PageWrapper>
        </div>

        <section className="bg-white py-16 md:py-24 md:px-5">
          <PageWrapper>
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-start px-4 sm:px-6 mb-12"
            >
              <div className="flex justify-center md:justify-start">
                <span className="bg-orange-400 px-4 py-2 rounded-3xl text-white font-semibold uppercase tracking-wide text-sm">
                  Maintenance and Support
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl text-center md:text-start lg:text-5xl mt-6 font-bold text-gray-800 max-w-5xl">
                From Bugs to Boost – Our Support Process
              </h2>
            </motion.div>

            {/* Process Steps */}
            <div className="relative flex flex-col items-center lg:flex-row justify-center px-4 sm:px-6 mt-16">
              {/* Dotted Line for Desktop */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute top-20 lg:top-24 hidden lg:block w-full h-0.5 border-t-2 border-dashed border-gray-300 z-0"
              ></motion.div>

              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className="relative bg-white p-6 rounded-xl text-center flex flex-col items-center z-10 w-full max-w-sm"
                  >
                    {/* Icon Box */}
                    <div className="bg-gray-100 p-4 rounded-xl mb-4 shadow-sm">
                      {IconComponent && (
                        <IconComponent className="w-10 h-10 text-orange-500" />
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </PageWrapper>
        </section>

        <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-20 md:py-24">
          <PageWrapper>
            {/* Section Header */}
            <motion.div
              className="text-center mb-12 md:mb-16"
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 id="maintinence-development-process" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 max-w-5xl mx-auto">
                Stay Secure and Optimized with Expert Support
              </h2>
              <p className="text-center text-gray-600">
                Turning your vision into reality with Fronx solutions premium
                custom software solutions.
              </p>
            </motion.div>

            {/* Services Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {appservicedata.map((service) => {
                const IconComponent = service.icon;
                const isExpanded = expandedCard === service.id;
                const descriptionToShow =
                  isExpanded && service.longDescription
                    ? service.longDescription
                    : service.shortDescription;

                return (
                  <motion.div
                    key={service.id}
                    variants={fadeUpVariant}
                    className="bg-white p-5 sm:p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col"
                  >
                    {/* Icon */}
                    <div className="bg-gray-50 p-3 rounded-md inline-block mb-4 self-start">
                      {IconComponent && (
                        <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-orange-500" />
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 flex-grow">
                      {descriptionToShow}
                    </p>

                    {/* Learn More / Show Less */}
                    {service.longDescription && (
                      <button
                        onClick={() => toggleExpand(service.id)}
                        className="text-orange-500 font-semibold text-sm sm:text-base self-start hover:underline focus:outline-none"
                      >
                        {isExpanded ? "Show less →" : "Learn more →"}
                      </button>
                    )}

                    {!service.longDescription && (
                      <a
                        href="#"
                        className="text-orange-500 font-semibold text-sm sm:text-base self-start hover:underline"
                      >
                        Learn more →
                      </a>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </PageWrapper>
        </section>

        <div
          className="bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/bg.png')" }}
        >
          <PageWrapper>
            <div className="flex flex-col lg:flex-row pt-20">
              {/* Left Section */}
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
                className="px-4 py-16 w-full lg:w-1/2 sm:px-6 lg:px-8 flex items-center"
              >
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">
                    Expertise for Your Digital <br /> Growth Journey
                  </h2>

                  <div className="space-y-4">
                    {items.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="bg-white/5 hover:bg-white/10 mt-16 backdrop-blur-sm border border-white/10 p-6 rounded-xl transition-all duration-300 h-full"
                      >
                        <h3 className="font-semibold text-lg text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right Section */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
                className="w-full lg:w-1/2 flex flex-col justify-center px-6 py-16"
              >
                <p className="text-gray-300 max-w-xl text-base mb-16">
                  Our dedicated team is committed to understanding your unique
                  needs, ensuring that we provide innovative strategies that
                  drive results with a focus on quality and integrity.
                </p>
                <img
                  src="/images/men.png"
                  alt="Expertise Visual"
                  className="w-full max-w-xl rounded-lg"
                />
              </motion.div>
            </div>
          </PageWrapper>
        </div>
        <StatsSection />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
};

export default Maintenence;
