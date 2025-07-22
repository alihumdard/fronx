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
  FaCloudUploadAlt, // For Deployment
} from "react-icons/fa";
import {
  FaWordpressSimple, // For WordPress
  FaPhp, // For Laravel/PHP
  FaReact, // For React.js/Next.js
  FaCode, // Generic for Website Redesign
  FaServer, // Generic for API Integration
  FaFileAlt, // Generic for Landing Page Development
} from "react-icons/fa";
import { FaBolt, FaCogs, FaLock, FaChartLine } from "react-icons/fa";
import StatsSection from "../Statsdata";

const processSteps = [
  {
    icon: FaClipboardList,
    title: "Planning & Strategy",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    icon: FaLaptopCode,
    title: "Design And Development",
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

const webServicesData = [
  {
    id: "wordpress",
    icon: FaWordpressSimple,
    title: "WordPress Development",
    shortDescription:
      "Bootstrap development is building responsive, mobile-friendly, and modern websites using the Bootstrap framework’s grid system and UI components.",
    longDescription:
      "Bootstrap development is building responsive, mobile-friendly, and modern websites using the Bootstrap framework’s grid system and UI components. Bootstrap development is building responsive, mobile-friendly, and modern websites using the Bootstrap framework’s grid system and UI components.",
  },
  {
    id: "laravel-php",
    icon: FaPhp,
    title: "Laravel/PHP Web Apps",
    shortDescription:
      "Bootstrap development is building responsive, mobile-friendly, and modern websites using the Bootstrap framework’s grid system and UI components.",
  },
  {
    id: "react-nextjs",
    icon: FaReact, // Could use SiNextdotjs for combined icon
    title: "React.js / Next.js Web Apps",
    shortDescription:
      "Bootstrap development is building responsive, mobile-friendly, and modern websites using the Bootstrap framework’s grid system and UI components.",
  },
  {
    id: "website-redesign",
    icon: FaCode, // Generic B icon equivalent
    title: "Website Redesign/Optimization",
    shortDescription:
      "Bootstrap development is building responsive, mobile-friendly, and modern websites using the Bootstrap framework’s grid system and UI components.",
  },
  {
    id: "api-integration",
    icon: FaServer, // Generic B icon equivalent
    title: "API Integration",
    shortDescription:
      "Bootstrap development is building responsive, mobile-friendly, and modern websites using the Bootstrap framework’s grid system and UI components.",
  },
  {
    id: "landing-page",
    icon: FaFileAlt, // Generic B icon equivalent
    title: "Landing Page Development",
    shortDescription:
      "Bootstrap development is building responsive, mobile-friendly, and modern websites using the Bootstrap framework’s grid system and UI components.",
  },
];

const features = [
  {
    icon: <FaBolt className="text-orange-400 text-3xl" />,
    title: "Effective",
    desc: "We design our apps with a strong focus on the user experience. Featuring intuitive interfaces, our apps make navigation simple and efficient, allowing users to find what they need quickly. This seamless interaction boosts both satisfaction and usability.",
  },
  {
    icon: <FaCogs className="text-orange-400 text-3xl" />,
    title: "Dynamic",
    desc: "Our apps prioritize experience, featuring intuitive interfaces that ensure smooth and effortless navigation. Users can quickly find the content they need, resulting in greater satisfaction. This seamless interaction boosts both satisfaction and usability.",
  },
  {
    icon: <FaLock className="text-orange-400 text-3xl" />,
    title: "Affordable",
    desc: "Our app places a strong emphasis on user data security by using advanced encryption, multi-factor authentication, and a robust, industry-standard security framework to prevent unauthorized access and reliably protect all information.",
  },
  {
    icon: <FaChartLine className="text-orange-400 text-3xl" />,
    title: "Scale Your Business",
    desc: "Our app seamlessly integrates with popular social platforms, enabling users to log in using their social accounts, share content easily, and connect with others—greatly enhancing overall community interaction and user engagement.",
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
const Serviceweb = () => {
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
                    to={URLS.SERVICES}
                    className="text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    Services
                  </Link>
                  <span className="text-orange-400">››</span>
                  <Link className="text-blue-400 hover:text-blue-300 transition-colors">
                    Website Development
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </PageWrapper>
        </div>

          <section className="bg-white py-16 md:py-24 px-5">
            <PageWrapper>
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-start px-4 sm:px-6 mb-12"
              >
                <span className="bg-orange-400 px-4 py-2 rounded-3xl text-white font-semibold uppercase tracking-wide text-sm">
                  Website Development Process
                </span>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl mt-6 font-bold text-gray-800 max-w-4xl">
                  Cutting-Edge Technology Solutions
                </h2>
              </motion.div>

              {/* Process Steps */}
              <div className="relative flex flex-col items-center lg:flex-row justify-center gap-10 px-4 sm:px-6 mt-16">
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
              <h2 id="web-development-process" className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                Our Web Development Services
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Turning your vision into reality with Fronxsolutions premium
                custom software solutions.
              </p>
            </motion.div>

            {/* Services Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {webServicesData.map((service) => {
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
                    <div className="bg-orange-100 p-3 rounded-md inline-block mb-4 self-start">
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

        <div className="bg-[url('/images/bg.png')] bg-cover bg-center bg-no-repeat py-16 px-6 lg:px-20 text-white">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Website Development Features
              </h2>
              <p className="text-gray-300 mb-12 max-w-3xl">
                Explore the elements that make our designs intuitive, engaging,
                and results-driven.
              </p>
            </motion.div>

            {/* Feature Cards */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpVariant}
                  className="bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-xl transition-all duration-300 h-full"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{feature.desc}</p>
                </motion.div>
              ))}
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

export default Serviceweb;
