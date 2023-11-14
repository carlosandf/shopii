export const OrderCard = ({ image, title, price, handleClick }) => {
  return (
    <article className='bg-white grid grid-cols-[1fr_4fr] overflow-hidden shadow-md rounded'>
      <figure>
        <img className='aspect-square h-full object-cover' src={image} alt={title} />
      </figure>
      <section className='flex flex-col justify-between p-2'>
        <p className='text-lg font-light line-clamp-2'>{title}</p>
        <span className='text-xl font-bold block'>${price}</span>
        {handleClick && (
          <button
            onClick={handleClick}
            className='text-blue-600 w-fit self-end text-sm'
          >
            Eliminar
          </button>
        )}
      </section>
    </article>
  );
};
