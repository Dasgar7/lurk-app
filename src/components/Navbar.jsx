import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6 bg-gradient-to-r from-[#0f1020]/80 to-[#1e1f33]/80 backdrop-blur-lg shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-600 animate-gradient-shift">Worter</div>
        <ul className="flex space-x-8">
          <li><a href="#hero" className="text-white hover:text-cyan-300 nav-link-hover transition duration-300">Home</a></li>
          <li><a href="#features" className="text-white hover:text-cyan-300 nav-link-hover transition duration-300">Features</a></li>
          <li><a href="#gallery" className="text-white hover:text-cyan-300 nav-link-hover transition duration-300">Community</a></li>
          <li><a href="#stats" className="text-white hover:text-cyan-300 nav-link-hover transition duration-300">Impact</a></li>
          <li><a href="#cta" className="text-white hover:text-cyan-300 nav-link-hover transition duration-300">Join</a></li>
        </ul>
        <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold button-glow shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105 transition duration-300">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;