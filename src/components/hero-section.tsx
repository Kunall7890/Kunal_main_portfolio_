
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { GitHubIcon, LinkedInIcon } from "./social-icons";
import { ArrowDown, Coffee, Code } from "lucide-react";
import { ScrollAnimation } from "./scroll-animation";

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative pt-16 pb-8 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation animation="fade-in" className="space-y-4">
            <div className="flex justify-center items-center space-x-3 mb-6">
              <Coffee className="h-8 w-8 text-chai-dark animate-bounce-light" />
              <Code className="h-8 w-8 text-accent animate-bounce-light" style={{ animationDelay: "0.3s" }} />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 relative inline-block">
              <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-10 dark:opacity-15">
                <img 
                  src="/profile-image.jpg" 
                  alt="Profile Background" 
                  className="w-full h-full object-cover rounded-full blur-sm"
                  onError={(e) => {
                    // Fallback if the image fails to load
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                />
              </div>
              <span className="text-primary relative z-10">Kunal Jaiswal</span>
            </h1>
            
            <div className="mb-4">
              <p className="text-xl md:text-2xl font-medium">
                code crafter, bug squasher, and chai‑fueled dreamer ☕💻
              </p>
              <p className="text-muted-foreground mt-2">
                Turning coffee into clean, efficient code & products.
              </p>
            </div>

            <div className="space-y-3 max-w-2xl mx-auto">
              <div className="hindi-quote">"Code likhne mein maza hai, bug fix karne mein dum hai."</div>
              <div className="quote-translation mb-4">
                <em>"Coding is fun, fixing bugs shows your mettle."</em>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-up" delay={300} className="flex flex-wrap justify-center gap-4 mt-8">
            <Button asChild className="rounded-full">
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline" asChild className="rounded-full">
              <a href="#contact">Contact Me</a>
            </Button>
            <Button variant="ghost" asChild className="rounded-full">
              <a href="#about">About Me</a>
            </Button>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-up" delay={500} className="flex justify-center gap-4 mt-8">
            <a
              href="https://github.com/Kunall7890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <GitHubIcon className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/kunaljaiswal7877"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="h-6 w-6" />
            </a>
          </ScrollAnimation>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-light">
        <a href="#about" aria-label="Scroll to About section">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </a>
      </div>

      {/* Background elements */}
      <div className="absolute top-20 left-10 opacity-10 dark:opacity-5">
        <div className="text-7xl font-mono">{"{"}</div>
      </div>
      <div className="absolute bottom-20 right-10 opacity-10 dark:opacity-5">
        <div className="text-7xl font-mono">{"}"}</div>
      </div>
    </section>
  );
}
