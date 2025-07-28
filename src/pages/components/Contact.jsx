import React from 'react';
import PageWrapper from '../../main/Pagewraper';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ContactForm = () => {
  return (
    <section
      className="relative py-16 md:py-24 text-white"
      style={{
        backgroundImage: 'url(/images/bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#1a1a1a',
      }}
    >
      <div className="absolute inset-0 opacity-80 bg-black"></div>

      <PageWrapper>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info Column */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Let's start a project together!
            </h2>
            <p className="text-lg text-gray-300 mb-10 max-w-md">
              To dominate the e-commerce market, you need ambition and growth opportunities. We help our clients achieve real business results.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="bg-white bg-opacity-5 p-6 rounded-xl flex items-center gap-4 border border-gray-700">
                <div className="p-3 rounded-full text-orange-400">
                  <FaEnvelope className="w-6 h-6" />
                </div>
                <div className='border-l-2 pl-5 border-gray-400'>
                  <p className="text-sm text-orange-300">Email</p>
                  <p className="text-lg">info@fronxsolutions.be</p>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white bg-opacity-5 pl-5 p-6 rounded-xl flex items-center gap-4 border border-gray-700">
                <div className="p-3 rounded-full text-orange-400">
                  <FaPhoneAlt className="w-6 h-6" />
                </div>
                <div className='border-l-2 border-gray-400 pl-5'>
                  <p className="text-sm text-orange-300">Phone</p>
                  <p className="font-semibold text-lg">
                    +32477277312</p>
                </div>
              </div>

              {/* Address */}
              <div className="bg-white bg-opacity-5 p-6 rounded-center flex gap-4 border border-gray-700">
                <div className="p-3 rounded-full text-orange-400">
                  <FaMapMarkerAlt className="w-6 h-6" />
                </div>
                <div className='border-l-2 border-gray-400 pl-5'>
                  <p className="text-sm text-orange-300">Address</p>
                  <p className="font-semibold text-lg">Rue d'Alost 7/11 1000, Brussels</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-white bg-opacity-5 p-8 md:p-10 rounded-xl shadow-lg border border-gray-700">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { id: "firstName", placeholder: "First Name" },
                { id: "lastName", placeholder: "Last Name" },
                { id: "email", placeholder: "Email", type: "email" },
                { id: "mobileNumber", placeholder: "Mobile Number", type: "tel" },
                { id: "currentWebsite", placeholder: "Current Website?", colSpan: true },
                { id: "iWouldLike", placeholder: "I Would Like...", colSpan: true },
              ].map(({ id, placeholder, type = "text", colSpan }) => (
                <div key={id} className={`${colSpan ? "sm:col-span-2" : ""}`}>
                  <label htmlFor={id} className="sr-only">{placeholder}</label>
                  <input
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    className="w-full px-5 py-3 bg-white bg-opacity-5 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:ring-[#6931CF] focus:border-[#6931CF] outline-none transition-all"
                  />
                </div>
              ))}

              {/* Textarea */}
              <div className="sm:col-span-2">
                <label htmlFor="yourMessage" className="sr-only">Your Message</label>
                <textarea
                  id="yourMessage"
                  rows="5"
                  placeholder="Your Message"
                  className="w-full px-5 py-3 bg-white bg-opacity-5 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:ring-[#6931CF] focus:border-[#6931CF] outline-none transition-all resize-y"
                ></textarea>
              </div>

              {/* Submit */}
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#6931CF] to-[#1A61EA] text-white px-8 py-3 rounded-md font-semibold text-lg shadow-md hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6931CF]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </PageWrapper>
    </section>
  );
};

export default ContactForm;
