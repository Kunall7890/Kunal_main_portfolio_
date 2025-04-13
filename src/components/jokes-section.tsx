import React, { useState } from "react";
import { Smile, RefreshCw } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const jokes = [
  {
    hindi: "try { life.start() } catch(e) { chai.drink() }",
    english: "Life's try-catch block: When in doubt, drink chai!",
  },
  {
    hindi: "Meri zindagi ka status code 200 tab hoga, jab HR 'Yes' bolega! 🎯",
    english: "My life's status code will be 200 when HR says 'Yes'!",
  },
  {
    hindi: "CSS ki position fixed hai, par life ki position relative hai! 😅",
    english: "CSS position is fixed, but life's position is relative!",
  },
  {
    hindi: "while(alive) { chai.drink(); bugs.fix(); dreams.chase(); }",
    english: "The infinite loop of a developer's life!",
  },
  {
    hindi: "Error dhundne mein expert hoon, khushi dhundne mein rookie! 🔍",
    english: "Expert at finding errors, rookie at finding happiness!",
  },
  {
    hindi: "function life() { return 'Chai piyo, code karo, repeat!' }",
    english: "function life() { return 'Drink chai, code, repeat!' }",
  },
  {
    hindi: "Keyboard pe type karte hain, dil pe bug lagte hain! 💝",
    english: "Typing on keyboard, bugs hitting the heart!",
  },
  {
    hindi: "const mood = bugs ? 'Debug mode' : 'Chai break mode';",
    english: "const mood = bugs ? 'Debug mode' : 'Chai break mode';",
  },
  {
    hindi: "Git pull kiya dil ka, push kiya code ka! 🚀",
    english: "Git pulled the heart, pushed the code!",
  },
  {
    hindi: "Stack Overflow zindagi ka Stack Underflow ban gaya! 📚",
    english: "Stack Overflow became life's Stack Underflow!",
  }
];

export function JokesSection() {
  const [currentJoke, setCurrentJoke] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [rotations, setRotations] = useState(0);

  const getRandomJoke = () => {
    setIsAnimating(true);
    setRotations(prev => prev + 1);
    setTimeout(() => {
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * jokes.length);
      } while (newIndex === currentJoke);
      setCurrentJoke(newIndex);
      setIsAnimating(false);
    }, 500);
  };

  return (
    <section 
      id="laughs" 
      className="py-16 md:py-24 relative min-h-[60vh] flex items-center"
      style={{
        backgroundImage: 'url("/images/laugh-in-code.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/30" />
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex items-center gap-2 mb-8">
          <Smile className="h-6 w-6 text-primary animate-bounce" />
          <h2 className="text-2xl font-bold text-white">Code Memes.map(joke =&gt; 😂)</h2>
        </div>

        <div className="max-w-xl mx-auto">
          <Card className="border-primary/20 bg-background/40 backdrop-blur-sm transform hover:scale-[1.02] transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-lg text-white flex items-center justify-center gap-2">
                <span>Debug Your Mood</span>
                <span className="text-xs text-white/60">v{rotations}.0.1</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div 
                className={`space-y-6 transition-all duration-700 ease-out ${
                  isAnimating 
                    ? 'opacity-0 transform -translate-x-full scale-95' 
                    : 'opacity-100 transform translate-x-0 scale-100'
                }`}
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="w-full group">
                      <div className="space-y-4 p-4 rounded-lg hover:bg-white/5 transition-colors">
                        <div className="hindi-quote text-center text-lg font-medium text-white group-hover:scale-105 transition-transform">
                          {jokes[currentJoke].hindi}
                        </div>
                        <div className="text-sm text-white/80 italic">
                          {jokes[currentJoke].english}
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>console.log("😂")</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <Separator className="bg-white/20" />

                <div className="flex flex-col items-center gap-4">
                  <Button 
                    onClick={getRandomJoke} 
                    variant="outline"
                    className="group bg-background/40 backdrop-blur-sm border-white/20 text-white hover:bg-white/10 hover:scale-105 transition-all duration-300"
                  >
                    <RefreshCw 
                      className={`h-4 w-4 mr-2 transition-transform duration-500 ${
                        isAnimating ? 'rotate-180' : ''
                      }`} 
                    />
                    npm run joke
                  </Button>
                  <div className="text-xs text-white/60 italic">
                    {rotations} developers laughed at this joke 🎯
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
