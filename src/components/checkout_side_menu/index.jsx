import { useContext } from 'react';
import { CloseIcon } from '../icons';
import { ShoppingCartContext } from '../../context';
import { OrderCard } from '../order_card';
import './checkout_side_menu.css';

export const CheckoutSideMenu = () => {
  const { closeSidebar, cartProducts } = useContext(ShoppingCartContext);

  return (
    <aside className="p-1 absolute top-[100%] right-0 z-50 drop-shadow-2xl overflow-hidden bg-white rounded-lg max-w-xs w-screen max-h-[70dvh]">
      <div className='flex justify-between p-2'>
        <span>Checkout</span>
        <button onClick={closeSidebar} className='p-[1px] rounded-full hover:bg-gray-400/40 transition-colors'>
          <CloseIcon />
        </button>
      </div>
      <section className='Checkout_menu grid gap-1 auto-rows-max overflow-y-auto max-h-[inherit] pb-20'>
        {cartProducts?.reverse().map(product => (
          <OrderCard key={product.id} product={product}/>
        ))}
      </section>
    </aside>
  );
};
