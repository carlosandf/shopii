import { useState, useEffect } from 'react';
import { ProductsApi } from '../services/products.js';

const productsService = new ProductsApi();
export function useProducts () {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);

  const filterByTitle = (query, productsBase) => {
    const filteredProducts = productsBase.filter(
      product => product.title.toLowerCase().includes(query.toLowerCase())
    );

    setProducts(filteredProducts);
  };

  const filterByCategory = (category, productsBase) => {
    if (category) {
      const filteredProducts = productsBase.filter(
        product => product.category.toLowerCase().includes(category.toLowerCase())
      );
      setProducts(filteredProducts);
      return filteredProducts;
    }

    setProducts([...allProducts]);
    return allProducts;
  };

  useEffect(() => {
    productsService.getAll()
      .then(res => {
        setAllProducts([...res]);
        setProducts([...res]);
      });
  }, []);

  return {
    products,
    allProducts,
    filterByTitle,
    filterByCategory
  };
}
