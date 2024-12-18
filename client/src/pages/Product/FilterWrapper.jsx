import { Outlet } from 'react-router-dom';
import Slider from '@mui/material/Slider';
import { useState } from 'react';

const FilterWrapper = () => {
  //filters start.............................
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  //filters end.............................

  return (
    <div className='pt-28 bg-white'>
      {/* <div className='h-screen w-full'></div> */}
      <div className='flex relative h-max'>
        <div className='w-3/12 h-screen flex justify-end pt-28  fixed top-0 left-0'>
          <div className=' w-2/3'>
            <h1 className='text-2xl font-medium'>Filters.</h1>
            <div>
              <Slider
                value={priceRange}
                max={100000}
                min={0}
                step={1000}
                onChange={handlePriceChange}
                valueLabelDisplay='auto'
              />
            </div>
          </div>
        </div>
        <div className='w-9/12 h-max ml-auto'>
          <Outlet />
        </div>
      </div>
      {/* <BestSellers /> */}
    </div>
  );
};

export default FilterWrapper;
