
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
  const [transitionDone, setTransitionDone] = useState(false);
  
  useEffect(() => {
    // Check if transition was already shown
    const transitionShown = localStorage.getItem("openingTransitionShown");
    if (transitionShown === "true") {
      setTransitionDone(true);
    } else {
      // If not yet shown, listen for when it completes
      const checkInterval = setInterval(() => {
        const nowShown = localStorage.getItem("openingTransitionShown");
        if (nowShown === "true") {
          setTransitionDone(true);
          clearInterval(checkInterval);
        }
      }, 500);
      
      return () => clearInterval(checkInterval);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <OpeningTransition />
          {transitionDone && (
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
  );
};

export default App;
