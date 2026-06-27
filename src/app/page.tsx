import About from "@/components/about/about";
import Hero from "@/components/hero/hero";
import Navbar from "@/components/navigation/navbar";
import Stack from "@/components/stack/stack";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Stack />
    </main>
  );
}