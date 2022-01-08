import "./App.css";
import HomePage from "./pages/HomePage/HomePage";

import img from "./Assets/logo.png";

import {BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav className="container">
          <div>
            <img className="image" src={img} alt="Logo" />
          </div>
          <div>SearchBox</div>
          <div>
            <Link to='/'>Home</Link>
          </div>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
