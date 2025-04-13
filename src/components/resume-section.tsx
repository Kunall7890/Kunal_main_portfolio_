import React from "react";
import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function ResumeSection() {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/resume/Kunal_Jaiswal_CV.pdf';
    link.download = 'Kunal_Jaiswal_CV.pdf'; // This will be the filename when downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      className="py-16 md:py-20 relative min-h-[60vh] flex items-center"
      style={{
        backgroundImage: 'url("/images/hire-me.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background/40" />
      <div className="container mx-auto px-4 md:px-6 text-center relative">
        <h2 className="text-2xl font-bold mb-6 flex items-center justify-center gap-2 text-white">
          <FileText className="h-6 w-6 text-primary" />
          The Epic Resume
        </h2>

        <div className="max-w-md mx-auto p-6 rounded-lg bg-background/40 backdrop-blur-sm border border-primary/20">
          <div className="space-y-6">
            <p className="text-white/90 text-lg">
              📄 Not just a resume, it's my life's code documentation! 
              <br/>
              <span className="text-primary/90">Features include:</span>
            </p>

            <ul className="text-white/90 text-left space-y-3">
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>No runtime errors in work history 😉</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Skills section with 99.9% uptime ⚡</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Education thoroughly unit-tested 🎓</span>
              </li>
            </ul>

            <div className="space-y-4">
              <div className="hindi-quote text-white">
                "Ek baar resume download karo, 
                <br/>fir life download ho jayegi!" 🚀
              </div>
              <div className="quote-translation text-white/80">
                <em>"Download the resume once,
                <br/>life downloads automatically!"</em>
              </div>
            </div>

            <div className="space-y-4">
              <div className="hindi-quote text-white">
                "HR bhaiya/didi, aapka ek click,
                <br/>meri career ka next epic!" ✨
              </div>
              <div className="quote-translation text-white/80">
                <em>"Dear HR, your one click,
                <br/>my career's next epic!"</em>
              </div>
            </div>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    onClick={handleDownload}
                    className="animate-pulse-glow gap-2 w-full sm:w-auto bg-primary/80 hover:bg-primary text-white border-none group transition-all duration-300 transform hover:scale-105"
                  >
                    <Download className="h-4 w-4 group-hover:animate-bounce" />
                    Download My Story.pdf
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Warning: Contains high levels of passion and chai ☕</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <p className="text-white/80 text-sm italic">
              * No HR was harmed in the making of this resume 😄
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
