"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ScrollCarousel, { CarouselSlide } from "../../components/ScrollCarousel";
import { 
  Globe, 
  Smartphone, 
  Brain, 
  Code, 
  Palette, 
  Database,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  Award,
  Headphones
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Services() {
  const heroRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const processRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from(".services-hero-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out"
      });

      // Service cards animation
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

      // Process steps animation
      gsap.from(".process-step", {
        scrollTrigger: {
          trigger: processRef.current,
          start: "top 80%",
        },
        x: -100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out"
      });


    });

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom web applications built with modern technologies for optimal performance and user experience.",
      features: [
        "Responsive Design",
        "Progressive Web Apps",
        "E-commerce Solutions",
        "CMS Integration",
        "API Development",
        "Performance Optimization"
      ],
      technologies: ["React", "Next.js", "Vue.js", "Node.js", "Python", "PHP"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      features: [
        "iOS & Android Apps",
        "Cross-platform Solutions",
        "UI/UX Design",
        "App Store Optimization",
        "Push Notifications",
        "Offline Functionality"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin"]
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by artificial intelligence and machine learning to automate and optimize your business processes.",
      features: [
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision",
        "Chatbots & Virtual Assistants",
        "Recommendation Systems",
        "Process Automation"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI", "Scikit-learn"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that enhance user engagement and drive business results through thoughtful user experience.",
      features: [
        "User Research",
        "Wireframing & Prototyping",
        "Visual Design",
        "Usability Testing",
        "Brand Identity",
        "Design Systems"
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "Principle", "InVision"]
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Robust, scalable backend systems that power your applications with secure and efficient data management.",
      features: [
        "API Development",
        "Database Design",
        "Cloud Integration",
        "Microservices Architecture",
        "Security Implementation",
        "Performance Optimization"
      ],
      technologies: ["Node.js", "Python", "Java", "PostgreSQL", "MongoDB", "AWS"]
    },
    {
      icon: Shield,
      title: "DevOps & Security",
      description: "Comprehensive DevOps solutions and security implementations to ensure your applications are reliable and protected.",
      features: [
        "CI/CD Pipelines",
        "Cloud Infrastructure",
        "Security Audits",
        "Monitoring & Logging",
        "Automated Testing",
        "Disaster Recovery"
      ],
      technologies: ["Docker", "Kubernetes", "AWS", "Jenkins", "Terraform"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, target audience, and technical requirements to create a comprehensive project roadmap.",
      icon: Users
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Our design team creates wireframes, mockups, and interactive prototypes to visualize the final product before development begins.",
      icon: Palette
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build your solution using agile methodologies, with continuous testing and quality assurance throughout the development process.",
      icon: Code
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "We deploy your solution to production and provide ongoing support, maintenance, and updates to ensure optimal performance.",
      icon: Headphones
    }
  ];



  const carouselSlides: CarouselSlide[] = [
    {
      title: "Web Excellence",
      subtitle: "Modern Development",
      description: "Custom web applications built with cutting-edge technologies for optimal performance and user experience.",
      backgroundGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      title: "Mobile Innovation",
      subtitle: "Cross-Platform Apps",
      description: "Engaging mobile applications for iOS and Android that captivate users and drive business results.",
      backgroundGradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      title: "AI Solutions",
      subtitle: "Intelligent Systems",
      description: "Harness artificial intelligence to automate processes and unlock new opportunities for growth.",
      backgroundGradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      title: "Digital Strategy",
      subtitle: "Business Growth",
      description: "Comprehensive digital solutions tailored to transform your business and accelerate success.",
      backgroundGradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      title: "UI/UX Design",
      subtitle: "User-Centered Design",
      description: "Beautiful, intuitive interfaces that enhance user experience and drive engagement.",
      backgroundGradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)"
    },
    {
      title: "Cloud Solutions",
      subtitle: "Scalable Infrastructure",
      description: "Robust cloud architectures that scale with your business and ensure reliable performance.",
      backgroundGradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center bg-gradient-dark overflow-hidden pt-20"
      >
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="services-hero-text text-5xl md:text-7xl font-display font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="services-hero-text text-xl md:text-2xl text-black mb-8 max-w-3xl mx-auto leading-relaxed">
               Comprehensive digital solutions tailored to transform your business and drive growth in the digital age.
             </p>
             <div className="services-hero-text flex items-center justify-center space-x-8 text-black">
              <div className="flex items-center space-x-2">
                <Clock className="w-6 h-6 text-primary" />
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-6 h-6 text-primary" />
                <span>Quality Assured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Headphones className="w-6 h-6 text-primary" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Carousel Section */}
      <section className="py-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Our <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of services designed to elevate your digital presence
            </p>
          </div>
          <ScrollCarousel slides={carouselSlides} />
        </div>
      </section>

      {/* Animated Services Cards */}
      <section ref={servicesRef} className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-secondary rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent rounded-full animate-ping"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              What We <span className="gradient-text">Create</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
              Innovative digital solutions that transform ideas into powerful experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Mobile Apps Card */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Device Mockup */}
              <div className="relative mb-6 flex justify-center">
                <div className="relative">
                  {/* Phone Frame */}
                  <div className="w-32 h-56 bg-gray-900 rounded-3xl p-2 shadow-2xl transform group-hover:rotate-3 transition-transform duration-500">
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl relative overflow-hidden">
                      {/* Screen Content */}
                      <div className="absolute inset-2 bg-white rounded-xl p-2">
                        <div className="space-y-2">
                          <div className="h-2 bg-gray-200 rounded animate-pulse"></div>
                          <div className="h-2 bg-gray-300 rounded w-3/4 animate-pulse" style={{animationDelay: '0.2s'}}></div>
                          <div className="h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded mt-3 animate-pulse" style={{animationDelay: '0.4s'}}></div>
                          <div className="grid grid-cols-2 gap-1 mt-2">
                            <div className="h-6 bg-gray-100 rounded animate-pulse" style={{animationDelay: '0.6s'}}></div>
                            <div className="h-6 bg-gray-100 rounded animate-pulse" style={{animationDelay: '0.8s'}}></div>
                          </div>
                        </div>
                      </div>
                      {/* Floating Elements */}
                      <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                    </div>
                  </div>
                  {/* Floating Icons */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs animate-bounce">
                    📱
                  </div>
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-display font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors">
                  Mobile Apps
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Native and cross-platform mobile applications with stunning UI and seamless performance across iOS and Android.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">React Native</span>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">Flutter</span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">Swift</span>
                </div>
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                  <span>Explore Mobile Solutions</span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            {/* Websites Card */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Device Mockup */}
              <div className="relative mb-6 flex justify-center">
                <div className="relative">
                  {/* Laptop Frame */}
                  <div className="w-40 h-24 bg-gray-800 rounded-t-2xl p-1 shadow-2xl transform group-hover:-rotate-2 transition-transform duration-500">
                    <div className="w-full h-full bg-gradient-to-br from-green-400 to-teal-600 rounded-t-xl relative overflow-hidden">
                      {/* Screen Content */}
                      <div className="absolute inset-1 bg-white rounded-t-lg p-1">
                        <div className="space-y-1">
                          <div className="flex space-x-1">
                            <div className="w-1 h-1 bg-red-400 rounded-full"></div>
                            <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                          </div>
                          <div className="h-1 bg-gray-200 rounded animate-pulse"></div>
                          <div className="h-4 bg-gradient-to-r from-green-400 to-teal-500 rounded animate-pulse" style={{animationDelay: '0.3s'}}></div>
                          <div className="grid grid-cols-3 gap-1">
                            <div className="h-3 bg-gray-100 rounded animate-pulse" style={{animationDelay: '0.5s'}}></div>
                            <div className="h-3 bg-gray-100 rounded animate-pulse" style={{animationDelay: '0.7s'}}></div>
                            <div className="h-3 bg-gray-100 rounded animate-pulse" style={{animationDelay: '0.9s'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Laptop Base */}
                  <div className="w-44 h-2 bg-gray-700 rounded-b-2xl -mt-1"></div>
                  {/* Floating Icons */}
                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs animate-bounce" style={{animationDelay: '0.5s'}}>
                    🌐
                  </div>
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-display font-bold mb-4 text-gray-800 group-hover:text-green-600 transition-colors">
                  Websites
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Modern, responsive websites and web applications built with cutting-edge technologies for optimal performance.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">React</span>
                  <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">Next.js</span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Vue.js</span>
                </div>
                <div className="flex items-center text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                  <span>Discover Web Solutions</span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            {/* AI Functions Card */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Device Mockup */}
              <div className="relative mb-6 flex justify-center">
                <div className="relative">
                  {/* AI Brain Visualization */}
                  <div className="w-32 h-32 relative">
                    {/* Central Brain */}
                    <div className="absolute inset-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full shadow-2xl transform group-hover:scale-110 transition-transform duration-500 flex items-center justify-center">
                      <Brain className="w-12 h-12 text-white animate-pulse" />
                    </div>
                    {/* Orbiting Elements */}
                    <div className="absolute inset-0">
                      <div className="absolute top-0 left-1/2 w-4 h-4 bg-blue-400 rounded-full animate-spin" style={{transformOrigin: '50% 64px', animationDuration: '3s'}}></div>
                      <div className="absolute top-1/2 right-0 w-3 h-3 bg-green-400 rounded-full animate-spin" style={{transformOrigin: '-48px 50%', animationDuration: '4s', animationDirection: 'reverse'}}></div>
                      <div className="absolute bottom-0 left-1/2 w-4 h-4 bg-yellow-400 rounded-full animate-spin" style={{transformOrigin: '50% -48px', animationDuration: '3.5s'}}></div>
                      <div className="absolute top-1/2 left-0 w-3 h-3 bg-red-400 rounded-full animate-spin" style={{transformOrigin: '64px 50%', animationDuration: '4.5s', animationDirection: 'reverse'}}></div>
                    </div>
                    {/* Neural Network Lines */}
                    <div className="absolute inset-0 opacity-30">
                      <svg className="w-full h-full" viewBox="0 0 128 128">
                        <line x1="64" y1="16" x2="64" y2="48" stroke="#8b5cf6" strokeWidth="1" className="animate-pulse" />
                        <line x1="112" y1="64" x2="80" y2="64" stroke="#8b5cf6" strokeWidth="1" className="animate-pulse" style={{animationDelay: '0.5s'}} />
                        <line x1="64" y1="112" x2="64" y2="80" stroke="#8b5cf6" strokeWidth="1" className="animate-pulse" style={{animationDelay: '1s'}} />
                        <line x1="16" y1="64" x2="48" y2="64" stroke="#8b5cf6" strokeWidth="1" className="animate-pulse" style={{animationDelay: '1.5s'}} />
                      </svg>
                    </div>
                  </div>
                  {/* Floating Icons */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs animate-bounce" style={{animationDelay: '1s'}}>
                    🤖
                  </div>
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-display font-bold mb-4 text-gray-800 group-hover:text-purple-600 transition-colors">
                  AI Functions
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Intelligent AI-powered solutions including machine learning, natural language processing, and automation systems.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">TensorFlow</span>
                  <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">OpenAI</span>
                  <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">PyTorch</span>
                </div>
                <div className="flex items-center text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
                  <span>Explore AI Solutions</span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-6">
              Ready to bring your vision to life with cutting-edge technology?
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2 mx-auto">
              <span>Start Your Project</span>
              <Zap className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-16 bg-gradient-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-black max-w-2xl mx-auto font-medium">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="space-y-8">
            {process.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={index}
                  className="process-step flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8 bg-background/50 backdrop-blur-sm border border-secondary/20 rounded-2xl p-8"
                >
                  <div className="flex items-center space-x-4 md:space-x-6">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-lg">{step.step}</span>
                    </div>
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-semibold mb-3 text-text-primary">
                      {step.title}
                    </h3>
                    <p className="text-black leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>

                  {index < process.length - 1 && (
                    <div className="hidden md:block">
                      <ArrowRight className="w-6 h-6 text-primary/50" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-16" style={{backgroundColor: '#3B1C0A'}}>
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
              Ready to Get <span className="gradient-text">Started?</span>
            </h2>
            <p className="text-lg text-white mb-8">
              Let's discuss your project requirements and create a custom solution that fits your needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4 flex items-center space-x-2 group">
                <span>Start Your Project</span>
                <Zap className="w-5 h-5 transition-transform group-hover:rotate-12" />
              </button>
              <button className="btn-secondary text-lg px-8 py-4 flex items-center space-x-2">
                <span>Schedule Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}