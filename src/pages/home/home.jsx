import { useEffect, useState } from 'react';
import { Card } from '../../components/index.js';
import { useShoppingCartContext } from '../../hooks/useShoppingCartContext.js';

export const Home = ({ category = null }) => {
  const [currentProducts, setCurrentProducts] = useState([]);
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
    filterByTitle(e.target.value, currentProducts);
  };

  useEffect(() => {
    const filterdProducts = filterByCategory(category, allProducts);
    setCurrentProducts([...filterdProducts]);

    return () => {
      setSearchQuery('');
    };
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
      {
        products.length < 1
          ? <p className='text-center'>No Products Found :(</p>
          : (
              <section
                id='home_product_container'
                className='grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-10 w-full justify-items-center'
              >
                {products?.map(product => (
                  <Card
                    key={product.id}
                    product={{
                      description: product.description,
                      category: product.category,
                      title: product.title,
                      price: product.price,
                      image: product.image,
                      id: product.id
                    }}
                  />
                ))}
              </section>
            )
      }
    </div>
  );
};
