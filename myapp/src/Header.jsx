import React from 'react';

const Header = () => {
  return (
<>
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


    <div className="bg-white shadow-md">
      <div className="container flex justify-between px-4">
        <h1 className='text-center font-bold font-serif text-blue-700 text-2xl'>ShopNepal</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="/" className='text-gray-700 hover:text-blue-600'>Home</a>
          <a href="/shop" className='text-gray-700 hover:text-blue-600'>Shop</a>
          <a href="about" className='text-gray-700 hover:text-blue-600'>About</a>
          <a href="contact" className='text-gray-700 hover:text-blue-600'>Contact</a>
        </nav>
        <div className="flex justify-center space-x-4">
          <button className='hover:text-blue-500 transform transition-transform from-red-500 to-blue-600 ms-4'>Cart</button>
          <button className='text-white bg-blue-700 rounded-md hover:bg-blue-500 px-4 py-2'>Login</button>
        </div>
      </div>
    </div>

    </>


  );
};

export default Header;
