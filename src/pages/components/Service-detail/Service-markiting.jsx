import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../../../main/Navbar";
import PageWrapper from "../../../main/Pagewraper";
import ContactForm from "../Contact";
import Footer from "../../../main/Footer";
import URLS from "../../../config/urls.config";
import { FaAsterisk } from "react-icons/fa";
import {
  FaNetworkWired,
  FaShoppingBasket,
  FaRobot,
  FaBullseye,
  FaPalette,
  FaLightbulb,
  FaRocket,
  FaGoogle,
  FaFacebookF,
  FaPenNib,
  FaEnvelopeOpenText,
} from "react-icons/fa";
import StatsSection from "../Statsdata";

const processSteps = [
  {
    icon: FaBullseye,
    title: "Your Success, Our Mission",
    description:
      "We measure our success by the success of our clients. With a focus on results and a dedication to quality, our mission is to deliver digital solutions that make a real impact.",
  },
  {
    icon: FaPalette,
    title: "Creators Of Digital Excellence",
    description:
      "At the core of our agency is a commitment to excellence and creativity. We specialize in crafting digital solutions that not only meet your needs but also elevate your brand.",
  },
  {
    icon: FaLightbulb,
    title: "Innovating the Digital Landscape",
    description:
      "Innovation is key to our digital strategies. We blend creativity with technology to deliver solutions that push boundaries and transform brands.",
  },
  {
    icon: FaRocket,
    title: "Helping Brands Thrive Online",
    description:
      "Our purpose is simple: to help brands succeed in the digital age. We're passionate about building strong relationships with our clients and crafting custom strategies that drive results.",
  },
];

const marketing = [
  {
    id: "google ads setup",
    icon: FaGoogle,
    title: "Google Ads Setup",
    shortDescription:
      "Easy-to-use navigation that helps users find what they need quickly, easily, and effortlessly.",
    longDescription:
      "Complete Google Ads setup, campaign creation, keyword targeting, and performance optimization to drive traffic and conversions.",
  },
  {
    id: "social media marketing",
    icon: FaFacebookF,
    title: "Social Media Marketing",
    shortDescription:
      "Designs that adjust smoothly across all screen sizes for a seamless user experience.",
  },
  {
    id: "content marketing",
    icon: FaPenNib,
    title: "Content Marketing",
    shortDescription:
      "Maintaining a consistent look and feel across all elements to enhance usability and identity.",
  },
  {
    id: "email marketing",
    icon: FaEnvelopeOpenText,
    title: "Email Marketing",
    shortDescription:
      "Maintaining a consistent look and feel across all elements to enhance usability and identity.",
  },
];
const features = [
  {
    icon: <FaNetworkWired className="text-orange-400 text-3xl" />,
    title: "Business-to-Business",
    desc: "Shift your offline territory to a more rigid online Ecommerce platform to target larger audiences.",
  },
  {
    icon: <FaShoppingBasket className="text-orange-400 text-3xl" />,
    title: "Business-to-Consumer",
    desc: "Reach out to more prospects locally and globally by introducing your brand to an online community.",
  },
  {
    icon: <FaRobot className="text-orange-400 text-3xl" />,
    title: "Complete Automation",
    desc: "Streamline business processes with ecommerce and focus on things that help in business growth.",
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
const digitalmarkiting = () => {
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
                    Digital Marketing
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </PageWrapper>
        </div>

        <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <PageWrapper>
            <div className="flex flex-col lg:flex-row w-full items-center lg:items-start gap-12">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-[40%] text-start"
              >
                <h2 className="text-2xl sm:text-4xl mt-8 font-bold text-gray-800 w-full sm:w-[90%] leading-snug">
                  Crafting Unique Digital Experience that elevate Your Brand
                </h2>
                <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white mt-8 font-semibold px-6 py-3 rounded-full shadow-md hover:opacity-90 transition-all text-sm sm:text-base">
                  Contact Us
                </button>
              </motion.div>

              {/* Process Steps */}
              <div className="w-full lg:w-[60%] relative flex flex-col items-center justify-center gap-6">
                {/* Dotted Line for Desktop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="absolute top-20 lg:top-24 hidden lg:block w-full h-0.5 border-gray-300 z-0"
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
                      className="relative bg-white p-6 rounded-xl flex flex-col z-10 w-full max-w-xl shadow-sm"
                    >
                      {/* Icon */}
                      <div className="p-2 rounded-xl mb-4">
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
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                Our E-Commerce Development Services
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                Turning your vision into reality with Fronxsolutions premium
                custom software solutions.
              </p>
            </motion.div>

            {/* Services Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {marketing.map((service) => {
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

        <div className="bg-[url('/images/bg.png')] bg-cover bg-center bg-no-repeat py-16 px-6 lg:px-20 text-white">
          <section className="py-16 md:py-24 text-white relative overflow-hidden">
            {/* Subtle orange border/glow effect */}
            <div
              className="absolute inset-0 border-t-8 border-l-8 border-r-8 border-transparent rounded-xl"
              style={{
                borderImage: "linear-gradient(45deg, #FF8C00, #FFD700) 1",
                borderImageSlice: 1,
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "exclude",
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "exclude",
              }}
            ></div>

            <PageWrapper>
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left Column */}
                <motion.div
                  className="flex flex-col text-center lg:text-left px-2 sm:px-4 md:px-10"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight lg:mb-20 mb-8">
                    Expertise that drives digital
                    <span className="text-orange-400 pl-3 block sm:inline">
                      success
                    </span>
                  </h2>

                  <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-8 sm:gap-12 pt-6">
                    {/* Stat 1 */}
                    <motion.div
                      className="text-center sm:text-left"
                      initial={{ opacity: 0, y: -30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <p className="text-4xl sm:text-5xl font-bold text-orange-400 mb-2">
                        +60%
                      </p>
                      <p className="text-gray-300 text-sm sm:text-base max-w-xs mx-auto sm:mx-0">
                        By optimizing your website for search engines.
                      </p>
                    </motion.div>

                    {/* Stat 2 */}
                    <motion.div
                      className="text-center sm:text-left"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <p className="text-4xl sm:text-5xl font-bold text-orange-400 mb-2">
                        +30%
                      </p>
                      <p className="text-gray-300 text-sm sm:text-base max-w-xs mx-auto sm:mx-0">
                        Rise in revenue as more visitors convert into paying
                        customers.
                      </p>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Right Column */}
                <motion.div
                  className="space-y-20 sm:space-y-24 lg:space-y-28 px-2 sm:px-4 md:px-10 lg:px-20"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ staggerChildren: 0.2 }}
                  variants={{
                    visible: { transition: { staggerChildren: 0.3 } },
                    hidden: {},
                  }}
                >
                  {/* Service 1 */}
                  <motion.div
                    className="flex items-start"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <FaAsterisk className="w-4 h-4 text-orange-400 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-300 text-sm sm:text-base">
                      <span className="font-semibold text-white">
                        Social Media Management:
                      </span>{" "}
                      Our social media management services focus on building and
                      enhancing your brand's online presence. We create engaging
                      content, manage your social media accounts, and analyze
                      performance.
                    </p>
                  </motion.div>

                  {/* Service 2 */}
                  <motion.div
                    className="flex items-start"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <FaAsterisk className="w-4 h-4 text-orange-400 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-300 text-sm sm:text-base">
                      <span className="font-semibold text-white">
                        E-commerce Solutions:
                      </span>{" "}
                      Our e-commerce solutions are designed to create seamless
                      online shopping experiences. From user-friendly website
                      design to secure payment processing and inventory
                      management.
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </PageWrapper>
          </section>
        </div>

        <div>
          <PageWrapper>
            <div className="flex flex-col lg:flex-row pt-20">
              {/* Left Section */}
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
                className="px-4 py-16 w-full lg:w-1/2 sm:px-6 lg:px-8 bg-white flex items-center"
              >
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">
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
                        className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
                      >
                        <h3 className="font-semibold text-lg text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
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
                <p className="text-gray-500 max-w-xl text-base mb-20">
                  Our dedicated team is committed to understanding your unique
                  needs, ensuring that we provide innovative strategies that
                  drive results with a focus on quality and integrity.
                </p>
                <img
                  src="/images/Rectangle 10541.png"
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

export default digitalmarkiting;
