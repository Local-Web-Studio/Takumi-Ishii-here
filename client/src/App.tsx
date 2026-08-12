/** THE LINE OF INTENT — Two chapters make curiosity an intentional path, not a single long pitch. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ChapterTwo from "./pages/ChapterTwo";
import NotFound from "./pages/NotFound";

function Router() {
  return <Switch><Route path="/" component={Home} /><Route path="/chapter-02" component={ChapterTwo} /><Route path="/404" component={NotFound} /><Route component={NotFound} /></Switch>;
}

function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="dark"><TooltipProvider><Toaster /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}

export default App;
