import React from 'react';
import Header from './components/header';
import Home from './components/home';
import Services from './components/services';
import Footer from './components/Footer'; 
import About from './components/about'; 
import Login from './components/login';
import Signup from './components/Signup';
import Contact from './components/contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add other routes as needed */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
