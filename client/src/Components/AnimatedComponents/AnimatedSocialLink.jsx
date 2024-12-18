import { useCursor } from '../../context/CursorContext';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

const AnimatedSocialLink = ({ children, to }) => {
  const { cursorRef, setCursorText, setSocial } = useCursor();

  const mouseEnter = () => {
    setSocial(true);
    setCursorText(children);
    gsap.to(cursorRef.current, {
      scale: 2,
      duration: 0.3,
    });
  };

  const mouseLeave = () => {
    setSocial(false);
    setCursorText('');
    gsap.to(cursorRef.current, {
      scale: 1,
      duration: 0.3,
    });
  };

  return (
    <div
      onMouseEnter={mouseEnter}
      className='p-5 hover:opacity-0 w-max rounded-full'
      onMouseLeave={mouseLeave}>
      <Link to={to}>{children}</Link>
    </div>
  );
};

export default AnimatedSocialLink;
