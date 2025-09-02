import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Sectors from './components/Sectors';
import Stats from './components/Stats';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Sectors />
        <Stats />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
