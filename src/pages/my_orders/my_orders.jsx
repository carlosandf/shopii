import { Link } from 'wouter';
import { CartIcon } from '../../components/icons/index.jsx';
import { useShoppingCartContext } from '../../hooks/useShoppingCartContext';
import { dateFormat } from '../../utils/dateFormat.js';
import { sumListNums } from '../../utils/sumListItems.js';

export const MyOrders = () => {
  const { orders } = useShoppingCartContext();
  return (
    <section>
      <header className="mb-8">
        <h3 className='text-2xl font-semibold'>My orders</h3>
      </header>
      <div className=' w-[60vw]  grid gap-2'>
        {
          orders.map(order => (
            <article key={order.date}>
              <Link href={`/orders/${order.id}`}>
                <div className='flex justify-between p-5 border border-gray-300 rounded-md cursor-pointer hover:shadow-md'>
                  <section className='flex gap-4'>
                    <CartIcon />
                    <span>{order.products.length} products</span>
                  </section>
                  <section className='flex gap-4 font-bold'>
                    <span>Total:</span>
                    <span>$ {sumListNums(order.products.map(product => product.price))}</span>
                  </section>
                  <section>
                    <p className='italic'>{dateFormat(order.date)}</p>
                  </section>
                </div>
              </Link>
            </article>
          ))
        }
      </div>
    </section>
  );
};
