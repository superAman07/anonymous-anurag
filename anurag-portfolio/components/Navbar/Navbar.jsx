import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-10 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-5">
        <a className="text-2xl font-bold" href="#home">Anonymous Anurag</a>
        <ul className="hidden md:flex space-x-6">
          <li><a href="#home" className="hover:text-gray-500">Home</a></li>
          <li><a href="#projects" className="hover:text-gray-500">Projects</a></li>
          <li><a href="#about" className="hover:text-gray-500">About</a></li>
          <li><a href="#testmonial" className="hover:text-gray-500">Testimonial</a></li>
          <li><a href="#hire" className="hover:text-gray-500">Hire</a></li>
          <li><a href="#contact" className="hover:text-gray-500">Contact</a></li>
        </ul>
        <div className="md:hidden">
          <button id="nav-toggle" className="hamburger">
            {/* Add hamburger icon */}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
