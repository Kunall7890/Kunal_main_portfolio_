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
      className="group animate-slide-up border-primary/20 hover:border-primary/40 transition-colors bg-background/40 backdrop-blur-sm" 
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {icon}
              <div className="font-semibold text-lg text-white">{name}</div>
            </div>
            <Badge variant="secondary" className="flex items-center gap-1">
              <Star className="h-3 w-3" />
              {level}/5
            </Badge>
          </div>

          <Progress value={level * 20} className="h-2" />

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="text-left w-full">
                <div className="hindi-quote text-sm group-hover:text-primary transition-colors text-white/90">
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
      hindiText: "Components banate banate life ke components bhi manage ho gaye! 🎭",
      englishText: "Managing life's components while building React components!",
      level: 5,
      icon: <Code className="h-5 w-5 text-primary" />
    },
    {
      name: "Node.js",
      hindiText: "Backend pe itna control, life mein utna hi chaos 🎯",
      englishText: "Perfect control on backend, chaos everywhere else!",
      level: 4,
      icon: <Code className="h-5 w-5 text-primary" />
    },
    {
      name: "MongoDB",
      hindiText: "Data ko aise sambhalta hoon, jaise maa parathe sambhalti hai 🥮",
      englishText: "I handle data like mom handles her secret recipes!",
      level: 4,
      icon: <Code className="h-5 w-5 text-primary" />
    },
    {
      name: "C++",
      hindiText: "Pointers se dosti, memory leaks se jung 💪",
      englishText: "Friends with pointers, battling memory leaks!",
      level: 3,
      icon: <Code className="h-5 w-5 text-primary" />
    },
    {
      name: "JavaScript",
      hindiText: "Promises nibhata hoon, async/await se pyaar hai 💝",
      englishText: "I keep my Promises, and await for true love!",
      level: 5,
      icon: <Code className="h-5 w-5 text-primary" />
    },
    {
      name: "Git/GitHub",
      hindiText: "Git commit karta hoon, relationships mein bhi commitment 🤝",
      englishText: "Committed in git, committed in life!",
      level: 4,
      icon: <Code className="h-5 w-5 text-primary" />
    },
    {
      name: "Next.js",
      hindiText: "Next level pe code, next level pe life 🚀",
      englishText: "Taking both code and life to the next level!",
      level: 4,
      icon: <Code className="h-5 w-5 text-primary" />
    },
    {
      name: "TailwindCSS",
      hindiText: "Classes itni clean, kaash life bhi utni organized hoti 🎨",
      englishText: "Classes so clean, wish life was this organized!",
      level: 5,
      icon: <Code className="h-5 w-5 text-primary" />
    },
    {
      name: "Python",
      hindiText: "Indentation perfect hai, life mein thoda space chahiye 🐍",
      englishText: "Perfect indentation, just need some space in life!",
      level: 3,
      icon: <Code className="h-5 w-5 text-primary" />
    },
    {
      name: "SQL & NoSQL",
      hindiText: "Relationships handle karta hoon, database mein aur life mein bhi 💫",
      englishText: "Handling relationships in databases and life!",
      level: 4,
      icon: <Code className="h-5 w-5 text-primary" />
    },
  ];

  return (
    <section 
      id="skills" 
      className="py-16 md:py-24 relative min-h-screen bg-cover bg-center bg-no-repeat" 
      style={{ 
        backgroundImage: "url('/images/snooker-background.png')",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex items-center gap-2 mb-8">
          <Code className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold text-white">Skills</h2>
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
