import { motion } from 'framer-motion';
import InteractiveCard from '../overview-section/InteractiveCard';
import './ProjectSection.scss';

import wolm from '../../assets/images/wolm.png';
import lemon from '../../assets/images/lemon.png';
import calendar from '../../assets/images/calendar.png';

function OverviewSection() {
  return (
    <div className="overview-container">
      <motion.div
        className="introduction"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            type: 'spring',
            duration: 1.5,
          },
        }}
        viewport={{ once: true }}
      >
        <h4>My Work</h4>
        <h1>Projects</h1>
        <p>
          These projects demonstrate my skills and experience through real-world
          examples of my work. Each project includes a brief description, along
          with links to code repositories and live demos. They highlight my
          ability to solve complex problems, work with various technologies, and
          manage projects effectively.
        </p>
      </motion.div>
      <div className="tech-cards">
        <InteractiveCard
          icon={wolm}
          index={2}
          title="WOLM"
          description="A platform for managing the inventory of fruits and
vegetables. The system features authentication mechanisms, session
validation, API integration, and mobile version support."
        />
        <InteractiveCard
          icon={lemon}
          index={3.5}
          title="Little Lemon"
          description="A restaurant web application with table reservation and
ordering capabilities, mobile version support, and API integration."
        />
        <InteractiveCard icon={calendar} index={4.9} title="Calendar" />
      </div>
    </div>
  );
}

export default OverviewSection;
