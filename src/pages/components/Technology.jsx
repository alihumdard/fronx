import React from "react";
import { FaMobileAlt, FaShoppingCart, FaUsers } from "react-icons/fa";
import { HiOutlineComputerDesktop } from "react-icons/hi2"; // ✅ Correct icon

const StatBox = ({ number, label, icon, highlight }) => (
  <div className="text-center text-white">
    <div className="flex justify-center items-center gap-2 text-3xl font-bold">
      {number} <span className="text-[#FF9B4B]">{icon}</span>
    </div>
    <p
      className={`mt-1 ${
        highlight ? "text-orange-400 font-semibold" : "text-gray-300"
      }`}
    >
      {label}
    </p>
  </div>
);

const ProgressBar = ({ label, percent }) => (
  <div className="mb-4">
    <div className="flex justify-between text-white text-sm mb-1">
      <span>{label}</span>
      <span>{percent}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
      <div
        className="bg-orange-400 h-full rounded-full"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  </div>
);

const TechnologyStats = () => {
  return (
    <section className="bg-gradient-to-r from-black via-gray-900 to-[#1a1a1a] py-20 px-6">
      <div className="max-w-7xl mx-auto gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-white text-4xl font-bold leading-tight mb-4">
            We Help Businesses Grow With Successes in Technology.
          </h2>
          <p className="text-gray-300 mb-8">
            At Fronx Solutions, we are committed to creating solutions that
            truly make a difference for our clients. Our tailor-made services
            help businesses work smarter and uncover new growth opportunities.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 border-b border-gray-400 pb-5">
            <StatBox number="50" label="Web Projects" />
            <StatBox number="100+" label="Mobile App Developed" highlight />
            <StatBox number="50" label="E-Commerce Project" />
            <StatBox number="95%" label="Clients hire us again" />
          </div>
        </div>

        {/* Right Image */}
        <div className="flex gap-28 pt-20">
          <div className="w-1/2">
            <ProgressBar label="Business Security" percent={86} />
            <ProgressBar label="Career Development" percent={76} />
            <ProgressBar label="Business Innovation" percent={96} />
            <ProgressBar label="Business Development" percent={99} />
          </div>
          <div className="w-1/2">
            <img
              src="/images/mendesk.png" // Replace with actual image path
              alt="Developer Working"
              className="rounded-xl shadow-2xl w-[80%] h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStats;
