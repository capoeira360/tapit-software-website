"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Page enter animation
    gsap.fromTo(
      container,
      {
        opacity: 0,
        y: 50,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
      }
    );

    // Animate child elements with stagger
    const elements = container.querySelectorAll(
      ".animate-on-enter, h1, h2, h3, .hero-text, .service-card, .project-card, .team-member"
    );
    
    if (elements.length > 0) {
      gsap.fromTo(
        elements,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.2,
          ease: "power2.out",
        }
      );
    }
  }, [pathname]);

  return (
    <div ref={containerRef} className="page-transition">
      {children}
    </div>
  );
}

// Higher-order component for wrapping pages
export function withPageTransition<T extends object>(
  Component: React.ComponentType<T>
) {
  return function WrappedComponent(props: T) {
    return (
      <PageTransition>
        <Component {...props} />
      </PageTransition>
    );
  };
}