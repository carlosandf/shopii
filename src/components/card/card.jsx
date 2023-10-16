import { useContext, useState } from 'react';
import { ShoppingCartContext } from '../../context/';
import { AddIcon, AddedIcon } from '../icons';

export const Card = ({ category, title, price, image, product }) => {
  const [isAdded, setIsAdded] = useState(false);
  const { setCartProducts, cartProducts, openProductDetail } = useContext(ShoppingCartContext);

  const handleAddToCart = () => {
    if (!isAdded) {
      setCartProducts([...cartProducts, product]);
      setIsAdded(true);
    }
  };

  const handleShowProduct = () => openProductDetail({ product });

  return (
    <article className='bg-white cursor-pointer w-full h-64 rounded-xl overflow-hidden'>
      <figure className='relative mb-2 w-full h-4/5 overflow-hidden flex justify-center'>
        <span className='absolute z-10 bottom-2 left-2 bg-white/70 rounded-md text-black text-sm font-light px-3 py-0.5'>
          {category}
        </span>
        <img
          onClick={handleShowProduct}
          className='object-center object-cover h-full w-full hover:scale-[1.090] transition-transform ease-in-out duration-[.3s]'
          src={image}
          loading="lazy"
          alt={title}
        />
        <button
          className='absolute p-[2px] text-gray-800 top-2 right-2 grid place-content-center bg-gray-200 h-6 w-6 rounded-full'
          onClick={handleAddToCart}
        >
          {!isAdded ? <AddIcon /> : <AddedIcon />}
        </button>
      </figure>
      <p onClick={handleShowProduct} className='flex justify-between gap-2'>
        <span className='tex-sm font-light overflow-hidden whitespace-nowrap text-ellipsis'>{title}</span>
        <span className='text-lg font-medium'>${price}</span>
      </p>
    </article>
  );
};
