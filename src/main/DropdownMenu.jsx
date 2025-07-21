import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import URLS from '../config/urls.config';
import { Link } from 'react-router-dom';

const serviceCategories = [
    {
        title: "Website Development",
        url: URLS.SERVICE_DETAIL.WEB_DEVELOPMENT,
        items: [
            "Wordpress Development",
            "Laravel/PHP Web Apps",
            "React.js/Next.js Web Apps",
            "Website Redesign",
            "API Integration",
        ],
    },
    {
        title: "Mobile Development",
        url: URLS.SERVICE_DETAIL.APP_DEVELOPMENT,
        items: [
            "Flutter App Development",
            "React Native Development",
            "Android App Development",
            "IOS App Development",
            "APP UI Design",
        ],
    },
    {
        title: "UX/UI Design Services",
        url: URLS.SERVICE_DETAIL.UIUX_DEVELOPEMENT,
        items: [
            "Website UI Design (Figma)",
            "Mobile App U Design",
            "Wireframing & Prototyping",
            "Design System Creation",
        ],
    },
    {
        title: "E-Commerce Solution",
        url: URLS.SERVICE_DETAIL.ECOMMERCE_DEVELOPMENT,
        items: [
            "WooCommerce Store Setup",
            "Shopify Development",
            "Custom E-Commerce Portal",
            "Product Management System",
            "Payment Gateway Integration",
        ],
    },
    {
        title: "Digital Marketing",
        url: URLS.SERVICE_DETAIL.DIGITAL_MARKITING,
        items: [
            "Google Ads Setup",
            "Social Media Marketing",
            "Content Marketing",
            "Email Marketing",
        ],
    },
    {
        title: "SEO",
        url: URLS.SERVICE_DETAIL.SEO,
        items: [
            "Keyword Research",
            "On-Page SEO",
            "Off-Page SEO",
            "Technical SEO",
            "Content Creation",
        ],
    },
    {
        title: "Software Development",
        url: URLS.SERVICE_DETAIL.SOFTWARE_DEVELOPMENT,
        items: [
            "CRM System Development",
            "Booking or Inventory System",
            "SaaS Platform Development",
            "ERP System Development",
        ],
    },
    {
        title: "Maintenance & Support",
        url: URLS.SERVICE_DETAIL.MAINTENENCE,
        items: [
            "Website UI Design (Figma)",
            "Mobile App U Design",
            "Wireframing & Prototyping",
            "Design System Creation",
        ],
    },
    {
        title: "AI & Chatbot Solution",
        url: URLS.SERVICE_DETAIL.CHATBOT_DEVELOPMENT,
        items: [
            "Website Chatbot Development",
            "Open AI/GPT Chatbot for Support/Sale",
            "AI Powered SaaS Tool Integration",
            "AI Powered SaaS Tool Integration",
        ],
    },
];

const DropdownMenu = ({ mobile, textColorClass, linkHoverClass }) => {
    const [isMainDropdownOpen, setIsMainDropdownOpen] = useState(false);
    const [openCategoryIndex, setOpenCategoryIndex] = useState(null); // New state for mobile category dropdowns

    // Close main dropdown if mobile menu closes or if transitioning to desktop
    useEffect(() => {
        if (!mobile) { // If it's desktop view
            setIsMainDropdownOpen(false); // Ensure main dropdown is closed
            setOpenCategoryIndex(null); // Ensure no category dropdown is open
        }
    }, [mobile]);

    const toggleMainDropdown = () => {
        setIsMainDropdownOpen(!isMainDropdownOpen);
        if (isMainDropdownOpen) { // If closing the main dropdown, close any open category dropdown too
            setOpenCategoryIndex(null);
        }
    };

    const toggleCategoryDropdown = (index) => {
        setOpenCategoryIndex(openCategoryIndex === index ? null : index);
    };

    return (
        <li
            className="relative w-full lg:w-auto"
            onMouseEnter={mobile ? undefined : () => setIsMainDropdownOpen(true)}
            onMouseLeave={mobile ? undefined : () => setIsMainDropdownOpen(false)}
        >
            <button
                onClick={toggleMainDropdown}
                className={`py-2 px-4 inline-flex items-center font-medium whitespace-nowrap focus:outline-none
                                ${mobile ? 'block w-full text-left' : ''}
                                ${textColorClass} ${linkHoverClass}`}
                aria-expanded={isMainDropdownOpen ? "true" : "false"}
                aria-controls="main-dropdown-content"
            >
             Welcome
                <svg
                    className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${
                        isMainDropdownOpen && mobile ? 'rotate-180' : 'rotate-0'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={isMainDropdownOpen && mobile ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                    />
                </svg>
            </button>

            <AnimatePresence>
                {isMainDropdownOpen && (
                    <motion.div
                        id="main-dropdown-content"
                        initial={{ opacity: 0, y: mobile ? -10 : 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: mobile ? -10 : 10, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className={`
                            ${mobile ?
                                'relative w-full mt-2 p-4 bg-gray-50 rounded-lg shadow-inner' :
                                'absolute left-1/2 sm:-left-[250%] top-full mt-3 w-screen max-w-screen-xl -translate-x-1/2 p-8 bg-white rounded-xl shadow-lg'
                            }
                            overflow-hidden
                        `}
                    >
                        <div className={`grid ${
                            mobile ?
                            'grid-cols-1 gap-y-0' : // Adjusted gap-y for mobile as categories will have their own spacing
                            'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-8 gap-x-6'
                        }`}>
                            {serviceCategories.map((category, catIndex) => (
                                <div key={catIndex} className="flex flex-col items-start text-left w-full">
                                    {/* Category Title - Acts as dropdown header on mobile */}
                                    <button
                                        onClick={mobile ? () => toggleCategoryDropdown(catIndex) : undefined}
                                        className={`flex justify-between items-center w-full py-2 ${mobile ? 'text-gray-800' : ''}`}
                                    >
                                        <Link to={category.url} className="text-lg font-semibold bg-gradient-to-r from-[#6931CF] to-[#1A61EA] bg-clip-text text-transparent whitespace-nowrap">
                                            {category.title}
                                        </Link>
                                        {mobile && ( // Show arrow only on mobile
                                            <svg
                                                className={`ml-2 h-5 w-5 text-gray-600 transform transition-transform duration-200 ${
                                                    openCategoryIndex === catIndex ? 'rotate-180' : 'rotate-0'
                                                }`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d={openCategoryIndex === catIndex ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                                                />
                                            </svg>
                                        )}
                                    </button>

                                    {/* Category Items - Conditional rendering and animation for mobile */}
                                    <AnimatePresence>
                                        {(!mobile || openCategoryIndex === catIndex) && ( // Show on desktop OR if mobile and this category is open
                                            <motion.ul
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.2, ease: "easeOut" }}
                                                className={`space-y-2 ${mobile ? 'w-full pl-4 mt-2' : ''}`} // Indent and add top margin on mobile
                                            >
                                                {category.items.map((item, itemIndex) => (
                                                    <li key={itemIndex}>
                                                        <a
                                                            href="#"
                                                            className={`block transition-colors duration-200 whitespace-nowrap text-gray-700 ${linkHoverClass}`}
                                                        >
                                                            {item}
                                                        </a>
                                                    </li>
                                                ))}
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </li>
    );
};

export default DropdownMenu;