import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { OpeningTransition } from "./components/opening-transition";
import { SoundPlayer } from "./components/sound-player";
import { useState, useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  const [audioAvailable, setAudioAvailable] = useState(true);
  
  useEffect(() => {
    // Check if background audio file exists
    fetch("/sounds/background-ambience.mp3", { method: 'HEAD' })
      .then(response => {
        if (!response.ok) {
          setAudioAvailable(false);
          console.log("Background audio file not available");
        }
      })
      .catch(() => {
        setAudioAvailable(false);
        console.log("Background audio file not available");
      });
  }, []);

  return (
    <div className="homepage">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <OpeningTransition />
            {audioAvailable && (
              <SoundPlayer 
                src="/sounds/background-ambience.mp3" 
                loop={true} 
                volume={0.2} 
                playOnMount={true} 
              />
            )}
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </div>
  );
};

export default App;
