// Home1.js - Root page containing all components

import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Header from './components/Header';
import Contact from './components/Contact';

const Home1 = () => {
  return (
    <div className="relative">
      <div className="Head">
        <Header />
      </div>
      <div className="w-screen">
        <div className="fixed inset-0 bg-blue-900 opacity-20 backdrop-blur-sm rounded-t-3xl my-1"></div>
        <div className="mt-5" id="home">
          <Home />
        </div>
        <div className="mt-5" id="about">
          <About />
        </div>
        <div className="mt-5" id="resume">
          <Resume />
        </div>
        <div className="mt-5" id="projects">
          <Projects />
        </div>
        <div className="mt-5" id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home1;

