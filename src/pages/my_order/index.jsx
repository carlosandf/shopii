import { useShoppingCartContext } from '../../hooks/useShoppingCartContext';
import { OrderItem } from './order_item';

export const MyOrder = ({ id: orderId }) => {
  const { orders } = useShoppingCartContext();

  console.log(orderId);

  const currentOrder = orders.find(order => order.id === orderId);

  return (
    <div className="w-full max-w-xl m-auto">
      <header className='mb-8 flex'>
        <h2 className="text-center text-2xl font-semibold">
          My Order
        </h2>
      </header>
      {currentOrder?.products.length > 0
        ? (
            <div className="w-full">
              <ul className='gap-2 flex flex-col'>
                {
                  currentOrder?.products.map(({ image, title, id, price }) => (
                    <OrderItem
                      key={`${orderId}_${id}`}
                      image={image}
                      title={title}
                      price={price}
                    />
                  ))
                }
              </ul>
            </div>
          )
        : <p className='font-light'>Aún no has agregado productos al carrito</p>
      }
    </div>
  );
};
