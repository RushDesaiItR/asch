import './App.css';
import React from "react";
import Banner from './component/Banner';
import Nav from './component/Nav'
import Services from './component/Services';
import AboutMe from './component/AboutMe';
import Skill from './component/Skill';

function App() {
  return (
 <>
 <Nav/>
  <Banner/>
 <Services/>
 <AboutMe/>
 <Skill/>
 </>
  );
}

export default App;
