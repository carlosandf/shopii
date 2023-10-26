import { useContext, useState } from 'react';
import { ShoppingCartContext } from '../../context';
import { AddIcon, AddedIcon } from '../icons';
import { ProductDetail } from '../product_detail';
import { CheckoutSideMenu } from '../checkout_side_menu';

export const Card = ({ category, title, price, image, product }) => {
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart, openSidebar, setSidebarChild } = useContext(ShoppingCartContext);

  const handleAddToCart = (e) => {
    if (!isAdded) {
      e.stopPropagation();
      console.log(e.stopPropagation());
      addToCart({ product });
      setIsAdded(true);
      openSidebar();
      setSidebarChild(<CheckoutSideMenu />);
    }
  };

  const handleShowProduct = () => {
    openSidebar();
    setSidebarChild(<ProductDetail productToShow={product} />);
  };

  return (
    <article
      onClick={handleShowProduct}
      className='bg-white cursor-pointer w-full h-64 rounded-xl overflow-hidden'
    >
      <figure className='relative mb-2 w-full h-4/5 overflow-hidden flex justify-center'>
        <span className='absolute z-10 bottom-2 left-2 bg-white/70 rounded-md text-black text-sm font-light px-3 py-0.5'>
          {category}
        </span>
        <img
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
      <p className='flex justify-between gap-2'>
        <span className='tex-sm font-light overflow-hidden whitespace-nowrap text-ellipsis'>{title}</span>
        <span className='text-lg font-medium'>${price}</span>
      </p>
    </article>
  );
};
