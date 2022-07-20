import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Hero from './pages/Hero';
import Home from "./pages/Home";

function App() {

  return (
    <div>
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="hero" element={<Hero />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
