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
    question: "What Type Of Services Do Fronx Solutions Offer?",
    answer:
      "Fronx Solutions Offers A Wide Array Of Services A Business Needs, Including AI Development Services, AI Chatbot Development Services, Machine Learning Development Services, Mobile App Development, ChatGPT Integration, DevOps, UI/UX Design, Web Development, And Digital Marketing Solutions.",
  },
  {
    question: "How Long Will My Project Take?",
    answer:
      "The timeline for a project varies greatly depending on its complexity, scope, and specific requirements. We work closely with our clients to establish realistic timelines and milestones during the planning phase. After a detailed consultation and understanding your needs, we can provide a more accurate estimate.",
  },
  {
    question: "Can I Afford Your Services?",
    answer:
      "We believe in providing high-quality solutions that offer great value. Our pricing is competitive and transparent, tailored to the specific needs of each project. We offer various engagement models and can discuss options that fit your budget during a consultation.",
  },
  {
    question: "Will My Website Or App Work On All Devices?",
    answer:
      "Absolutely. All our web development and mobile app projects are built with responsiveness and cross-device compatibility in mind. We ensure that your digital solution looks and functions flawlessly on desktops, laptops, tablets, and various mobile phones.",
  },
  {
    question: "Do You Offer Support After The Project Is Done?",
    answer:
      "Yes, we offer comprehensive post-launch support and maintenance services to ensure your digital solutions continue to perform optimally. This includes bug fixes, updates, security patches, and ongoing technical assistance to keep your platform running smoothly.",
  },
  {
    question: "Can You Design My Brand Logo Too?",
    answer:
      "While our core expertise lies in software and digital solutions, we do offer design services, including brand identity and logo design, as part of a comprehensive project. We can discuss your branding needs during our initial consultation.",
  },
  {
    question: "I’m Not Tech-Savvy. Will I Understand What’s Happening?",
    answer:
      "Definitely! We pride ourselves on clear communication and keeping our clients informed at every stage of the project. We avoid jargon and explain everything in an easy-to-understand manner, ensuring you always know the progress and what to expect.",
  },
];

const stepsData = [
  {
    icon: FaEnvelope,
    title: "Contact Us",
    description:
      "Let's talk about your needs, ideas, goals, and objectives. This first discovery meeting will help us better understand your vision and propose a suitable, strategic solution",
  },
  {
    icon: FaFileAlt,
    title: "Analysis & Proposals",
    description:
      "After gathering your requirements, we conduct a thorough analysis and prepare tailored proposals that align with your goals and budget.",
  },
  {
    icon: FaLaptopCode,
    title: "Design & Develop",
    description:
      "Our team will create visually stunning designs and build functional solutions that meet your business objectives and user expectations.",
  },
  {
    icon: FaRocket,
    title: "Launch and follow-up",
    description:
      "We launch your project and provide continuous support to ensure smooth performance, updates, and improvements.",
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
