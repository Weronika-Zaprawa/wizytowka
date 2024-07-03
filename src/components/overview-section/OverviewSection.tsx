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
        <div className="card">Java Script</div>
        <div className="card">Type Script</div>
        <div className="card">React</div>
        <div className="card">HTML</div>
        <div className="card">CSS</div>
        <div className="card">SCSS</div>
        <div className="card">Rest API</div>
        <div className="card">Bootstrap</div>
        <div className="card">Leaflet</div>
        <div className="card">Formik</div>
        <div className="card">Yup</div>
        <div className="card">Figma</div>
        <div className="card">Github</div>
        <div className="card">Jest</div>
      </div>
    </div>
  );
}

export default OverviewSection;
