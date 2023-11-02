export const OrderCard = ({ image, title, price, handleClick }) => {
  return (
    <article className='grid grid-cols-[2fr_4fr] h-max overflow-hidden shadow-md rounded'>
      <figure>
        <img className='aspect-square h-full object-cover' src={image} alt={title} />
      </figure>
      <section className='flex flex-col justify-between p-2'>
        <p className='text-lg font-light'>{title}</p>
        <span className='text-xl font-bold block'>${''}{price}</span>
        <button onClick={handleClick} className='text-blue-600 w-fit self-end text-sm'>Eliminar</button>
      </section>
    </article>
  );
};
