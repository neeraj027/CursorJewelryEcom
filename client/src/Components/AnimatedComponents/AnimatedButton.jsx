import { motion } from 'motion/react';
import { useCursor } from '../../context/CursorContext';
import { useRef } from 'react';
import gsap from 'gsap';

const AnimatedButton = ({ children, onClick }) => {
  const buttonRef = useRef(null);
  const { cursorRef } = useCursor();

  const mouseEnter = () => {
    gsap.to(cursorRef.current, {
      scale: 2,
      duration: 0.3,
    });
  };

  const mouseLeave = () => {
    gsap.to(cursorRef.current, {
      scale: 1,
      duration: 0.3,
    });
  };

  return (
    <motion.button
      ref={buttonRef}
      className='p-4 rounded-full'
      whileHover={{
        scale: 1.1,
        rotate: 5,
      }}
      whileTap={{
        scale: 0.95,
      }}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.2,
      }}
      // style={{
      //   cursor: 'none',
      // }}
      onClick={onClick}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}>
      {children}
    </motion.button>
  );
};

export default AnimatedButton;
