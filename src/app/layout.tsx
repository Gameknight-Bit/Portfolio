import type { Metadata } from "next";
import { Inter, Geist, Roboto_Slab } from "next/font/google";
import Navbar from "@/components/ui/Navbar"
import "./globals.css";
import { cn } from "@/lib/utils";

const robotoSlab = Roboto_Slab({subsets:['latin'],variable:'--font-serif'});

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jace Parks",
  description: "Portfolio and Other Such Things",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn( geist.variable, "font-serif", robotoSlab.variable)}>
      <body className={inter.className}>
        {/* Persistent Navigation Bar */}
        <Navbar />

        {/* This {children} variable represents whatever page you are currently on */}
        <div className="max-w-5xl mx-auto min-h-[80vh]">
          {children} 
        </div>

        {/* Persistent Footer */}
        <footer className="w-full border-t">
          <div className="max-w-4xl mx-auto px-8 py-3 text-left text-sm text-gray-500">
            © {new Date().getFullYear()} Jace J. Parks
          </div>
        </footer>
      </body>
    </html>
  );
}