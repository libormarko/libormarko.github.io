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
// check names and logix everywhere to see if extract or change
// no regular html tags
// delete unused stuff from files
// remove all // and /* and any

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
