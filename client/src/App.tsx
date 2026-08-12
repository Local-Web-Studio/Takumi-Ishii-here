/** THE LINE OF INTENT — Two chapters make curiosity an intentional path, not a single long pitch. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, Router as WouterRouter } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ChapterTwo from "./pages/ChapterTwo";
import NotFound from "./pages/NotFound";

function Router() {
  const isGitHubPages = window.location.pathname.startsWith('/Takumi-Ishii-here');
  const base = isGitHubPages ? '/Takumi-Ishii-here' : '';
  return (
    <WouterRouter base={base}>
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
