import React, { useState } from "react";
import { motion } from "framer-motion"; // ✅ Framer Motion
import PageWrapper from "../../main/Pagewraper";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import URLS from "../../config/urls.config";

const ALL_PROJECTS = [
  {
    id: 1,
    image: "/images/blog-1.png",
    date: "10 July 2024",
    title: "Innovative AI Solution for Data Analytics",
    description:
      "Developed a cutting-edge AI platform to process large datasets, providing actionable insights for businesses.",
  },
  {
    id: 2,
    image: "/images/blog-2.png",
    date: "25 June 2024",
    title: "E-commerce Platform with Custom Integrations",
    description:
      "Built a robust e-commerce site featuring secure payment gateways and seamless CRM integration.",
  },
  {
    id: 3,
    image: "/images/blog-3.png",
    date: "15 May 2024",
    title: "Mobile App for Fitness Tracking & Coaching",
    description:
      "Designed and developed an intuitive mobile application for iOS and Android, focusing on user engagement.",
  },
  {
    id: 4,
    image: "/images/blog-1.png",
    date: "01 April 2024",
    title: "Scalable Cloud Infrastructure Deployment",
    description:
      "Implemented a highly scalable and secure cloud infrastructure to support growing enterprise needs.",
  },
  {
    id: 5,
    image: "/images/blog-2.png",
    date: "20 March 2024",
    title: "Real-time Analytics Dashboard Development",
    description:
      "Created an interactive dashboard for real-time data visualization, empowering quick decision-making.",
  },
  {
    id: 6,
    image: "/images/blog-3.png",
    date: "05 February 2024",
    title: "Custom CRM System for Sales Automation",
    description:
      "Developed a bespoke CRM solution to automate sales processes and improve customer relationship management.",
  },
  {
    id: 7,
    image: "/images/blog-1.png",
    date: "12 January 2024",
    title: "Blockchain-based Supply Chain Management",
    description:
      "Implemented a transparent and secure blockchain solution for enhanced supply chain traceability.",
  },
  {
    id: 8,
    image: "/images/blog-2.png",
    date: "30 December 2023",
    title: "AI-Powered Chatbot for Customer Support",
    description:
      "Deployed an intelligent chatbot capable of handling customer queries and providing instant support.",
  },
  {
    id: 9,
    image: "/images/blog-3.png",
    date: "18 November 2023",
    title: "Interactive Web Portal for Educational Content",
    description:
      "Designed and built a user-friendly web portal for delivering interactive educational modules.",
  },
  {
    id: 10,
    image: "https://placehold.co/600x400/505050/CCCCCC?text=Project+Kappa",
    date: "05 November 2023",
    title: "IoT Integration for Smart Home Automation",
    description:
      "Developed software to integrate various IoT devices for seamless smart home automation and control.",
  },
  {
    id: 11,
    image: "https://placehold.co/600x400/404040/DDDDDD?text=Project+Lambda",
    date: "22 October 2023",
    title: "Big Data Processing Pipeline Optimization",
    description:
      "Optimized existing big data pipelines to improve processing speed and efficiency for large data volumes.",
  },
  {
    id: 12,
    image: "https://placehold.co/600x400/303030/EEEEEE?text=Project+Mu",
    date: "09 October 2023",
    title: "Custom ERP System for Manufacturing",
    description:
      "Created an enterprise resource planning system tailored to the specific needs of a manufacturing company.",
  },
  {
    id: 13,
    image: "https://placehold.co/600x400/202020/FFFFFF?text=Project+Nu",
    date: "28 September 2023",
    title: "AI-Driven Predictive Maintenance Software",
    description:
      "Developed software that uses AI to predict equipment failures, reducing downtime and maintenance costs.",
  },
  {
    id: 14,
    image: "https://placehold.co/600x400/101010/FFFFFF?text=Project+Xi",
    date: "15 September 2023",
    title: "Secure Document Management System",
    description:
      "Built a secure system for managing and sharing confidential documents with robust access controls.",
  },
  {
    id: 15,
    image: "https://placehold.co/600x400/000000/FFFFFF?text=Project+Omicron",
    date: "01 September 2023",
    title: "Cross-Platform Gaming Application",
    description:
      "Developed an engaging game application compatible with multiple operating systems and devices.",
  },
  {
    id: 16,
    image: "https://placehold.co/600x400/F0F0F0/111111?text=Project+Pi",
    date: "18 August 2023",
    title: "Automated Marketing Campaign Software",
    description:
      "Created software to automate email marketing, social media posting, and ad campaign management.",
  },
  {
    id: 17,
    image: "https://placehold.co/600x400/E0E0E0/222222?text=Project+Rho",
    date: "05 August 2023",
    title: "Virtual Reality Training Simulator",
    description:
      "Developed an immersive VR application for realistic training simulations in various industries.",
  },
  {
    id: 18,
    image: "https://placehold.co/600x400/D0D0D0/333333?text=Project+Sigma",
    date: "23 July 2023",
    title: "Custom HR Management System",
    description:
      "Built a comprehensive HR system to streamline employee management, payroll, and recruitment processes.",
  },
  {
    id: 19,
    image: "https://placehold.co/600x400/C0C0C0/444444?text=Project+Tau",
    date: "10 July 2023",
    title: "Geospatial Data Visualization Tool",
    description:
      "Developed a tool for visualizing and analyzing geospatial data on interactive maps.",
  },
  {
    id: 20,
    image: "https://placehold.co/600x400/B0B0B0/555555?text=Project+Upsilon",
    date: "27 June 2023",
    title: "AI-Powered Fraud Detection System",
    description:
      "Implemented an AI-driven system to detect and prevent fraudulent activities in financial transactions.",
  },
  {
    id: 21,
    image: "https://placehold.co/600x400/A0A0A0/666666?text=Project+Phi",
    date: "14 June 2023",
    title: "Custom Booking and Reservation System",
    description:
      "Created a flexible booking system for various services, including scheduling and payment processing.",
  },
  {
    id: 22,
    image: "https://placehold.co/600x400/909090/777777?text=Project+Chi",
    date: "01 June 2023",
    title: "Voice-Activated Smart Assistant",
    description:
      "Developed a voice-controlled smart assistant for personal and business productivity.",
  },
  {
    id: 23,
    image: "https://placehold.co/600x400/808080/888888?text=Project+Psi",
    date: "18 May 2023",
    title: "Augmented Reality Product Viewer",
    description:
      "Built an AR application allowing users to visualize products in their environment before purchase.",
  },
  {
    id: 24,
    image: "https://placehold.co/600x400/707070/999999?text=Project+Omega",
    date: "05 May 2023",
    title: "Data Migration and Legacy System Modernization",
    description:
      "Successfully migrated data from old systems and modernized legacy applications for improved performance.",
  },
];

const PROJECTS_PER_PAGE = 9;

const ProjectGridSection = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(ALL_PROJECTS.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const endIndex = startIndex + PROJECTS_PER_PAGE;
  const currentProjects = ALL_PROJECTS.slice(startIndex, endIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageButtons = 5;
    const ellipsis = "...";

    if (totalPages <= maxPageButtons) {
      for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);
    } else {
      pageNumbers.push(1);
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);

      if (startPage > 2) pageNumbers.push(ellipsis);
      for (let i = startPage; i <= endPage; i++) pageNumbers.push(i);
      if (endPage < totalPages - 1) pageNumbers.push(ellipsis);
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white py-16 md:py-24"
    >
      <PageWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative"
            >
              {/* Main Card Container with Rounded Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-white rounded-2xl overflow-hidden shadow-md mb-20 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transform transition-transform duration-500 ease-in-out hover:scale-105"
                  />
                </div>
              </motion.div>


              {/* Floating Info Box */}
              <div className="absolute left-4 right-4 bottom-20 translate-y-1/2 bg-white rounded-xl shadow-lg px-4 py-6 flex flex-col gap-2">
                {/* Date */}
                <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                  <FaCalendarAlt className="w-4 h-4" />
                  <span>{project.date}</span>
                </div>

                {/* Title */}
                <p className="text-gray-800 font-semibold text-xl leading-tight">
                  {project.title}
                </p>

                {/* Arrow Icon Button */}
                <Link
                  to={URLS.BlogDetail}
                  className="absolute -top-3 -right-3 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-md transition"
                >
                  <FaArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center items-center space-x-2 mt-7"
        >
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white disabled:bg-gray-300 disabled:text-gray-500 hover:bg-blue-700 transition-colors focus:outline-none"
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          {renderPageNumbers().map((number, index) => (
            <React.Fragment key={index}>
              {number === "..." ? (
                <span className="text-gray-500 text-lg px-2">...</span>
              ) : (
                <button
                  onClick={() => paginate(number)}
                  className={`w-10 h-10 flex items-center justify-center rounded-full text-lg font-semibold ${currentPage === number
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                    } transition-colors focus:outline-none`}
                >
                  {number}
                </button>
              )}
            </React.Fragment>
          ))}

          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white disabled:bg-gray-300 disabled:text-gray-500 hover:bg-blue-700 transition-colors focus:outline-none"
          >
            <i className="fas fa-chevron-right"></i>
          </button>

        </motion.div>
      </PageWrapper>
    </motion.section>
  );
};

export default ProjectGridSection;
