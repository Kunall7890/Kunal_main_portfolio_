
import React from "react";
import { Briefcase, ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectProps {
  title: string;
  description: string;
  hindiText: string;
  englishText: string;
  tech: string[];
  direction: "left" | "right";
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  hindiText,
  englishText,
  tech,
  direction,
}) => {
  return (
    <Card className={`project-card animate-slide-in-${direction}`}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          <div className="flex flex-wrap gap-2 mt-2">
            {tech.map((item) => (
              <Badge key={item} variant="secondary">
                {item}
              </Badge>
            ))}
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-4">{description}</p>
        <div className="hindi-quote text-sm">{hindiText}</div>
        <div className="quote-translation text-xs">
          <em>{englishText}</em>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" className="gap-1">
          <Github className="h-4 w-4" />
          Code
        </Button>
        <Button size="sm" className="gap-1">
          <ExternalLink className="h-4 w-4" />
          Live Demo
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
    },
    {
      title: "Real-Time Cinema Ticket Booking",
      description: "Full-stack app with seat selection & secure Stripe payments.",
      hindiText: "Seat pakki, mood mast.",
      englishText: "Secure seat, happy mood.",
      tech: ["MERN", "Socket.IO", "MongoDB", "Stripe"],
      direction: "right" as const,
    },
    {
      title: "AI-Powered Resume Screener",
      description: "ATS ranking with NLP-based similarity scoring.",
      hindiText: "Resume dekha, HR khush hua.",
      englishText: "Scanned resumes, impressed HR.",
      tech: ["Python", "FastAPI", "MongoDB", "React.js"],
      direction: "left" as const,
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">
          <Briefcase className="h-6 w-6" />
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Project key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
