import React from "react";
import { User, GraduationCap, School, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function AboutSection() {
  return (
    <section 
      id="about" 
      className="py-16 md:py-24 relative min-h-screen bg-cover bg-center bg-no-repeat" 
      style={{ 
        backgroundImage: "url('/images/mountain-background.png')",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex items-center gap-2 mb-8">
          <User className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold text-white">About Me</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <Card className="overflow-hidden h-full border-primary/20 bg-background/40 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/30 p-8 h-full flex flex-col justify-center">
                  <div className="flex flex-col items-center space-y-4">
                    <Avatar className="h-24 w-24 border-4 border-primary/20">
                      <AvatarImage src="/images/about-profile.jpg" alt="Profile Picture" className="object-cover" />
                      <AvatarFallback>KJ</AvatarFallback>
                    </Avatar>
                    <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Kunal Jaiswal
                    </div>
                    <div className="text-xl text-muted-foreground text-center">
                      Full Stack Developer & Chai Connoisseur 🍵
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="secondary">Full Stack Dev</Badge>
                      <Badge variant="outline">React Expert</Badge>
                      <Badge variant="outline">TypeScript</Badge>
                    </div>
                    <Separator className="my-4" />
                    <div className="text-center">
                      B.Tech in Computer Science from Graphic Era Hill University
                    </div>
                    <div className="hindi-quote text-center text-lg">
                      "Bugs ko chai pe bulata hoon, fir unhe fix kar deta hoon!"
                    </div>
                    <div className="quote-translation text-center text-muted-foreground">
                      <em>"I invite bugs for chai, then fix them with style!"</em>
                    </div>
                  </div>
                </div>

                {/* Achievements Section */}
                <div className="mt-6 space-y-4">
                  <Card className="border-primary/20 bg-background/40 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Trophy className="h-5 w-5 text-primary" />
                        <h3 className="text-lg font-semibold text-white">Achievements</h3>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                          <div>
                            <div className="font-medium text-white">Hackathon Winner</div>
                            <div className="text-sm text-muted-foreground">1st place in College Hackathon 2023</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                          <div>
                            <div className="font-medium text-white">5⭐ on CodeChef</div>
                            <div className="text-sm text-muted-foreground">Competitive Programming Expert</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                          <div>
                            <div className="font-medium text-white">Open Source Contributor</div>
                            <div className="text-sm text-muted-foreground">50+ contributions on GitHub</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                          <div>
                            <div className="font-medium text-white">Web Dev Champion</div>
                            <div className="text-sm text-muted-foreground">Best Project Award in College Tech Fest</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <div className="hindi-quote text-center text-sm">
                    "Har achievement ek nayi kahani, har bug fix ek nayi seekh"
                  </div>
                  <div className="quote-translation text-center text-xs text-muted-foreground">
                    <em>"Every achievement a new story, every bug fix a new lesson"</em>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-7">
            <div className="space-y-8">
              <Card className="p-6 border-primary/20 bg-background/40 backdrop-blur-sm">
                <p className="text-lg leading-relaxed text-white/90">
                  Hey there! I'm a <span className="text-primary font-semibold">Full Stack Developer</span> who turns 
                  caffeine into code and bugs into features. When I'm not having deep conversations with ChatGPT about 
                  semicolons, you'll find me crafting pixel-perfect UIs and making databases do my bidding.
                </p>
              </Card>

              <Card className="p-6 border-primary/20 bg-background/40 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="hindi-quote text-lg">
                    "Log kehte hain 'touch grass', main kehta hoon 'let's debug first'!"
                  </div>
                  <div className="quote-translation text-muted-foreground">
                    <em>"People say 'touch grass', I say 'let's debug first'!"</em>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-primary/20 bg-background/40 backdrop-blur-sm">
                <p className="text-lg leading-relaxed text-white/90">
                  My relationship status? "Committed to Git." My daily routine? "Eat, Sleep, Code, Debug, Repeat" 
                  (with strategic chai breaks). I speak multiple languages: JavaScript, TypeScript, Python, and 
                  occasionally Human!
                </p>
              </Card>

              <Card className="p-6 border-primary/20 bg-background/40 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="hindi-quote text-lg">
                    "Zindagi mein do cheez kabhi waste nahi hoti - accha code aur acchi chai!"
                  </div>
                  <div className="quote-translation text-muted-foreground">
                    <em>"Two things are never wasted in life - good code and good chai!"</em>
                  </div>
                </div>
              </Card>

              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold text-white">Education</h3>
                </div>
                <div className="space-y-4">
                  <Card className="border-primary/20 bg-background/40 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-primary/10 rounded-full">
                          <GraduationCap className="h-5 w-5 text-primary" />
                        </div>
                        <div className="space-y-2">
                          <div className="font-medium">B.Tech in Computer Science</div>
                          <div className="text-sm text-muted-foreground">
                            Graphic Era Hill University, Dehradun (Jun 2020 – Jun 2024)
                          </div>
                          <div className="text-sm">
                            Strong foundation in algorithms, data structures, and system design.
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/20 bg-background/40 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-primary/10 rounded-full">
                          <School className="h-5 w-5 text-primary" />
                        </div>
                        <div className="space-y-2">
                          <div className="font-medium">Intermediate (Class XII)</div>
                          <div className="text-sm text-muted-foreground">
                            Greenway Modern Sr. Sec. School, Roorkee (Mar 2019 – Mar 2020)
                          </div>
                          <div className="text-sm">
                            Solid academic background with hands-on learning.
                          </div>
                          <div className="space-y-2 mt-2">
                            <div className="hindi-quote text-sm">
                              "School ke din, homework se zyada debug karte the."
                            </div>
                            <div className="quote-translation text-sm text-muted-foreground">
                              <em>"School days: debugged more than I did homework."</em>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
