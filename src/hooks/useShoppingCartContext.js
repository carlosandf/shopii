import { useContext } from 'react';
import { ShoppingCartContext } from '../context/shopping_cart_context.jsx';

/**
 *
 * @returns {{
 *  orders: object[],
 *  sidebarChild: ReactElement | null,
 *  cartProducts: [],
 *  products: [],
 *  isSidebarOpen: boolean,
 *  addToCart: ({ product }) => void,
 *  setOrders: () => void,
 *  setSidebarChild: () => void,
 *  removeToCart: ({ id }) => void,
 *  closeSidebar: () => void,
 *  openSidebar: () => void,
 *  clearShoppingCart: () => void
 * }}
 */
export const useShoppingCartContext = () => useContext(ShoppingCartContext);
