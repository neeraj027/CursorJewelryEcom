import { Outlet } from 'react-router-dom';
import AnimatedSocialLink from '../Components/AnimatedComponents/AnimatedSocialLink';
import { FaInstagram } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa6';

const HomeWrapper = () => {
  return (
    <div className='pt-28 bg-white'>
      {/* <div className='h-screen w-full'></div> */}
      <div className='flex relative'>
        <div className='w-11/12 h-max'>
          <Outlet />
        </div>
        <div className=' flex-col w-1/12 h-screen flex justify-around items-center fixed right-0 top-0'>
          <div className='flex flex-col gap-2'>
            <AnimatedSocialLink to='/shop'>
              <FaXTwitter className='w-5 h-5' />{' '}
            </AnimatedSocialLink>
            <AnimatedSocialLink to='/shop'>
              <FaInstagram className='w-5 h-5' />{' '}
            </AnimatedSocialLink>
            <AnimatedSocialLink to='/shop'>
              <FaFacebook className='w-5 h-5' />{' '}
            </AnimatedSocialLink>
          </div>
          <div className='border border-black'>hi</div>
        </div>
      </div>
      {/* <BestSellers /> */}
    </div>
  );
};
export default HomeWrapper;
