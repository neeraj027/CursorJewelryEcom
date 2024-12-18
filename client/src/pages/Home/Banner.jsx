import { useEffect, useRef } from 'react';
import { useCursor } from '../../context/CursorContext';
import img from '/images/ring1.png';
import img2 from '/images/ring2.png';
import gsap from 'gsap';

const Banner = () => {
  const { handleMouseEnter, cursorRef } = useCursor();

  return (
    <div className='flex relative'>
      <div className='w-1/2 flex flex-col'>
        <div className='w-full flex flex-col items-center'>
          <div className='w-[500px]'>
            <img src={img} className='' />
          </div>
          <div className='text-center max-w-[500px]'>
            <h1 className='font-serif text-black font-thin text-7xl text-center'>
              Jewelery tells a freat story
            </h1>
          </div>
        </div>
      </div>
      <button
        onMouseEnter={() => {
          handleMouseEnter(false);
        }}
        onMouseLeave={() => {
          handleMouseEnter(true);
        }}
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-custom-green hover:bg-custom-green hover:text-white transition-all duration-300'>
        <div>Explore</div>
      </button>
      <div className='w-1/2 flex flex-col'>
        <div className='w-full flex flex-col items-center'>
          <div className='text-left max-w-[500px]'>
            <h1 className='font-serif text-black font-thin text-3xl mb-5'>
              Our Story
            </h1>
            <p className=''>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta,
              aliquid vel dignissimos libero magnam perspiciatis aliquam maxime
              porro excepturi reprehenderit nam quia perferendis architecto
              iste. Suscipit voluptate ratione repellendus voluptatem.
            </p>
          </div>
          <div className='w-[500px]'>
            <img src={img2} className='' />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
