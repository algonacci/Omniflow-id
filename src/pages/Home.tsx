import Hero from '../components/Hero';
import Modules from '../components/Modules';
import Advantages from '../components/Advantages';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); 
      }
    }
  }, []);

  return (
    <>
      <div id="home">
        <Hero />
      </div>
      <div id="modules">
        <Modules />
      </div>
      <div id="advantages">
        <Advantages />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}
