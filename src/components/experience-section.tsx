import React from "react";
import { Briefcase, Building2, Calendar, Coffee } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center gap-2 mb-8">
          <Briefcase className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">Experience</h2>
        </div>

        <Card className="animate-slide-up border-primary/20">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  <CardTitle>SD Intern @ NEXZEM Technologies</CardTitle>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  Sep 2023 – Nov 2023
                </div>
              </div>
              <div className="flex gap-2">
                <Badge variant="secondary">React.js</Badge>
                <Badge variant="outline">Node.js</Badge>
                <Badge variant="outline">MongoDB</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                  <div className="text-sm">
                    Built responsive web apps with React.js & Node.js + MongoDB—improved performance by 20%.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                  <div className="text-sm">
                    Refactored code to reduce API response time by 15%.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                  <div className="text-sm">
                    Implemented CI/CD pipelines with Jenkins and mastered Git workflows.
                  </div>
                </li>
              </ul>
            </div>
            
            <Separator className="my-4" />
            
            <div className="space-y-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="text-left">
                    <div className="hindi-quote text-lg">
                      "Bugs se dosti, chai se pyaar."
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>"Friends with bugs, in love with chai."</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Coffee className="h-4 w-4" />
                <em>"Learnt from bugs and chai breaks alike."</em>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
