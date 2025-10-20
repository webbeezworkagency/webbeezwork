import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UIDesign from "./pages/Ui";
import Home from "./pages/Home";
import WebDevelopment from "./pages/WebDevelopment";
import SEO from "./pages/SEO";
import SEA from "./pages/SEA";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import About from "./pages/About";
import OnlineVisibilityCheck from "./pages/OnlineVisibilityCheck";
import GoogleMyBusiness from "./pages/GoogleMyBusiness";
import ContentCreation from "./pages/ContentCreation";
import GoogleAdsManagement from "./pages/GoogleAdsManagement";
import SocialMediaManagement from "./pages/SocialMediaManagement";
import TrainingSession from "./pages/TrainingSession";
import Partnerships from "./pages/Partnerships";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-black text-foreground">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ui-ux-design" element={<UIDesign />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/seo" element={<SEO />} />
            <Route path="/sea" element={<SEA />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/case-studies" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/online-visibility-check" element={<OnlineVisibilityCheck />} />
            <Route path="/google-my-business" element={<GoogleMyBusiness />} />
            <Route path="/content-creation" element={<ContentCreation />} />
            <Route path="/google-ads-management" element={<GoogleAdsManagement />} />
            <Route path="/social-media-management" element={<SocialMediaManagement />} />
            <Route path="/training-session" element={<TrainingSession />} />
            <Route path="/partnerships" element={<Partnerships />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
