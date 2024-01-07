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
      id: crypto.randomUUID(),
      totalPrice
    };
    setOrders(prevState => [orderToAdd, ...prevState]);
    clearShoppingCart();
    closeSidebar();
    setLocation('/orders/all');
  };

  return (
    <aside className="relative top-[100%] p-4 right-0 z-50 drop-shadow-2xl overflow-hidden bg-white max-w-sm w-screen max-h-[85dvh]">
      <header className='flex justify-between mb-2'>
        <span>Checkout</span>
        <button onClick={closeSidebar} className='p-[1px] rounded-full hover:bg-gray-400/40 transition-colors'>
          <CloseIcon />
        </button>
      </header>
      <section className='Checkout_menu grid gap-1 auto-rows-max overflow-y-auto max-h-[calc(70dvh-75px)] min-h-[5rem]'>
        {cartProducts.length > 0
          ? (
              cartProducts.map(({ image, title, id, price }) => (
                <div className='h-24' key={`checkout_${id}`}>
                  <OrderCard
                    handleClick={() => removeToCart({ id })}
                    image={image}
                    title={title}
                    price={price}
                  />
                </div>
              ))
            )
          : <p className='text-center font-light place-self-center'>No hay productos</p>
        }
      </section>
      <footer className='shadow-inner grid pt-4 gap-2'>
        <p className='flex justify-between text-lg font-bold'>
          <span>Total</span>
          <span>${totalPrice}</span>
        </p>
        <button
          onClick={handleCheckout}
          disabled={cartProducts.length === 0}
          className={`
            w-full bg-blue-500 p-3 border text-white font-semibold rounded-md
            hover:bg-blue-600 active:bg-blue-800 transition-colors
            disabled:cursor-no-drop disabled:bg-blue-300`
          }
        >
          Checkout
        </button>
      </footer>
    </aside>
  );
};
