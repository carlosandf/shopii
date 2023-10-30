import { useContext } from 'react';
import { ShoppingCartContext } from '../../context';
import { AddIcon, AddedIcon } from '../icons';
import { ProductDetail } from '../product_detail';
import { CheckoutSideMenu } from '../checkout_side_menu';

export const Card = ({ product }) => {
  const { category, title, price, images, id } = product;
  const { addToCart, openSidebar, setSidebarChild, cartProducts } = useContext(ShoppingCartContext);

  const isAdded = cartProducts.some(cartProduct => cartProduct.id === id);

  const handleAddToCart = (e) => {
    if (!isAdded) {
      e.stopPropagation();
      addToCart({ product });
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
          {category?.name}
        </span>
        <img
          className='object-center object-cover h-full w-full hover:scale-[1.090] transition-transform ease-in-out duration-[.3s]'
          src={images[0]}
          loading="lazy"
          alt={title}
        />
        <button
          className={`
            absolute p-[2px] top-2 right-2 grid place-content-center h-6 w-6 rounded-full
            ${isAdded ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}
          `}
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
