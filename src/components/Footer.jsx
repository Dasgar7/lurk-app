import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0f1020] to-[#1e1f33] text-gray-400 py-12 relative z-10 shadow-inner">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <div className="col-span-1">
          <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-600">Worter</h3>
          <p className="text-gray-400">Connecting Worlds, One Worter at a Time.</p>
          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-gray-400 hover:text-cyan-300 transition duration-300"><i className="fab fa-facebook-f text-xl"></i></a>
            <a href="#" className="text-gray-400 hover:text-cyan-300 transition duration-300"><i className="fab fa-twitter text-xl"></i></a>
            <a href="#" className="text-gray-400 hover:text-cyan-300 transition duration-300"><i className="fab fa-instagram text-xl"></i></a>
            <a href="#" className="text-gray-400 hover:text-cyan-300 transition duration-300"><i className="fab fa-linkedin-in text-xl"></i></a>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#hero" className="hover:text-cyan-300 transition duration-300">Home</a></li>
            <li><a href="#features" className="hover:text-cyan-300 transition duration-300">Features</a></li>
            <li><a href="#gallery" className="hover:text-cyan-300 transition duration-300">Community</a></li>
            <li><a href="#stats" className="hover:text-cyan-300 transition duration-300">Our Impact</a></li>
            <li><a href="#cta" className="hover:text-cyan-300 transition duration-300">Join Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4 text-white">Support</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-cyan-300 transition duration-300">Help Center</a></li>
            <li><a href="#" className="hover:text-cyan-300 transition duration-300">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-cyan-300 transition duration-300">Terms of Service</a></li>
            <li><a href="#" className="hover:text-cyan-300 transition duration-300">Contact Us</a></li>
          </ul>
        </div>

        <div className="lg:col-span-1">
          <h4 className="text-xl font-semibold mb-4 text-white">Subscribe to Newsletter</h4>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email address"
              className="p-3 rounded-l-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 flex-grow text-white"
            />
            <button type="submit" className="px-5 py-3 bg-gradient-to-r from-purple-600 to-indigo-700 text-white rounded-r-lg font-semibold button-glow hover:shadow-purple-500/50 transition duration-300">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="container mx-auto px-6 text-center mt-12 border-t border-gray-700 pt-8">
        <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Worter. All rights reserved. Designed with passion for connection.</p>
      </div>
    </footer>
  );
};

export default Footer;