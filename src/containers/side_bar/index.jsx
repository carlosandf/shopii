import { useShoppingCartContext } from '../../hooks/useShoppingCartContext';

export const Sidebar = () => {
  const { isSidebarOpen, sidebarChild } = useShoppingCartContext();

  if (!isSidebarOpen) return null;
  return (
    <div className='absolute top-[calc(100%)] right-0 z-50 shadow-2xl border border-gray-200 rounded-md overflow-hidden'>
      {sidebarChild}
    </div>
  );
};
