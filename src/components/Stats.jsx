import React, { useEffect, useRef, useState } from 'react';

const StatCard = ({ number, label, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const maxCount = number;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let start = 0;
            const duration = 2000; // 2 seconds
            const increment = maxCount / (duration / 10); // Calculate increment based on duration and update interval

            const timer = setInterval(() => {
              start += increment;
              if (start > maxCount) {
                start = maxCount;
                clearInterval(timer);
              }
              setCount(Math.ceil(start));
            }, 10);
            observer.unobserve(entry.target); // Stop observing once animated
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [maxCount]);

  return (
    <div ref={ref} className="glass-card p-6 rounded-2xl text-center hover:border-indigo-400 transform hover:shadow-indigo-500/30 reveal-on-scroll">
      <div className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500 mb-2 drop-shadow-lg">
        {count.toLocaleString('en-US')}{suffix}
      </div>
      <p className="text-xl text-gray-300">{label}</p>
    </div>
  );
};

const TestimonialCard = ({ quote, name, title, avatar }) => {
  return (
    <div className="glass-card p-8 rounded-2xl text-left border-purple-400/20 hover:border-purple-400 transform hover:shadow-purple-500/30 reveal-on-scroll">
      <p className="text-xl italic text-gray-200 mb-6 leading-relaxed">"{quote}"</p>
      <div className="flex items-center">
        <img src={avatar} alt={name} className="w-16 h-16 rounded-full mr-4 border-2 border-cyan-400 object-cover" />
        <div>
          <h4 className="font-bold text-white text-lg">{name}</h4>
          <p className="text-sm text-gray-400">{title}</p>
        </div>
      </div>
    </div>
  );
};

const Stats = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // No unobserve for testimonials to allow re-animation on scroll if needed.
          // For stats, the number counter takes care of one-time animation.
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(el => observer.observe(el));
  }, []);

  const statsData = [
    { number: 1200000, label: "Active Users", suffix: "+" },
    { number: 5000000, label: "Posts Created", suffix: "+" },
    { number: 150000, label: "Communities", suffix: "+" },
    { number: 99.9, label: "Uptime", suffix: "%" }
  ];

  const testimonialData = [
    {
      quote: "Worter has transformed the way I connect with my creative community. The intuitive interface and powerful features are unmatched!",
      name: "Elara Vance",
      title: "Digital Artist & Influencer",
      avatar: "https://picsum.photos/id/1011/64/64"
    },
    {
      quote: "Finally, a platform that truly respects user privacy while delivering a rich social experience. Worter is my new go-to!",
      name: "Marcus Thorne",
      title: "Tech Innovator & Community Leader",
      avatar: "https://picsum.photos/id/1025/64/64"
    },
    {
      quote: "The personalized feed is a game-changer. I'm always discovering relevant content and inspiring new ideas. Highly recommend Worter!",
      name: "Sophia Chang",
      title: "Lifestyle Blogger",
      avatar: "https://picsum.photos/id/1027/64/64"
    }
  ];

  return (
    <section id="stats" className="py-20 bg-gradient-to-br from-[#1a1b2d] to-[#0c0d1b] relative z-10">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500 drop-shadow-xl animate-gradient-shift reveal-on-scroll" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          Our Impact & User Voices
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          {statsData.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonialData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;