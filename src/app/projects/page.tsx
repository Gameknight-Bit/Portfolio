import ProjectCard from "@/components/ui/ProjectCard";

// This is a "mock database". Later, you could pull this from Markdown files or a real database!
const PROJECTS_DATA = [
  {
    title: "Custom Programming Language - Versatile",
    duration: "Aug 2023 - Jan 2024",
    description: "Developed a compiled programming language from scratch that handled basic parsing, tokenization, assembly generation. Could generate NASM assembly for compilation on Linux systems.",
    imageUrl: "/CMU4.jpg", 
    slug: "versatile",
    http: "",
    tags: ["C++", "ASM", "Linux", "PJAS - 1st Place"],
  },
  {
    title: "Roblox Game Development",
    duration: "Jan 2020 - Present",
    description: "Developed a large number of games for Roblox as an independent developer in a wide variety of areas. Also was commissioned numerous times by other developers for tool creation and programming. VR game development is my specialty.",
    imageUrl: "/CMU2.jpg", 
    slug: "roblox",
    http: "",
    tags: ["Lua", "VR", "Games", "Blender", "Systems", "Dev Tooling"],
  },
  {
    title: "SnipeTools",
    duration: "Summer 2025",
    description: "Helped develop a webapp to manage the Armstrong School District's tech inventory system. This tool was able to fix over $500k worth of mismanaged assets over the span of one summer for the district.",
    imageUrl: "/CMU3.jpg", 
    slug: "",
    http: "https://github.com/csquinn/SnipeTools",
    tags: ["PHP", "SQL", "Windows Server", "Dev Tooling"],
  },
  {
    title: "Image Compression Methods",
    duration: "Aug 2022 - Jan 2023",
    description: "Developed python code to implement different image compression methods and analyzed the implementation costs and outputs. Implemented methods like SVD and FFT that both culled 'low importance' values.",
    imageUrl: "/CMU6.jpg", 
    slug: "",
    http: "https://github.com/Gameknight-Bit/PJAS2022-2023",
    tags: ["Python", "Theoretical CS", "PJAS - 1st Place"],
  },
  {
    title: "Esoteric Programming Language - HTTP-Ness",
    duration: "Spring 2025",
    description: "An esoteric programming language that I developed for a final project for CMU STUCO 98-242 (ESOLANGS). In short, you are intended to use purely hyperlinks to program.",
    imageUrl: "/CMU5.jpg", 
    slug: "httpness",
    http: "",
    tags: ["C", "Sockets", "Linux"],
  },
];

const WIP_PROJ_DATA = [
  {
    title: "Game of Life - SNES ROM",
    duration: "Dec 2025 - Present",
    description: "Developing a game for the Super Nintendo Entertainment System using orignal hardware assembly in order to simulate John Conway's creation of the 'game of life'",
    imageUrl: "/CMU6.jpg", 
    slug: "gol_snes",
    http: "",
    tags: ["65816 ASM", "Systems", "Games"],
  },
  {
    title: "Post Quantum Cryptosystems",
    duration: "Mar 2026 - Present",
    description: "Implementing and exploring differnt post quantum cryptoschemes (Like learning with errors, merkle-hellman, etc.)",
    imageUrl: "/CMU1.jpg", 
    slug: "pqc",
    http: "",
    tags: ["Rust", "Cryptography", "Theoretical CS"],
  }
];

export default function ProjectsPage() {
  return (
    <div className="py-12 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-in-out">
      
      {/* Page Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Personal Projects
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          A collection of things I have built over my years of programming and designing applications/experiments :) <i>[Click on each card to see more details]</i>
        </p>
      </div>

      {/* The Grid: 1 column on phones, 2 columns on tablets/desktops */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS_DATA.map((project) => (
          <ProjectCard 
            key={project.slug} 
            title={project.title}
            duration={project.duration}
            description={project.description}
            imageUrl={project.imageUrl}
            slug={project.slug}
            http={project.http}
            tags={project.tags}
          />
        ))}
      </div>

      <div className="mt-8 mb-12">
        <h1 className="text-2xl md:text-5xl font-bold tracking-tight mb-4">
          Work In Progress Projects
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {WIP_PROJ_DATA.map((project) => (
          <ProjectCard 
            key={project.slug} 
            title={project.title}
            duration={project.duration}
            description={project.description}
            imageUrl={project.imageUrl}
            slug={project.slug}
            http={project.http}
            tags={project.tags}
          />
        ))}
      </div>

    </div>
  );
}