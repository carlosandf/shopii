import { createContext, useState } from 'react';
import { useShoppingCart } from '../hooks/';
import { useSidebar } from '../hooks/useSidebar';
import { useProducts } from '../hooks/useProducts';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const { cartProducts, addToCart, removeToCart, clearShoppingCart } = useShoppingCart();
  const { products } = useProducts();

  const [orders, setOrders] = useState([]);

  // Show sidebar
  const {
    isSidebarOpen,
    sidebarChild,
    openSidebar,
    closeSidebar,
    setSidebarChild
  } = useSidebar();

  return (
    <ShoppingCartContext.Provider
      value={{
        orders,
        sidebarChild,
        cartProducts,
        isSidebarOpen,
        products,
        addToCart,
        setOrders,
        setSidebarChild,
        removeToCart,
        closeSidebar,
        openSidebar,
        clearShoppingCart
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
