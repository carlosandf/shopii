export const OrderItem = ({ image, title, price }) => {
  return (
    <li>
      <article className='flex h-28 overflow-hidden shadow-md rounded bg-white p-5 items-center justify-between border border-gray-200'>
        <section className="w-[80%] flex gap-6 items-center">
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
  );
};
