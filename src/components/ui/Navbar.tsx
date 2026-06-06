"use client";
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';

const LINKS = [
  { href: "/", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
  { href: "/paper-summaries", label: "Paper Summaries" },
  { href: "/puzzles", label: "Puzzles" },
  { href: "/music", label: "Music" },
];

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = Math.max(0, Math.min(100, (totalScroll / windowHeight) * 100));
      setScrollProgress(Number(scroll));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when navigating
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <nav className="max-w-4xl mx-auto px-8 py-6 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-xl">
          {pathname !== '/' && <a href="/"><b>Jace</b> Parks</a>}
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10">
          {LINKS.map(({ href, label }) => (
            <a key={href} href={href} className="transition-colors hover:text-accent/90">
              {label}
            </a>
          ))}
        </div>

        {/* Hamburger Button - mobile only */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

      </nav>

      {/* Mobile Dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="flex flex-col px-8 pb-4 gap-4 border-t pt-4">
          {LINKS.map(({ href, label }) => (
            <a key={href} href={href} className="transition-colors hover:text-accent/90">
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </header>
  );
}