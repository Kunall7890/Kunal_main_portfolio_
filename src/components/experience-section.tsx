
import React from "react";
import { Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">
          <Briefcase className="h-6 w-6" />
          Experience
        </h2>

        <Card className="animate-slide-up">
          <CardHeader>
            <CardTitle className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <div>SD Intern @ NEXZEM Technologies</div>
              <div className="text-sm text-muted-foreground">Sep 2023 – Nov 2023</div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Built responsive web apps with React.js & Node.js + MongoDB—improved performance by 20%.</li>
                <li>Refactored code to reduce API response time by 15%.</li>
                <li>Implemented CI/CD pipelines with Jenkins and mastered Git workflows.</li>
              </ul>
            </div>
            
            <div>
              <div className="hindi-quote">
                "Bugs se dosti, chai se pyaar."
              </div>
              <div className="quote-translation">
                <em>"Friends with bugs, in love with chai."</em>
              </div>
              <div className="quote-translation">
                <em>"Learnt from bugs and chai breaks alike."</em>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
