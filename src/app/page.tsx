import About from "@/components/about/about";
import Hero from "@/components/hero/hero";
import Navbar from "@/components/navigation/navbar";
import Stack from "@/components/stack/stack";
import Projects from "@/components/projects/projects";
import Certifications from "@/components/certifications/certifications";
import Contact from "@/components/contact/contact";
import Footer from "@/components/navigation/footer";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}