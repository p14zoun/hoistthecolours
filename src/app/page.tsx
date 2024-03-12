import Image from "next/image";
import Navbar from "./navbar";
import Hero from "./hero";
import UnderHero from "./underHero";

export default function Home() {
  return (
    <div>
      <main className="bg-black text-gray-300">
        <Hero />
        <UnderHero />
      </main>
    </div>
  );
}
