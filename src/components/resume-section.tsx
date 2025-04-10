import React from "react";
import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function ResumeSection() {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/resume/Kunal_jaiswal_CV.pdf';
    link.download = 'Kunal_jaiswal_CV.pdf'; // This will be the filename when downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-primary/10 to-accent/10">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-2xl font-bold mb-6 flex items-center justify-center gap-2 text-primary">
          <FileText className="h-6 w-6" />
          Resume
        </h2>

        <div className="max-w-md mx-auto p-6 rounded-lg bg-card border shadow-sm">
          <p className="mb-6">
            Get a comprehensive overview of my skills, experience, and education in a single document.
          </p>

          <div className="hindi-quote mb-4">
            "HR sir/madam, agar ye resume dekh ke aap impressed ho, toh ek 'yes' se meri coding duniya badal dijiye!"
          </div>
          <div className="quote-translation mb-6">
            <em>"HR, if this resume impresses you, a simple 'yes' will change my coding world!"</em>
          </div>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  onClick={handleDownload}
                  className="animate-pulse-glow gap-2 w-full sm:w-auto"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>HR-ready PDF to impress 🚀</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
}
