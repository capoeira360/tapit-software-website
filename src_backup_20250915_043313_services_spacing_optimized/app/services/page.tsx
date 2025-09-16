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
  const pricingRef = useRef<HTMLElement>(null);

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

      // Pricing cards animation
      gsap.from(".pricing-card", {
        scrollTrigger: {
          trigger: pricingRef.current,
          start: "top 80%",
        },
        scale: 0.9,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.7)"
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

  const pricingPlans = [
    {
      name: "Starter",
      price: "$5,000",
      period: "Starting from",
      description: "Perfect for small businesses and startups looking to establish their digital presence.",
      features: [
        "Responsive Website",
        "Basic SEO Setup",
        "Contact Forms",
        "Social Media Integration",
        "3 Months Support",
        "Mobile Optimization"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$15,000",
      period: "Starting from",
      description: "Comprehensive solutions for growing businesses with advanced features and integrations.",
      features: [
        "Custom Web Application",
        "Database Integration",
        "User Authentication",
        "Payment Processing",
        "Analytics Dashboard",
        "6 Months Support",
        "API Development",
        "Performance Optimization"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "Quote",
      description: "Tailored solutions for large organizations with complex requirements and scalability needs.",
      features: [
        "Custom Architecture",
        "Scalable Infrastructure",
        "Advanced Security",
        "Third-party Integrations",
        "Dedicated Support Team",
        "SLA Guarantee",
        "Training & Documentation",
        "Ongoing Maintenance"
      ],
      popular: false
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

      {/* Services Grid */}
      <section ref={servicesRef} className="py-8 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              What We <span className="gradient-text">Offer</span>
            </h2>
            <p className="text-xl text-black max-w-2xl mx-auto font-medium">
              From concept to deployment, we provide end-to-end digital solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="service-card group bg-gradient-dark border border-secondary/20 rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 card-hover"
                >
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-display font-semibold mb-4 text-text-primary group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-black mb-6 leading-relaxed font-medium">
                  {service.description}
                </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-text-primary mb-3">Key Features:</h4>
                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-black text-sm font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-black mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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

      {/* Pricing Section */}
      <section ref={pricingRef} className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Transparent <span className="gradient-text">Pricing</span>
            </h2>
            <p className="text-xl text-black max-w-2xl mx-auto font-medium">
              Choose the perfect plan for your project needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`pricing-card relative bg-gradient-dark border rounded-2xl p-8 transition-all duration-500 card-hover ${
                  plan.popular 
                    ? 'border-primary/50 scale-105' 
                    : 'border-secondary/20 hover:border-primary/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-background px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-display font-bold mb-2 text-text-primary">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-black ml-2 font-medium">{plan.period}</span>
                </div>
                <p className="text-black font-medium">{plan.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-black font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-primary text-background hover:bg-primary/90'
                    : 'bg-background border border-primary text-primary hover:bg-primary hover:text-background'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-dark">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to Get <span className="gradient-text">Started?</span>
            </h2>
            <p className="text-xl text-black mb-8">
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