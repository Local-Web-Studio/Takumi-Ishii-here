/** THE LINE OF INTENT — Two chapters make curiosity an intentional path, not a single long pitch. */
import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, Router as WouterRouter, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ChapterTwo from "./pages/ChapterTwo";
import NotFound from "./pages/NotFound";

function HashScrollRestorer() {
  const [location] = useLocation();

  useEffect(() => {
    const fallbackTimers: number[] = [];

    const scrollToHash = () => {
      const anchorId = decodeURIComponent(window.location.hash.slice(1));
      if (!anchorId) {
        window.scrollTo({ top: 0, behavior: "auto" });
        return;
      }

      const target = document.getElementById(anchorId);
      if (!target) return;

      const scrollMarginTop = Number.parseFloat(window.getComputedStyle(target).scrollMarginTop) || 0;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - scrollMarginTop;
      window.scrollTo({ top: Math.max(0, targetTop), behavior: "auto" });
    };

    const scheduleScroll = () => {
      window.requestAnimationFrame(scrollToHash);
      fallbackTimers.forEach((timer) => window.clearTimeout(timer));
      fallbackTimers.length = 0;
      [160, 520, 960].forEach((delay) => {
        fallbackTimers.push(window.setTimeout(scrollToHash, delay));
      });
    };

    scheduleScroll();
    window.addEventListener("hashchange", scheduleScroll);

    return () => {
      fallbackTimers.forEach((timer) => window.clearTimeout(timer));
      window.removeEventListener("hashchange", scheduleScroll);
    };
  }, [location]);

  return null;
}

function Router() {
  const isGitHubPages = window.location.pathname.startsWith('/Takumi-Ishii-here');
  const base = isGitHubPages ? '/Takumi-Ishii-here' : '';
  return (
    <WouterRouter base={base}>
      <HashScrollRestorer />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/chapter-02" component={ChapterTwo} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="dark"><TooltipProvider><Toaster /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}

export default App;
