import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import Navbar from "../main/Navbar";
import PageWrapper from "../main/Pagewraper";
import ContactForm from "./components/Contact";
import Footer from "../main/Footer";
import StatsSection from "./components/Statsdata";
import ProjectGridSection from "./components/ProjectGridSection";

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
const Contact = () => {
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
        <div className="relative min-h-[400px] sm:min-h-[500px] w-full overflow-hidden">
          <PageWrapper>
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

            {/* Yellow Glow Circle */}
            <span
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-[#FFC003] opacity-10 blur-3xl rounded-full
      z-10 pointer-events-none"
            />

            {/* Animated Content */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center sm:px-6 md:px-10 z-20"
              variants={containerVariant}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6 sm:mb-10"
                variants={fadeUpVariant}
              >
                Contact us
              </motion.h1>

              <motion.p
                className="text-sm sm:text-base md:text-xl lg:text-2xl text-white/80 max-w-full sm:max-w-xl mx-auto"
                variants={fadeUpVariant}
                transition={{ delay: 0.3 }}
              >
                Need help? Have a question? You’ve come to the right place.
              </motion.p>
            </motion.div>
          </PageWrapper>
        </div>

       <div className="bg-white px-4 py-10 sm:px-8 md:px-16 lg:px-24">
      <motion.div
        className="py-20"
        variants={fadeUpVariant}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="bg-gray-50 p-10 flex flex-col lg:flex-row justify-between items-center rounded-xl gap-8"
          variants={fadeUpVariant}
          custom={1}
        >
          <div className="flex-1 space-y-2 text-center lg:text-left">
            <p className="text-sm text-blue-600 font-semibold">Work With Us</p>
            <h2 className="text-3xl font-bold text-gray-800">
              Contact Information
            </h2>
            <p className="text-gray-500 text-sm md:text-base max-w-md mx-auto lg:mx-0">
              Thank you for your interest in Attach Fronx Solution. We're excited to hear from you and discuss...
            </p>
          </div>
          <div className="w-full md:w-96">
            <img
              src="/images/contact.png"
              alt="Illustration"
              className="w-full"
            />
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6"
          variants={fadeUpVariant}
          custom={2}
        >
          {[{
            icon: "fas fa-phone-alt",
            title: "Call Us For Query",
            value: "(+256) 69825-3158"
          }, {
            icon: "fas fa-envelope",
            title: "Email Us Anytime",
            value: "info@gmail.com"
          }, {
            icon: "fas fa-map-marker-alt",
            title: "Visit Our Office",
            value: "14 Maniel Lane, Karachi"
          }].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="text-orange-500 text-2xl bg-white py-3 px-4 rounded-full">
                <i className={item.icon}></i>
              </div>
              <div>
                <p className="text-sm text-gray-500">{item.title}</p>
                <p className="font-semibold text-gray-800">{item.value}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 items-start"
          variants={fadeUpVariant}
          custom={3}
        >
          <form className="bg-white shadow-lg rounded-xl p-6 md:p-8 space-y-5 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="text" placeholder="Last Name" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="email" placeholder="Email" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="text" placeholder="Mobile Number" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <input type="text" placeholder="Subject" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <textarea rows="4" placeholder="Your Message" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            <button type="submit" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded shadow hover:opacity-90 transition">
              Submit
            </button>
          </form>

          <div className="rounded-xl overflow-hidden w-full h-[85%]">
            <img
              src="/images/contact-2.png"
              alt="Support agent"
              className="w-full h-auto max-h-[500px] object-cover rounded-xl"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>

        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924237.7091839125!2d66.49598340315225!3d25.192983725749368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1753094509058!5m2!1sen!2s"
            className="w-full h-[450px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map of Karachi"
          ></iframe>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
