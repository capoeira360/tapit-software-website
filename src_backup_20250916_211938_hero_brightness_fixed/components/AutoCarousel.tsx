'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface CarouselSlide {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  backgroundImage?: string;
  backgroundColor?: string;
  imageUrl?: string;
}

interface AutoCarouselProps {
  slides: CarouselSlide[];
  autoRotateInterval?: number; // in milliseconds
  showNavigation?: boolean;
  showIndicators?: boolean;
  className?: string;
}

const AutoCarousel: React.FC<AutoCarouselProps> = ({
  slides,
  autoRotateInterval = 5000,
  showNavigation = true,
  showIndicators = true,
  className = ''
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // Auto-rotation effect
  useEffect(() => {
    if (!isHovered && slides.length > 1) {
      const interval = setInterval(nextSlide, autoRotateInterval);
      return () => clearInterval(interval);
    }
  }, [nextSlide, autoRotateInterval, isHovered, slides.length]);

  if (!slides || slides.length === 0) {
    return null;
  }

  const currentSlideData = slides[currentSlide];

  return (
    <div 
      className={`relative w-full h-full overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out transform ${
              index === currentSlide 
                ? 'opacity-100 translate-x-0' 
                : index < currentSlide 
                ? 'opacity-0 -translate-x-full' 
                : 'opacity-0 translate-x-full'
            }`}
            style={{
              backgroundImage: slide.backgroundImage ? `url(${slide.backgroundImage})` : undefined,
              backgroundColor: slide.backgroundColor || 'transparent'
            }}
          >
            {/* Overlay for better text readability */}
            {slide.backgroundImage && (
              <div className="absolute inset-0 bg-black bg-opacity-40" />
            )}
            
            {/* Content */}
            <div className="relative z-10 flex items-center h-full px-6 md:px-12">
              <div className={`flex items-center w-full ${
                slide.imageUrl ? 'justify-between' : 'justify-center'
              }`}>
                {/* Text Content */}
                <div className={`${
                  slide.imageUrl 
                    ? 'w-1/2 pr-8 text-left' 
                    : 'text-center max-w-4xl mx-auto'
                }`}>
                  <h1 className={`font-bold text-white mb-4 animate-fade-in ${
                    slide.imageUrl ? 'text-3xl md:text-5xl' : 'text-4xl md:text-6xl'
                  }`}>
                    {slide.title}
                  </h1>
                  {slide.subtitle && (
                    <h2 className={`text-gray-200 mb-6 animate-fade-in-delay-1 ${
                      slide.imageUrl ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'
                    }`}>
                      {slide.subtitle}
                    </h2>
                  )}
                  <p className={`text-gray-300 leading-relaxed animate-fade-in-delay-2 ${
                    slide.imageUrl 
                      ? 'text-base md:text-lg max-w-lg' 
                      : 'text-lg md:text-xl'
                  }`}>
                    {slide.description}
                  </p>
                </div>
                
                {/* Image Content */}
                {slide.imageUrl && (
                  <div className="w-1/2 pl-8">
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                      <img
                        src={slide.imageUrl}
                        alt={slide.title}
                        className="w-full h-80 md:h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {showNavigation && slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
            aria-label="Next slide"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Indicators */}
      {showIndicators && slides.length > 1 && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-110'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white bg-opacity-20 z-20">
        <div 
          className="h-full bg-white transition-all duration-300 ease-linear"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`
          }}
        />
      </div>
    </div>
  );
};

export default AutoCarousel;
export type { CarouselSlide };