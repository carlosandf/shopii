import { useContext } from 'react';
import { ShoppingCartContext } from '../../context/shopping_cart_context';

export const Sidebar = () => {
  const { isSidebarOpen, sidebarChild } = useContext(ShoppingCartContext);

  if (!isSidebarOpen) return null;
  return (
    <div className='absolute top-[calc(100%)] right-0 z-50 shadow-2xl border border-gray-400 rounded-xl overflow-hidden'>
      {sidebarChild}
    </div>
  );
};
