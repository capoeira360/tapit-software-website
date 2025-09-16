"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { 
  ExternalLink, 
  Github, 
  Play, 
  Filter,
  Smartphone,
  Globe,
  Brain,
  ShoppingCart,
  Users,
  BarChart3,
  Calendar,
  MessageSquare,
  LucideIcon
} from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  type: string;
  description: string;
  technologies: string[];
  image: string;
  icon: LucideIcon;
  stats: Record<string, string>;
  features: string[];
}

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Portfolio() {
  const heroRef = useRef<HTMLElement>(null);
  const portfolioRef = useRef<HTMLElement>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  const projects: Project[] = [
    {
      id: 1,
      title: "EcoCommerce Platform",
      category: "web",
      type: "E-commerce",
      description: "A sustainable e-commerce platform with AI-powered product recommendations and carbon footprint tracking.",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "AI/ML"],
      image: "/api/placeholder/600/400",
      icon: ShoppingCart,
      stats: {
        users: "50K+",
        conversion: "+35%",
        performance: "98%"
      },
      features: ["AI Recommendations", "Carbon Tracking", "Mobile Optimized", "Real-time Analytics"]
    },
    {
      id: 2,
      title: "HealthTracker Mobile App",
      category: "mobile",
      type: "Healthcare",
      description: "A comprehensive health monitoring app with wearable integration and personalized insights.",
      technologies: ["React Native", "Firebase", "HealthKit", "TensorFlow"],
      image: "/api/placeholder/600/400",
      icon: Smartphone,
      stats: {
        downloads: "100K+",
        rating: "4.8★",
        retention: "85%"
      },
      features: ["Wearable Sync", "AI Insights", "Social Features", "Offline Mode"]
    },
    {
      id: 3,
      title: "SmartAnalytics Dashboard",
      category: "ai",
      type: "Business Intelligence",
      description: "An AI-powered analytics platform that provides real-time business insights and predictive analytics.",
      technologies: ["Python", "TensorFlow", "React", "D3.js"],
      image: "/api/placeholder/600/400",
      icon: BarChart3,
      stats: {
        accuracy: "94%",
        speed: "10x faster",
        savings: "$2M+"
      },
      features: ["Predictive Analytics", "Real-time Data", "Custom Reports", "API Integration"]
    },
    {
      id: 4,
      title: "EventHub Platform",
      category: "web",
      type: "Event Management",
      description: "A comprehensive event management platform with ticketing, live streaming, and networking features.",
      technologies: ["Vue.js", "Laravel", "WebRTC", "Stripe"],
      image: "/api/placeholder/600/400",
      icon: Calendar,
      stats: {
        events: "1000+",
        attendees: "500K+",
        satisfaction: "96%"
      },
      features: ["Live Streaming", "Networking", "Payment Processing", "Analytics"]
    },
    {
      id: 5,
      title: "ChatBot AI Assistant",
      category: "ai",
      type: "Customer Service",
      description: "An intelligent chatbot with natural language processing and multi-language support.",
      technologies: ["Python", "NLP", "OpenAI", "WebSocket"],
      image: "/api/placeholder/600/400",
      icon: MessageSquare,
      stats: {
        accuracy: "92%",
        languages: "12",
        response: "<2s"
      },
      features: ["NLP Processing", "Multi-language", "Learning AI", "Integration Ready"]
    },
    {
      id: 6,
      title: "TeamSync Mobile",
      category: "mobile",
      type: "Productivity",
      description: "A team collaboration app with project management, file sharing, and video conferencing.",
      technologies: ["Flutter", "Firebase", "WebRTC", "Node.js"],
      image: "/api/placeholder/600/400",
      icon: Users,
      stats: {
        teams: "5K+",
        productivity: "+40%",
        uptime: "99.9%"
      },
      features: ["Video Calls", "File Sharing", "Task Management", "Real-time Sync"]
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', icon: Globe },
    { id: 'web', label: 'Web Apps', icon: Globe },
    { id: 'mobile', label: 'Mobile Apps', icon: Smartphone },
    { id: 'ai', label: 'AI Solutions', icon: Brain }
  ];

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from(".portfolio-hero-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out"
      });

      // Filter buttons animation
      gsap.from(".filter-btn", {
        scrollTrigger: {
          trigger: ".filter-container",
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      });

      // Project cards animation
      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: portfolioRef.current,
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
      });
    });

    return () => ctx.revert();
  }, []);

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
            <h1 className="portfolio-hero-text text-5xl md:text-7xl font-display font-bold mb-6">
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="portfolio-hero-text text-xl md:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover the innovative digital solutions we've crafted for businesses across various industries.
            </p>
            <div className="portfolio-hero-text flex items-center justify-center space-x-8 text-text-secondary">
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-6 h-6 text-primary" />
                <span>500+ Projects</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-6 h-6 text-primary" />
                <span>Happy Clients</span>
              </div>
              <div className="flex items-center space-x-2">
                <ExternalLink className="w-6 h-6 text-primary" />
                <span>Live Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-background border-b border-secondary/20">
        <div className="container mx-auto px-6">
          <div className="filter-container flex flex-wrap justify-center gap-4">
            {filters.map((filter) => {
              const IconComponent = filter.icon;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`filter-btn flex items-center space-x-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-primary text-background border-primary'
                      : 'bg-background/50 text-text-secondary border-secondary/20 hover:border-primary/50 hover:text-text-primary'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="font-medium">{filter.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section ref={portfolioRef} className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={project.id}
                  className="project-card group bg-gradient-dark border border-secondary/20 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 card-hover"
                >
                  {/* Project Image */}
                  <div className="relative h-48 bg-secondary/10 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <IconComponent className="w-16 h-16 text-primary/60" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {project.type}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="flex space-x-3">
                        <button className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors">
                          <Play className="w-5 h-5 text-background" />
                        </button>
                        <button className="w-12 h-12 bg-background/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background/30 transition-colors">
                          <ExternalLink className="w-5 h-5 text-text-primary" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-display font-semibold mb-3 text-text-primary group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-secondary/20 text-text-secondary px-2 py-1 rounded text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      {Object.entries(project.stats).map(([key, value], statIndex) => (
                        <div key={statIndex} className="text-center">
                          <div className="text-primary font-bold text-sm">{value}</div>
                          <div className="text-text-secondary text-xs capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-text-primary mb-2">Key Features:</div>
                      <div className="flex flex-wrap gap-1">
                        {project.features.map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="bg-primary/10 text-primary px-2 py-1 rounded text-xs"
                          >
                            {feature}
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to Start Your <span className="gradient-text">Project?</span>
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Let's discuss how we can bring your vision to life with our proven expertise and innovative approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4 flex items-center space-x-2 group">
                <span>Start Your Project</span>
                <ExternalLink className="w-5 h-5 transition-transform group-hover:rotate-12" />
              </button>
              <button className="btn-secondary text-lg px-8 py-4 flex items-center space-x-2 group">
                <Github className="w-5 h-5" />
                <span>View on GitHub</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}