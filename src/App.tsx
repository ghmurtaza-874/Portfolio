import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  // Activates the IntersectionObserver-driven scroll reveals once.
  useScrollReveal();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Services />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
