import { motion } from 'framer-motion';
import InteractiveCard from './InteractiveCard';
import './OverviewSection.scss';
import js from '../../assets/images/js.png';
import ts from '../../assets/images/ts.png';
import react from '../../assets/images/react.png';
import html from '../../assets/images/html1.png';
import css from '../../assets/images/css.png';
import scss from '../../assets/images/scss.png';
import api from '../../assets/images/api.png';
import bootstrap from '../../assets/images/bootstrap.png';
import leaflet from '../../assets/images/leaflet.png';
import formik from '../../assets/images/formik.png';
import yup from '../../assets/images/yup.png';
import figma from '../../assets/images/figma.png';
import github from '../../assets/images/github.png';
import jest from '../../assets/images/jest.png';

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
      </motion.div>
      <div className="tech-cards">
        <InteractiveCard icon={js} index={0} title="JavaScript" />
        <InteractiveCard icon={ts} index={1} title="Type Script" />
        <InteractiveCard icon={react} index={2} title="React" />
        <InteractiveCard icon={html} index={3} title="HTML" />
        <InteractiveCard icon={css} index={4} title="CSS" />
        <InteractiveCard icon={scss} index={5} title="SCSS" />
        <InteractiveCard icon={api} index={6} title="Rest API" />
        <InteractiveCard icon={bootstrap} index={7} title="Bootstrap" />
        <InteractiveCard icon={leaflet} index={8} title="Leaflet" />
        <InteractiveCard icon={formik} index={9} title="Formik" />
        <InteractiveCard icon={yup} index={10} title="Yup" />
        <InteractiveCard icon={figma} index={11} title="Figma" />
        <InteractiveCard icon={github} index={12} title="Github" />
        <InteractiveCard icon={jest} index={13} title="Jest" />
      </div>
    </div>
  );
}

export default OverviewSection;
