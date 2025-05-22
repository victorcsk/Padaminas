// padaminas-website/src/App.tsx

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="font-sans">
        {/* Navbar */}
        <nav className="flex justify-between items-center p-4 shadow-md bg-white">
          {/* Logo como texto preto */}
          <div className="text-2xl font-bold text-black leading-tight">
            PADAMINAS<br />
            <span className="text-sm font-normal tracking-wide text-black">BRAZILIAN BAKERY</span>
          </div>

          {/* Navegação */}
          <ul className="flex gap-6 text-gray-800">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

          {/* Botão Order Online */}
          <a
            href="https://www.toasttab.com/padaminas-brazilian-bakery-66-w-lincoln-ave"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
              Order Online
            </button>
          </a>
        </nav>

        {/* Rotas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;