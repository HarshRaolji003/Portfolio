import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import Navbar from '../Components/Navbar';
import Home from '../Components/Home';
import About from '../Components/AboutMe';
import Skill from '../Components/Skill';
import Project from '../Components/myProject';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';

function AppRouter() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/Portfolio' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/project' element={<Project />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
      {location.pathname !== '/Portfolio' && <Footer />}
    </>
  );
}

export default function RouterComponent() {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
}
