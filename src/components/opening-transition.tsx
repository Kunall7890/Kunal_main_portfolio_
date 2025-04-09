
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, Code } from "lucide-react";

const greetings = [
  { text: "Hello", language: "English", sound: "/sounds/hello_english.mp3" },
  { text: "नमस्ते", language: "Hindi", sound: "/sounds/hello_hindi.mp3" },
  { text: "こんにちは", language: "Japanese", sound: "/sounds/hello_japanese.mp3" },
  { text: "Bonjour", language: "French", sound: "/sounds/hello_french.mp3" },
  { text: "Hola", language: "Spanish", sound: "/sounds/hello_spanish.mp3" },
  { text: "Ciao", language: "Italian", sound: "/sounds/hello_italian.mp3" },
  { text: "안녕하세요", language: "Korean", sound: "/sounds/hello_korean.mp3" },
  { text: "Olá", language: "Portuguese", sound: "/sounds/hello_portuguese.mp3" },
  { text: "مرحبا", language: "Arabic", sound: "/sounds/hello_arabic.mp3" },
  { text: "Здравствуйте", language: "Russian", sound: "/sounds/hello_russian.mp3" },
];

export function OpeningTransition() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTransition, setShowTransition] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Play sound effect when changing greetings
  useEffect(() => {
    if (showTransition && audioRef.current) {
      audioRef.current.src = greetings[currentIndex].sound;
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(err => {
        console.log("Couldn't play greeting sound:", err);
      });
    }
  }, [currentIndex, showTransition]);
  
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
          <audio ref={audioRef} className="hidden" />
          
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
