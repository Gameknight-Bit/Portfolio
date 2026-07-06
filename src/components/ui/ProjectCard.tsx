import Image from "next/image";
import Link from "next/link";

export interface ProjectCardProps {
  title: string;
  duration: string;
  description: string;
  imageUrl: string;
  slug: string; 
  http: string;
  tags: string[]; 
}

export default function ProjectCard({
  title,
  duration,
  description,
  imageUrl,
  slug,
  http,
  tags,
}: ProjectCardProps) {
  return (
    <Link 
      href={slug.length === 0 ? `${http}` : `/projects/${slug}`} 
      className="group flex flex-col bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-colors duration-300 shadow-sm hover:shadow-md"
    >

      <div className="relative w-full md:h-28 sm:h-0 border-b border-border overflow-hidden bg-muted">
        <Image 
          src={imageUrl} 
          alt={`Screenshot of ${title}`} 
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500" 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-6 flex flex-col grow">
        
        <div className="flex justify-between items-start gap-4 mb-3">
          <h1 className="text-xl font-bold group-hover:text-primary transition-colors">
            {title}
          </h1>
          <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-md shrink-0">
            {duration}
          </span>
        </div>

        <p className="text-muted-foreground text-sm mb-6">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="text-xs font-medium px-2.5 py-1 bg-secondary text-secondary-foreground rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        
      </div>
    </Link>
  );
}