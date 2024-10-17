// components/Navbar.tsx
import React from 'react';
import { FaShoppingCart, FaUser, FaBars } from 'react-icons/fa'; // Icons for cart and user

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left - Logo */}
        <div className="flex items-center space-x-3">
          <FaBars className="text-blue-500 text-2xl cursor-pointer" />
          <h1 className="text-2xl font-bold text-blue-500">MegaMart</h1>
        </div>

        {/* Middle - Search Bar */}
        <div className="flex-grow mx-10">
          <div className="relative">
            <input
              type="text"
              placeholder="Search essentials, groceries and more..."
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Right - Sign Up, Cart */}
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <FaUser className="text-gray-500" />
            <a href="#" className="text-gray-700 font-medium">Sign Up</a>
          </div>
          <FaShoppingCart className="text-gray-500 text-2xl cursor-pointer" />
        </div>
      </div>

      {/* Bottom - Category Links */}
      <div className="container mx-auto mt-7 flex justify-between">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-full">Groceries</button>
        <button className="px-4 py-2 text-gray-700 rounded-full hover:bg-gray-200">Premium Fruits</button>
        <button className="px-4 py-2 text-gray-700 rounded-full hover:bg-gray-200">Home & Kitchen</button>
        <button className="px-4 py-2 text-gray-700 rounded-full hover:bg-gray-200">Fashion</button>
        <button className="px-4 py-2 text-gray-700 rounded-full hover:bg-gray-200">Electronics</button>
        <button className="px-4 py-2 text-gray-700 rounded-full hover:bg-gray-200">Beauty</button>
        <button className="px-4 py-2 text-gray-700 rounded-full hover:bg-gray-200">Home Improvement</button>
        <button className="px-4 py-2 text-gray-700 rounded-full hover:bg-gray-200">Sports & Toys</button>
      </div>
    </nav>
  );
};

export default Navbar;
