// components
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/AboutMe';
import Skill from './Components/Skill'
import Project from './Components/myProject';
import Contact from './Components/Contact';
import SocialLinks from "./Components/SocialLinks";


function App() {

  return (
    <>
      <Navbar />
        <Home />
        <About />
        <Skill />
        <Project />
        <Contact />
        <SocialLinks />
    </>
  );
}

export default App;
