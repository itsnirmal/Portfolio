import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <main className='bg-neutral-800 text-white h-screen flex items-center justify-center'>
    <Routes>
      <Route path="/" element={<Home />} ></Route>
    </Routes>
    </main>
  );
}

export default App;
