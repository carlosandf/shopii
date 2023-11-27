import { Card } from '../../components';
import { useShoppingCartContext } from '../../hooks/useShoppingCartContext.js';

export const Home = () => {
  const { products } = useShoppingCartContext();

  return (
    <>
      <section
        id='home_product_container'
        className='grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-10 w-full justify-items-center'
      >
        {products?.map(product => (
          <Card
            key={product.id}
            product={{
              description: product.description,
              category: product.category.name,
              title: product.title,
              price: product.price,
              image: product.images[0],
              id: product.id
            }}
          />
        ))}
      </section>
    </>
  );
};
