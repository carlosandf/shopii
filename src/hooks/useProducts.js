import { useState, useEffect } from 'react';
import { ProductsApi } from '../services/products.js';

const productsService = new ProductsApi();
export function useProducts () {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productsService.getAll()
      .then(res => setProducts([...res]));
  }, []);

  return {
    products
  };
}
