import './App.css';
import Bg from './components/V2/Bg';
import { Route, Routes } from 'react-router-dom';
import AboutV2 from './components/V2/About/AboutV2';
import Home from './components/V2/Home/HomeV2';
import Contact from './components/V2/Contact/ContactV2';
import ProjectsV2 from './components/V2/Projects/ProjectsV2';
import SkillsV2 from './components/V2/Skills/SkillsV2';


function App() {
  return (
    <div className="pp">
    <Routes>
      <Route path="/" element={<Bg />} />
      <Route path="/home" element={ <Home/>} />
      <Route path="/about" element={ < AboutV2/>} />
      <Route path="/contact" element={ < Contact/>} />
      <Route path="*" element={<Bg />} />
      <Route path="/projects" element={<ProjectsV2 />} />
      <Route path="skills" element={<SkillsV2 />} />
    </Routes>
    </div>
  );
}
//   return (
//     <>

//     </>
//   );
// }

export default App;
