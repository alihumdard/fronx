import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../../../main/Navbar";
import PageWrapper from "../../../main/Pagewraper";
import ContactForm from "../Contact";
import Footer from "../../../main/Footer";
import URLS from "../../../config/urls.config";
import {
  FaClipboardList, // For Planning & Strategy
  FaLaptopCode, // For Design And Development
  FaVial, // For Testing & Quality Assurance (FaFlask could also work)
  FaCloudUploadAlt,
  FaNetworkWired,
  FaShoppingBasket,
  FaRobot,
  FaCloud,
  FaRocket,
  FaCode,
  FaHeadset,
} from "react-icons/fa";
import {
  FaWordpress,
  FaShopify,
  FaCreditCard,
  FaShoppingCart,
  FaBoxes,
} from "react-icons/fa";
import StatsSection from "../Statsdata";
import { FaBolt, FaCogs, FaLock, FaChartLine } from "react-icons/fa";

const processSteps = [
  {
    icon: FaClipboardList,
    title: "Planning & Strategy",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    icon: FaLaptopCode,
    title: "Design and Development",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    icon: FaVial, // Or FaFlask
    title: "Testing & Quality Assurance",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    icon: FaCloudUploadAlt,
    title: "Deployment",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
];

const softservicedata = [
  {
    id: "crm system development",
    icon: FaNetworkWired,
    title: "CRM System Development",
    shortDescription:
      "Designs that adjust smoothly across all screen sizes for a seamless user experience.",
    longDescription:
      "Complete WooCommerce store setup including product configuration, payment integration, and theme customization for your e-commerce business.",
  },
  {
    id: "booking or inventory system",
    icon: FaClipboardList,
    title: "Booking or Inventory System",
    shortDescription:
      "Designs that adjust smoothly across all screen sizes for a seamless user experience.",
  },
  {
    id: "saas platform development",
    icon: FaCloud,
    title: "Saas Platform Development",
    shortDescription:
      "Designs that adjust smoothly across all screen sizes for a seamless user experience.",
  },
  {
    id: "erp or system",
    icon: FaCogs,
    title: "ERP or System",
    shortDescription:
      "Tailored online shopping solutions designed for your specific business needs.",
  },
];

const features = [
  {
    icon: <FaRocket className="text-orange-400 text-3xl" />,
    title: "Save costs and launch quickly",
  },
  {
    icon: <FaCode className="text-orange-400 text-3xl" />,
    title: "Expertise in development",
  },
  {
    icon: <FaHeadset className="text-orange-400 text-3xl" />,
    title: "Support after launch",
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
const Software = () => {
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
                    Custom Software Development
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </PageWrapper>
        </div>

        <section className="bg-white py-16 md:py-24 px-4 sm:px-6">
          <PageWrapper>
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left mb-12"
            >
              <span className="bg-orange-400 px-2 md:px-4 py-2 rounded-full text-white font-semibold uppercase tracking-wide text-sm">
                Custom Software Development Process
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl mt-6 font-bold text-gray-800 leading-tight max-w-4xl mx-auto md:mx-0">
                The Way We Develop Custom Software
              </h2>
            </motion.div>

            {/* Process Steps */}
            <div className="relative flex flex-col lg:flex-row items-center justify-center gap-12 mt-16">
              {/* Dotted Line for Desktop */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute top-1/2 transform -translate-y-1/2 hidden lg:block w-full h-0.5 border-t-2 border-dashed border-gray-300 z-0"
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
                    className="relative bg-white px-6 py-8 text-center flex flex-col items-center z-10 w-full max-w-xs"
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
              <h2 id="software-development-process" className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                Our E-Commerce Development Services
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                Turning your vision into reality with Fronxsolutions premium
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
              {softservicedata.map((service) => {
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

        <div className="bg-[url('/images/bg.png')] bg-cover bg-center bg-no-repeat text-white py-16 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
            {/* Left Content */}
            <div className="w-full lg:w-[60%]">
              {/* Heading */}
              <motion.div
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold max-w-3xl mb-14">
                  Why Choose Fronx Solutions for Custom Software Development?
                </h2>
              </motion.div>

              {/* Feature Cards */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUpVariant}
                    className="bg-white/5 hover:bg-white/10 items-center text-center backdrop-blur-sm border border-white/10 p-6 rounded-xl transition-all duration-300 h-full"
                  >
                    <div className="mb-4 text-2xl flex justify-center text-[#FFA500]">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-sm">{feature.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full lg:w-[40%] flex justify-center"
            >
              <motion.img
                src="/images/software.png"
                alt="Software Illustration"
                className="w-[80%] max-w-md"
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              />
            </motion.div>
          </div>
        </div>

        <StatsSection />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
};

export default Software;
