import './App.scss';
import NavBar from 'components/nav-bar/NavBar';
import HeroSection from 'components/hero-section/HeroSection';
import OverviewSection from 'components/overview-section/OverviewSection';
import EducationSection from 'components/education-section/EducationSection';
import ProjectSection from 'components/projects-section/ProjectSection';
import ContactSection from 'components/contact-section/ContactSection';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <OverviewSection />
      <EducationSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
}

export default App;
