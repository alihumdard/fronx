import React from "react";
import { motion } from "framer-motion";
import PageWrapper from "../../main/Pagewraper";

const steps = [
  {
    step: "01 STEP",
    title: "Discussion",
    description:
      "This might include setting up shortcuts, dependencies, or system settings to ensure",
  },
  {
    step: "02 STEP",
    title: "Ideas & Concepts",
    description:
      "New business ideas and conceptual frameworks are explored for problem solving",
  },
  {
    step: "03 STEP",
    title: "Testing & Trying",
    description:
      "Testing & Trying\" in a general sense, but could you clarify what you're asking about.",
  },
  {
    step: "04 STEP",
    title: "Execute & Install",
    description:
      "Running an installer (usually a exe or dmg file) to start the installation.",
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const OveronsAccess = () => {
  return (
    <div className="bg-white py-16 text-center">
      <PageWrapper>
        {/* section -1 */}
        <div className="md:py-20">
          <motion.h2
            className="text-3xl md:text-4xl font-bold pb-10 text-black mb-16 leading-snug"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
          >
            Access Control And Identity <br /> Management Process
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Dots */}
            {[...Array(4)].map((_, idx) => (
              <div
                key={idx}
                className={`absolute top-[26px] left-[calc(12.5%+25%*${idx})] w-4 h-4 bg-white border-4 border-gray-300 rounded-full z-10`}
              ></div>
            ))}

            {/* Step Cards */}
            {steps.map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#F8FAFC] hover:shadow-xl ease-in-out p-6 rounded-xl shadow-sm text-left relative z-20"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariant}
              >
                <div className="flex items-center mb-4 group hover:cursor-pointer relative">
                  {/* Colored bar container */}
                  <div className="flex transform transition-all duration-500 group-hover:translate-x-2">
                    <div className="w-4 h-8 rounded-l-full bg-[#3F00F8]" />
                    <div className="w-4 h-8 rounded-r-full bg-[#A530F9]" />
                  </div>

                  {/* Step badge with background animation */}
                  <span className="relative ml-3 text-sm font-semibold text-black px-3 py-1 rounded-full shadow z-10 overflow-hidden">
                    {/* Hover background animation */}
                    <span className="absolute inset-0 bg-[#3F00F8] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />

                    {/* Text (should be above the background layer) */}
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                      {item.step}
                    </span>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* section-2 */}
        <motion.div
          className="bg-cover bg-center text-white p-8 rounded-lg shadow-lg max-w-7xl mx-auto my-12 flex flex-col lg:flex-row items-center lg:items-start"
          style={{ backgroundImage: "url('/images/Home.png')" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="lg:w-[60%] px-0 lg:p-8 mb-8 lg:mb-0 text-start">
            <h2 className="text-4xl font-bold mb-4">About Fronx Solutions</h2>
            <p className="text-lg mb-6">
              Strengthening businesses with smart digital solutions
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Fronx Solutions began its journey over five years ago in Belgium with a clear mission: to help businesses grow through smart and reliable technology. Since then, we've expanded across Europe and now proudly operate from Belgium, where we harness our creativity, expertise, and passion for digital to empower ever-more ambitious brands.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We're more than just a technology company. We're your digital growth partner. From impactful websites to scalable e-commerce platforms and engaging mobile apps—everything we create is designed to move your business forward... faster, smarter, and more efficiently.
            </p>
          </div>

          <motion.div
            className="lg:w-[40%] flex justify-center items-center relative"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/circle.png"
              className="w-[80%]"
              alt="Fronx Circle"
            />
          </motion.div>
        </motion.div>
      </PageWrapper>

      {/* section-3 */}
      <motion.div
        className="flex justify-center items-center py-16 px-4 bg-gray-100 min-h-screen font-sans"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="relative flex flex-col lg:flex-row items-stretch rounded-xl overflow-hidden max-w-6xl w-full">
          {/* Left Image */}
          <div className="w-full lg:w-[45%]">
            <img
              src="/images/mission.png"
              alt="Collaboration"
              className="w-full h-full object-cover lg:rounded-l-xl"
              style={{ minHeight: "400px" }}
            />
          </div>

          {/* Right Floating Card */}
          <div className="w-full lg:w-[55%] flex justify-center items-center mt-[-40px] lg:mt-0 lg:absolute lg:left-[37%] lg:top-10 px-4 lg:px-0">
            <motion.div
              className="relative bg-opacity-80 backdrop-blur-3xl border border-white/30 rounded-2xl bg-white shadow-sm px-6 py-8 sm:px-8 sm:py-10 w-full max-w-xl text-start z-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
                Our Mission
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4">
                Helping you succeed in the digital world
              </p>

              <svg
                className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9.998 12.19l-3.535 3.536-1.414-1.414L8.584 10.776 5.05 7.242 6.464 5.828l4.949 4.95zm4.47-4.47l-3.536 3.535 1.414 1.414 3.536-3.535 1.414 1.414L15.91 10.776l3.535 3.535 1.414-1.414-4.949-4.949z" />
              </svg>

              <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-6">
             Our mission is simple: to provide businesses with the tools they need to stand out, stay competitive, and grow sustainably. Through tailored strategies, creative solutions, and personalized support, we help you stay focused on your vision while we manage your digital transformation.
              </p>

              <div className="flex justify-end">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.002 12.19l3.535 3.536 1.414-1.414L15.416 10.776l3.535-3.534-1.414-1.414-4.949 4.95zm-4.47-4.47l3.536 3.535-1.414 1.414-3.536-3.535-1.414 1.414L8.09 10.776l-3.535 3.535-1.414-1.414 4.949-4.949z" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OveronsAccess;
