import React from "react";
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

const OveronsAccess = () => {
  return (
    <div className="bg-white py-16 text-center">
      <PageWrapper>
        {/* section -1 */}
        <div className="py-28">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold pb-10 text-black mb-16 leading-snug">
            Access Control And Identity <br /> Management Process
          </h2>

          {/* Card Grid with Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Horizontal line */}
            <div className="absolute top-[35px] left-1/2 -translate-x-1/2 w-[95%] h-[2px] bg-gray-200 z-0" />

            {/* Dots on line */}
            {[...Array(4)].map((_, idx) => (
              <div
                key={idx}
                className={`absolute top-[26px] left-[calc(12.5%+25%*${idx})] w-4 h-4 bg-white border-4 border-gray-300 rounded-full z-10`}
              ></div>
            ))}

            {/* Step Cards */}
            {steps.map((item, index) => (
              <div
                key={index}
                className="bg-[#F8FAFC] p-6 rounded-xl shadow-sm text-left relative z-20"
              >
                {/* Icon and Step Badge */}
                <div className="flex items-center mb-4 group hover:cursor-pointer">
                  {/* Animated pill icon */}
                  <div className="flex transform transition-all duration-500 group-hover:translate-x-2">
                    <div className="w-4 h-8 rounded-l-full bg-[#3F00F8]" />
                    <div className="w-4 h-8 rounded-r-full bg-[#A530F9]" />
                  </div>

                  {/* Step Badge with hover slide */}
                  <span className="ml-3 bg-white text-black text-sm font-semibold px-3 py-1 rounded-full shadow transform transition-all duration-500 group-hover:translate-x-2">
                    {item.step}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* section-2 */}
        <div
          className="bg-cover bg-center text-white p-8 rounded-lg shadow-lg max-w-7xl mx-auto my-12 flex flex-col lg:flex-row items-center lg:items-start"
          style={{ backgroundImage: "url('/images/Home.png')" }}
        >
          {/* Left Section: Text Content */}
          <div className="lg:w-[60%] px-0 lg:p-8 mb-8 lg:mb-0 text-start">
            <h2 className="text-4xl font-bold mb-4">Our Fronx Solutions</h2>
            <p className="text-lg mb-6">
              Empowering companies with smart digital solutions.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Fronx Solutions is here to help you grow in technology. Since
              then, we have expanded throughout Europe and now proudly operate
              in Belgium, where we bring our creativity, expertise, and passion
              for digital to even more ambitious brands.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We are much more than a technology company. We are a partner in
              digital growth. From eye-catching websites to scalable e-commerce
              platforms and engaging mobile apps – everything we create is
              designed to move your business forward... faster, smarter, and
              more efficiently.
            </p>
          </div>

          {/* Right Section: Image Display */}
          <div className="lg:w-[40%] flex justify-center items-center relative">
            <img
              src="/images/circle.png"
              className="w-[80%]"
              alt="Fronx Circle"
            />
          </div>
        </div>
        </PageWrapper>
        
        {/* section -3 */}
        <div className="">
            <div className="flex justify-center items-center py-16 px-4 bg-gray-100 min-h-screen font-sans">
            <div className="relative flex flex-col lg:flex-row items-stretch lg:ml-20 rounded-xl overflow-hidden max-w-6xl w-full">
                {/* Left Section: Image */}
                <div className="lg:w-[45%] w-full relative">
                <img
                    src="/images/mission.png"
                    alt="Collaboration"
                    className="w-full h-full object-cover lg:rounded-l-xl"
                    style={{ minHeight: "400px" }}
                />
                </div>

                {/* Right Section: Floating Card Content */}
                <div className="lg:w-[55%] w-full absolute left-[37%] flex justify-center items-center -top-5 p-6 lg:p-0">
                <div className="absolute top-16  text-start bg-opacity-80 backdrop-blur-3xl border border-white/30 rounded-2xl bg-white shadow-sm px-8 py-10 w-[90%] max-w-xl transition-all duration-300 z-10">
                    <h2 className="text-4xl font-bold text-gray-800 mb-2">
                    Our Mission
                    </h2>
                    <p className="text-lg text-gray-600 mb-4">
                    Helping you succeed in the digital world
                    </p>

                    {/* Opening Quote Icon */}
                    <svg
                    className="w-10 h-10 text-blue-500 mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path d="M9.998 12.19l-3.535 3.536-1.414-1.414L8.584 10.776 5.05 7.242 6.464 5.828l4.949 4.95zm4.47-4.47l-3.536 3.535 1.414 1.414 3.536-3.535 1.414 1.414L15.91 10.776l3.535 3.535 1.414-1.414-4.949-4.949z" />
                    </svg>

                    <p className="text-gray-700 leading-relaxed text-base mb-6">
                    Our mission is simple: to provide businesses with the tools
                    they need to stand out, stay competitive, and grow
                    sustainably. We help you stay focused on your grand vision
                    while we take care of the digital side.
                    </p>

                    {/* Closing Quote Icon */}
                    <div className="flex justify-end">
                    <svg
                        className="w-10 h-10 text-blue-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M14.002 12.19l3.535 3.536 1.414-1.414L15.416 10.776l3.535-3.534-1.414-1.414-4.949 4.95zm-4.47-4.47l3.536 3.535-1.414 1.414-3.536-3.535-1.414 1.414L8.09 10.776l-3.535 3.535-1.414-1.414 4.949-4.949z" />
                    </svg>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  );
};

export default OveronsAccess;
