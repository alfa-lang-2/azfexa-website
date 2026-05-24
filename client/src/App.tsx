import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import BrandingService from "./pages/BrandingService";
import SocialMediaService from "./pages/SocialMediaService";
import WebDevelopmentService from "./pages/WebDevelopmentService";
import ContentCreationService from "./pages/ContentCreationService";
import DigitalMarketingService from "./pages/DigitalMarketingService";
import InfluencerMarketingService from "./pages/InfluencerMarketingService";
import About from "./pages/About";
import CaseStudies from "./pages/CaseStudies";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/services/branding"} component={BrandingService} />
      <Route path={"/services/social-media"} component={SocialMediaService} />
      <Route path={"/services/web-development"} component={WebDevelopmentService} />
      <Route path={"/services/content-creation"} component={ContentCreationService} />
      <Route path={"/services/digital-marketing"} component={DigitalMarketingService} />
      <Route path={"/services/influencer-marketing"} component={InfluencerMarketingService} />
      <Route path={"/about"} component={About} />
      <Route path={"/case-studies"} component={CaseStudies} />
      <Route path={"/faq"} component={FAQ} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/blog/:slug"} component={BlogArticle} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
