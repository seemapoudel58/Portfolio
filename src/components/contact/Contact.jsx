import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

const ContactCard = () => {
  return (
    <section className="flex flex-col items-center justify-center py-16" id="4">
      <h2 className="text-3xl font-semibold mb-2">Let's Connect</h2>
      <span className="text-gray-500 mb-8">Contact Me</span>

      <div className="lg:flex-row lg;gap-[2rem]">
        <div className="bg-gray-50 border border-gray-300 shadow-md rounded-lg p-6 w-full max-w-[17rem] mb-[3rem] ">
          <div className="flex flex-col items-center">
            <FaEnvelope className=" mb-2" size={24} />
            <h3 className="text-lg font-medium mb-1">Email</h3>
            <p className="text-gray-700 mb-4">simapoudel6@gmail.com</p>
          </div>
        </div>
        <div className="bg-gray-50 border border-gray-300 shadow-md rounded-lg p-6 w-full max-w-[17rem] mb-[3rem]">
          <div className="flex flex-col items-center">
            <FaPhone className=" mb-2" size={24} />
            <h3 className="text-lg font-medium mb-1">Phone</h3>
            <p className="text-gray-700 mb-4">+977 9847433721</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCard;
