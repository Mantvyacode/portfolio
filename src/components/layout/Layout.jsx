import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, activeSection, scrollToSection }) => {
  return (
    <div className="app">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <main style={{ width: '100%', }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
