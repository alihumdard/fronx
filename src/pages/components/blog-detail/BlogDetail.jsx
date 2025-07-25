import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../../../main/Navbar";
import PageWrapper from "../../../main/Pagewraper";
import ContactForm from "../Contact";
import Footer from "../../../main/Footer";
import URLS from "../../../config/urls.config";
import {
  FaComments,
  FaTools,
  FaMicrochip,
  FaBrain,
  FaHeartbeat,
  FaSearch,
  FaLightbulb,
  FaDraftingCompass,
  FaCogs,
  FaChartLine,
  FaFileAlt,
  FaShareAlt,
  FaPenNib,
  FaLink,
} from "react-icons/fa";
import StatsSection from "../Statsdata";
import "swiper/css";
import "swiper/css/pagination";

const recentPosts = [
  {
    date: "4 August 2024",
    title: "Scalable IT solution tailored to meet a unique business needs.",
    image: "/images/blog-1.png", // Replace with your image path
  },
  // Duplicate entries for demo – repeat as needed
  {
    date: "4 August 2024",
    title: "Scalable IT solution tailored to meet a unique business needs.",
    image: "/images/blog-1.png",
  },
  {
    date: "4 August 2024",
    title: "Scalable IT solution tailored to meet a unique business needs.",
    image: "/images/blog-1.png",
  },
  {
    date: "4 August 2024",
    title: "Scalable IT solution tailored to meet a unique business needs.",
    image: "/images/blog-1.png",
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
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

const BlogDetail = () => {
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
                    to={URLS.BOLG}
                    className="text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    Blog
                  </Link>
                  <span className="text-orange-400 hidden sm:block">››</span>
                  <Link className="text-blue-400 hover:text-blue-300 transition-colors flex">
                    Scalable IT solution tailored to meet a unique business
                    <span className="hidden sm:block pl-1">needs...</span>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </PageWrapper>
        </div>

     <div className="bg-white px-4 md:px-10 pt-28 pb-20">
  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
    {/* Main Content */}
    <motion.div
      className="md:col-span-2 space-y-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
    >
      {/* Hero Image */}
      <motion.img
        src="/images/blog-4.png"
        alt="Main Banner"
        className="rounded-lg w-full object-cover"
        variants={fadeInUp}
      />

      {/* Title and Paragraph */}
      <motion.div className="md:pb-10" variants={fadeInUp}>
        <h2 className="text-2xl font-bold text-gray-800">
          Scalable IT solution tailored to meet a unique business needs.
        </h2>
        <p className="text-gray-600 mt-4">
          Aliquam metus nibh consectetur montes nascetur...
        </p>
        <p className="text-gray-600 mt-4">
          Curabitur sit sollicitudin duis condimentum nec...
        </p>
      </motion.div>

      {/* Quote Section */}
      <motion.div
        className="border-l-4 border-indigo-500 bg-gray-50 p-5 shadow-sm italic text-gray-700"
        variants={fadeInUp}
      >
        <p>
          “Tortor dis efficitur risus placerat libero condimentum faucibus enim...”
        </p>
        <p className="mt-2 font-semibold text-indigo-600">
          — Kathryn Murphy
        </p>
      </motion.div>

      {/* Sub Content */}
      <motion.div className="md:pt-10 pb-5" variants={fadeInUp}>
        <h3 className="text-xl font-semibold text-gray-800">
          Creative approach to every project
        </h3>
        <p className="text-gray-600 mt-2">
          Aliquam metus nibh consectetur montes nascetur...
        </p>
      </motion.div>

      {/* Share Icons */}
      <motion.div
        className="flex items-center gap-3 mt-4 pb-10"
        variants={fadeInUp}
      >
        <span className="text-gray-600 font-medium">Share Article:</span>

        {/* Social Icons */}
        {["facebook-f", "instagram", "pinterest-p", "linkedin-in"].map(
          (icon, i) => (
            <motion.a
              key={icon}
              href="#"
              variants={fadeIn}
              custom={i + 1}
              className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-200 ${
                icon === "facebook-f"
                  ? "bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white"
                  : icon === "instagram"
                  ? "bg-pink-100 text-pink-500 hover:bg-pink-500 hover:text-white"
                  : icon === "pinterest-p"
                  ? "bg-red-100 text-red-600 hover:bg-red-600 hover:text-white"
                  : "bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white"
              }`}
            >
              <i className={`fab fa-${icon}`}></i>
            </motion.a>
          )
        )}
      </motion.div>
    </motion.div>

    {/* Sidebar – Recent Posts */}
    <motion.div
      className="rounded-lg p-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <h3 className="text-lg bg-white font-semibold text-gray-800 mb-4">
        Recent Posts
      </h3>
      <ul className="space-y-8 bg-gray-50 p-3">
        {recentPosts.map((post, index) => (
          <motion.li
            key={index}
            className="flex gap-3 items-start border-b-2 pb-3 border-gray-100"
            custom={index + 1}
            variants={fadeIn}
          >
            <img
              src={post.image}
              alt="Post Thumb"
              className="w-14 h-14 rounded-md object-cover"
            />
            <div>
              <p className="text-sm text-gray-400 mb-1">{post.date}</p>
              <p className="text-sm font-semibold text-gray-800">
                {post.title}
              </p>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  </div>
</div>


        <ContactForm />
        <Footer />
      </div>
    </>
  );
};

export default BlogDetail;
