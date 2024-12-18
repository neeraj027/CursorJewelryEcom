import { Heart, Menu, Search, ShoppingBasketIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '/logo/logo.png';
import { useEffect, useState } from 'react';
import AnimatedButton from '../../Components/AnimatedComponents/AnimatedButton';
import AnimatedLink from '../../Components/AnimatedComponents/AnimatedLink';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div
      className={`z-40 flex justify-between ${
        scrolling ? 'py-1 px-10' : 'py-5 px-52'
      } w-full fixed top-0 transition-all duration-300 text-white mix-blend-difference`}>
      <Link to={'/'} className='flex items-center w-1/3'>
        <img src={logo} className='w-max h-20 invert' alt='' />
      </Link>
      <div className='flex gap-10 justify-center items-center w-1/3 font-Montserrat'>
        <AnimatedLink>Collection</AnimatedLink>
        <AnimatedLink>Categories</AnimatedLink>
        <AnimatedLink>Shop</AnimatedLink>
        <AnimatedLink>About</AnimatedLink>
      </div>
      <div className='flex justify-end items-center gap-5 w-1/3'>
        <div>
          <AnimatedButton
            onClick={() => {
              console.log('search');
            }}>
            <Search />
          </AnimatedButton>
        </div>
        <AnimatedButton>
          <div className='relative'>
            <ShoppingBasketIcon />
            <span className='absolute -top-4 -right-4 rounded-full text-xs px-2 py-1 font-bold text-black bg-inverse-green'>
              0
            </span>
          </div>
        </AnimatedButton>
        <AnimatedButton>
          <div className='relative'>
            <Heart />
            <span className='absolute -top-4 -right-4 rounded-full text-xs px-2 py-1 font-bold text-black bg-inverse-green'>
              0
            </span>
          </div>
        </AnimatedButton>
        <AnimatedButton
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}>
          <div>
            <Menu />
          </div>
        </AnimatedButton>
      </div>
    </div>
  );
};
export default Navbar;
