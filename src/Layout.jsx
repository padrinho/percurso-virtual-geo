import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "./utils";

export default function Layout({ children, currentPageName }) {
  return (
    <div className="min-h-screen bg-[#1a2a3a] text-white font-sans">
      <style>{`
        :root {
          --bg-primary: #1a2a3a;
          --bg-secondary: #243444;
          --accent: #5b9bd5;
          --text-primary: #e8edf2;
          --text-secondary: #a0b4c8;
        }
        body { margin: 0; padding: 0; }
        * { box-sizing: border-box; }
      `}</style>
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a2a3a]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link to={createPageUrl("Home")}>
            <img 
              src="https://static.wixstatic.com/media/bdb8d7_e6f3ab7d50d84762af1bc09824996b22~mv2.png/v1/fill/w_124,h_57,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/bdb8d7_e6f3ab7d50d84762af1bc09824996b22~mv2.png"
              alt="ISEC Lisboa"
              className="h-10 object-contain"
            />
          </Link>
          <div className="flex items-center gap-8 text-sm tracking-wide">
            <Link 
              to={createPageUrl("Home")} 
              className={`hover:text-white transition-colors ${currentPageName === 'Home' ? 'text-white' : 'text-[#a0b4c8]'}`}
            >
              Início
            </Link>
            <Link 
              to={createPageUrl("LocaisDeInteresse")} 
              className={`hover:text-white transition-colors ${currentPageName === 'LocaisDeInteresse' ? 'text-white' : 'text-[#a0b4c8]'}`}
            >
              Locais de Interesse
            </Link>
            <Link 
              to={createPageUrl("Sobre")} 
              className={`hover:text-white transition-colors ${currentPageName === 'Sobre' ? 'text-white' : 'text-[#a0b4c8]'}`}
            >
              Sobre
            </Link>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#0f1a24] border-t border-white/10 py-8 text-center text-[#a0b4c8] text-sm">
        <p>© 2025/2026 — Percurso Virtual Geológico · ISEC Lisboa</p>
      </footer>
    </div>
  );
}