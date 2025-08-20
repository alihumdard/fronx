import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFigma, FaPalette, FaPencilRuler, FaPaintBrush,
  FaRocket, FaRegLightbulb, FaLaptopCode, FaMobileAlt,
  FaCloudUploadAlt, FaSearch, FaFileAlt, FaRobot,
  FaUsers,
  FaDraftingCompass,
  FaSitemap,
  FaPlayCircle,
  FaCubes,
  FaSyncAlt,
  FaUsersCog,
  FaProjectDiagram,
  FaCloud,
  FaPlug,
  FaRedo,
  FaFacebook,
  FaMapMarkedAlt,
  FaEnvelopeOpenText,
  FaPenNib,
  FaShareAlt,
  FaShoppingCart,
  FaCreditCard,
  FaUserFriends,
  FaTools
} from "react-icons/fa";

const DropdownMenu = ({ mobile, textColorClass, linkHoverClass }) => {
  const [isMainDropdownOpen, setIsMainDropdownOpen] = useState(false);
  const [openCategoryIndex, setOpenCategoryIndex] = useState(null);

  useEffect(() => {
    if (!mobile) {
      setIsMainDropdownOpen(false);
      setOpenCategoryIndex(null);
    }
  }, [mobile]);

  const toggleMainDropdown = () => {
    setIsMainDropdownOpen(!isMainDropdownOpen);
    if (isMainDropdownOpen) {
      setOpenCategoryIndex(null);
    }
  };

  const toggleCategoryDropdown = (index) => {
    setOpenCategoryIndex(openCategoryIndex === index ? null : index);
  };

  // Menu data with page routes and section IDs
  const menuCategories = [
    {
      title: "DESIGN",
      items: [
        { 
          label: "UX/UI Design", 
          icon: FaFigma, 
          color: "from-blue-300 to-blue-400",
          route: "/ui-ux development#website-ui-design"
        },
        { 
          label: "Prototyping", 
          icon: FaDraftingCompass, 
          color: "from-blue-300 to-blue-400",
          route: "/ui-ux development#wireframing-prototyping"
        },
        { 
          label: "Wireframing", 
          icon: FaSitemap, 
          color: "from-blue-300 to-blue-400",
          route: "/ui-ux development#wireframing-prototyping"
        },
        { 
          label: "Motion & Micro Interactions", 
          icon: FaPlayCircle, 
          color: "from-blue-300 to-blue-400",
          route: "/ui-ux development#mobile-app-ui-design"
        },
        { 
          label: "Design Systems", 
          icon: FaCubes, 
          color: "from-blue-300 to-blue-400",
          route: "/ui-ux development#design-system-creation"
        },
        { 
          label: "Product Re-Design", 
          icon: FaSyncAlt, 
          color: "from-blue-300 to-blue-400",
          route: "/ui-ux development#website-ui-design"
        },
      ]
    },
    {
      title: "DEVELOPMENT",
      items: [
        { 
          label: "WebApp Development", 
          icon: FaLaptopCode, 
          color: "from-orange-200 to-orange-300",
          route: "/web-development#computer-languages"
        },
        { 
          label: "Mobile App Development", 
          icon: FaMobileAlt, 
          color: "from-orange-200 to-orange-300",
          route: "/app-development#flutter-app-development"
        },
        { 
          label: "Custom CRM Development", 
          icon: FaUsersCog, 
          color: "from-orange-200 to-orange-300",
          route: "/software-development#crm-system-development"
        },
        { 
          label: "ERP System Development", 
          icon: FaProjectDiagram, 
          color: "from-orange-200 to-orange-300",
          route: "/software-development#erp-or-system"
        },
        { 
          label: "SaaS Platform Development", 
          icon: FaCloud, 
          color: "from-orange-200 to-orange-300",
          route: "/software-development#saas-platform-development"
        },
        { 
          label: "API Integration", 
          icon: FaPlug, 
          color: "from-orange-200 to-orange-300",
          route: "/web-development#smart-features-tailored"
        },
      ]
    },
    {
      title: "MARKETING",
      items: [
        { 
          label: "SEO", 
          icon: FaSearch, 
          color: "from-green-400 to-green-400",
          route: "/seo#keyword-research"
        },
        { 
          label: "Google Ads", 
          icon: FaRocket, 
          color: "from-green-400 to-green-400",
          route: "/digital-markitting#google-ads-setup"
        },
        { 
          label: "Meta Ads", 
          icon: FaFacebook, 
          color: "from-green-400 to-green-400",
          route: "/digital-markitting#social-media-marketing"
        },
        { 
          label: "Local SEO", 
          icon: FaMapMarkedAlt, 
          color: "from-green-400 to-green-400",
          route: "/seo#on-page-seo"
        },
        { 
          label: "Email Marketing", 
          icon: FaEnvelopeOpenText, 
          color: "from-green-400 to-green-400",
          route: "/digital-markitting#email-marketing"
        },
        { 
          label: "Content Writing", 
          icon: FaPenNib, 
          color: "from-green-400 to-green-400",
          route: "/digital-markitting#content-marketing"
        },
      ]
    },
  ];

  const solutionsCategory = {
    title: "SOLUTIONS",
    items: [
      { 
        label: "MVP Design & Development", 
        icon: FaRocket, 
        color: "from-pink-300 to-pink-400",
        route: "/software-development#saas-platform-development"
      },
      { 
        label: "AI & Chatbot Solutions", 
        icon: FaRobot, 
        color: "from-pink-300 to-pink-400",
        route: "/chatbot-development#website-chatbot-development"
      },
      { 
        label: "E-commerce Solutions (WooCommerce, Shopify)", 
        icon: FaShoppingCart, 
        color: "from-pink-300 to-pink-400",
        route: "/e-commerce development#woocommerce-store-setup"
      },
      { 
        label: "Payment Gateway Integration", 
        icon: FaCreditCard, 
        color: "from-pink-300 to-pink-400",
        route: "/e-commerce development#payment-gateway-integration"
      },
      { 
        label: "Team Extension", 
        icon: FaUserFriends, 
        color: "from-pink-300 to-pink-400",
        route: "/software-development#crm-system-development"
      },
      { 
        label: "Maintenance & Support", 
        icon: FaTools, 
        color: "from-pink-300 to-pink-400",
        route: "/maintenence#website-maintenance-plans"
      },
    ]
  };

  const handleCloseDropdown = () => {
    setIsMainDropdownOpen(false);
    setOpenCategoryIndex(null);
  };

  return (
    <li
      className="relative w-full lg:w-auto"
      onMouseEnter={mobile ? undefined : () => setIsMainDropdownOpen(true)}
      onMouseLeave={mobile ? undefined : () => setIsMainDropdownOpen(false)}
    >
      {/* Main Menu Link */}
      <button
        onClick={toggleMainDropdown}
        className={`inline-flex items-center font-semibold whitespace-nowrap tracking-wide ${mobile ? "block w-full text-left" : ""} ${textColorClass} ${linkHoverClass}`}
        aria-expanded={isMainDropdownOpen ? "true" : "false"}
      >
        Services
        <svg
          className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${isMainDropdownOpen && mobile ? "rotate-180" : "rotate-0"}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d={isMainDropdownOpen && mobile ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
        </svg>
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {isMainDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`${mobile ?
              "relative w-full mt-2 p-4 bg-white/80 backdrop-blur-lg rounded-lg shadow-inner" :
              "absolute -left-[300px] top-full mt-4 w-screen max-w-5xl -translate-x-1/2 p-8 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100"}`}
          >
            {/* Categories Grid */}
            <div className={`${mobile ? "grid grid-cols-1 gap-6" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"}`}>
              {menuCategories.map((category, catIndex) => (
                <div key={catIndex} className="flex flex-col items-start">
                  <button
                    onClick={mobile ? () => toggleCategoryDropdown(catIndex) : undefined}
                    className="flex justify-between items-center w-full mb-4"
                  >
                    <span className="text-lg font-bold text-gray-800 tracking-wide uppercase">
                      {category.title}
                    </span>
                    {mobile && (
                      <svg className={`ml-2 h-5 w-5 text-gray-600 transform transition-transform duration-200 ${openCategoryIndex === catIndex ? "rotate-180" : "rotate-0"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={openCategoryIndex === catIndex ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                      </svg>
                    )}
                  </button>

                  <AnimatePresence>
                    {(!mobile || openCategoryIndex === catIndex) && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4 w-full"
                      >
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <Link 
                              to={item.route}
                              onClick={handleCloseDropdown}
                              className="group flex items-start space-x-4 px-3 rounded-xl hover:bg-gray-50 transition-all duration-200 w-full text-left"
                            >
                              <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-r ${item.color} text-white shadow-sm group-hover:shadow-md transition-shadow duration-200`}>
                                <item.icon className="text-md" />
                              </div>
                              <div className="flex-1">
                                <span className="text-sm font-medium text-gray-800 group-hover:text-gray-900 transition-colors duration-200">
                                  {item.label}
                                </span>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Solutions Section */}
            <div className="mt-6 px-2">
              <button
                onClick={mobile ? () => toggleCategoryDropdown("solutions") : undefined}
                className="flex justify-between items-center w-full mb-4"
              >
                <span className="text-lg font-bold text-gray-800 tracking-wide uppercase">
                  {solutionsCategory.title}
                </span>
                {mobile && (
                  <svg
                    className={`ml-2 h-5 w-5 text-gray-600 transform transition-transform duration-200 ${openCategoryIndex === "solutions" ? "rotate-180" : "rotate-0"}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={openCategoryIndex === "solutions" ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                    />
                  </svg>
                )}
              </button>

              <AnimatePresence>
                {(!mobile || openCategoryIndex === "solutions") && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                  >
                    {solutionsCategory.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex-1 min-w-[200px]">
                        <Link 
                          to={item.route}
                          onClick={handleCloseDropdown}
                          className="group flex px-2 items-start space-x-4 rounded-xl hover:bg-gray-50 transition-all duration-200 w-full text-left"
                        >
                          <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-r ${item.color} text-white shadow-sm group-hover:shadow-md transition-shadow duration-200`}>
                            <item.icon className="text-lg" />
                          </div>
                          <div className="flex-1">
                            <span className="text-sm font-medium text-gray-800 group-hover:text-gray-900 transition-colors duration-200">
                              {item.label}
                            </span>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

export default DropdownMenu;