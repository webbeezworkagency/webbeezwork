import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import UIDesign from "./pages/Home";
import NewHome from "./pages/NewHome";
import WebDevelopment from "./pages/WebDevelopment";
import SEO from "./pages/SEO";
import SEA from "./pages/SEA";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background text-foreground">
          <Navigation />
          <Routes>
            <Route path="/" element={<NewHome />} />
            <Route path="/ui-ux-design" element={<UIDesign />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/seo" element={<SEO />} />
            <Route path="/sea" element={<SEA />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
