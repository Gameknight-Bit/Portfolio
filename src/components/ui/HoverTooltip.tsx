import React from "react";
import Latex from "./Latex"; // Adjust the import path based on your folder structure

interface HoverTooltipProps {
  children: React.ReactNode; // The text the user hovers over
  definition: string;        // The definition text, which can now include $math$
}

export default function HoverTooltip({ children, definition }: HoverTooltipProps) {
  
  // Helper function to parse text and turn $...$ segments into <Latex /> components
  const renderDefinitionContent = (text: string) => {
    // Regex splits by $...$, capturing the dollar signs so we keep them in the array
    const parts = text.split(/(\$[^\$]+\$)/g);

    return parts.map((part, index) => {
      // Check if this part is an inline LaTeX segment (starts and ends with $)
      if (part.startsWith("$") && part.endsWith("$")) {
        const mathString = part.slice(1, -1);
        return (
          <span key={index} className="inline-block mx-0.5">
            <Latex math={mathString} />
          </span>
        );
      }
      
      // Otherwise, return it as normal text
      return <span key={index}>{part}</span>;
    });
  };

  return (
    // 'group' allows the child tooltip to react to this wrapper being hovered
    <span className="text-accent group relative inline-block">
      {children}

      {/* The Tooltip Bubble */}
      <span className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 w-max max-w-xs rounded-md bg-card-foreground px-3 py-2 text-sm text-white opacity-0 transition-opacity delay-300 duration-200 group-hover:opacity-100">
        
        {/* Render the dynamically parsed text and math mix */}
        <span className="inline-block align-middle">
          {renderDefinitionContent(definition)}
        </span>

        {/* The little downward triangle pointer at the bottom of the bubble */}
        <span className="absolute left-1/2 top-full -translate-x-1/2 border-8 border-transparent border-t-card-foreground"></span>
      </span>
    </span>
  );
}