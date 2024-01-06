import React from 'react';
import { Card } from '../../components/index.js';
import { useShoppingCartContext } from '../../hooks/useShoppingCartContext.js';

export const Home = () => {
  const { products } = useShoppingCartContext();

  const handleChange = (e) => {
    console.log(e.target.value)
  }

  return (
    <div className='grid gap-6'>
      <input
        className='m-auto w-full max-w-lg px-4 py-2 shadow rounded-lg outline-gray-300'
        placeholder='Search a product'
        type="text"
        onChange={handleChange}
      />
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
    </div>
  );
};
