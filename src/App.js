// App.js
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react';
import Header from './components/Home';
import Skill from './components/Skill';
import Hobby from './components/Hobby';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import './styles.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Header />}/>
        <Route path="/header" element={<Header />}/>
        <Route path="/skill" element={<Skill />}/>
        <Route path="/hobby" element={<Hobby />}/>
        <Route path="/aboutme" element={<AboutMe />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
