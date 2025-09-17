'use client';

import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export interface CarouselSlide {
  title: string;
  subtitle: string;
  description: string;
  backgroundGradient: string;
  imageUrl?: string;
}

interface ScrollCarouselProps {
  slides: CarouselSlide[];
  className?: string;
}

const ScrollCarousel: React.FC<ScrollCarouselProps> = ({ slides, className = '' }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!carouselRef.current || !containerRef.current) return;

    const carousel = carouselRef.current;
    const container = containerRef.current;

    // Initial state - hidden
    gsap.set(carousel, {
      opacity: 0,
      y: 100,
      scale: 0.9
    });

    // Scroll trigger animation
    const scrollTrigger = ScrollTrigger.create({
      trigger: container,
      start: 'top 80%',
      end: 'bottom 20%',
      onEnter: () => {
        setIsVisible(true);
        setIsInitialized(true);
        gsap.to(carousel, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out'
        });
      },
      onLeave: () => {
        gsap.to(carousel, {
          opacity: 0.3,
          scale: 0.95,
          duration: 0.6,
          ease: 'power2.out'
        });
      },
      onEnterBack: () => {
        gsap.to(carousel, {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out'
        });
      }
    });

    // Fallback timeout to ensure carousel is visible even if scroll trigger doesn't fire
    const fallbackTimeout = setTimeout(() => {
      if (!isInitialized) {
        setIsVisible(true);
        setIsInitialized(true);
        gsap.to(carousel, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out'
        });
      }
    }, 1000);

    return () => {
      scrollTrigger.kill();
      clearTimeout(fallbackTimeout);
    };
  }, [isInitialized]);

  useEffect(() => {
    if (!isInitialized) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length, isInitialized]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div ref={containerRef} className={`scroll-carousel-container ${className}`}>
      <div 
        ref={carouselRef}
        className="scroll-carousel relative w-full h-[70vh] min-h-[500px] overflow-hidden rounded-2xl shadow-2xl"
      >
        {/* Slides */}
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-105'
              }`}
              style={{
                background: slide.backgroundGradient,
              }}
            >
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative z-10 flex items-center h-full px-8 md:px-16">
                {/* Content Layout */}
                <div className={`flex items-center w-full ${
                  slide.imageUrl ? 'justify-between' : 'justify-center'
                }`}>
                  {/* Text Content */}
                  <div className={`${
                    slide.imageUrl 
                      ? 'w-1/2 pr-8 text-left' 
                      : 'text-center max-w-4xl mx-auto'
                  }`}>
                    <h3 className="text-sm font-medium text-white/80 mb-2 tracking-wider uppercase">
                      {slide.subtitle}
                    </h3>
                    <h2 className={`font-bold text-white mb-6 leading-tight ${
                      slide.imageUrl ? 'text-3xl md:text-5xl' : 'text-4xl md:text-6xl'
                    }`}>
                      {slide.title}
                    </h2>
                    <p className={`text-white/90 leading-relaxed ${
                      slide.imageUrl 
                        ? 'text-base md:text-lg max-w-lg' 
                        : 'text-lg md:text-xl max-w-2xl'
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
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 text-white hover:bg-white/20 transition-all duration-300 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 text-white hover:bg-white/20 transition-all duration-300 group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>


      </div>
    </div>
  );
};

export default ScrollCarousel;