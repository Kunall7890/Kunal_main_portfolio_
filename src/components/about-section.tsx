import React from "react";
import { User, GraduationCap, School } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center gap-2 mb-8">
          <User className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">About Me</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <div className="bg-cover bg-center" style={{ backgroundImage: "url('/images/about-profile.jpg')" }}>
              <Card className="overflow-hidden h-full border-primary/20">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-primary/20 to-secondary/50 p-8 h-full flex flex-col justify-center">
                    <div className="flex flex-col items-center space-y-4">
                      <Avatar className="h-24 w-24 border-4 border-primary/20">
                        <AvatarImage src="/images/about-profile.jpg" alt="Profile Picture" className="object-cover" />
                        <AvatarFallback>KJ</AvatarFallback>
                      </Avatar>
                      <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        Kunal Jaiswal
                      </div>
                      <div className="text-xl text-muted-foreground text-center">
                        Software Developer from Roorkee, Uttarakhand
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
                        "Neend se zyada bug fix karna pasand hai."
                      </div>
                      <div className="quote-translation text-center text-muted-foreground">
                        <em>"I prefer fixing bugs over sleeping."</em>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="space-y-8">
              <Card className="p-6 border-primary/20">
                <p className="text-lg leading-relaxed">
                  I'm a <span className="text-primary font-semibold">Software Developer</span> with a passion for
                  building intuitive, efficient applications. I specialize in
                  full-stack development with a focus on React.js, Node.js, and
                  modern web technologies.
                </p>
              </Card>

              <Card className="p-6 border-primary/20">
                <div className="space-y-4">
                  <div className="hindi-quote text-lg">
                    "Mummy bolti thi doctor bano, maine boli 'main to code likhoonga'."
                  </div>
                  <div className="quote-translation text-muted-foreground">
                    <em>"My mom said become a doctor, I said I'll write code instead."</em>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-primary/20">
                <p className="text-lg leading-relaxed">
                  I write code that (usually) compiles, debug with patience, and solve
                  real-world problems—though my sleep schedule is negotiable!
                </p>
              </Card>

              <Card className="p-6 border-primary/20">
                <div className="space-y-4">
                  <div className="hindi-quote text-lg">
                    "Error messages mere liye motivational quotes jaise ho gaye hain – roz naye, roz confuse."
                  </div>
                  <div className="quote-translation text-muted-foreground">
                    <em>"Error messages are like motivational quotes for me – new every day, equally confusing."</em>
                  </div>
                </div>
              </Card>

              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                <div className="space-y-4">
                  <Card className="border-primary/20">
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

                  <Card className="border-primary/20">
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
