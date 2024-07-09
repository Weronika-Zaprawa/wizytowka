import './InteractiveCard.scss';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { fadeIn } from 'motions';

function InteractiveCard({
  index,
  title,
  icon,
}: {
  index: number;
  title: string;
  icon: string;
}) {
  return (
    <Tilt className="tilt">
      <motion.div
        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
        className="motion-div"
      >
        <div>
          {icon && <img src={icon} alt="web-development" />}
          <h3>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
}
export default InteractiveCard;
