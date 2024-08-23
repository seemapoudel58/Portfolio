import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="flex flex-col items-center py-6 bg-gray-50">
      <h1 className="text-3xl font-semibold mb-[3rem]">Seema</h1>
      
      <div className="flex space-x-8 mb-8">
        <a href="#1" className="text-lg">About</a>
        <a href="#2" className="text-lg">Skills</a>
        <a href="#3" className="text-lg">Qualification</a>
      </div>
      
      <div className="flex space-x-8">
        <a href="https://github.com" aria-label="GitHub" className="text-gray-600 hover:text-black">
          <FaGithub size={24} />
        </a>
        <a href="https://linkedin.com" aria-label="LinkedIn" className="text-gray-600 hover:text-black">
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
