import Image from "next/image";
import CodeforcesStats from "@/components/ui/CodeforcesStats"; // Import the widget

export default function Home() {
  return (
    <main className="min-h-screen flex-col py-15 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-in-out">
      <h1 className="text-4xl"><b>Jace</b> Parks</h1>
      <p className="mt-4 text-md pb-2">Current CS Student at <a href="https://www.cmu.edu/">Carnegie Mellon University</a></p>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="shrink-0">
          <Image 
            src="/JaceBos1_1.jpg"
            alt="Picture of Jace in Boston on the Charles River"
            width={300}
            height={10} 
            loading="eager"
            className="rounded-md shadow-xl object-cover" 
          />
        </div>

        <div className="text-left">
          <p className="text-md">
            Hello! My name is <b>Jace</b> and I am a current student at CMU pursuing a B.S. in Computer Science. 
          </p>
          <p className="text-md mt-3">
            At CMU, I have been in the a cappella group <a href="https://cmucsharp.com/">C#</a> since my freshman year and am currently the President of the group! 
            I also am a TA for <a href="https://www.andrew.cmu.edu/course/18-330/">15-330 Introduction to Computer Security</a>. As well as a load of coursework, I have also
            done multiple research projects as an undergrad involving topics like compilation and succinct proof systems.
          </p>
          <p className="text-md mt-3">
            My current academic interests cover low-level computer systems programming/design and computer security (specifically regarding cryptosystems and verifiable programming languages). 
            I have also recently become interested in competitive programming and continue to build on my current algorithmic skills.
          </p>
          <p className="text-md mt-3">
            I'm still figuring out my interests so hopefully this website gets across who I am and what I enjoy doing. I hope this site serves as a resource for anyone sharing similar passions to my own as well :).
          </p>
          <p className="text-md mt-3">
            Feel free to reach out to me at <i>jacejparks</i> [at]<i>gmail</i> [dot]<i>com</i> if you have any questions or would just like to talk!
          </p>
        </div>
      </div>
      <h1 className="text-2xl mt-6">Some Fun Facts:</h1>
      <p className="text-md mt-3">
        I am an avid runner and love to go on hikes. One of my dreams is to do a "through hike" of the <a href="https://appalachiantrail.org/">Appalachian Trail</a>. I also play a variety of instruments like guitar, saxophone, piano, and clarinet. 
        I also sing a good amount (currently in C# I am part of our choral branch as a Tenor) and <a href="https://musescore.com/user/32764724">arrange</a> a small amount of music :). My favorite study spot at CMU is the 3rd floor Scott Hall corridor.
      </p>
      <p className="text-md mt-3">
        I have lived in Western PA for my entire life! I love the atmosphere of the Fall season in PA, but I would love to extend myself and travel to see more of the world than just PA.
      </p>

      <div className="w-full flex flex-col items-center md:items-start pt-6">
        <h1 className="text-2xl mb-3">Competitive Programming:</h1>
        <p className="text-md mb-3">Check out my Codeforces account here :) I started competitive programming on <b>5/18/2026</b>.</p>
        {/* Just pass your explicit Codeforces handle here */}
        <CodeforcesStats handle="Gmaeknight999" /> 
      </div>
    </main>
  );
}