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
    <Card className={`project-card animate-slide-in-${direction} border-primary/20 hover:border-primary/40 transition-colors`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
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
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <Separator className="my-4" />
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="text-left">
              <div className="hindi-quote text-sm">{hindiText}</div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{englishText}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button 
          variant="outline" 
          size="sm" 
          className="gap-1"
          asChild
        >
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4" />
            Code
          </a>
        </Button>
        <Button 
          size="sm" 
          className="gap-1"
          asChild
        >
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export function ProjectsSection() {
  const projects = [
    {
      title: "Expense AI",
      description: "AI-powered expense tracker for real-time financial insights.",
      hindiText: "Kharch pe nazar, wallet khush.",
      englishText: "Keep an eye on expenses, keep your wallet happy.",
      tech: ["Next.js", "Python", "PostgreSQL", "TailwindCSS", "OpenAI"],
      direction: "left" as const,
      githubLink: "https://github.com/Kunall7890/expense-ai",
      demoLink: "https://expense-ai-demo.com",
      stars: 42
    },
    {
      title: "Real-Time Cinema Ticket Booking",
      description: "Full-stack app with seat selection & secure Stripe payments.",
      hindiText: "Seat pakki, mood mast.",
      englishText: "Secure seat, happy mood.",
      tech: ["MERN", "Socket.IO", "MongoDB", "Stripe"],
      direction: "right" as const,
      githubLink: "https://github.com/Kunall7890/cinema-booking",
      demoLink: "https://cinema-booking-demo.com",
      stars: 28
    },
    {
      title: "AI-Powered Resume Screener",
      description: "ATS ranking with NLP-based similarity scoring.",
      hindiText: "Resume dekha, HR khush hua.",
      englishText: "Scanned resumes, impressed HR.",
      tech: ["Python", "FastAPI", "MongoDB", "React.js"],
      direction: "left" as const,
      githubLink: "https://github.com/Kunall7890/resume-screener",
      demoLink: "https://resume-screener-demo.com",
      stars: 35
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center gap-2 mb-8">
          <Briefcase className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Project key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
