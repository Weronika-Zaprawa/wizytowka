import './EducationSection.scss';
// import underconstruction from '../../assets/images/underconstruction.gif';
import umcs from '../../assets/images/umcs.png';
import meta from '../../assets/images/meta.png';
import ibm from '../../assets/images/IBM.png';

function EducationSection() {
  return (
    <div className="education-modal">
      <div className="header">
        <h4>What I have learned so far</h4>
        <h1>My education</h1>
      </div>
      <div className="timeline">
        <div className="column">
          <div className="row">
            <div className="education-tile">
              GEOINFORMATICS - Master&apos;s degree
            </div>
            <div className="subtitle">Maria Curie-Skłodowska University</div>
          </div>
          <div className="circle">
            <img src={umcs} alt="UMCS logo" />
          </div>
          <div className="line" />
          <div className="spreader">
            <div className="education-tile">.</div>
            <div className="subtitle">.</div>
          </div>
        </div>

        <div className="column">
          <div className="spreader">
            <div className="education-tile">.</div>
            <div className="subtitle">.</div>
          </div>

          <div className="line" />
          <div className="row">
            <div className="education-tile">
              GEOINFORMATICS - Bachelor&apos;s degree
            </div>
            <div className="subtitle">Maria Curie-Skłodowska University</div>
          </div>
        </div>

        <div className="column">
          <div className="row">
            <div className="education-tile">
              Meta Front-End Developer Professional Certificate
            </div>
            <ul>
              <li>
                Create responsive websites using HTML to structure content, CSS
                to style visuals, and JavaScript to create interactive
                experiences.
              </li>
              <li>
                Learning the Bootstrap CSS framework for building websites and
                working with GitHub repositories and version control.
              </li>
              <li>
                Learning React as it relates to JavaScript libraries and
                frameworks.
              </li>
              <li>
                Preparing for a job interview for a programmer position,
                learning the best approaches to solving problems
              </li>
            </ul>
          </div>
          <div className="circle">
            <img src={meta} alt="UMCS logo" />
          </div>
          <div className="line" />
          <div className="spreader">
            <div className="education-tile">.</div>
            <div className="subtitle">.</div>
          </div>
        </div>

        <div className="column">
          <div className="spreader">
            <div className="education-tile">.</div>
            <div className="subtitle">.</div>
          </div>
          <div className="circle">
            <img src={ibm} alt="UMCS logo" />
          </div>
          <div className="line" />
          <div className="row">
            <div className="education-tile">
              IBM Front-End Developer Professional Certificate
            </div>
            <div className="subtitle">During</div>
            <ul>
              <li>
                Mastering the latest practical skills and tools that front-end
                developers use in their daily work
              </li>
              <li>
                Learn to apply user interface and user experience (UI/UX)
                principles and best practices; manage your code with GitHub
                repositories and branches
              </li>
              <li>
                Learn how to build websites using programming languages like
                HTML, CSS, JavaScript, and React
              </li>
              <li>
                Gaining technical experience through hands-on labs and projects
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <img src={underconstruction} alt="underconstruction" /> */}
    </div>
  );
}

export default EducationSection;
