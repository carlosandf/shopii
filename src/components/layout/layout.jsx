import { useContext } from 'react';
import { Navbar } from '../navbar/navbar';
import { ProductDetail } from '../product_detail/product_detail';
import { ShoppingCartContext } from '../../context';
import './layout.css';

export const Layout = ({ children }) => {
  const { isProductDetailOpen } = useContext(ShoppingCartContext);
  return (
    <>
      <header className='fixed z-20 w-full top-0 max-w-screen-2xl'>
        <Navbar />
      </header>
      <main className='mt-16 grid gap-1 place-content-center grid-cols-[auto_auto_auto] items-center p-8'>
        <div className='Layout-main col-[2/3] pt-3 rounded-s-lg'>
          {children}
        </div>
        <div>
          { isProductDetailOpen && <ProductDetail /> }
        </div>
      </main>
      <footer></footer>
    </>
  );
};
