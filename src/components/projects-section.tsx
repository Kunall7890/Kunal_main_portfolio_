import React from "react";
import { Briefcase, ExternalLink, Github, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";

interface ProjectProps {
  title: string;
  description: string;
  hindiText: string;
  englishText: string;
  tech: string[];
  direction: "left" | "right";
  githubLink?: string;
  demoLink?: string;
  stars?: number;
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  hindiText,
  englishText,
  tech,
  direction,
  githubLink,
  demoLink,
  stars,
}) => {
  return (
    <Card className={`project-card animate-slide-in-${direction} border-primary/20 hover:border-primary/40 transition-colors bg-background/40 backdrop-blur-sm`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl text-white">{title}</CardTitle>
            <CardDescription className="mt-2">
              <div className="flex flex-wrap gap-2">
                {tech.map((item) => (
                  <Badge key={item} variant="outline" className="text-xs">
                    {item}
                  </Badge>
                ))}
              </div>
            </CardDescription>
          </div>
          {stars && (
            <Badge variant="secondary" className="flex items-center gap-1">
              <Star className="h-3 w-3" />
              {stars}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-white/80 mb-4">{description}</p>
        <Separator className="my-4" />
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="text-left w-full">
              <div className="hindi-quote text-sm text-white/90">{hindiText}</div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{englishText}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardContent>
      <CardFooter className="flex gap-2">
        {githubLink && (
          <Button asChild variant="outline" size="sm" className="flex-1">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </a>
          </Button>
        )}
        {demoLink && (
          <Button asChild variant="outline" size="sm" className="flex-1">
            <a href={demoLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export function ProjectsSection() {
  const projects = [
    {
      title: "Expense AI",
      description: "Your personal finance guru that turns your spending habits into smart decisions. It's like having a CA who never judges your chai expenses! 🧮",
      hindiText: "Paisa bachao, tension bhagao! AI bolta hai - 'Arre bhai, itna Swiggy?!' 🤖💰",
      englishText: "Save money, skip stress! AI be like - 'Bruh, that much on Swiggy?!'",
      tech: ["Next.js", "Python", "PostgreSQL", "TailwindCSS", "OpenAI"],
      direction: "left" as const,
      githubLink: "https://github.com/Kunall7890/Expense_AI",
      demoLink: "https://expense-ai-seven.vercel.app/",
      stars: 42
    },
    {
      title: "Real-Time Cinema Ticket Booking",
      description: "Book your movie seats faster than you can say 'popcorn'! Real-time updates so fast, you'll think it's running on chai power! 🎬",
      hindiText: "Cinema hall mein seat aur dil mein beat, dono real-time mein book ho jaate hain! 🎥🍿",
      englishText: "Seats in the hall and beats in the heart, both booked in real-time!",
      tech: ["MERN", "Socket.IO", "MongoDB", "Stripe"],
      direction: "right" as const,
      githubLink: "https://github.com/Kunall7890/reel-time-ticketing-hub",
      demoLink: "https://reel-time-ticketing-hub-kunals-projects-3cb1dbf9.vercel.app/",
      stars: 28
    },
    {
      title: "AI-Powered Resume Screener",
      description: "Your resume's best friend! It's like having a career counselor who actually understands both tech and your mom's expectations! 📝",
      hindiText: "Resume ko AI se judge karwao, HR ko impress karwao! Mummy khush, future bright! ✨",
      englishText: "Let AI judge your resume, impress HR! Happy mom, bright future!",
      tech: ["Python", "FastAPI", "MongoDB", "React.js"],
      direction: "left" as const,
      githubLink: "https://github.com/Kunall7890/Ai-powered-resume-screener",
      demoLink: "https://ai-powered-resume-screener-bwxp.vercel.app/",
      stars: 35
    },
  ];

  return (
    <section 
      id="projects" 
      className="py-16 md:py-24 relative min-h-screen bg-cover bg-center bg-no-repeat" 
      style={{ 
        backgroundImage: "url('/images/ram-mandir.jpg')",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex items-center gap-2 mb-8">
          <Briefcase className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold text-white">Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Project 
              key={project.title} 
              {...project} 
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="hindi-quote text-lg text-white/90">
                  "Har project ek kahani, har bug ek lesson, aur har deployment ek adventure!" 🚀
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>"Every project a story, every bug a lesson, and every deployment an adventure!"</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
}
