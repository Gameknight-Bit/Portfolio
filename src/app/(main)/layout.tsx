import Navbar from "@/components/ui/Navbar";
import SocialLinks from "@/components/ui/SocialLinks";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        {/* Persistent Navigation Bar */}
        <Navbar />

        {/* This {children} variable represents whatever page you are currently on */}
        <div className="max-w-5xl mx-auto min-h-[80vh] px-4">
        {children} 
        </div>

        {/* Persistent Footer */}
        <footer className="w-full border-t">
        <div className="max-w-4xl mx-auto px-8 py-3 flex items-center justify-between text-sm text-gray-500">
            © {new Date().getFullYear()} Jace J. Parks
            <SocialLinks/>
        </div>
        </footer>
    </>
  );
}