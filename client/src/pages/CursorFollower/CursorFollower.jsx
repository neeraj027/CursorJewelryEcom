import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useCursor } from '../../context/CursorContext';

const CursorFollower = ({ position, cursorRef }) => {
  const { mouseEnter, cursorText, social, product } = useCursor();

  useGSAP(() => {
    gsap.to(cursorRef.current, {
      x: position?.x,
      y: position?.y,
      duration: 1,
    });
  }, [position]);

  return (
    <div
      ref={cursorRef}
      className={`${
        mouseEnter ? '' : 'hidden'
      }  bg-custom-cursorGreen fixed pointer-events-none text-inherit ${
        cursorText !== '' && !social && !product
          ? 'w-max h-max rounded-none px-2'
          : social
          ? 'w-10 h-10 p-2 rounded-full'
          : product
          ? 'w-16 h-16 p-2 rounded-full text-xs leading-3'
          : 'w-6 h-6 rounded-full'
      } flex items-center text-wrap max-w-20 text-center justify-center mix-blend-difference transition-all ease-out
      z-50`}>
      {/* shadow-2xl border border-black */}
      {cursorText}
    </div>
  );
};

export default CursorFollower;
