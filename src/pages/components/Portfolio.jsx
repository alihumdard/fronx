import React, { useState } from "react";
import PageWrapper from "../../main/Pagewraper";
import { FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Portfolio categories
const portfolioCategories = [
  { id: "website-development", name: "Website Development" },
  { id: "mobile-app-development", name: "Mobile APP Development" },
  { id: "wordpress-development", name: "WordPress Development" },
  { id: "seo-services", name: "SEO Services" },
  { id: "ui-ux-design", name: "UI/UX Design" },
  { id: "digital-marketing", name: "Digital Marketing" },
];

// Portfolio items
const portfolioData = [
  { id: "p1", image: "/images/ecommerce.jpeg", title: "Ecommerce Website", description: "Multi Product Ecommerce web application design.", category: "website-development" },
  { id: "p2", image: "/images/ecommerce.jpeg", title: "Ecommerce Website", description: "Multi Product Ecommerce web application design.", category: "website-development" },
  { id: "p3", image: "/images/ecommerce.jpeg", title: "Ecommerce Website", description: "Multi Product Ecommerce web application design.", category: "website-development" },
  { id: "p4", image: "/images/ecommerce.jpeg", title: "Ecommerce Website", description: "Multi Product Ecommerce web application design.", category: "website-development" },
  { id: "m1", image: "/images/ecommerce.jpeg", title: "Fitness Tracking App", description: "Native iOS/Android application for health tracking.", category: "mobile-app-development" },
  { id: "m2", image: "/images/ecommerce.jpeg", title: "Food Delivery App", description: "Cross-platform app for ordering and delivery.", category: "mobile-app-development" },
  { id: "m3", image: "/images/ecommerce.jpeg", title: "Food Delivery App", description: "Cross-platform app for ordering and delivery.", category: "mobile-app-development" },
  { id: "m4", image: "/images/ecommerce.jpeg", title: "Food Delivery App", description: "Cross-platform app for ordering and delivery.", category: "mobile-app-development" },
];

const Portfolio = () => {
  const [activeCategoryId, setActiveCategoryId] = useState(portfolioCategories[0].id);
  const filteredPortfolioItems = portfolioData.filter((item) => item.category === activeCategoryId);

  // Variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 30 },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={container}
      className="bg-white py-16 md:py-24"
    >
      {/* Header */}
      <motion.div variants={item} className="pt-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest opacity-80 mb-2">
          EMPOWERING INNOVATION
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Your Trusted Tech Partner
        </h2>
        <p className="text-md sm:text-lg max-w-3xl mx-auto px-4">
          Discover how FronxSolutions transforms ideas into cutting-edge digital
          solutions powering start-ups to enterprises with scalable software
          excellence.
        </p>
      </motion.div>

      <PageWrapper>
        <div className="flex flex-col lg:flex-row gap-12 pt-16 md:pt-24">
          {/* Categories */}
          <motion.div
            variants={item}
            className="w-full lg:w-1/4 flex-shrink-0"
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-baseline">
              OUR
              <span className="bg-gradient-to-r from-[#6931CF] to-[#1A61EA] bg-clip-text text-transparent ml-2">
                PORTFOLIO
              </span>
            </h3>
            <ul className="space-y-3">
              {portfolioCategories.map((category) => (
                <li key={category.id}>
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setActiveCategoryId(category.id)}
                    className={`w-full text-left px-6 py-3 rounded-3xl font-medium transition-all duration-200
                      ${
                        activeCategoryId === category.id
                          ? "bg-gradient-to-r from-[#6931CF] to-[#1A61EA] text-white shadow-md"
                          : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      }`}
                  >
                    {category.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Portfolio Grid */}
          <motion.div
            layout
            variants={container}
            className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredPortfolioItems.length > 0 ? (
                filteredPortfolioItems.map((itemData) => (
                  <motion.div
                    key={itemData.id}
                    variants={item}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    layout
                    className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden relative group"
                  >
                    <motion.img
                      src={itemData.image}
                      alt={itemData.title}
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-gray-800 mb-2">
                        {itemData.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-4">
                        {itemData.description}
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="absolute bottom-6 right-6 bg-gradient-to-r from-[#6931CF] to-[#1A61EA] text-white p-3 rounded-full shadow-md"
                      >
                        <FaArrowRight className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  key="no-items"
                  variants={item}
                  className="col-span-1 md:col-span-2 text-center text-gray-500 text-lg py-10"
                >
                  No portfolio items found for this category.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </PageWrapper>
    </motion.section>
  );
};

export default Portfolio;
