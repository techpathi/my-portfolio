import React from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';

export default function App() {
  return (
    <main>
      <Navbar className='text-gray-400 bg-gray-900 body-font' />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
