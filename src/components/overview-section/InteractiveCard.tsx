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
        <div
        // options={{
        //   max: 45,
        //   scale: 1,
        //   speed: 300,
        // }}
        >
          {icon && (
            <img
              src={icon}
              alt="web-development"
              // className="w-16 h-16 object-contain"
            />
          )}

          <h3
          // className="text-white text-[20px] font-bold text-center"
          >
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
}
export default InteractiveCard;
