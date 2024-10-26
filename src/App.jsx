import { useState } from 'react';
import './App.css';
import Home1 from './Home1';
import About from './components/About';
import Resume from './components/Resume'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio_react/" element={<Home1 />} />
        <Route path="/home" element={<Home1 />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
