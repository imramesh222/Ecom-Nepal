import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="/" className="text-2xl font-bold text-blue-600">ShopNepal</a>
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-800 hover:text-blue-500">Home</a>
            <a href="/shop" className="text-gray-800 hover:text-blue-500">Shop</a>
            <a href="/about" className="text-gray-800 hover:text-blue-500">About</a>
            <a href="/contact" className="text-gray-800 hover:text-blue-500">Contact</a>
          </nav>
          <div className="flex items-center space-x-4">
            <a href="/cart" className="text-gray-800 hover:text-blue-500">Cart</a>
            <a href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Login</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
