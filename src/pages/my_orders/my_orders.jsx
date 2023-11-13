import { OrderCard } from '../../components/order_card';
import { useShoppingCartContext } from '../../hooks/useShoppingCartContext';
import { dateFormat } from '../../utils/dateFormat.js';

export const MyOrders = () => {
  const { orders } = useShoppingCartContext();
  return (
    <section>
      <header className="mb-8">
        <h3 className='text-2xl font-semibold'>My orders</h3>
      </header>
      <div className='max-w-md'>
        {
          orders.map(order => (
            <article className='grid gap-2 mb-10' key={order.date}>
              <p className='italic'>{dateFormat(order.date)}</p>
              {
                order.products.map(({ image, title, id, price }) => (
                  <OrderCard
                    key={`order_${id}`}
                    image={image}
                    title={title}
                    price={price}
                  />
                ))
              }
            </article>
          ))
        }
      </div>
    </section>
  );
};
