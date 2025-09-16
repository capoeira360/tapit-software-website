"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { 
  Code, 
  Smartphone, 
  Brain, 
  Zap, 
  ArrowRight, 
  CheckCircle,
  Star,
  Users,
  Award,
  Rocket
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from(".hero-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out"
      });

      gsap.from(".hero-cta", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 1.2,
        ease: "power2.out"
      });

      // Services animation
      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
      });

      // Stats animation
      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)"
      });
    });

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: Code,
      title: "Web Design & Development",
      description: "Custom websites and web applications built with cutting-edge technologies for optimal performance and user experience.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern UI/UX"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that engage users and drive business growth across iOS and Android.",
      features: ["Native iOS/Android", "Cross-Platform", "App Store Optimization", "Push Notifications"]
    },
    {
      icon: Brain,
      title: "AI Systems & Integration",
      description: "Intelligent solutions powered by machine learning and AI to automate processes and enhance decision-making.",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Rocket, value: "1000+", label: "Projects Completed" },
    { icon: Award, value: "50+", label: "Awards Won" },
    { icon: Star, value: "4.9", label: "Client Rating" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center bg-gradient-dark overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="hero-text text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6">
              Transform Your
              <span className="block gradient-text">Digital Vision</span>
            </h1>
            <p className="hero-text text-xl md:text-2xl text-black mb-8 max-w-2xl mx-auto leading-relaxed">
              We specialize in designing cutting-edge websites, mobile applications, and AI systems that drive innovation and business growth.
            </p>
            <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4 flex items-center space-x-2 group">
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/portfolio" className="btn-secondary text-lg px-8 py-4">
                View Our Work
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} id="services" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Our <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-xl text-black max-w-2xl mx-auto font-medium">
              We deliver comprehensive digital solutions tailored to your unique business needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="service-card group bg-secondary/10 backdrop-blur-sm border border-secondary/20 rounded-2xl p-8 hover:bg-secondary/20 transition-all duration-500 card-hover"
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-display font-semibold mb-4 text-text-primary">
                      {service.title}
                    </h3>
                    <p className="text-black leading-relaxed mb-6 font-medium">
                      {service.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-black font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="stat-item text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-black font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to <span className="gradient-text">Get Started?</span>
            </h2>
            <p className="text-xl text-black mb-8 font-medium">
              Let's discuss your project and bring your digital vision to life
            </p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4 flex items-center space-x-2 mx-auto group">
              <span>Contact Us Today</span>
              <Zap className="w-5 h-5 transition-transform group-hover:rotate-12" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}