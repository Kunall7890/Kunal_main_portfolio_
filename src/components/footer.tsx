import React from "react";
import { ThemeToggle } from "./theme-toggle";
import { Coffee, Code, Heart, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function Footer() {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Kunall7890",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/kunaljaiswal7877",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:jaiswallkunal786@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="py-8 border-t border-primary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-2">
            <Coffee className="h-5 w-5 text-primary" />
            <Code className="h-5 w-5 text-accent" />
            <span className="font-medium">Kunal Jaiswal</span>
          </div>

          <Separator className="w-full max-w-xs" />

          <div className="flex items-center gap-4">
            <TooltipProvider>
              {socialLinks.map((link) => (
                <Tooltip key={link.label}>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9"
                      asChild
                    >
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                      >
                        <link.icon className="h-4 w-4" />
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{link.label}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} - Made with 
              <Heart className="h-3 w-3 inline mx-1 text-red-500 animate-pulse" />
              and lots of chai
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
