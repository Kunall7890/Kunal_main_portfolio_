
import React, { useEffect, useRef } from "react";

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-in" | "slide-up" | "slide-in-left" | "slide-in-right";
  delay?: number;
}

export function ScrollAnimation({ 
  children, 
  className = "", 
  animation = "fade-in",
  delay = 0 
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Make sure we're working with an HTMLElement which has style property
            const target = entry.target as HTMLElement;
            target.classList.add("animated");
            target.classList.add(animation);
            
            if (delay > 0) {
              target.style.animationDelay = `${delay}ms`;
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [animation, delay]);

  return (
    <div ref={ref} className={`animate-on-scroll ${className}`}>
      {children}
    </div>
  );
}
