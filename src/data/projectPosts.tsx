import { ReactNode } from "react";
import Latex from "@/components/ui/Latex";

export interface ProjectPost {
  title: string;
  date: string;
  techStack: string[];
  // We use ReactNode here so your content can include paragraphs, lists, and LaTeX components!
  content: ReactNode; 
}

// A dictionary where the key is the URL slug
export const PROJECT_POSTS: Record<string, ProjectPost> = {
  "versatile": {
    title: "Versatile",
    date: "n/a",
    techStack: ["C++", "ASM", "Linux", "PJAS - 1st Place"],
    content: (
      <div className="space-y-6">
        <p>
          WIP
        </p>
        {/*<div className="bg-muted p-6 rounded-xl border border-border">
          <p className="text-sm font-semibold text-muted-foreground mb-2 text-center">Core Loss Function Equation</p>
          <Latex 
            block 
            math="L(\theta) = \frac{1}{N} \sum_{i=1}^{N} \left( y_i - f(x_i; \theta) \right)^2 + \lambda \|\theta\|_2^2" 
          />
        </div>*/}
      </div>
    ),
  },
  "roblox": {
    title: "Roblox Portfolio",
    date: "n/a",
    techStack: ["Lua", "VR", "Games", "Blender", "Systems", "Dev Tooling"],
    content: (
      <div className="space-y-6">
        <p>WIP</p>
      </div>
    ),
  },
  "httpness": {
    title: "HTTP-Ness Docs",
    date: "n/a",
    techStack: ["C", "Sockets", "Linux"],
    content: (
      <div className="space-y-6">
        <p>WIP</p>
      </div>
    ),
  },
  "gol_snes": {
    title: "Game of Life - SNES Rom",
    date: "n/a",
    techStack: ["65816 ASM", "Systems", "Games"],
    content: (
      <div className="space-y-6">
        <p>WIP</p>
      </div>
    ),
  },
  "pqc": {
    title: "Post Quantum Cryptosystems",
    date: "n/a",
    techStack: ["Rust", "Cryptography", "Theoretical CS"],
    content: (
      <div className="space-y-6">
        <p>WIP</p>
      </div>
    ),
  },
};