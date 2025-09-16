"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollAnimationOptions {
  trigger?: string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  toggleActions?: string;
  animation?: {
    from: gsap.TweenVars;
    to: gsap.TweenVars;
  };
  stagger?: number;
}

export function useScrollAnimation(
  options: ScrollAnimationOptions = {}
) {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const {
      trigger = element,
      start = "top 80%",
      end = "bottom 20%",
      scrub = false,
      toggleActions = "play none none reverse",
      animation = {
        from: { opacity: 0, y: 50 },
        to: { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      },
      stagger = 0
    } = options;

    // Find all animatable elements
    const targets = element.querySelectorAll(
      ".animate-on-scroll, .service-card, .project-card, .team-member, .stat-item, .feature-card"
    );

    const elementsToAnimate = targets.length > 0 ? targets : [element];

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger,
        start,
        end,
        scrub,
        toggleActions,
        onEnter: () => {
          gsap.fromTo(
            elementsToAnimate,
            animation.from,
            {
              ...animation.to,
              stagger: stagger
            }
          );
        },
        onLeave: () => {
          if (!scrub) {
            gsap.to(elementsToAnimate, {
              opacity: 0.8,
              duration: 0.3
            });
          }
        },
        onEnterBack: () => {
          gsap.to(elementsToAnimate, {
            opacity: 1,
            duration: 0.3
          });
        }
      }
    });

    return () => {
      tl.kill();
    };
  }, []);

  return elementRef;
}

// Predefined animation presets
export const animationPresets = {
  fadeUp: {
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
  },
  fadeLeft: {
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
  },
  fadeRight: {
    from: { opacity: 0, x: 50 },
    to: { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
  },
  scale: {
    from: { opacity: 0, scale: 0.8 },
    to: { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" }
  },
  rotate: {
    from: { opacity: 0, rotation: -10, scale: 0.9 },
    to: { opacity: 1, rotation: 0, scale: 1, duration: 1, ease: "power2.out" }
  }
};

// Hook for parallax effects
export function useParallax(speed: number = 0.5) {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const yPos = progress * speed * 100;
          gsap.set(element, { y: yPos });
        }
      }
    });

    return () => {
      tl.kill();
    };
  }, [speed]);

  return elementRef;
}

// Hook for magnetic hover effects
export function useMagneticHover(strength: number = 0.3) {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(element, {
        x: x * strength,
        y: y * strength,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)"
      });
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength]);

  return elementRef;
}