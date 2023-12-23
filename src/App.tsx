import React from 'react';
import NavBar from './Navbar/NavBar';
import Intro from './Intro/Intro';
import About from './About/About';
import Blog from './Blog/Blog';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import { AppContainer } from './App.styles';

// TODO move all data providing array into one central JSON?
// TODO calculate height automatically
// remove all // and /* and any types

export const App: React.FC<any> = () => {
  return (
    <AppContainer>
      <NavBar />
      <Intro />
      <About />
      <Blog />
      <Projects />
      <Contact />
    </AppContainer>
  );
};

export default App;
