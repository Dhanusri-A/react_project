import './App.css';
import { BrowserRouter, Route, Router, Routes, Link } from 'react-router-dom';
import Home from './about/Home';
import About from './about/About';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ul>
        <li>
          <Link to="/home">HOME</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
      </ul>
       <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
       </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;