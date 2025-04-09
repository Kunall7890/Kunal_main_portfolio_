
import React from "react";
import { User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">
          <User className="h-6 w-6" />
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <Card className="overflow-hidden h-full">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-primary/20 to-secondary/50 p-6 h-full flex flex-col justify-center">
                  <div className="text-4xl font-bold mb-4 text-center">
                    Kunal Jaiswal
                  </div>
                  <div className="text-xl mb-6 text-center text-muted-foreground">
                    Software Developer from Roorkee, Uttarakhand
                  </div>
                  <div className="text-center mb-4">
                    B.Tech in Computer Science from Graphic Era Hill University
                  </div>
                  <div className="hindi-quote text-center">
                    "Neend se zyada bug fix karna pasand hai."
                  </div>
                  <div className="quote-translation text-center">
                    <em>"I prefer fixing bugs over sleeping."</em>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-7">
            <div className="space-y-6">
              <p className="text-lg">
                I'm a <strong>Software Developer</strong> with a passion for
                building intuitive, efficient applications. I specialize in
                full-stack development with a focus on React.js, Node.js, and
                modern web technologies.
              </p>

              <div>
                <div className="hindi-quote">
                  "Mummy bolti thi doctor bano, maine boli 'main to code likhoonga'."
                </div>
                <div className="quote-translation">
                  <em>"My mom said become a doctor, I said I'll write code instead."</em>
                </div>
              </div>

              <p>
                I write code that (usually) compiles, debug with patience, and solve
                real-world problems—though my sleep schedule is negotiable!
              </p>

              <div>
                <div className="hindi-quote">
                  "Error messages mere liye motivational quotes jaise ho gaye hain – roz naye, roz confuse."
                </div>
                <div className="quote-translation">
                  <em>"Error messages are like motivational quotes for me – new every day, equally confusing."</em>
                </div>
              </div>

              <div className="space-y-4 mt-6">
                <h3 className="text-xl font-semibold">Education</h3>
                <div className="space-y-3">
                  <div className="border-l-2 border-primary pl-4 py-1">
                    <div className="font-medium">B.Tech in Computer Science</div>
                    <div className="text-sm text-muted-foreground">
                      Graphic Era Hill University, Dehradun (Jun 2020 – Jun 2024)
                    </div>
                    <div className="text-sm mt-1">
                      Strong foundation in algorithms, data structures, and system design.
                    </div>
                  </div>
                  <div className="border-l-2 border-primary pl-4 py-1">
                    <div className="font-medium">Intermediate (Class XII)</div>
                    <div className="text-sm text-muted-foreground">
                      Greenway Modern Sr. Sec. School, Roorkee (Mar 2019 – Mar 2020)
                    </div>
                    <div className="text-sm mt-1">
                      Solid academic background with hands-on learning.
                    </div>
                    <div className="hindi-quote text-sm mt-2">
                      "School ke din, homework se zyada debug karte the."
                    </div>
                    <div className="quote-translation text-sm">
                      <em>"School days: debugged more than I did homework."</em>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
