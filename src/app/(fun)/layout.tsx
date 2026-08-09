export default function FullscreenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // No Navbar, no Footer, no max-width constraints!
    // We can make this a dark full-screen canvas, for example:
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      {children}
    </div>
  );
}