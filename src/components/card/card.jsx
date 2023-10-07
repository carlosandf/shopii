export const Card = ({ category, title, price, image }) => {
  return (
    <article className='bg-white cursor-pointer w-full h-64 rounded-xl overflow-hidden'>
      <figure className='relative mb-2 w-full h-4/5 overflow-hidden flex justify-center'>
        <span
          className='absolute bottom-2 left-2 bg-white/70 rounded-md text-black text-sm font-light px-3 py-0.5'
        >
          {category}
        </span>
        <img
          className='object-center object-cover h-full w-full'
          src={image}
          loading="lazy"
          alt={title} />
        <div
          className='absolute top-2 right-2 grid place-content-center bg-gray-200 h-6 w-6 rounded-full'
        >
          +
        </div>
      </figure>
      <p className='flex justify-between gap-2'>
        <span className='tex-sm font-light overflow-hidden whitespace-nowrap text-ellipsis'>{title}</span>
        <span className='text-lg font-medium'>${price}</span>
      </p>
    </article>
  );
};
