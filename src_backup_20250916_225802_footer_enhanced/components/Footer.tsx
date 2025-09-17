"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import TapitLogo from "./TapitLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Web Development", href: "/services" },
    { name: "Mobile Apps", href: "/services" },
    { name: "AI Solutions", href: "/services" },
    { name: "UI/UX Design", href: "/services" }
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" }
  ];

  const socialLinks = [
    { name: "Github", icon: Github, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" }
  ];

  return (
    <footer className="bg-gradient-dark">
      <div className="container mx-auto px-6 py-20">
        {/* Main Content - Creative Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Brand Section - Enhanced */}
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center space-x-3 mb-5 group">
              <div className="relative transition-transform duration-300 group-hover:scale-110">
                <TapitLogo size="sm" className="drop-shadow-lg" />
              </div>
              <span className="text-2xl font-display font-bold gradient-text">
                TAP<span className="text-primary">it</span>
              </span>
            </Link>
            <p className="text-black text-lg mb-6 leading-relaxed font-medium">
              Transforming ideas into cutting-edge digital solutions for modern businesses worldwide.
            </p>
            {/* Contact Info - Vertical Stack */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-black">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span className="text-base font-medium">hello@tapit.com</span>
              </div>
              <div className="flex items-center space-x-3 text-black">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span className="text-base font-medium">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Services & Company - Side by Side */}
          <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-8">
            {/* Services */}
            <div>
              <h3 className="text-xl font-bold text-black mb-4 border-b-2 border-primary/20 pb-2">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-base text-black hover:text-primary transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full transition-transform group-hover:scale-125"></span>
                      <span>{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-xl font-bold text-black mb-4 border-b-2 border-primary/20 pb-2">Company</h3>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-base text-black hover:text-primary transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full transition-transform group-hover:scale-125"></span>
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social & Copyright - Right Column */}
          <div className="lg:col-span-3 flex flex-col justify-between h-full">
            {/* Social Links - Enhanced */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-black mb-4">Connect With Us</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 hover:from-primary hover:to-primary/80 hover:scale-110 transition-all duration-300 group border border-primary/20"
                      aria-label={social.name}
                    >
                      <IconComponent className="w-6 h-6 text-primary group-hover:text-white" />
                    </Link>
                  );
                })}
              </div>
            </div>
            
            {/* Copyright - Bottom Aligned */}
            <div className="border-t border-primary/20 pt-4">
              <p className="text-black text-base font-semibold text-center lg:text-left">
                © {currentYear} TAPit
              </p>
              <p className="text-black/70 text-sm mt-1 text-center lg:text-left">
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-orange opacity-50" />
    </footer>
  );
}