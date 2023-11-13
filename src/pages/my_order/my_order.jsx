import { CardShoppingCart } from '../../components/card_shopping_cart';
import { useShoppingCartContext } from '../../hooks/useShoppingCartContext';

export const MyOrder = () => {
  const { cartProducts, removeToCart } = useShoppingCartContext();
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
              <aside className='w-full h-80 rounded-md border border-gray-400 sticky top-24'>

              </aside>
            </div>
          )
        : <p className='font-light'>Aún no has agregado productos al carrito</p>
      }
    </div>
  );
};
