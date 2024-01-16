import { CloseIcon } from '../icons';
import { useShoppingCartContext } from '../../hooks/useShoppingCartContext';
import './product_detail.css';

export const ProductDetail = ({ image, title, description, price }) => {
  const { closeSidebar } = useShoppingCartContext();

  return (
    <aside className="Product-detail flex flex-col overflow-hidden overflow-y-auto bg-white max-w-xs w-screen max-h-[calc(100dvh-64px)]">
      <figure className='aspect-square relative'>
        <button onClick={closeSidebar} className='absolute right-1 top-1 p-[1px] rounded-full bg-white/60'>
          <CloseIcon />
        </button>
        <img className='aspect-square object-contain object-center' src={image} alt={title} />
      </figure>
      <section className='p-3'>
        <p className='flex flex-col gap-1'>
          <span className='text-2xl font-bold'>${''}{price}</span>
          <span className='text-xl font-medium'>{title}</span>
          <span className='text-base font-light'>{description}</span>
        </p>
      </section>
    </aside>
  );
};
