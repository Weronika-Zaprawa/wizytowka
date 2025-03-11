import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import './ContactSection.scss';
import Earth from 'components/model3d/Earth';

function ContactSection() {
  return (
    <div className="contact-section-wrapper">
      <motion.div
        className="introduction"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{
          x: 0,
          y: 0,
          opacity: 1,
          transition: {
            type: 'tween',
            delay: 0.2,
            duration: 1,
            ease: 'easeOut',
          },
        }}
      >
        <Element name="contact">
          <h4>Get in touch</h4>
        </Element>
        <h1>Contact</h1>
        <div className="contact-container">
          <p className="heading">Email</p>
          <p className="information">zaprawaweronika@gmail.com</p>
          <p className="heading">Phone</p>
          <p className="information">+48 537 550 709</p>
          <p className="card">
            If you like my portfolio and are looking for someone to collaborate
            with,
            <br /> please feel free to contact me.
          </p>
        </div>
      </motion.div>

      <motion.div className="animation">
        <Earth />
      </motion.div>
    </div>
  );
}

export default ContactSection;
