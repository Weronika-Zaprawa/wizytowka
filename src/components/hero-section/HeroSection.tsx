import ComputersCanvas from 'components/model3d/ComputerModel';
import './HeroSection.scss';

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="wave" />
      <div className="introduction-container">
        <div className="strip-container">
          <div className="ball" />
          <div className="strip" />
        </div>
        <div className="description-container">
          <div className="name-container">
            Hi, I&apos;m <span>Weronika</span>
          </div>
          <div className="self-introduction">
            Junior frontend developer, <br />
            interested in creating functional and beautiful websites.
          </div>
        </div>
      </div>
      <div className="computer">
        <ComputersCanvas />
        <div />
      </div>
    </div>
  );
}

export default HeroSection;
