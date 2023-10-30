import { useContext } from 'react';
import { CloseIcon } from '../icons';
import { ShoppingCartContext } from '../../context';
import './product_detail.css';

export const ProductDetail = ({ productToShow }) => {
  const { closeSidebar } = useContext(ShoppingCartContext);

  return (
    <aside className="Product-detail flex flex-col overflow-hidden overflow-y-auto bg-white max-w-xs w-screen max-h-[calc(100dvh-64px)]">
      <figure className='aspect-square relative'>
        <button onClick={closeSidebar} className='absolute right-1 top-1 p-[1px] rounded-full bg-white/60'>
          <CloseIcon />
        </button>
        <img src={productToShow.images[0]} alt={productToShow.title} />
      </figure>
      <section className='p-3'>
        <p className='flex flex-col gap-1'>
          <span className='text-2xl font-bold'>${''}{productToShow.price}</span>
          <span className='text-xl font-medium'>{productToShow.title}</span>
          <span className='text-base font-light'>{productToShow.description}</span>
        </p>
      </section>
    </aside>
  );
};
