import React from "react";
import { motion } from "framer-motion";
import PageWrapper from "../../main/Pagewraper";

// Icons
const iconClass = "w-full h-full text-[#FF9B4B]";
const WebDevelopmentIcon = (
  <svg
    className={iconClass}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10 20l4-4m0 0l4 4m-4-4V4m-7 4h.01M7 12h.01M7 16h.01M3 20h18a2 2 0 002-2V6a2 2 0 00-2-2H3a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);
const eCommerceIcon = (
  <svg
    className={iconClass}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);
const MobileApplicationIcon = (
  <svg
    className={iconClass}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
    />
  </svg>
);
const DigitalMarketingIcon = (
  <svg
    className={iconClass}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9.663 17h4.673M12 20v-3M12 14v-.001M12 11v-.001M12 9v-.001M12 6v-.001M12 3v-.001M17 17H7a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2z"
    />
  </svg>
);
const ContentWritingIcon = (
  <svg
    className={iconClass}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
    />
  </svg>
);
const GraphicsDesignIcon = (
  <svg
    className={iconClass}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2zM12 3v5h5"
    />
    <circle cx="12" cy="12" r="3" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19.071 4.929a8 8 0 00-11.314 0M4.929 19.071a8 8 0 0011.314 0M3 12h.01M21 12h.01M12 3v.01M12 21v.01"
    />
  </svg>
);

// Icon and image maps
const serviceIcons = {
  webDevelopment: WebDevelopmentIcon,
  eCommerce: eCommerceIcon,
  mobileApplication: MobileApplicationIcon,
  digitalMarketing: DigitalMarketingIcon,
  contentWriting: ContentWritingIcon,
  graphicsDesign: GraphicsDesignIcon,
};
const serviceImages = {
  webDevelopment: "/images/what-1.png",
  eCommerce: "/images/what-2.png",
  mobileApplication: "/images/what-3.png",
  digitalMarketing: "/images/what-4.png",
  contentWriting: "/images/what-5.png",
  graphicsDesign: "/images/what-6.png",
};

// Data
const servicesData = [
  {
    id: "web-dev",
    iconKey: "webDevelopment",
    imageKey: "webDevelopment",
    title: "Web Development",
    description:
      "Custom, fast, mobile-friendly websites that reflect your brand and convert visitors into customers...",
  },
  {
    id: "ecommerce",
    iconKey: "eCommerce",
    imageKey: "eCommerce",
    title: "E-commerce solutions",
    description:
      "Robust, secure platforms designed to maximize conversions and grow your online store efficiently...",
  },
  {
    id: "mobile-app",
    iconKey: "mobileApplication",
    imageKey: "mobileApplication",
    title: "Mobile Application",
    description:
      "Intuitive and engaging mobile apps that offer seamless user experiences on Android and iOS...",
  },
  {
    id: "digital-marketing",
    iconKey: "digitalMarketing",
    imageKey: "digitalMarketing",
    title: "Digital marketing",
    description:
      "Targeted campaigns and SEO strategies that bring more eyes to your brand and boost engagement...",
  },
  {
    id: "content-writing",
    iconKey: "contentWriting",
    imageKey: "contentWriting",
    title: "Content writing",
    description:
      "Compelling, SEO-friendly content that connects with your audience and tells your story right...",
  },
  {
    id: "graphics-design",
    iconKey: "graphicsDesign",
    imageKey: "graphicsDesign",
    title: "Graphics Design",
    description:
      "Visually stunning graphics that convey your brand message and leave a lasting impression...",
  },
];

// Animated Service Card
const ServiceCard = ({ icon, title, description, imageSrc, onArrowClick }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg p-6 flex flex-col relative overflow-hidden group hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Icon and Arrow */}
      <div className="flex justify-between items-center mb-5">
        <div className="w-12 h-12 text-indigo-600">{icon}</div>

        <button
          onClick={onArrowClick}
          className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 group-hover:bg-indigo-100  shadow transition-all duration-300 ease-in-out transform"
        >
          <svg
            className="w-5 h-5 transition-all duration-300 ease-in-out transform group-hover:-rotate-45 group-hover:scale-110"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
        {description}
      </p>

      {/* Image */}
      {imageSrc && (
        <div className="mt-auto pt-2">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-40 object-cover rounded-lg"
          />
        </div>
      )}
    </motion.div>
  );
};

// Main Component
const WhatWeDo = () => {
  const handleArrowClick = (title) => console.log(`Clicked on: ${title}`);
  const handleSeeMoreDetails = () =>
    console.log("See More Details button clicked");

  return (
    <PageWrapper>
      <motion.div
        className="flex flex-col px-10 md:flex-row justify-between items-start md:items-end mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-2">What We Do</h2>
          <p className="text-gray-600 text-lg">
            A complete digital team — here to solve, build, and grow
          </p>
        </div>
        <button
          onClick={handleSeeMoreDetails}
          className="mt-6 md:mt-0 px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition duration-200"
        >
          See More Details
        </button>
      </motion.div>

      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={service.id}
                icon={serviceIcons[service.iconKey]}
                title={service.title}
                description={service.description}
                imageSrc={serviceImages[service.imageKey]}
                onArrowClick={() => handleArrowClick(service.title)}
              />
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default WhatWeDo;
