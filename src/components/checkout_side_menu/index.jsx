import { useContext } from 'react';
import { CloseIcon } from '../icons';
import { ShoppingCartContext } from '../../context';
import { OrderCard } from '../order_card';
import './checkout_side_menu.css';

export const CheckoutSideMenu = () => {
  const { closeSidebar, cartProducts, removeToCart } = useContext(ShoppingCartContext);

  return (
    <aside className="p-1 top-[100%] right-0 z-50 drop-shadow-2xl overflow-hidden bg-white max-w-sm w-screen max-h-[70dvh]">
      <div className='flex justify-between p-2'>
        <span>Checkout</span>
        <button onClick={closeSidebar} className='p-[1px] rounded-full hover:bg-gray-400/40 transition-colors'>
          <CloseIcon />
        </button>
      </div>
      <section className='Checkout_menu grid gap-1 auto-rows-max overflow-y-auto max-h-[calc(70dvh-50px)] min-h-[5rem]'>
        {cartProducts.length > 0
          ? (
              cartProducts.map(({ images, title, id, price }) => (
                <OrderCard
                  key={`order_card_${id}`}
                  handleClick={() => removeToCart({ id })}
                  imageUrl={images[0]}
                  title={title}
                  price={price}
                />
              ))
            )
          : <p className='text-center font-light place-self-center'>No hay productos</p>
        }
      </section>
    </aside>
  );
};
