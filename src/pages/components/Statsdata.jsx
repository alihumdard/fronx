import React from "react";
import { motion } from "framer-motion";
import PageWrapper from "../../main/Pagewraper"; // Adjust path if needed

const statsData = [
  { value: "2000+", description: "Delivered Projects" },
  { value: "500+", description: "Companies Served" },
  { value: "5+", description: "Award Won" },
  { value: "1200+", description: "Employees Worldwide" },
];

// Animation variants
const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const StatsSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <PageWrapper>
        <h1 className="text-3xl sm:text-4xl pl-16 pb-10 font-bold text-start mb-8">
          <span className="">
            Why Choose Fronx Solutions
          </span>
        </h1>

        <div className="flex flex-col md:flex-row justify-around items-center gap-8 md:gap-4 lg:gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative w-56 h-56 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full flex flex-col items-center justify-center text-center border border-purple-500 p-4"
            >
              {/* Inner Circle */}
              <div className="w-[calc(100%-10px)] h-[calc(100%-10px)] bg-gray-50 p-2 rounded-full flex flex-col items-center justify-center">
                <p className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </p>
                <p className="text-gray-600 text-sm lg:text-base">
                  {stat.description}
                </p>
              </div>

              {/* Small Purple Dot */}
              <div
                className="absolute ml-20 w-3 h-3 rounded-full bg-[#6C62D6]"
                style={{
                  bottom: "10%",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              ></div>
            </motion.div>
          ))}
        </div>
      </PageWrapper>
    </section>
  );
};

export default StatsSection;
