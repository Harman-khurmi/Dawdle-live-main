// export const fadeIn = (direction, delay) => {
//   return {
//     hidden: {
//       y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
//       x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
//     },
//     show: {
//       y: 0,
//       x: 0,
//       opacity: 1,
//       transiton: {
//         type: 'tween',
//         duration: 1.2,
//         delay: delay,
//         ease: [0.25, 0.25, 0.25, 0.75],
//       }
//     }
//   }
// }
export const fadeIn = (direction = 'up', delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0,
      x: direction === 'left' ? 20 : direction === 'right' ? -20 : 0,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: 'tween',
        duration: 1, // Increased duration for a smoother effect
        delay: delay,
        ease: [0.42, 0, 0.58, 1], // "easeInOutQuad" for a professional feel
      },
    },
  };
};
