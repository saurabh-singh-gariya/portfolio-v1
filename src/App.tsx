import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Recognition } from './components/Recognition';
import { Skills } from './components/Skills';

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-on-accent"
      >
        Skip to content
      </a>

      <Header />

      <main id="main" className="mx-auto max-w-3xl px-6">
        <Hero />
        <Experience />
        <Skills />
        <Recognition />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
