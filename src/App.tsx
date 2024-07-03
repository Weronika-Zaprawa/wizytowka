import React from 'react';
import './App.scss';
import NavBar from 'components/nav-bar/NavBar';
import HeroSection from 'components/hero-section/HeroSection';
import OverviewSection from 'components/overview-section/OverviewSection';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <OverviewSection />
    </div>
  );
}

export default App;
