import React, { useState } from "react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import Navbar from "../main/Navbar";
import PageWrapper from "../main/Pagewraper";
import Footer from "../main/Footer";
import { Link } from "react-router-dom";
import URLS from "../config/urls.config";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


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

const Portfolio = () => {
  const [activeNav, setActiveNav] = useState("web");

  const navItems = [
    { id: "web", label: "Website Development" },
    { id: "mobile", label: "Mobile APP Development" },
    { id: "word", label: "WordPress Development" },
    { id: "commerce", label: "Woo Commerce / E Commerce " },
    { id: "design", label: "UI/UX Design" },
    { id: "consulting", label: "Digital Marketing" },
    { id: "dash", label: "Dasgboard" },
    { id: "logo", label: "Logo Design" },
  ];

  const projects = [
    {
      id: 1,
      website: "Website Development",
      title:
        "Empowering young minds with innovative learning experiences for a brighter future ahead",
      para: "Kidz Calendar website ",
      category: "web",
      image: "/images/w1.png",
      url: URLS.PORTOLIO_DETAIL.WEB_1,
    },
    {
      id: 2,
      website: "Website Development",
      title:
        "Revamping & deploying a +10 year old mobile app to more than 700k users in Belgium in 3 months",
      para: "Mobile APP - Design System - UX/UI Design - User Testing - FullStack Dev",
      category: "web",
      image: "/images/w2.png",
      url: URLS.PORTOLIO_DETAIL.WEB_1,

    },
    {
      id: 3,
      website: "Website Development",
      title:
        "Revamping & deploying a +10 year old mobile app to more than 700k users in Belgium in 3 months",
      para: "Mobile APP - Design System - UX/UI Design - User Testing - FullStack Dev",
      category: "web",
      image: "/images/w3.png",
      url: URLS.PORTOLIO_DETAIL.WEB_1,

    },
    {
      id: 4,
      website: "Website Development",
      title:
        "Revamping & deploying a +10 year old mobile app to more than 700k users in Belgium in 3 months",
      para: "Mobile APP - Design System - UX/UI Design - User Testing - FullStack Dev",
      category: "web",
      image: "/images/w4.png",
      url: URLS.PORTOLIO_DETAIL.WEB_1,

    },
    {
      id: 5,
      website: "Website Development",
      title:
        "Revamping & deploying a +10 year old mobile app to more than 700k users in Belgium in 3 months",
      para: "Mobile APP - Design System - UX/UI Design - User Testing - FullStack Dev",

      category: "web",
      image: "/images/w5.png",
      url: URLS.PORTOLIO_DETAIL.WEB_1,

    },
    {
      id: 6,
      website: "Website Development",
      title:
        "Revamping & deploying a +10 year old mobile app to more than 700k users in Belgium in 3 months",
      para: "Mobile APP - Design System - UX/UI Design - User Testing - FullStack Dev",

      category: "web",
      image: "/images/w6.png",
      url: URLS.PORTOLIO_DETAIL.WEB_1,

    },
    {
      id: 7,
      website: "Website Development",
      title:
        "Revamping & deploying a +10 year old mobile app to more than 700k users in Belgium in 3 months",
      para: "Mobile APP - Design System - UX/UI Design - User Testing - FullStack Dev",
      category: "web",
      image: "/images/w7.png",
      url: URLS.PORTOLIO_DETAIL.WEB_1,
    },

    {
      id: 8,
      website: "Mobile App Development",
      title:
        "Empowering young minds with innovative learning experiences for a brighter future ahead",
      para: "Food Ordering Application",
      category: "mobile",
      image: "/images/m1.png",
      url: URLS.PORTOLIO_DETAIL.APP_1,
    },
    {
      id: 9,
      website: "Mobile App Development",
      title:
        "Revamping & deploying a +10 year old mobile app to more than 700k users in Belgium in 3 months",
      para: "Service Booking Application",
      category: "mobile",
      image: "/images/m2.png",
      url: URLS.PORTOLIO_DETAIL.APP_1,

    },
    {
      id: 10,
      website: "Mobile App Development",
      title:
        "Revamping & deploying a +10 year old mobile app to more than 700k users in Belgium in 3 months",
      para: "AgriCo Application",
      category: "mobile",
      image: "/images/m3.png",
      url: URLS.PORTOLIO_DETAIL.APP_1,

    },
    {
      id: 11,
      website: "Mobile App Development",
      title:
        "Revamping & deploying a +10 year old mobile app to more than 700k users in Belgium in 3 months",
      para: "Babysitter Booking Application",
      category: "mobile",
      image: "/images/m4.png",
      url: URLS.PORTOLIO_DETAIL.APP_1,

    },
    // wordpress
     {
      id: 12,
      website: "WordPress Development",
      title:
        "Empowering young minds with innovative learning experiences for a brighter future ahead",
      para: "Oracle Force ",
      category: "word",
      image: "/images/wp1.png",
      url: URLS.PORTOLIO_DETAIL.APP_1,

    },
     {
      id: 13,
      website: "WordPress Development",
      title:
        "Revamping & deploying a +10 year old mobile app to more than 700k users in Belgium in 3 months",
      para: "Mew School of Leadership",
      category: "word",
      image: "/images/wp2.png",
      url: URLS.PORTOLIO_DETAIL.APP_1,

    },
      {
      id: 14,
      website: "WordPress Development",
      title:
        "Revamping & deploying a +10 year old mobile app to more than 700k users in Belgium in 3 months",
      para: "BiD Lock",
      category: "word",
      image: "/images/wp3.png",
      url: URLS.PORTOLIO_DETAIL.APP_1,

    },
     {
      id: 14,
      website: "WordPress Development",
      title:
        "Revamping & deploying a +10 year old mobile app to more than 700k users in Belgium in 3 months",
      para: "BiD Lock",
      category: "word",
      image: "/images/wp4.png",
      url: URLS.PORTOLIO_DETAIL.APP_1,

    },
     {
      id: 15,
      website: "WordPress Development",
      title:
        "Revamping & deploying a +10 year old mobile app to more than 700k users in Belgium in 3 months",
      para: "BiD Lock",
      category: "word",
      image: "/images/wp5.jpg",
      url: URLS.PORTOLIO_DETAIL.APP_1,

    },
     {
      id: 16,
      website: "WordPress Development",
      title:
        "Revamping & deploying a +10 year old mobile app to more than 700k users in Belgium in 3 months",
      para: "BiD Lock",
      category: "word",
      image: "/images/wp6.jpg",
      url: URLS.PORTOLIO_DETAIL.APP_1,

    },
    {
      id: 17,
      website: "WordPress Development",
      title:
        "Revamping & deploying a +10 year old mobile app to more than 700k users in Belgium in 3 months",
      para: "BiD Lock",
      category: "word",
      image: "/images/wp7.jpg",
      url: URLS.PORTOLIO_DETAIL.APP_1,

    },
  ];

  const handleNavClick = (id) => setActiveNav(id);

  const filteredProjects =
    activeNav === "all"
      ? projects
      : projects.filter((project) => project.category === activeNav);

  return (
    <div className="relative w-full">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[400px] sm:h-[500px] overflow-visible">
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

            {/* Yellow Glow */}
            <span
              className="absolute top-1/2 left-1/2 
                -translate-x-1/2 -translate-y-1/2
                w-64 h-64 sm:w-[400px] sm:h-[400px]
                bg-[#FFC003] opacity-10 blur-3xl rounded-full
                z-10 pointer-events-none"
            />
          </div>

          {/* Animated Content */}
          <motion.div
            className="absolute top-32 sm:top-44 px-4"
            variants={containerVariant}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4 md:mb-6 leading-snug"
              variants={fadeUpVariant}
            >
              Empowering IT Consulting <br />
              <span className="mt-3">with</span>
              <span className="mt-3 ml-3 relative inline-block">
                Expert
                <span className="absolute left-0 right-0 -bottom-2 h-1 bg-gradient-to-r from-orange-500 to-yellow-500"></span>
              </span>
            </motion.h1>

            <motion.div
              className="mt-6 sm:mt-10 flex justify-start"
              variants={fadeUpVariant}
              transition={{ delay: 0.5 }}
            >
              <div
                className="flex flex-wrap items-center 
                  gap-2 sm:gap-3 
                  px-3 sm:px-6 py-2 sm:py-3 
                  border border-white/30 
                  rounded-full text-sm sm:text-base 
                  text-white bg-white/5 hover:bg-white/10 
                  transition-all duration-300"
              >
                <Link
                  to="/"
                  className="text-orange-400 hover:text-orange-300 transition-colors"
                >
                  Home
                </Link>
                <span className="text-orange-400">››</span>
                <span className="text-blue-600">Portfolio</span>
              </div>
            </motion.div>
          </motion.div>
        </PageWrapper>
      </div>

      {/* Portfolio Section */}
      <div className="min-h-screen py-10 sm:py-20">
        {/* Nav Tabs (Desktop with Swiper + Custom Arrows) */}
        <nav className="hidden sm:block bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
            <Swiper
              modules={[Navigation]}
              spaceBetween={10}
              slidesPerView="auto"
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              className="py-4"
            >
              {navItems.map((item) => (
                <SwiperSlide key={item.id} className="!w-auto">
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`${activeNav === item.id
                        ? "bg-gradient-to-r from-[#1A61EA] to-[#6931CF] text-white"
                        : "text-gray-600 hover:text-gray-900 bg-slate-50"
                      } px-4 py-2 rounded-full text-sm md:text-base font-medium transition-colors duration-200`}
                  >
                    {item.label}
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Nav Buttons */}
            <button className="custom-prev absolute -left-5 top-1/2 z-50 -translate-y-1/2 
      border bg-white p-2 rounded-full shadow-md 
      hover:scale-110 transition">
              <FaChevronLeft />
            </button>
            <button className="custom-next absolute -right-5 top-1/2 z-50 -translate-y-1/2 
      border bg-white p-2 rounded-full shadow-md 
      hover:scale-110 transition">
              <FaChevronRight />
            </button>
          </div>
        </nav>

        {/* Mobile Scroll Nav */}
        <div className="sm:hidden bg-white border-t border-gray-200">
          <div className="flex overflow-x-auto py-3 px-4 space-x-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`${activeNav === item.id
                  ? "bg-gradient-to-r from-[#1A61EA] to-[#6931CF] text-white"
                  : "text-gray-600 hover:text-gray-900"
                  } whitespace-nowrap px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-200`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          <div className="grid grid-cols-1 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white flex flex-col md:flex-row rounded-xl overflow-hidden hover:shadow-lg transition duration-300"
              >
                {/* Image */}
                <div className="md:w-2/5 h-52 sm:h-64 md:h-auto overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="md:w-3/5 p-6 sm:p-10 flex flex-col justify-center">
                  <p className="text-[#FF9B4B] bg-slate-50 rounded-full w-fit px-3 py-1 font-medium mb-3 text-sm sm:text-base">
                    {project.website}
                  </p>

                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 pb-5">{project.para}</p>

                  {project.url && (
                    <Link
                      to={project.url}
                      className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-[#1A61EA] to-[#6931CF] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200 w-fit"
                    >
                      View CASE
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

    </div>
  );
};

export default Portfolio;
