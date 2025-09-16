"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { 
  Target, 
  Users, 
  Lightbulb, 
  Award, 
  Globe, 
  Zap,
  Heart,
  Code,
  Smartphone,
  Brain
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const heroRef = useRef<HTMLElement>(null);
  const storyRef = useRef<HTMLElement>(null);
  const teamRef = useRef<HTMLElement>(null);
  const valuesRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from(".about-hero-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out"
      });

      // Story section animation
      gsap.from(".story-content", {
        scrollTrigger: {
          trigger: storyRef.current,
          start: "top 80%",
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      });

      // Team cards animation
      gsap.from(".team-card", {
        scrollTrigger: {
          trigger: teamRef.current,
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
      });

      // Values animation
      gsap.from(".value-item", {
        scrollTrigger: {
          trigger: valuesRef.current,
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

  const teamMembers = [
    {
      name: "Alex Rodriguez",
      role: "CEO & Founder",
      expertise: "Strategic Vision & Leadership",
      description: "10+ years in digital transformation, leading teams to create innovative solutions.",
      icon: Target
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      expertise: "Technical Architecture",
      description: "Expert in scalable systems and emerging technologies, driving technical excellence.",
      icon: Code
    },
    {
      name: "Marcus Johnson",
      role: "Head of Design",
      expertise: "UI/UX & Brand Design",
      description: "Award-winning designer with a passion for creating intuitive user experiences.",
      icon: Lightbulb
    },
    {
      name: "Dr. Emily Watson",
      role: "AI Research Lead",
      expertise: "Machine Learning & AI",
      description: "PhD in Computer Science, specializing in AI solutions for business applications.",
      icon: Brain
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We push boundaries and embrace cutting-edge technologies to deliver groundbreaking solutions."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We're passionate about what we do and committed to exceeding client expectations."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and close partnership with our clients."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for perfection in every project, delivering quality that stands the test of time."
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
            <h1 className="about-hero-text text-5xl md:text-7xl font-display font-bold mb-6">
              About <span className="gradient-text">TAPit</span>
            </h1>
            <p className="about-hero-text text-xl md:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
              We're a team of passionate innovators dedicated to transforming businesses through cutting-edge digital solutions.
            </p>
            <div className="about-hero-text flex items-center justify-center space-x-8 text-text-secondary">
              <div className="flex items-center space-x-2">
                <Globe className="w-6 h-6 text-primary" />
                <span>Global Reach</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-6 h-6 text-primary" />
                <span>Expert Team</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-6 h-6 text-primary" />
                <span>Proven Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section ref={storyRef} className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="story-content">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-6 text-text-secondary leading-relaxed">
                <p className="text-lg">
                  Founded in 2018, TAPit emerged from a simple yet powerful vision: to bridge the gap between innovative technology and real-world business needs. Our journey began when our founders recognized that many businesses were struggling to adapt to the digital revolution.
                </p>
                <p className="text-lg">
                  What started as a small team of developers and designers has grown into a comprehensive digital solutions company. We've helped over 500 businesses transform their operations through custom web applications, mobile apps, and AI-powered systems.
                </p>
                <p className="text-lg">
                  Today, we're proud to be at the forefront of digital innovation, constantly exploring new technologies and methodologies to deliver exceptional results for our clients.
                </p>
              </div>
            </div>
            <div className="story-content">
              <div className="bg-gradient-dark rounded-2xl p-8 border border-secondary/20">
                <h3 className="text-2xl font-display font-semibold mb-6 text-text-primary">Our Mission</h3>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  To empower businesses with innovative digital solutions that drive growth, enhance efficiency, and create meaningful connections with their customers.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">500+</div>
                    <div className="text-text-secondary">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">6</div>
                    <div className="text-text-secondary">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              The brilliant minds behind TAPit's innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => {
              const IconComponent = member.icon;
              return (
                <div
                  key={index}
                  className="team-card group bg-background/50 backdrop-blur-sm border border-secondary/20 rounded-2xl p-6 hover:bg-background/70 transition-all duration-500 card-hover"
                >
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                      <IconComponent className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-display font-semibold mb-2 text-text-primary">
                      {member.name}
                    </h3>
                    <div className="text-primary font-medium mb-2">{member.role}</div>
                    <div className="text-sm text-text-secondary mb-3">{member.expertise}</div>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="value-item text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-4 text-text-primary">
                    {value.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {value.description}
                  </p>
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
              Ready to Work <span className="gradient-text">Together?</span>
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Let's discuss how we can help transform your business with innovative digital solutions.
            </p>
            <button className="btn-primary text-lg px-8 py-4 flex items-center space-x-2 mx-auto group">
              <span>Get In Touch</span>
              <Zap className="w-5 h-5 transition-transform group-hover:rotate-12" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}