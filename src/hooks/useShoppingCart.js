import { useState } from 'react';

export function useShoppingCart () {
  const [cartProducts, setCartProducts] = useState([]);
  const addToCart = ({ product }) => {
    setCartProducts(prevProducts => [product, ...prevProducts]);
  };

  const removeToCart = ({ id }) => {
    const index = cartProducts.findIndex(product => product.id === id);
    if (index === -1) return;
    const newArr = [...cartProducts];
    newArr.splice(index, 1);
    setCartProducts(newArr);
  };

  const clearShoppingCart = () => setCartProducts([]);

  return {
    cartProducts,
    addToCart,
    removeToCart,
    clearShoppingCart
  };
}
