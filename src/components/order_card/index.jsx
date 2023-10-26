export const OrderCard = ({ product }) => {
  return (
    <article className='grid grid-cols-[1fr_2fr] h-max overflow-hidden gap-2 shadow-md rounded'>
      <figure>
        <img className='aspect-square' src={product.images[0]} alt={product.title} />
      </figure>
      <section>
        <span className='text-xl font-medium'>{product.title}</span>
        <span className='text-2xl font-bold'>${''}{product.price}</span>
      </section>
    </article>
  );
};
