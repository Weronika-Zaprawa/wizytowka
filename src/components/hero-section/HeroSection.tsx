import ComputersCanvas from 'components/model3d/ComputerModel';
import './HeroSection.scss';

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="wave" />
      <div style={{ height: '500px' }}>
        <ComputersCanvas />
        <div />
      </div>
    </div>
  );
}

export default HeroSection;
