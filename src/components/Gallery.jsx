import React, { useEffect } from 'react';

const GalleryItem = ({ src, alt, title, user, likes }) => {
  return (
    <div className="gallery-item glass-card rounded-xl overflow-hidden reveal-on-scroll">
      <img
        src={src}
        alt={alt}
        className="w-full h-64 object-cover transform scale-100 group-hover:scale-110 transition duration-500 ease-in-out"
      />
      <div className="p-4 gallery-info">
        <h4 className="text-lg font-semibold text-white">{title}</h4>
        <p className="text-gray-400 text-sm">by {user}</p>
        <div className="flex items-center text-sm text-cyan-300 mt-2">
          ❤️ {likes} Likes
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
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

  const galleryData = [
    { src: 'https://picsum.photos/400/300?category=nature&random=1', alt: 'Mountain Sunset', title: 'Mountain Sunset', user: 'ExplorerJenna', likes: 1245 },
    { src: 'https://picsum.photos/400/300?category=city&random=2', alt: 'Neon City Night', title: 'Neon City Night', user: 'UrbanPixel', likes: 2310 },
    { src: 'https://picsum.photos/400/300?category=food&random=3', alt: 'Gourmet Dish', title: 'Culinary Masterpiece', user: 'FoodieGuru', likes: 890 },
    { src: 'https://picsum.photos/400/300?category=abstract&random=4', alt: 'Abstract Art', title: 'Digital Dreams', user: 'ArtisianDX', likes: 1567 },
    { src: 'https://picsum.photos/400/300?category=animals&random=5', alt: 'Wildlife Shot', title: 'Majestic Beast', user: 'WildLens', likes: 2901 },
    { src: 'https://picsum.photos/400/300?category=architecture&random=6', alt: 'Modern Building', title: 'Future Structures', user: 'ArchVizion', likes: 789 },
    { src: 'https://picsum.photos/400/300?category=people&random=7', alt: 'Portrait', title: 'Reflective Gaze', user: 'HumanStories', likes: 1800 },
    { src: 'https://picsum.photos/400/300?category=travel&random=8', alt: 'Beautiful Beach', title: 'Paradise Found', user: 'WanderLust', likes: 3200 },
    { src: 'https://picsum.photos/400/300?category=tech&random=9', alt: 'VR Experience', title: 'Immersive Worlds', user: 'TechWiz', likes: 950 }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-[#0c0d1b] to-[#1a1b2d] relative z-10">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-500 drop-shadow-xl animate-gradient-shift reveal-on-scroll" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          Explore Our Vibrant Community Feed
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryData.map((item, index) => (
            <GalleryItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;