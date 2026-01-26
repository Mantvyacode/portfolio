import { useState } from 'react';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import ScrollToTop from './components/ui/ScrollToTop';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <>
      <Layout activeSection={activeSection} scrollToSection={scrollToSection}>
        <Home />
      </Layout>
      <ScrollToTop />
    </>
  );
}

export default App;
