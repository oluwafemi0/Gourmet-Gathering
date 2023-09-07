// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#800020] text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-2xl  text-[#FFD700] font-semibold">Gourmet Gatherings</h3>
          <p className="text-white">Deliciousness Awaits!</p>
        </div>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-white hover:text-white transition duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white hover:text-white transition duration-300"
          >
            Menu
          </a>
          <a
            href="#"
            className="text-white hover:text-white transition duration-300"
          >
            About
          </a>
          <a
            href="#"
            className="text-white hover:text-white transition duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
