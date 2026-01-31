import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Container from '../components/sections/Container';
import Projects from '../components/sections/Projects';
// import Skills from '../components/sections/Skills';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Container />
      {/* <Skills /> */}
      <Projects />
      <Contact />
    </>
  );
};

export default Home;