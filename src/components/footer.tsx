
import React from "react";
import { ThemeToggle } from "./theme-toggle";
import { Coffee, Code, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            <Coffee className="h-5 w-5 text-chai-dark" />
            <Code className="h-5 w-5 text-accent" />
            <span className="font-medium">Kunal Jaiswal</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} - Made with 
              <Heart className="h-3 w-3 inline mx-1 text-red-500" />
              and lots of chai
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
