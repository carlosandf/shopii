import { createContext, useState } from 'react';

const initialState = {
  cartProducts: [],
  setCartProducts: () => {}
};
export const ShoppingCartContext = createContext(initialState);

export const ShoppingCartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <ShoppingCartContext.Provider
      value={{
        cartProducts,
        setCartProducts
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
