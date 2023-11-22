import { Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";

function App() {
  return (
    <main className='bg-neutral-800 w-screen h-screen text-gray-400 font-ser'>
    <Routes>
      <Route path="/" element={<Layout />} ></Route>
    </Routes>
    </main>
  );
}

export default App;
