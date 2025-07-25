import React, { useState } from "react";
import PageWrapper from "../../main/Pagewraper";
import {
  FaCode,
  FaMobileAlt,
  FaPalette,
  FaShoppingCart,
  FaBullhorn,
  FaCogs,
  FaRobot,
  FaTools,
  FaSearch,
  FaPython,
  FaJs,
  FaReact,
  FaNodeJs,
  FaLaravel,
  FaWordpress,
  FaShopify,
  FaDatabase,
  FaServer,
  FaCloud,
  FaJava,
} from "react-icons/fa";
import {
  SiTypescript,
  SiDotnet,
  SiAndroid,
  SiIos,
  SiFlutter,
  SiNextdotjs,
  SiFigma,
} from "react-icons/si";
import { motion } from "framer-motion";
import URLS from "../../config/urls.config";
import { Link } from "react-router-dom";

const techColorMap = {
  Python: "#306998",
  JavaScript: "#f7df1e",
  TypeScript: "#3178c6",
  React: "#61dafb",
  "React Native": "#61dafb",
  "Next.js": "#000000",
  Laravel: "#ff2d20",
  WordPress: "#21759b",
  Shopify: "#7ab55c",
  Java: "#007396",
  Android: "#3ddc84",
  iOS: "#999999",
  Flutter: "#02569B",
  ".NET": "#512bd4",
  Databases: "#4DB33D",
  Cloud: "#00c4ff",
  APIs: "#e34c26",
  SEO: "#00bfa5",
  Ads: "#ff9800",
  Analytics: "#03a9f4",
  Monitoring: "#607d8b",
  "Cloud Mgmt": "#03a9f4",
  "Keyword Research": "#00bcd4",
  "On-Page SEO": "#4caf50",
  "Off-Page SEO": "#9c27b0",
  Sketch: "#f7b500",
  Figma: "#a259ff",
  "Adobe XD": "#ff61f6",
  "AI/ML": "#00ffcc"
};

const servicesData = [
  {
    id: "website-development",
    icon: FaCode,
    title: "Website Development",
    url: URLS.SERVICE_DETAIL.WEB_DEVELOPMENT,
    description:
      "Boost your business with custom web and mobile solutions, delivering scalable, user-friendly platforms to enhance engagement and drive growth.",
    techStackIcons: [
      { icon: FaPython, name: "Python" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: FaJs, name: "JavaScript" },
      { icon: FaReact, name: "React" },
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: FaNodeJs, name: "Node.js" },
      { icon: FaLaravel, name: "Laravel" },
      { icon: FaWordpress, name: "WordPress" },
      { icon: FaShopify, name: "Shopify" },
    ],
    buttonText: "Web Development",
  },
  {
    id: "mobile-app-development",
    icon: FaMobileAlt,
    title: "Mobile App Development",
    url: URLS.SERVICE_DETAIL.APP_DEVELOPMENT,
    description:
      "Crafting intuitive and high-performance mobile applications for iOS and Android.",
    techStackIcons: [
      { icon: SiFlutter, name: "Flutter" },
      { icon: FaReact, name: "React Native" },
      { icon: SiAndroid, name: "Android" },
      { icon: SiIos, name: "iOS" },
      { icon: FaJava, name: "Java" },
      { icon: FaJs, name: "JavaScript" },
    ],
    buttonText: "Mobile Development",
  },
  {
    id: "ui-ux-design",
    icon: FaPalette,
    title: "UI/UX Design",
    url: URLS.SERVICE_DETAIL.UIUX_DEVELOPEMENT,
    description:
      "Designing captivating and user-centric interfaces focusing on aesthetics and usability.",
    techStackIcons: [
      { icon: SiFigma, name: "Figma" },
      { icon: FaPalette, name: "Adobe XD" },
      { icon: FaTools, name: "Sketch" },
    ],
    buttonText: "UI/UX Design",
  },
  {
    id: "e-commerce-solutions",
    icon: FaShoppingCart,
    title: "E-Commerce Solutions",
    url: URLS.SERVICE_DETAIL.ECOMMERCE_DEVELOPMENT,
    description:
      "Building secure e-commerce platforms that drive sales and enhance user experience.",
    techStackIcons: [
      { icon: FaShopify, name: "Shopify" },
      { icon: FaWordpress, name: "WooCommerce" },
      { icon: FaLaravel, name: "Laravel" },
      { icon: FaReact, name: "React" },
      { icon: FaDatabase, name: "Databases" },
    ],
    buttonText: "E-Commerce",
  },
  {
    id: "digital-marketing",
    icon: FaBullhorn,
    title: "Digital Marketing",
    url: URLS.SERVICE_DETAIL.DIGITAL_MARKITING,
    description:
      "Boost your online presence, drive traffic, and convert leads into loyal customers.",
    techStackIcons: [
      { icon: FaSearch, name: "SEO" },
      { icon: FaBullhorn, name: "Ads" },
      { icon: FaTools, name: "Analytics" },
    ],
    buttonText: "Digital Marketing",
  },
  {
    id: "custom-software-development",
    icon: FaCogs,
    title: "Custom Software Development",
    url: URLS.SERVICE_DETAIL.SOFTWARE_DEVELOPMENT,
    description:
      "Tailored solutions to meet your unique business needs and enhance efficiency.",
    techStackIcons: [
      { icon: FaPython, name: "Python" },
      { icon: FaJava, name: "Java" },
      { icon: SiDotnet, name: ".NET" },
      { icon: FaNodeJs, name: "Node.js" },
      { icon: FaDatabase, name: "Databases" },
      { icon: FaCloud, name: "Cloud" },
    ],
    buttonText: "Custom Software",
  },
  {
    id: "ai-chatbot-solutions",
    icon: FaRobot,
    title: "AI & Chatbot Solutions",
    url: URLS.SERVICE_DETAIL.CHATBOT_DEVELOPMENT,
    description:
      "Automate customer support and streamline interactions with AI and chatbots.",
    techStackIcons: [
      { icon: FaRobot, name: "AI/ML" },
      { icon: FaJs, name: "Node.js" },
      { icon: FaServer, name: "APIs" },
    ],
    buttonText: "AI & Chatbot",
  },
  {
    id: "maintenance-support",
    icon: FaTools,
    title: "Maintenance & Support",
    url: URLS.SERVICE_DETAIL.MAINTENENCE,
    description:
      "Keep applications running smoothly with updates and dedicated technical support.",
    techStackIcons: [
      { icon: FaServer, name: "Monitoring" },
      { icon: FaCloud, name: "Cloud Mgmt" },
      { icon: FaTools, name: "Updates" },
    ],
    buttonText: "Maintenance",
  },
  {
    id: "search-engine-optimization",
    icon: FaSearch,
    title: "Search/Engine Optimization",
    url: URLS.SERVICE_DETAIL.SEO,
    description:
      "Improve visibility on search engines to attract more traffic and leads.",
    techStackIcons: [
      { icon: FaSearch, name: "Keyword Research" },
      { icon: FaCode, name: "On-Page SEO" },
      { icon: FaBullhorn, name: "Off-Page SEO" },
    ],
    buttonText: "SEO",
  },
];


// Animation variant
const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};


const Service2 = () => {
  const [activeServiceId, setActiveServiceId] = useState(servicesData[0].id);
  const activeService = servicesData.find((s) => s.id === activeServiceId);

  return (
    <section className="relative py-16 md:py-32 overflow-hidden">
      {/* Background image */}
     
      <PageWrapper>
        <div className="relative z-[2]">
          {/* Heading */}

          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            custom={0}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Top Custom Software Development Services
            </h2>
            <p className="text-lg text-gray-800 mx-auto">
              Turning your vision into reality with Fronxsolutions premium
              custom software solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Grid: Service Buttons */}
            <motion.a
              href="#scroll"
              className="grid grid-cols-2 sm:grid-cols-3 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              custom={1}
            >
              {servicesData.map((service, index) => {
                const IconComponent = service.icon;
                const isActive = service.id === activeServiceId;
                return (
                  <motion.div
                    layout
                    key={service.id}
                    custom={index}
                    variants={fadeIn}
                    onClick={() => setActiveServiceId(service.id)}
                    className={`relative flex flex-col items-center justify-center rounded-xl cursor-pointer transition-all duration-300
                      ${isActive
                        ? "border border-orange-600 shadow-lg scale-105"
                        : "bg-white/10 text-gray-800 hover:shadow-lg border-none"
                      } min-h-[150px] sm:min-h-[170px] text-center`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-service-border"
                        className="absolute inset-0 rounded-xl border-2 border-orange-500 animate-pulse-slow"
                      />
                    )}
                    {IconComponent && (
                      <IconComponent
                        className="w-10 h-10 mb-3"
                        style={{ color: "#FF9B4B" }}
                      />
                    )}
                    <h3 className="text-lg w-60 font-semibold leading-snug">
                      {service.title.split(" ").map((word, i) => (
                        <span key={i} className="block">
                          {word}
                        </span>
                      ))}
                    </h3>
                  </motion.div>
                );
              })}
            </motion.a>

            {/* Right Panel: Service Detail */}
            <motion.div
              id="scroll"
              className="py-8 pl-5 md:py-10 flex flex-col justify-between min-h-[400px] lg:min-h-[500px]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              custom={2}
            >
              {activeService ? (
                <>
                  <h3 className="text-3xl font-bold mb-4">
                    {activeService.title}
                  </h3>
                  <p className="text-gray-800 text-lg mb-6 flex-grow">
                    {activeService.description}
                  </p>
                  {/* Mobile Marquee (visible on mobile only) */}
                  <div className="block md:hidden overflow-hidden my-8">
                    <div className="flex whitespace-nowrap animate-marquee gap-6">
                      {[
                        ...activeService.techStackIcons,
                        ...activeService.techStackIcons,
                      ].map((tech, index) => {
                        const TechIcon = tech.icon;
                        return (
                          <div
                            key={index}
                            className="flex flex-col items-center text-center min-w-[60px]"
                          >
                            <TechIcon
                              className="w-8 h-8 transition-colors"
                              title={tech.name}
                              style={{
                                color: techColorMap[tech.name] || "#ccc",
                              }}
                            />
                            <span className="text-xs text-gray-800 mt-1">
                              {tech.name}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Desktop Grid (hidden on mobile) */}
                  <div className="hidden md:flex flex-wrap gap-4 mb-8">
                    {activeService.techStackIcons.map((tech, index) => {
                      const TechIcon = tech.icon;
                      return (
                        <div
                          key={index}
                          className="flex flex-col items-center text-center"
                        >
                          <TechIcon
                            className="w-8 h-8 transition-colors"
                            title={tech.name}
                            style={{ color: techColorMap[tech.name] || "#ccc" }}
                          />
                          <span className="text-xs text-gray-400 mt-1">
                            {tech.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <Link
                    to={activeService.url}
                    className="inline-block mt-10 self-start bg-gradient-to-r from-[#6931CF] to-[#1A61EA] text-white px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:opacity-90 transition-opacity"
                  >
                    {activeService.buttonText}
                  </Link>
                </>
              ) : (
                <div className="text-center text-gray-400 text-xl">
                  Select a service to see details.
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </PageWrapper>
    </section>
  );
};

export default Service2;
