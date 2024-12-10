import React from 'react';
import Header from './components/header';
import Home from './components/home';
import Services from './components/services';
import Footer from './components/Footer'; 
import About from './components/about'; 
import Login from './components/login';
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
        <Route Path="/login" element={<Login />}/>
        {/* Add other routes as needed */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
