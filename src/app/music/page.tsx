export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Jace's Music</h1>
      <p className="mt-4 text-lg">Under <a href="/">construction</a>...</p>
      <iframe data-testid="embed-iframe"
      src="https://open.spotify.com/embed/playlist/0BuBMLskAmnaVxENcZ5QEa?utm_source=generator" width="50%" height="200" 
      frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </main>
  );
}