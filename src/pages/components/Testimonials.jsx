import React from "react";
import PageWrapper from "../../main/Pagewraper";
import { FaStar, FaQuoteRight } from "react-icons/fa";
import { motion } from "framer-motion";

// Testimonial Data
const testimonialData = {
  quote:
    "Working with this team was a pleasure. They turned our vague ideas into a stunning visual identity, exceeding expectations. Their focus on detail and openness to feedback made the entire process smooth and satisfying. Their professionalism and creative approach truly stood out.",
  rating: 5,
  clientName: "Chris Noth",
  clientTitle: "Owner Taxfirm",
  clientAvatar: "/images/Ellipse 27.png",
  companyLogo: "/images/image.png",
  otherAvatars: [
    "/images/Ellipse 27.png",
    "/images/Ellipse 24.png",
    "/images/Ellipse 27.png",
    "/images/Ellipse 26.png",
  ],
  mainTeamImage: "/images/testimonial.png",
};

// Variants for animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Testimonials = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-10"
    >
      <PageWrapper>
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <p className="text-gray-600 font-semibold uppercase tracking-widest text-sm mb-2">
            TESTIMONIALS
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 max-w-2xl mx-auto">
            Experience the Difference Through{" "}
            <span className="block lg:inline">Our Clients’ Eyes</span>
          </h2>
        </motion.div>

        {/* Main Testimonial Layout */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 lg:gap-12">
          {/* Left: Team Image */}
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-1/3 flex justify-center lg:justify-end"
          >
            <img
              src={testimonialData.mainTeamImage}
              alt="Client Team"
              className="w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto rounded-lg shadow-xl"
            />
          </motion.div>

          {/* Middle: Testimonial Card */}
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-1/2 flex-shrink-0 relative"
          >
            <FaQuoteRight className="absolute top-5 right-5 text-orange-400 text-3xl opacity-70" />
            <motion.div
              variants={itemVariants}
              className="bg-gray-100 p-6 sm:p-8 rounded-lg shadow-sm"
            >
              {/* Star Rating */}
              <motion.div variants={itemVariants} className="flex gap-1 mb-4">
                {Array.from({ length: testimonialData.rating }).map((_, i) => (
                  <FaStar key={i} className="text-orange-400 w-4 h-4" />
                ))}
              </motion.div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 italic text-base sm:text-lg leading-relaxed">
                "{testimonialData.quote}"
              </p>

              {/* Client Info */}
              <div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonialData.clientAvatar}
                    alt={testimonialData.clientName}
                    className="w-14 h-14 rounded-full object-cover border-2 border-orange-400"
                  />
                  <div>
                    <p className="font-bold text-gray-800 text-lg">
                      {testimonialData.clientName}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {testimonialData.clientTitle}
                    </p>
                  </div>
                </div>

                {testimonialData.companyLogo && (
                  <img
                    src={testimonialData.companyLogo}
                    alt="Company Logo"
                    className="h-10 object-contain"
                  />
                )}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Client Avatars */}
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-1/12 flex justify-center lg:flex-col gap-10 flex-wrap lg:items-center pt-4"
          >
            {testimonialData.otherAvatars.map((avatar, index) => (
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                key={index}
                src={avatar}
                alt={`Client Avatar ${index + 1}`}
                className="w-12 h-12 rounded-full object-cover border-2 border-gray-200 shadow-md"
              />
            ))}
          </motion.div>
        </div>
      </PageWrapper>
    </motion.section>
  );
};

export default Testimonials;
