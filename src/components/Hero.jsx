import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center hero-parallax" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?category=technology&random=1')", filter: "blur(5px) brightness(0.6)", transform: "scale(1.1)" }}></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f1020]/80 via-[#1e1f33]/70 to-[#0f1020]/80 animate-gradient-shift"></div>

      <div className="relative z-10 p-8 max-w-4xl mx-auto backdrop-blur-sm bg-black/20 rounded-xl border border-white/10 shadow-2xl animate-fadeInMoveUp" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
        <h1 className="text-6xl font-extrabold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-500">
          Connect, Create, Converse <br /><span className="text-cyan-200">on Worter.</span>
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Worter is more than just a social platform. It's a vibrant ecosystem for sharing ideas, fostering communities, and discovering new worlds.
        </p>
        <button className="px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-lg rounded-full font-bold button-glow shadow-xl hover:shadow-purple-500/50 transform hover:scale-105 transition duration-300">
          Start Your Worter Journey
        </button>
      </div>
    </section>
  );
};

export default Hero;