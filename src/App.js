import { Routes, Route } from 'react-router-dom';
import Default from './components/Default.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <main className='bg-neutral-800 w-screen h-screen text-gray-300 font-ser'>
          <Navbar />
          <Routes>
                  <Route exact path="/" element={<Default />} />
                  <Route exact path="/About" element={<About />} />
                  <Route exact path="/Projects" element={<Projects />} />
        
          </Routes>
    </main>
  );
}

export default App;
