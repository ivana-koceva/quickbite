import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Contact from './pages/Contact'
import CookiePolicy from './pages/CookiePolicy'
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditons from './pages/Terms&Conditions';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
    <HeaderComponent></HeaderComponent>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/menu/*" element={<Menu />}></Route>
          <Route path="/about-us" element={<About />}></Route>
          <Route path="/contact-us" element={<Contact />}></Route>
          <Route path="/cookie-policy" element={<CookiePolicy />}></Route>
          <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
          <Route path="/terms-and-conditions" element={<TermsAndConditons />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
      <FooterComponent></FooterComponent>
    </CartProvider>
  )
}

export default App
