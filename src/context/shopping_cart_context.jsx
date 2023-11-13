import { createContext, useState } from 'react';
import { useShoppingCart } from '../hooks/';
import { useSidebar } from '../hooks/useSidebar';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const { cartProducts, addToCart, removeToCart, clearShoppingCart } = useShoppingCart();

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
