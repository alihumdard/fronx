import React from 'react';

// Testimonial Card Component
const SwiperService = ({ testimonial }) => {
  return (
    <div className="max-w-6xl w-full mx-auto p-4 md:p-8">
      <div className="bg-white rounded-3xl shadow-lg p-6 md:p-10 flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-10 relative">

        {/* Small SA icon at the top right of the card */}
        <div className="absolute top-6 right-6 flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full shadow-md z-10">
          <span className="text-white font-bold text-lg">S</span>
          <span className="text-pink-500 font-bold text-lg -ml-1">A</span>
        </div>

        {/* Left Section (Text Content) */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
            Success Stories from Our Clients
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
            I am incredibly pleased with the website developed by{" "}
            <span className="text-blue-600 font-semibold">Fronx Solution</span>.
            It perfectly captures our brand identity and has significantly
            improved our online presence. The team was professional, attentive,
            and ensured every detail was just right. Since launching the site,
            we've seen a noticeable increase in customer engagement and
            inquiries. I highly recommend Fronx Solution to anyone looking for
            top-notch website development services.
          </p>
          <p className="text-gray-800 text-xl font-semibold mb-1">
            {testimonial.author || "John Doe"}
          </p>
          <p className="text-gray-500 text-sm md:text-base">
            Founder & CEO of xyz.com
          </p>

          {/* Pagination-like indicator */}
          <div className="flex justify-center lg:justify-start mt-8">
            <span className="w-8 h-1.5 bg-orange-500 rounded-full mr-2"></span>
            <span className="w-8 h-1.5 bg-gray-200 rounded-full"></span>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="w-full lg:w-96 flex-shrink-0 flex justify-center items-center relative">
          <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-xl">
            <img
              src={
                testimonial.imageUrl ||
                "https://placehold.co/400x400/FF0000/FFFFFF?text=Client+Image"
              }
              alt={
                testimonial.author
                  ? `${testimonial.author} testimonial image`
                  : "Client Testimonial Image"
              }
              className="w-full h-full object-cover"
            />
            {/* Small SA icon on the image */}
            <div className="absolute top-4 left-4 flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full shadow-md">
              <span className="text-white font-bold text-lg">S</span>
              <span className="text-pink-500 font-bold text-lg -ml-1">A</span>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute bottom-10 right-10 flex space-x-4">
          {/* Previous Button */}
          <button className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center shadow-md hover:bg-gray-300 transition-colors">
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              ></path>
            </svg>
          </button>
          {/* Next Button */}
          <button className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center shadow-md hover:bg-purple-700 transition-colors">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SwiperService;