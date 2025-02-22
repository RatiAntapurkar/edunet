import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Admin from './pages/Admin';
import CartPage from './pages/CartPage';
import About from './components/About';
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
};

export default App;