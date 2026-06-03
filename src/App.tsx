import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Comercial from "./pages/Comercial";
import Tecnico from "./pages/Tecnico";
import Financiero from "./pages/Financiero";
import { Navbar } from "./components/Navbar";
import { Preloader } from "./components/Preloader";
import Contacto from "./pages/Contacto";
import Arqentia from "./pages/Arqentia";
import { DownloadProject } from "./components/DownloadProject";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Preloader />
      <DownloadProject />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Navbar /><Index /></>} />
          <Route path="/comercial" element={<Comercial />} />
          <Route path="/tecnico" element={<Tecnico />} />
          <Route path="/financiero" element={<Financiero />} />
          <Route path="/contacto" element={<><Navbar /><Contacto /></>} />
          <Route path="/arqentia" element={<Arqentia />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
