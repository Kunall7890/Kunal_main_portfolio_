import React from "react";
import { Briefcase, Building2, Calendar, Coffee } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function ExperienceSection() {
  return (
    <section 
      id="experience" 
      className="py-16 md:py-24 relative min-h-[80vh]"
      style={{
        backgroundImage: 'url("/images/experience.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/30" />
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex items-center gap-2 mb-8">
          <Briefcase className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold text-white">The Code Chronicles</h2>
        </div>

        <Card className="animate-slide-up border-primary/20 bg-background/40 backdrop-blur-sm">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  <CardTitle className="text-white">Code Warrior @ NEXZEM Technologies</CardTitle>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/80">
                  <Calendar className="h-4 w-4" />
                  <span>Sep 2023 – Nov 2023 (3 months of debugging & chai ☕)</span>
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="secondary" className="bg-primary/20 text-white hover:scale-105 transition-transform">
                  React.js Ninja
                </Badge>
                <Badge variant="outline" className="border-white/20 text-white hover:scale-105 transition-transform">
                  Node.js Guru
                </Badge>
                <Badge variant="outline" className="border-white/20 text-white hover:scale-105 transition-transform">
                  MongoDB Master
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="hindi-quote text-white text-lg mb-4">
                "Pehle error tha, fir mentor ban gaya!" ✨
              </div>
              <div className="quote-translation text-white/80 mb-6">
                <em>"First I was the error, then became the mentor!"</em>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3 group">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 group-hover:scale-150 transition-transform" />
                  <div className="text-sm text-white/90">
                    Turned coffee into code and bugs into features! Built responsive web apps that made users go "Waah!" 
                    Performance boost: 20% faster, 100% smoother. 🚀
                  </div>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 group-hover:scale-150 transition-transform" />
                  <div className="text-sm text-white/90">
                    Made APIs so fast, they reached the server before being called! Response time: -15% 
                    (Yes, negative... we're that good! 😎)
                  </div>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 group-hover:scale-150 transition-transform" />
                  <div className="text-sm text-white/90">
                    Mastered the art of Git-fu! CI/CD pipelines so smooth, even Jenkins started smiling. 
                    Git commits cleaner than my room! 🧙‍♂️
                  </div>
                </li>
              </ul>
            </div>
            
            <Separator className="my-4 bg-white/20" />
            
            <div className="space-y-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="text-left w-full">
                    <div className="hindi-quote text-lg text-white">
                      "Jab code compile hua, tab jaake chai pee,
                      <br/>Jab error aaya, tab bhi chai pee!" 🍵
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>"When code compiled, I drank chai,
                    <br/>When errors came, still drank chai!"</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <div className="flex items-center gap-2 text-white/80">
                <Coffee className="h-4 w-4 animate-bounce" />
                <em>"In code we trust, in chai we must!"</em>
              </div>
            </div>

            <div className="text-xs text-white/60 italic mt-4">
              * Actual productivity may vary based on chai quality and WiFi strength 😄
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
