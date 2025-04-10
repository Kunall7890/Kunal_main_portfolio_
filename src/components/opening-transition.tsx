import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, Code, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

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
  const [audioError, setAudioError] = useState(false);
  const [progress, setProgress] = useState(0);
  
  // Play sound effect when changing greetings
  useEffect(() => {
    if (showTransition && audioRef.current && !audioError) {
      audioRef.current.src = greetings[currentIndex].sound;
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(err => {
        console.log("Couldn't play greeting sound:", err);
        setAudioError(true);
      });
    }
  }, [currentIndex, showTransition, audioError]);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < greetings.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setProgress(((currentIndex + 1) / greetings.length) * 100);
      } else {
        // After showing all greetings, hide the transition
        setTimeout(() => {
          setShowTransition(false);
        }, 1000);
      }
    }, 400); // Change greeting every 400ms
    
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const handleAudioError = () => {
    console.log("Audio error occurred");
    setAudioError(true);
  };

  return (
    <AnimatePresence>
      {showTransition && (
        <motion.div 
          className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-background/95 backdrop-blur-sm"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { 
              duration: 0.8,
              ease: "easeInOut"
            }
          }}
        >
          <audio ref={audioRef} className="hidden" onError={handleAudioError} />
          
          <Card className="p-8 max-w-md w-full mx-4 bg-background/80 backdrop-blur-sm border-primary/20 shadow-lg">
            <div className="flex items-center justify-center space-x-6 mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Globe className="h-12 w-12 text-primary" />
              </motion.div>
              <div className="flex items-center space-x-4">
                <Coffee className="h-10 w-10 text-chai-dark animate-bounce-light" />
                <Code className="h-10 w-10 text-accent animate-bounce-light" style={{ animationDelay: "0.3s" }} />
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {greetings[currentIndex].text}
                </h1>
                <p className="text-sm text-muted-foreground font-medium">
                  {greetings[currentIndex].language}
                </p>
              </motion.div>

              <div className="pt-4">
                <Progress value={progress} className="h-1" />
              </div>
            </div>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
