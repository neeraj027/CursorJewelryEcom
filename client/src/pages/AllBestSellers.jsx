import ProductCard from '../Components/Product/ProductCard';
import img from '/images/ring1.png';
import img2 from '/images/ring2.png';
import { Link } from 'react-router-dom';

const AllBestSellers = () => {
  const products = [
    { name: '18k Hoop Earrings', price: '₹3000.00', imageUrl: img },
    { name: '18k Ring Bracelet', price: '₹4200.00', imageUrl: img2 },
    { name: '18k Custom Medal', price: '₹4800.00', imageUrl: img },
    { name: 'Abstract Ring', price: '₹2800.00', imageUrl: img2 },
    { name: '18k Custom Medal', price: '₹4800.00', imageUrl: img },
    { name: 'Abstract Ring', price: '₹2800.00', imageUrl: img2 },
  ];

  return (
    <div className=' text-black py-16 px-6'>
      <h2 className='text-5xl font-serif font-thin text-center mb-10'>
        Shop Best Sellers
      </h2>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-8'>
        {products.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
      <div className='text-white w-full flex justify-center text-center mt-12'>
        <div className='bg-custom-green text-white hover:text-custom-green border hover:border-custom-green hover:bg-white px-4 py-2'>
          <Link to={'/best-sellers'}>SHOP ALL</Link>
        </div>
      </div>
    </div>
  );
};

export default AllBestSellers;
