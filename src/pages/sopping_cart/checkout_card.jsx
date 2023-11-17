import { useLocation } from 'wouter';
import { sumListNums } from '../../utils/sumListItems';
import { useShoppingCartContext } from '../../hooks/useShoppingCartContext';

export const CheckoutCard = ({ cartProducts }) => {
  const { setOrders, clearShoppingCart } = useShoppingCartContext();
  const sumTotal = sumListNums(cartProducts.map(product => product.price));
  const [, setLocation] = useLocation();

  const handleCheckout = () => {
    if (cartProducts.length === 0) return;
    const orderToAdd = {
      products: cartProducts,
      date: new Date(),
      sumTotal
    };
    setOrders(prevState => [orderToAdd, ...prevState]);
    clearShoppingCart();
    setLocation('/orders/all');
  };

  return (
    <aside className='w-full h-fit rounded-md border bg-white border-gray-200 sticky top-24'>
      <header className="p-5 border-b border-gray-200">
        <h3 className="text-md font-semibold">Resumen de la compra</h3>
      </header>
      <section className='p-5'>
        <div className='grid gap-2 text-sm pb-5'>
          <p className='flex justify-between'>
            <span>Products</span><span>{cartProducts.length}</span>
          </p>
          <p className='flex font-semibold text-base justify-between'>
            <span>Total</span><span>$ {sumTotal}</span>
          </p>
        </div>
        <button
          onClick={handleCheckout}
          className='
          w-full bg-blue-500 p-3 border text-white font-semibold rounded-md
          hover:bg-blue-600 active:bg-blue-800  transition-colors'
        >
          Checkout
        </button>
      </section>
    </aside>
  );
};
