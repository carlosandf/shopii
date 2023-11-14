import { CardShoppingCart } from '../../components/card_shopping_cart';
import { useShoppingCartContext } from '../../hooks/useShoppingCartContext';
import { sumListNums } from '../../utils/sumListItems';

export const MyOrder = () => {
  const { cartProducts, removeToCart } = useShoppingCartContext();
  const sumTotal = sumListNums(cartProducts.map(product => product.price));
  return (
    <div className="w-[80vw]">
      <header className='mb-8 flex'>
        <h2 className="text-center text-2xl font-semibold">
          My Order
        </h2>
      </header>
      {cartProducts.length > 0
        ? (
            <div className="grid grid-cols-[1fr_320px] gap-8">
              <ul className='gap-2 flex flex-col'>
                {
                  cartProducts.map(({ image, title, id, price }) => (
                    <CardShoppingCart
                      {...{ image, title, price }}
                      key={id}
                      handleClick={() => removeToCart({ id })}
                    />
                  ))
                }
              </ul>
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
                    // onClick={handleCheckout}
                    className='
                    w-full bg-blue-500 p-3 border text-white font-semibold rounded-md
                    hover:bg-blue-600 active:bg-blue-800  transition-colors'
                  >
                    Checkout
                  </button>
                </section>
              </aside>
            </div>
          )
        : <p className='font-light'>Aún no has agregado productos al carrito</p>
      }
    </div>
  );
};
