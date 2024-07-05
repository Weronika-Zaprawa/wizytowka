import InteractiveCard from './InteractiveCard';
import './OverviewSection.scss';

function OverviewSection() {
  return (
    <div className="overview-container">
      <div className="introduction">
        <h4>Introduction</h4>
        <h1>Technology stack</h1>
        <p>
          I am continually expanding my skills through active participation in
          courses and hands-on project development in React technology. My
          approach is based on gaining practical experience, and my continuously
          growing portfolio represents my determination to improve. I am ready
          to engage in a dynamic environment to effectively develop as a
          Front-End developer. Below is an overview of the technologies I work
          with.
        </p>
      </div>
      <div className="tech-cards">
        <InteractiveCard icon="" index={0} title="JavaScript" />
        <InteractiveCard icon="" index={1} title="Type Script" />
        <InteractiveCard icon="" index={2} title="React" />
        <InteractiveCard icon="" index={3} title="HTML" />
        <InteractiveCard icon="" index={4} title="CSS" />
        <InteractiveCard icon="" index={5} title="SCSS" />
        <InteractiveCard icon="" index={6} title="Rest API" />
        <InteractiveCard icon="" index={7} title="Bootstrap" />
        <InteractiveCard icon="" index={8} title="Leaflet" />
        <InteractiveCard icon="" index={9} title="Formik" />
        <InteractiveCard icon="" index={10} title="Yup" />
        <InteractiveCard icon="" index={11} title="Figma" />
        <InteractiveCard icon="" index={12} title="Github" />
        <InteractiveCard icon="" index={13} title="Jest" />
      </div>
    </div>
  );
}

export default OverviewSection;
