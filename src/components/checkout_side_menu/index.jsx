import { CloseIcon } from '../icons';
import { OrderCard } from '../order_card';
import { sumListNums } from '../../utils/sumListItems';
import { useLocation } from 'wouter';
import { useShoppingCartContext } from '../../hooks/useShoppingCartContext';
import './checkout_side_menu.css';

export const CheckoutSideMenu = () => {
  const { closeSidebar, cartProducts, removeToCart, setOrders, clearShoppingCart } = useShoppingCartContext();

  const totalPrice = sumListNums(cartProducts.map(product => product.price));
  const [, setLocation] = useLocation();

  const handleCheckout = () => {
    if (cartProducts.length === 0) return;
    const orderToAdd = {
      products: cartProducts,
      date: new Date(),
      totalPrice
    };
    setOrders(prevState => [orderToAdd, ...prevState]);
    clearShoppingCart();
    closeSidebar();
    setLocation('/orders/all');
  };

  return (
    <aside className="p-1 relative top-[100%] right-0 z-50 drop-shadow-2xl overflow-hidden bg-white max-w-sm w-screen max-h-[85dvh]">
      <header className='flex justify-between p-2'>
        <span>Checkout</span>
        <button onClick={closeSidebar} className='p-[1px] rounded-full hover:bg-gray-400/40 transition-colors'>
          <CloseIcon />
        </button>
      </header>
      <section className='Checkout_menu grid gap-1 pb-1 auto-rows-max overflow-y-auto max-h-[calc(70dvh-60px)] min-h-[5rem]'>
        {cartProducts.length > 0
          ? (
              cartProducts.map(({ image, title, id, price }) => (
                <OrderCard
                  key={`checkout_${id}`}
                  handleClick={() => removeToCart({ id })}
                  image={image}
                  title={title}
                  price={price}
                />
              ))
            )
          : <p className='text-center font-light place-self-center'>No hay productos</p>
        }
      </section>
      <footer className='p-2 shadow-inner grid gap-2'>
        <p className='flex justify-between text-xl font-bold'>
          <span>Total</span>
          <span>${totalPrice}</span>
        </p>
        <button
          onClick={handleCheckout}
          className='
          w-full bg-black p-2 border border-black text-white font-semibold rounded-sm
          active:bg-white active:text-black transition-colors'
        >
          Checkout
        </button>
      </footer>
    </aside>
  );
};
