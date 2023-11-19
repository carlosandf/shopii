import { useLocation } from 'wouter';
import { useShoppingCartContext } from '../../hooks/useShoppingCartContext';

export const MyOrder = () => {
  const { orders } = useShoppingCartContext();
  const [path] = useLocation();
  const orderId = path.split('/').at(2);

  const currentOrder = orders.find(order => order.id === orderId);

  return (
    <div className="w-[60vw] m-auto">
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
                    <li key={`${orderId}_${id}`}>
                      <article className='flex h-28 overflow-hidden shadow-md rounded bg-white p-5 items-center justify-between border border-gray-200'>
                        <section className="w-[60%] flex gap-6 items-center">
                          <figure className='w-[80%] max-w-[70px]'>
                            <img className='aspect-square h-full object-cover' src={image} alt={title} />
                          </figure>
                          <section className='flex flex-col justify-between'>
                            <p className='text-lg font-semibold line-clamp-1'>{title}</p>
                          </section>
                        </section>
                        <section className='w-[20%] text-end'>
                          <span className='text-xl font-semibold block'>${price}</span>
                        </section>
                      </article>
                    </li>
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
