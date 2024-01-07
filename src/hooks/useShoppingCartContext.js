import { useContext } from 'react';
import { ShoppingCartContext } from '../context/shopping_cart_context.jsx';

/**
 *
 * @returns {{
 *  orders: object[],
 *  sidebarChild: ReactElement | null,
 *  cartProducts: [],
 *  products: [],
 *  allProducts: [],
 *  isSidebarOpen: boolean,
 *  searchQuery: string,
 *  addToCart: ({ product }) => void,
 *  setOrders: () => void,
 *  setSidebarChild: () => void,
 *  removeToCart: ({ id }) => void,
 *  closeSidebar: () => void,
 *  openSidebar: () => void,
 *  clearShoppingCart: () => void,
 *  setSearchQuery: (query: string) => void,
 *  filterByTitle: (query: string) => void
 *  filterByCategory: (category: string) => void
 * }}
 */
export const useShoppingCartContext = () => useContext(ShoppingCartContext);
