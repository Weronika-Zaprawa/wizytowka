import './InteractiveCard.scss';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { fadeIn } from 'motions';

function InteractiveCard({
  index,
  title,
  icon,
  description,
}: {
  index: number;
  title: string;
  icon: string;
  description?: string;
}) {
  const { initial, viewport, whileInView } = fadeIn(
    'right',
    'spring',
    index * 0.5,
    0.75,
  );
  return (
    <Tilt className="tilt">
      <motion.div
        initial={initial}
        viewport={viewport}
        whileInView={whileInView}
        className="motion-div"
      >
        <div>
          {icon && (
            <img
              // eslint-disable-next-line prefer-template
              className={'normal ' + (description?.length ? ' wide' : '')}
              src={icon}
              alt="web-development"
            />
          )}
          <h3>{title}</h3>
          {description && <p>{description}</p>}
        </div>
      </motion.div>
    </Tilt>
  );
}
export default InteractiveCard;
