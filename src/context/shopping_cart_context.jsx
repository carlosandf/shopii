import { createContext, useState } from 'react';

const initialState = {
  cartProducts: [],
  productToShow: {
    title: '',
    price: '',
    description: '',
    images: []
  },
  isProductDetailOpen: false,
  setCartProducts: () => {},
  openProductDetail: () => {},
  closeProductDetail: () => {}
};
export const ShoppingCartContext = createContext(initialState);

export const ShoppingCartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [productToShow, setProductToShow] = useState({
    title: '',
    price: '',
    description: '',
    images: []
  });

  const openProductDetail = ({ product }) => {
    setProductToShow({ ...product });
    setIsProductDetailOpen(true);
  };
  const closeProductDetail = () => setIsProductDetailOpen(false);

  return (
    <ShoppingCartContext.Provider
      value={{
        cartProducts,
        productToShow,
        isProductDetailOpen,
        setCartProducts,
        openProductDetail,
        closeProductDetail,
        setProductToShow
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
