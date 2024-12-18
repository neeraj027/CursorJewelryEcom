import { motion, noop } from 'motion/react';
import { Link } from 'react-router-dom';
import { useCursor } from '../../context/CursorContext';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const AnimatedLink = ({ children, to }) => {
  const { cursorRef, setCursorText } = useCursor();

  return (
    <div
      onMouseEnter={() => {
        setCursorText(children);
        gsap.to(cursorRef.current, {
          scale: 1.5,
          duration: 0.4,
        });
      }}
      onMouseLeave={() => {
        setCursorText('');
        gsap.to(cursorRef.current, {
          scale: 1,
          duration: 0.4,
        });
      }}
      //   style={{
      //     cursor: '',
      //   }}
    >
      <Link to={to} className='hover:opacity-0'>
        {children}
      </Link>
    </div>
  );
};
export default AnimatedLink;
