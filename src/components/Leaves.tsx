"use client";

import { useEffect, useRef } from "react";
// We import the engine directly, dropping the need for @tsparticles/react
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { loadWobbleUpdater } from "@tsparticles/updater-wobble";

export default function Leaves() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Keep track of the container so we can clean it up when the component unmounts
    let particlesContainer: any;

    const initParticles = async () => {
      // 1. Load the shapes, colors, and wobble physics into the core engine
      await loadSlim(tsParticles);
      await loadWobbleUpdater(tsParticles);

      // 2. Tell the engine to directly mount the canvas into our div
      particlesContainer = await tsParticles.load({
        id: "tsparticles",
        options: {
          // Turn off internal fullscreen; we let Tailwind handle the sizing naturally
          fullScreen: { enable: false }, 
          fpsLimit: 60,
          particles: {
            number: {
              value: 20,
              density: { enable: true, width: 800, height: 800 },
            },
            paint: {
              fill: {
                enable: true,
                color: {
                  value: ["#e02040", "#a00080", "#c00080"],
                }
              },
              /*stroke: {
                width: 2,
                color: {
                  value: "#202040",
                }
              }*/
            },
            shape: {
              type: "polygon",
              options: {
                polygon: { sides: 4 },
              },
            },
            opacity: {
              value: { min: 0.4, max: 0.8 },
            },
            size: {
              value: { min: 3, max: 8 },
            },
            move: {
              enable: true,
              direction: "bottom",     
              speed: { min: 1, max: 3 }, 
              straight: false,         
              outModes: {
                default: "out",        
              },
            },
            wobble: {
              enable: true,
              distance: 20,
              speed: 10,
            },
            rotate: {
              value: { min: 0, max: 360 },
              direction: "random",
              animation: {
                enable: true,
                speed: 15,
              },
            },
          },
          detectRetina: true,
        },
      });
    };

    initParticles();

    // 3. Cleanup function: destroys the canvas when you navigate away 
    // from the page, preventing React StrictMode duplicate canvas bugs.
    return () => {
      if (particlesContainer) {
        particlesContainer.destroy();
      }
    };
  }, []);

  return (
    // Tailwind perfectly locks the div over your screen, passes clicks through, 
    // and forces the tsParticles canvas to fill exactly this space.
    <div 
      id="tsparticles" 
      ref={containerRef} 
      className="fixed inset-0 z-50 pointer-events-none" 
    />
  );
}