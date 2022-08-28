import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Project';
import Contact from './components/Contact/Contact';
import About from './components/Header/About';
import Fade from 'react-reveal/Fade';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
function App() {
  return (
    <div className='wrapper'>
      <Fade top>
        <Navbar/>
      </Fade>
      <Fade>
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
      </Fade>
        <ScrollToTop/>
        <Footer/>
      
    </div>
  );
}

export default App;
