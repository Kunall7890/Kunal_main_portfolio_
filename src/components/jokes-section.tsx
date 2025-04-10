import React, { useState } from "react";
import { Smile, RefreshCw } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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
    <section id="laughs" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center gap-2 mb-8">
          <Smile className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">Laughs in Code</h2>
        </div>

        <div className="max-w-xl mx-auto">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-lg">Developer Humor</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className={`space-y-6 transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="w-full">
                      <div className="hindi-quote text-center text-lg font-medium">
                        {jokes[currentJoke].hindi}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{jokes[currentJoke].english}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <Separator />

                <div className="flex justify-center">
                  <Button 
                    onClick={getRandomJoke} 
                    variant="outline"
                    className="group"
                  >
                    <RefreshCw className="h-4 w-4 mr-2 group-hover:rotate-180 transition-transform duration-500" />
                    Next Joke
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
