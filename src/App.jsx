import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';

// Components
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Partners from './components/Partners/Partners';
import About from './components/About/About';
import ProblemSolution from './components/ProblemSolution/ProblemSolution';
import Features from './components/Features/Features';
import Services from './components/Services/Services';
import Tokenomics from './components/Tokenomics/Tokenomics';
import Roadmap from './components/Roadmap/Roadmap';
import Whitepaper from './components/Whitepaper/Whitepaper';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import ChatWidget from './components/ChatWidget/ChatWidget';
import BackToTop from './components/BackToTop/BackToTop';
import CustomCursor from './components/CustomCursor/CustomCursor';

import Login from './components/Login/Login';

// Main Layout with Header/Footer
const MainLayout = () => {
  return (
    <div className="page-wrapper">
      <CustomCursor />
      <Header />
      <Outlet />
      <Footer />
      <ChatWidget />
      <BackToTop />
    </div>
  );
};

// Home Page Component
const HomePage = () => {
  return (
    <main className="page-content">
      <Hero />
      <Partners />
      <About />
      <ProblemSolution />
      <Features />
      <Services />
      <Tokenomics />
      <Roadmap />
      <Whitepaper />
      <FAQ />
    </main>
  );
};

const App = () => {
  return (
    <Routes>
      {/* Route that uses MainLayout (includes Header/Footer) */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>

      {/* Standalone Route (No Header/Footer) */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;