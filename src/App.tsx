import React from 'react';
import './App.scss';
import NavBar from 'components/nav-bar/NavBar';
import HeroSection from 'components/hero-section/HeroSection';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
    </div>
  );
}

export default App;
