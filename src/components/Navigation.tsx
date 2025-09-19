"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";
import TapitLogo from "./TapitLogo";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [inHero, setInHero] = useState(false);
  const [inCTA, setInCTA] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Intersection Observer for hero section
    const observeHero = () => {
      const heroSection = document.querySelector('section[class*="hero"], section[class*="min-h-screen"]');
      if (!heroSection) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setInHero(entry.isIntersecting && entry.intersectionRatio > 0.1);
          });
        },
        {
          threshold: [0, 0.1, 0.5, 1],
          rootMargin: '-10% 0px -10% 0px'
        }
      );

      observer.observe(heroSection);
      return () => observer.disconnect();
    };



    // CTA section intersection observer
    const observeCTA = () => {
      const ctaObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setInCTA(entry.isIntersecting);
          });
        },
        {
          threshold: 0.3,
          rootMargin: '-20% 0px -20% 0px'
        }
      );

      // Find CTA sections (they typically have specific styling or are last sections)
      const ctaSections = document.querySelectorAll('section[style*="#3B1C0A"], section:last-of-type');
      ctaSections.forEach(section => {
        // Only observe if it contains CTA-like content
        if (section.textContent?.toLowerCase().includes('ready to') || 
            section.textContent?.toLowerCase().includes('get started') ||
            section.textContent?.toLowerCase().includes('contact us')) {
          ctaObserver.observe(section);
        }
      });

      return () => ctaObserver.disconnect();
    };

    window.addEventListener('scroll', handleScroll);
    const cleanupHeroObserver = observeHero();
    const cleanupCTAObserver = observeCTA();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (cleanupHeroObserver) cleanupHeroObserver();
      if (cleanupCTAObserver) cleanupCTAObserver();
    };
  }, [pathname]);

  // Re-initialize observers when route changes
  useEffect(() => {
    // Small delay to ensure DOM is updated after route change
    const timer = setTimeout(() => {
      // Reset states for new page
      setInHero(true);
      setInCTA(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    const menu = document.getElementById("mobile-menu");
    if (!menu) return;

    if (isOpen) {
      gsap.fromTo(menu, 
        { maxHeight: 0, opacity: 0 },
        { 
          maxHeight: "500px", 
          opacity: 1,
          duration: 0.4, 
          ease: "power2.out" 
        }
      );
    } else {
      gsap.to(menu, { 
        maxHeight: 0, 
        opacity: 0,
        duration: 0.4, 
        ease: "power2.in" 
      });
    }
  }, [isOpen]);

  // GSAP animations for navigation state changes
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    // Animate navigation state changes with transparent design
    gsap.to(nav, {
      y: inHero && !scrolled ? 0 : 0,
      scale: inHero && !scrolled ? 1.02 : 1,
      duration: 0.6,
      ease: "power2.out",
      backgroundColor: "transparent",
      backdropFilter: "blur(8px)"
    });

    // Animate logo and text elements
    const logo = nav.querySelector('.group');
    const navLinks = nav.querySelectorAll('a[href]');
    
    if (logo) {
      gsap.to(logo, {
        scale: (inCTA || inHero) ? 1.05 : 1,
        duration: 0.5,
        ease: "back.out(1.7)"
      });
    }

    // Stagger animation for nav links with state-specific effects
    gsap.to(navLinks, {
      y: 0,
      opacity: 1,
      duration: 0.4,
      stagger: 0.1,
      ease: "power2.out"
    });

    // Remove any box shadows for clean transparent design
    gsap.to(nav, {
      duration: 0.8,
      boxShadow: "none",
      ease: "power2.out"
    });

  }, [inHero, inCTA, scrolled]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" }
  ];

  // Dynamic navigation states
  const getNavClasses = () => {
    return "bg-transparent backdrop-blur-sm border-transparent";
  };

  const getTextClasses = () => {
    if (inCTA || inHero) {
      return 'text-white font-bold drop-shadow-lg';
    }
    return 'text-gray-900 font-bold drop-shadow-sm';
  };

  return (
    <nav 
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out transform ${
        getNavClasses()
      } ${inHero ? 'py-6' : 'py-4'}`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 h-full">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative transition-transform duration-300 group-hover:scale-110">
             <TapitLogo size="md" className="drop-shadow-lg" />
              <div className="absolute inset-0 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100 bg-transparent" />
            </div>
           <span className={`text-xl font-display font-bold hidden sm:block transition-colors duration-500 ${
             inHero ? 'text-white' : 'gradient-text'
           }`}>
            Software <span className={`transition-colors duration-500 ${
              inHero ? 'text-[#D6B456]' : 'text-primary'
            }`}>Company</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative px-4 py-2 rounded-lg transition-all duration-300 group font-light ${
                inCTA || inHero
                  ? 'text-white hover:text-[#D6B456] drop-shadow-lg hover:drop-shadow-xl'
                  : 'text-gray-900 hover:text-primary drop-shadow-sm'
              }`}
            >
              <span className="relative z-10">{item.name}</span>
              <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 transition-all duration-300 group-hover:w-full w-0 ${
                inCTA || inHero ? 'bg-[#D6B456] drop-shadow-md' : 'bg-primary'
              }`} />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
            onClick={toggleMenu}
            className={`md:hidden p-2 rounded-lg transition-all duration-500 focus:outline-none focus:ring-2 ${
              inCTA || inHero
                ? 'bg-transparent hover:bg-white/10 focus:ring-white/50 backdrop-blur-sm border border-white/30'
                : 'bg-transparent hover:bg-gray-900/10 focus:ring-gray-900/50 border border-gray-900/30'
            }`}
          >
          {isOpen ? (
            <X className={`w-6 h-6 transition-colors duration-500 ${
              inCTA ? 'text-white' : inHero ? 'text-white' : 'text-text-primary'
            }`} />
          ) : (
            <Menu className={`w-6 h-6 transition-colors duration-500 ${
              inCTA ? 'text-white' : inHero ? 'text-white' : 'text-text-primary'
            }`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        id="mobile-menu" 
        className={`md:hidden overflow-hidden backdrop-blur-lg transition-all duration-500 ${
          isOpen ? 'block' : 'hidden'
        } ${
          inCTA || inHero
            ? 'bg-black/40 border-t border-white/20'
            : 'bg-white/40 border-t border-gray-900/20'
        }`}
        style={{ maxHeight: isOpen ? '500px' : '0', opacity: isOpen ? 1 : 0 }}
      >
        <div className="container mx-auto px-6 py-6">
          <ul className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block text-lg font-light transition-all duration-300 py-2 hover:scale-105 ${
                    inCTA || inHero
                      ? 'text-white hover:text-[#D6B456] hover:pl-2 drop-shadow-lg'
                      : 'text-gray-800 hover:text-blue-600 hover:pl-2'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}

          </ul>
        </div>
      </div>
    </nav>
  );
}