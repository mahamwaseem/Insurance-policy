import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./My_components/Header";
import Footer from "./My_components/Footer";
import Home from "./My_components/pages/Home";
import Apply from './My_components/pages/Apply';

function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
