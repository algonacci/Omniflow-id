import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Modules from './components/Modules';
import Advantages from './components/Advantages';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Modules />
        <Advantages />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;