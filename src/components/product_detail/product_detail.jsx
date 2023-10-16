import { useContext } from 'react';
import { CloseIcon } from '../icons';
import { ShoppingCartContext } from '../../context';
import './product_detail.css';

export const ProductDetail = () => {
  const { closeProductDetail, productToShow } = useContext(ShoppingCartContext);

  return (
    <aside className="Product-detail flex flex-col overflow-hidden overflow-y-auto fixed top-16 right-0 z-50 drop-shadow-2xl bg-white rounded-lg max-w-xs w-screen h-[calc(100dvh-64px)]">
      <figure className='aspect-square relative'>
        <span className='cursor-pointer absolute right-1 top-1 p-[1px] rounded-full bg-white/60' onClick={closeProductDetail}>
          <CloseIcon />
        </span>
        <img src={productToShow.images[0]} alt={productToShow.title} />
      </figure>
      <section className='p-3'>
        <p className='flex flex-col gap-1'>
          <span className='text-2xl font-bold'>${productToShow.price}</span>
          <span className='text-xl font-medium'>{productToShow.title}</span>
          <span className='text-base font-light'>{productToShow.description}</span>
        </p>
      </section>
    </aside>
  );
};
