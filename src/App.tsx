import React from 'react';
import NavBar from './Navbar/NavBar';
import Intro from './Intro/Intro';
import About from './About/About';
import Blog from './Blog/Blog';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import { AppContainer } from './App.styles';

// TODO remove medium links from projects
// TODO calculate height automatically
// TODO remove all any types
// delete other portfolio repo
// update alt attributes

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
