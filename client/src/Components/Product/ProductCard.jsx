import { useCursor } from '../../context/CursorContext';
import gsap from 'gsap';
const ProductCard = ({ product }) => {
  const { setCursorText, cursorRef, setProduct } = useCursor();
  return (
    <div
      onMouseEnter={() => {
        setProduct(true);
        setCursorText('View Product');
        gsap.to(cursorRef.current, {
          scale: 1.5,
          duration: 0.8,
          ease: 'power3.out',
        });
      }}
      onMouseLeave={() => {
        setProduct(false);
        setCursorText('');
        gsap.to(cursorRef.current, {
          scale: 1,
          duration: 0.8,
          ease: 'power3.in',
        });
      }}
      className='relative w-max bg-white overflow-hidden place-self-center'>
      <div className='w-80 h-80 border border-gray-300'>
        <img
          src={product.imageUrl}
          alt={product.name}
          className='w-full h-full object-contain'
        />
      </div>
      <div className='flex justify-between'>
        <h3 className='text-sm'>{product.name}</h3>
        <p className='text-gray-600'>{product.price}</p>
      </div>
    </div>
  );
};
export default ProductCard;
