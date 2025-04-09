
import React, { useState } from "react";
import { Smile } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const jokes = [
  {
    hindi: "Mera code compile hua, toh mujhse zyada khushi kisi ko nahi.",
    english: "When my code compiles, I'm happier than anyone.",
  },
  {
    hindi: "git commit -m 'Chalo chal gaya'",
    english: "git commit -m 'Well, it worked'",
  },
  {
    hindi: "404 – Dimag nahi mila.",
    english: "404 – Mind not found.",
  },
  {
    hindi: "while(alive) { chai(); code(); }",
    english: "while(alive) { tea(); code(); }",
  },
  {
    hindi: "Lag raha tha bug hai, par woh feature nikla!",
    english: "Thought it was a bug, turned out to be a feature!",
  },
  {
    hindi: "Push karo, pray karo, tabhi merge hoga.",
    english: "Push and pray, then only merge.",
  },
  {
    hindi: "Jab tak code chal raha hai, tab tak main khush hoon.",
    english: "As long as the code runs, I'm happy.",
  },
];

export function JokesSection() {
  const [currentJoke, setCurrentJoke] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const getRandomJoke = () => {
    setIsAnimating(true);
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
    <section id="laughs" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">
          <Smile className="h-6 w-6" />
          Laughs in Code
        </h2>

        <div className="max-w-xl mx-auto">
          <Card className="overflow-hidden">
            <CardContent className="p-8">
              <div className={`space-y-4 transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                <div className="hindi-quote text-center text-lg">
                  {jokes[currentJoke].hindi}
                </div>
                <div className="quote-translation text-center">
                  <em>{jokes[currentJoke].english}</em>
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <Button 
                  onClick={getRandomJoke} 
                  className="group animate-bounce-light text-lg"
                >
                  <span className="mr-2">LOL()</span>
                  <span className="group-hover:rotate-12 transition-transform duration-200 inline-block">😂</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
