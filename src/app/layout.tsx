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
        {children} 
      </body>
    </html>
  );
}