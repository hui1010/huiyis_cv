import { Routes, Route} from 'react-router-dom';
import Experience from './components/Experience';
import Projects from './components/Projects';
import PL from './components/PersonalLetter';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';

function App() {
  return (
      <div className="App">
        <div className="left">
          <Navbar />
        </div>
        <div className="main">
          <Routes>
            <Route path="/" element={Experience}/>
            <Route path="/skills" element={Skills}/>
            <Route path="/projects" element={Projects}/>
            <Route path="/personal_letter" element={PL}/>
          </Routes>         
        </div>
        <div className="right">
          <About />
        </div>
      </div>   
  );
}

export default App;
