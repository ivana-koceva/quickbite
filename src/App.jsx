import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Menu from './pages/Menu'
import Jobs from './pages/Jobs'
import About from './pages/About'
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <HeaderComponent></HeaderComponent>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/join-us" element={<Jobs />}></Route>
          <Route path="/about-us" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
      <FooterComponent></FooterComponent>
    </>
  )
}

export default App
