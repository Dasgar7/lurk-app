import React, { useEffect } from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="glass-card p-8 rounded-2xl text-center hover:border-cyan-400 transform hover:shadow-cyan-500/30 reveal-on-scroll">
      <div className="text-5xl mb-6 text-cyan-400 drop-shadow-lg">{icon}</div>
      <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const Features = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(el => observer.observe(el));
  }, []);

  const featuresData = [
    {
      icon: "💬",
      title: "Real-time Conversations",
      description: "Engage in seamless, instant chats and group discussions with crystal-clear voice and video capabilities."
    },
    {
      icon: "✨",
      title: "Personalized Feeds",
      description: "Discover content tailored to your interests. Our AI-powered feed keeps you updated with what matters most."
    },
    {
      icon: "🎨",
      title: "Creative Expression",
      description: "Share your art, stories, and ideas with a global audience. Tools for photo editing, video creation, and more."
    },
    {
      icon: "🌐",
      title: "Global Communities",
      description: "Join or create communities centered around your passions. Connect with like-minded individuals worldwide."
    },
    {
      icon: "🔒",
      title: "Enhanced Privacy",
      description: "Your data, your control. Worter prioritizes user privacy with end-to-end encryption and robust security."
    },
    {
      icon: "🚀",
      title: "Future-ready Platform",
      description: "Constantly evolving with new features, Worter brings you the cutting edge of social interaction technology."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-[#1a1b2d] to-[#0c0d1b] relative z-10">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 drop-shadow-xl animate-gradient-shift reveal-on-scroll" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          Unleash Your Social Potential
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;