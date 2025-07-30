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
  FaAndroid,
  FaApple,
  FaPalette, // For Deployment
} from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaBolt, FaCogs, FaLock, FaChartLine } from "react-icons/fa";
import StatsSection from "../Statsdata";
import { FaFlutter } from "react-icons/fa6";

const processSteps = [
  {
    icon: FaClipboardList,
    title: "Planning & Strategy",
    description:
      "Strategic planning that aligns your digital goals with real-world results through data-driven insights and focused execution.",
  },
  {
    icon: FaLaptopCode,
    title: "Design And Development",
    description:
      "End-to-end design and development services that transform ideas into interactive, high-performance digital experiences.",
  },
  {
    icon: FaVial, // Or FaFlask
    title: "Testing & Quality Assurance",
    description:
      "Comprehensive testing to ensure your application is bug-free, secure, and delivers a flawless user experience.",
  },
  {
    icon: FaCloudUploadAlt,
    title: "Deployment",
    description:
      "Smooth and secure deployment of your application to production environments with minimal downtime.",
  },
];

const appservicedata = [
  {
    id: "flutter app development",
    icon: FaFlutter, // Changed from FaWordpressSimple to FaFlutter
    title: "Flutter App Development",
    shortDescription:
      "Developed by Google, Flutter is perfect for modern, fluid interfaces, with cross-platform compatibility.",
    longDescription:
      "Flutter development is building responsive, high-performance, and visually appealing cross-platform applications using Flutter’s widget-based UI and single codebase architecture. Flutter development enables seamless experiences across mobile, web, and desktop platforms.",
  },
  {
    id: "react native development",
   icon: FaReact,
  title: "React Native Development",
  shortDescription:
    "Build high-performance mobile apps with a single codebase for both iOS and Android—faster and more cost-effective than native development.",
  longDescription:
    "React Native development allows us to create fast, responsive, and scalable mobile applications using a shared codebase for both iOS and Android. Leveraging React’s component-based architecture, we deliver native-like experiences with reduced development time and cost. Whether it's a startup MVP or a full-featured mobile product, React Native offers the flexibility and efficiency to bring your mobile vision to life.",
},
  {
    id: "android app development",
   icon: FaAndroid,
  title: "Android App Development",
  shortDescription:
    "Build native Android applications with excellent performance, seamless user experience, and full integration with the Android ecosystem.",
  longDescription:
    "Our Android App Development services focus on creating robust, scalable, and user-friendly mobile applications using Java or Kotlin. We follow modern design guidelines, optimize for performance, and ensure compatibility across a wide range of Android devices. From idea to Play Store launch, we handle everything—including UI/UX design, backend integration, and rigorous testing—for a reliable and impactful Android experience.",
},
  {
    id: "ios app development",
    icon: FaApple, // Changed from FaCode to FaApple (for iOS)
    title: "IOS App Development",
    shortDescription:
      "Recommended for native Android applications, they guarantee robustness and speed.",
    longDescription:
      "Kotlin and Java development is building robust, efficient, and native Android applications using powerful object-oriented and modern programming languages. This development ensures smooth performance and compatibility across Android devices.",
  },
  {
    id: "app ui design",
    icon: FaPalette,
  title: "APP UI Design",
  shortDescription:
    "Crafting visually stunning and user-centric mobile app interfaces that elevate the user experience.",
  longDescription:
    "Our App UI Design services focus on creating clean, intuitive, and engaging user interfaces tailored for both iOS and Android platforms. We blend aesthetic appeal with functionality, ensuring smooth navigation, accessibility, and brand consistency. Using tools like Figma and Adobe XD, we deliver pixel-perfect designs that enhance usability and support your app's overall success.",
},
];

const features = [
  {
    icon: <FaBolt className="text-orange-400 text-3xl" />,
    title: "Data Management and Synchronization",
    desc: "A well-structured backend ensures real-time data synchronization between devices, providing a seamless user experience and consistent data flow.",
  },
  {
    icon: <FaCogs className="text-orange-400 text-3xl" />,
    title: "Performance and Scalability",
    desc: "Optimized APIs and efficient server logic allow mobile apps to load quickly and scale easily to support a growing user base without performance loss.",
  },
  {
    icon: <FaLock className="text-orange-400 text-3xl" />,
    title: "Security",
    desc: " Built-in authentication, user authorization, and data encryption protect sensitive information and ensure compliance with industry security standards.",
  },
  {
    icon: <FaChartLine className="text-orange-400 text-3xl" />,
    title: "Maintainability and flexibility",
    desc: "A modular and well-documented backend makes it easy to maintain the code, release updates, and add new features based on user needs and technological developments.",
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
const Appweb = () => {
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
              Best Mobile App Development<br />
                <span className="mt-3">Company in </span>
                <span className="mt-3 relative inline-block">
                  Belgium
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
                   Best Mobile App Development Company in Belgium
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
                Mobile Development Process
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl mt-6 font-bold text-gray-800 max-w-5xl">
                Turning Your Vision into a ,Mobile Solution
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
              <h2 id="app-development-process" className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
               What you get
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
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
               The Benefits of Mobile App Development
              </h2>
              <p className="text-gray-300 mb-12 max-w-3xl">
              A solid backend is the foundation of any successful mobile app. Here's how it delivers value:
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

export default Appweb;
