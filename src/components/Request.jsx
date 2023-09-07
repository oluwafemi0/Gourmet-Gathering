import React from 'react';

const RequestSection = () => {
  return (
    <div className="bg-[#FFF5E1]  py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-4">
          
          <img
            src="https://images.unsplash.com/photo-1601740982034-56bc80e986ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGNoZWZ8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=500&q=60"
            alt="Left Image"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-semibold mx-auto mb-4">Request a Quote</h2>
          
          <form className="w-full max-w-lg">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Your Name
              </label>
              <input
                type="text"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="flex items-center justify-end">
              <button
                className="bg-[#800020] hover:bg-[#800020] mx-auto  text-white font-bold py-2 px-32 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="md:w-1/2 p-4">
          <img
            src="https://images.unsplash.com/photo-1492739159057-7d1896b3c63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGNoZWZ8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=500&q=60"
            alt="Right Image"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default RequestSection;
