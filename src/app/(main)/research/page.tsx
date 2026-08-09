export default function Home() {
  return (
    <div className="py-12 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-in-out">
      
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Research Projects
        </h1>
        <p className="text-md">
          Over the past few years at CMU I have participated (and currently) in research as an Undergraduate. My freshman year I contributed to one project and Summer 2026 I am working on another project. Both of which are listed here:
        </p>
      </div>

      <div className="mb-12">
        <h3 className="text-xl font-bold tracking-tight mb-3">
          <i>CoBBl SNARK System - Rust Frontend</i> with Prof. Riad Wahby and PhD Student Kunming J. [Summer 2026]
        </h3>
      </div>

      <div className="mb-12">
        <h3 className="text-xl font-bold tracking-tight mb-3">
          <i>CSerpent Programming Language</i> - with Prof. Roger Dannenberg [Spring 2025]
        </h3>
        <p><a href="https://github.com/rbdannenberg/cserpent">[Link to GitHub]</a></p>
      </div>
    
    </div>
  );
}