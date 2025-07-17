import React from "react";
import PageWrapper from "../../main/Pagewraper";
import {
  FaLightbulb,
  FaMapMarkedAlt,
  FaLaptopCode,
  FaCode,
  FaCloudUploadAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const approachSteps = [
  {
    number: "01",
    icon: FaLightbulb,
    title: "Understanding and identifying patterns",
    description:
      "Leverage data to identify actionable patterns that drive strategic decisions and optimize business performance.",
  },
  {
    number: "02",
    icon: FaMapMarkedAlt,
    title: "Mapping schemas and user stories",
    description:
      "Translate data patterns into detailed user stories to ensure our solutions meet specific user needs and business objectives",
  },
  {
    number: "03",
    icon: FaLaptopCode,
    title: "Models & Front-end",
    description:
      "Design intuitive mockups and attractive front-end interfaces to deliver engaging, user-friendly, and converting experiences.",
  },
  {
    number: "04",
    icon: FaCode,
    title: "Website development",
    description:
      "Build robust, scalable sites with cutting-edge technologies to enhance functionality and deliver exceptional performance.",
  },
  {
    number: "05",
    icon: FaCloudUploadAlt,
    title: "Development & deployment",
    description:
      "Implement a seamless development and deployment process to ensure your digital solutions are launched efficiently and quickly, with minimal disruption.",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Approach = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="bg-gray-900 bg-cover bg-center bg-no-repeat py-16 md:py-24 text-white"
      style={{ backgroundImage: "url('/images/bg.png')" }}
    >
      <PageWrapper>
        <motion.div variants={cardVariants} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Our Proven Approach to Achieving Your Goals
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Achieve your business goals with our Fronx methodology, renowned for
            its structure, planning, and consistent results.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {approachSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-gray-700 flex flex-col justify-between min-h-[250px]"
              >
                <div className="flex justify-between items-start mb-4">
                  {IconComponent && (
                    <IconComponent className="w-10 h-10 text-orange-500" />
                  )}
                  <span className="text-5xl font-extrabold text-orange-400 opacity-30">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 leading-tight">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </PageWrapper>
    </motion.section>
  );
};

export default Approach;
