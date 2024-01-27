// Navbar.js
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or site name */}
        <Link to="/" className="text-white text-lg font-semibold">YourLogo</Link>

        {/* Navigation links */}
        <ul className="flex space-x-4 sm:space-x-8">
          <li><Link to="/" className="text-white hover:text-gray-300">Home</Link></li>
          <li><Link to="/dashboard" className="text-white hover:text-gray-300">About</Link></li>
          <li><Link to="/signin" className="text-white hover:text-gray-300">Sign In</Link></li>
          <li><Link to="/signup" className="text-white hover:text-gray-300">Sign Up</Link></li>
          <li><Link to="/about" className="text-white hover:text-gray-300">About</Link></li>

        </ul>
      </div>
    </nav>
  )
  // State to manage the navbar's visibility

  
};

export default Navbar;
