import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { BrowserRouter } from "react-router-dom";
import ScrollHandler from "./components/ScrollHandler";

import Header from './components/Header';
import ImageSlider from './components/ImageSlider';
import About from './components/About';
import WhatWeDo from './components/WhatWeDo';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    // for now the site will enter here. Will be adding blog and listings pages in the future
    <BrowserRouter>
      <ScrollHandler />
      <Header />
      <ImageSlider />
      <About />
      <WhatWeDo />
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
