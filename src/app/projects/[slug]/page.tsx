import { notFound } from "next/navigation";
import Link from "next/link";
import { PROJECT_POSTS } from "@/data/projectPosts";

interface ProjectPageProps {
  // In modern Next.js, params is a Promise that resolves to the route parameters
  params: Promise<{ slug: string }>;
}

export default async function DynamicProjectPage({ params }: ProjectPageProps) {
  // Un-wrap the slug parameter
  const { slug } = await params;
  
  // Look up the slug inside our encapsulated data file
  const post = PROJECT_POSTS[slug];

  // If someone types an invalid slug (like /projects/fake-project), throw a 404
  if (!post) { //Hopefully is secure enough to prevent XSS attacks ;-;
    notFound();
  }

  return (
    <article className="py-12 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Back to Projects navigation link */}
      <Link href="/projects" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
        ← Back to Projects
      </Link>

      {/* Meta Headers */}
      <header className="mt-6 mb-8 border-b border-border pb-6">
        <span className="text-sm font-medium text-muted-foreground">Written on: {post.date}</span>
        <h1 className="text-4xl font-bold tracking-tight mt-2 mb-4 text-foreground">
          {post.title}
        </h1>
        <div className="flex flex-wrap gap-2">
          {post.techStack.map((tech) => (
            <span key={tech} className="text-xs font-mono bg-secondary text-secondary-foreground px-2.5 py-1 rounded-md">
              {tech}
            </span>
          ))}
        </div>
      </header>

      {/* The Actual Encapsulated Content Body */}
      <div className="prose dark:prose-invert max-w-none text-foreground leading-relaxed">
        {post.content}
      </div>

    </article>
  );
}