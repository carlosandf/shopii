import { useState } from 'react';
export function useSidebar () {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sidebarChild, setSidebarChild] = useState(null);
  const closeSidebar = () => setIsSidebarOpen(false);
  const openSidebar = () => setIsSidebarOpen(true);

  return {
    isSidebarOpen,
    sidebarChild,
    openSidebar,
    closeSidebar,
    setSidebarChild
  };
}
