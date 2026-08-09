import Image from "next/image";
import BackgroundAudio from "@/components/BackgroundAudio";
import Leaves from "@/components/Leaves";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <BackgroundAudio src="/music/forest.mp3#t=01:41"/>
      <Leaves />
      <Image 
        src="/tree.gif"
        alt="Picture of Jace in Boston on the Charles River"
        width={200}
        height={10} 
        loading="eager"
        className="rounded-md shadow-xl object-cover" 
      />
    </main>
  );
}