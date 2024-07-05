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
    <div className='overflow-y-scroll no-scrollbar'>
      <Navbar />
      <div>
        <Home />
        <About />
        <Project />
        <Skill />
        <Contact />
        <SocialLinks />
      </div>
    </div>
  );
}

export default App;
