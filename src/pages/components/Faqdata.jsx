import React, { useState } from "react";
import PageWrapper from "../../main/Pagewraper";
import {
  FaPlus,
  FaMinus,
  FaEnvelope,
  FaFileAlt,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "Why choose Fronx Solutions?",
    answer:
      "Because we simplify everything, quickly and tailor-made. We listen to your goals, work rigorously, and deliver results that grow your business—without stress or confusion.",
  },
  {
    question: "I don't know what type of website or app I need. Can you help me?",
    answer:
      "Yes, of course! You don't need to have everything defined. Just tell us what you do and what you want to achieve, and we'll ask the right questions, share ideas, and help you choose what's best for your business.",
  },
  {
    question: "Can you fix my old site or app?",
    answer:
      "Yes! We can improve or rebuild your current website or application to make it faster, better, and more modern.",
  },
  {
    question: "Can you also create my logo or brand identity?",
    answer:
      "Yes, we can design a complete identity for your brand — logo, colors, and more.",
  },
  {
    question: "Can I see some examples of your work?",
    answer:
      "Yes! We will be happy to show you websites and apps we have created for other satisfied clients.",
  },
  {
    question: "Do you offer solutions for schools, institutions or associations?",
    answer:
      "Yes! We create custom websites and tools for schools, public organizations, and associations. We ensure they fit your goals and budget.",
  },
  {
    question: "Can I use the Digitalization Bonus for your services?",
    answer:
      "Yes, if you're eligible, you can use the Digitalization Bonus to help finance your project. We'll guide you through the process.",
  },
];

const stepsData = [
  {
    icon: FaEnvelope,
    title: "Contact Us",
    description:
      "Let's talk about your needs, ideas and objectives. This first meeting will help us understand your vision and propose a suitable solution.",
  },
  {
    icon: FaFileAlt,
    title: "Analysis & Proposals",
    description:
      "We analyze your project and propose a customized solution, accompanied by a clear, detailed quotation.",
  },
  {
    icon: FaLaptopCode,
    title: "Design and development",
    description:
      "After validation, we begin the design and development of your project, taking care to respect your expectations, your objectives, and the specifications defined together.",
  },
  {
    icon: FaRocket,
    title: "Launch and follow-up",
    description:
      "Once the project has been finalized, we support you during its launch and provide regular follow-up and maintenance to ensure its lasting success.",
  },
];

// Variants for animations
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* FAQ Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="bg-[#F9FAFB] py-16 md:py-24"
      >
        <PageWrapper>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 p-4 md:p-8">
            {faqData.map((item, index) => (
              <div key={index} className="py-4 border rounded-lg px-4 mb-4">
                <button
                  className="flex justify-between items-center w-full text-left focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className="font-semibold text-gray-800 text-lg pr-4">
                    {item.question}
                  </h3>
                  {openIndex === index ? (
                    <FaMinus className="text-white bg-[#6931CF] p-2 rounded-3xl w-7 h-7" />
                  ) : (
                    <FaPlus className="text-white bg-[#6931CF] p-2 rounded-3xl w-7 h-7" />
                  )}
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="mt-3 text-gray-600 bg-slate-100 p-4 leading-relaxed pr-8">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </PageWrapper>
      </motion.section>

      {/* Steps Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="bg-white py-16 md:py-24"
      >
        <PageWrapper>
          <div className="text-center mb-12">
            <p className="text-gray-600 font-semibold uppercase tracking-widest text-md mb-2">
              STEPS TO GET STARTED
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              To Start a Project with Us
            </h2>
            <p className="text-lg sm:text-xl text-gray-500 max-w-3xl mx-auto">
              Discover how FronxSolutions transforms ideas into cutting-edge
              digital solutions powering start-ups to enterprises with scalable
              software excellence.
            </p>
          </div>

          <div className="relative flex flex-col lg:flex-row justify-center items-stretch gap-6 mt-16">
            {stepsData.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={index}
                  custom={index}
                  variants={stepVariants}
                  className="relative bg-gray-100 p-6 rounded-xl flex-1 min-w-[280px] max-w-sm"
                >
                  {/* Icon */}
                  {IconComponent && (
                    <IconComponent className="w-12 h-12 text-orange-500 mb-4" />
                  )}
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </PageWrapper>
      </motion.section>
    </>
  );
};

export default FAQ;
