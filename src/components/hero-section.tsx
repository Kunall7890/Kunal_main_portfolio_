import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { GitHubIcon, LinkedInIcon } from "./social-icons";
import { ArrowDown, Coffee, Code, Sparkles } from "lucide-react";
import { ScrollAnimation } from "./scroll-animation";

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative pt-16 pb-8 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/background.jpg')" }}
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation animation="fade-in" className="space-y-6">
            <div className="flex justify-center items-center space-x-3 mb-6">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Coffee className="h-8 w-8 text-chai-dark animate-bounce-light" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Fueled by chai ☕</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <Code className="h-8 w-8 text-accent animate-bounce-light" style={{ animationDelay: "0.3s" }} />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Powered by code 💻</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            
            <Card className="p-8 bg-background/80 backdrop-blur-sm border-primary/20 shadow-lg">
              <div className="text-center space-y-6">
                <div className="relative">
                  <div className="relative z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
                      <span className="text-primary">Kunal Jaiswal</span>
                    </h1>
                    
                    <div className="space-y-2">
                      <p className="text-xl md:text-2xl font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        code crafter, bug squasher, and chai‑fueled dreamer
                      </p>
                      <p className="text-muted-foreground">
                        Turning coffee into clean, efficient code & products.
                      </p>
                    </div>

                    <div className="flex justify-center gap-2">
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Sparkles className="h-3 w-3" />
                        Full Stack Developer
                      </Badge>
                      <Badge variant="outline">React Expert</Badge>
                      <Badge variant="outline">TypeScript</Badge>
                    </div>

                    <div className="space-y-3 max-w-2xl mx-auto">
                      <div className="hindi-quote text-lg">"Code likhne mein maza hai, bug fix karne mein dum hai."</div>
                      <div className="quote-translation mb-4 text-muted-foreground">
                        <em>"Coding is fun, fixing bugs shows your mettle."</em>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

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
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://github.com/Kunall7890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                      aria-label="GitHub"
                    >
                      <GitHubIcon className="h-6 w-6" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Check out my GitHub</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://linkedin.com/in/kunaljaiswal7877"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                      aria-label="LinkedIn"
                    >
                      <LinkedInIcon className="h-6 w-6" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </ScrollAnimation>
          </ScrollAnimation>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-light">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a href="#about" aria-label="Scroll to About section">
                <ArrowDown className="h-6 w-6 text-muted-foreground" />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Scroll down to learn more</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
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
