import { useEffect, useState } from 'react';
import { ProductsApi } from '../../services/products.js';
import { Card } from '../../components';

const productsService = new ProductsApi();
export const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productsService.getAll()
      .then(res => setProducts([...res]));
  }, []);

  return (
    <>
      <section
        id='home_product_container'
        className='grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-10 w-full max-w-5xl justify-items-center'
      >
        {products?.map(product => (
          <Card
            key={product.id}
            category={product?.category?.name}
            title={product?.title}
            price={product?.price}
            image={product.images[0]}
            product={product}
          />
        ))}
      </section>
    </>
  );
};
