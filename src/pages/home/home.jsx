import { useEffect } from 'react';
import { Card } from '../../components/index.js';
import { useShoppingCartContext } from '../../hooks/useShoppingCartContext.js';

export const Home = ({ category = null }) => {
  const {
    products,
    searchQuery,
    allProducts,
    filterByTitle,
    setSearchQuery,
    filterByCategory
  } = useShoppingCartContext();

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    filterByTitle(e.target.value, allProducts);
  };

  useEffect(() => {
    filterByCategory(category, allProducts);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, allProducts]);

  return (
    <div className='grid gap-6 w-full'>
      <input
        className='m-auto w-full max-w-lg px-4 py-2 shadow rounded-lg outline-gray-300'
        placeholder='Search a product'
        type="text"
        value={searchQuery}
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
