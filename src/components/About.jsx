import React from 'react';

const AboutSection = () => {
  return (
    <div className="bg-[#FFF5E1] py-12">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
        <div className="md:w-1/2 p-4">
          <img
            src="https://images.unsplash.com/photo-1550950158-d0d960dff51b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
            alt="About Us"
            className="rounded-lg w-[840px] h-[600px] shadow-lg"
          />
        </div>
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-semibold mb-4">About Us</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
            sagittis erat, non hendrerit risus. Nulla facilisi. Vivamus ac
            tincidunt est. Quisque bibendum augue non est tristique, ut luctus
            libero scelerisque. Donec eu mi sit amet arcu sodales auctor ut sit
            amet ex. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
            sagittis erat, non hendrerit risus. Nulla facilisi. Vivamus ac
            tincidunt est. Quisque bibendum augue non est tristique, ut luctus
            libero scelerisque. Donec eu mi sit amet arcu sodales auctor ut sit
            amet ex. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
            sagittis erat, non hendrerit risus. Nulla facilisi. Vivamus ac
            tincidunt est. Quisque bibendum augue non est tristique, ut luctus
            libero scelerisque. Donec eu mi sit amet arcu sodales auctor ut sit
            amet ex.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
