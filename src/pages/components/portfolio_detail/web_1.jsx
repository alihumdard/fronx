import React, { useState } from "react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import Footer from "../../../main/Footer";
import { useLanguage } from "../../../LanguageContext";
import { Link } from "react-router-dom";
import Navbar from "../../../main/Navbar";
import PageWrapper from "../../../main/Pagewraper";
import { FaQuoteRight, FaStar } from "react-icons/fa";
import URLS from "../../../config/urls.config";

// Animation Variants
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

const web1 = () => {
    const { language, toggleLanguage } = useLanguage();
    const [expandedCard, setExpandedCard] = useState(null);

    return (
        <>
            <div className="relative w-full">
                {/* Navbar */}
                <Navbar />

                <div className="relative h-[500px] overflow-visible">
                    <PageWrapper>
                        <div>
                            <img
                                src="/images/bg-overlay.png"
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
                                <span className="mt-3">with</span>
                                <span className="mt-3 ml-3 relative inline-block">
                                    Expert
                                    <span className="absolute  left-0 right-0 -bottom-2 h-1 bg-gradient-to-r from-orange-500 to-yellow-500"></span>
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
                                    to={URLS.PORTFOLIO}
                                        className="text-blue-600 hover:text-blue-600 transition-colors"
                                    >
                                        Portfolio
                                    </Link>
                                     <span className="text-blue-600">››</span>
                                    <Link
                                        to="/"
                                        className="text-blue-600 hover:text-blue-600 transition-colors"
                                    >
                                        website development
                                    </Link>
                                </div>
                            </motion.div>
                        </motion.div>
                    </PageWrapper>
                </div>

                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
                    <h1 class="text-3xl font-bold mb-4 text-gray-900 sm:text-left">
                        Fast Reaction
                    </h1>

                    <p class="text-gray-700 leading-relaxed mb-3 text-sm sm:text-base lg:text-lg">
                        Keeping up with your child’s busy life has never been easier. Our Kids Calendar is more than just a planner – it’s a smart, colorful, and interactive space that helps parents and children stay organized, informed, and excited about what’s coming next.
                    </p>

                    <p class="text-gray-700 leading-relaxed mb-3 text-sm sm:text-base lg:text-lg">
                        From school timetables, homework reminders, and extracurricular activities to birthdays, holidays, and family events, everything is beautifully arranged in one simple platform. Parents can manage schedules effortlessly, while kids enjoy a visually engaging and easy-to-understand calendar made just for them.
                    </p>

                    <p class="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                        We believe in making time management a life skill children can develop early. That’s why our calendar encourages independence and responsibility in a fun, safe, and supportive way. With customizable themes, gentle reminders, and secure access, we make planning a family-friendly experience everyone will love.
                    </p>
                </div>


                <div className="max-w-full mx-auto pt-14 flex justify-center">
                    <img src="/images/web1.jpg" alt="" className="rounded-lg h-96 w-[80%] shadow-md" />
                </div>


                <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Left Content */}
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">The Challenge</h1>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            It is a long established fact that a reader will be distracted by the readable content
                            of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                            more-or-less normal distribution of letters, as opposed to using 'Content here,
                            content here', making it look like readable English.
                        </p>
                        <ul className="space-y-3 list-disc list-inside text-gray-700">
                            <li>
                                It is a long established fact that a reader will be distracted by the readable
                                content of a page when looking at its layout.
                            </li>
                            <li>
                                It is a long established fact that a reader will be distracted by the readable
                                content of a page when looking at its layout.
                            </li>
                            <li>
                                It is a long established fact that a reader will be distracted by the readable
                                content of a page when looking at its layout.
                            </li>
                            <li>
                                It is a long established fact that a reader will be distracted by the readable
                                content of a page when looking at its layout.
                            </li>
                        </ul>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center">
                        <img
                            src="/images/web2.jpg"
                            alt="Challenge"
                            className="rounded-xl shadow-lg w-full max-w-md"
                        />
                    </div>
                </div>


                <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Left Content */}
                    <div className="flex justify-center">
                        <img
                            src="/images/web3.jpg"
                            alt="Challenge"
                            className="rounded-xl shadow-lg w-full max-w-md"
                        />
                    </div>



                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Solutions</h1>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            It is a long established fact that a reader will be distracted by the readable content
                            of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                            more-or-less normal distribution of letters, as opposed to using 'Content here,
                            content here', making it look like readable English.
                        </p>
                        <ul className="space-y-3 list-disc list-inside text-gray-700">
                            <li>
                                It is a long established fact that a reader will be distracted by the readable
                                content of a page when looking at its layout.
                            </li>
                            <li>
                                It is a long established fact that a reader will be distracted by the readable
                                content of a page when looking at its layout.
                            </li>
                            <li>
                                It is a long established fact that a reader will be distracted by the readable
                                content of a page when looking at its layout.
                            </li>
                            <li>
                                It is a long established fact that a reader will be distracted by the readable
                                content of a page when looking at its layout.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="py-20 max-w-7xl mx-auto my-20 rounded-xl flex items-center justify-center relative bg-cover bg-center " style={{ backgroundImage: "url('/images/bg.png')" }}>
                    {/* Overlay gradient */}

                    {/* Content Box */}
                    <div className="relative max-w-4xl w-full bg-gradient-to-r from-gray-900/50 to-gray-800/70 rounded-2xl p-8 shadow-xl">
                        {/* Header */}
                        <h2 className="text-white text-2xl font-bold mb-3">Client Testimonial</h2>

                        {/* Stars */}
                        <div className="flex items-center space-x-2 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className="text-yellow-400 text-xl" />
                            ))}
                        </div>

                        {/* Text */}
                        <p className="text-gray-300 leading-relaxed mb-6">
                            Working with this team was a pleasure. They turned our vague ideas
                            into a stunning visual identity, exceeding expectations. Their focus
                            on detail and openness to feedback made the entire process smooth and
                            satisfying. Their professionalism and creative approach truly stood
                            out.
                        </p>

                        {/* Quote Icon */}
                        <FaQuoteRight className="absolute top-8 right-8 text-orange-500 text-4xl opacity-80" />

                        {/* Footer */}
                        <div className="flex items-center justify-between mt-6">
                            {/* Profile */}
                            <div className="flex items-center space-x-4">
                                <img
                                    src="/images/user.jpg"
                                    alt="client"
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="text-white font-semibold">Chris Noth</h4>
                                    <p className="text-gray-400 text-sm">Owner Taxfirm</p>
                                </div>
                            </div>

                            {/* Logo */}
                            <div className="flex items-center space-x-2">
                                <h3 className="text-orange-500 text-xl font-bold">
                                    FAST <span className="text-white">REACTION</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default web1;