import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          <span className="text-sm">
            &copy; {new Date().getFullYear()} ShopNepal. All rights reserved.
          </span>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
        <div className="mt-4 text-center text-sm">
          Made with ❤️ in Nepal
        </div>
      </div>
    </footer>
  );
};

export default Footer;
