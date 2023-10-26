import { createContext } from 'react';
import { useShoppingCart } from '../hooks/';
import { useSidebar } from '../hooks/useSidebar';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const { cartProducts, addToCart, removeToCart } = useShoppingCart();

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
        sidebarChild,
        cartProducts,
        isSidebarOpen,
        addToCart,
        setSidebarChild,
        removeToCart,
        closeSidebar,
        openSidebar
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
