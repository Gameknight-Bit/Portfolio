import katex from "katex";

interface LatexProps {
  math: string;
  block?: boolean; // If true, renders on its own line centered. If false, inline with text.
}

export default function Latex({ math, block = false }: LatexProps) {
  // Render the LaTeX string to pure HTML string on the server
  const html = katex.renderToString(math, {
    throwOnError: false,
    displayMode: block,
  });

  return (
    <span 
      dangerouslySetInnerHTML={{ __html: html }} 
      className={block ? "block my-6 text-center overflow-x-auto" : "inline-block"}
    />
  );
}