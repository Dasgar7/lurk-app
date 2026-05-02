import React from 'react';

const CTA = () => {
  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-[#0c0d1b] to-[#1a1b2d] relative z-10">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 drop-shadow-xl animate-gradient-shift reveal-on-scroll" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
          Ready to join the Worterverse?
        </h2>
        <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto reveal-on-scroll" style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}>
          Sign up today and start connecting with millions of people, sharing your story, and discovering endless possibilities.
        </p>
        <button className="px-12 py-5 bg-gradient-to-r from-cyan-500 to-teal-600 text-white text-xl rounded-full font-bold button-glow shadow-2xl hover:shadow-cyan-400/50 transform hover:scale-110 transition duration-300 reveal-on-scroll" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
          Create Your Free Account
        </button>
      </div>
    </section>
  );
};

export default CTA;