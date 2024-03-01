import './App.css';
import ZoomingElement from './Components/HeadImage.js';
import LandingPage from './Components/LandingPage.js'
import AboutMe from './Components/AboutMe.js';
import ResumeBlock from './Components/ResumeBlocks.js';
import {Experience} from './Components/ResumeBlocks.js';
import Projects from './Components/Projects.js';
import Contact from './Components/Contact.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LandingPage />
        <AboutMe />
        <div className='resume'>
          <Experience />
        </div>
        <Projects />
        <Contact />
      </header>
    </div>
  );
}

export default App;
