"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ScrollCarousel, { CarouselSlide } from "../components/ScrollCarousel";
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
import TapitLogo from "../components/TapitLogo";

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

  const carouselSlides: CarouselSlide[] = [
    {
      title: "Innovation Unleashed",
      subtitle: "Digital Excellence",
      description: "Transforming ideas into powerful digital experiences that captivate and convert.",
      backgroundGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "AI-Powered Future",
      subtitle: "Smart Solutions",
      description: "Harness cutting-edge artificial intelligence to revolutionize your business processes.",
      backgroundGradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80"
    },
    {
      title: "Mobile Excellence",
      subtitle: "Apps That Inspire",
      description: "Create stunning mobile experiences that engage users and drive meaningful results.",
      backgroundGradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Web Mastery",
      subtitle: "Performance Driven",
      description: "Build lightning-fast, responsive websites that deliver exceptional user experiences.",
      backgroundGradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
    },
    {
      title: "Creative Design",
      subtitle: "Visual Impact",
      description: "Stunning designs that tell your story and create lasting impressions.",
      backgroundGradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
      imageUrl: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80"
    },
    {
      title: "Digital Strategy",
      subtitle: "Growth Focused",
      description: "Strategic digital solutions that accelerate your business growth and success.",
      backgroundGradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
       imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
     }
   ];

  return (
    <>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background image with brightness filter */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/hero-bg.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'brightness(0.4)'
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {/* Microchip-inspired glowing nodes */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#C48D2E]/20 to-[#D6B456]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          
          {/* Circuit-like connection lines */}
          <div className="absolute top-1/4 left-1/4 w-32 h-0.5 bg-gradient-to-r from-[#C48D2E]/30 to-transparent animate-pulse delay-500" />
          <div className="absolute top-3/4 right-1/4 w-24 h-0.5 bg-gradient-to-l from-[#D6B456]/30 to-transparent animate-pulse delay-700" />
          <div className="absolute left-1/3 top-1/2 w-0.5 h-20 bg-gradient-to-b from-[#C48D2E]/20 to-transparent animate-pulse delay-300" />
          <div className="absolute right-1/3 top-1/3 w-0.5 h-16 bg-gradient-to-t from-[#D6B456]/20 to-transparent animate-pulse delay-900" />
          
          {/* Microchip nodes */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#C48D2E] rounded-full animate-pulse shadow-lg shadow-[#C48D2E]/50" />
          <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-[#D6B456] rounded-full animate-pulse delay-500 shadow-lg shadow-[#D6B456]/50" />
          <div className="absolute left-1/3 top-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse delay-200 shadow-lg shadow-cyan-400/50" />
          <div className="absolute right-1/3 top-1/3 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-800 shadow-lg shadow-blue-400/50" />
          
          {/* Subtle logo watermark */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
            <TapitLogo size="1.3inch" />
          </div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="hero-text text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 text-white">
              Transform Your
              <span className="block bg-gradient-to-r from-[#C48D2E] to-[#D6B456] bg-clip-text text-transparent">Digital Vision</span>
            </h1>
            <p className="hero-text text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto leading-relaxed">
              We specialize in designing cutting-edge websites, mobile applications, and AI systems that drive innovation and business growth.
            </p>
            <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4 flex items-center space-x-2 group">
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/portfolio" className="bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 transition-all duration-300 text-lg px-8 py-4 rounded-lg">
                View Our Work
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Scroll Carousel Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Our <span className="gradient-text">Capabilities</span>
            </h2>
            <p className="text-xl text-black max-w-2xl mx-auto font-medium">
              Discover the full spectrum of our digital expertise
            </p>
          </div>
          <ScrollCarousel slides={carouselSlides} />
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} id="services" className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
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
      <section ref={statsRef} className="py-12 bg-gradient-dark">
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
      <section className="py-20" style={{backgroundColor: '#3B1C0A'}}>
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
              Ready to <span className="gradient-text">Get Started?</span>
            </h2>
            <p className="text-lg text-white mb-8 font-medium">
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