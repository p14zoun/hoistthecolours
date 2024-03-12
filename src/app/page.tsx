import Image from "next/image";
import Navbar from "./navbar";
import Hero from "./hero";
import UnderHero from "./underHero";

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* <main
        style={{
          backgroundImage: "url('/pirate.png')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed", // Make the background image fixed
        }}
      > */}
      <main className="bg-black text-gray-300">
        <Hero />
        <UnderHero />
      </main>
    </div>
  );
}
