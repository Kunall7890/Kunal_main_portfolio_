import React from "react";
import { Code, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Progress } from "@/components/ui/progress";

interface SkillProps {
  name: string;
  hindiText: string;
  englishText: string;
  delay: number;
  level: number;
  icon?: React.ReactNode;
}

const Skill: React.FC<SkillProps> = ({ name, hindiText, englishText, delay, level, icon }) => {
  return (
    <Card 
      className="group animate-slide-up border-primary/20 hover:border-primary/40 transition-colors" 
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {icon}
              <div className="font-semibold text-lg">{name}</div>
            </div>
            <Badge variant="secondary" className="flex items-center gap-1">
              <Star className="h-3 w-3" />
              {level}/5
            </Badge>
          </div>

          <Progress value={level * 20} className="h-2" />

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="text-left">
                <div className="hindi-quote text-sm group-hover:text-primary transition-colors">
                  {hindiText}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{englishText}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardContent>
    </Card>
  );
};

export function SkillsSection() {
  const skills = [
    {
      name: "React.js",
      hindiText: "React karta hoon, overreact nahi 😌",
      englishText: "I React, but don't overreact.",
      level: 5,
      icon: <Code className="h-5 w-5 text-primary" />
    },
    {
      name: "Node.js",
      hindiText: "Backend ka asli jugaad banta hai",
      englishText: "Node.js is my go-to backend hack.",
      level: 4,
      icon: <Code className="h-5 w-5 text-primary" />
    },
    {
      name: "MongoDB",
      hindiText: "Data store karne mein sabse tez",
      englishText: "Fastest in storing data.",
      level: 4,
      icon: <Code className="h-5 w-5 text-primary" />
    },
    {
      name: "C++",
      hindiText: "Suffer karo ya maza aata hai?",
      englishText: "Do you suffer or have fun?",
      level: 3,
      icon: <Code className="h-5 w-5 text-primary" />
    },
    {
      name: "JavaScript",
      hindiText: "Weekend plans jitne flexible, code utna hi adaptive",
      englishText: "Code as flexible as my weekend plans.",
      level: 5,
      icon: <Code className="h-5 w-5 text-primary" />
    },
    {
      name: "Git/GitHub",
      hindiText: "Push karo, pray karo 🙏",
      englishText: "Push and pray.",
      level: 4,
      icon: <Code className="h-5 w-5 text-primary" />
    },
    {
      name: "Next.js",
      hindiText: "Server-side magic with React vibes",
      englishText: "Server-side magic meets React vibes.",
      level: 4,
      icon: <Code className="h-5 w-5 text-primary" />
    },
    {
      name: "TailwindCSS",
      hindiText: "Utility classes se design bhi fast",
      englishText: "Design fast with utility classes.",
      level: 5,
      icon: <Code className="h-5 w-5 text-primary" />
    },
    {
      name: "Python",
      hindiText: "Indentation se chalti life, patience se code",
      englishText: "Life runs on indentation, code on patience.",
      level: 3,
      icon: <Code className="h-5 w-5 text-primary" />
    },
    {
      name: "SQL & NoSQL",
      hindiText: "Data ka har flavor—served fresh",
      englishText: "Every data flavor—served fresh.",
      level: 4,
      icon: <Code className="h-5 w-5 text-primary" />
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center gap-2 mb-8">
          <Code className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">Skills</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <Skill
              key={skill.name}
              name={skill.name}
              hindiText={skill.hindiText}
              englishText={skill.englishText}
              delay={index * 100}
              level={skill.level}
              icon={skill.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
