// Navbar.js
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {

  const [navbarOpen, setNavbarOpen] = useState(false);
  

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-semibold">Task Manager</Link>

        <ul className="flex space-x-4 sm:space-x-8">
          <li><Link to="/" className="text-white hover:text-gray-300">Home</Link></li>
          <li><Link to="/dashboard" className="text-white hover:text-gray-300">Dashboard</Link></li>
          <li><Link to="/login" className="text-white hover:text-gray-300">Log In</Link></li>
          
        </ul>
      </div>
    </nav>
  )
  // State to manage the navbar's visibility

  
};

export default Navbar;
