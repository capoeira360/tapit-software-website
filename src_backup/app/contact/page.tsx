"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  User,
  MessageSquare,
  Building,
  Globe,
  Linkedin,
  Twitter,
  Github,
  Instagram
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Contact() {
  const heroRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from(".contact-hero-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out"
      });

      // Form animation
      gsap.from(".contact-form", {
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      });

      // Info cards animation
      gsap.from(".info-card", {
        scrollTrigger: {
          trigger: infoRef.current,
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        budget: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@tapit.co",
      description: "Send us an email anytime",
      action: "mailto:hello@tapit.co"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 5pm",
      action: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Innovation Drive",
      description: "San Francisco, CA 94105",
      action: "https://maps.google.com"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Friday",
      description: "8:00 AM - 5:00 PM PST",
      action: null
    }
  ];

  const socialLinks = [
    { icon: Linkedin, url: "https://linkedin.com/company/tapit", label: "LinkedIn" },
    { icon: Twitter, url: "https://twitter.com/tapit", label: "Twitter" },
    { icon: Github, url: "https://github.com/tapit", label: "GitHub" },
    { icon: Instagram, url: "https://instagram.com/tapit", label: "Instagram" }
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
            <h1 className="contact-hero-text text-5xl md:text-7xl font-display font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="contact-hero-text text-xl md:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business? Let's discuss your project and create something amazing together.
            </p>
            <div className="contact-hero-text flex items-center justify-center space-x-8 text-text-secondary">
              <div className="flex items-center space-x-2">
                <Clock className="w-6 h-6 text-primary" />
                <span>Quick Response</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-6 h-6 text-primary" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-6 h-6 text-primary" />
                <span>Global Reach</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div ref={formRef}>
              <div className="contact-form bg-gradient-dark border border-secondary/20 rounded-2xl p-8">
                <h2 className="text-3xl font-display font-bold mb-6 text-text-primary">
                  Start Your Project
                </h2>
                <p className="text-text-secondary mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-text-primary mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-text-secondary">
                      Thank you for reaching out. We'll be in touch soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-text-primary font-medium mb-2">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-secondary" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-12 pr-4 py-3 bg-background/50 border border-secondary/20 rounded-xl text-text-primary placeholder-text-secondary focus:border-primary focus:outline-none transition-colors"
                            placeholder="Your full name"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-text-primary font-medium mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-secondary" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-12 pr-4 py-3 bg-background/50 border border-secondary/20 rounded-xl text-text-primary placeholder-text-secondary focus:border-primary focus:outline-none transition-colors"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-text-primary font-medium mb-2">
                        Company Name
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-secondary" />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 bg-background/50 border border-secondary/20 rounded-xl text-text-primary placeholder-text-secondary focus:border-primary focus:outline-none transition-colors"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-text-primary font-medium mb-2">
                          Service Needed *
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-background/50 border border-secondary/20 rounded-xl text-text-primary focus:border-primary focus:outline-none transition-colors"
                        >
                          <option value="">Select a service</option>
                          <option value="web-development">Web Development</option>
                          <option value="mobile-app">Mobile App Development</option>
                          <option value="ai-ml">AI & Machine Learning</option>
                          <option value="ui-ux">UI/UX Design</option>
                          <option value="backend">Backend Development</option>
                          <option value="devops">DevOps & Security</option>
                          <option value="consultation">Consultation</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-text-primary font-medium mb-2">
                          Project Budget
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-background/50 border border-secondary/20 rounded-xl text-text-primary focus:border-primary focus:outline-none transition-colors"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-5k">Under $5,000</option>
                          <option value="5k-15k">$5,000 - $15,000</option>
                          <option value="15k-50k">$15,000 - $50,000</option>
                          <option value="50k-100k">$50,000 - $100,000</option>
                          <option value="over-100k">Over $100,000</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-text-primary font-medium mb-2">
                        Project Details *
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-text-secondary" />
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="w-full pl-12 pr-4 py-3 bg-background/50 border border-secondary/20 rounded-xl text-text-primary placeholder-text-secondary focus:border-primary focus:outline-none transition-colors resize-none"
                          placeholder="Tell us about your project, goals, and any specific requirements..."
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary py-4 flex items-center justify-center space-x-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div ref={infoRef} className="space-y-8">
              <div>
                <h2 className="text-3xl font-display font-bold mb-6 text-text-primary">
                  Contact Information
                </h2>
                <p className="text-text-secondary mb-8 leading-relaxed">
                  We're here to help you succeed. Reach out through any of these channels and let's start building something incredible together.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div
                      key={index}
                      className="info-card group bg-gradient-dark border border-secondary/20 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 card-hover"
                    >
                      <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-text-primary mb-2">
                        {info.title}
                      </h3>
                      <p className="text-primary font-medium mb-1">
                        {info.details}
                      </p>
                      <p className="text-text-secondary text-sm">
                        {info.description}
                      </p>
                      {info.action && (
                        <a
                          href={info.action}
                          className="inline-block mt-3 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                        >
                          Contact Now →
                        </a>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="bg-gradient-dark border border-secondary/20 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-text-primary mb-4">
                  Follow Us
                </h3>
                <p className="text-text-secondary mb-6">
                  Stay connected and follow our journey on social media.
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center hover:bg-primary/30 transition-colors group"
                        aria-label={social.label}
                      >
                        <IconComponent className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-gradient-dark border border-secondary/20 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-text-primary mb-4">
                  Quick Questions?
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-primary font-medium mb-1">How quickly can you start?</h4>
                    <p className="text-text-secondary text-sm">We typically begin new projects within 1-2 weeks of contract signing.</p>
                  </div>
                  <div>
                    <h4 className="text-primary font-medium mb-1">Do you offer ongoing support?</h4>
                    <p className="text-text-secondary text-sm">Yes, we provide comprehensive support and maintenance packages.</p>
                  </div>
                  <div>
                    <h4 className="text-primary font-medium mb-1">Can you work with our existing team?</h4>
                    <p className="text-text-secondary text-sm">Absolutely! We love collaborating with in-house teams.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}