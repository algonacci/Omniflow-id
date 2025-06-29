import React from 'react';
import Hero from '../components/Hero';
import Modules from '../components/Modules';
import Advantages from '../components/Advantages';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Modules />
      <Advantages />
      <FAQ />
      <Contact />
    </>
  );
}