'use client';

import { useState, useEffect } from 'react';

const images = [
  "https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?auto=format&fit=crop&q=80&w=2000"
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // Changed from 5000 to 10000 (10 seconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {images.map((image, index) => (
        <div
          key={image}
          className="absolute inset-0"
          style={{
            opacity: index === currentImageIndex ? 1 : 0,
            transition: 'opacity 1s ease-in-out'
          }}
        >
          <img
            className="w-full h-full object-cover"
            src={image}
            alt={`Luxury perfume display ${index + 1}`}
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-40"></div>
        </div>
      ))}
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Discover Your Signature Scent
        </h1>
        <p className="mt-6 text-xl text-white max-w-3xl">
          Explore our curated collection of luxury fragrances, crafted by master perfumers 
          using the finest ingredients from around the world.
        </p>
        <div className="mt-10">
          <button className="inline-block bg-white text-gray-900 px-8 py-3 border border-transparent text-base font-medium rounded-md hover:bg-gray-100 transition-colors">
            Shop Collection
          </button>
        </div>
      </div>
    </div>
  );
}