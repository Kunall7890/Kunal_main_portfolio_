
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, Code } from "lucide-react";

const greetings = [
  { text: "Hello", language: "English" },
  { text: "नमस्ते", language: "Hindi" },
  { text: "こんにちは", language: "Japanese" },
  { text: "Bonjour", language: "French" },
  { text: "Hola", language: "Spanish" },
  { text: "Ciao", language: "Italian" },
  { text: "안녕하세요", language: "Korean" },
  { text: "Olá", language: "Portuguese" },
  { text: "مرحبا", language: "Arabic" },
  { text: "Здравствуйте", language: "Russian" },
];

export function OpeningTransition() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTransition, setShowTransition] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < greetings.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        // After showing all greetings, hide the transition
        setTimeout(() => {
          setShowTransition(false);
        }, 1000);
      }
    }, 400); // Change greeting every 400ms
    
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Save the transition state in localStorage to prevent showing it on every refresh
  useEffect(() => {
    if (!showTransition) {
      localStorage.setItem("openingTransitionShown", "true");
    }
  }, [showTransition]);

  // Check if the transition was already shown
  useEffect(() => {
    const transitionShown = localStorage.getItem("openingTransitionShown");
    if (transitionShown === "true") {
      setShowTransition(false);
    }
  }, []);

  return (
    <AnimatePresence>
      {showTransition && (
        <motion.div 
          className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { 
              duration: 0.8,
              ease: "easeInOut"
            }
          }}
        >
          <div className="flex items-center justify-center space-x-6 mb-8">
            <Coffee className="h-14 w-14 text-chai-dark animate-bounce-light" />
            <Code className="h-14 w-14 text-accent animate-bounce-light" style={{ animationDelay: "0.3s" }} />
          </div>
          
          <div className="text-center">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-2">
                {greetings[currentIndex].text}
              </h1>
              <p className="text-muted-foreground">
                {greetings[currentIndex].language}
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
