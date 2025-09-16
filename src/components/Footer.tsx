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
    <footer className="bg-gradient-dark border-t border-secondary/20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="relative transition-transform duration-300 group-hover:scale-110">
                <TapitLogo size="1.3inch" className="drop-shadow-lg" />
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
              </div>
              <span className="text-2xl font-display font-bold gradient-text">
                TAP<span className="text-primary">it</span>
              </span>
            </Link>
            <p className="text-black mb-6 max-w-md leading-relaxed">
              We specialize in creating cutting-edge websites, mobile applications, and AI systems that transform your digital presence and drive business growth.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-black">
                <Mail className="w-5 h-5 text-primary" />
                <span>hello@tapit.com</span>
              </div>
              <div className="flex items-center space-x-3 text-black">
                <Phone className="w-5 h-5 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-black">
                <MapPin className="w-5 h-5 text-primary" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-black hover:text-primary transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-black hover:text-primary transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-secondary/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-black text-sm mb-4 md:mb-0 font-medium">
            © {currentYear} TAPit. All rights reserved. Crafted with passion and innovation.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  className="p-2 rounded-lg bg-secondary/20 hover:bg-primary hover:scale-110 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <IconComponent className="w-5 h-5 text-black group-hover:text-background" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-orange opacity-50" />
    </footer>
  );
}