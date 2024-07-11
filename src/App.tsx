import React from 'react';
import './App.scss';
import NavBar from 'components/nav-bar/NavBar';
import HeroSection from 'components/hero-section/HeroSection';
import OverviewSection from 'components/overview-section/OverviewSection';
import EducationSection from 'components/education-section/EducationSection';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <OverviewSection />
      <EducationSection />
    </div>
  );
}

export default App;
