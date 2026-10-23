import About from "./components/About";
import Clients from "./components/Clients";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import GridLines from "./components/GridLines";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Transformations from "./components/Transformations";
import Why from "./components/Why";

export default function Home() {
  return (
    <main className="relative mx-auto w-full max-w-[1165px] overflow-x-hidden bg-background">
      <GridLines />
      <Hero />
      <About />
      <Services />
      <Transformations />
      <Why />
      <Gallery />
      <Clients />
      <Cta />
      <Footer />
    </main>
  );
}
