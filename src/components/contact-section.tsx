import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function ContactSection() {
  return (
    <section 
      id="contact" 
      className="py-16 md:py-24 relative min-h-[70vh]"
      style={{
        backgroundImage: 'url("/images/contact-me.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/30" />
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex items-center gap-2 mb-8">
          <Mail className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold text-white">Let&apos;s Connect( ) ⇒ Magic 🪄</h2>
        </div>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="text-center max-w-2xl mx-auto mb-8">
              <div className="space-y-2">
                <div className="hindi-quote text-lg text-white">
                  "Ek message bhejo, response time guaranteed,
                  <br/>Chai pe charcha, ya code pe debate!" 🚀
                </div>
                <div className="text-sm text-white/80">
                  <em>"Send a message, response time guaranteed,
                  <br/>Chat over chai, or debate about code!"</em>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Promise.resolve(quickResponse) 😉</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <div className="max-w-xl mx-auto">
          <Card className="border-primary/20 bg-background/40 backdrop-blur-sm transform hover:scale-[1.02] transition-all duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-lg text-white">Connection Endpoints 🔌</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <a 
                href="mailto:jaiswallkunal786@gmail.com" 
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-300 group"
              >
                <Mail className="h-5 w-5 text-primary group-hover:rotate-12 transition-transform" />
                <div>
                  <div className="text-sm text-white/70">Email API</div>
                  <div className="font-medium text-white">jaiswallkunal786@gmail.com</div>
                  <div className="text-xs text-white/60">Response time: Faster than compiling React ⚡</div>
                </div>
              </a>

              <Separator className="bg-white/20" />

              <a 
                href="tel:+919119747693"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-300 group"
              >
                <Phone className="h-5 w-5 text-primary group-hover:rotate-12 transition-transform" />
                <div>
                  <div className="text-sm text-white/70">Voice Channel</div>
                  <div className="font-medium text-white">+919119747693</div>
                  <div className="text-xs text-white/60">No async/await, instant connection! 📞</div>
                </div>
              </a>

              <Separator className="bg-white/20" />

              <a 
                href="https://maps.google.com/?q=Roorkee,Uttarakhand" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-300 group"
              >
                <MapPin className="h-5 w-5 text-primary group-hover:rotate-12 transition-transform" />
                <div>
                  <div className="text-sm text-white/70">Base Location</div>
                  <div className="font-medium text-white">Roorkee, Uttarakhand</div>
                  <div className="text-xs text-white/60">Where chai meets code 🍵</div>
                </div>
              </a>
            </CardContent>
          </Card>

          <div className="flex gap-2 mt-6">
            <Button 
              asChild 
              variant="outline" 
              className="flex-1 bg-background/40 backdrop-blur-sm border-white/20 text-white hover:bg-white/10 hover:text-white group transition-all duration-300"
            >
              <a href="https://github.com/Kunall7890" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
                git checkout profile
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              className="flex-1 bg-background/40 backdrop-blur-sm border-white/20 text-white hover:bg-white/10 hover:text-white group transition-all duration-300"
            >
              <a href="https://linkedin.com/in/kunaljaiswal7877" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
                connect --professional
              </a>
            </Button>
          </div>

          <div className="text-center mt-6">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div className="hindi-quote text-sm text-white/80">
                    "Bug fix ke liye DM, chai pe discussion ke liye call!" 🎯
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>"DM for bug fixes, call for chai discussions!"</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </section>
  );
}
