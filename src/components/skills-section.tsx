
import React from "react";
import { Code } from "lucide-react";

interface SkillProps {
  name: string;
  hindiText: string;
  englishText: string;
  delay: number;
}

const Skill: React.FC<SkillProps> = ({ name, hindiText, englishText, delay }) => {
  return (
    <div 
      className="skill-card group animate-slide-up" 
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="font-semibold text-lg">{name}</div>
      <div className="hindi-quote text-sm mt-1 group-hover:text-primary-foreground transition-colors">
        {hindiText}
      </div>
      <div className="quote-translation text-xs">
        <em>{englishText}</em>
      </div>
    </div>
  );
};

export function SkillsSection() {
  const skills = [
    {
      name: "React.js",
      hindiText: "React karta hoon, overreact nahi 😌",
      englishText: "I React, but don't overreact.",
    },
    {
      name: "Node.js",
      hindiText: "Backend ka asli jugaad banta hai",
      englishText: "Node.js is my go-to backend hack.",
    },
    {
      name: "MongoDB",
      hindiText: "Data store karne mein sabse tez",
      englishText: "Fastest in storing data.",
    },
    {
      name: "C++",
      hindiText: "Suffer karo ya maza aata hai?",
      englishText: "Do you suffer or have fun?",
    },
    {
      name: "JavaScript",
      hindiText: "Weekend plans jitne flexible, code utna hi adaptive",
      englishText: "Code as flexible as my weekend plans.",
    },
    {
      name: "Git/GitHub",
      hindiText: "Push karo, pray karo 🙏",
      englishText: "Push and pray.",
    },
    {
      name: "Next.js",
      hindiText: "Server-side magic with React vibes",
      englishText: "Server-side magic meets React vibes.",
    },
    {
      name: "TailwindCSS",
      hindiText: "Utility classes se design bhi fast",
      englishText: "Design fast with utility classes.",
    },
    {
      name: "Python",
      hindiText: "Indentation se chalti life, patience se code",
      englishText: "Life runs on indentation, code on patience.",
    },
    {
      name: "SQL & NoSQL",
      hindiText: "Data ka har flavor—served fresh",
      englishText: "Every data flavor—served fresh.",
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">
          <Code className="h-6 w-6" />
          Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <Skill
              key={skill.name}
              name={skill.name}
              hindiText={skill.hindiText}
              englishText={skill.englishText}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
