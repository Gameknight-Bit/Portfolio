import React from "react";
interface CodeProps {
  code: string;
  inline?: boolean;
}

export default function CodeSnippet({ code, inline = false }: CodeProps) {
  // A basic list of common JS/TS/Python keywords for lightweight highlighting
  const keywords = [
    "const", "let", "var", "function", "return", "if", "else", "for",
    "while", "class", "import", "export", "from", "interface", "type",
    "true", "false", "null", "undefined", "async", "await", "def"
  ];

  const renderCode = (text: string) => {
    // Create a regex to split the string precisely at our keywords
    // The \b ensures we only match whole words (e.g., 'let' but not the 'let' in 'letter')
    const regex = new RegExp(`\\b(${keywords.join("|")})\\b`, "g");
    const parts = text.split(regex);

    return parts.map((part, index) => {
      // If the broken-off part exactly matches a keyword, highlight it!
      if (keywords.includes(part)) {
        return (
          <span key={index} className="text-accent font-semibold">
            {part}
          </span>
        );
      }
      
      // Otherwise, return normal code text
      return <span key={index}>{part}</span>;
    });
  };

  // 1. INLINE MODE
  // Great for referencing a variable or small command mid-sentence
  if (inline) {
    return (
      <code className="inline-block rounded-md bg-card-foreground/20 px-1.5 py-0.5 text-sm font-mono text-accent">
        {code}
      </code>
    );
  }

  // 2. BLOCK MODE
  // Great for full code examples with the basic syntax highlighter applied
  return (
    <pre className="block w-full overflow-x-auto rounded-lg bg-card-foreground p-4 my-6 shadow-xl shadow-black/20">
      <code className="font-mono text-sm text-neutral-300">
        {renderCode(code)}
      </code>
    </pre>
  );
}