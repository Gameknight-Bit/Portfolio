"use client"; // This tells Next.js this component runs in the browser

import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';
import Link from "next/link"; // Next.js optimized links

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate how far down the user has scrolled as a percentage
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = Math.max(0, Math.min(100, (totalScroll / windowHeight) * 100));
    
      setScrollProgress(Number(scroll));
    };

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <nav className="max-w-4xl mx-auto px-8 py-6 flex justify-between items-center">
            <div className="text-xl"> { usePathname() !== '/' && ( <a href="/"><b>Jace</b> Parks</a> )} </div> 
            <div className="space-x-10">
            <a href="/" className="transition-colors hover:text-accent/90">About</a>
            <a href="/projects" className="transition-colors hover:text-accent/90">Projects</a>
            <a href="/research" className="transition-colors hover:text-accent/90">Research</a>
            <a href="/paper-summaries" className="transition-colors hover:text-accent/90">Paper Summaries</a>
            <a href="/puzzles" className="transition-colors hover:text-accent/90">Puzzles</a>
            <a href="/music" className="transition-colors hover:text-accent/90">Music</a>
            </div>
        </nav>

        {/*Progress Bar :)*/}
        <div 
            className="absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
        />
    </header>
  );
}