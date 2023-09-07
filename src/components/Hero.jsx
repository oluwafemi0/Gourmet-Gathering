// src/components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <div
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1543353071-10c8ba85a904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')` }}
    >
      <nav className=" bg-[#800020] text-white py-4 absolute w-full top-0">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-[#FFD700]">Gourmet Gatherings</h1>
          <ul className="flex space-x-6">
            <li>Home</li>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>

      <div className="container mx-auto h-full flex items-center">
        <div className="text-center text-white">
          <h2 className="text-4xl font-semibold">Delicious Dishes</h2>
          <p className="text-lg mt-4">Explore our gourmet creations</p>
          <button className="bg-red-500 text-white py-2 px-4 mt-6 rounded-lg hover:bg-red-600 transition duration-300">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
