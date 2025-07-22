import React, { useState } from "react";
import PageWrapper from "../../main/Pagewraper";
import { FaStar, FaQuoteRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion"; // <-- Import AnimatePresence

// Testimonial Data Array
const ALL_TESTIMONIALS = [
    {
        id: 1,
        quote: "Working with this team was a pleasure. They turned our vague ideas into a stunning visual identity, exceeding expectations. Their focus on detail and openness to feedback made the entire process smooth and satisfying. Their professionalism and creative approach truly stood out.",
        rating: 5,
        clientName: "Chris Noth",
        clientTitle: "Owner Taxfirm",
        clientAvatar: "/images/Ellipse 27.png",
    },
    {
        id: 2,
        quote: "An outstanding experience from start to finish. The development team delivered a high-quality product well ahead of schedule. Their communication was excellent, keeping us informed every step of the way. Highly recommend their services for anyone looking for reliable and efficient software development.",
        rating: 4,
        clientName: "Alice Smith",
        clientTitle: "CEO Tech Solutions",
        clientAvatar: "/images/Ellipse 24.png", // <--- IMPORTANT: Verify this path and file existence
    },
    {
        id: 3,
        quote: "We are thrilled with the results! The design team captured our vision perfectly and created an intuitive user interface that our customers love. They were responsive to feedback and iterated quickly. A truly talented group of professionals.",
        rating: 5,
        clientName: "Bob Johnson",
        clientTitle: "Product Manager Innovate Co.",
        clientAvatar: "/images/contact-2.png", // <--- IMPORTANT: Verify this path and file existence
    },
    {
        id: 4,
        quote: "Their expertise in digital marketing helped us significantly increase our online presence and lead generation. The strategies implemented were effective and measurable. We saw a considerable ROI, and their team was always proactive and insightful.",
        rating: 4,
        clientName: "Carol White",
        clientTitle: "Marketing Director Global Corp",
        clientAvatar: "/images/Ellipse 26.png", // <--- IMPORTANT: Verify this path and file existence
    },
];

// Static assets that do not change when a new testimonial is selected
const STATIC_MAIN_TEAM_IMAGE = "/images/testimonial.png";
const STATIC_COMPANY_LOGO = "/images/image.png";

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
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
    const currentTestimonial = ALL_TESTIMONIALS[currentTestimonialIndex];

    console.log("Current Testimonial Index:", currentTestimonialIndex);
    console.log("Current Testimonial Data:", currentTestimonial);

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
                    {/* Left: Team Image (Stays the same) */}
                    <motion.div
                        variants={itemVariants}
                        className="w-full lg:w-1/3 flex justify-center lg:justify-end"
                    >
                        <img
                            src={STATIC_MAIN_TEAM_IMAGE}
                            alt="Client Team"
                            className="w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto rounded-lg shadow-xl"
                        />
                    </motion.div>

                    {/* Middle: Testimonial Card (Dynamically updates) */}
                    {/* AnimatePresence is crucial here to manage components entering/exiting with key changes */}
                    <AnimatePresence mode="wait"> {/* mode="wait" ensures old component exits before new enters */}
                        <motion.div
                            key={currentTestimonial.id} // This key is essential for AnimatePresence
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="w-full lg:w-1/2 flex-shrink-0 relative"
                        >
                            <FaQuoteRight className="absolute top-5 right-5 text-orange-400 text-3xl opacity-70" />
                            <div /* Removed motion.div from here, parent motion.div handles the animation */
                                className="bg-gray-100 p-6 sm:p-8 rounded-lg shadow-sm"
                            >
                                {/* Star Rating */}
                                <div className="flex gap-1 mb-4">
                                    {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                                        <FaStar key={i} className="text-orange-400 w-4 h-4" />
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="text-gray-700 mb-6 italic text-base sm:text-lg leading-relaxed">
                                    "{currentTestimonial.quote}"
                                </p>

                                {/* Client Info */}
                                <div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4">
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={currentTestimonial.clientAvatar}
                                            alt={currentTestimonial.clientName}
                                            className="w-14 h-14 rounded-full object-cover border-2 border-orange-400"
                                        />
                                        <div>
                                            <p className="font-bold text-gray-800 text-lg">
                                                {currentTestimonial.clientName}
                                            </p>
                                            <p className="text-gray-500 text-sm">
                                                {currentTestimonial.clientTitle}
                                            </p>
                                        </div>
                                    </div>

                                    {STATIC_COMPANY_LOGO && (
                                        <img
                                            src={STATIC_COMPANY_LOGO}
                                            alt="Company Logo"
                                            className="h-10 object-contain"
                                        />
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Right: Client Avatars (Clickable to change main testimonial) */}
                    <motion.div
                        variants={itemVariants}
                        className="w-full lg:w-1/12 flex justify-center lg:flex-col gap-10 flex-wrap lg:items-center pt-4"
                    >
                        {ALL_TESTIMONIALS.map((testimonial, index) => (
                            <motion.img
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                                key={testimonial.id}
                                src={testimonial.clientAvatar}
                                alt={`Client Avatar ${testimonial.clientName}`}
                                onClick={() => {
                                    console.log("Clicked avatar at index:", index);
                                    setCurrentTestimonialIndex(index);
                                }}
                                className={`
                                    w-12 h-12 rounded-full object-cover shadow-md cursor-pointer
                                    ${currentTestimonialIndex === index
                                        ? 'border-2 border-orange-500 ring-2 ring-orange-300'
                                        : 'border-2 border-gray-200'
                                    }
                                    transition-all duration-300 ease-in-out
                                `}
                            />
                        ))}
                    </motion.div>
                </div>
            </PageWrapper>
        </motion.section>
    );
};

export default Testimonials;