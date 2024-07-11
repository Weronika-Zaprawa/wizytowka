// export const textVariant = (delay?: number) => ({
//   hidden: {
//     y: -50,
//     opacity: 0,
//   },
//   show: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       type: 'spring',
//       duration: 1.25,
//       delay,
//     },
//   },
// });

function fadeInChangeDirectionX(direction: string) {
  if (direction === 'left') {
    return 100;
  }
  if (direction === 'right') {
    return -100;
  }
  return 0;
}

function fadeInChangeDirectionY(direction: string) {
  if (direction === 'up') {
    return 100;
  }
  if (direction === 'down') {
    return -100;
  }
  return 0;
}

export const fadeIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number,
) => ({
  initial: {
    x: fadeInChangeDirectionX(direction),
    y: fadeInChangeDirectionY(direction),
    opacity: 0,
  },
  whileInView: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
  viewport: { once: true },
});

export const zoomIn = (delay: number, duration: number) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'tween',
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

function slideInDirectionX(direction: string) {
  if (direction === 'left') {
    return '-100%';
  }
  if (direction === 'right') {
    return '100%';
  }
  return 0;
}

function slideInDirectionY(direction: string) {
  if (direction === 'up') {
    return '-100%';
  }
  if (direction === 'down') {
    return '100%';
  }
  return 0;
}

export const slideIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number,
) => ({
  hidden: {
    x: slideInDirectionX,
    y: slideInDirectionY,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

// export const staggerContainer = (staggerChildren, delayChildren) => ({
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren,
//       delayChildren: delayChildren || 0,
//     },
//   },
// });
