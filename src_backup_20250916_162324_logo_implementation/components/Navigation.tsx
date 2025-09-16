"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";
import TapitLogo from "./TapitLogo";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.to("#mobile-menu", { 
        height: "auto", 
        opacity: 1,
        duration: 0.4, 
        ease: "power2.out" 
      });
    } else {
      gsap.to("#mobile-menu", { 
        height: 0, 
        opacity: 0,
        duration: 0.4, 
        ease: "power2.in" 
      });
    }
  }, [isOpen]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-secondary/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative transition-transform duration-300 group-hover:scale-110">
            <TapitLogo size="xl" className="drop-shadow-lg" />
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
          </div>
          <span className="text-2xl font-display font-bold gradient-text hidden sm:block">
            TAP<span className="text-primary">it</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="nav-link text-sm font-medium uppercase tracking-wider"
            >
              {item.name}
            </Link>
          ))}
          <button className="btn-primary ml-4">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle menu"
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-text-primary" />
          ) : (
            <Menu className="w-6 h-6 text-text-primary" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        id="mobile-menu" 
        className="md:hidden overflow-hidden h-0 opacity-0 bg-background/95 backdrop-blur-md border-t border-secondary/20"
      >
        <div className="container mx-auto px-6 py-6">
          <ul className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="block text-lg font-medium text-text-primary hover:text-primary transition-colors duration-300 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <button className="btn-primary w-full" onClick={() => setIsOpen(false)}>
                Get Started
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}